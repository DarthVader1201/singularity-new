document.addEventListener('DOMContentLoaded', () => {
    const scroller = document.querySelector('.upcoming-events-scroller');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Check if all elements exist to prevent errors
    if (scroller && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            // Scroll right by the width of one card plus the gap
            const scrollAmount = scroller.querySelector('.event-card').offsetWidth + 24; // 24 is 1.5rem gap
            scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            // Scroll left by the width of one card plus the gap
            const scrollAmount = scroller.querySelector('.event-card').offsetWidth + 24;
            scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }
});
