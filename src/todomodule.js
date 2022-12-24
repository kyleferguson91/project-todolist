// factory function to create todo objects

export function todoMaker(title, description, duedate, priority, note, project, completed = false) 
{
    return {title, description, duedate, priority, note, project, completed}
}


