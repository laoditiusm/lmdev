// Get the button
const backToTopButton = document.getElementById('backToTop');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show button after scrolling down 300px
        backToTopButton.classList.add('show');
        backToTopButton.classList.remove('hide');
    } else {
        backToTopButton.classList.add('hide');
        backToTopButton.classList.remove('show');
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
