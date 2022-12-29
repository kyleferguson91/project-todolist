"use strict";
(self["webpackChunkproject_todolist"] = self["webpackChunkproject_todolist"] || []).push([["src_buttonlogic_js"],{

/***/ "./src/buttonlogic.js":
/*!****************************!*\
  !*** ./src/buttonlogic.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addButtonLogic": () => (/* binding */ addButtonLogic),
/* harmony export */   "customButtonLogic": () => (/* binding */ customButtonLogic),
/* harmony export */   "defaultButtonLogic": () => (/* binding */ defaultButtonLogic),
/* harmony export */   "deleteProjects": () => (/* binding */ deleteProjects),
/* harmony export */   "modalLogic": () => (/* binding */ modalLogic),
/* harmony export */   "resetInputs": () => (/* binding */ resetInputs),
/* harmony export */   "todoButtonLogic": () => (/* binding */ todoButtonLogic)
/* harmony export */ });
// reset input function

function resetInputs() {
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


function defaultButtonLogic() {


    const buttons = document.querySelectorAll('.defaultproject')
    buttons.forEach((elem,ind,arr) => {
        elem.addEventListener('click', (e) => {
            __webpack_require__.e(/*! import() */ "src_projectmaker_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
            .then((obj) => {
    
                console.log(e.target)
    
                console.log(obj.defaultprojects)
          
            console.log(obj.defaultprojects[e.target.id])
            })
            
        })
    })
    
    }
    
    
    // function below adds click events to custom project title buttons
    
    function customButtonLogic() {
    
    
        const buttons = document.querySelectorAll('.customprojecttitle')
        buttons.forEach((elem,ind,arr) => {
            elem.addEventListener('click', (e) => {
                __webpack_require__.e(/*! import() */ "src_projectmaker_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
                .then((obj) => {
        
                    console.log(e.target)
        
                   
              
               
                })
                
            })
        })
        
        }
    
    
        // function below adds click events to todo buttons
    
    function todoButtonLogic() {
    
    
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
        const module = await __webpack_require__.e(/*! import() */ "src_projectmaker_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
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
    
     function  modalLogic () {

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
        __webpack_require__.e(/*! import() */ "src_formlogic_js").then(__webpack_require__.bind(__webpack_require__, /*! ./formlogic.js */ "./src/formlogic.js"))
        .then((obj) => {
        // run form controller when we click submit which gets the relevent inputs and runs todo maker
            obj.formController()
        }) 


// remove the modal after creating our todo, and reset the inputs back to their defaults

        toggleModal()
     


// we also want to ensure our inputs are truthy
// only want to require title, description date and project and complete


        // render the dom after all this, which will update all elements

        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./domLogic.js */ "./src/domLogic.js"))
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
  
  __webpack_require__.e(/*! import() */ "src_projectmaker_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
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
  

      Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./domLogic.js */ "./src/domLogic.js"))
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

       function deleteProjects() {
        __webpack_require__.e(/*! import() */ "src_projectmaker_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
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
     
                    __webpack_require__.e(/*! import() */ "src_projectmaker_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
                    .then((obj) => {
                
     
                    obj.removeProject(remove)
     
     
                 
                    
     
     
                    
                       
                })
     
                // call render custom projects since we have upated the array that it takes as an argument
                // the function itself updates the array to be rendered based on the current master project object
                roast()
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./domLogic.js */ "./src/domLogic.js"))
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
    
    function addButtonLogic() {
        
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2J1dHRvbmxvZ2ljX2pzLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0tBQTJCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrS0FBMkI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0tBQTJCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlKQUF3QjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOEhBQXVCO0FBQy9CO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0tBQTJCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOEhBQXVCO0FBQzdCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQWM7QUFDZCxRQUFRLGtLQUEyQjtBQUNuQztBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrS0FBMkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhIQUF1QjtBQUN2QyxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9idXR0b25sb2dpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZXNldCBpbnB1dCBmdW5jdGlvblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0SW5wdXRzKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgIGVsZW0udmFsdWUgPSBcIlwiXHJcbiAgICAgICAgZWxlbS5jaGVja2VkID0gZmFsc2VcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG4vL3RvZ2dsZSBtb2RhbCBmdW5jdGlvblxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKSB7XHJcbiAgICBjb25zdCBtb2RhbHdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXHJcbiAgICBtb2RhbHdpbmRvdy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1vZGFsJylcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGJlbG93IGFkZHMgY2xpY2sgZXZlbnRzIHRvIGRlZmF1bHQgcHJvamVjdCBidXR0b25zXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRCdXR0b25Mb2dpYygpIHtcclxuXHJcblxyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWZhdWx0cHJvamVjdCcpXHJcbiAgICBidXR0b25zLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2JqLmRlZmF1bHRwcm9qZWN0cylcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvYmouZGVmYXVsdHByb2plY3RzW2UudGFyZ2V0LmlkXSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBmdW5jdGlvbiBiZWxvdyBhZGRzIGNsaWNrIGV2ZW50cyB0byBjdXN0b20gcHJvamVjdCB0aXRsZSBidXR0b25zXHJcbiAgICBcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBjdXN0b21CdXR0b25Mb2dpYygpIHtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b21wcm9qZWN0dGl0bGUnKVxyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGJlbG93IGFkZHMgY2xpY2sgZXZlbnRzIHRvIHRvZG8gYnV0dG9uc1xyXG4gICAgXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdG9kb0J1dHRvbkxvZ2ljKCkge1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9idXR0b24nKVxyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIHBsdXMgc3dpdGNoIGltYWdlIGxvZ2ljIG9uIGhvdmVyIGFuZCBjbGlja1xyXG4gICAgXHJcbiAgICAgZnVuY3Rpb24gcGx1c0J1dHRvbkltYWdlTG9naWMoKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGx1c2J1dHRvbicpXHJcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBlLnRhcmdldC5zcmMgPSAnLi4vc3JjL2ltYWdlcy9wbHVzLWNpcmNsZS1zdmdyZXBvLWNvbSgyKS5zdmcnXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3BsdXMtY2lyY2xlLXN2Z3JlcG8tY29tLnN2ZydcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5zcmMgPSAnLi4vc3JjL2ltYWdlcy9wbHVzLWNpcmNsZS1zdmdyZXBvLWNvbSgzKS5zdmcnXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJvYXN0KCkge1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dGNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuICAgICAgICBjb25zdCB0b2Rvc2VsZWN0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZWxlY3QnKVxyXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNlbGVjdCcpXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhtb2R1bGUucHJvamVjdHMpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBpbnB1dGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dGNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuICAgICAgICBjb25zdCB0b2Rvc2VsZWN0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZWxlY3QnKVxyXG4gICAgXHJcbiAgICAgICAgcHJvamVjdGJveC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICBpbnB1dGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICB0b2Rvc2VsZWN0YnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgXHJcbiAgICB0b2Rvc2VsZWN0YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZWJnJykgXHJcbiAgICBwcm9qZWN0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuICAgIHRvZG9zZWxlY3RidXR0b24uY2xhc3NMaXN0LmFkZCgnZ2hvc3QnKVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBlbHNlIHsgICBcclxuICAgICAgICB0b2Rvc2VsZWN0YnV0dG9uLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICB0b2Rvc2VsZWN0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuICAgICAgICB0b2Rvc2VsZWN0YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2dob3N0JykgIFxyXG4gICAgICAgIHByb2plY3RidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlYmcnKSBcclxuICAgICAgICBwcm9qZWN0Ym94LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSBcclxuICAgICAgICBpbnB1dGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyl9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvL21vZGFsIGxvZ2ljIHRvIGJlIHVzZWQgd2l0aCBwbHVzIGJ1dHRvbiBcclxuICAgIFxyXG4gICAgIGV4cG9ydCBmdW5jdGlvbiAgbW9kYWxMb2dpYyAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBsdXNidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1c2J1dHRvbicpXHJcbiAgICAgICAgY29uc3QgbW9kYWx3aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxyXG4gICAgICAgIGNvbnN0IGNsb3NlYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlYnV0dG9uJylcclxuXHJcbiAgICAgICAgXHJcbiAgICAvLyB3ZSBtZWVkIGEgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgd2UgYXJlIG9wZW5pbmcgdGhlIG1vZGFsXHJcbiAgICAvLyBpbiBvdGhlciB3b3JkcyBpZiB0aGUgcHJvamVjdHMgb2JqZWN0IGlzIGVtcHR5XHJcbiAgICAgICAgLy8gdGhlbiBncmV5IG91dCB0aGUgdG8tZG8gc2VjdGlvbiBpbml0aWFsbHlcclxuXHJcblxyXG5yb2FzdCgpXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gc2hvdyBhbmQgaGlkZSBtb2RhbCBieSB0b2dnbGluZyBhIGNsYXNzXHJcblxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSB3aGVuIG1vZGFsIHNob3dzIG9yIG5vdFxyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKSB7XHJcbiAgICAgICAgICAgIG1vZGFsd2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW9kYWwnKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gZnVuY3Rpb24gdG8gY29uc2lkZXIgd2hlbiB3aW5kb3cgb3V0c2lkZSBvZiBtb2RhbCBpcyBjbGlja2VkIHRvIGNsb3NlIG1vZGFsXHJcbiAgICAvLyBzaW5jZSBtb2RhbHdpbmRvdyBpcyB0aGUgbW9kYWwgc2VsZWN0b3Igd2hpY2ggaXMgdGhlIGVudGlyZSBiYWNrZ3JvdW5kXHJcbiAgICAvLyBhbnl0aGluZyBjbGlja2VkIGluIHRoZSBiYWNrZ3JvdW5kIHRoYXQgaXMgbm90IHRoZSBtb2RhbCBjb250ZW50IHdpbGwgY3Vhc2UgdGhlIHdpbmRvdyB0byBjbG9zZVxyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gd2luZG93T25DbGljayhldmVudCkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbHdpbmRvdykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvZ2dsZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHdpbmRvd09uQ2xpY2spO1xyXG4gICAgXHJcbiAgICAgICAgcGx1c2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgLy8gd2hlbiB3ZSBjbGlrYyBwbHVzIHRvbyBhZGQgd2Ugd2FudCB0byBvcGVuIHRoZSBtb2RhbCB3aW5kb3cgZmlyc3RcclxuICAgICAgICAgICB0b2dnbGVNb2RhbCgpXHJcblxyXG4gICAgICAgICAgIC8vIGFkZCBhbiBldmVudCB0byByZWdpc3RlciB0aGUgY2xvc2UgYnV0dG9uXHJcbiAgICAgICAgICAgICAgIC8vIHRoZSBjbG9zZSBidXR0b246XHJcbiAgICAgICAgICAgICAgIGNsb3NlYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvZ2dsZU1vZGFsKClcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IGl0IHRvIGRlZmF1bHQgdG9kbyBkaXNwbGF5IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvdG8nKVxyXG4gICAgICAgICAgICAgICAgcmVzZXRUb2RvKClcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IGlucHV0IG9mIHRvZG8gc2NyZWVuIGFuZCBhbGwgb3RoZXIgaW5wdXRzIVxyXG4gICAgICAgICAgICAgICAgcmVzZXRJbnB1dHMoKSBcclxuXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBydW4gcm9hc3QsIGNoZWNrIGlmIHRoZSBvYmplY3QgZG9lcyBub3QgZXhpc3QgYWdhaW5cclxuICAgICAgICAgICAgICAgIHJvYXN0KClcclxuXHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgIC8vIHRoZSB3ZSB3YW50IHRvIGFkZCB0aGUgYXBwcm9wcmlhdGUgbGlzdGVuZXJzIHRvIHRoZSBmaWVsZHMhXHJcblxyXG4gICAgICAgICAgIC8vIHByb2plY3Q6OlxyXG4gICAgICAgICAgIGFkZFByb2plY3RJbnB1dFJlZCgpXHJcblxyXG5cclxuICAgICAgICAgICAvL3RvZG9maWVsZHM6XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9hZGQgZXZlbnQgdG8gdGhlIG1haW4gc3VibWl0IGJ1dHRvbiFcclxuICAgICAgICAgICAgcHJvamVjdHN1Ym1pdGxvZ2ljKClcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGxvZ2ljIHRvXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAvLyBhZGQgbGlzdGVuZXIgdG8gY2xvc2UgYnV0dG9uIHNvIGl0IGNsc29lcyBtb2RhbFxyXG4gICAgXHJcbiBcclxuICAgIFxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4gICBmdW5jdGlvbiBzdWJtaXRMb2dpYygpIHtcclxuXHJcbiAgICAgLy9zdWJtaXQgYnV0dG9uIGxvZ2luIGluIG1vZGFsIHdpbmRvdyBmb3IgdG9kb1xyXG4gICAgLy8gd2FudCB0byB1c2UgdGhlIGJ1dHRvbiB0byBzdWJtaXQgYW5zd2VycyB0byBhcHByb3ByaWF0ZSBtb2R1bGVcclxuICAgIC8vIHRoZW4gcmVzZXQgdGhlIGlucHV0cyB0byBub3RoaW5nIGluIHRoZW0gZm9yIHRoZSBuZXh0IGFkZGl0aW9uXHJcbiAgICBcclxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRidXR0b24nKVxyXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGFkZCB0byB0b2RvIG9iamVjdHMgbGlzdFxyXG4gICAgICAgIGltcG9ydCgnLi9mb3JtbG9naWMuanMnKVxyXG4gICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICAvLyBydW4gZm9ybSBjb250cm9sbGVyIHdoZW4gd2UgY2xpY2sgc3VibWl0IHdoaWNoIGdldHMgdGhlIHJlbGV2ZW50IGlucHV0cyBhbmQgcnVucyB0b2RvIG1ha2VyXHJcbiAgICAgICAgICAgIG9iai5mb3JtQ29udHJvbGxlcigpXHJcbiAgICAgICAgfSkgXHJcblxyXG5cclxuLy8gcmVtb3ZlIHRoZSBtb2RhbCBhZnRlciBjcmVhdGluZyBvdXIgdG9kbywgYW5kIHJlc2V0IHRoZSBpbnB1dHMgYmFjayB0byB0aGVpciBkZWZhdWx0c1xyXG5cclxuICAgICAgICB0b2dnbGVNb2RhbCgpXHJcbiAgICAgXHJcblxyXG5cclxuLy8gd2UgYWxzbyB3YW50IHRvIGVuc3VyZSBvdXIgaW5wdXRzIGFyZSB0cnV0aHlcclxuLy8gb25seSB3YW50IHRvIHJlcXVpcmUgdGl0bGUsIGRlc2NyaXB0aW9uIGRhdGUgYW5kIHByb2plY3QgYW5kIGNvbXBsZXRlXHJcblxyXG5cclxuICAgICAgICAvLyByZW5kZXIgdGhlIGRvbSBhZnRlciBhbGwgdGhpcywgd2hpY2ggd2lsbCB1cGRhdGUgYWxsIGVsZW1lbnRzXHJcblxyXG4gICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICAgICAgby5yZW5kZXIoKVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH0pXHJcbiAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyByZWdleCBwYXR0ZXJuIHRvIGNoZWNrXHJcblxyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICAvLyBmdW5jdGlvbiBiZWxvdyB0byBhZGQgZXZlbnRzIHRvIHByb2plY3RpbnB1dFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHByb2plY3RzdWJtaXRsb2dpYygpIHtcclxuXHJcbiAgICAgICAgLy9zdWJtaXQgYnV0dG9uIGxvZ2luIGluIG1vZGFsIHdpbmRvdyBmb3IgcHJvamVjdFxyXG4gICAgICAvLyB3YW50IHRvIHVzZSB0aGUgYnV0dG9uIHRvIHN1Ym1pdCBhbnN3ZXJzIHRvIGFwcHJvcHJpYXRlIG1vZHVsZVxyXG4gICAgICAvLyB0aGVuIHJlc2V0IHRoZSBpbnB1dHMgdG8gbm90aGluZyBpbiB0aGVtIGZvciB0aGUgbmV4dCBhZGRpdGlvblxyXG4gICAgICBcclxuICAgICAgY29uc3QgcHJvamVjdHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c3VibWl0JylcclxuICAgICAgY29uc3QgcHJvamVjdHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3R0aXRsZScpXHJcbiAgICAgIHByb2plY3RzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgIFxyXG4gIGNvbnNvbGUubG9nKHByb2plY3R0aXRsZS52YWx1ZSlcclxuICAgICAgICAgIC8vIGVuc3VyZSBpbnB1dCBpcyB0cnV0aHlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdwb29oZXJlJywgcHJvamVjdHRpdGxlLnZhbHVlKVxyXG4gICAgICAgICAgaWYgKGNoZWNrVGV4dChwcm9qZWN0dGl0bGUudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3R0aXRsZS52YWx1ZSwgKVxyXG4gICAgICAgICBcclxubGV0IHZhbHVlID0gcHJvamVjdHRpdGxlLnZhbHVlXHJcbiAgICAgICBcclxuICBcclxuICAvLyBjYWxsIHRoZSBwcm9qZWN0IGNvbnN0cnVjdG9yIVxyXG4gIFxyXG4gIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gIC50aGVuKChvYmopID0+IHtcclxuICAgICAgLy8gYWRkIHByb2plY3QgdG8gdGhlIGxpc3RcclxuICAgICAgY29uc29sZS5sb2codmFsdWUsICd2YWx1ZWFnYWluJylcclxuICAgICAgb2JqLmFkZFByb2plY3QodmFsdWUpXHJcbiAgXHJcbiAgICAgIC8vIGlmIHByb2plY3QgdGl0bGUgaXMgYmxhbmssIHRocm93IGFuIGFsZXJ0IGFuZCByZSBpbnB1dCB0aGUgZGF0YVxyXG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0dGl0bGUudmFsdWUsICd2YWx1ZScsIG9iai5wcm9qZWN0cylcclxuICAgICBcclxuICAgICAgIC8vIHNldCBwcm9qZWN0IHRpdGxlIGVxdWFsIHRvIG5vdGhpbmcgYWdhaW4gXHJcbiAgICAgICByZXNldElucHV0cygpIFxyXG4gIFxyXG4gICAgICAgLy8gY2xlYXIgdGhlIG1vZGFsXHJcbiAgXHJcblxyXG4gIFxyXG4gICAgICAvL3VwZGF0ZSB0aGUgZG9tXHJcbiAgXHJcblxyXG4gICAgICBpbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4gICAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgICAgby5yZW5kZXIoKVxyXG4gICAgICB9KVxyXG5cclxuXHJcbiAgICAgIHRvZ2dsZU1vZGFsKClcclxuICAgICAgLy9hZGQgZXZlbnQgbGlzdGVuZXJzIGFmdGVyIHVwZGF0aW5nIGRvbSBcclxuICAgICAgXHJcbiAgICAgICBcclxuICAgICAgXHJcbiAgfSkgXHJcbiAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBhZGRQcm9qZWN0SW5wdXRSZWQoKVxyXG4gICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgIH1cclxuICAgICBcclxuICAvLyBhZGQgdmFsdWUgb2YgdGl0bGUgZmllbGQgdG8gcHJvamVjdHMgb2JqZWN0XHJcbiAgICBcclxuICByZXNldElucHV0cygpXHJcbiAgbW9kYWxMb2dpYygpXHJcbiAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb25cclxuICBcclxuICBcclxuICAgICAgfSlcclxuICAgICAgcHJvamVjdHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gICAgICBcclxuXHJcblxyXG5cclxuLy8gYWRkIHRoZSBkeW5hbWljIGJhY2tncm91bmQgdG8gaW5wdXRzLCBydW4gdGhpcyBpbiBwbHVzIGJ1dHRvbiBtb2RhbCBmdW5jdGlvbiBcclxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RJbnB1dFJlZCgpIHtcclxuICAgICAgIFxyXG4gICAgICAgIC8vIGdldCB0aGUgdGV4dCBpbnB1dFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0aXRsZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0dGl0bGUnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBhZGQgYSBsaXN0ZW5lciBvbiBpdCB0cmlnZ2VyZWQgYnkgYW55IGlucHV0XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvamVjdGl0bGViYXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlLCAnaW5wdXQgbGlzdGVuZXInKVxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFxyXG4gICAgICAgIGlmIChjaGVja1RleHQocHJvamVjdGl0bGViYXIudmFsdWUpID09IHRydWUpe1xyXG4gICAgICAgICAgICAgcHJvamVjdGl0bGViYXIuY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpXHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHByb2plY3RpdGxlYmFyLmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBydW4gdGhpcyB3aXRoIGZpcnN0IHN1Ym1pdCBhbmQgdGhlbiBiZSBkeW5hbWljXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuLy8gcmVnZXggZm9yIGlucHV0cyBcclxuXHJcbiAgICBcclxuZnVuY3Rpb24gY2hlY2tUZXh0KHN0cikge1xyXG4gICAgbGV0IHRlc3QxID0gL15bXlxcc10qW1xcdyFdKyQvZ2lcclxuXHJcbiAgIHJldHVybiB0ZXN0MS50ZXN0KHN0cilcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGJlbG93IHRvIGFkZCBldmVudHMgdG8gc3VibWl0aW5wdXRzXHJcbiAgICBcclxuZnVuY3Rpb24gYWRkRXZlbnRzdG9TdWJtaXRJbnB1dHMoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgY29uc3Qgc3VibWl0dGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKVxyXG4gICAgY29uc3Qgc3VibWl0ZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKVxyXG4gICAgY29uc3Qgc3VibWl0Y29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlZCcpXHJcbiAgICBjb25zdCBzdWJtaXRkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZWRhdGUnKVxyXG4gICAgY29uc3Qgc3VibWl0cHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JylcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gW3N1Ym1pdHRpdGxlLCBzdWJtaXRkZXNjcmlwdGlvbiwgc3VibWl0ZGF0ZSwgc3VibWl0cHJvamVjdCwgc3VibWl0Y29tcGxldGVkXVxyXG4gICAgZXZlbnRzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG4gICAgXHJcblxyXG4gICBcclxuLy8gZnVuY3Rpb24gdG8gcmVzZXQgdG8gZGVmYXVsdCB0b2RvIGRpc3BsYXkgXHJcblxyXG5mdW5jdGlvbiByZXNldFRvZG8oKSB7XHJcblxyXG4gICAgXHJcbiAgICAgICAgLy8gcmVzZXQgbW9kYWwgd2luZG93IHRvIGNyZWF0ZSB0b2RvIGJ5IGRlZmF1bHRcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb2J1dHRvbnNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2VsZWN0JylcclxuICAgICAgICBjb25zdCBwcm9qZWN0YnV0dG9uc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzZWxlY3QnKVxyXG4gICAgICAgIGNvbnN0IHRvZG9pbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRjb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICAgICAgY29uc3QgbW9kYWx3aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAvLyByZW1vdmUgdGhlIG1vZGFsIHdpbmRvd1xyXG4gICAgICAgICAgIG1vZGFsd2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbW9kYWwnKVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICBwcm9qZWN0aW5wdXRzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgICAgIHRvZG9pbnB1dHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgcHJvamVjdGJ1dHRvbnNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgICAgdG9kb2J1dHRvbnNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiAgICAvL2xvZ2ljIGJlbG93IHRvIHN3aXRjaCBiZXR3ZWVuIGNyZWF0aW9uIG9mIHRvZG8gb3IgYSBwcm9qZWN0XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hDcmVhdGlvbigpIHtcclxuICAgIGNvbnN0IHRvZG9idXR0b25zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NlbGVjdCcpXHJcbiAgICBjb25zdCBwcm9qZWN0YnV0dG9uc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzZWxlY3QnKVxyXG4gICAgY29uc3QgdG9kb2lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dGNvbnRhaW5lcicpXHJcbiAgICBjb25zdCBwcm9qZWN0aW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxyXG4gICAgXHJcbiAgICB0b2RvYnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2ViZyhlKSB7XHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlYmcnKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgdG9kb2J1dHRvbnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHByb2plY3RidXR0b25zZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlYmcnKVxyXG4gICAgICAgIHByb2plY3RpbnB1dHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgICAgdG9kb2J1dHRvbnNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgdG9kb2lucHV0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICBwcm9qZWN0YnV0dG9uc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgIHByb2plY3RidXR0b25zZWxlY3QuY2xhc3NMaXN0LmFkZCgnY2hhbmdlYmcnKVxyXG4gICAgICAgIHByb2plY3RpbnB1dHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgdG9kb2J1dHRvbnNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgdG9kb2lucHV0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgIFxyXG5cclxuXHJcblxyXG59XHJcbiAgICBcclxuICAgICAgIC8vIGxvZ2ljIHRvIGRlbGV0ZSBwcm9qZWN0cyBmcm9tIHRoZSBtYXN0ZXIgb2JqZWN0LCBhbmQgdGhlbiByZWZyZXNoIHRoZSBhcnJheSBhbmQgdGhlIGRvbXJlbmRlclxyXG5cclxuICAgICAgIGV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0cygpIHtcclxuICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMob2JqLnByb2plY3RzKS5sZW5ndGggPT0gMCkge2NvbnNvbGUubG9nKCcwIGxlbmd0aCBubyBkZWxldGUnKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsc2UgeyBjb25zdCBkZWxldGVwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZXByb2plY3RidXR0b24nKVxyXG4gICAgIFxyXG4gICAgICAgICAgICBkZWxldGVwcm9qZWN0LmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmlndXJlIG91dCB3aGljaCBidXR0b24gd2FzIGNsaWNrZWQgYW5kIGZpbmQgYXBwcm9wcmlhdGUgcHJvamVjdCB0aXRsZVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZW1vdmUgPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBhY2NvcmRpbmcgZGl2IHdpdGggY2xhc3MgcHJvamVjdGJ1dHRvbnMgYW5kIGRhdGE9dGl0bGUgZXF1YWwgdG8gYWJvdmVcclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3aWxsIGhhbmRsZSB0aGlzIHdpdGggYSBmdW5jdGlvbiBpbiB0aGUgZG9tIGxvZ2ljIG1vZHVsZVxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgYWxzbyBuZWVkIHRvIHJlbW92ZSB0aGUgcHJvamVjdCBmcm9tIHRoZSBjdXN0b20gcHJvamVjdHMgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIGZ1bmN0aW9uIGZvciB0aGlzIHdpdGhpbiBwcm9qZWN0IG1ha2VyIG1vZHVsZVxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBwYXNzIHRoZSBhcmd1bWVudCBvZiB0aGUgYXBwcm9wcmlhdGUga2V5IGFib3ZlIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG9iai5yZW1vdmVQcm9qZWN0KHJlbW92ZSlcclxuICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBjYWxsIHJlbmRlciBjdXN0b20gcHJvamVjdHMgc2luY2Ugd2UgaGF2ZSB1cGF0ZWQgdGhlIGFycmF5IHRoYXQgaXQgdGFrZXMgYXMgYW4gYXJndW1lbnRcclxuICAgICAgICAgICAgICAgIC8vIHRoZSBmdW5jdGlvbiBpdHNlbGYgdXBkYXRlcyB0aGUgYXJyYXkgdG8gYmUgcmVuZGVyZWQgYmFzZWQgb24gdGhlIGN1cnJlbnQgbWFzdGVyIHByb2plY3Qgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICByb2FzdCgpXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4gezNcclxuICAgICAgICAgICAgICAgIG9iai5yZW5kZXIoKX0pXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBhZnRlciB3ZSBjbGljayBvbiBkZWxldGUgY2FsbCByb2FzdCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgdG9kbyBjb250ZW50IHNob3VsZCBiZSBpbnZpc2libGVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIHByb2plY3QgZGVsZXRlIGJ1dHRvbiBsb2dpY1xyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gZGVsZXRlQnV0dG9uQ29sb3JzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZXByb2plY3RidXR0b24nKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGVsZXRlYnV0dG9ucy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC50aXRsZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgZGV0ZXJtaW5lIHdoaWNoIGRlbHRlIGJ1dHRvbiBoYXMgYmVlbiBob3ZlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm93IHdlIHdhbnQgdG8gY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBjb3JyZXNwb25kaW5nIGRpdlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0aXR0bGVzID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0YnV0dG9ucycpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RpdHRsZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5kYXRhc2V0LnRpdGxlID09IGUudGFyZ2V0LmRhdGFzZXQudGl0bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtLmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKX1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RpdHRsZXMgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RidXR0b25zJylcclxuICAgICAgICAgICAgICAgIHByb2plY3RpdHRsZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmRhdGFzZXQudGl0bGUgPT0gZS50YXJnZXQuZGF0YXNldC50aXRsZSlcclxuICAgICAgICAgICAgICAgICAgICB7ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdyZWRiYWNrJyl9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIC8vIG1hc3RlciBmdW5jdGlvbiB0byBydW4gYWxsIGZ1bmN0aW9ucyB0aGF0IGFkZCBidXR0b24gbG9naWMhXHJcbiAgICBcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBhZGRCdXR0b25Mb2dpYygpIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBydW4gbG9naWMgZm9yIHN3aXRjaGluZyBpbWFnZSBvbiBwbHVzIGljb24gb24gY2xpY2sgXHJcbiAgICBwbHVzQnV0dG9uSW1hZ2VMb2dpYygpXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy9sb2dpYyB0byBhZGQgZXZlbnRzIHRvIGRlZmF1bHQgcHJvamVjdCBidXR0b25zIFxyXG4gICAgZGVmYXVsdEJ1dHRvbkxvZ2ljKClcclxuICAgIFxyXG4gICAgXHJcbiAgICAvL2xvZ2ljIHRvIGFkZCBldmVudHMgdG8gY3VzdG9tIHByb2plY3QgYnV0dG9ucyBcclxuICAgIGN1c3RvbUJ1dHRvbkxvZ2ljKClcclxuICAgXHJcbiAgICBcclxuICAgIC8vbG9naWMgdG8gYWRkIGV2ZW50cyB0byB0b2RvIGJ1dHRvbnMgXHJcbiAgICB0b2RvQnV0dG9uTG9naWMoKVxyXG4gICAgXHJcbiBcclxuIFxyXG4gICAgc3dpdGNoQ3JlYXRpb24oKVxyXG5cclxuICAgIGRlbGV0ZVByb2plY3RzKClcclxuICAgIFxyXG4gICAgZGVsZXRlQnV0dG9uQ29sb3JzKCkgXHJcbiAgICBwcm9qZWN0c3VibWl0bG9naWMoKVxyXG4gICAgXHJcbiAgICBhZGRFdmVudHN0b1N1Ym1pdElucHV0cygpXHJcbiAgIFxyXG4gIFxyXG4gICAgXHJcbiAgICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9