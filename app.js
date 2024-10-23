document.addEventListener('DOMContentLoaded', () => {
    const headerWrapper = document.getElementById('header');
    const footerContent = document.getElementById('footer');
    const navbarButton = document.getElementById('navbarbutton');
    const navbarWrapper = document.getElementById('navbar-wrapper');

    const date = new Date();
    const yearNow = date.getFullYear();
    const nav = true;
    let navMenuButtonClick = 0;

    // NAVBAR
    document.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            headerWrapper.classList.add('header-active');
        } else {
            headerWrapper.classList.remove('header-active');
        }
    });

    if (navbarWrapper.classList.contains('active')) {
        navbarWrapper.classList.remove('active');
    }

    navbarButton.addEventListener('click', () => {
        navMenuButtonClick++;

        if (navMenuButtonClick % 2 === 1) {
            if (navbarWrapper.classList.contains('inactive')) {
                navbarWrapper.classList.replace('inactive', 'active');
            } else {
                navbarWrapper.classList.add('active');
            }

            document.body.style.overflow = 'hidden';
        } else {
            navbarWrapper.classList.replace('active', 'inactive');
            setTimeout(() => {
                navbarWrapper.classList.remove('inactive');
            }, 500);
            document.body.style.overflow = 'auto';
        }
    });

    // FOOTER
    footerContent.textContent = `All Rights Reserved ${yearNow}`;
});