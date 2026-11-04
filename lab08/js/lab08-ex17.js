/* code goes here */

function outputBox(num){
    let box = `<div id='div${num}'>`
    box +=  "This is div " + num
    box += "</div>"
    return box
}