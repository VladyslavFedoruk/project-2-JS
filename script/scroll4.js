let button4 = document.querySelector('#buttonScroll-4');
let sectionTwo4 = document.querySelector('.postFirst-address');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button4 && sectionTwo4) {
    button4.addEventListener('click', () => {
        scrollTo(sectionTwo4);
    })
}