import { createTodo } from './todomodule'



export function formController() {


const title = document.querySelector('#title').value
const description = document.querySelector('#description').value
const duedate = document.querySelector('#duedate').value
const priority = document.querySelector('#priority').value
const note = document.querySelector('#note').value
const project = document.querySelector('#project').value
const completed = document.querySelector('#completed').checked


import('./todomodule.js')
.then((obj) => {
    createTodo(title,description,duedate,priority,note,project,completed)
})

}