const generateBtn = document.querySelector(".generate-btn");
const colorCode = document.querySelector(".color-code");
const colorCard = document.querySelector(".color-card");
const copyBtn = document.querySelector(".copy");


generateBtn.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 255)
  let green = Math.floor(Math.random() * 255)
  let blue = Math.floor(Math.random() * 255)
  colorCode.innerHTML = `rgb(${red}, ${green}, ${blue})`;
  colorCard.style.backgroundColor = `rgb(${red} , ${green},${blue})`

});

copyBtn.addEventListener("click", () => {
  let copiedText = colorCode.textContent;
  navigator.clipboard.writeText(copiedText)
  .then(() => {
    alert("Copied")
  }).catch((error) => {
    alert("Failed to copy" + error)
  })
});
