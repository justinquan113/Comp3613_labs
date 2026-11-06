let shoppingCart = []
let numOfItems = 0
let total = 0

document.addEventListener('DOMContentLoaded',  () => {
   /* add code after this comment */
  

   const buttons = document.querySelectorAll('.add-to-cart-btn')
   for(let btn of buttons){
      btn.addEventListener('click', handleAdd)
      
   }
   

   function handleAdd(e){

      const title = e.target.dataset.name
      const price = Number(e.target.dataset.price)
      const id = e.target.dataset.id
      let item = new cartItem(id, title, price, 1)
      const existing = shoppingCart.find(i => i.id == id)
      if(existing){
         existing.quantity += 1
      }
      else{
         shoppingCart.push(item)
      }

      total += price
      numOfItems += 1
      
      const emptyCart = document.querySelector(".empty-cart")
      emptyCart.style.display = "none"

      const button = document.querySelector("#checkoutBtn")
      button.removeAttribute("disabled")

      const cartTotal = document.querySelector("#totalAmount")
      cartTotal.textContent = "$" + total.toFixed(2)

      const itemCount = document.querySelector("#cartCount")
      itemCount.textContent = numOfItems

      displayCart()
   }

   function cartItem(id, name, price, quantity){
           this.name = name
           this.price = price
           this.id = id
           this.quantity = quantity
   }

   function displayCart(){
      const cart = document.querySelector("#cartItems")
      cart.querySelectorAll(".cart-item").forEach(el => el.remove())
      for(let i of shoppingCart){
      
         const divContainer = document.createElement("div")
         divContainer.className = "cart-item"
   
         const div = document.createElement("div")
         div.className = "item-info"
   
         const name = document.createElement("p")
         name.className = "item-name"
         name.textContent = i.name + " x " + i.quantity
   
         const itemPrice = document.createElement("p")
         itemPrice.className = "item-price"
         itemPrice.textContent = "$" + (i.price * i.quantity).toFixed(2)
   
         div.appendChild(name)
         div.appendChild(itemPrice)
         divContainer.appendChild(div)
         cart.appendChild(divContainer)

      }
   }

});




