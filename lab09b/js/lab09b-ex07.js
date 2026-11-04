document.addEventListener("DOMContentLoaded", () => {

   const btn = document.querySelector('#opnBtn');
   const dialog = document.querySelector("#myDialog");

   btn.addEventListener('click', () => {
      dialog.showModal();
   });

   const closeBtn = document.querySelector("#closeBtn");
   closeBtn.addEventListener('click', () => {
      dialog.close("cancel");
   }); 

   dialog.addEventListener('close', (e) => {

   });
});