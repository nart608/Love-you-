document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.querySelector('.envelope-wrapper');

    envelopeWrapper.addEventListener('click', () => {
        envelopeWrapper.classList.toggle('open');
    });
});

