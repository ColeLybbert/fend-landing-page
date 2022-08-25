// This makes each NavBar item and selects the NavBar itself
let navItems = ["Function", "Disease", "Memories", "Restoration"];
let navList = document.querySelector("#nav");

// Maps each navItem using .map and iteration
navItems.map((navItem) => {
  // adds a li to each navItem and an a tag
  let listItem = document.createElement("li");
  let link = document.createElement("a");
  // adds a link for scrolling
  link.href = "#" + navItem;
  //adds id for later
  listItem.id = navItem;
  // appends each item to each other and adds the innerHTML
  link.innerHTML = navItem;
  listItem.appendChild(link);
  navList.appendChild(listItem);
});
// empty array I use to return anything section does
let sections = [].slice.call(document.getElementsByClassName("section"));
// once again maps each section using .map and iterations
sections.map((section) => {
  //defines each section's button using data-id's
  let matchingButton = document.querySelector('#'+section.dataset.id);
  //event listener as well as a function so the code actually runs
  section.addEventListener("mouseover", () => {
    //adds classes
    section.classList.add("active");
    matchingButton.classList.add("selected");
  });
  // takes classes away
  section.addEventListener("mouseout", () => {
    section.classList.remove("active");
    matchingButton.classList.remove("selected");
  });
});



