//define sections and navbar
let sections = document.querySelectorAll('section');
let navBar = document.getElementById('navbar__list');

// create nav items
sections.forEach((section) => {
  let navItem = document.createElement('li');
  let itemLink = document.createElement('a');
  navItem.id = "nav" + section.id;
  itemLink.href = "#" + section.id;
  itemLink.innerHTML = section.dataset.id;
  navItem.appendChild(itemLink);
  navBar.appendChild(navItem);
});

// define each section
let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let section3 = document.getElementById('section3');

//define top of section for scroll
let section1Top = section1.offsetTop -500;
let section2Top = section2.offsetTop -500;
let section3Top = section3.offsetTop -500;

// define bottom of sections for scroll
let section1Bottom = section1.offsetTop + section1.offsetHeight -500;
let section2Bottom = section2.offsetTop + section2.offsetHeight -500;
let section3Bottom = section3.offsetTop + section3.offsetHeight -500;

// define nav items
let nav1 = document.getElementById('navsection1');
let nav2 = document.getElementById('navsection2');
let nav3 = document.getElementById('navsection3');

// add event listener using top and bottom of sections to add classes
window.addEventListener('scroll', () => {
  let scrolled = window.scrollY;
  if(scrolled >= section1Top & scrolled <= section1Bottom) {
    section1.classList.add('your-active-class');
    nav1.classList.add('nav-active-class');
  } else {
    section1.classList.remove('your-active-class');
    nav1.classList.remove('nav-active-class');
  }

  if(scrolled >= section2Top & scrolled <= section2Bottom) {
    section2.classList.add('your-active-class');
    nav2.classList.add('nav-active-class');
  } else {
    section2.classList.remove('your-active-class');
    nav2.classList.remove('nav-active-class');
  }

  if(scrolled >= section3Top & scrolled <= section3Bottom) {
    section3.classList.add('your-active-class');
    nav3.classList.add('nav-active-class');
  } else {
    section3.classList.remove('your-active-class');
    nav3.classList.remove('nav-active-class');
  }
});
    



