  // HAMBURGER MENU

let navbarList = document.getElementById('js-list');
let navbarBurger = document.getElementById('js-burger');

let dropdown = () => {
  navbarBurger.addEventListener('click', () => {
    navbarList.classList.toggle('active');
  })
}

dropdown();

  // SLIDER

let images = document.querySelectorAll('.slide'),
    arrowLeft = document.getElementById('arrow-left'),
    arrowRight = document.getElementById('arrow-right'),
    current = 0;

console.log(images);

// Clear all images
function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
}

// Start slider
function startSlide() {
  reset();
  images[0].style.display = 'block';
}

//Show previous image
function slideLeft() {
  reset();
  images[current - 1].style.display = 'block';
  current--;
}

//Show next image
function slideRight() {
  reset();
  images[current + 1].style.display = 'block';
  current++;
}

//Left arrow click
arrowLeft.addEventListener('click', () => {
  if (current === 0) {
    current = images.length;
  }
  slideLeft();
});

//Right arrow click
arrowRight.addEventListener('click', () => {
  if (current === images.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
