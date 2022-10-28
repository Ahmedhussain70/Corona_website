let btn = document.getElementById("btn-up");
let nav = document.getElementById("navbar");
// let links = document.querySelectorAll(".nav-link");
let openbtn = document.querySelectorAll(".button-card");
// let collaps = document.querySelectorAll(".collapsible");
let mkm = document.querySelectorAll(".mkm");

window.onscroll = function () {
  if (scrollY >= 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }

  if (scrollY >= 20) {
    nav.style.backgroundColor = "white";
  } else if (scrollY == 0) {
    nav.style.backgroundColor = "";
  }
};
//   var current = "";
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (pageYOffset >= sectionTop ) {
//       current = section.getAttribute("id");
//     }
//   });

//   links.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
// };

btn.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// if (links.length) {
//   links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//       links.forEach((link) => {
//           link.classList.remove('active');
//       });
//       // e.preventDefault();
//       link.classList.add('active');
//     });
//   });
// }
// }

// const sections = document.querySelectorAll("div[id]");

// // Add an event listener listening for scroll
// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {

//   // Get current scroll position
//   let scrollY = window.pageYOffset;

//   // Now we loop through sections to get height, top and ID values for each
//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     divid = current.getAttribute("id");

//     /*
//     - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
//     - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
//     */
//     if (
//       scrollY > sectionTop &&
//       scrollY <= sectionTop + sectionHeight
//     ){
//       document.querySelector(".navbar a[href*=" + divid + "]").classList.add("active");
//     } else {
//       document.querySelector(".navbar a[href*=" + divid + "]").classList.remove("active");
//     }
//   });
// }

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// mkm.onclick = function(){
//   if (coll.style.display === "block"){
//     coll.style.display = "none";
//   } else {
//     coll.style.display = "block";
//   }
// }

let acordionicon = Array.from(document.querySelectorAll("i.fa-plus"));
let acordionbutton = Array.from(
  document.querySelectorAll("button.fs-5.border-0")
);
console.log(acordionicon);
for (let i = 0; i < acordionbutton.length; i++) {
  acordionbutton[i].addEventListener("click", convert);
}
function convert(e) {
  let index = acordionbutton.indexOf(e.target);
  for (let i = 0; i < acordionbutton.length; i++) {
    if (i == index) {
      continue;
    }
    acordionicon[i].classList.replace("fa-minus", "fa-plus");
  }

  if (acordionicon[index].classList[1] == "fa-plus") {
    acordionicon[index].classList.replace("fa-plus", "fa-minus");
  } else {
    acordionicon[index].classList.replace("fa-minus", "fa-plus");
  }
}

let FAQsections = Array.from(
  document.querySelectorAll("div.container div.row div.col-7.p-0")
);
let acordionBoxes = Array.from(document.querySelectorAll("div.acordionBoxes"));
acordionBoxes[0].style.border = "3px solid rgb(2, 117, 216)";
console.log(acordionBoxes);
for (let i = 0; i < acordionBoxes.length; i++) {
  acordionBoxes[i].addEventListener("click", showcontent);
}
function showcontent(e) {
  let index = acordionBoxes.indexOf(e.target);
  for (let i = 0; i < acordionBoxes.length; i++) {
    acordionBoxes[i].style.border = "1px solid grey";
    FAQsections[i].classList.add("d-none");
  }
  FAQsections[index].classList.remove("d-none");

  acordionBoxes[index].style.border = "3px solid rgb(2, 117, 216)";
}
console.log(FAQsections);
