// projects will need to be capable of storing which todo's belong to them
// it looks cleaner to store as an object of project names and have the values equal to
// arrays that contain the relevent todo objects 

// we can come up with a master projects object, if in the UI we would like to separate the display
// it is easier to have a separate default project object as we can just loop over it 
// to populate the display and not have to differentiate between default vs non

export const defaultprojects = {
    all: ['all'],
    today: ['today'],
    thisweek: ['this week'],
}


export const projects = {
custom1: ['custom1'],
custom2: ['custom2'],
custom3: ['custom3']
}

// add the appropriate todo's to these projects based on the appropriate dates (datefn!)



// now we develop a way to add custom projects to this object!
// if visually we want to show a cue that this is an option we can do this with the UI or not in this function
// running add project should add a pro


export function addProject(projectname) {

    // if we try to add a project name that already exists, we can return a confirmation 


if (projects.hasOwnProperty(projectname)) {
    console.log('logs that property exists within projectmaker.js')
 alert('Project exists, please choose another name!')

}

    // else we add the project name as a key to project object
    // eventually we will append todo's to these categories based on some criteria 

projects[projectname] = []

console.log(projects)

return;
}







// we want to delete they key of the project
// function to remove the project, we need a way to determine which position
// in the array the project is to remove
//supply this an index as this will be visual based


export function removeProject(project) {

        delete projects[project]
        console.log(projects)
}



// function below reports name of projects currently in list and append to an array

export let currentCustomProjects = []
export function getProjects() {
    currentCustomProjects = []


        for (let project in projects) {
            currentCustomProjects.push(project)
        }
        


    }