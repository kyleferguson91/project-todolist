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
/* harmony export */   "customProjectButtonLogic": () => (/* binding */ customProjectButtonLogic),
/* harmony export */   "defaultButtonLogic": () => (/* binding */ defaultButtonLogic),
/* harmony export */   "deleteProjects": () => (/* binding */ deleteProjects),
/* harmony export */   "modalLogic": () => (/* binding */ modalLogic),
/* harmony export */   "projectTitleEvents1": () => (/* binding */ projectTitleEvents1),
/* harmony export */   "resetInputs": () => (/* binding */ resetInputs),
/* harmony export */   "todoButtonLogic": () => (/* binding */ todoButtonLogic)
/* harmony export */ });
/* harmony import */ var _domLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domLogic.js */ "./src/domLogic.js");
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




    
    
    // function below adds click events to custom project title buttons
    
    function customButtonLogic() {
    
    
        const buttons = document.querySelectorAll('.customprojecttitle')
        buttons.forEach((elem,ind,arr) => {
            elem.addEventListener('click', (e) => {
               let target = e.target.dataset.title
               
                __webpack_require__.e(/*! import() */ "src_projectmaker_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
                .then((obj) => {
        
                   
                   
                    
                    ;(0,_domLogic_js__WEBPACK_IMPORTED_MODULE_0__.populateDisplay)(target)
              
               
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
    
 
    
    








    // regex pattern to check

    

    
    // function below to add events to projectinput





    
    }

    function submitLogic() {

        //submit button login in modal window for todo
       // want to use the button to submit answers to appropriate module
       // then reset the inputs to nothing in them for the next addition
       
       const submit = document.querySelector('.submitbutton')
       submit.addEventListener('click', (e) => {
   e.stopImmediatePropagation()
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
   
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./buttonlogic.js */ "./src/buttonlogic.js"))
        .then((obj) => {
            obj.addButtonLogic()
            obj.modalLogic()
        })
   
       })
       resetInputs()
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
          if (checkText(projecttitle.value) == true) {
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
    let test1 = /^[^\s]*[\w!|\s]+$/gi

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

            if (Object.keys(obj.projects).length == 0) {
      }
            
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
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./buttonlogic.js */ "./src/buttonlogic.js"))
                    .then((o) => 
                    {o.addButtonLogic()
                  o.modalLogic()})
     
                 
                    
     
     
                    
                       
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



//function here to add event listeners to product buttons to update todo display
//we will have a function when clicked to update them accordingly
//

function projectTitleEvents1() {
const tododisplay = document.querySelector('.todocontent')

// when we click all, loop through array all and display the contents!

const alltitle = document.querySelector('#all')
const today = document.querySelector('#today')
const thisweek = document.querySelector('#thisweek')

const defaults = [alltitle, today, thisweek]
defaults.forEach((elem,ind,arr) => {
    elem.addEventListener('click', (e) => {
        console.log(e.target, 'profunc')
    })
})

}

// function below adds click events to default project buttons


function defaultButtonLogic() {


    const buttons = document.querySelectorAll('.defaultproject')
    buttons.forEach((elem,ind,arr) => {
        elem.addEventListener('click', (e) => {
            __webpack_require__.e(/*! import() */ "src_projectmaker_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
            .then((obj) => {
    
            })
            ;(0,_domLogic_js__WEBPACK_IMPORTED_MODULE_0__.populateDisplay)(e.target.id)
            // depending on the value of e.target.id, we want to call that specific array
            // and feed it to a dom function that loops the array and populates the display!
            // all will be the default arr

            if (e.target.id == "all") {
                console.log(e.target.id)
            }
            else if (e.target.id == "today"){console.log(e.target.id)}
            else if (e.target.id == "thisweek"){console.log(e.target.id)}
 

           
          
    
            
        })
    })
    
    }

    function customProjectButtonLogic() {


        const buttons = document.querySelectorAll('.customprojecttitle')
        buttons.forEach((elem,ind,arr) => {
            elem.addEventListener('click', (e) => {
                __webpack_require__.e(/*! import() */ "src_projectmaker_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
                .then((obj) => {
        
                })
                ;(0,_domLogic_js__WEBPACK_IMPORTED_MODULE_0__.populateDisplay)(e.target.id)
                // depending on the value of e.target.id, we want to call that specific array
                // and feed it to a dom function that loops the array and populates the display!
                // all will be the default arr
    
                if (e.target.id == "all") {
                    console.log(e.target.id)
                }
                else if (e.target.id == "today"){console.log(e.target.id)}
                else if (e.target.id == "thisweek"){console.log(e.target.id)}
     
    
               
              
        
                
            })
        })
        
        }
    

function todoswitcher() {
    const tododisplay = document.querySelector('.todocontent')

}



    
    // master function to run all functions that add button logic!
    
    function addButtonLogic() {
        
        // run logic for switching image on plus icon on click 
    plusButtonImageLogic()
    
    
    //logic to add events to default project buttons 
    defaultButtonLogic()
    
    customProjectButtonLogic()
    //logic to add events to custom project buttons 
    customButtonLogic()
   
    
    //logic to add events to todo buttons 
    todoButtonLogic()
    

 
    switchCreation()

    deleteProjects()
    
    deleteButtonColors() 
    projectsubmitlogic()
    submitLogic()
    addEventstoSubmitInputs()
   
  
    
    }

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrS0FBMkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4SEFBdUI7QUFDN0I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LXRvZG9saXN0Ly4vc3JjL2J1dHRvbmxvZ2ljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlc2V0IGlucHV0IGZ1bmN0aW9uXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRJbnB1dHMoKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgZWxlbS52YWx1ZSA9IFwiXCJcclxuICAgICAgICBlbGVtLmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbi8vdG9nZ2xlIG1vZGFsIGZ1bmN0aW9uXHJcblxyXG5mdW5jdGlvbiB0b2dnbGVNb2RhbCgpIHtcclxuICAgIGNvbnN0IG1vZGFsd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcclxuICAgIG1vZGFsd2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW9kYWwnKVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gZnVuY3Rpb24gYmVsb3cgYWRkcyBjbGljayBldmVudHMgdG8gY3VzdG9tIHByb2plY3QgdGl0bGUgYnV0dG9uc1xyXG4gICAgXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gY3VzdG9tQnV0dG9uTG9naWMoKSB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tcHJvamVjdHRpdGxlJylcclxuICAgICAgICBidXR0b25zLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0LmRhdGFzZXQudGl0bGVcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVEaXNwbGF5KHRhcmdldClcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGJlbG93IGFkZHMgY2xpY2sgZXZlbnRzIHRvIHRvZG8gYnV0dG9uc1xyXG4gICAgXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdG9kb0J1dHRvbkxvZ2ljKCkge1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9idXR0b24nKVxyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIHBsdXMgc3dpdGNoIGltYWdlIGxvZ2ljIG9uIGhvdmVyIGFuZCBjbGlja1xyXG4gICAgXHJcbiAgICAgZnVuY3Rpb24gcGx1c0J1dHRvbkltYWdlTG9naWMoKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGx1c2J1dHRvbicpXHJcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBlLnRhcmdldC5zcmMgPSAnLi4vc3JjL2ltYWdlcy9wbHVzLWNpcmNsZS1zdmdyZXBvLWNvbSgyKS5zdmcnXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3BsdXMtY2lyY2xlLXN2Z3JlcG8tY29tLnN2ZydcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5zcmMgPSAnLi4vc3JjL2ltYWdlcy9wbHVzLWNpcmNsZS1zdmdyZXBvLWNvbSgzKS5zdmcnXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJvYXN0KCkge1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dGNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuICAgICAgICBjb25zdCB0b2Rvc2VsZWN0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZWxlY3QnKVxyXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNlbGVjdCcpXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhtb2R1bGUucHJvamVjdHMpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBpbnB1dGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dGNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuICAgICAgICBjb25zdCB0b2Rvc2VsZWN0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZWxlY3QnKVxyXG4gICAgXHJcbiAgICAgICAgcHJvamVjdGJveC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICBpbnB1dGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICB0b2Rvc2VsZWN0YnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgXHJcbiAgICB0b2Rvc2VsZWN0YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZWJnJykgXHJcbiAgICBwcm9qZWN0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuICAgIHRvZG9zZWxlY3RidXR0b24uY2xhc3NMaXN0LmFkZCgnZ2hvc3QnKVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBlbHNlIHsgICBcclxuICAgICAgICB0b2Rvc2VsZWN0YnV0dG9uLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICB0b2Rvc2VsZWN0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuICAgICAgICB0b2Rvc2VsZWN0YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2dob3N0JykgIFxyXG4gICAgICAgIHByb2plY3RidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlYmcnKSBcclxuICAgICAgICBwcm9qZWN0Ym94LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSBcclxuICAgICAgICBpbnB1dGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyl9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvL21vZGFsIGxvZ2ljIHRvIGJlIHVzZWQgd2l0aCBwbHVzIGJ1dHRvbiBcclxuICAgIFxyXG4gICAgIGV4cG9ydCBmdW5jdGlvbiAgbW9kYWxMb2dpYyAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBsdXNidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1c2J1dHRvbicpXHJcbiAgICAgICAgY29uc3QgbW9kYWx3aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxyXG4gICAgICAgIGNvbnN0IGNsb3NlYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlYnV0dG9uJylcclxuXHJcbiAgICAgICAgXHJcbiAgICAvLyB3ZSBtZWVkIGEgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgd2UgYXJlIG9wZW5pbmcgdGhlIG1vZGFsXHJcbiAgICAvLyBpbiBvdGhlciB3b3JkcyBpZiB0aGUgcHJvamVjdHMgb2JqZWN0IGlzIGVtcHR5XHJcbiAgICAgICAgLy8gdGhlbiBncmV5IG91dCB0aGUgdG8tZG8gc2VjdGlvbiBpbml0aWFsbHlcclxuXHJcblxyXG5yb2FzdCgpXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gc2hvdyBhbmQgaGlkZSBtb2RhbCBieSB0b2dnbGluZyBhIGNsYXNzXHJcblxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSB3aGVuIG1vZGFsIHNob3dzIG9yIG5vdFxyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKSB7XHJcbiAgICAgICAgICAgIG1vZGFsd2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW9kYWwnKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gZnVuY3Rpb24gdG8gY29uc2lkZXIgd2hlbiB3aW5kb3cgb3V0c2lkZSBvZiBtb2RhbCBpcyBjbGlja2VkIHRvIGNsb3NlIG1vZGFsXHJcbiAgICAvLyBzaW5jZSBtb2RhbHdpbmRvdyBpcyB0aGUgbW9kYWwgc2VsZWN0b3Igd2hpY2ggaXMgdGhlIGVudGlyZSBiYWNrZ3JvdW5kXHJcbiAgICAvLyBhbnl0aGluZyBjbGlja2VkIGluIHRoZSBiYWNrZ3JvdW5kIHRoYXQgaXMgbm90IHRoZSBtb2RhbCBjb250ZW50IHdpbGwgY3Vhc2UgdGhlIHdpbmRvdyB0byBjbG9zZVxyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gd2luZG93T25DbGljayhldmVudCkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbHdpbmRvdykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvZ2dsZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHdpbmRvd09uQ2xpY2spO1xyXG4gICAgXHJcbiAgICAgICAgcGx1c2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgLy8gd2hlbiB3ZSBjbGlrYyBwbHVzIHRvbyBhZGQgd2Ugd2FudCB0byBvcGVuIHRoZSBtb2RhbCB3aW5kb3cgZmlyc3RcclxuICAgICAgICAgICB0b2dnbGVNb2RhbCgpXHJcblxyXG4gICAgICAgICAgIC8vIGFkZCBhbiBldmVudCB0byByZWdpc3RlciB0aGUgY2xvc2UgYnV0dG9uXHJcbiAgICAgICAgICAgICAgIC8vIHRoZSBjbG9zZSBidXR0b246XHJcbiAgICAgICAgICAgICAgIGNsb3NlYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvZ2dsZU1vZGFsKClcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IGl0IHRvIGRlZmF1bHQgdG9kbyBkaXNwbGF5IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvdG8nKVxyXG4gICAgICAgICAgICAgICAgcmVzZXRUb2RvKClcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IGlucHV0IG9mIHRvZG8gc2NyZWVuIGFuZCBhbGwgb3RoZXIgaW5wdXRzIVxyXG4gICAgICAgICAgICAgICAgcmVzZXRJbnB1dHMoKSBcclxuXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBydW4gcm9hc3QsIGNoZWNrIGlmIHRoZSBvYmplY3QgZG9lcyBub3QgZXhpc3QgYWdhaW5cclxuICAgICAgICAgICAgICAgIHJvYXN0KClcclxuXHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgIC8vIHRoZSB3ZSB3YW50IHRvIGFkZCB0aGUgYXBwcm9wcmlhdGUgbGlzdGVuZXJzIHRvIHRoZSBmaWVsZHMhXHJcblxyXG4gICAgICAgICAgIC8vIHByb2plY3Q6OlxyXG4gICAgICAgICAgIGFkZFByb2plY3RJbnB1dFJlZCgpXHJcblxyXG5cclxuICAgICAgICAgICAvL3RvZG9maWVsZHM6XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9hZGQgZXZlbnQgdG8gdGhlIG1haW4gc3VibWl0IGJ1dHRvbiFcclxuICAgICAgICAgICAgcHJvamVjdHN1Ym1pdGxvZ2ljKClcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGxvZ2ljIHRvXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAvLyBhZGQgbGlzdGVuZXIgdG8gY2xvc2UgYnV0dG9uIHNvIGl0IGNsc29lcyBtb2RhbFxyXG4gICAgXHJcbiBcclxuICAgIFxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIHJlZ2V4IHBhdHRlcm4gdG8gY2hlY2tcclxuXHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIC8vIGZ1bmN0aW9uIGJlbG93IHRvIGFkZCBldmVudHMgdG8gcHJvamVjdGlucHV0XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdExvZ2ljKCkge1xyXG5cclxuICAgICAgICAvL3N1Ym1pdCBidXR0b24gbG9naW4gaW4gbW9kYWwgd2luZG93IGZvciB0b2RvXHJcbiAgICAgICAvLyB3YW50IHRvIHVzZSB0aGUgYnV0dG9uIHRvIHN1Ym1pdCBhbnN3ZXJzIHRvIGFwcHJvcHJpYXRlIG1vZHVsZVxyXG4gICAgICAgLy8gdGhlbiByZXNldCB0aGUgaW5wdXRzIHRvIG5vdGhpbmcgaW4gdGhlbSBmb3IgdGhlIG5leHQgYWRkaXRpb25cclxuICAgICAgIFxyXG4gICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdGJ1dHRvbicpXHJcbiAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgIC8vIGZ1bmN0aW9uIHRvIGFkZCB0byB0b2RvIG9iamVjdHMgbGlzdFxyXG4gICAgICAgICAgIGltcG9ydCgnLi9mb3JtbG9naWMuanMnKVxyXG4gICAgICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICAgICAvLyBydW4gZm9ybSBjb250cm9sbGVyIHdoZW4gd2UgY2xpY2sgc3VibWl0IHdoaWNoIGdldHMgdGhlIHJlbGV2ZW50IGlucHV0cyBhbmQgcnVucyB0b2RvIG1ha2VyXHJcbiAgICAgICAgICAgICAgIG9iai5mb3JtQ29udHJvbGxlcigpXHJcbiAgICAgICAgICAgfSkgXHJcbiAgIFxyXG4gICBcclxuICAgLy8gcmVtb3ZlIHRoZSBtb2RhbCBhZnRlciBjcmVhdGluZyBvdXIgdG9kbywgYW5kIHJlc2V0IHRoZSBpbnB1dHMgYmFjayB0byB0aGVpciBkZWZhdWx0c1xyXG4gICBcclxuICAgICAgICAgICB0b2dnbGVNb2RhbCgpXHJcbiAgICAgICAgXHJcbiAgIFxyXG4gICBcclxuICAgLy8gd2UgYWxzbyB3YW50IHRvIGVuc3VyZSBvdXIgaW5wdXRzIGFyZSB0cnV0aHlcclxuICAgLy8gb25seSB3YW50IHRvIHJlcXVpcmUgdGl0bGUsIGRlc2NyaXB0aW9uIGRhdGUgYW5kIHByb2plY3QgYW5kIGNvbXBsZXRlXHJcbiAgIFxyXG4gICBcclxuICAgICAgICAgICAvLyByZW5kZXIgdGhlIGRvbSBhZnRlciBhbGwgdGhpcywgd2hpY2ggd2lsbCB1cGRhdGUgYWxsIGVsZW1lbnRzXHJcbiAgIFxyXG4gICAgICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICAgICAgICAgby5yZW5kZXIoKVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICB9KVxyXG4gICBcclxuICAgICAgICBpbXBvcnQoJy4vYnV0dG9ubG9naWMuanMnKVxyXG4gICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICAgICAgb2JqLmFkZEJ1dHRvbkxvZ2ljKClcclxuICAgICAgICAgICAgb2JqLm1vZGFsTG9naWMoKVxyXG4gICAgICAgIH0pXHJcbiAgIFxyXG4gICAgICAgfSlcclxuICAgICAgIHJlc2V0SW5wdXRzKClcclxuICAgICAgfVxyXG4gICBcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHByb2plY3RzdWJtaXRsb2dpYygpIHtcclxuXHJcbiAgICAgICAgLy9zdWJtaXQgYnV0dG9uIGxvZ2luIGluIG1vZGFsIHdpbmRvdyBmb3IgcHJvamVjdFxyXG4gICAgICAvLyB3YW50IHRvIHVzZSB0aGUgYnV0dG9uIHRvIHN1Ym1pdCBhbnN3ZXJzIHRvIGFwcHJvcHJpYXRlIG1vZHVsZVxyXG4gICAgICAvLyB0aGVuIHJlc2V0IHRoZSBpbnB1dHMgdG8gbm90aGluZyBpbiB0aGVtIGZvciB0aGUgbmV4dCBhZGRpdGlvblxyXG4gICAgICBcclxuICAgICAgY29uc3QgcHJvamVjdHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c3VibWl0JylcclxuICAgICAgY29uc3QgcHJvamVjdHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3R0aXRsZScpXHJcbiAgICAgIHByb2plY3RzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgIFxyXG4gIGNvbnNvbGUubG9nKHByb2plY3R0aXRsZS52YWx1ZSlcclxuICAgICAgICAgIC8vIGVuc3VyZSBpbnB1dCBpcyB0cnV0aHlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdwb29oZXJlJywgcHJvamVjdHRpdGxlLnZhbHVlKVxyXG4gICAgICAgICAgaWYgKGNoZWNrVGV4dChwcm9qZWN0dGl0bGUudmFsdWUpID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHRpdGxlLnZhbHVlLCApXHJcbiAgICAgICAgIFxyXG5sZXQgdmFsdWUgPSBwcm9qZWN0dGl0bGUudmFsdWVcclxuICAgICAgIFxyXG4gIFxyXG4gIC8vIGNhbGwgdGhlIHByb2plY3QgY29uc3RydWN0b3IhXHJcbiAgXHJcbiAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgICAvLyBhZGQgcHJvamVjdCB0byB0aGUgbGlzdFxyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZSwgJ3ZhbHVlYWdhaW4nKVxyXG4gICAgICBvYmouYWRkUHJvamVjdCh2YWx1ZSlcclxuICBcclxuICAgICAgLy8gaWYgcHJvamVjdCB0aXRsZSBpcyBibGFuaywgdGhyb3cgYW4gYWxlcnQgYW5kIHJlIGlucHV0IHRoZSBkYXRhXHJcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3R0aXRsZS52YWx1ZSwgJ3ZhbHVlJywgb2JqLnByb2plY3RzKVxyXG4gICAgIFxyXG4gICAgICAgLy8gc2V0IHByb2plY3QgdGl0bGUgZXF1YWwgdG8gbm90aGluZyBhZ2FpbiBcclxuICAgICAgIHJlc2V0SW5wdXRzKCkgXHJcbiAgXHJcbiAgICAgICAvLyBjbGVhciB0aGUgbW9kYWxcclxuICBcclxuXHJcbiAgXHJcbiAgICAgIC8vdXBkYXRlIHRoZSBkb21cclxuICBcclxuXHJcbiAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICBvLnJlbmRlcigpXHJcbiAgICAgIH0pXHJcblxyXG5cclxuICAgICAgdG9nZ2xlTW9kYWwoKVxyXG4gICAgICAvL2FkZCBldmVudCBsaXN0ZW5lcnMgYWZ0ZXIgdXBkYXRpbmcgZG9tIFxyXG4gICAgICBcclxuICAgICAgIFxyXG4gICAgICBcclxuICB9KSBcclxuICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGFkZFByb2plY3RJbnB1dFJlZCgpXHJcbiAgICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgIH1cclxuICAgICBcclxuICAvLyBhZGQgdmFsdWUgb2YgdGl0bGUgZmllbGQgdG8gcHJvamVjdHMgb2JqZWN0XHJcbiAgICBcclxuICByZXNldElucHV0cygpXHJcbiAgbW9kYWxMb2dpYygpXHJcbiAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb25cclxuICBcclxuICBcclxuICAgICAgfSlcclxuICAgICAgcHJvamVjdHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gICAgICBcclxuXHJcblxyXG5cclxuLy8gYWRkIHRoZSBkeW5hbWljIGJhY2tncm91bmQgdG8gaW5wdXRzLCBydW4gdGhpcyBpbiBwbHVzIGJ1dHRvbiBtb2RhbCBmdW5jdGlvbiBcclxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RJbnB1dFJlZCgpIHtcclxuICAgICAgIFxyXG4gICAgICAgIC8vIGdldCB0aGUgdGV4dCBpbnB1dFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0aXRsZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0dGl0bGUnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBhZGQgYSBsaXN0ZW5lciBvbiBpdCB0cmlnZ2VyZWQgYnkgYW55IGlucHV0XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvamVjdGl0bGViYXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlLCAnaW5wdXQgbGlzdGVuZXInKVxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFxyXG4gICAgICAgIGlmIChjaGVja1RleHQocHJvamVjdGl0bGViYXIudmFsdWUpID09IHRydWUpe1xyXG4gICAgICAgICAgICAgcHJvamVjdGl0bGViYXIuY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpXHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHByb2plY3RpdGxlYmFyLmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBydW4gdGhpcyB3aXRoIGZpcnN0IHN1Ym1pdCBhbmQgdGhlbiBiZSBkeW5hbWljXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuLy8gcmVnZXggZm9yIGlucHV0cyBcclxuXHJcbiAgICBcclxuZnVuY3Rpb24gY2hlY2tUZXh0KHN0cikge1xyXG4gICAgbGV0IHRlc3QxID0gL15bXlxcc10qW1xcdyF8XFxzXSskL2dpXHJcblxyXG4gICByZXR1cm4gdGVzdDEudGVzdChzdHIpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBiZWxvdyB0byBhZGQgZXZlbnRzIHRvIHN1Ym1pdGlucHV0c1xyXG4gICAgXHJcbmZ1bmN0aW9uIGFkZEV2ZW50c3RvU3VibWl0SW5wdXRzKCkge1xyXG4gICAgICAgICAgICBcclxuICAgIGNvbnN0IHN1Ym1pdHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJylcclxuICAgIGNvbnN0IHN1Ym1pdGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJylcclxuICAgIGNvbnN0IHN1Ym1pdGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wbGV0ZWQnKVxyXG4gICAgY29uc3Qgc3VibWl0ZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJylcclxuICAgIGNvbnN0IHN1Ym1pdHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpXHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IFtzdWJtaXR0aXRsZSwgc3VibWl0ZGVzY3JpcHRpb24sIHN1Ym1pdGRhdGUsIHN1Ym1pdHByb2plY3QsIHN1Ym1pdGNvbXBsZXRlZF1cclxuICAgIGV2ZW50cy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuICAgIFxyXG5cclxuICAgXHJcbi8vIGZ1bmN0aW9uIHRvIHJlc2V0IHRvIGRlZmF1bHQgdG9kbyBkaXNwbGF5IFxyXG5cclxuZnVuY3Rpb24gcmVzZXRUb2RvKCkge1xyXG5cclxuICAgIFxyXG4gICAgICAgIC8vIHJlc2V0IG1vZGFsIHdpbmRvdyB0byBjcmVhdGUgdG9kbyBieSBkZWZhdWx0XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9idXR0b25zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NlbGVjdCcpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGJ1dHRvbnNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c2VsZWN0JylcclxuICAgICAgICBjb25zdCB0b2RvaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Y29udGFpbmVyJylcclxuICAgICAgICBjb25zdCBwcm9qZWN0aW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxyXG4gICAgICAgIGNvbnN0IG1vZGFsd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBtb2RhbCB3aW5kb3dcclxuICAgICAgICAgICBtb2RhbHdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LW1vZGFsJylcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgcHJvamVjdGlucHV0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICAgICB0b2RvaW5wdXRzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgICAgIHByb2plY3RidXR0b25zZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlYmcnKVxyXG4gICAgICAgICAgIHRvZG9idXR0b25zZWxlY3QuY2xhc3NMaXN0LmFkZCgnY2hhbmdlYmcnKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4gICAgLy9sb2dpYyBiZWxvdyB0byBzd2l0Y2ggYmV0d2VlbiBjcmVhdGlvbiBvZiB0b2RvIG9yIGEgcHJvamVjdFxyXG5cclxuZnVuY3Rpb24gc3dpdGNoQ3JlYXRpb24oKSB7XHJcbiAgICBjb25zdCB0b2RvYnV0dG9uc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZWxlY3QnKVxyXG4gICAgY29uc3QgcHJvamVjdGJ1dHRvbnNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c2VsZWN0JylcclxuICAgIGNvbnN0IHRvZG9pbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRjb250YWluZXInKVxyXG4gICAgY29uc3QgcHJvamVjdGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuICAgIFxyXG4gICAgdG9kb2J1dHRvbnNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlYmcoZSkge1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NoYW5nZWJnJylcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHRvZG9idXR0b25zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBwcm9qZWN0YnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZWJnJylcclxuICAgICAgICBwcm9qZWN0aW5wdXRzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgIHRvZG9idXR0b25zZWxlY3QuY2xhc3NMaXN0LmFkZCgnY2hhbmdlYmcnKVxyXG4gICAgICAgIHRvZG9pbnB1dHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH0pXHJcblxyXG4gICAgcHJvamVjdGJ1dHRvbnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICBwcm9qZWN0YnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuICAgICAgICBwcm9qZWN0aW5wdXRzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgIHRvZG9idXR0b25zZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlYmcnKVxyXG4gICAgICAgIHRvZG9pbnB1dHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcblxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuICAgICBcclxuXHJcblxyXG5cclxufVxyXG4gICAgXHJcbiAgICAgICAvLyBsb2dpYyB0byBkZWxldGUgcHJvamVjdHMgZnJvbSB0aGUgbWFzdGVyIG9iamVjdCwgYW5kIHRoZW4gcmVmcmVzaCB0aGUgYXJyYXkgYW5kIHRoZSBkb21yZW5kZXJcclxuXHJcbiAgICAgICBleHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdHMoKSB7XHJcbiAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG9iai5wcm9qZWN0cykubGVuZ3RoID09IDApIHtcclxuICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZWxzZSB7IGNvbnN0IGRlbGV0ZXByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlcHJvamVjdGJ1dHRvbicpXHJcbiAgICAgXHJcbiAgICAgICAgICAgIGRlbGV0ZXByb2plY3QuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBmaWd1cmUgb3V0IHdoaWNoIGJ1dHRvbiB3YXMgY2xpY2tlZCBhbmQgZmluZCBhcHByb3ByaWF0ZSBwcm9qZWN0IHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlbW92ZSA9IGUudGFyZ2V0LmRhdGFzZXQudGl0bGVcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2FudCB0byByZW1vdmUgdGhlIGFjY29yZGluZyBkaXYgd2l0aCBjbGFzcyBwcm9qZWN0YnV0dG9ucyBhbmQgZGF0YT10aXRsZSBlcXVhbCB0byBhYm92ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHdpbGwgaGFuZGxlIHRoaXMgd2l0aCBhIGZ1bmN0aW9uIGluIHRoZSBkb20gbG9naWMgbW9kdWxlXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBhbHNvIG5lZWQgdG8gcmVtb3ZlIHRoZSBwcm9qZWN0IGZyb20gdGhlIGN1c3RvbSBwcm9qZWN0cyBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIGEgZnVuY3Rpb24gZm9yIHRoaXMgd2l0aGluIHByb2plY3QgbWFrZXIgbW9kdWxlXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2FuIHBhc3MgdGhlIGFyZ3VtZW50IG9mIHRoZSBhcHByb3ByaWF0ZSBrZXkgYWJvdmUgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLnJlbW92ZVByb2plY3QocmVtb3ZlKVxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKG8pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIHtvLmFkZEJ1dHRvbkxvZ2ljKClcclxuICAgICAgICAgICAgICAgICAgby5tb2RhbExvZ2ljKCl9KVxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGNhbGwgcmVuZGVyIGN1c3RvbSBwcm9qZWN0cyBzaW5jZSB3ZSBoYXZlIHVwYXRlZCB0aGUgYXJyYXkgdGhhdCBpdCB0YWtlcyBhcyBhbiBhcmd1bWVudFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIGZ1bmN0aW9uIGl0c2VsZiB1cGRhdGVzIHRoZSBhcnJheSB0byBiZSByZW5kZXJlZCBiYXNlZCBvbiB0aGUgY3VycmVudCBtYXN0ZXIgcHJvamVjdCBvYmplY3RcclxuICAgICAgICAgICAgICAgIHJvYXN0KClcclxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigob2JqKSA9PiB7M1xyXG4gICAgICAgICAgICAgICAgb2JqLnJlbmRlcigpfSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGFmdGVyIHdlIGNsaWNrIG9uIGRlbGV0ZSBjYWxsIHJvYXN0IGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiB0b2RvIGNvbnRlbnQgc2hvdWxkIGJlIGludmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgIFxyXG4gICAgIFxyXG5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIHByb2plY3QgZGVsZXRlIGJ1dHRvbiBsb2dpY1xyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gZGVsZXRlQnV0dG9uQ29sb3JzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZXByb2plY3RidXR0b24nKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGVsZXRlYnV0dG9ucy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC50aXRsZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgZGV0ZXJtaW5lIHdoaWNoIGRlbHRlIGJ1dHRvbiBoYXMgYmVlbiBob3ZlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm93IHdlIHdhbnQgdG8gY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBjb3JyZXNwb25kaW5nIGRpdlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0aXR0bGVzID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0YnV0dG9ucycpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RpdHRsZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5kYXRhc2V0LnRpdGxlID09IGUudGFyZ2V0LmRhdGFzZXQudGl0bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtLmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKX1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RpdHRsZXMgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RidXR0b25zJylcclxuICAgICAgICAgICAgICAgIHByb2plY3RpdHRsZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmRhdGFzZXQudGl0bGUgPT0gZS50YXJnZXQuZGF0YXNldC50aXRsZSlcclxuICAgICAgICAgICAgICAgICAgICB7ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdyZWRiYWNrJyl9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbi8vZnVuY3Rpb24gaGVyZSB0byBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHByb2R1Y3QgYnV0dG9ucyB0byB1cGRhdGUgdG9kbyBkaXNwbGF5XHJcbi8vd2Ugd2lsbCBoYXZlIGEgZnVuY3Rpb24gd2hlbiBjbGlja2VkIHRvIHVwZGF0ZSB0aGVtIGFjY29yZGluZ2x5XHJcbi8vXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFRpdGxlRXZlbnRzMSgpIHtcclxuY29uc3QgdG9kb2Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2NvbnRlbnQnKVxyXG5cclxuLy8gd2hlbiB3ZSBjbGljayBhbGwsIGxvb3AgdGhyb3VnaCBhcnJheSBhbGwgYW5kIGRpc3BsYXkgdGhlIGNvbnRlbnRzIVxyXG5cclxuY29uc3QgYWxsdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsJylcclxuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKVxyXG5jb25zdCB0aGlzd2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGlzd2VlaycpXHJcblxyXG5jb25zdCBkZWZhdWx0cyA9IFthbGx0aXRsZSwgdG9kYXksIHRoaXN3ZWVrXVxyXG5kZWZhdWx0cy5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LCAncHJvZnVuYycpXHJcbiAgICB9KVxyXG59KVxyXG5cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gYmVsb3cgYWRkcyBjbGljayBldmVudHMgdG8gZGVmYXVsdCBwcm9qZWN0IGJ1dHRvbnNcclxuaW1wb3J0IHtwb3B1bGF0ZURpc3BsYXl9IGZyb20gJy4vZG9tTG9naWMuanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEJ1dHRvbkxvZ2ljKCkge1xyXG5cclxuXHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlZmF1bHRwcm9qZWN0JylcclxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcG9wdWxhdGVEaXNwbGF5KGUudGFyZ2V0LmlkKVxyXG4gICAgICAgICAgICAvLyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIGUudGFyZ2V0LmlkLCB3ZSB3YW50IHRvIGNhbGwgdGhhdCBzcGVjaWZpYyBhcnJheVxyXG4gICAgICAgICAgICAvLyBhbmQgZmVlZCBpdCB0byBhIGRvbSBmdW5jdGlvbiB0aGF0IGxvb3BzIHRoZSBhcnJheSBhbmQgcG9wdWxhdGVzIHRoZSBkaXNwbGF5IVxyXG4gICAgICAgICAgICAvLyBhbGwgd2lsbCBiZSB0aGUgZGVmYXVsdCBhcnJcclxuXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSBcInRvZGF5XCIpe2NvbnNvbGUubG9nKGUudGFyZ2V0LmlkKX1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuaWQgPT0gXCJ0aGlzd2Vla1wiKXtjb25zb2xlLmxvZyhlLnRhcmdldC5pZCl9XHJcbiBcclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBjdXN0b21Qcm9qZWN0QnV0dG9uTG9naWMoKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbXByb2plY3R0aXRsZScpXHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZURpc3BsYXkoZS50YXJnZXQuaWQpXHJcbiAgICAgICAgICAgICAgICAvLyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIGUudGFyZ2V0LmlkLCB3ZSB3YW50IHRvIGNhbGwgdGhhdCBzcGVjaWZpYyBhcnJheVxyXG4gICAgICAgICAgICAgICAgLy8gYW5kIGZlZWQgaXQgdG8gYSBkb20gZnVuY3Rpb24gdGhhdCBsb29wcyB0aGUgYXJyYXkgYW5kIHBvcHVsYXRlcyB0aGUgZGlzcGxheSFcclxuICAgICAgICAgICAgICAgIC8vIGFsbCB3aWxsIGJlIHRoZSBkZWZhdWx0IGFyclxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuaWQgPT0gXCJ0b2RheVwiKXtjb25zb2xlLmxvZyhlLnRhcmdldC5pZCl9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSBcInRoaXN3ZWVrXCIpe2NvbnNvbGUubG9nKGUudGFyZ2V0LmlkKX1cclxuICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcblxyXG5mdW5jdGlvbiB0b2Rvc3dpdGNoZXIoKSB7XHJcbiAgICBjb25zdCB0b2RvZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvY29udGVudCcpXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiAgICBcclxuICAgIC8vIG1hc3RlciBmdW5jdGlvbiB0byBydW4gYWxsIGZ1bmN0aW9ucyB0aGF0IGFkZCBidXR0b24gbG9naWMhXHJcbiAgICBcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBhZGRCdXR0b25Mb2dpYygpIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBydW4gbG9naWMgZm9yIHN3aXRjaGluZyBpbWFnZSBvbiBwbHVzIGljb24gb24gY2xpY2sgXHJcbiAgICBwbHVzQnV0dG9uSW1hZ2VMb2dpYygpXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy9sb2dpYyB0byBhZGQgZXZlbnRzIHRvIGRlZmF1bHQgcHJvamVjdCBidXR0b25zIFxyXG4gICAgZGVmYXVsdEJ1dHRvbkxvZ2ljKClcclxuICAgIFxyXG4gICAgY3VzdG9tUHJvamVjdEJ1dHRvbkxvZ2ljKClcclxuICAgIC8vbG9naWMgdG8gYWRkIGV2ZW50cyB0byBjdXN0b20gcHJvamVjdCBidXR0b25zIFxyXG4gICAgY3VzdG9tQnV0dG9uTG9naWMoKVxyXG4gICBcclxuICAgIFxyXG4gICAgLy9sb2dpYyB0byBhZGQgZXZlbnRzIHRvIHRvZG8gYnV0dG9ucyBcclxuICAgIHRvZG9CdXR0b25Mb2dpYygpXHJcbiAgICBcclxuXHJcbiBcclxuICAgIHN3aXRjaENyZWF0aW9uKClcclxuXHJcbiAgICBkZWxldGVQcm9qZWN0cygpXHJcbiAgICBcclxuICAgIGRlbGV0ZUJ1dHRvbkNvbG9ycygpIFxyXG4gICAgcHJvamVjdHN1Ym1pdGxvZ2ljKClcclxuICAgIHN1Ym1pdExvZ2ljKClcclxuICAgIGFkZEV2ZW50c3RvU3VibWl0SW5wdXRzKClcclxuICAgXHJcbiAgXHJcbiAgICBcclxuICAgIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=