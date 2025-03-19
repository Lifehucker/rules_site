document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page');
    const links = document.querySelectorAll('nav a');

    // Функция для переключения страниц
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
    }

    links.forEach(link => {
        link.addEventListener('click', switchPage);
    });
});