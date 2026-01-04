import React, { useState, useEffect } from 'react';
import '../styles/index.css';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true); // Player is X
    const [winner, setWinner] = useState(null);
    const [status, setStatus] = useState("Your Turn (X)");

    // Winning logic
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    // Impossible AI (Minimax)
    const minimax = (squares, depth, isMaximizing) => {
        const result = calculateWinner(squares);
        if (result === 'O') return 10 - depth;
        if (result === 'X') return depth - 10;
        if (!squares.includes(null)) return 0;

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (squares[i] === null) {
                    squares[i] = 'O';
                    let score = minimax(squares, depth + 1, false);
                    squares[i] = null;
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
                if (squares[i] === null) {
                    squares[i] = 'X';
                    let score = minimax(squares, depth + 1, true);
                    squares[i] = null;
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    };

    const makeAIMove = (currentBoard) => {
        // 75% chance to play optimally, 25% chance to blunder
        const isOptimal = Math.random() < 0.75;

        if (!isOptimal) {
            // Pick a random available move
            const available = currentBoard.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
            if (available.length > 0) {
                const randomMove = available[Math.floor(Math.random() * available.length)];
                return randomMove;
            }
        }

        let bestScore = -Infinity;
        let move = -1;

        // Optimization: If empty center, take it (saves recursion depth)
        if (currentBoard[4] === null) return 4;

        for (let i = 0; i < 9; i++) {
            if (currentBoard[i] === null) {
                currentBoard[i] = 'O';
                let score = minimax(currentBoard, 0, false);
                currentBoard[i] = null;
                if (score > bestScore) {
                    bestScore = score;
                    move = i;
                }
            }
        }
        return move;
    };

    useEffect(() => {
        if (!isXNext && !winner && board.includes(null)) {
            setStatus("AI Thinking...");
            setTimeout(() => {
                const nextBoard = [...board];
                const move = makeAIMove(nextBoard);
                if (move !== -1) {
                    nextBoard[move] = 'O';
                    setBoard(nextBoard);
                    setIsXNext(true);

                    const win = calculateWinner(nextBoard);
                    if (win) {
                        setWinner(win);
                        setStatus("AI Wins! (Obv)");
                    } else if (!nextBoard.includes(null)) {
                        setWinner('Draw');
                        setStatus("It's a Draw!");
                    } else {
                        setStatus("Your Turn (X)");
                    }
                }
            }, 600); // Artificial delay for realism
        }
    }, [isXNext, winner, board]);

    const handleClick = (i) => {
        if (winner || board[i] || !isXNext) return;

        const nextBoard = [...board];
        nextBoard[i] = 'X';
        setBoard(nextBoard);

        const win = calculateWinner(nextBoard);
        if (win) {
            setWinner(win);
            setStatus("You Win? (Impossible!)");
            // Trigger Confetti
            import('canvas-confetti').then((confetti) => {
                confetti.default({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            });
        } else if (!nextBoard.includes(null)) {
            setWinner('Draw');
            setStatus("It's a Draw!");
        } else {
            setIsXNext(false);
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
        setStatus("Your Turn (X)");
    };

    return (
        <div className="tictactoe-container">
            <h3 className="game-status">{status}</h3>
            <div className="game-grid">
                {board.map((cell, i) => (
                    <button
                        key={i}
                        className={`game-cell ${cell}`}
                        onClick={() => handleClick(i)}
                    >
                        {cell}
                    </button>
                ))}
            </div>
            {(winner || !board.includes(null)) && (
                <button className="reset-btn" onClick={resetGame}>Try Again</button>
            )}
        </div>
    );
};

export default TicTacToe;
