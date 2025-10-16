// Wait for the entire page to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get the dropdown element and all the gallery items from the page
    const filterDropdown = document.getElementById('category-filter');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Add an event listener that runs a function whenever the dropdown's value changes
    filterDropdown.addEventListener('change', () => {
        const selectedCategory = filterDropdown.value;

        // Loop through each item in the gallery
        galleryItems.forEach(item => {
            // Get the category of the current item from its 'data-category' attribute
            const itemCategory = item.dataset.category;

            // Check if the item should be visible
            // An item is visible if 'All' is selected, OR if its category matches the selected one
            if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                item.style.display = 'block'; // Show the item
            } else {
                item.style.display = 'none'; // Hide the item
            }
        });
    });
});
