const startButton = document.getElementById('startButton');
startButton.addEventListener('click', function(event) {
    event.preventDefault();
    const rect = startButton.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    startButton.appendChild(ripple);
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'page2.html';
    }, 500);
    setTimeout(() => {
        ripple.remove();
    }, 600);
});