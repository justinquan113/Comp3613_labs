const stocks = JSON.parse(stockData);

document.addEventListener("DOMContentLoaded", () => {
   
  
   

});

function createButton(className) { const btn = document.createElement("button"); const icon = document.createElement("i"); icon.classList.add("fa-solid"); if (className) icon.classList.add(className); btn.appendChild(icon); return btn; }

function createSpan(content, className){ const span = document.createElement("span"); span.appendChild(content); if (className) span.className = className; return span; }