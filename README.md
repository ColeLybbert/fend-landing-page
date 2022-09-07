# Landing Page

This is a project that was made to test my JavaScript Skills, there is a lack of design but the functionality is all there in the JavaScript Page.

# JavaScript

Using .slice and .call you can put everything with the tag "section" into and array, once it is in an array you can iterate it and using .map I created the basic elements for the nav bar, "li" and "a". Using innerHTML I labeled each "a" with the sections dataset-id's, then added a link to the "a" for the scroll. I attached the "a" tag to the "li" tag, then attached the "li" tag to the NavBar, that is how the NavBar was created. Next is is the hover effects for both the section and it's unique NavBar item. We are still iterating with section so all we have to do is add and Event Listener "mouseover" with a Anonymous Function. Inside the function I added a class to each section as well as it's item when hovered over. Then using another Event Listener and Anonymous Function I did the same thing, exept removing both classes on "mouseout".