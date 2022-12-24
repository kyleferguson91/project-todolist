// projects will need to be capable of storing which todo's belong to them
// it looks cleaner to store as an object of project names and have the values equal to
// arrays that contain the relevent todo objects 

// we can come up with a master projects object, if in the UI we would like to separate the display
// of default projects and custom projects, we can do that by accessing the relevent todo lists
// rather than creating 2 project arrays.  
// we can append the word default to all the keys of the default projects

const projects = {
    alldefault: [],
    todaydefault: [],
    weekdefault: [],
}

// add the appropriate todo's to these projects based on the appropriate dates (datefn!)



// now we develop a way to add custom projects to this object!
// if visually we want to show a cue that this is an option we can do this with the UI or not in this function
// running add project should add a pro


export function addProject(projectname) {

    // if we try to add a project name that already exists, we can return a confirmation 


if (projects.hasOwnProperty(projectname)) {
    console.log('logs that property exists within projectmaker.js')
}

    // else we add the project name as a key to project object
    // eventually we will append todo's to these categories based on some criteria 

projects[projectname] = []

}







// we want to delete they key of the project
// function to remove the project, we need a way to determine which position
// in the array the project is to remove
//supply this an index as this will be visual based


export function removeProject(project) {

        delete projects[project]
        console.log(projects)
}



