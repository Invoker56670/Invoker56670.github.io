<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aryan Roy- Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        .typing {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: .15em solid orange;
            animation: typing 2s steps(30, end), blink-caret .5s step-end infinite alternate;
        }

        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }

        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: orange; }
        }
    </style>
</head>
<body>
    <header>
        <h1>Aryan Roy</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="about">
        <h2>About Me</h2>
        <p>Hey there! 👋 I'm Aryan Roy, a multifaceted university student with a knack for <span id="dynamic-text" class="typing"></span>!<br>
            When I'm not diving into the world of algorithms and code, you might find me belting out tunes as I sing or strumming on my guitar, letting music be my escape.<br>
            Dance? Oh, it's not just a hobby; it's a way to groove through life's rhythm!<br>
            But wait, there's more! Beyond the realms of technology and melody, I've got a flair for comedy.<br>
            With a quick wit and a knack for timing, I love to bring laughter to any room I enter.<br>
            Whether it's through a clever joke or a witty observation, I believe in the power of humor to brighten anyone's day.<br>
            So, if you're ever in need of a <span id="dynamic-text2" class="typing"></span> with a musical soul, a dancer with a comedic edge, or just someone to jam with, you know where to find me!<br>
            Let's make some magic happen, one line of code, one chord, and one laugh at a time. 🚀✨</p>
    </section>

    <section id="projects">
        <h2>Projects</h2>
        <div class="project">
            <h3>Project 1</h3>
            <p>Description of Project 1...</p>
            <a href="#">View Project</a>
        </div>
        <div class="project">
            <h3>Project 2</h3>
            <p>Description of Project 2...</p>
            <a href="#">View Project</a>
        </div>
        <!-- Add more projects as needed -->
    </section>

    <section id="contact">
        <h2>Contact Me</h2>
        <ul>
            <li>Email: <a href="mailto:aryanroy56670@gmail.com">aryanroy56670@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/aryan-roy-699342225/">Aryan Roy</a></li>
            <li>Twitter: <a href="https://twitter.com/YourTwitterHandle">@YourTwitterHandle</a></li>
        </ul>
    </section>

    <footer>
        <p>&copy; 2024 Aryan Roy</p>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var text = document.getElementById('dynamic-text');
            var words = ['coder', 'doctor', 'comedian'];
            var index = 0;

            function animateText() {
                if (index >= words.length) {
                    index = 0;
                }
                var word = words[index];
                var i = 0;
                var interval = setInterval(function() {
                    text.textContent = word.substring(0, i);
                    i++;
                    if (i > word.length) {
                        clearInterval(interval);
                        setTimeout(eraseText, 1000);
                    }
                }, 200);
                index++;
            }

            function eraseText() {
                var word = text.textContent;
                var i = word.length;
                var interval = setInterval(function() {
                    text.textContent = word.substring(0, i);
                    i--;
                    if (i === 0) {
                        clearInterval(interval);
                        setTimeout(animateText, 500);
                    }
                }, 100);
            }

            animateText();

            var text2 = document.getElementById('dynamic-text2');
            var words2 = ['coder', 'singer', 'comedian'];
            var index2 = 0;

            function animateText2() {
                if (index2 >= words2.length) {
                    index2 = 0;
                }
                var word2 = words2[index2];
                var i2 = 0;
                var interval2 = setInterval(function() {
                    text2.textContent = word2.substring(0, i2);
                    i2++;
                    if (i2 > word2.length) {
                        clearInterval(interval2);
                        setTimeout(eraseText2, 1000);
                    }
                }, 200);
                index2++;
            }

            function eraseText2() {
                var word2 = text2.textContent;
                var i2 = word2.length;
                var interval2 = setInterval(function() {
                    text2.textContent = word2.substring(0, i2);
                    i2--;
                    if (i2 === 0) {
                        clearInterval(interval2);
                        setTimeout(animateText2, 500);
                    }
                }, 100);
            }

            animateText2();
        });
    </script>
</body>
</html>
