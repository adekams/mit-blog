
const classToggle = () => {
    const navs = document.querySelectorAll('.aside-items')

    navs.forEach(nav => nav.classList.toggle('nav-toggleShow'));
}

document.querySelector('.nav-toggle').addEventListener('click', classToggle);
