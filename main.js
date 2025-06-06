const burger = document.querySelector("#burgerBtn");
const mobileMenu= document.querySelector("#mobMenu");

burger.addEventListener("click", ()=>{
  mobileMenu.classList.toggle("hidden");
});


