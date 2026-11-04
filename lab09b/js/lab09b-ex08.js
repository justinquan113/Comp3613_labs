document.addEventListener("DOMContentLoaded", () => {
   
   const dialog = document.querySelector('#imageDialog');
   const dialogImage = document.querySelector('#dialogImage');
   const dialogTitle = document.querySelector('#dialogTitle');
   const dialogDescription = document.querySelector('#dialogDescription');
   const dialogClose = document.querySelector("dialog button");
   
   /* populate the gallery using the template */
   const galleryContainer = document.querySelector('div.gallery');
   const template = document.querySelector('#templateItem');
   for (let i=0; i< paintings.length; i++) {
      // set the missing template content from the painting array item
      const clone = template.content.cloneNode(true);
      const img = clone.querySelector("img");
      img.setAttribute("src", paintings[i].src);
      img.setAttribute("alt", paintings[i].title);    

      clone.querySelector("div.gallery-title").textContent = paintings[i].title;
      clone.querySelector("div.gallery-description").textContent = paintings[i].description;
      
      const item = clone.querySelector('div.gallery-item');
      item.dataset.index=i;

      // TODO:  add event handler for each gallery item
      
      
      // add the populate clone to the container
      galleryContainer.appendChild(clone);
   }

   /* add functions here */

});