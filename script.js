// покраска первой карточки
const recolorFirstCardButton = document.getElementById("recolor-first-card-button");
const firstCatalogCard = document.querySelector(".product-card");
const warmBeigColor ="#dcd0c0";

recolorFirstCardButton.addEventListener("click", () => {
  firstCatalogCard.style.backgroundColor = warmBeigColor;
})

// покраска всех карточек

const catalogCards = document.querySelectorAll(".product-card"); 
const recolorAllCardButton = document.getElementById("recolor-all-card-button");
const softOliveColor ="#a3b18a";

recolorAllCardButton.addEventListener("click", () => {
  catalogCards.forEach(
    card =>card.style.backgroundColor = softOliveColor
  )
})

// переход на страницу Google

const googleOpenButton = document.getElementById("open-google-button");
googleOpenButton.addEventListener("click",openGoogle);

function openGoogle() {
  const answer = confirm("вы действительно хотите перейти на сайт Google?")
console .log(answer);
if (answer === true) {
  window.open("https://google.com");
  } else{
  console .log("пользователь отменил переход на сайт")
  }
}

// вывод текста в консоль при наведений мышки на заголовок

const productCardHeadline =document.querySelector(".product-card__headline");
productCardHeadline.addEventListener("mouseover", () => {
  console.log(productCardHeadline.textContent);
});

// перекрась меня

const repaintMeButton = document.getElementById("repaint-me-button");
repaintMeButton.addEventListener("click", () => {
  repaintMeButton.classList.toggle("active");
})





