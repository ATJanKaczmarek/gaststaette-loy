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

function toggleCollapsible(element) {
  element.classList.toggle("active");
  const content = element.nextElementSibling;
  const table = content.getElementsByTagName("table")[0];
  
  if (element.classList.contains("active")) {
    table.style.height = "fit-content";
    content.style.height = "100%";
    content.style.display = "block";
    content.style.overflow = "visible";
  } else {
    table.style.height = null;
    content.style.display = "none";
    content.style.overflow = "hidden";
  }
}
