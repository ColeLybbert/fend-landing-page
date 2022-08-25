# Landing Page

This is a project that was made to test my JavaScript Skills, there is a lack of design but the functionality is all there in the JavaScript Page.

# HTML 

The HTML is simple, the main page is split into four divs with a class, id, and data-id. The data-id is important for the JavaScript, there is also an empty "ul" above all of these sections that plays a big role in the JavaScript.

# CSS

The Styling on this page is very bland, I just wantedt to focus purely on the JavaScript for this specific project. However, the classes "active" and "selected" will be important for the JavaScript

# JavaScript

This is where all the fun stuff is, line 1-14 is where I took the empty "ul" in the HTML and created four list elements that each have an a tag. This was done by creating an array with each of the section titles inside of it, then I selected the "ul" with it's id of #nav. I then used .map and iteration to sort through each title, creating the actual navbar but also adding id's and links so the buttons will scroll to the corresponding section if you click them.

Line 16-30 is where I made an array that will use any data that the class name "section" returns. Once again I then used .map and iteration to sort through each section, defining each button that corresponds with its own section. Then using an event listener on each section that would add a class to the section that was hovered over, "active", and its corresponding button, "selected", then removes them if your not hovering over the section anymore.