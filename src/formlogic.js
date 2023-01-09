import { createTodo } from './todomodule'
import { projects, defaultprojects } from './projectmaker.js'
const completed = document.querySelector('#completed').checked



// logic to determine priority
// series of radio buttons loop through them




export function formController(title,description,duedate,priority,project,completed) {

if (completed == "") {completed = false}
// create a todo object from the specified inputs!

 

           // add it to the specific project..  all by default or selected..


   
           


            


       
            // and the custom project itself
            let obj = createTodo(title,description,duedate,priority,project,completed)
            projects[project].push(obj)

            // the function returns an object and we push it onto the appropriate custom projects array

  // we also want to have a custom index property for the todo's and figure out their position within their respective array
  projects[project].forEach((elem,ind,arr) => {
    elem.index = ind
   
  })


  function createindex() {
      projects[project].forEach((elem,ind,arr) => {
    elem.index = ind
    console.log('ARRAYLOOP', elem)
  })
  }
   
       // after we have pushed the object onto projects
       // we loop the array and adjust indexes so the todo's have custom indexes!


           
       
     
    }






  // append the todo to the appropriate project!
// it is either to All projects, or a specific one
// for all below