document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.birthday-card');

    card.addEventListener('click', () => {
        card.classList.toggle('open');
    });
});

