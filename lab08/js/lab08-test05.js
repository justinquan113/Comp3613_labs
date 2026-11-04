// array of items that were ordered
const orderItems = [
    { dishName: "Grilled Salmon with Herbs", dishAmount: 28.50 },
    { dishName: "Caesar Salad", dishAmount: 14.75 },
    { dishName: "Mushroom Risotto", dishAmount: 22.00 },
    { dishName: "Beef Tenderloin", dishAmount: 35.00 },
    { dishName: "Garlic Bread", dishAmount: 8.50 },
    { dishName: "Chocolate Lava Cake", dishAmount: 12.25 },
    { dishName: "House Red Wine", dishAmount: 18.00 },
    { dishName: "Sparkling Water", dishAmount: 4.50 }
];

const taxRate = prompt("Enter a tax percentage number");
let iTax = Number(taxRate);
if (!iTax) iTax = 0;
const tipRate = prompt("Enter a tip percentage number");
let iTip = Number(tipRate);
if (!iTip) iTip = 0;

console.log(iTax, iTip);

/* add code below this */

/* create function that calculates the subtotal, tax amount, tip amount, and total 
   and returns an object with the four calculated values */
function billCalculations(order_items, tax_rate, tip_rate){
    let sub_total = 0;
    for (let item of order_items){
        sub_total += item.dishAmount
    }
    let tax_amount = sub_total * tax_rate
    let tip_amount = sub_total * tip_rate
    let total = sub_total + tax_amount + tip_amount
    const bill = {
        total: total,
        tax: tax_amount,
        tip: tip_amount,
        subTotal: sub_total
    } 
    return bill
    
}


/* create function that outputs a single order item */
function outputOrderItem(item){
    let order = "<div class='order-item'>"
    order += `<span class='dish-name'>${item.dishName}</span>`
    order += `<span class='dish-price'>$${item.dishAmount.toFixed(2)}</span>`
    order += "</div>"
    return order
}



/* create function that outputs all the order items */
function outputOrders(){
    for (let item of orderItems){
        document.write(outputOrderItem(item))
    }
}



/* create function that outputs a bill row */
function billRow(name, amount){
    

    let row = '<div class = "bill-row">'
    row += `<span class="bill-label">${name}</span>`
    row += `<span class="bill-value">${amount}</span>`
    row += "</div>"
    return row
}

/* create function that outputs all the bill rows */

function outputBillRows(){
    let bill = billCalculations(orderItems, taxRate, tipRate)
    document.write(billRow("Items Ordered:", `${orderItems.length} dishes`))
    document.write(billRow("Subtotal:", `$${bill.subTotal.toFixed(2)}`))
    document.write(billRow(`Tax: (${taxRate * 100}%)`, `$${bill.tax.toFixed(2)}`))
    document.write(billRow(`Tip: (${tipRate * 100}%)`, `$${bill.tip.toFixed(2)}`))
    document.write(billRow("Total:", `$${bill.total.toFixed(2)}`))
}