// script.js
const header = document.querySelector('header');


 const images = [
  'url("../img/bg/bg-hero.jpg")',
  'url("../img/bg/bg-hero2.jpg")',
  'url("../img/bg/bg-hero3.jpg")'
]; // Массив с путями к изображениям
let currentIndex = 0;
const slideInterval = 5000; // Интервал смены изображений в миллисекундах (5 секунд)



function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length;
  header.style.backgroundImage = images[currentIndex];
}

// Устанавливаем начальное изображение и запускаем слайдер
header.style.backgroundImage = images[currentIndex];
setInterval(changeBackground, slideInterval);

let btn = document.querySelector('.hp-btn')

btn.addEventListener('click', () => {
    for(let i = 0; i < 10; i++) {
      confirm('?')
    }
})

 


