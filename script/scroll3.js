let button3 = document.querySelector('#buttonScroll-3');
let sectionTwo3 = document.querySelector('.postFirst-address');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button3 && sectionTwo3) {
    button3.addEventListener('click', () => {
        scrollTo(sectionTwo3);
    })
}