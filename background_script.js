const background = document.querySelector('.background');

for (let i = 0; i < 200; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.style.top = Math.random() * 100 + '%';
    square.style.left = Math.random() * 100 + '%';

    const size = Math.random() * 15 + 5;
    square.style.width = size + 'px';
    square.style.height = size + 'px';
    square.style.animationDelay = Math.random() * 10 + 's';

    background.appendChild(square);
}