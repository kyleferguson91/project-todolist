// function below adds click events to default project buttons

export function defaultButtonLogic() {


    const buttons = document.querySelectorAll('.defaultproject')
    buttons.forEach((elem,ind,arr) => {
        elem.addEventListener('click', (e) => {
            import('./projectmaker.js')
            .then((obj) => {
    
                console.log(e.target)
    
                console.log(obj.defaultprojects)
          
            console.log(obj.defaultprojects[e.target.id])
            })
            
        })
    })
    
    }
    
    
    // function below adds click events to custom project buttons
    
    export function customButtonLogic() {
    
    
        const buttons = document.querySelectorAll('.customprojecttitle')
        buttons.forEach((elem,ind,arr) => {
            elem.addEventListener('click', (e) => {
                import('./projectmaker.js')
                .then((obj) => {
        
                    console.log(e.target)
        
                    console.log(obj.projects)
              
                console.log(obj.projects[e.target.id])
                })
                
            })
        })
        
        }
    
    
        // function below adds click events to todo buttons
    
    export function todoButtonLogic() {
    
    
        const buttons = document.querySelectorAll('.todobutton')
        buttons.forEach((elem,ind,arr) => {
            elem.addEventListener('click', (e) => {
                console.log(e.target)
              
            })
        })
        
        }
    
    
    
    
    // plus switch image logic
    
    export function plusButtonImageLogic() {
        const image = document.querySelector('#plusbutton')
        image.addEventListener('mouseover', (e) => {
           
        
        e.target.src = '../src/images/plus-circle-svgrepo-com(2).svg'
        
        })
        image.addEventListener('mouseout', (e) => {
        
        
            e.target.src = '../src/images/plus-circle-svgrepo-com.svg'
            
            })
        
            image.addEventListener('mousedown', (e) => {
        
        
                e.target.src = '../src/images/plus-circle-svgrepo-com(3).svg'
                
                })
            
        
    }
    
    
    
    //modal logic to be used with plus button 
    
    export function modalLogic() {
        const plusbutton = document.querySelector('.plusbutton')
        const modalwindow = document.querySelector('.modal')
        const closebutton = document.querySelector('.closebutton')
    
    
        // function to toggle when modal shows or not
    
        function toggleModal() {
            modalwindow.classList.toggle('show-modal')
        }
    
    
    // function to consider when window is clicked to close modal
    // since modalwindow is the modal selector which is the entire background
    // anything clicked in the background that is not the modal content will cuase the window to close
    
        function windowOnClick(event) {
           
            if (event.target === modalwindow) {
            
                toggleModal();
            }
        }
    
        window.addEventListener("click", windowOnClick);
    
        plusbutton.addEventListener('click', (e) => {
            
            toggleModal()
        
        
        })
    
    // add listener to close button so it clsoes modal
    
    closebutton.addEventListener('click', toggleModal)
    
    
    //submit button login in modal window
    // want to use the button to submit answers to appropriate module
    // then reset the inputs to nothing in them for the next addition
    
    const submit = document.querySelector('.submitbutton')
    submit.addEventListener('click', (e) => {


        import('./formlogic.js')
        .then((obj) => {
        
            obj.formController()
        }) 


        toggleModal()
    })
    

      //submit button login in modal window
    // want to use the button to submit answers to appropriate module
    // then reset the inputs to nothing in them for the next addition
    
    const projectsubmit = document.querySelector('.projectsubmit')
    const projectvalue = document.querySelector('#projecttitle').value
    projectsubmit.addEventListener('click', (e) => {


        import('./projectmaker.js')
        .then((obj) => {
            obj.addProject(projectvalue) 
            

   

        }) 


        toggleModal()
    })
    
    
    }
    

    //logic below to switch between creation of todo or a project

function switchCreation() {
    const todobuttonselect = document.querySelector('.todoselect')
    const projectbuttonselect = document.querySelector('.projectselect')
    const todoinputs = document.querySelector('.inputcontainer')
    const projectinputs = document.querySelector('.project')

    function changebg(e) {
        e.target.classList.toggle('changebg')
    }

    
    todobuttonselect.addEventListener('click', (e) => {
        
        if (projectbuttonselect.classList.contains('changebg')) {
            projectbuttonselect.classList.remove('changebg')
            changebg(e)
            todoinputs.classList.remove('hide')
            projectinputs.classList.add('hide')
            return
        }
        todoinputs.classList.remove('hide')
        projectinputs.classList.add('hide')
        changebg(e)

        
        
    })

    projectbuttonselect.addEventListener('click', (e) => {
       
        if (todobuttonselect.classList.contains('changebg')) {
            todobuttonselect.classList.remove('changebg')
            changebg(e)
            todoinputs.classList.add('hide')
            projectinputs.classList.remove('hide')
            return
        }
        todoinputs.classList.add('hide')
        projectinputs.classList.remove('hide')
        changebg(e)


    })


     



}
    
       // logic to delete projects from the master object, and then refresh the array and the domrender

       export function deleteProjects() {

  
            
        const deleteproject = document.querySelectorAll('.deleteprojectbutton')
        console.log(deleteproject)
        deleteproject.forEach((elem,ind,arr) => {
            elem.addEventListener('click', (e) => {


                // figure out which button was clicked and find appropriate project title
             
                let remove = e.target.dataset.title
               
               
                // we want to remove the according div with class projectbuttons and data=title equal to above
                // we will handle this with a function in the dom logic module

            
                // we also need to remove the project from the custom projects object
                // we have a function for this within project maker module



                // we can pass the argument of the appropriate key above 

                import('./projectmaker.js')
                .then((obj) => {
                    
                obj.removeProject(remove)


                
                   
            })

            import('./domLogic.js')
            .then((obj) => {3
            obj.updateAfterRemove(remove)})

              
            })
        })

        }


    
    
    
    
    // master function to run all functions that add button logic!
    
    export function addButtonLogic() {
        // run logic for switching image on plus icon on click 
    plusButtonImageLogic()
    
    
    //logic to add events to default project buttons 
    defaultButtonLogic()
    
    
    //logic to add events to custom project buttons 
    customButtonLogic()
    
    
    //logic to add events to todo buttons 
    todoButtonLogic()
    
    
    modalLogic()
    
    switchCreation()

    deleteProjects()

    }