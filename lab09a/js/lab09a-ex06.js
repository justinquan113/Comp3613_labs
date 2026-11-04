/* code goes here */
document.addEventListener('DOMContentLoaded', function (){
    // illustrates one event handler for multiple events
    const buttons = document.querySelectorAll(".card button");
    for (let btn of buttons) {
        btn.addEventListener('click', clickHandler);
    }
    function clickHandler (e) {
        let para = e.target.previousElementSibling;
        alert(para.textContent);
    }
    
    // illustrates the assigning of multiple handlers to the same object
    const images = document.querySelectorAll(".card img");
    for (let img of images) {
        img.addEventListener('mouseover', e => {
            e.target.classList.add('sepia');
        });
        img.addEventListener('mouseout', e => {
            e.target.classList.remove('sepia');
        });    
    }    

}) 




