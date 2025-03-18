<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Book Animation</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #74ebd5, #9face6);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            overflow-x: hidden;
        }

        .container {
            text-align: center;
            perspective: 1000px;
        }

        h1 {
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            font-size: 42px;
            margin-bottom: 10px;
            animation: float 3s ease-in-out infinite;
        }

        .subtitle {
            color: rgba(255, 255, 255, 0.8);
            font-size: 18px;
            margin-bottom: 40px;
        }

        .book-container {
            width: 200px;
            height: 300px;
            position: relative;
            margin: 0 auto 50px;
            transform-style: preserve-3d;
            transition: transform 1s ease;
            cursor: pointer;
        }

        .book-container:hover {
            transform: rotateY(-30deg) rotateX(5deg);
        }

        .book {
            position: absolute;
            width: 200px;
            height: 300px;
            transform-style: preserve-3d;
        }

        .book-cover {
            position: absolute;
            width: 200px;
            height: 300px;
            background: linear-gradient(45deg, #ff3d00, #ff9e80);
            border-radius: 5px 15px 15px 5px;
            box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            backface-visibility: hidden;
            transform-origin: left;
            transition: transform 1.5s ease;
            padding: 20px;
            box-sizing: border-box;
            color: white;
            text-align: center;
        }

        .book-cover h2 {
            font-size: 24px;
            margin-bottom: 10px;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .book-cover-icon {
            font-size: 50px;
            margin-bottom: 20px;
        }

        .book-page {
            position: absolute;
            width: 190px;
            height: 290px;
            background-color: #fff;
            border-radius: 2px 10px 10px 2px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            transform: translateZ(-5px);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            box-sizing: border-box;
            font-size: 18px;
            color: #333;
            line-height: 1.5;
            overflow: hidden;
        }

        .book-side {
            position: absolute;
            width: 10px;
            height: 300px;
            background: linear-gradient(to right, #d35400, #e67e22);
            transform: rotateY(90deg) translateZ(100px);
            transform-origin: center;
        }

        .book-back {
            position: absolute;
            width: 200px;
            height: 300px;
            background: #e74c3c;
            transform: translateZ(-10px);
            border-radius: 15px 5px 5px 15px;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
        }

        .opened .book-cover {
            transform: rotateY(-160deg);
        }

        .message-container {
            opacity: 0;
            transform: scale(0);
            transition: all 0.5s ease;
            margin-top: 30px;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            max-width: 600px;
        }

        .visible {
            opacity: 1;
            transform: scale(1);
        }

        .message-content {
            font-size: 22px;
            color: #333;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
            position: relative;
        }

        .message-content::before,
        .message-content::after {
            content: '"';
            font-size: 36px;
            color: #e74c3c;
            position: relative;
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-15px);
            }
        }

        .glow {
            animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
            from {
                text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #e60073, 0 0 20px #e60073;
            }
            to {
                text-shadow: 0 0 10px #fff, 0 0 20px #ff4da6, 0 0 30px #ff4da6, 0 0 40px #ff4da6;
            }
        }

        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #f39c12;
            opacity: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Magic Book</h1>
        <p class="subtitle">Click to open the book of wisdom</p>
        
        <div class="book-container" onclick="toggleBook()">
            <div class="book">
                <div class="book-side"></div>
                <div class="book-cover">
                    <div class="book-cover-icon">📚</div>
                    <h2>Book of Wisdom</h2>
                </div>
                <div class="book-page">
                    <p>Tap to reveal the magic inside...</p>
                </div>
                <div class="book-back"></div>
            </div>
        </div>
        
        <div class="message-container" id="message">
            <p class="message-content">By reading books, you unlock the door to a thousand lives you might never have lived!</p>
        </div>
    </div>

    <script>
        let isOpen = false;
        const bookContainer = document.querySelector('.book-container');
        const message = document.getElementById('message');
        
        function toggleBook() {
            if (!isOpen) {
                bookContainer.classList.add('opened');
                setTimeout(() => {
                    message.classList.add('visible');
                    createConfetti();
                    document.querySelector('h1').classList.add('glow');
                }, 1000);
            } else {
                bookContainer.classList.remove('opened');
                message.classList.remove('visible');
                document.querySelector('h1').classList.remove('glow');
            }
            isOpen = !isOpen;
        }
        
        function createConfetti() {
            const container = document.querySelector('.container');
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                
                // Random position
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = Math.random() * 100 + 'vh';
                
                // Random color
                const colors = ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6'];
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                // Random size
                const size = Math.random() * 10 + 5;
                confetti.style.width = size + 'px';
                confetti.style.height = size + 'px';
                
                // Random rotation
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                
                // Add to container
                document.body.appendChild(confetti);
                
                // Animate
                setTimeout(() => {
                    confetti.style.opacity = 1;
                    confetti.style.transition = 'all 1s ease';
                    confetti.style.transform = `translateY(${-100 + Math.random() * -100}px) rotate(${Math.random() * 360}deg)`;
                    
                    setTimeout(() => {
                        confetti.style.opacity = 0;
                        setTimeout(() => {
                            confetti.remove();
                        }, 1000);
                    }, 2000);
                }, Math.random() * 500);
            }
        }
        
        // Add 3D effect on mouse move
        document.addEventListener('mousemove', (e) => {
            if (!isOpen) {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                bookContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            }
        });
        
        // Reset position when mouse leaves
        document.addEventListener('mouseleave', () => {
            if (!isOpen) {
                bookContainer.style.transform = 'rotateY(0deg) rotateX(0deg)';
            }
        });
    </script>
</body>
</html>
