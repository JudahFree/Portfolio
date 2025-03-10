document.addEventListener('DOMContentLoaded', () => {
    const offcanvas = document.querySelector('.offcanvas-lg');
    const navLinks = document.querySelectorAll('.nav-link');
    
    offcanvas.addEventListener('show.bs.offcanvas', () => {
        document.body.classList.add('offcanvas-active');
    });
    
    offcanvas.addEventListener('hide.bs.offcanvas', () => {
        document.body.classList.remove('offcanvas-active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
            if (bsOffcanvas) bsOffcanvas.hide();
        });
    });
});