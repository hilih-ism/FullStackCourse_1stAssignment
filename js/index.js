window.onload = function() {
  const texts = [ "Computer Scientist", "UI/UX designer", "Front-end developer" ];
  typeWriter(texts);
};

function typeWriter(texts) {
  const span = document.getElementById("typewriter");
  span.textContent = "";

  let currentTextIndex = 0;
  let currentCharIndex = 0;
  let start = null;

  function update(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    if (progress >= 200) {
      span.textContent += texts[currentTextIndex].charAt(currentCharIndex);
      currentCharIndex++;
      start = timestamp;
    }
    if (currentCharIndex < texts[currentTextIndex].length) {
      requestAnimationFrame(update);
    } else {
      currentCharIndex = 0;
      currentTextIndex++;
      if (currentTextIndex >= texts.length) {
        currentTextIndex = 0;
      }
      span.textContent = "";
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}
