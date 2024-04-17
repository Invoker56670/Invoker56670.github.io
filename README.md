
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aryan Roy- Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            color: #e6e6e6; /* Light grey */
            padding: 20px;
            margin: 0;
            background-color: #000; /* Full black */
        }

        h1, h2, h3 {
            color: #ffa500; /* Orange */
        }

        p {
            color: #3498db; /* Blue */
            line-height: 1.5;
        }

        .typing {
            font-family: 'Pacifico', cursive;
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: .15em solid orange; /* Orange border */
            width: 140px; /* Adjust this width to fit the longest word */
            animation: blink-caret .5s step-end infinite alternate;
        }

        #dynamic-text2 {
            color: #9b59b6; /* Purple */
        }

        #dynamic-text3 {
            color: #27ae60; /* Green */
        }

        #dynamic-text4 {
            color: #e74c3c; /* Red */
        }

        #dynamic-text {
            color: #fafa05; /* Yellow */
        }

        #projects h3 {
            color: #05faf2; /* Cyan */
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
        <p>Hey there! 👋 I'm Aryan Roy, a multifaceted <span id="dynamic-text" class="typing"></span><br>
            When I'm not diving into the world of <span id="dynamic-text2" class="typing"></span><br>
            You might find me belting out tunes as I sing or strumming on my guitar, letting music be my escape.<br>
            Dance? Oh, it's not just a hobby; it's a way to groove through life's rhythm!<br>
            But wait, there's more! Beyond the realms of <span id="dynamic-text3" class="typing"></span><br>
            I've got a flair for comedy.<br>
            With a quick wit and a knack for timing, I love to bring laughter to any room I enter.<br>
            Whether it's through a clever joke or a witty observation, I believe in the power of humor to brighten anyone's day.<br>
            So, if you're ever in need of a <span id="dynamic-text4" class="typing"></span><br>
            With a musical soul, a dancer with a comedic edge, or just someone to jam with, you know where to find me!<br>
            Let's make some magic happen, one line of code, one chord, and one laugh at a time. 🚀✨</p>
    </section>

    <section id="projects">
        <h2>Projects</h2>
        <div class="project">
            <h3>Epsilon-X</h3>
            <p>A low-cost versatile robust small ship which can be customized into many uses...for eg. water depth measurement, water quality testing etc.</p>
        </div>
        <div class="project">
            <h3>Algorythms</h3>
            <p>An app to help organize and take appointments from doctors conveniently in a hassle-free way</p>
        </div>
        <!-- Add more projects as needed -->
    </section>

    <section id="contact">
        <h2>Contact Me</h2>
        <ul>
            <li>Email: <a href="mailto:aryanroy56670@gmail.com">aryanroy56670@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/aryan-roy-699342225/">Aryan Roy</a></li>
            <li>Twitter: <a href="https://twitter.com/Invoker_di_grt">@Invoker_di_grt</a></li>
        </ul>
    </section>

    <footer>
        <p>&copy; 2024 Aryan Roy</p>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            function typeAndErase(elementId, words, cycleDelay = 500) {
                let elem = document.getElementById(elementId);
                let index = 0;
                let typingSpeed = 50;
                let erasingSpeed = 50;
                let typingDelay = 1000;

                function type() {
                    let word = words[index].split("");
                    let typeInterval = setInterval(function() {
                        if (word.length > 0) {
                            elem.textContent += word.shift();
                        } else {
                            clearInterval(typeInterval);
                            setTimeout(erase, typingDelay);
                        }
                    }, typingSpeed);
                }

                function erase() {
                    let word = elem.textContent;
                    let eraseInterval = setInterval(function() {
                        if (word.length > 0) {
                            word = word.substring(0, word.length - 1);
                            elem.textContent = word;
                        } else {
                            clearInterval(eraseInterval);
                            index = (index + 1) % words.length;
                            setTimeout(type, cycleDelay);
                        }
                    }, erasingSpeed);
                }

                type();
            }

            typeAndErase('dynamic-text', ['code&nbsp;&nbsp;&nbsp;&nbsp;', 'song&nbsp;&nbsp;&nbsp;&nbsp;', 'joke&nbsp;&nbsp;&nbsp;&nbsp;']);
            typeAndErase('dynamic-text2', ['coder&nbsp;&nbsp;&nbsp;&nbsp;', 'guitarist&nbsp;', 'comedian&nbsp;&nbsp;']);
            typeAndErase('dynamic-text3', ['technology', 'music&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', 'comedy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;']);
            typeAndErase('dynamic-text4', ['entertainer', 'musician&nbsp;&nbsp;&nbsp;&nbsp;', 'comedian&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;']);
        });
    </script>
</body>
</html>
