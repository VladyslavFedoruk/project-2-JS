let button2 = document.querySelector('#buttonScroll-2');
let sectionTwo2 = document.querySelector('.postFirst-address');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button2 && sectionTwo2) {
    button2.addEventListener('click', () => {
        scrollTo(sectionTwo2);
    })
}