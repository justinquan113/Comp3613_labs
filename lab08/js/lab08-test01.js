/* add code below this */

//let bill = prompt("Enter a bill total: ");

const billTotals = [50, 150, 20, 500]

let tips = []
let tip;

for (bill of billTotals){
    
    if(bill > 75)
        tip = 0.10
       

    else if(30 < bill && bill < 75)
        tip = 0.20
        

    else
        tip = 0.30

    let tipAmount = bill * tip
    tips.push(tipAmount)
}

for (let i = 0; i < billTotals.length; i++){
    console.log("For bill of $" + billTotals[i].toFixed(2) + " the tip should be $" + tips[i].toFixed(2))
}


/*
if (!bill || bill == 0)
    console.log("error");

else
    console.log('bill= ' + bill + ' ' + 'tip= ' +  tip_amount);

*/
