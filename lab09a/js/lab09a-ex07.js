/* code goes here */
document.addEventListener('DOMContentLoaded', function(){
        // references to input elements 
    const numQuantity = document.querySelector("#numQuantity"); 
    const numPrice = document.querySelector("#numPrice"); 
    const numTaxRate = document.querySelector("#numTax"); 
    // implement the inc/dec quantity functionality 
    const btnInc = document.querySelector("#increaseBtn"); 
    btnInc.addEventListener('click', () => { 
    if (numQuantity.value < 5) numQuantity.value++; 
    calcTotals(); 
    }); 
    const btnDec = document.querySelector("#decreaseBtn"); 
    btnDec.addEventListener('click', () => { 
    if (numQuantity.value > 0) numQuantity.value--; 
    calcTotals(); 
    }); 
    // recalculate when input elements change 
    numPrice.addEventListener('input', calcTotals ); 
    numTaxRate.addEventListener('input', calcTotals ); 
    numQuantity.addEventListener('input', calcTotals ); 
    
    function calcTotals() { 
        // get references to relevant form elements 
        const divSubtotal = document.querySelector("#subtotal"); 
        const divTax = document.querySelector("#taxAmount"); 
        const divGrandTotal = document.querySelector("#grandTotal"); 
        // do the calculations 
        let subtotal = numQuantity.value * numPrice.value; 
        let tax = subtotal * (numTaxRate.value/100); 
        let grandtotal = subtotal + tax; 
        // display the new numbers 
        divTax.textContent = "$" + tax.toFixed(2); 
        divSubtotal.textContent ="$" + subtotal.toFixed(2); 
        divGrandTotal.textContent = "$" + grandtotal.toFixed(2); 
    } 
    
    
    // implement the accordion functionality 
    const header = 
    document.querySelector("div.collapsible-header"); 
    header.addEventListener('click', e => { 
        const content = 
        document.querySelector("div.collapsible-content"); 
        const arrow = header.querySelector('.arrow'); 
        // Toggle the expanded class 
        content.classList.toggle('expanded'); 
        arrow.classList.toggle('expanded'); 
    });
    
})
    
    

