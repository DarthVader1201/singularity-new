document.addEventListener('DOMContentLoaded', () => {
    const scrollerWrapper = document.querySelector('.scroller-wrapper');
    const scroller = document.querySelector('.upcoming-events-scroller');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Check if all the necessary elements exist to avoid errors
    if (scroller && prevBtn && nextBtn && scrollerWrapper) {
        
        // --- Infinite Loop Logic ---
        // 1. Clone all original event cards
        const scrollerContent = Array.from(scroller.children);
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            // 2. Append clones to the end of the scroller
            scroller.appendChild(duplicatedItem);
        });

        let scrollInterval;

        // Function to start a smooth, continuous scroll
        function startScrolling() {
            stopScrolling(); // Ensure no multiple intervals are running
            scrollInterval = setInterval(() => {
                scroller.scrollBy({ left: 1, behavior: 'auto' }); // Scrolls 1 pixel at a time
            }, 25); // Adjust this value to change speed (lower is faster)
        }

        // Function to stop the scroll
        function stopScrolling() {
            clearInterval(scrollInterval);
        }

        // The core of the infinite loop
        scroller.addEventListener('scroll', () => {
            // scroller.scrollWidth / 2 is the total width of the original set of cards
            // If the scroll position has passed the original set...
            if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
                // ...silently jump back to the beginning.
                scroller.scrollLeft = 0;
            }
        });
        // --- End of Infinite Loop Logic ---


        // --- User Interaction Logic ---
        // Manual scrolling with buttons
        nextBtn.addEventListener('click', () => {
             const cardWidth = scroller.querySelector('.event-card').offsetWidth;
             scroller.scrollBy({ left: cardWidth + 24, behavior: 'smooth' }); // 24px = 1.5rem gap
        });
        prevBtn.addEventListener('click', () => {
             const cardWidth = scroller.querySelector('.event-card').offsetWidth;
             scroller.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
        });

        // Pause auto-scroll on mouse hover, resume on mouse leave
        scrollerWrapper.addEventListener('mouseenter', stopScrolling);
        scrollerWrapper.addEventListener('mouseleave', startScrolling);

        // Start the infinite scroll when the page loads
        startScrolling();
    }
});

