let navItems = ['Function','Disease','Memories','Restoration'];
let navList = document.querySelector('#nav');

navItems.map(navItem=>{
    let listItem = document.createElement('li');
    let link = document.createElement('a');
    link.href = '#'+navItem;
    
    link.innerHTML = navItem;
    
    listItem.appendChild(link);
    navList.appendChild(listItem);
});


let sections = [].slice.call(document.getElementsByClassName('section'));
    sections.map(section=>{
        section.addEventListener("mouseover",()=>{
            section.classList.add('active');
        })
    });
    sections.map(section=>{
        section.addEventListener("mouseout",()=>{
            section.classList.remove('active');
        })
    });
