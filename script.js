const likeBtn = Array.from(document.querySelectorAll(".like-btn"));
const minusBtn = Array.from(document.querySelectorAll(".qt-minus"));
const plusBtn = Array.from(document.querySelectorAll(".qt-plus"));
const quantity = Array.from(document.querySelectorAll(".qt"));
const price = Array.from(document.querySelectorAll(".u-price"));
const removeBtn = Array.from(document.querySelectorAll(".remove"));
const totalPrice = Array.from(document.querySelectorAll(".total-price"));
const product = Array.from(document.querySelectorAll(".product"))

function changeHeart(el){
    if (el.target.src !=="https://image.flaticon.com/icons/svg/833/833472.svg")
    {
        el.target.src ="https://image.flaticon.com/icons/svg/833/833472.svg"
    }
    else{el.target.src = " https://image.flaticon.com/icons/svg/833/833300.svg"}
}
function increment(el) {
  el.target.previousElementSibling.innerText =
    Number(el.target.previousElementSibling.innerText) + 1;
  updateTotal();
}
function updateTotal() {
  let total = 0;
  for (let i = 0; i < quantity.length; i++) {
    total = total + quantity[i].innerText * price[i].innerText;
  }
  totalPrice[0].innerText = total;
}
function decrement(el) {
  if (Number(el.target.nextElementSibling.innerText) < 1) {
    el.target.nextElementSibling.innerText = 0;
    return;
  } else {
    el.target.nextElementSibling.innerText =
      Number(el.target.nextElementSibling.innerText) - 1;
  }
  updateTotal();
}

function removeElement(el , index) {

  el.target.parentElement.parentElement.parentElement.remove();
  quantity[index].innerText = 0;
  updateTotal();
}



  
for (let i = 0; i < likeBtn.length; i++) {

  likeBtn[i].addEventListener("click", changeHeart);


  plusBtn[i].addEventListener("click", increment);


  minusBtn[i].addEventListener("click", decrement);


  removeBtn[i].addEventListener("click", function(element){
    removeElement(element , i)
  });
  }


