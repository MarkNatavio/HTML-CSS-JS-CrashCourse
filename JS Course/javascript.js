// DOM - Document Object Model

// Single Element Selectors
console.log('Single Element Selector');
const list = document.getElementById('list');
console.log(list);

const list1 = document.querySelector('ul');
console.log(list1);

const list2 = document.querySelector('#list');
console.log(list2);

const list_item = document.querySelector('.list-item');
console.log(list_item);



// Multiple Element Selector
console.log('Multiple Element Selector');
const list_items = document.querySelectorAll('.list-item');
console.log(list_items);

list_items.forEach(item => {
  console.log(item);
})



// Changing elements in the DOM
console.log('Changing elements in the DOM');

// Changing the text
list2.firstElementChild.textContent = "New First";
list2.lastElementChild.textContent = "New Last"; 
console.log(list2)

// Changing inner HTML
list2.firstElementChild.innerHTML = "<h1>Now its new again</h1>";


// Adding styles
list2.lastElementChild.style.background = 'red';

// Removing (commented out to not mess with the list)
// list2.firstElementChild.remove();
// list2.lastElementChild.remove();
console.log(list2);



/*
Events
========
Events allow us to check when a user interacts with the website such as clicking a button
*/
// First we can set an onclick attribute to a button and provide it a function name to execute when that happens.
// The function will look like this
function button_click(){
  console.log("here I am");
}

// Another way to do this is by setting an event listener
// Event listeners are more dynamic as you can set the specific event taking place that the website will react to.
const btn = document.getElementById('myBtn');
btn.addEventListener('click', (e) => {
  console.log(e)
});

/*
There are many event listeners

Mouse Events:
click - the moment the element is clicked once
dblclick - the moment the element is double clicked
mousedown - the moment the mouse clicked and held down
mouseup - the moment the mouse is released after being clicked
contextmenu - the moment a user tries to open a context menu (right click)
mouseout - the moment the cursor moves out of an element
mousewheel - the moment the user moves rotates the wheel button on a mouse
mouseover - the moment the cursor moves on top of an element

Touch Events (only work on touch screens):
touchstart - the moment the user touches an element
touchend - the moment the user stops touching an element
touchmove - the moment the user moves their finger accross the screen
touchcancel - the moment the touch event is interrupted

Keyboard Events:
keydown - the moment a key is pressed (reports which key is pressed)
keyup - the moment after a key is released after being pressed
keypress - the moment a user presses a key (reports what character was entered)

Form Events:
focus - the moment an input gets selected or "focused" on
blur - the moment an input is no longer selected or "loses focus"
change - the moment the user modifies the element's value
submit - the moment the user clicks on a submit button


Window Events:
resize - the moment the document view (the window) has been resized
scroll - the moment the document view (the window) has been scrolled
load - the moment the whole page has been loaded
unload - the moment a user navigates away from the page or the page is "unloaded"
hashchange - the moment the fragment identifier of the URL (the part beginning with a #) has been changed 

Keyboard Key Values
https://docstore.mik.ua/orelly/webprog/DHTML_javascript/0596004672_jvdhtmlckbk-app-b.html
*/
