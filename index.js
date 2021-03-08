let navOpen = false;
let icon = () => document.getElementById('nav-icon');

const handleNav = () => {
    navOpen = !navOpen;

    if (navOpen === true) {
        document.getElementById('navigation').style.left = '0';
    }
    else if (navOpen === false) {
        document.getElementById('navigation').style.left = '-100%';
    }

    icon().classList.toggle('fa-bars');
    icon().classList.toggle('fa-times');
}