const text = "blackhole";
let index = 0;
const typingEl = document.getElementById("typing");

function type() {
  if (index < text.length) {
    typingEl.textContent += text.charAt(index);
    index++;
    setTimeout(type, 150);
  }
}

window.onload = type;
