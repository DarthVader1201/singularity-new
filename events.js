document.addEventListener('DOMContentLoaded', () => {
    const scrollerWrapper = document.querySelector('.scroller-wrapper');
    const scroller = document.querySelector('.upcoming-events-scroller');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Check if all the necessary elements exist on the page
    if (scroller && prevBtn && nextBtn && scrollerWrapper) {
        let autoScrollInterval;

        // Function to scroll to the next event card
        const scrollNext = () => {
            const cardWidth = scroller.querySelector('.event-card').offsetWidth;
            const scrollAmount = cardWidth + 24; // 24 is for the 1.5rem gap

            // If we are at the end, scroll back to the beginning smoothly
            // The +1 is a buffer for potential decimal values in element widths
            if (scroller.scrollLeft + scroller.clientWidth + 1 >= scroller.scrollWidth) {
                scroller.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        };

        // Function to start the automatic scrolling
        const startAutoScroll = () => {
            // Clear any existing interval to prevent speeding up
            clearInterval(autoScrollInterval);
            autoScrollInterval = setInterval(scrollNext, 3000); // Change 3000ms (3 seconds) to adjust speed
        };

        // Function to stop the automatic scrolling
        const stopAutoScroll = () => {
            clearInterval(autoScrollInterval);
        };
        
        // Manual scrolling with buttons
        nextBtn.addEventListener('click', scrollNext);

        prevBtn.addEventListener('click', () => {
            const cardWidth = scroller.querySelector('.event-card').offsetWidth;
            const scrollAmount = cardWidth + 24;
            scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        // Pause auto-scroll on mouse hover, resume on mouse leave
        scrollerWrapper.addEventListener('mouseenter', stopAutoScroll);
        scrollerWrapper.addEventListener('mouseleave', startAutoScroll);

        // Start the auto-scroll when the page loads
        startAutoScroll();
    }
});

