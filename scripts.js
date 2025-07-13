document.addEventListener("click", function (e) {
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  document.body.appendChild(ripple);

  const size = 100;
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = e.pageX - size / 2 + "px";
  ripple.style.top = e.pageY - size / 2 + "px";

  setTimeout(() => {
    ripple.remove();
  }, 600); // Match animation time
});

// Dark Mode Toggle
const toggleBtn = document.getElementById('toggleMode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});