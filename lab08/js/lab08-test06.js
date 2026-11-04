/* add code below this */

// companies.json defines a back-tick string named content
const companies = JSON.parse(content)


function AcctCalculations(company){
   
    const stats = company.stats

    this.marketCap50 = function(){
        return currency(stats.day50MovingAvg * stats.sharesOutstanding)
    }

    this.marketCap200 = function(){
        return currency(stats.day200MovingAvg * stats.sharesOutstanding)
    }

    this.revenue = function(){
        return currency(stats.operatingRevenue - stats.costOfRevenue)
    }

    this.shareholderEquity = function(){
        return currency(stats.totalAssets - stats.totalLiabilities)
    }

    this.day50 = function(){
        return currency(stats.day50MovingAvg)
    }

    this.day200 = function(){
        return currency(stats.day200MovingAvg)
    }

    const currency = function(num){
        return new Intl.NumberFormat('en-us', {style: 'currency', currency: 'USD'}).format(num)
    }
}

function outputCard(company){
    const acct = new AcctCalculations(company)

    let card = '<article class ="card">'
    card += `<h2>${company.symbol} - ${company.companyName}</h2>`
    card += "<div>"
    card += `<p>Share Price (50day avg): <span>${acct.day50()}</span></p>`
    card += `<p>Share Price (200day avg): <span>${acct.day200()}</span></p>`
    card += `<p>Market Cap (50day avg): <span>${acct.marketCap50()}</span></p>`
    card += `<p>Market Cap (200day avg): <span>${acct.marketCap200()}</span></p>`
    card += `<p>Net Revenue: <span>${acct.revenue()}</span></p>`
    card += `<p>Shareholder Equity: <span>${acct.shareholderEquity()}</span></p>`
    card += "</div>"
    card += "<footer>"
    for (let tag of company.tags){
        card += `<small>${tag}</small>`
    }
    card += "</footer>"
    card += "</article>"

    return card
}

function outputCards(){
    let cards = ''
    for (let company of companies){
       cards += outputCard(company)
    }
    return cards
}


