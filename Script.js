const text = "Hi, I'm Priyanshu Yadav";
let i = 0;

function typingEffect() {
  const typing = document.getElementById("typing");

  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(typingEffect, 70);
  }
}

function blinkCursor() {
  const typing = document.getElementById("typing");
  typing.classList.toggle("cursor");
}

window.onload = () => {
  typingEffect();
  setInterval(blinkCursor, 500);
};
