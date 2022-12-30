// use this function to render custom projects array that is served from project maker
// we will update the array from the project makers function when needed then run the render

import { defaultOptions } from 'acorn'
import { el } from 'date-fns/locale'


export function renderCustomProjects() {

 // clear custom project dom elements! otherwise it will just add to them!
 // div container class is customprojects
 
 document.querySelector('.customprojects').innerHTML = ""



 

// import project names from array created in project maker 

 




import('./projectmaker.js')
.then((obj) => {

    // this creates a new array based on current contents of project object
    // which we can render from


    obj.getProjects()

    //array below is current names of cusom projects
    
    const customprojectslist = obj.currentCustomProjects

    // loop this array 
    customprojectslist.forEach((elem,ind,arr) => {
        

        // create project coontainer 

        let projectdiv = document.createElement('div')
        
        // add style to project container

        projectdiv.classList.add('projectbuttons')

        // create buttons for title and dlelete objects

        let projectbutton = document.createElement('button')
        projectbutton.classList.add('customprojecttitle')
        projectbutton.dataset.title = elem

        // set title to the appropriate custom project

        projectbutton.textContent = elem
 


        
        let deleteprojectbutton = document.createElement('button')
        deleteprojectbutton.classList.add('deleteprojectbutton')
        deleteprojectbutton.textContent = "X"


        // append title and close to project div

        projectdiv.appendChild(projectbutton)
        projectdiv.appendChild(deleteprojectbutton)
  
  

        // we want to append these to the div which houses custom projects

        const customprojectsview = document.querySelector('.customprojects')

        customprojectsview.appendChild(projectdiv)

        
        // we need a way to associate the project title and the close button
        // we could use a data attribute set to the key since this will be unique
        // give the housing div and the close button the same data attribute
        

        deleteprojectbutton.dataset.title = elem
        projectdiv.dataset.title = elem

        // append the function to add button logic to updated dom elements

        import('./buttonlogic.js')
        .then((obj) => 
        obj.deleteProjects())


        // 

    })


    import('./buttonlogic.js')
    .then((o) => {
      
        o.addButtonLogic();
    })

})

selectChoiceCreation()


}


// function to populate display of projects in todo creation based on current projects

function selectChoiceCreation() {

    import('./projectmaker.js')
    .then((obj) => {
  
    // remove all content to start
    document.querySelector('.selectoptions').innerHTML = ""

// get the names of the custom projects and create elements

obj.currentCustomProjects.forEach((elem) => {


    let option = document.createElement('option')

     option.textContent = elem
     option.value = elem

        document.querySelector('.selectoptions').appendChild(option)

})




})}


//master function to render all components

export function render(){



 
import('./buttonlogic.js')
.then((o) => {

    renderCustomProjects()
    initialRenderTodo()
    o.modalLogic()
    o.addButtonLogic()

})

}



export function populateDisplay(projectobject ) {
let project = ""
let projectset = ""

const todoarea = document.querySelector('.todosection')

todoarea.innerHTML = ""

if (projectobject == "all") {projectset = "defaultprojects"}

else if (projectobject == "today") {projectset = "defaultprojects"}

else if (projectobject == "thisweek") {projectset = "defaultprojects"}

else {projectset = 'projects'}

console.log(projectobject, projectset, 'object set')




    import('./projectmaker.js')
    .then((o) => {
        console.log(o.projects, 'projlog')
        for (let prop of o[projectset][projectobject]) {
            console.log(prop, 'propp')
                // create a div to house the content set the styles

            let todocontentdiv = document.createElement('div')
            todocontentdiv.classList.add('todocontent')

// create a p element to house the title

           let text = document.createElement('p')

// since we are looping through an array of objects, set the title to 

           text.textContent = prop.title

           todocontentdiv.appendChild(text)

           text.classList.add('todotitles')

            todoarea.appendChild(todocontentdiv)

            const buttoncontainer = document.createElement('div')
            buttoncontainer.classList.add('buttoncontainer')



           for (let i = 0; i<3; i++) {

            let button = document.createElement('button')
            button.classList.add('todobutton')
            button.textContent = "Stuff"
            buttoncontainer.appendChild(button)
           }
           todocontentdiv.appendChild(buttoncontainer)




            console.log(prop)
        }
    })
}




// draw the todo display!

export function initialRenderTodo() {
    
    // get the todo area and set it equal to the all array in defaultprojects
    // start by clearing the area
   
    populateDisplay('all')
   
    // loop the array and draw dom elements for each one!


    



}