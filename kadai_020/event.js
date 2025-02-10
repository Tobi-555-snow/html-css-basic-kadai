const pushBtn = document.getElementById("btn");
console.log(pushBtn);

const textChange = document.getElementById("text");
console.log(textChange);

pushBtn.addEventListener("click", () => {
  textChange.textContent = "ボタンをクリックしました";
});
