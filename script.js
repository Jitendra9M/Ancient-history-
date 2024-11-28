// JavaScript to handle section switching
document.querySelectorAll('nav ul li a').forEach(menuItem => {
    menuItem.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent page reload
        
        // Get the target section ID from the data attribute
        const targetSection = menuItem.getAttribute('data-section');
        
        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the target section
        document.getElementById(targetSection).classList.add('active');
    });
});

// Show the first section by default
document.getElementById('intro').classList.add('active')