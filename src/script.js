let box1 = document.querySelector(".box-1");
let box2 = document.querySelector(".box-2");
let box3 = document.querySelector(".box-3");

displayBoxText(box1);
displayBoxText(box2);
displayBoxText(box3);

function displayBoxText(box) {
  box.addEventListener("click", () => {
    alert(box.textContent);
  });
}
