let button = document.querySelector('#buttonScroll-1');
let sectionTwo = document.querySelector('.postFirst-address');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button && sectionTwo) {
    button.addEventListener('click', () => {
        scrollTo(sectionTwo);
    })
}