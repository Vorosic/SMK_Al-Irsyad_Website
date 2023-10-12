const body = document.querySelector("body");
const navbar = document.querySelector("nav");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
openBtn.onclick = ()=>{
  navbar.classList.add("show");
  openBtn.classList.add("hide");
  body.classList.add("hidden");
}

closeBtn.onclick = ()=>{
  navbar.classList.remove("show");
  openBtn.classList.remove("hide");
  body.classList.remove("hidden");
}
window.onscroll = ()=> {
  this.scrollY > 20 ? navbar.classList.add("stick") : navbar.classList.remove("stick");
}