

/* This function is going to get called every time the focus or blur events are triggered in one of our form’s input elements. */
function setBackground(e) {
    // here we use the style property instead of the classList property
    // because of specificity conflicts (i.e., attribute selectors
    // override class selectors)
    if (e.type == "focus") {
        e.target.style.backgroundColor = "#FFE393";
    }
    else if (e.type == "blur") {
        e.target.style.backgroundColor = "white";
    }

}

/* This assigns an anonymous function to the load event of the browser.  
*/
document.addEventListener("DOMContentLoaded", () => { 
    
    // The function assigns the setBackground() to the blur and focus
    // events of the relevant <input> elements.    
    const cssSelector = "input[type=text],input[type=password]";
    const fields = document.querySelectorAll(cssSelector);
    
    for (let field of fields) {
        field.addEventListener("focus", setBackground);
        field.addEventListener("blur", setBackground);
    }
    
    /* code goes here */
    document.querySelector("#sampleForm").
        addEventListener("submit", checkforEmptyFields)

    function checkforEmptyFields(e){
        const errorList = []
        for (let field of fields){
            if(field.value == null || field.value == ""){
                e.preventDefault()
                errorList.push(field)
            }
        }
       


});
  