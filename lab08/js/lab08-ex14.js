// define functions in this file


const stock1 = {
    symbol: "APPL",
    name: "Apple Inc",
    prices: [200, 198, 202, 197, 203],
    location: {
        address: "One Apple Park Way",
        city: "Cupertino"
    }
}

console.log(`${stock1.name} Address: ${stock1.location.address}`)
const stock2 = {}
stock2.symbol = "ADBE"
stock2.price = 268.81
console.log(`${stock2.symbol} Open: ${stock2.price}`)

for (let p of stock1.prices){
    console.log(p)
}

for(let property in stock1){
    let value = stock1[property]
    console.log(property + "=" + value)
}


const someStocks = [stock1, stock2]

/*
for (let i= 0; i < someStocks.length; i++){
    console.log(someStocks[i].symbol)
}
*/

for (let ss of someStocks){
    console.log(ss.symbol)
}

const portfolio = [
    {symbol: "AAPL", price: 200, quantity: 20},
    {symbol: "ADBE", price: 100, quantity: 10}
]

for (let x of portfolio){
    let worth = x.price * x.quantity
    console.log(`${x.symbol} = $${worth}`)
}