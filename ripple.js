let rippleBtn = document.querySelectorAll(".btn");
rippleBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const ripple = document.createElement("span");
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    ripple.classList.add("ripple-circle");
    e.target.append(ripple);
    setTimeout(() => {
      e.target.removeChild(ripple);
    }, 1000);
  });
});
