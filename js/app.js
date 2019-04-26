let navbarList = document.getElementById('js-list');
let navbarBurger = document.getElementById('js-burger');

let dropdown = () => {
  navbarBurger.addEventListener('click', () => {
    navbarList.classList.toggle('active');
  })
}

dropdown();
