//Returning section into an array
let sections = [].slice.call(document.getElementsByTagName("section"));
// Defining NavBar
let navBar = document.getElementById("navbar__list");
// Looping each section and nav button
sections.map((section) => {
  // Creating NavBar Structure
  let navItem = document.createElement('li');
  let itemLink = document.createElement('a');
  //Adding link for scroll on click
  itemLink.href = "#" + section.dataset.scroll;
  //Labeling each Nav Button
  itemLink.innerHTML = section.dataset.id;
  //Attaching everything together
  navItem.appendChild(itemLink);
  navBar.appendChild(navItem);
  //Adding Classes
  section.addEventListener("mouseover", () => {
    section.classList.add("your-active-class");
    navItem.classList.add("nav-active-class");
  });
  //Removing Classes
  section.addEventListener("mouseout", () => {
    section.classList.remove("your-active-class");
    navItem.classList.remove("nav-active-class");
  });
});



