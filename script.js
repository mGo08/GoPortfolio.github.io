const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const paragraphs = document.querySelectorAll(".section_paragraph");

document.addEventListener("scroll", function () {
    toggleVisibility(nav);
    toggleVisibility(menu);
    paragraphs.forEach(paragraph => toggleVisibility(paragraph));
});

function toggleVisibility(element) {
    const isVisible = isInView(element);
    element.classList.toggle(`${element.className.split(' ')[0]}--hidden`, !isVisible);
    if (element.classList.contains("section_paragraph")) {
        element.classList.toggle("section_paragraph--visible", isVisible);
    }
}

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150);
}
