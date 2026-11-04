document.addEventListener("DOMContentLoaded", () => {
   const eventLog = document.querySelector("#eventLog");
   const btnClear = document.querySelector("#btnClear");

   /* code goes here */






   // adds message in event log area
   function logEvent(eventType, message) {
      const div = document.createElement('div');
      div.className = "log-entry";
      const span = document.createElement('span');
      span.className="event-type";
      span.textContent=eventType;

      div.appendChild(span);
      div.appendChild(document.createTextNode(message));
      eventLog.appendChild(div);
      eventLog.scrollTop = eventLog.scrollHeight;
   }   
   // adds a color box to the last color container
   function createBox(color) {
      const div = document.createElement('div');
      div.classList.add('box');
      div.classList.add(`${color}-box`);
      div.dataset.color=color;
      div.textContent=color;
      document.querySelector("#boxContainer2").appendChild(div);
   }
   // handles the clear log button
   btnClear.addEventListener('click', () => {
      eventLog.textContent = "";
   });
});






