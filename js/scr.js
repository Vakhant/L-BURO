const slider = document.querySelector('.main_slider');
const prevButton = document.querySelector('#MainSliderPrev');
const nextButton = document.querySelector('#MainSliderNext');
const slides = Array.from(slider.querySelectorAll('.main_slide'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
      console.log(slide);
      if (index === slideIndex) {
      slide.classList.add('chosen');
    } else {
      slide.classList.remove('chosen');
    }
  });
}

// Инициализация слайдера
updateSlider();

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // код для мобильных устройств
  } else {
    // код для обычных устройств
}