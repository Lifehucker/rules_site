document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page');
    const links = document.querySelectorAll('nav a, .footer-links a');
    const loginBtn = document.querySelector('.profile-btn:not(:disabled)');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            alert('Тут пока ничего нет');
        });
    }

    function switchPage(event) {
        event.preventDefault();
        const targetPage = event.target.getAttribute('data-page');

        pages.forEach(page => {
            if (page.id === targetPage) {
                page.classList.add('active');
                setTimeout(() => {
                    page.style.opacity = 1;
                }, 10);
            } else {
                page.style.opacity = 0;
                setTimeout(() => {
                    page.classList.remove('active');
                }, 500);
            }
        });


        window.scrollTo(0, 0);
    }

    links.forEach(link => {
        link.addEventListener('click', switchPage);
    });
});



