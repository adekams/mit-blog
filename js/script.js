
const classToggle = () => {
    const nav = document.querySelector('.aside-items')

    nav.classList.toggle('nav-toggleShow');
}

document.querySelector('.nav-toggle').addEventListener('click', classToggle);


