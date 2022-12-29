// reset input function

export function resetInputs() {
    const input = document.querySelectorAll('input').forEach((elem,ind,arr) => {
        elem.value = ""
        elem.checked = false
    })
}


//toggle modal function

function toggleModal() {
    const modalwindow = document.querySelector('.modal')
    modalwindow.classList.toggle('show-modal')
    
}



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
    
    
    // function below adds click events to custom project title buttons
    
    export function customButtonLogic() {
    
    
        const buttons = document.querySelectorAll('.customprojecttitle')
        buttons.forEach((elem,ind,arr) => {
            elem.addEventListener('click', (e) => {
                import('./projectmaker.js')
                .then((obj) => {
        
                    console.log(e.target)
        
                   
              
               
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
    
    
    
    
    // plus switch image logic on hover and click
    
     function plusButtonImageLogic() {
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
    


    async function roast() {

        const inputcontainer = document.querySelector('.inputcontainer')
        const projectbox = document.querySelector('.project')
        const todoselectbutton = document.querySelector('.todoselect')
        const module = await import('./projectmaker.js')
        const projectbutton = document.querySelector('.projectselect')
    
    
        if (Object.keys(module.projects).length == 0) {
    
        const inputcontainer = document.querySelector('.inputcontainer')
        const projectbox = document.querySelector('.project')
        const todoselectbutton = document.querySelector('.todoselect')
    
        projectbox.classList.remove('hide')
        inputcontainer.classList.add('hide')
        todoselectbutton.disabled = true
    
    todoselectbutton.classList.remove('changebg') 
    projectbutton.classList.add('changebg')
    todoselectbutton.classList.add('ghost')
    
    }
    else {   
        todoselectbutton.disabled = false
        todoselectbutton.classList.add('changebg')
        todoselectbutton.classList.remove('ghost')  
        projectbutton.classList.remove('changebg') 
        projectbox.classList.add('hide') 
        inputcontainer.classList.remove('hide')}
    }

    
    //modal logic to be used with plus button 
    
     export function  modalLogic () {

        const plusbutton = document.querySelector('.plusbutton')
        const modalwindow = document.querySelector('.modal')
        const closebutton = document.querySelector('.closebutton')

        
    // we meed a function to determine if this is the first time we are opening the modal
    // in other words if the projects object is empty
        // then grey out the to-do section initially


roast()


// function to show and hide modal by toggling a class

        // function to toggle when modal shows or not
    
        function toggleModal() {
            modalwindow.classList.toggle('show-modal')
            
        }
    
    
    // function to consider when window outside of modal is clicked to close modal
    // since modalwindow is the modal selector which is the entire background
    // anything clicked in the background that is not the modal content will cuase the window to close
    
        function windowOnClick(event) {
           
            if (event.target === modalwindow) {
            
                toggleModal();
            }
        }
    
        window.addEventListener("click", windowOnClick);
    
        plusbutton.addEventListener('click', (e) => {
       
            // when we clikc plus too add we want to open the modal window first
           toggleModal()

           // add an event to register the close button
               // the close button:
               closebutton.addEventListener('click', (e) => {
        
                toggleModal()
        
                // reset it to default todo display 
                console.log('toto')
                resetTodo()
        
        
        
        
        
                // reset input of todo screen and all other inputs!
                resetInputs() 

              
                // run roast, check if the object does not exist again
                roast()


           
            })



           // the we want to add the appropriate listeners to the fields!

           // project::
           addProjectInputRed()


           //todofields:




            
            //add event to the main submit button!
            projectsubmitlogic()



            // add logic to

            
        })
        
    
    // add listener to close button so it clsoes modal
    
 
    
    




   function submitLogic() {

     //submit button login in modal window for todo
    // want to use the button to submit answers to appropriate module
    // then reset the inputs to nothing in them for the next addition
    
    const submit = document.querySelector('.submitbutton')
    submit.addEventListener('click', (e) => {

// function to add to todo objects list
        import('./formlogic.js')
        .then((obj) => {
        // run form controller when we click submit which gets the relevent inputs and runs todo maker
            obj.formController()
        }) 


// remove the modal after creating our todo, and reset the inputs back to their defaults

        toggleModal()
     


// we also want to ensure our inputs are truthy
// only want to require title, description date and project and complete


        // render the dom after all this, which will update all elements

        import('./domLogic.js')
        .then((o) => {
            o.render()
        })


    })
   }




    // regex pattern to check

    

    
    // function below to add events to projectinput





    
    }
    function projectsubmitlogic() {

        //submit button login in modal window for project
      // want to use the button to submit answers to appropriate module
      // then reset the inputs to nothing in them for the next addition
      
      const projectsubmit = document.querySelector('.projectsubmit')
      const projecttitle = document.querySelector('#projecttitle')
      projectsubmit.addEventListener('mousedown', (e) => {
        e.stopImmediatePropagation()
         
  console.log(projecttitle.value)
          // ensure input is truthy
          console.log('poohere', projecttitle.value)
          if (checkText(projecttitle.value)) {
            console.log(projecttitle.value, )
         
let value = projecttitle.value
       
  
  // call the project constructor!
  
  import('./projectmaker.js')
  .then((obj) => {
      // add project to the list
      console.log(value, 'valueagain')
      obj.addProject(value)
  
      // if project title is blank, throw an alert and re input the data
      console.log(projecttitle.value, 'value', obj.projects)
     
       // set project title equal to nothing again 
       resetInputs() 
  
       // clear the modal
  

  
      //update the dom
  

      import('./domLogic.js')
      .then((o) => {
          o.render()
      })


      toggleModal()
      //add event listeners after updating dom 
      
       
      
  }) 
  
          }
          else {
              addProjectInputRed()
            
  
          }
     
  // add value of title field to projects object
    
  resetInputs()
  modalLogic()
  e.stopImmediatePropagation
  
  
      })
      projecttitle.addEventListener('input', (e) => {
        console.log()
      })
  }
      



// add the dynamic background to inputs, run this in plus button modal function 
    function addProjectInputRed() {
       
        // get the text input

        
        const projectitlebar = document.querySelector('#projecttitle');
        
        // add a listener on it triggered by any input
        
        projectitlebar.addEventListener('input', (e) => {
            e.stopImmediatePropagation()
            console.log(e.target.value, 'input listener')
     
                    // 
        if (checkText(projectitlebar.value) == true){
             projectitlebar.classList.remove('redback')
    
            
            
            }
            
            else {
           
                projectitlebar.classList.add('redback')
            
            
            }
        })
        

        
        
        // run this with first submit and then be dynamic
           
        }

// regex for inputs 

    
function checkText(str) {
    let test1 = /^[^\s]*[\w!]+$/gi

   return test1.test(str)
}








// function below to add events to submitinputs
    
function addEventstoSubmitInputs() {
            
    const submittitle = document.querySelector('#title')
    const submitdescription = document.querySelector('#description')
    const submitcompleted = document.querySelector('#completed')
    const submitdate = document.querySelector('#duedate')
    const submitproject = document.querySelector('#project')

    let events = [submittitle, submitdescription, submitdate, submitproject, submitcompleted]
    events.forEach(elem => {
        elem.addEventListener('input', (e) => {
            console.log(e.target)
        })
    })
}

    

   
// function to reset to default todo display 

function resetTodo() {

    
        // reset modal window to create todo by default

        const todobuttonselect = document.querySelector('.todoselect')
        const projectbuttonselect = document.querySelector('.projectselect')
        const todoinputs = document.querySelector('.inputcontainer')
        const projectinputs = document.querySelector('.project')
        const modalwindow = document.querySelector('.modal')
    
    
           // remove the modal window
           modalwindow.classList.remove('show-modal')
    
    
           projectinputs.classList.add('hide')
           todoinputs.classList.remove('hide')
           projectbuttonselect.classList.remove('changebg')
           todobuttonselect.classList.add('changebg')

}



    //logic below to switch between creation of todo or a project

function switchCreation() {
    const todobuttonselect = document.querySelector('.todoselect')
    const projectbuttonselect = document.querySelector('.projectselect')
    const todoinputs = document.querySelector('.inputcontainer')
    const projectinputs = document.querySelector('.project')
    
    todobuttonselect.classList.add('changebg')

    function changebg(e) {
        e.target.classList.toggle('changebg')
    }

    
    todobuttonselect.addEventListener('click', (e) => {
        

        projectbuttonselect.classList.remove('changebg')
        projectinputs.classList.add('hide')
        todobuttonselect.classList.add('changebg')
        todoinputs.classList.remove('hide')


        
        
    })

    projectbuttonselect.addEventListener('click', (e) => {
       
        projectbuttonselect.classList.add('changebg')
        projectinputs.classList.remove('hide')
        todobuttonselect.classList.remove('changebg')
        todoinputs.classList.add('hide')


    })


     



}
    
       // logic to delete projects from the master object, and then refresh the array and the domrender

       export function deleteProjects() {
        import('./projectmaker.js')
        .then((obj) => {

            if (Object.keys(obj.projects).length == 0) {console.log('0 length no delete')}
            
            else { const deleteproject = document.querySelectorAll('.deleteprojectbutton')
     
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
     
                // call render custom projects since we have upated the array that it takes as an argument
                // the function itself updates the array to be rendered based on the current master project object
                roast()
                import('./domLogic.js')
                .then((obj) => {3
                obj.render()})
               
                
     
     
                // after we click on delete call roast function to determine if todo content should be invisible
                
                })
     
     
              
            })}
     
        })

        }



        // project delete button logic
    
        function deleteButtonColors() {
            const deletebuttons = document.querySelectorAll('.deleteprojectbutton')
            
            deletebuttons.forEach((elem) => {
                elem.addEventListener('mouseover', (e) => {
                    console.log(e.target.dataset.title)

                    // we determine which delte button has been hovered
                    // now we want to change the background of the corresponding div

                    const projectittles =  document.querySelectorAll('.projectbuttons')

                    projectittles.forEach((elem) => {
                        if (elem.dataset.title == e.target.dataset.title)
                        {elem.classList.add('redback')}
                    })
              
            })

            elem.addEventListener('mouseout', (e) => {
                
                const projectittles =  document.querySelectorAll('.projectbuttons')
                projectittles.forEach((elem) => {
                    if (elem.dataset.title == e.target.dataset.title)
                    {elem.classList.remove('redback')}
                })
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
    
 
 
    switchCreation()

    deleteProjects()
    
    deleteButtonColors() 
    projectsubmitlogic()
    
    addEventstoSubmitInputs()
   
  
    
    }