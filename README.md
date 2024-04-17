<!DOCTYPE html>
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
            font-family: 'Pacifico', cursive; /* Different font */
            display: inline;
            overflow: hidden;
            white-space: nowrap;
            border-right: .15em solid transparent; /* Transparent border */
            animation: typing 2s steps(30, end) forwards, blink-caret .5s step-end infinite alternate;
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
            color: #f39c12; /* Yellow */
        }

        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }

        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: transparent; background-color: transparent; } /* Transparent background */
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
        <p>Hey there! 👋 I'm Aryan Roy, a multifaceted <span id="dynamic-text" class="typing"></span> <br>
            When I'm not diving into the world of <span id="dynamic-text2" class="typing"></span> <br>You might find me belting out tunes as I sing or strumming on my guitar, letting music be my escape.<br>
            Dance? Oh, it's not just a hobby; it's a way to groove through life's rhythm!<br>
            But wait, there's more! Beyond the realms of <span id="dynamic-text3" class="typing"></span> <br>I've got a flair for comedy.<br>
            With a quick wit and a knack for timing, I love to bring laughter to any room I enter.<br>
            Whether it's through a clever joke or a witty observation, I believe in the power of humor to brighten anyone's day.<br>
            So, if you're ever in need of a <span id="dynamic-text4" class="typing"></span> <br>With a musical soul, a dancer with a comedic edge, or just someone to jam with, you know where to find me!<br>
            Let's make some magic happen, one line of code, one chord, and one laugh at a time. 🚀✨</p>
    </section>

    <section id="projects">
        <h2>Projects</h2>
        <div class="project">
            <h3>Epsilon-X</h3>
            <p>A low-cost versatile robust small ship which can be customised into many uses...for eg. water depth measurement, water quality testing etc.</p>
            
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
            var text1 = document.getElementById('dynamic-text');
            var words1 = ['code      ', 'song      ', 'joke      '];
            var index1 = 0;

            function animateText1() {
                if (index1 >= words1.length) {
                    index1 = 0;
                }
                var word1 = words1[index1];
                var i1 = 0;
                var interval1 = setInterval(function() {
                    text1.textContent = word1.substring(0, i1);
                    i1++;
                    if (i1 > word1.length) {
                        clearInterval(interval1);
                        setTimeout(eraseText1, 1000);
                    }
                }, 50); // Faster typing speed
                index1++;
            }

            function eraseText1() {
                var word1 = text1.textContent;
                var i1 = word1.length;
                var interval1 = setInterval(function() {
                    text1.textContent = word1.substring(0, i1);
                    i1--;
                    if (i1 === 0) {
                        clearInterval(interval1);
                        setTimeout(animateText1, 500);
                    }
                }, 50); // Faster erasing speed
            }

            animateText1();

            var text2 = document.getElementById('dynamic-text2');
            var words2 = ['coder     ', 'guitarist ', 'comedian  '];
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
                }, 50); // Faster typing speed
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
                }, 50); // Faster erasing speed
            }

            animateText2();

            var text3 = document.getElementById('dynamic-text3');
            var words3 = ['technology', 'music     ', 'comedy    '];
            var index3 = 0;

            function animateText3() {
                if (index3 >= words3.length) {
                    index3 = 0;
                }
                var word3 = words3[index3];
                var i3 = 0;
                var interval3 = setInterval(function() {
                    text3.textContent = word3.substring(0, i3);
                    i3++;
                    if (i3 > word3.length) {
                        clearInterval(interval3);
                        setTimeout(eraseText3, 1000);
                    }
                }, 50); // Faster typing speed
                index3++;
            }

            function eraseText3() {
                var word3 = text3.textContent;
                var i3 = word3.length;
                var interval3 = setInterval(function() {
                    text3.textContent = word3.substring(0, i3);
                    i3--;
                    if (i3 === 0) {
                        clearInterval(interval3);
                        setTimeout(animateText3, 500);
                    }
                }, 50); // Faster erasing speed
            }

            animateText3();

            var text4 = document.getElementById('dynamic-text4');
            var words4 = ['coder     ', 'guitarist ', 'comedian  '];
            var index4 = 0;

            function animateText4() {
                if (index4 >= words4.length) {
                    index4 = 0;
                }
                var word4 = words4[index4];
                var i4 = 0;
                var interval4 = setInterval(function() {
                    text4.textContent = word4.substring(0, i4);
                    i4++;
                    if (i4 > word4.length) {
                        clearInterval(interval4);
                        setTimeout(eraseText4, 1000);
                    }
                }, 50); // Faster typing speed
                index4++;
            }

            function eraseText4() {
                var word4 = text4.textContent;
                var i4 = word4.length;
                var interval4 = setInterval(function() {
                    text4.textContent = word4.substring(0, i4);
                    i4--;
                    if (i4 === 0) {
                        clearInterval(interval4);
                        setTimeout(animateText4, 500);
                    }
                }, 50); // Faster erasing speed
            }

            animateText4();
        });
    </script>
</body>
</html>
