let navOpen = false;
let icon = () => document.getElementById("nav-icon");

const handleNav = () => {
  navOpen = !navOpen;

  if (navOpen === true) {
    document.getElementById("navigation").style.left = "0";
  } else if (navOpen === false) {
    document.getElementById("navigation").style.left = "-100%";
  }

  icon().classList.toggle("fa-bars");
  icon().classList.toggle("fa-times");
};

const menu = [
  {
    name: "",
    description: "",
    price: 0.0,
  },
];

const extendMenu = () => {
  const table = document.getElementById("menu-table");
};

// Collapsibles:

// window.onload = () => {
//   const collapsibles = document.getElementsByClassName("collapsible");

//   for (let i = 0; i < collapsibles.length; i++) {
//     collapsibles[i].addEventListener("click", () => {
//       this.classList.toggle("active");
//       var content = this.nextElementSibling;
//       if (content.style.maxHeight){
//         content.style.maxHeight = null;
//       } else {
//         content.style.maxHeight = content.scrollHeight + "px";
//       }
//     });
//   }
// }

function toggleCollapsible(element) {
  element.classList.toggle("active");
  const content = element.nextElementSibling;
  const table = content.getElementsByTagName("table")[0];
  
  if (content.style.height) {
    table.style.height = null;
    content.style.height = null;
    content.style.overflow = "hidden";
  } else {
    table.style.height = "fit-content";
    content.style.height = "100%";
    content.style.overflow = "visible";
  }
}
