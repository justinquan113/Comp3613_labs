

document.addEventListener('DOMContentLoaded', () => {
   
   /* add code here */
   let tasks = []
   let id = 0
   const button = document.querySelector("#addTask")
   const removebtn = document.querySelector("#clearTable")
   const deletebtn = document.querySelector("#delete")
   button.addEventListener('click', handleAddTask)
  
   removebtn.addEventListener('click', handleRemoveAll)
   

   function handleAddTask(e){
      let taskDetails = document.querySelector("#tdetails").value
      let date = document.querySelector("#tdate").value
      
      if(date == "" || taskDetails == ""){
         e.preventDefault()
      }

      else{
         const div = document.querySelector(".todo")
         const aside = document.querySelector("aside")
         aside.classList.replace("hidden", "visible")
         div.classList.replace("hidden", "visible")
         let taskItem = new task(taskDetails, date, id)
         tasks.push(taskItem)
         id += 1
         displayTask(taskItem)
      }
      document.querySelector("#tdetails").value = ""
      document.querySelector("#tdate").value = ""
     
   }

   
   
   function handleRemoveAll(){
      const taskTable = document.querySelector("#taskTable")
      taskTable.querySelectorAll("tr").forEach(el => el.remove())
      tasks = []
      const aside = document.querySelector("aside")
      aside.classList.replace("visible", "hidden")
      const div = document.querySelector(".todo")
      div.classList.replace("visible", "hidden")
      id = 0
   }
   
   function displayTask(t){
      const taskTable = document.querySelector("#taskTable")
      const template = taskTable.querySelector("template")
      
      const row = template.content.cloneNode(true)
      
      const deleteBtn = row.querySelector("#delete")
      deleteBtn.textContent = "Del"
      
      deleteBtn.dataset.id = t.tid
      deleteBtn.addEventListener('click', handleDelete)
      row.querySelector("#date").textContent = t.date
      row.querySelector("#task").textContent = t.details
      
      taskTable.appendChild(row)
      
   }
   
   function task(details, date, tid){
      this.details = details
      this.date = date
      this.tid = tid
   }

   function handleDelete(e){
      e.preventDefault()
      const id = e.target.dataset.id
      tasks = tasks.filter(task => task.tid != id)
      e.target.closest("tr").remove()

      if(tasks.length == 0){
         document.querySelector("aside").classList.replace('visible', 'hidden')
         document.querySelector(".todo").classList.replace("visible", "hidden")
      }
   }
});