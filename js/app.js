//define sections and navbar
let sections = document.querySelectorAll('section');
let navBar = document.getElementById('navbar__list');

// create nav items
sections.forEach((section) => {
  let navItem = document.createElement('li');
  let itemLink = document.createElement('a');
  navItem.id = "nav" + section.id;
  itemLink.innerHTML = section.dataset.id;
  navItem.appendChild(itemLink);
  navBar.appendChild(navItem);
  navItem.addEventListener('click', (event) => {
    if (navItem.classList.contains('nav-active-class')) {
      let warn = "Selected Section Already Active";
      event.preventDefault();
      console.error(warn);
    } else {
      scroll({
        top: sectionTop + 100,
        behavior: "smooth"
      });
    }
  })

  //define section top and bottom
  let sectionTop = section.offsetTop -500;
  let sectionBottom = section.offsetTop + section.offsetHeight - 500;

  //add scroll event listener and add and remove classes
  window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    if (scrolled >= sectionTop & scrolled <= sectionBottom) {
      section.classList.add('your-active-class');
      navItem.classList.add('nav-active-class');
    } else {
      section.classList.remove('your-active-class');
      navItem.classList.remove('nav-active-class');
    }
  })
});
    



