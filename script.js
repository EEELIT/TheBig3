const background = document.querySelector('.background');

for (let i = 0; i < 200; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    circle.style.top = Math.random() * 100 + '%';
    circle.style.left = Math.random() * 100 + '%';

    const size = Math.random() * 15 + 5;
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';
    circle.style.animationDelay = Math.random() * 10 + 's';

    const colors = ['#B22234', 'wheat', '#002868'];
    circle.style.backgroundColor = colors[Math.floor(Math.random() * 3)];

    background.appendChild(circle);
}