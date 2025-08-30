document.addEventListener('DOMContentLoaded', function() {
    const cardStack = document.querySelector('.card-stack');
    let cards = Array.from(cardStack.querySelectorAll('.card'));
    
    function updateCardPositions() {
        cards.forEach((card, index) => {
            card.style.zIndex = cards.length - index;
            let rotation = (index * 2 - 5);
            if (index === 0) { rotation = 0; }
            card.style.transform = `translateY(${index * -5}px) rotate(${rotation}deg)`;
        });
    }

    cardStack.addEventListener('click', () => {
        if (cards.length > 0) {
            let topCard = cards[0];
            
            // ใช้แอนิเมชันแบบเด้งไปทางขวาของเดิมที่ทำงานได้
            topCard.style.transform = 'translateX(150%) rotate(30deg)';

            setTimeout(() => {
                cardStack.appendChild(topCard);
                topCard.style.transform = '';
                cards = Array.from(cardStack.querySelectorAll('.card'));
                updateCardPositions();
            }, 500);
        }
    });

    updateCardPositions();
});