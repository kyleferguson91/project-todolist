// use this function to render custom projects array that is served from project maker

export function renderCustomProjects() {

    // import project names from loop function in project maker

 

import('./projectmaker.js')
.then((obj) => {
    obj.getProjects()

    //array below is current names of cusom projects
    const customprojectslist = obj.currentCustomProjects
    // loop this array 
    customprojectslist.forEach((elem,ind,arr) => {
        
        let projectdiv = document.createElement('div')
        
        // add styles 

        projectdiv.classList.add('projectbuttons')

        // create buttons for title and delete

        let projectbutton = document.createElement('button')
        projectbutton.classList.add('customprojecttitle')
        projectbutton.id = "custom1"

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

})






}

// function to update dom if something is removed

export function updateAfterRemove(remove) {
    const removediv = document.querySelectorAll('.projectbuttons')
   removediv.forEach((elem,ind,arr) => {

        if (elem.dataset.title == remove) {
             
            // if the data attribute is equal to the title we want to remove, remove the child
            // from the parent container 
            
            

            const parent = document.querySelector('.customprojects')
            console.log(elem)
            parent.removeChild(elem)


        }

   })
}
