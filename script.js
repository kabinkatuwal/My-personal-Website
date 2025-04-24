document.addEventListener('DOMContentLoaded', function() {
    //This function will always update the current year. in footer.
    const year = new Date().getFullYear();
    const yearElement = document.querySelector('#current-year');
    if (yearElement) {
        yearElement.textContent = year;
    }
    //This select the active navigation link
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        if (currentPage === '' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
    //This add the hover effect animation to cheat iteam
    const cheatItems = document.querySelectorAll('.cheat-item');
    cheatItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
            item.style.boxShadow = '';
        });
    });
});
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}