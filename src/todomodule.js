// factory function to create todo objects

export function createTodo(title, description, duedate, priority, note, project, completed = false) 
{   
    console.log({title, description, duedate, priority, note, project, completed})
    return {title, description, duedate, priority, note, project, completed}
}



// function to set complete of todo object to true takes a todo object as an argument

export function setComplete(obj) {
    
    if (obj.completed) {
    
        obj.completed = false
        return
    }
    obj.completed = true
    return
}


// function to change priority between low medium and high takes a todo object as argument and a selection

export function changePriority(obj, priority) {
    obj.priority = priority
    return
}
