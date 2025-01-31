const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const headerprojects = document.querySelector('.headtxt');
const containers = document.querySelectorAll('.container'); // Targeting '.container' now
const paragraphs = document.querySelectorAll('.section_paragraph');

document.addEventListener("scroll", function () {
    const shouldHide = window.scrollY > 50;

    toggleVisibility(nav, shouldHide);
    toggleVisibility(menu, shouldHide);
    toggleVisibility(headerprojects, shouldHide);

    containers.forEach(container => {
        const isVisible = isInView(container);
        container.classList.toggle("container--visible", isVisible);  // Toggling visibility for .container
    });

    paragraphs.forEach(paragraph => {
        const isVisible = isInView(paragraph);
        paragraph.classList.toggle("section_paragraph--visible", isVisible);
    });
});

function toggleVisibility(element, shouldHide) {
    if (element) {
        element.classList.toggle(`${element.classList[0]}--hidden`, shouldHide);
    }
}

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight - 100 && rect.bottom > 0;
}
