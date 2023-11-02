// Scroll Header
function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header');
}

window.addEventListener('scroll', scrollHeader);

// Dropwdown Menu
const dropDownMenu1 = document.getElementById('dropdown-item-1');
const dropDownMenu2 = document.getElementById('dropdown-item-2');
const dropDownMenu3 = document.getElementById('dropdown-item-3');

const menuItem1 = document.getElementById('menu-item-1');
const menuItem2 = document.getElementById('menu-item-2');
const menuItem3 = document.getElementById('menu-item-3');

function showDropdown1(event){
    event.preventDefault();
    dropDownMenu1.classList.toggle('active-dropdown-menu');
    dropDownMenu2.classList.remove('active-dropdown-menu');
    dropDownMenu3.classList.remove('active-dropdown-menu');
}

function showDropdown2(event){
    event.preventDefault();
    dropDownMenu1.classList.remove('active-dropdown-menu');
    dropDownMenu2.classList.toggle('active-dropdown-menu');
    dropDownMenu3.classList.remove('active-dropdown-menu');
}

function showDropdown3(event){
    event.preventDefault();
    dropDownMenu1.classList.remove('active-dropdown-menu');
    dropDownMenu2.classList.remove('active-dropdown-menu');
    dropDownMenu3.classList.toggle('active-dropdown-menu');
}

function removeDropdown(){
    dropDownMenu1.classList.remove('active-dropdown-menu');
    dropDownMenu2.classList.remove('active-dropdown-menu');
    dropDownMenu3.classList.remove('active-dropdown-menu');
}

menuItem1.addEventListener('click', showDropdown1);
menuItem2.addEventListener('click', showDropdown2);
menuItem3.addEventListener('click', showDropdown3);

dropDownMenu1.addEventListener('mouseleave', removeDropdown);
dropDownMenu2.addEventListener('mouseleave', removeDropdown);
dropDownMenu3.addEventListener('mouseleave', removeDropdown);

// MENU MOBILE

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }
}

showMenu('bx', 'menu-mobile');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link-mobile')
const bx = document.getElementById('bx')

function linkAction(){
    const navMenu = document.getElementById('menu-mobile')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('active-menu-mobile');
    bx.classList.toggle('active-bx');
}
navLink.forEach(n => n.addEventListener('click', linkAction))