const productImages = document.querySelectorAll('.product-images img');
const productimageSlide = document.querySelector('.image-slider');

let activeImageSlide = 0;

productImages.forEach((item, i) => {
  item.addEventListener('click', () => {
    productImages[activeImageSlide].classList.remove('active');
    item.classList.add('active');
    productimageSlide.style.backgroundImage = `url('${item.src}')`;
    activeImageSlide = i;
  })
})

// toggle size buttons

const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
  item.addEventListener('click', () => {
    sizeBtns[checkedBtn].classList.remove('check');
    item.classList.add('check');
    checkedBtn = i;
  })
})