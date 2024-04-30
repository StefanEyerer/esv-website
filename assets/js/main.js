window.addEventListener('load', () => {
    const mainNav = document.querySelector("#main-nav");
    const menuBtn = document.querySelector("#menu-btn");
    
    menuBtn.addEventListener('click', () => {
        if (mainNav.getAttribute('data-menu-open') === 'true') {
            mainNav.setAttribute('data-menu-open', 'false');
            menuBtn.setAttribute('data-menu-open', 'false');
        } else {
            mainNav.setAttribute('data-menu-open', 'true');
            menuBtn.setAttribute('data-menu-open', 'true');
        }
    });
});
