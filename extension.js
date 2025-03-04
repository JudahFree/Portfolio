const header = document.getElementById('header');
const offcanvasBody = document.getElementById('offcanvas-body');
const toggleButton = document.getElementById('toggle-button');
const offcanvas = document.getElementById('offcanvas');

const clone = header.cloneNode(true);
offcanvasBody.appendChild(clone);

toggleButton.addEventListener('click', () => {
    offcanvas.classList.add('show');
});

document.querySelector('.btn-close').addEventListener('click', () => {
    offcanvas.classList.remove('show');
});

document.addEventListener('click', (e) => {
    if (e.target !== offcanvas && e.target !== toggleButton && !offcanvas.contains(e.target)) {
        offcanvas.classList.remove('show');
    }
});
