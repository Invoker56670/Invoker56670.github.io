import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const Typewriter = ({ lines }) => {
    const [displayedText, setDisplayedText] = useState(lines.map(() => ""));
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView || currentLineIndex >= lines.length) return;

        let charIndex = 0;
        const currentLine = lines[currentLineIndex];

        const interval = setInterval(() => {
            if (charIndex <= currentLine.length) {
                setDisplayedText(prev => {
                    const newText = [...prev];
                    newText[currentLineIndex] = currentLine.slice(0, charIndex);
                    return newText;
                });
                charIndex++;
            } else {
                clearInterval(interval);
                setCurrentLineIndex(prev => prev + 1);
            }
        }, 30); // Typing speed

        return () => clearInterval(interval);
    }, [currentLineIndex, lines, isInView]);

    return (
        <ul className="card-description" ref={ref}>
            {displayedText.map((text, index) => {
                // Cursor logic:
                // Show cursor if this is the line currently being typed.
                // OR if it's the last line and we are done typing (optional, to keep a blinking cursor at end)
                const isTyping = index === currentLineIndex;
                const isLastAndDone = index === lines.length - 1 && currentLineIndex >= lines.length;
                const showCursor = isTyping || isLastAndDone;

                return (
                    <li key={index}>
                        {text}
                        {showCursor && <span className="typing-cursor">_</span>}
                    </li>
                );
            })}
        </ul>
    );
};

export default Typewriter;
