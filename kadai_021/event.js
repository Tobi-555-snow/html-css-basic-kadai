const btn = document.getElementById("button");
console.log("btn");

const text = document.getElementById("textClickButton");
console.log("text");

btn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
