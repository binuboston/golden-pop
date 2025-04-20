// Load Lottie Animation

lottie.loadAnimation({
  container: document.getElementById('lottie'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/animations/popcon-fly.json'
});
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

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



