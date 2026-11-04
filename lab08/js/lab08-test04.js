
// convert comma-separated values into an array
let countries = csv.split(",")
console.log(countries)

// convert array into delimited string

let country = countries.join(",")
console.log(country)


// check if these are arrays

console.log(Array.isArray(countries))
console.log(Array.isArray(csv))

//  sort a simple array 
countries.sort()
console.log(countries)

// reverse the sort
countries.reverse()
console.log(countries)

// remove the first element
countries.shift()
console.log(countries)

// remove the last element
countries.pop()
console.log(countries)

// add new elements to the front of the array

countries.unshift("e1", "e2")
console.log(countries)

// search for element

console.log(countries.includes("Germany"))

// search for element index

console.log(countries.indexOf("Germany"))
// make a new array by extracting from another array

countries.splice(1,0, "Brazil")
console.log(countries)

console.log('---------------------');

// there are other array methods which you will learn in Ch 10 */


// use a loop to output all cities whose continent=="NA"

for(let country of cities){
   if(country.continent == "NA")
      console.log(country.city)
}

console.log('---------------------');

// use a loop to output gallery names whose country=="USA"

for(let gallery of galleries){
   if(gallery.location.country == "USA")
      console.log(gallery.name)
}

console.log('---------------------');

// convert JSON colorsAsString to js object

let colors = JSON.parse(colorsAsString)
console.log(colors)
// use a loop to output color name if luminance < 75

for (let color of colors){
   if (color.luminance < 75)
      console.log(color.name)
}

console.log('---------------------');

// use two nested loops - outer: loop thru colors
let total = 0
for(let color of colors){
   console.log(color.name)
   for (let rgb of color.rgb){
      total = total + rgb
   }

   console.log(`rgb total: ${total}`)
   total = 0

}

console.log('---------------------');

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */

document.write("<ul>")
for (let gallery of galleries){
   let gal = `<li><a href='${gallery.url}'>${gallery.name}</a></li>`
   document.write(gal)
}

document.write("</ul>")

document.write("<ul>")
for(let color of colors){
   let style = `background-color: rgb(${color.rgb});`
   if(color.luminance < 75)
      style = style + "color: white"
      document.write(`<li style="${style}">${color.name}</li>`)
}

document.write("</ul>")






