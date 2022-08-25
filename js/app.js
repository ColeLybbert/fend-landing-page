let navItems = ["Function", "Disease", "Memories", "Restoration"];
let navList = document.querySelector("#nav");

navItems.map((navItem) => {
  let listItem = document.createElement("li");
  let link = document.createElement("a");

  link.href = "#" + navItem;
  listItem.id = navItem;
  link.innerHTML = navItem;

  listItem.appendChild(link);
  navList.appendChild(listItem);
});

let sections = [].slice.call(document.getElementsByClassName("section"));

sections.map((section) => {
  let matchingButton = document.querySelector('#'+section.dataset.id);
  section.addEventListener("mouseover", () => {
    section.classList.add("active");
    matchingButton.classList.add("selected");
  });

  section.addEventListener("mouseout", () => {
    section.classList.remove("active");
    matchingButton.classList.remove("selected");

  });
});



