const header = document.querySelector('header');
const logo = document.querySelector('#logo')
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 350 ) {
        header.style.backgroundColor = '#fff';
    }
    else {
        header.style.backgroundColor = 'transparent';
    }
});

window.addEventListener('scroll', (e) => {
  logo.style.transform = `rotateY(${window.pageYOffset * 0.5}deg)`;
});