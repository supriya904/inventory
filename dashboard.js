// Sidebar Toggle for Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.nav-links li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Search Functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', function(e) {
    // Add search functionality here
    console.log('Searching for:', e.target.value);
});

// Notifications
const notificationBell = document.querySelector('.notifications');
notificationBell.addEventListener('click', function() {
    // Add notification functionality here
    console.log('Notifications clicked');
});

// Responsive Design Handlers
function handleResize() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (window.innerWidth <= 768) {
        sidebar.classList.add('mobile');
        mainContent.classList.add('mobile');
    } else {
        sidebar.classList.remove('mobile');
        mainContent.classList.remove('mobile');
    }
}

// Listen for window resize
window.addEventListener('resize', handleResize);
// Initial check
handleResize();
