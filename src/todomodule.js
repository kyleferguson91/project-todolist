// factory function to create todo objects


let todocatch1 = []
export function createTodo(title, description, duedate, priority,  project, completed = false) 
{   

    let obj = {title, description, duedate, priority,  project, completed}
    
    todocatch1.push(obj)
    console.log(todocatch1, 'todocatch')
    return {title, description, duedate, priority,  project, completed}
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
