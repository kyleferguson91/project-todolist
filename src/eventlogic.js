

// this function when called will create a todo with the specified parameters 
// it clears the inputs after this!

export function createTodo() {



    document.querySelector('#createtodo').addEventListener('click', (e) => {

        let title = document.querySelector('#title').value
        let description = document.querySelector('#description').value
        let duedate = document.querySelector('#duedate').value
        let priority = document.querySelector('#priority').value
        let note = document.querySelector('#note').value
        let project = document.querySelector('#project').value
        let completed = document.querySelector('#completed').value

        
   import('./todomodule.js')
        .then((module) => {
            let todo =  module.createTodo(title, description, duedate, priority, note, project, completed)

            // call add to list logic when done which will tell it to upadte the visual list too!

            addToList(todo.title)
        }
        
        )


// after creation of the todo, we want to clear the form values!

resetForm()


// this to go to dom logic later, but append to my list!





    })





}

// function to be called to clear the input display

function resetForm() {
    document.querySelectorAll('input').forEach((elem,ind,arr) => {
        elem.value = ""
    })
}



// function to set to do as complete, this can either be set at input with a checkbox (default false)
// or can be adjusted in the list of todos visually, or by accessing that specific todo!

export function setTodoComplete() {




}


//dom logic separate 
function addToList(todo) {const list = document.querySelector('.todolist')
list.innerHTML += `<li>${todo}</li>`}