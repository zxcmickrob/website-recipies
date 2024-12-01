window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('scrollToTopButton').style.display = 'block';
    } else {
        document.getElementById('scrollToTopButton').style.display = 'none';
    }
  }
  
  document.getElementById('scrollToTopButton').addEventListener('click', function() {
    scrollToTop();
  });
  
  function scrollToTop() {
    const scrollStep = -window.scrollY / 15;
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
  }

  document.addEventListener('scroll', function() {
    const plates = document.querySelectorAll('.gallery__item');
    const scrollPosition = window.scrollY;

    plates.forEach(function(plate, index) {
        const rotation = scrollPosition * (index + 1) * 0.07; 
        plate.style.transform = `rotate(${rotation}deg)`;
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide(n) {
    currentSlide = (currentSlide + n + totalSlides) % totalSlides;
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
}