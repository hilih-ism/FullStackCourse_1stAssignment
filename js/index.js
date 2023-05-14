const typewriter = document.getElementById("typewriter");
const text = typewriter.innerText;
let index = 0;

typewriter.innerText = "";

function type() {
  if (index < text.length) {
    typewriter.innerText += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

type();
