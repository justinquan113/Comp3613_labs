/* Inspiration from original at https://github.com/HoanghoDev/drag-drop-js */

document.addEventListener("DOMContentLoaded", () => {

   const colorChooser = document.querySelector('#colorChooser');
   const nodeList = document.querySelector('#nodeList');

   const createBtn = document.querySelector('#createBtn');
   createBtn.addEventListener('click', createNote );

   /* creates a note box that user can drag and drop */
   function createNote() {
      // note consists of a div that will be draggable
      const newNote = document.createElement('div');
      newNote.classList.add('note');
      newNote.style.borderColor = colorChooser.value;
      // it also has a span that looks like a close button 
      const span = document.createElement('span');
      span.classList.add('close');
      span.textContent = '✕';
      // when that span is clicked, remove the note/div from its parent 
      span.addEventListener('click', () => {
         span.parentNode.remove();
      })
      // note also has a text area that user can type into
      const text = document.createElement('textarea');
      text.placeholder = 'write some content here';
      text.rows=10
      text.cols=30;
      // add the elements to the div and the div to the list of notes
      newNote.appendChild(span);
      newNote.appendChild(text);       
      nodeList.appendChild(newNote)
   }

   /* your code goes here */



});