import { createTodo } from './todomodule'



export function formController() {


const title = document.querySelector('#title').value
const description = document.querySelector('#description').value
const duedate = document.querySelector('#duedate').value


const project = document.querySelector('#project').value
const completed = document.querySelector('#completed').checked


// logic to determine priority
// series of radio buttons loop through them

const priority = document.querySelectorAll('.prioritychoice')
let prioritychoice = ""

priority.forEach((elem,ind,arr) => {

    // figure out which is checked

    if (elem.checked) {

        prioritychoice = elem.value
        console.log(prioritychoice)
    }



})


import('./todomodule.js')
.then((obj) => {
    createTodo(title,description,duedate,prioritychoice,project,completed)
})

}



export function populateProjectschoices() {

// this function will be used to create a dynamic list of projects currently active so we can store a todo in them





}