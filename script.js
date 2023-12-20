const openbtn = document.getElementsByClassName("ri-menu-3-fill")[0];
const closebtn = document.getElementsByClassName("ri-close-fill")[0];
const mobilenav = document.getElementsByClassName("nav-mobile")[0];

openbtn.addEventListener("click", () => {
  console.log("click open button")
  mobilenav.style.display="block";
})
closebtn.addEventListener("click", () => {
  console.log("click close button")
  mobilenav.style.display="none";
})