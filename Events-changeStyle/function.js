function closeMe() {
    // Find the element
    x=document.querySelector('#demo');
    //Option 1: Change style attribute directly
    x.style.display="none";

    //Option 2: Change the class
    // x.className="closed";
};

function openMe() {
    // Find the element
    x=document.querySelector('#demo');
    //Option 1: Change the style attribute directly
    x.style.display="block";

    //Option 2: Change the class
    // x.className="open";
};

function changeColor() {
    x=document.querySelector('#demo');
    x.style.border="2px solid black";
};