// Load Lottie Animation

lottie.loadAnimation({
  container: document.getElementById('lottie'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/animations/popcon-fly.json'
});
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinksLeft");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}


// Load Lottie Animation for button
const lottieBtn = document.getElementById('btnLottie');
if (lottieBtn) {
  const animation = lottie.loadAnimation({
    container: lottieBtn,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/animations/hero-lottie.json' // your lottie json path
  });

  const btnWrapper = document.querySelector('.lottie-btn-wrapper');
  const lottieHover = document.querySelector('.lottie-hover'); // Select the lottie-hover element

  btnWrapper.addEventListener('mouseenter', () => {
    lottieHover.style.opacity = 1; // Set opacity to 1 on mouseenter
    animation.stop();
    animation.play();
  });

  btnWrapper.addEventListener('mouseleave', () => {
    lottieHover.style.opacity = 0; // Set opacity to 0 on mouseleave
  });
}



// vanila animation
const icons = document.querySelectorAll('.popcorn-icon');

icons.forEach(icon => {
  const left = Math.random() * 100; // horizontal position
  const delay = Math.random() * 5; // random delay
  const duration = 6 + Math.random() * 5; // fall speed
  const size = 30 + Math.random() * 30; // icon size

  icon.style.left = `${left}%`;
  icon.style.width = `${size}px`;
  icon.style.animationDuration = `${duration}s`;
  icon.style.animationDelay = `${delay}s`;
});

// video play banner
function openVideo() {
  const modal = document.getElementById("videoModal");
  const player = document.getElementById("youtubePlayer");

  // Your video URL
  const videoURL = "https://www.youtube.com/embed/To4f-ODZmIE?autoplay=1&rel=0";

  player.src = videoURL;
  modal.style.display = "flex";
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const player = document.getElementById("youtubePlayer");

  // Stop the video
  player.src = "";
  modal.style.display = "none";
}
//header scroll
let scrollTimeout;

window.addEventListener('scroll', function () {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, 50); // Adjust delay if needed
});


// carousal about

const carousel = document.getElementById("carousel");

  // Auto Slide
  let scrollAmount = 0;
  const itemWidth = () => carousel.querySelector(".carousel-item").offsetWidth + 16;

  function autoSlide() {
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth - 50) {
      scrollAmount = 0;
    } else {
      scrollAmount += itemWidth();
    }
    carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }

  const autoSlideInterval = setInterval(autoSlide, 6000);

  // Pause auto-slide when user interacts
  let isDragging = false, startX, scrollLeft;

  carousel.addEventListener("mousedown", e => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    clearInterval(autoSlideInterval);
  });

  carousel.addEventListener("mouseleave", () => isDragging = false);
  carousel.addEventListener("mouseup", () => {
    isDragging = false;
    setTimeout(() => setInterval(autoSlide, 3000), 3000);
  });

  carousel.addEventListener("mousemove", e => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Touch support
  carousel.addEventListener("touchstart", e => {
    isDragging = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    clearInterval(autoSlideInterval);
  });

  carousel.addEventListener("touchend", () => {
    isDragging = false;
    setTimeout(() => setInterval(autoSlide, 3000), 3000);
  });

  carousel.addEventListener("touchmove", e => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });