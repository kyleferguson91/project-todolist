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
/* harmony export */   "initialproj": () => (/* binding */ initialproj),
/* harmony export */   "initialtodosubmit": () => (/* binding */ initialtodosubmit),
/* harmony export */   "modalLogic": () => (/* binding */ modalLogic),
/* harmony export */   "projectTitleEvents1": () => (/* binding */ projectTitleEvents1),
/* harmony export */   "resetInputs": () => (/* binding */ resetInputs),
/* harmony export */   "todoButtonLogic": () => (/* binding */ todoButtonLogic)
/* harmony export */ });
/* harmony import */ var _formlogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formlogic.js */ "./src/formlogic.js");
/* harmony import */ var _domLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domLogic.js */ "./src/domLogic.js");

// reset input function

function resetInputs() {
    const input = document.querySelectorAll('input').forEach((elem,ind,arr) => {
        elem.value = ""
        elem.checked = false
    })
}


//toggle modal function

function toggleModal() {

    const modalwindow = document.querySelector('.modal-content')

modalwindow.classList.toggle('show-modal')


closelogic()
}




    
    
    // function below adds click events to custom project title buttons so when they are clicked they create an event
    
    function customButtonLogic() {
    
    
        const buttons = document.querySelectorAll('.customprojecttitle')
        buttons.forEach((elem,ind,arr) => {
            elem.addEventListener('click', (e) => {
               let target = e.target.dataset.title
               
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
                .then((obj) => {
        
                   
                   
                    
                    ;(0,_domLogic_js__WEBPACK_IMPORTED_MODULE_1__.populateDisplay)(target)
              
               
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
        const module = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
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
        

       
        const modalwindow = document.querySelector('.modal')
       

        
    // we meed a function to determine if this is the first time we are opening the modal
    // in other words if the projects object is empty
        // then grey out the to-do section initially


roast()


// function to show and hide modal by toggling a class to be called in other functions

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

        
        // call project button submit logic when modal active
    
 
        projectsubmitlogic()


        // call submittodo form logic when modal active 
        submitLogic()
    
    }


// function below to add events to submitinputs at all times, and decide what happens
// when submit is clicked!
// ensure fields go red when bad data and that submit won't work with bad data! (iun below function)
    

var todotitle = ""
var tododescription = ""

var tododuedate =    ""
 __webpack_require__.e(/*! import() */ "vendors-node_modules_date-fns_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! date-fns */ "./node_modules/date-fns/esm/index.js"))
.then((o) => {
    const date = o.format(new Date(), 'yyyy-MM-dd')
    tododuedate = date
})

var todopriority = ""
var todoproject = ""
var todocompleted = ""


function addEventstoSubmitInputs() {

    
            
    const submittitle = document.querySelector('#title')
    const submitdescription = document.querySelector('#description')
    const submitpriority = document.querySelectorAll('input[type="radio"]')
    const submitcompleted = document.querySelector('#completed')
    const submitdate = document.querySelector('#duedate')
    const submitproject = document.querySelectorAll('option')
    const selectedproj = document.querySelector('.selectoptions')
   

// this sets todo project to whats is selected by default so we get something

  
todoproject = selectedproj.value


    submittitle.addEventListener('input', (e) => {
       todotitle = e.target.value
        console.log(todotitle)
        e.stopImmediatePropagation()
        const submittodobutton = document.querySelector('.submitbutton')
        if (e.target.value == "" || checkText(e.target.value) == false) {
            submittitle.classList.add('redback')
            submittodobutton.disabled = true
        }
        else if (e.target.value != "" && checkText(e.target.value) == true) {
    
            submittodobutton.disabled = false
            submittitle.classList.remove('redback')
        }


    })
    submitdescription.addEventListener('input', (e) => {
        tododescription = e.target.value
        console.log(tododescription)
     })

     submitcompleted.addEventListener('input', (e) => {
        todocompleted = e.target.checked
        console.log(todocompleted)
     })
     
     submitdate.addEventListener('input', (e) => {
        e.stopImmediatePropagation()

        tododuedate = e.target.value
    

       
     })

     submitproject.forEach((elem) => {
   
        elem.addEventListener('click', (e) => {
      
           if (e.target.value == "") {          }
           else { todoproject = e.target.value
 
        }
        })
     })
  
     
     submitpriority.forEach(elem => {
elem.addEventListener('input', (e) => {
    todopriority = e.target.id
    e.stopImmediatePropagation(

    )
    console.log(todopriority)
 })
     })

}



    //    //submit button login in modal window for todo
       // want to use the button to submit answers to appropriate module
       // then reset the inputs to nothing in them for the next addition
       


    function submitLogic() {


     
       const submit = document.querySelector('.submitbutton')
       submit.addEventListener('click', (e) => {
        (function see() {
            
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
            .then((o) => {
                


            })
            
// this todo by default is added to a project under custom projects,


        })()
        



   e.stopImmediatePropagation()

// on submit of todo, want to re update the all array!




   // function to add to todo objects list
        
           // run form controller when we click submit which gets the relevent inputs and runs todo maker
         // the inputs we need to use come from the addsubmitinputsfunction!
         // we will write to global variablesd


         // check if inputs are empty!




         // if inputs are good, ruin todo function
         ;(0,_formlogic_js__WEBPACK_IMPORTED_MODULE_0__.formController)(todotitle, tododescription, tododuedate, todopriority = 'priority-low', todoproject, todocompleted = false)

       

   
           
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

      // initial submit button project logic!
      function initialproj() {
    
const projtitle = document.querySelector('#projecttitle')
if (projtitle.value == "" || checkText(projtitle.value) ) {
    document.querySelector('.projectsubmit').disabled = true

}
      }

      function initialtodosubmit() {
        console.log('first')
const submitbutton = document.querySelector('.submitbutton')
if (submitbutton.value == "" || checkText(submitbutton.value) ) {
    document.querySelector('.submitbutton').disabled = true

}
      }


      function checkdefault(str) {
        let test = /^(all|today|thisweek)$/mi
        return test.test(str)
    }   
      
 //submit button login in modal window for project
      // want to use the button to submit answers to appropriate module
      // then reset the inputs to nothing in them for the next addition
 let submit = ""
    function projectsubmitlogic() {

      
      const projectsubmit = document.querySelector('.projectsubmit')
      const projecttitle = document.querySelector('#projecttitle')
let projecttitlechoice = ""
      // event listener on project title to capture current input
      projecttitle.addEventListener('input', (e) => {
    

        e.stopImmediatePropagation()
        projecttitlechoice = e.target.value
        console.log(projecttitlechoice)

      


        // if project title is not truthy, add red background
        if (e.target.value == "" || checkText(e.target.value) == false ||  checkdefault(e.target.value) == true) {
          projectsubmit.disabled = true
            e.target.classList.add('redback')
          
        }


        // if it is truthy, remove the background
        else if (e.target.value != "" && checkText(e.target.value) == true) {
            projectsubmit.disabled = false
            e.target.classList.remove('redback')
            submit = e.target.value
        }

     })
     
     // add event listener when submit button is clickeed 

      projectsubmit.addEventListener('mousedown', (e, submit) => {

// ON SUBMIT OF PROJECT, DO NOTHING TO DEFAULT ARRAY


//

   
        let selection = ""
        const projtitle = document.querySelector('#projecttitle')


        e.stopImmediatePropagation()

       // when we click the submit button, check the text received
       // if it is a truthy input (not blank and passes check) run if block
       // if it is not truthy run the else block

          if (checkText(projecttitle.value) == true && projecttitle.value != "") {
         
         
let value = projecttitle.value

  
  // call the project constructor!
  
  Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
  .then((obj) => {


      // add project to the list
    // ensure name doesn't exist

      if (obj.addProject(value) == false) {

        console.log('projectexists! choose another')
        alert('projectexists! choose another')

        const input = document.querySelector('.inputcontainer')
        input.classList.add('hide')

        const project = document.querySelector('.project')
        project.classList.remove('hide')
        
        const modal = document.querySelector('.modal-content')
        modal.classList.add('.show-modal')
      }
      else {
  
      // if project title is blank, throw an alert and re input the data

     
       // set project title equal to nothing again 
       resetInputs() 
  
       // clear the modal
  

  
      //update the dom
  





      


      toggleModal()
      //add event listeners after updating dom 

     
    }

    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./domLogic */ "./src/domLogic.js"))
    .then((o) => {

        // populate the display with the value of the project we created!
    
      o.populateDisplay(value)
     

        document.querySelectorAll('button').forEach((elem) => {
      
            if (elem.dataset.title == value) {
                elem.classList.add('redback')
            }
        })

    
    })
  }) 
  
          }
          else {

            // first log that it is not truthy and add a red background
            console.log('not truthy add red')

            
            // add red to back of project title

            projecttitle.classList.add('redback')
        
            
            if (projecttitle.value == "" || checkText(projecttitle.value) == false) { alert('Please Enter a Valid Project Name')
            projectsubmit.disabled = true
            
        }
            // then run the projectinput function to listen to the input and adjust the red background accordingly

              addProjectInputRed(projecttitle)
              
              // ensure that todo screen does not come back up
              // if todo screen contains hide, leave it alone, else
          Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./domLogic.js */ "./src/domLogic.js"))
          .then((o) => {
  
          })
       
             
  
          }
     
  // add value of title field to projects object
    

  
  Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./buttonlogic.js */ "./src/buttonlogic.js"))
  .then((o) => {
      o.addButtonLogic()
      o.modalLogic()
  })
  e.stopImmediatePropagation


// near the end of the event we will run remove red, and after it re apply red based on selection
Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./domLogic.js */ "./src/domLogic.js"))
.then((o) => {
    o.removeRed()

    
    resetInputs()
    modalLogic()

    // after render custom projects we will adjusts highlight
o.renderCustomProjects()
Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
.then((o) => {
  

})

})


  
      })
      


  }
      



// add the dynamic background to inputs, run this in plus button modal function 
    function addProjectInputRed(projecttitle) {
   


       
     
      
        // add a listener on it triggered by any input to listen for input
        
        projecttitle.addEventListener('input', (e) => {

            e.stopImmediatePropagation()
            
          // if input remains blank and does not satisfy regex, continue to keep background red
            if (e.target.value == "" || checkText(e.target.value) == false) {     
                e.target.classList.add('redback')
                
        console.log('add redback')}
                    
// if input is not blank and passes regex, remove the red background


        else if (checkText(e.target.value) == true && e.target.value != ""){
            console.log('truthy input')
            e.target.classList.remove('redback')
    
            
            }
   
        })
        

        
        
        // run this with first submit and then be dynamic
           
        }

// regex for inputs 

    
function checkText(str) {
    let test1 = /^[^\s]*[\w!|\s]+$/gi

   return test1.test(str)
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
       // run function when switched to grey out project submit!
    initialproj()
        projectbuttonselect.classList.add('changebg')
        projectinputs.classList.remove('hide')
        todobuttonselect.classList.remove('changebg')
        todoinputs.classList.add('hide')
 

    })




}
    
       // logic to delete projects from the master object, and then refresh the array and the domrender

       function deleteProjects() {
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
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
     
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
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
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
            .then((obj) => {
    
            })
            ;(0,_domLogic_js__WEBPACK_IMPORTED_MODULE_1__.populateDisplay)(e.target.id)


            // depending on the value of e.target.id, we want to call that specific array
            // and feed it to a dom function that loops the array and populates the display!
            // all will be the default arr
            // we then want to update the value of the project that is highlighted!
           Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./domLogic.js */ "./src/domLogic.js"))
           .then((o) => {
          o.removeRed()

          if (e.target.id == "all") {
            console.log(e.target.id)
            e.target.classList.add('redback')
           
        }
        else if (e.target.id == "today"){
            
            console.log(e.target.id)
        
            e.target.classList.add('redback')
        }



        else if (e.target.id == "thisweek"){
            
            console.log(e.target.id)
            e.target.classList.add('redback')
        }
        
           })

            
 

           
          
    
            
        })
    })
    
    }

    function customProjectButtonLogic() {


        const buttons = document.querySelectorAll('.customprojecttitle')
        buttons.forEach((elem,ind,arr) => {
            elem.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
                .then((obj) => {
        
                })
                ;(0,_domLogic_js__WEBPACK_IMPORTED_MODULE_1__.populateDisplay)(e.target.dataset.title)
                // depending on the value of e.target.id, we want to call that specific array
                // and feed it to a dom function that loops the array and populates the display!
                // all will be the default arr

      
                 
                    console.log(e.target.dataset.title)
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./domLogic.js */ "./src/domLogic.js"))
                .then((o) => {
                    o.removeRed()
                    e.target.classList.add('redback')
                })
         
                
    
               
              

        
                
            })
        })
        
        }
    

function todoswitcher() {
    const tododisplay = document.querySelector('.todocontent')

}



function addtodoinputevents() {
    
// add separate events for each input option!

        
}

// function adds event listener to plus button to be called when dom render runs


    
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
    

    addtodoinputevents()
    switchCreation()

    deleteProjects()
    
    deleteButtonColors() 
    projectsubmitlogic()
  
    addEventstoSubmitInputs()
   
  // plus button function logic
  plusbuttonlogic()
      
// add event listener to plus button on page
// also contains logic to add to close button on modal mo

}

function closelogic() {     
        const closebutton = document.querySelector('.closebutton')
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

}

function plusbuttonlogic() {
    
    
    const plusbutton = document.querySelector('.plusbutton')
    const closebutton = document.querySelector('.closebutton')
    plusbutton.addEventListener('click', (e) => {
        e.stopImmediatePropagation()

// remove any expanded todo's

document.querySelectorAll('.todocontent').forEach((elem) => {elem.classList.remove('large')})


        // when we clikc plus too add we want to open the modal window first


        toggleModal()

    
       // the we want to add the appropriate listeners to the fields!
    
    
    
       //todofields:
    
    
    
    
        
        //add event to the main submit button!
        projectsubmitlogic()
    
    
    
        // add logic to todo submit button
    
        
    
    })
        
        }

/***/ }),

/***/ "./src/domLogic.js":
/*!*************************!*\
  !*** ./src/domLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialRenderTodo": () => (/* binding */ initialRenderTodo),
/* harmony export */   "populateDisplay": () => (/* binding */ populateDisplay),
/* harmony export */   "redProject": () => (/* binding */ redProject),
/* harmony export */   "removeRed": () => (/* binding */ removeRed),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderCustomProjects": () => (/* binding */ renderCustomProjects),
/* harmony export */   "updateforhigh": () => (/* binding */ updateforhigh)
/* harmony export */ });
/* harmony import */ var acorn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! acorn */ "./node_modules/acorn/dist/acorn.mjs");
/* harmony import */ var _buttonlogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonlogic.js */ "./src/buttonlogic.js");
/* harmony import */ var _projectmaker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectmaker.js */ "./src/projectmaker.js");
// use this function to render custom projects array that is served from project maker
// we will update the array from the project makers function when needed then run the render






function renderCustomProjects() {

 // clear custom project dom elements! otherwise it will just add to them!
 // div container class is customprojects
 
 document.querySelector('.customprojects').innerHTML = ""



 

// import project names from array created in project maker 

 




Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
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
        projectbutton.dataset.title = elem.trim()

        // set title to the appropriate custom project

        projectbutton.textContent = elem
 


        
        let deleteprojectbutton = document.createElement('button')
        deleteprojectbutton.classList.add('deleteprojectbutton')
        deleteprojectbutton.textContent = "X"


        // append title and close to project div
        projectbutton.classList.add('red')
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

        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./buttonlogic.js */ "./src/buttonlogic.js"))
        .then((obj) => 
        obj.deleteProjects())


        // 

    })


    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./buttonlogic.js */ "./src/buttonlogic.js"))
    .then((o) => {
      
        o.addButtonLogic();
    })

})

selectChoiceCreation()

// after we attach our custom project, we wanna go through them all and do some shit..


// once we click submit project, below fires!

updateforhigh() 


}

function updateforhigh() {
    document.querySelectorAll('.red').forEach((elem) => {
        elem.parentElement.removeChild(elem)
    })
}


// function to populate display of projects in todo creation based on current projects

function selectChoiceCreation() {

    


    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
    .then((obj) => {
  
    // remove all content to start
    document.querySelector('.selectoptions').innerHTML = ""

// add the All projects option!





// get the names of the custom projects and create elements

obj.currentCustomProjects.forEach((elem) => {


    let option = document.createElement('option')
    option.type=elem
     option.textContent = elem
     option.value = elem
     option.dataset.type = 'option'
     option.classList.add('projectselect')
     

        document.querySelector('.selectoptions').appendChild(option)

})



   




})}


// function to ensure date input is todays date or higher

function inputDate() {
    const input = document.querySelector('#duedate')
    __webpack_require__.e(/*! import() */ "vendors-node_modules_date-fns_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! date-fns */ "./node_modules/date-fns/esm/index.js"))
    .then((o) => {
        const date = o.format(new Date(), 'yyyy-MM-dd')

        console.log(date)
       
        input.min  = date;
        input.value = date
       console.log('INPUTVAL', input.value);
    })
}


//master function to render all components

function render(){
    redProject()
    inputDate()

 
Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./buttonlogic.js */ "./src/buttonlogic.js"))
.then((o) => {

    renderCustomProjects()
    initialRenderTodo()
    o.modalLogic()
    o.addButtonLogic()





})

;(0,_buttonlogic_js__WEBPACK_IMPORTED_MODULE_1__.initialproj)()
;(0,_buttonlogic_js__WEBPACK_IMPORTED_MODULE_1__.initialtodosubmit)()


}


// populate main display like todo area based on selected project!


function populateDisplay(projectobject ) {

    // we are populating the dom, we can also switch the highlighted project!
    // this function populates the todolists

  

let project = ""
let projectset = ""

const todoarea = document.querySelector('.todosection')




// set the display to be blank!

todoarea.innerHTML = ""

if (projectobject == "All" || projectobject == "all") {projectset = "defaultprojects"}

else if (projectobject == "today") {projectset = "defaultprojects"}

else if (projectobject == "thisweek") {projectset = "defaultprojects"}

else {projectset = 'projects'}



// update all array based on all objects within custom projects!! before we render display!

    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
 
    .then((o) => {


o.defaultprojects.all = []
for (let prop in o.projects) {
    // the prop in o.projects is the key corresponding to the array of todo objects
    // we should loop over this array and append them to the default project
    // all array before rendering the dom

    

    o.projects[prop].forEach((elem) => {

        // so for every custom project todo object, we want to populate the all array!
        o.defaultprojects.all.push(elem)

        console.log(o.defaultprojects.all, '2oaisduf980723897239847')

        
        

    })
}

// after updating all array, update today array and this week, based on sorting all array by date of each object


        console.log('projectset', projectset, projectobject, 'projobject', o[projectset], 'projectset', o[projectset][projectobject], 'actual todo')
        for (let prop of o[projectset][projectobject]) {

            // project set determines default or custom projects
            // projectobject determines specific project, which then returns
            // and array of objects, which we would need to sort through and pull specific properties!
            // this is a for of loop which sorts over the array called by o[projectset][projectobject]

          
        
            // loop through every key within cusom projects and add to All
          
            console.log(o.defaultprojects.all, '234234234')
   
            // highlight specific project
            // projectobject is the project within projectset
            function see() {
                // run the highlight function with the project div equal to event
                selectedProject()
            }

            // we can pull out the relevent details via prop.title, prop.duedate, etx
            // and then attach them onto our screen via this loop, clear the screen content first as always!



            let text = document.createElement('p')
      o[projectset][projectobject].forEach((elem) => {

        text.textContent = prop.title ?? ""














      })


      /// create our individual todo items below!! 
                // create a div to house the content set the styles

            let todocontentdiv = document.createElement('div')
            text.classList.add('todotitleline')
            todocontentdiv.classList.add('todocontent')

// create a main div element to rival the button elements


          let titlesection = document.createElement('div')
          todocontentdiv.appendChild(titlesection)
          titlesection.classList.add('titlesection')

          let description = document.createElement('p')
          description.textContent = prop.description
          
          description.classList.add('todotitleline')

// since we are looping through an array of objects, set the title to 
// the key, this will allow us to access the array here and we can loop through it and display the contents
          

titlesection.appendChild(text)

           text.classList.add('todotitles')

           // for each todo content we make, make it unique so it can have unique events (like being removed!)

            todoarea.appendChild(todocontentdiv)
            todocontentdiv.dataset.project = prop.title
            todocontentdiv.dataset.projectset= prop.project

            // create a button container! to go beside todosection

            const buttoncontainer = document.createElement('div')
            buttoncontainer.classList.add('buttoncontainer')



// create priority button!

          {

            let button = document.createElement('button')
            button.classList.add('todobutton')
            button.textContent = "del"
            buttoncontainer
            .appendChild(button)
           }
// Create a completed button
     
                   let input = document.createElement('input')
                   input.type = "checkbox"
                   input.classList.add('todocheckbox')
                   buttoncontainer.appendChild(input)
        
        
                   todocontentdiv.appendChild(buttoncontainer)
        
        
              // create deleted button within todo elements



           {

            let button = document.createElement('button')
            button.classList.add('todobutton')
            button.textContent = "Delete"
            buttoncontainer
            .appendChild(button)
           }

   


        }

        popupTodo()
    })





}

// function to color back of selected project red!

function redProject() {


}

function removeRed() {
    document.querySelectorAll('.red').forEach((elem) => {
        elem.classList.remove('redback')
    })
}


// draw the todo display!

function initialRenderTodo() {
    
  
    // get the todo area and set it equal to the all array in defaultprojects
    // start by clearing the area
   
    populateDisplay('all')
   
    // loop the array and draw dom elements for each one!


    



}




// popup todo display!
// changes color when mousing over them and removes it when mousing out
// lets them pop-up when clicked!

function popupTodo() {

const todos = document.querySelectorAll('.todocontent')

todos.forEach((elem) => {

    // add a click event to each todo display
    elem.addEventListener('click', (e) => {





// when clicked, add the large class that expands it! 
// but remove it from any other ones!
// loop the other ones and remove it!@

todos.forEach((elem) => {
console.log(elem, 'NOT THIS ELEM')
    if (elem.classList.contains('large')) 
    {elem.classList.remove('large')}
}) 
    


// apply the large tag!

e.target.classList.toggle('large')

window.addEventListener('click', (z) => {
if (z.target != e.target) {
    elem.classList.remove('large')
}

})




    })


    elem.addEventListener('mouseout', (e) => {



    })



})


}



// script below to mark project title red based on input and default view

function selected() {

    // to be run after dom is built, query all titles
    // we are going to 

    const titles = document.querySelectorAll('.red')
    titles.forEach((elem) => {

    })


}

/***/ }),

/***/ "./src/formlogic.js":
/*!**************************!*\
  !*** ./src/formlogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formController": () => (/* binding */ formController)
/* harmony export */ });
/* harmony import */ var _todomodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todomodule */ "./src/todomodule.js");
/* harmony import */ var _projectmaker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectmaker.js */ "./src/projectmaker.js");


const completed = document.querySelector('#completed').checked


// logic to determine priority
// series of radio buttons loop through them




function formController(title,description,duedate,priority,project,completed) {


// create a todo object from the specified inputs!

 

           // add it to the specific project..  all by default or selected..


           console.log(project, 'PROJECTCHOICE')
           

           if (project == "all" || project == "All") {
            // the specific object key houses an array, so push onto that array!
            _projectmaker_js__WEBPACK_IMPORTED_MODULE_1__.defaultprojects.all.push((0,_todomodule__WEBPACK_IMPORTED_MODULE_0__.createTodo)(title,description,duedate,priority,project,completed)) 


           }
           else {


            // but even when adding to custom projects, we are always adding to All!!

            _projectmaker_js__WEBPACK_IMPORTED_MODULE_1__.defaultprojects.all.push((0,_todomodule__WEBPACK_IMPORTED_MODULE_0__.createTodo)(title,description,duedate,priority,project,completed)) 

            // and the custom project itself
            _projectmaker_js__WEBPACK_IMPORTED_MODULE_1__.projects[project].push((0,_todomodule__WEBPACK_IMPORTED_MODULE_0__.createTodo)(title,description,duedate,priority,project,completed)) 

           }
       
     
    }






  // append the todo to the appropriate project!
// it is either to All projects, or a specific one
// for all below

/***/ }),

/***/ "./src/projectmaker.js":
/*!*****************************!*\
  !*** ./src/projectmaker.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "currentCustomProjects": () => (/* binding */ currentCustomProjects),
/* harmony export */   "defaultprojects": () => (/* binding */ defaultprojects),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
// projects will need to be capable of storing which todo's belong to them
// it looks cleaner to store as an object of project names and have the values equal to
// arrays that contain the relevent todo objects 

// we can come up with a master projects object, if in the UI we would like to separate the display
// it is easier to have a separate default project object as we can just loop over it 
// to populate the display and not have to differentiate between default vs non

// all key will house array that parses all available project objects and lists them
// the today and thisweek array will have to do with sorting 


const defaultprojects = {
    all: [],
    today: [],
    thisweek: [],
}

// this function to populate default projects, which will loop over custom projects!


// we will make functions to sort all to create this week and today!

const projects = {
   
}

// add the appropriate todo's to these projects based on the appropriate dates (datefn!)



// now we develop a way to add custom projects to this object!
// if visually we want to show a cue that this is an option we can do this with the UI or not in this function
// running add project should add a pro


function addProject(projectname) {

    

    // if we try to add a project name that already exists, we can return a confirmation 
if (projectname == "") {return}


if (projects.hasOwnProperty(projectname)) {
    console.log('logs that property exists within projectmaker.js')

    return false
    // call dom function to turn field red and change placeholder to exists!


}

    // else we add the project name as a key to project object
    // eventually we will append todo's to these categories based on some criteria 

projects[projectname] = []
let result = projectname



console.log('DEFAULT PROJS ARRAY!!!')
console.log(projects, 'current projects object');

  



return;
}







// we want to delete they key of the project
// function to remove the project, we need a way to determine which position
// in the array the project is to remove
//supply this an index as this will be visual based


function removeProject(project) {

        delete projects[project]
        console.log(projects)
}



// function below reports name of projects currently in list and append to an array

let currentCustomProjects = []
function getProjects() {
    currentCustomProjects = []


        for (let project in projects) {
            currentCustomProjects.push(project)
            
        }
        


    }

/***/ }),

/***/ "./src/todomodule.js":
/*!***************************!*\
  !*** ./src/todomodule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changePriority": () => (/* binding */ changePriority),
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "setComplete": () => (/* binding */ setComplete)
/* harmony export */ });
// factory function to create todo objects
function updateAll() {
    
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
    .then((o) => {
        o.defaultprojects.all = []

        // loop over all custom project arrays and add to All
   
       for (let prop in o.projects) {
        // in here prop is each object key corresponding to the array holding objects
        // of each projects todo's

        // we must loop over each prop and add to All!




       }
    })
}

let todocatch1 = []
function createTodo(title, description, duedate, priority,  project, completed = false) 
{   


    let obj = {title, description, duedate, priority,  project, completed}
    

    console.log( 'todocatch')

    // when we make a todo, we want to refresh the all object again which is a collection of every projects object!
    updateAll() 
    
    console.log('DEFAULT todotodo ARRAY!!!')
    return {title, description, duedate, priority,  project, completed}
}


// we wanna update the all object after making a todo!

// function to set complete of todo object to true takes a todo object as an argument

function setComplete(obj) {
    
    if (obj.completed) {
    
        obj.completed = false
        return
    }
    obj.completed = true
    return
}


// function to change priority between low medium and high takes a todo object as argument and a selection

function changePriority(obj, priority) {
    obj.priority = priority
    return
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2J1dHRvbmxvZ2ljX2pzLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUM5RDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0lBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOERBQWU7QUFDbkM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzSUFBMkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywrTEFBa0I7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNJQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhEQUFVO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4SEFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsUUFBUSxvSUFBMEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0lBQTJCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkhBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhIQUF1QjtBQUNqQztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0lBQTBCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhIQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSUFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBYztBQUNkLFFBQVEsc0lBQTJCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNJQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvSUFBMEI7QUFDOUM7QUFDQSxxQkFBcUI7QUFDckIsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhIQUF1QjtBQUN2QyxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUN3RDtBQUNUO0FBQ1A7QUFDVjtBQUM5QjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0lBQTJCO0FBQ3ZDO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsWUFBWSw4REFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhIQUF1QjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0lBQTJCO0FBQzNDO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCLDhEQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhIQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCwrQkFBK0I7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNWtDQTtBQUNBO0FBQ0E7QUFDc0M7QUFDRTtBQUN1QjtBQUNaO0FBQ25EO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0lBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0lBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxvSUFBMEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzSUFBMkI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0xBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvSUFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDZEQUFXO0FBQ1gsbUVBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLG9DQUFvQztBQUNwQztBQUNBLHVDQUF1QztBQUN2QztBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzSUFBMkI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDamhCeUM7QUFDb0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBd0IsQ0FBQyx1REFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBd0IsQ0FBQyx1REFBVTtBQUMvQztBQUNBO0FBQ0EsWUFBWSxzREFBUSxlQUFlLHVEQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNJQUEyQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvYnV0dG9ubG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9kb21Mb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2Zvcm1sb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL3Byb2plY3RtYWtlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL3RvZG9tb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybUNvbnRyb2xsZXIgYXMgZm9ybVN1Ym1pdCAgfSBmcm9tICcuL2Zvcm1sb2dpYy5qcydcclxuLy8gcmVzZXQgaW5wdXQgZnVuY3Rpb25cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldElucHV0cygpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICBlbGVtLnZhbHVlID0gXCJcIlxyXG4gICAgICAgIGVsZW0uY2hlY2tlZCA9IGZhbHNlXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuLy90b2dnbGUgbW9kYWwgZnVuY3Rpb25cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1vZGFsKCkge1xyXG5cclxuICAgIGNvbnN0IG1vZGFsd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKVxyXG5cclxubW9kYWx3aW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tb2RhbCcpXHJcblxyXG5cclxuY2xvc2Vsb2dpYygpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gZnVuY3Rpb24gYmVsb3cgYWRkcyBjbGljayBldmVudHMgdG8gY3VzdG9tIHByb2plY3QgdGl0bGUgYnV0dG9ucyBzbyB3aGVuIHRoZXkgYXJlIGNsaWNrZWQgdGhleSBjcmVhdGUgYW4gZXZlbnRcclxuICAgIFxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbUJ1dHRvbkxvZ2ljKCkge1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbXByb2plY3R0aXRsZScpXHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlRGlzcGxheSh0YXJnZXQpXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAvLyBmdW5jdGlvbiBiZWxvdyBhZGRzIGNsaWNrIGV2ZW50cyB0byB0b2RvIGJ1dHRvbnNcclxuICAgIFxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHRvZG9CdXR0b25Mb2dpYygpIHtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvYnV0dG9uJylcclxuICAgICAgICBidXR0b25zLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBwbHVzIHN3aXRjaCBpbWFnZSBsb2dpYyBvbiBob3ZlciBhbmQgY2xpY2tcclxuICAgIFxyXG4gICAgIGZ1bmN0aW9uIHBsdXNCdXR0b25JbWFnZUxvZ2ljKCkge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsdXNidXR0b24nKVxyXG4gICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZS50YXJnZXQuc3JjID0gJy4uL3NyYy9pbWFnZXMvcGx1cy1jaXJjbGUtc3ZncmVwby1jb20oMikuc3ZnJ1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBlLnRhcmdldC5zcmMgPSAnLi4vc3JjL2ltYWdlcy9wbHVzLWNpcmNsZS1zdmdyZXBvLWNvbS5zdmcnXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuc3JjID0gJy4uL3NyYy9pbWFnZXMvcGx1cy1jaXJjbGUtc3ZncmVwby1jb20oMykuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiByb2FzdCgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRjb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3Rib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICAgICAgY29uc3QgdG9kb3NlbGVjdGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2VsZWN0JylcclxuICAgICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICBjb25zdCBwcm9qZWN0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzZWxlY3QnKVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMobW9kdWxlLnByb2plY3RzKS5sZW5ndGggPT0gMCkge1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgaW5wdXRjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRjb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3Rib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICAgICAgY29uc3QgdG9kb3NlbGVjdGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2VsZWN0JylcclxuICAgIFxyXG4gICAgICAgIHByb2plY3Rib3guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgaW5wdXRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgICAgdG9kb3NlbGVjdGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcclxuICAgIFxyXG4gICAgdG9kb3NlbGVjdGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2ViZycpIFxyXG4gICAgcHJvamVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcbiAgICB0b2Rvc2VsZWN0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dob3N0JylcclxuICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZSB7ICAgXHJcbiAgICAgICAgdG9kb3NlbGVjdGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdG9kb3NlbGVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgdG9kb3NlbGVjdGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdnaG9zdCcpICBcclxuICAgICAgICBwcm9qZWN0YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZWJnJykgXHJcbiAgICAgICAgcHJvamVjdGJveC5jbGFzc0xpc3QuYWRkKCdoaWRlJykgXHJcbiAgICAgICAgaW5wdXRjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy9tb2RhbCBsb2dpYyB0byBiZSB1c2VkIHdpdGggcGx1cyBidXR0b24gXHJcbiAgICBcclxuICAgICBleHBvcnQgZnVuY3Rpb24gIG1vZGFsTG9naWMgKCkge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1vZGFsd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcclxuICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgIC8vIHdlIG1lZWQgYSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB3ZSBhcmUgb3BlbmluZyB0aGUgbW9kYWxcclxuICAgIC8vIGluIG90aGVyIHdvcmRzIGlmIHRoZSBwcm9qZWN0cyBvYmplY3QgaXMgZW1wdHlcclxuICAgICAgICAvLyB0aGVuIGdyZXkgb3V0IHRoZSB0by1kbyBzZWN0aW9uIGluaXRpYWxseVxyXG5cclxuXHJcbnJvYXN0KClcclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0byBzaG93IGFuZCBoaWRlIG1vZGFsIGJ5IHRvZ2dsaW5nIGEgY2xhc3MgdG8gYmUgY2FsbGVkIGluIG90aGVyIGZ1bmN0aW9uc1xyXG5cclxuICAgICAgICAvLyBmdW5jdGlvbiB0byB0b2dnbGUgd2hlbiBtb2RhbCBzaG93cyBvciBub3RcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU1vZGFsKCkge1xyXG4gICAgICAgICAgICBtb2RhbHdpbmRvdy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1vZGFsJylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIGZ1bmN0aW9uIHRvIGNvbnNpZGVyIHdoZW4gd2luZG93IG91dHNpZGUgb2YgbW9kYWwgaXMgY2xpY2tlZCB0byBjbG9zZSBtb2RhbFxyXG4gICAgLy8gc2luY2UgbW9kYWx3aW5kb3cgaXMgdGhlIG1vZGFsIHNlbGVjdG9yIHdoaWNoIGlzIHRoZSBlbnRpcmUgYmFja2dyb3VuZFxyXG4gICAgLy8gYW55dGhpbmcgY2xpY2tlZCBpbiB0aGUgYmFja2dyb3VuZCB0aGF0IGlzIG5vdCB0aGUgbW9kYWwgY29udGVudCB3aWxsIGN1YXNlIHRoZSB3aW5kb3cgdG8gY2xvc2VcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHdpbmRvd09uQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWx3aW5kb3cpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVNb2RhbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB3aW5kb3dPbkNsaWNrKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2FsbCBwcm9qZWN0IGJ1dHRvbiBzdWJtaXQgbG9naWMgd2hlbiBtb2RhbCBhY3RpdmVcclxuICAgIFxyXG4gXHJcbiAgICAgICAgcHJvamVjdHN1Ym1pdGxvZ2ljKClcclxuXHJcblxyXG4gICAgICAgIC8vIGNhbGwgc3VibWl0dG9kbyBmb3JtIGxvZ2ljIHdoZW4gbW9kYWwgYWN0aXZlIFxyXG4gICAgICAgIHN1Ym1pdExvZ2ljKClcclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGJlbG93IHRvIGFkZCBldmVudHMgdG8gc3VibWl0aW5wdXRzIGF0IGFsbCB0aW1lcywgYW5kIGRlY2lkZSB3aGF0IGhhcHBlbnNcclxuLy8gd2hlbiBzdWJtaXQgaXMgY2xpY2tlZCFcclxuLy8gZW5zdXJlIGZpZWxkcyBnbyByZWQgd2hlbiBiYWQgZGF0YSBhbmQgdGhhdCBzdWJtaXQgd29uJ3Qgd29yayB3aXRoIGJhZCBkYXRhISAoaXVuIGJlbG93IGZ1bmN0aW9uKVxyXG4gICAgXHJcblxyXG52YXIgdG9kb3RpdGxlID0gXCJcIlxyXG52YXIgdG9kb2Rlc2NyaXB0aW9uID0gXCJcIlxyXG5cclxudmFyIHRvZG9kdWVkYXRlID0gICAgXCJcIlxyXG4gaW1wb3J0KCdkYXRlLWZucycpXHJcbi50aGVuKChvKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gby5mb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKVxyXG4gICAgdG9kb2R1ZWRhdGUgPSBkYXRlXHJcbn0pXHJcblxyXG52YXIgdG9kb3ByaW9yaXR5ID0gXCJcIlxyXG52YXIgdG9kb3Byb2plY3QgPSBcIlwiXHJcbnZhciB0b2RvY29tcGxldGVkID0gXCJcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50c3RvU3VibWl0SW5wdXRzKCkge1xyXG5cclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICAgIGNvbnN0IHN1Ym1pdHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJylcclxuICAgIGNvbnN0IHN1Ym1pdGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJylcclxuICAgIGNvbnN0IHN1Ym1pdHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcclxuICAgIGNvbnN0IHN1Ym1pdGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wbGV0ZWQnKVxyXG4gICAgY29uc3Qgc3VibWl0ZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJylcclxuICAgIGNvbnN0IHN1Ym1pdHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRwcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdG9wdGlvbnMnKVxyXG4gICBcclxuXHJcbi8vIHRoaXMgc2V0cyB0b2RvIHByb2plY3QgdG8gd2hhdHMgaXMgc2VsZWN0ZWQgYnkgZGVmYXVsdCBzbyB3ZSBnZXQgc29tZXRoaW5nXHJcblxyXG4gIFxyXG50b2RvcHJvamVjdCA9IHNlbGVjdGVkcHJvai52YWx1ZVxyXG5cclxuXHJcbiAgICBzdWJtaXR0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICB0b2RvdGl0bGUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG90aXRsZSlcclxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgY29uc3Qgc3VibWl0dG9kb2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRidXR0b24nKVxyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSBcIlwiIHx8IGNoZWNrVGV4dChlLnRhcmdldC52YWx1ZSkgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgc3VibWl0dGl0bGUuY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICAgICAgIHN1Ym1pdHRvZG9idXR0b24uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlICE9IFwiXCIgJiYgY2hlY2tUZXh0KGUudGFyZ2V0LnZhbHVlKSA9PSB0cnVlKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgc3VibWl0dG9kb2J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHN1Ym1pdHRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZGJhY2snKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSlcclxuICAgIHN1Ym1pdGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICB0b2RvZGVzY3JpcHRpb24gPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9kZXNjcmlwdGlvbilcclxuICAgICB9KVxyXG5cclxuICAgICBzdWJtaXRjb21wbGV0ZWQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIHRvZG9jb21wbGV0ZWQgPSBlLnRhcmdldC5jaGVja2VkXHJcbiAgICAgICAgY29uc29sZS5sb2codG9kb2NvbXBsZXRlZClcclxuICAgICB9KVxyXG4gICAgIFxyXG4gICAgIHN1Ym1pdGRhdGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAgICAgdG9kb2R1ZWRhdGUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgXHJcblxyXG4gICAgICAgXHJcbiAgICAgfSlcclxuXHJcbiAgICAgc3VibWl0cHJvamVjdC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgIFxyXG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBcclxuICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gXCJcIikgeyAgICAgICAgICB9XHJcbiAgICAgICAgICAgZWxzZSB7IHRvZG9wcm9qZWN0ID0gZS50YXJnZXQudmFsdWVcclxuIFxyXG4gICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgIH0pXHJcbiAgXHJcbiAgICAgXHJcbiAgICAgc3VibWl0cHJpb3JpdHkuZm9yRWFjaChlbGVtID0+IHtcclxuZWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICB0b2RvcHJpb3JpdHkgPSBlLnRhcmdldC5pZFxyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oXHJcblxyXG4gICAgKVxyXG4gICAgY29uc29sZS5sb2codG9kb3ByaW9yaXR5KVxyXG4gfSlcclxuICAgICB9KVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4gICAgLy8gICAgLy9zdWJtaXQgYnV0dG9uIGxvZ2luIGluIG1vZGFsIHdpbmRvdyBmb3IgdG9kb1xyXG4gICAgICAgLy8gd2FudCB0byB1c2UgdGhlIGJ1dHRvbiB0byBzdWJtaXQgYW5zd2VycyB0byBhcHByb3ByaWF0ZSBtb2R1bGVcclxuICAgICAgIC8vIHRoZW4gcmVzZXQgdGhlIGlucHV0cyB0byBub3RoaW5nIGluIHRoZW0gZm9yIHRoZSBuZXh0IGFkZGl0aW9uXHJcbiAgICAgICBcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0TG9naWMoKSB7XHJcblxyXG5cclxuICAgICBcclxuICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRidXR0b24nKVxyXG4gICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAoZnVuY3Rpb24gc2VlKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuLy8gdGhpcyB0b2RvIGJ5IGRlZmF1bHQgaXMgYWRkZWQgdG8gYSBwcm9qZWN0IHVuZGVyIGN1c3RvbSBwcm9qZWN0cyxcclxuXHJcblxyXG4gICAgICAgIH0pKClcclxuICAgICAgICBcclxuXHJcblxyXG5cclxuICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG5cclxuLy8gb24gc3VibWl0IG9mIHRvZG8sIHdhbnQgdG8gcmUgdXBkYXRlIHRoZSBhbGwgYXJyYXkhXHJcblxyXG5cclxuXHJcblxyXG4gICAvLyBmdW5jdGlvbiB0byBhZGQgdG8gdG9kbyBvYmplY3RzIGxpc3RcclxuICAgICAgICBcclxuICAgICAgICAgICAvLyBydW4gZm9ybSBjb250cm9sbGVyIHdoZW4gd2UgY2xpY2sgc3VibWl0IHdoaWNoIGdldHMgdGhlIHJlbGV2ZW50IGlucHV0cyBhbmQgcnVucyB0b2RvIG1ha2VyXHJcbiAgICAgICAgIC8vIHRoZSBpbnB1dHMgd2UgbmVlZCB0byB1c2UgY29tZSBmcm9tIHRoZSBhZGRzdWJtaXRpbnB1dHNmdW5jdGlvbiFcclxuICAgICAgICAgLy8gd2Ugd2lsbCB3cml0ZSB0byBnbG9iYWwgdmFyaWFibGVzZFxyXG5cclxuXHJcbiAgICAgICAgIC8vIGNoZWNrIGlmIGlucHV0cyBhcmUgZW1wdHkhXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAvLyBpZiBpbnB1dHMgYXJlIGdvb2QsIHJ1aW4gdG9kbyBmdW5jdGlvblxyXG4gICAgICAgICBmb3JtU3VibWl0KHRvZG90aXRsZSwgdG9kb2Rlc2NyaXB0aW9uLCB0b2RvZHVlZGF0ZSwgdG9kb3ByaW9yaXR5ID0gJ3ByaW9yaXR5LWxvdycsIHRvZG9wcm9qZWN0LCB0b2RvY29tcGxldGVkID0gZmFsc2UpXHJcblxyXG4gICAgICAgXHJcblxyXG4gICBcclxuICAgICAgICAgICBcclxuICAgLy8gcmVtb3ZlIHRoZSBtb2RhbCBhZnRlciBjcmVhdGluZyBvdXIgdG9kbywgYW5kIHJlc2V0IHRoZSBpbnB1dHMgYmFjayB0byB0aGVpciBkZWZhdWx0c1xyXG4gICBcclxuICAgICAgICAgICB0b2dnbGVNb2RhbCgpXHJcblxyXG4gICAgICAgICBcclxuICAgICAgICBcclxuICAgXHJcbiAgIFxyXG4gICAvLyB3ZSBhbHNvIHdhbnQgdG8gZW5zdXJlIG91ciBpbnB1dHMgYXJlIHRydXRoeVxyXG4gICAvLyBvbmx5IHdhbnQgdG8gcmVxdWlyZSB0aXRsZSwgZGVzY3JpcHRpb24gZGF0ZSBhbmQgcHJvamVjdCBhbmQgY29tcGxldGVcclxuICAgXHJcbiAgIFxyXG4gICAgICAgICAgIC8vIHJlbmRlciB0aGUgZG9tIGFmdGVyIGFsbCB0aGlzLCB3aGljaCB3aWxsIHVwZGF0ZSBhbGwgZWxlbWVudHNcclxuICAgXHJcbiAgICAgICAgICAgaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuICAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgICAgICAgICBvLnJlbmRlcigpXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIH0pXHJcbiAgIFxyXG4gICAgICAgIGltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbiAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgICAgICAgICBvYmouYWRkQnV0dG9uTG9naWMoKVxyXG4gICAgICAgICAgICBvYmoubW9kYWxMb2dpYygpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgfSlcclxuICAgICAgIHJlc2V0SW5wdXRzKClcclxuXHJcblxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaW5pdGlhbCBzdWJtaXQgYnV0dG9uIHByb2plY3QgbG9naWMhXHJcbiAgICAgIGV4cG9ydCBmdW5jdGlvbiBpbml0aWFscHJvaigpIHtcclxuICAgIFxyXG5jb25zdCBwcm9qdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHRpdGxlJylcclxuaWYgKHByb2p0aXRsZS52YWx1ZSA9PSBcIlwiIHx8IGNoZWNrVGV4dChwcm9qdGl0bGUudmFsdWUpICkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzdWJtaXQnKS5kaXNhYmxlZCA9IHRydWVcclxuXHJcbn1cclxuICAgICAgfVxyXG5cclxuICAgICAgZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWx0b2Rvc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmaXJzdCcpXHJcbmNvbnN0IHN1Ym1pdGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRidXR0b24nKVxyXG5pZiAoc3VibWl0YnV0dG9uLnZhbHVlID09IFwiXCIgfHwgY2hlY2tUZXh0KHN1Ym1pdGJ1dHRvbi52YWx1ZSkgKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0YnV0dG9uJykuZGlzYWJsZWQgPSB0cnVlXHJcblxyXG59XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBmdW5jdGlvbiBjaGVja2RlZmF1bHQoc3RyKSB7XHJcbiAgICAgICAgbGV0IHRlc3QgPSAvXihhbGx8dG9kYXl8dGhpc3dlZWspJC9taVxyXG4gICAgICAgIHJldHVybiB0ZXN0LnRlc3Qoc3RyKVxyXG4gICAgfSAgIFxyXG4gICAgICBcclxuIC8vc3VibWl0IGJ1dHRvbiBsb2dpbiBpbiBtb2RhbCB3aW5kb3cgZm9yIHByb2plY3RcclxuICAgICAgLy8gd2FudCB0byB1c2UgdGhlIGJ1dHRvbiB0byBzdWJtaXQgYW5zd2VycyB0byBhcHByb3ByaWF0ZSBtb2R1bGVcclxuICAgICAgLy8gdGhlbiByZXNldCB0aGUgaW5wdXRzIHRvIG5vdGhpbmcgaW4gdGhlbSBmb3IgdGhlIG5leHQgYWRkaXRpb25cclxuIGxldCBzdWJtaXQgPSBcIlwiXHJcbiAgICBmdW5jdGlvbiBwcm9qZWN0c3VibWl0bG9naWMoKSB7XHJcblxyXG4gICAgICBcclxuICAgICAgY29uc3QgcHJvamVjdHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c3VibWl0JylcclxuICAgICAgY29uc3QgcHJvamVjdHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3R0aXRsZScpXHJcbmxldCBwcm9qZWN0dGl0bGVjaG9pY2UgPSBcIlwiXHJcbiAgICAgIC8vIGV2ZW50IGxpc3RlbmVyIG9uIHByb2plY3QgdGl0bGUgdG8gY2FwdHVyZSBjdXJyZW50IGlucHV0XHJcbiAgICAgIHByb2plY3R0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICBcclxuXHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIHByb2plY3R0aXRsZWNob2ljZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHRpdGxlY2hvaWNlKVxyXG5cclxuICAgICAgXHJcblxyXG5cclxuICAgICAgICAvLyBpZiBwcm9qZWN0IHRpdGxlIGlzIG5vdCB0cnV0aHksIGFkZCByZWQgYmFja2dyb3VuZFxyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSBcIlwiIHx8IGNoZWNrVGV4dChlLnRhcmdldC52YWx1ZSkgPT0gZmFsc2UgfHwgIGNoZWNrZGVmYXVsdChlLnRhcmdldC52YWx1ZSkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgcHJvamVjdHN1Ym1pdC5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBpZiBpdCBpcyB0cnV0aHksIHJlbW92ZSB0aGUgYmFja2dyb3VuZFxyXG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlICE9IFwiXCIgJiYgY2hlY2tUZXh0KGUudGFyZ2V0LnZhbHVlKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RzdWJtaXQuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyZWRiYWNrJylcclxuICAgICAgICAgICAgc3VibWl0ID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgIH0pXHJcbiAgICAgXHJcbiAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHdoZW4gc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VlZCBcclxuXHJcbiAgICAgIHByb2plY3RzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUsIHN1Ym1pdCkgPT4ge1xyXG5cclxuLy8gT04gU1VCTUlUIE9GIFBST0pFQ1QsIERPIE5PVEhJTkcgVE8gREVGQVVMVCBBUlJBWVxyXG5cclxuXHJcbi8vXHJcblxyXG4gICBcclxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gXCJcIlxyXG4gICAgICAgIGNvbnN0IHByb2p0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0dGl0bGUnKVxyXG5cclxuXHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG5cclxuICAgICAgIC8vIHdoZW4gd2UgY2xpY2sgdGhlIHN1Ym1pdCBidXR0b24sIGNoZWNrIHRoZSB0ZXh0IHJlY2VpdmVkXHJcbiAgICAgICAvLyBpZiBpdCBpcyBhIHRydXRoeSBpbnB1dCAobm90IGJsYW5rIGFuZCBwYXNzZXMgY2hlY2spIHJ1biBpZiBibG9ja1xyXG4gICAgICAgLy8gaWYgaXQgaXMgbm90IHRydXRoeSBydW4gdGhlIGVsc2UgYmxvY2tcclxuXHJcbiAgICAgICAgICBpZiAoY2hlY2tUZXh0KHByb2plY3R0aXRsZS52YWx1ZSkgPT0gdHJ1ZSAmJiBwcm9qZWN0dGl0bGUudmFsdWUgIT0gXCJcIikge1xyXG4gICAgICAgICBcclxuICAgICAgICAgXHJcbmxldCB2YWx1ZSA9IHByb2plY3R0aXRsZS52YWx1ZVxyXG5cclxuICBcclxuICAvLyBjYWxsIHRoZSBwcm9qZWN0IGNvbnN0cnVjdG9yIVxyXG4gIFxyXG4gIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gIC50aGVuKChvYmopID0+IHtcclxuXHJcblxyXG4gICAgICAvLyBhZGQgcHJvamVjdCB0byB0aGUgbGlzdFxyXG4gICAgLy8gZW5zdXJlIG5hbWUgZG9lc24ndCBleGlzdFxyXG5cclxuICAgICAgaWYgKG9iai5hZGRQcm9qZWN0KHZhbHVlKSA9PSBmYWxzZSkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdGV4aXN0cyEgY2hvb3NlIGFub3RoZXInKVxyXG4gICAgICAgIGFsZXJ0KCdwcm9qZWN0ZXhpc3RzISBjaG9vc2UgYW5vdGhlcicpXHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Y29udGFpbmVyJylcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKVxyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJy5zaG93LW1vZGFsJylcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICBcclxuICAgICAgLy8gaWYgcHJvamVjdCB0aXRsZSBpcyBibGFuaywgdGhyb3cgYW4gYWxlcnQgYW5kIHJlIGlucHV0IHRoZSBkYXRhXHJcblxyXG4gICAgIFxyXG4gICAgICAgLy8gc2V0IHByb2plY3QgdGl0bGUgZXF1YWwgdG8gbm90aGluZyBhZ2FpbiBcclxuICAgICAgIHJlc2V0SW5wdXRzKCkgXHJcbiAgXHJcbiAgICAgICAvLyBjbGVhciB0aGUgbW9kYWxcclxuICBcclxuXHJcbiAgXHJcbiAgICAgIC8vdXBkYXRlIHRoZSBkb21cclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICBcclxuXHJcblxyXG4gICAgICB0b2dnbGVNb2RhbCgpXHJcbiAgICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVycyBhZnRlciB1cGRhdGluZyBkb20gXHJcblxyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydCgnLi9kb21Mb2dpYycpXHJcbiAgICAudGhlbigobykgPT4ge1xyXG5cclxuICAgICAgICAvLyBwb3B1bGF0ZSB0aGUgZGlzcGxheSB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgcHJvamVjdCB3ZSBjcmVhdGVkIVxyXG4gICAgXHJcbiAgICAgIG8ucG9wdWxhdGVEaXNwbGF5KHZhbHVlKVxyXG4gICAgIFxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZWxlbS5kYXRhc2V0LnRpdGxlID09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBcclxuICAgIH0pXHJcbiAgfSkgXHJcbiAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGZpcnN0IGxvZyB0aGF0IGl0IGlzIG5vdCB0cnV0aHkgYW5kIGFkZCBhIHJlZCBiYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgdHJ1dGh5IGFkZCByZWQnKVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGFkZCByZWQgdG8gYmFjayBvZiBwcm9qZWN0IHRpdGxlXHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0dGl0bGUuY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocHJvamVjdHRpdGxlLnZhbHVlID09IFwiXCIgfHwgY2hlY2tUZXh0KHByb2plY3R0aXRsZS52YWx1ZSkgPT0gZmFsc2UpIHsgYWxlcnQoJ1BsZWFzZSBFbnRlciBhIFZhbGlkIFByb2plY3QgTmFtZScpXHJcbiAgICAgICAgICAgIHByb2plY3RzdWJtaXQuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhlbiBydW4gdGhlIHByb2plY3RpbnB1dCBmdW5jdGlvbiB0byBsaXN0ZW4gdG8gdGhlIGlucHV0IGFuZCBhZGp1c3QgdGhlIHJlZCBiYWNrZ3JvdW5kIGFjY29yZGluZ2x5XHJcblxyXG4gICAgICAgICAgICAgIGFkZFByb2plY3RJbnB1dFJlZChwcm9qZWN0dGl0bGUpXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoYXQgdG9kbyBzY3JlZW4gZG9lcyBub3QgY29tZSBiYWNrIHVwXHJcbiAgICAgICAgICAgICAgLy8gaWYgdG9kbyBzY3JlZW4gY29udGFpbnMgaGlkZSwgbGVhdmUgaXQgYWxvbmUsIGVsc2VcclxuICAgICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gIFxyXG4gICAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgXHJcbiAgLy8gYWRkIHZhbHVlIG9mIHRpdGxlIGZpZWxkIHRvIHByb2plY3RzIG9iamVjdFxyXG4gICAgXHJcblxyXG4gIFxyXG4gIGltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbiAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgby5hZGRCdXR0b25Mb2dpYygpXHJcbiAgICAgIG8ubW9kYWxMb2dpYygpXHJcbiAgfSlcclxuICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvblxyXG5cclxuXHJcbi8vIG5lYXIgdGhlIGVuZCBvZiB0aGUgZXZlbnQgd2Ugd2lsbCBydW4gcmVtb3ZlIHJlZCwgYW5kIGFmdGVyIGl0IHJlIGFwcGx5IHJlZCBiYXNlZCBvbiBzZWxlY3Rpb25cclxuaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuLnRoZW4oKG8pID0+IHtcclxuICAgIG8ucmVtb3ZlUmVkKClcclxuXHJcbiAgICBcclxuICAgIHJlc2V0SW5wdXRzKClcclxuICAgIG1vZGFsTG9naWMoKVxyXG5cclxuICAgIC8vIGFmdGVyIHJlbmRlciBjdXN0b20gcHJvamVjdHMgd2Ugd2lsbCBhZGp1c3RzIGhpZ2hsaWdodFxyXG5vLnJlbmRlckN1c3RvbVByb2plY3RzKClcclxuaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbi50aGVuKChvKSA9PiB7XHJcbiAgXHJcblxyXG59KVxyXG5cclxufSlcclxuXHJcblxyXG4gIFxyXG4gICAgICB9KVxyXG4gICAgICBcclxuXHJcblxyXG4gIH1cclxuICAgICAgXHJcblxyXG5cclxuXHJcbi8vIGFkZCB0aGUgZHluYW1pYyBiYWNrZ3JvdW5kIHRvIGlucHV0cywgcnVuIHRoaXMgaW4gcGx1cyBidXR0b24gbW9kYWwgZnVuY3Rpb24gXHJcbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0SW5wdXRSZWQocHJvamVjdHRpdGxlKSB7XHJcbiAgIFxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICBcclxuICAgICAgXHJcbiAgICAgICAgLy8gYWRkIGEgbGlzdGVuZXIgb24gaXQgdHJpZ2dlcmVkIGJ5IGFueSBpbnB1dCB0byBsaXN0ZW4gZm9yIGlucHV0XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvamVjdHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAvLyBpZiBpbnB1dCByZW1haW5zIGJsYW5rIGFuZCBkb2VzIG5vdCBzYXRpc2Z5IHJlZ2V4LCBjb250aW51ZSB0byBrZWVwIGJhY2tncm91bmQgcmVkXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSBcIlwiIHx8IGNoZWNrVGV4dChlLnRhcmdldC52YWx1ZSkgPT0gZmFsc2UpIHsgICAgIFxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnYWRkIHJlZGJhY2snKX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuLy8gaWYgaW5wdXQgaXMgbm90IGJsYW5rIGFuZCBwYXNzZXMgcmVnZXgsIHJlbW92ZSB0aGUgcmVkIGJhY2tncm91bmRcclxuXHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGNoZWNrVGV4dChlLnRhcmdldC52YWx1ZSkgPT0gdHJ1ZSAmJiBlLnRhcmdldC52YWx1ZSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RydXRoeSBpbnB1dCcpXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZGJhY2snKVxyXG4gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHJ1biB0aGlzIHdpdGggZmlyc3Qgc3VibWl0IGFuZCB0aGVuIGJlIGR5bmFtaWNcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4vLyByZWdleCBmb3IgaW5wdXRzIFxyXG5cclxuICAgIFxyXG5mdW5jdGlvbiBjaGVja1RleHQoc3RyKSB7XHJcbiAgICBsZXQgdGVzdDEgPSAvXlteXFxzXSpbXFx3IXxcXHNdKyQvZ2lcclxuXHJcbiAgIHJldHVybiB0ZXN0MS50ZXN0KHN0cilcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcblxyXG4gICBcclxuLy8gZnVuY3Rpb24gdG8gcmVzZXQgdG8gZGVmYXVsdCB0b2RvIGRpc3BsYXkgXHJcblxyXG5mdW5jdGlvbiByZXNldFRvZG8oKSB7XHJcblxyXG4gICAgXHJcbiAgICAgICAgLy8gcmVzZXQgbW9kYWwgd2luZG93IHRvIGNyZWF0ZSB0b2RvIGJ5IGRlZmF1bHRcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb2J1dHRvbnNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2VsZWN0JylcclxuICAgICAgICBjb25zdCBwcm9qZWN0YnV0dG9uc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzZWxlY3QnKVxyXG4gICAgICAgIGNvbnN0IHRvZG9pbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRjb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICAgICAgY29uc3QgbW9kYWx3aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAvLyByZW1vdmUgdGhlIG1vZGFsIHdpbmRvd1xyXG4gICAgICAgICAgIG1vZGFsd2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbW9kYWwnKVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICBwcm9qZWN0aW5wdXRzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgICAgIHRvZG9pbnB1dHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgcHJvamVjdGJ1dHRvbnNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgICAgdG9kb2J1dHRvbnNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiAgICAvL2xvZ2ljIGJlbG93IHRvIHN3aXRjaCBiZXR3ZWVuIGNyZWF0aW9uIG9mIHRvZG8gb3IgYSBwcm9qZWN0XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hDcmVhdGlvbigpIHtcclxuICAgIGNvbnN0IHRvZG9idXR0b25zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NlbGVjdCcpXHJcbiAgICBjb25zdCBwcm9qZWN0YnV0dG9uc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzZWxlY3QnKVxyXG4gICAgY29uc3QgdG9kb2lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dGNvbnRhaW5lcicpXHJcbiAgICBjb25zdCBwcm9qZWN0aW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxyXG4gICAgXHJcbiAgICB0b2RvYnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2ViZyhlKSB7XHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlYmcnKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgdG9kb2J1dHRvbnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHByb2plY3RidXR0b25zZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlYmcnKVxyXG4gICAgICAgIHByb2plY3RpbnB1dHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgICAgdG9kb2J1dHRvbnNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgdG9kb2lucHV0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICBwcm9qZWN0YnV0dG9uc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgIC8vIHJ1biBmdW5jdGlvbiB3aGVuIHN3aXRjaGVkIHRvIGdyZXkgb3V0IHByb2plY3Qgc3VibWl0IVxyXG4gICAgaW5pdGlhbHByb2ooKVxyXG4gICAgICAgIHByb2plY3RidXR0b25zZWxlY3QuY2xhc3NMaXN0LmFkZCgnY2hhbmdlYmcnKVxyXG4gICAgICAgIHByb2plY3RpbnB1dHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgdG9kb2J1dHRvbnNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgdG9kb2lucHV0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuIFxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiAgICBcclxuICAgICAgIC8vIGxvZ2ljIHRvIGRlbGV0ZSBwcm9qZWN0cyBmcm9tIHRoZSBtYXN0ZXIgb2JqZWN0LCBhbmQgdGhlbiByZWZyZXNoIHRoZSBhcnJheSBhbmQgdGhlIGRvbXJlbmRlclxyXG5cclxuICAgICAgIGV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0cygpIHtcclxuICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMob2JqLnByb2plY3RzKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlbHNlIHsgY29uc3QgZGVsZXRlcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVwcm9qZWN0YnV0dG9uJylcclxuICAgICBcclxuICAgICAgICAgICAgZGVsZXRlcHJvamVjdC5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpZ3VyZSBvdXQgd2hpY2ggYnV0dG9uIHdhcyBjbGlja2VkIGFuZCBmaW5kIGFwcHJvcHJpYXRlIHByb2plY3QgdGl0bGVcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlID0gZS50YXJnZXQuZGF0YXNldC50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3YW50IHRvIHJlbW92ZSB0aGUgYWNjb3JkaW5nIGRpdiB3aXRoIGNsYXNzIHByb2plY3RidXR0b25zIGFuZCBkYXRhPXRpdGxlIGVxdWFsIHRvIGFib3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2lsbCBoYW5kbGUgdGhpcyB3aXRoIGEgZnVuY3Rpb24gaW4gdGhlIGRvbSBsb2dpYyBtb2R1bGVcclxuICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGFsc28gbmVlZCB0byByZW1vdmUgdGhlIHByb2plY3QgZnJvbSB0aGUgY3VzdG9tIHByb2plY3RzIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBmdW5jdGlvbiBmb3IgdGhpcyB3aXRoaW4gcHJvamVjdCBtYWtlciBtb2R1bGVcclxuICAgICBcclxuICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gcGFzcyB0aGUgYXJndW1lbnQgb2YgdGhlIGFwcHJvcHJpYXRlIGtleSBhYm92ZSBcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICBvYmoucmVtb3ZlUHJvamVjdChyZW1vdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuL2J1dHRvbmxvZ2ljLmpzJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigobykgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAge28uYWRkQnV0dG9uTG9naWMoKVxyXG4gICAgICAgICAgICAgICAgICBvLm1vZGFsTG9naWMoKX0pXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gY2FsbCByZW5kZXIgY3VzdG9tIHByb2plY3RzIHNpbmNlIHdlIGhhdmUgdXBhdGVkIHRoZSBhcnJheSB0aGF0IGl0IHRha2VzIGFzIGFuIGFyZ3VtZW50XHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgZnVuY3Rpb24gaXRzZWxmIHVwZGF0ZXMgdGhlIGFycmF5IHRvIGJlIHJlbmRlcmVkIGJhc2VkIG9uIHRoZSBjdXJyZW50IG1hc3RlciBwcm9qZWN0IG9iamVjdFxyXG4gICAgICAgICAgICAgICAgcm9hc3QoKVxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChvYmopID0+IHszXHJcbiAgICAgICAgICAgICAgICBvYmoucmVuZGVyKCl9KVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gYWZ0ZXIgd2UgY2xpY2sgb24gZGVsZXRlIGNhbGwgcm9hc3QgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHRvZG8gY29udGVudCBzaG91bGQgYmUgaW52aXNpYmxlXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgXHJcbiAgICAgXHJcblxyXG4gICAgICAgICAgICB9KX1cclxuICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gcHJvamVjdCBkZWxldGUgYnV0dG9uIGxvZ2ljXHJcbiAgICBcclxuICAgICAgICBmdW5jdGlvbiBkZWxldGVCdXR0b25Db2xvcnMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlcHJvamVjdGJ1dHRvbicpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWxldGVidXR0b25zLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LnRpdGxlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkZXRlcm1pbmUgd2hpY2ggZGVsdGUgYnV0dG9uIGhhcyBiZWVuIGhvdmVyZWRcclxuICAgICAgICAgICAgICAgICAgICAvLyBub3cgd2Ugd2FudCB0byBjaGFuZ2UgdGhlIGJhY2tncm91bmQgb2YgdGhlIGNvcnJlc3BvbmRpbmcgZGl2XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RpdHRsZXMgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RidXR0b25zJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGl0dGxlcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmRhdGFzZXQudGl0bGUgPT0gZS50YXJnZXQuZGF0YXNldC50aXRsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge2VsZW0uY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdGl0dGxlcyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdGJ1dHRvbnMnKVxyXG4gICAgICAgICAgICAgICAgcHJvamVjdGl0dGxlcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uZGF0YXNldC50aXRsZSA9PSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHtlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZGJhY2snKX1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuLy9mdW5jdGlvbiBoZXJlIHRvIGFkZCBldmVudCBsaXN0ZW5lcnMgdG8gcHJvZHVjdCBidXR0b25zIHRvIHVwZGF0ZSB0b2RvIGRpc3BsYXlcclxuLy93ZSB3aWxsIGhhdmUgYSBmdW5jdGlvbiB3aGVuIGNsaWNrZWQgdG8gdXBkYXRlIHRoZW0gYWNjb3JkaW5nbHlcclxuLy9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0VGl0bGVFdmVudHMxKCkge1xyXG5jb25zdCB0b2RvZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvY29udGVudCcpXHJcblxyXG4vLyB3aGVuIHdlIGNsaWNrIGFsbCwgbG9vcCB0aHJvdWdoIGFycmF5IGFsbCBhbmQgZGlzcGxheSB0aGUgY29udGVudHMhXHJcblxyXG5jb25zdCBhbGx0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGwnKVxyXG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpXHJcbmNvbnN0IHRoaXN3ZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoaXN3ZWVrJylcclxuXHJcbmNvbnN0IGRlZmF1bHRzID0gW2FsbHRpdGxlLCB0b2RheSwgdGhpc3dlZWtdXHJcbmRlZmF1bHRzLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQsICdwcm9mdW5jJylcclxuICAgIH0pXHJcbn0pXHJcblxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBiZWxvdyBhZGRzIGNsaWNrIGV2ZW50cyB0byBkZWZhdWx0IHByb2plY3QgYnV0dG9uc1xyXG5pbXBvcnQge3BvcHVsYXRlRGlzcGxheSwgcmVtb3ZlUmVkfSBmcm9tICcuL2RvbUxvZ2ljLmpzJ1xyXG5pbXBvcnQgeyBmb3JtQ29udHJvbGxlciB9IGZyb20gJy4vZm9ybWxvZ2ljLmpzJ1xyXG5pbXBvcnQgeyBlbCwgdHIgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnXHJcbmltcG9ydCB7IHN1YiB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRCdXR0b25Mb2dpYygpIHtcclxuXHJcblxyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWZhdWx0cHJvamVjdCcpXHJcbiAgICBidXR0b25zLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHBvcHVsYXRlRGlzcGxheShlLnRhcmdldC5pZClcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIGUudGFyZ2V0LmlkLCB3ZSB3YW50IHRvIGNhbGwgdGhhdCBzcGVjaWZpYyBhcnJheVxyXG4gICAgICAgICAgICAvLyBhbmQgZmVlZCBpdCB0byBhIGRvbSBmdW5jdGlvbiB0aGF0IGxvb3BzIHRoZSBhcnJheSBhbmQgcG9wdWxhdGVzIHRoZSBkaXNwbGF5IVxyXG4gICAgICAgICAgICAvLyBhbGwgd2lsbCBiZSB0aGUgZGVmYXVsdCBhcnJcclxuICAgICAgICAgICAgLy8gd2UgdGhlbiB3YW50IHRvIHVwZGF0ZSB0aGUgdmFsdWUgb2YgdGhlIHByb2plY3QgdGhhdCBpcyBoaWdobGlnaHRlZCFcclxuICAgICAgICAgICBpbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4gICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICBvLnJlbW92ZVJlZCgpXHJcblxyXG4gICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSBcInRvZGF5XCIpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSBcInRoaXN3ZWVrXCIpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgXHJcbiBcclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBjdXN0b21Qcm9qZWN0QnV0dG9uTG9naWMoKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbXByb2plY3R0aXRsZScpXHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZURpc3BsYXkoZS50YXJnZXQuZGF0YXNldC50aXRsZSlcclxuICAgICAgICAgICAgICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgZS50YXJnZXQuaWQsIHdlIHdhbnQgdG8gY2FsbCB0aGF0IHNwZWNpZmljIGFycmF5XHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgZmVlZCBpdCB0byBhIGRvbSBmdW5jdGlvbiB0aGF0IGxvb3BzIHRoZSBhcnJheSBhbmQgcG9wdWxhdGVzIHRoZSBkaXNwbGF5IVxyXG4gICAgICAgICAgICAgICAgLy8gYWxsIHdpbGwgYmUgdGhlIGRlZmF1bHQgYXJyXHJcblxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgby5yZW1vdmVSZWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG5cclxuZnVuY3Rpb24gdG9kb3N3aXRjaGVyKCkge1xyXG4gICAgY29uc3QgdG9kb2Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2NvbnRlbnQnKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhZGR0b2RvaW5wdXRldmVudHMoKSB7XHJcbiAgICBcclxuLy8gYWRkIHNlcGFyYXRlIGV2ZW50cyBmb3IgZWFjaCBpbnB1dCBvcHRpb24hXHJcblxyXG4gICAgICAgIFxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBhZGRzIGV2ZW50IGxpc3RlbmVyIHRvIHBsdXMgYnV0dG9uIHRvIGJlIGNhbGxlZCB3aGVuIGRvbSByZW5kZXIgcnVuc1xyXG5cclxuXHJcbiAgICBcclxuICAgIC8vIG1hc3RlciBmdW5jdGlvbiB0byBydW4gYWxsIGZ1bmN0aW9ucyB0aGF0IGFkZCBidXR0b24gbG9naWMhXHJcbiAgICBcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBhZGRCdXR0b25Mb2dpYygpIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBydW4gbG9naWMgZm9yIHN3aXRjaGluZyBpbWFnZSBvbiBwbHVzIGljb24gb24gY2xpY2sgXHJcbiAgICBwbHVzQnV0dG9uSW1hZ2VMb2dpYygpXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy9sb2dpYyB0byBhZGQgZXZlbnRzIHRvIGRlZmF1bHQgcHJvamVjdCBidXR0b25zIFxyXG4gICAgZGVmYXVsdEJ1dHRvbkxvZ2ljKClcclxuICAgIFxyXG4gICAgY3VzdG9tUHJvamVjdEJ1dHRvbkxvZ2ljKClcclxuICAgIC8vbG9naWMgdG8gYWRkIGV2ZW50cyB0byBjdXN0b20gcHJvamVjdCBidXR0b25zIFxyXG4gICAgY3VzdG9tQnV0dG9uTG9naWMoKVxyXG4gICBcclxuICAgIFxyXG4gICAgLy9sb2dpYyB0byBhZGQgZXZlbnRzIHRvIHRvZG8gYnV0dG9ucyBcclxuICAgIHRvZG9CdXR0b25Mb2dpYygpXHJcbiAgICBcclxuXHJcbiAgICBhZGR0b2RvaW5wdXRldmVudHMoKVxyXG4gICAgc3dpdGNoQ3JlYXRpb24oKVxyXG5cclxuICAgIGRlbGV0ZVByb2plY3RzKClcclxuICAgIFxyXG4gICAgZGVsZXRlQnV0dG9uQ29sb3JzKCkgXHJcbiAgICBwcm9qZWN0c3VibWl0bG9naWMoKVxyXG4gIFxyXG4gICAgYWRkRXZlbnRzdG9TdWJtaXRJbnB1dHMoKVxyXG4gICBcclxuICAvLyBwbHVzIGJ1dHRvbiBmdW5jdGlvbiBsb2dpY1xyXG4gIHBsdXNidXR0b25sb2dpYygpXHJcbiAgICAgIFxyXG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gcGx1cyBidXR0b24gb24gcGFnZVxyXG4vLyBhbHNvIGNvbnRhaW5zIGxvZ2ljIHRvIGFkZCB0byBjbG9zZSBidXR0b24gb24gbW9kYWwgbW9cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlbG9naWMoKSB7ICAgICBcclxuICAgICAgICBjb25zdCBjbG9zZWJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZWJ1dHRvbicpXHJcbiAgICAvLyBhZGQgYW4gZXZlbnQgdG8gcmVnaXN0ZXIgdGhlIGNsb3NlIGJ1dHRvblxyXG4gICAgLy8gdGhlIGNsb3NlIGJ1dHRvbjpcclxuICAgIGNsb3NlYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAgdG9nZ2xlTW9kYWwoKVxyXG5cclxuICAgICAvLyByZXNldCBpdCB0byBkZWZhdWx0IHRvZG8gZGlzcGxheSBcclxuICAgICBjb25zb2xlLmxvZygndG90bycpXHJcbiAgICAgcmVzZXRUb2RvKClcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgIC8vIHJlc2V0IGlucHV0IG9mIHRvZG8gc2NyZWVuIGFuZCBhbGwgb3RoZXIgaW5wdXRzIVxyXG4gICAgIHJlc2V0SW5wdXRzKCkgXHJcblxyXG4gICBcclxuICAgICAvLyBydW4gcm9hc3QsIGNoZWNrIGlmIHRoZSBvYmplY3QgZG9lcyBub3QgZXhpc3QgYWdhaW5cclxuICAgICByb2FzdCgpXHJcblxyXG5cclxuXHJcbiB9KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcGx1c2J1dHRvbmxvZ2ljKCkge1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IHBsdXNidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1c2J1dHRvbicpXHJcbiAgICBjb25zdCBjbG9zZWJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZWJ1dHRvbicpXHJcbiAgICBwbHVzYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcblxyXG4vLyByZW1vdmUgYW55IGV4cGFuZGVkIHRvZG8nc1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9jb250ZW50JykuZm9yRWFjaCgoZWxlbSkgPT4ge2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgnbGFyZ2UnKX0pXHJcblxyXG5cclxuICAgICAgICAvLyB3aGVuIHdlIGNsaWtjIHBsdXMgdG9vIGFkZCB3ZSB3YW50IHRvIG9wZW4gdGhlIG1vZGFsIHdpbmRvdyBmaXJzdFxyXG5cclxuXHJcbiAgICAgICAgdG9nZ2xlTW9kYWwoKVxyXG5cclxuICAgIFxyXG4gICAgICAgLy8gdGhlIHdlIHdhbnQgdG8gYWRkIHRoZSBhcHByb3ByaWF0ZSBsaXN0ZW5lcnMgdG8gdGhlIGZpZWxkcyFcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgIC8vdG9kb2ZpZWxkczpcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vYWRkIGV2ZW50IHRvIHRoZSBtYWluIHN1Ym1pdCBidXR0b24hXHJcbiAgICAgICAgcHJvamVjdHN1Ym1pdGxvZ2ljKClcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAvLyBhZGQgbG9naWMgdG8gdG9kbyBzdWJtaXQgYnV0dG9uXHJcbiAgICBcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB9IiwiLy8gdXNlIHRoaXMgZnVuY3Rpb24gdG8gcmVuZGVyIGN1c3RvbSBwcm9qZWN0cyBhcnJheSB0aGF0IGlzIHNlcnZlZCBmcm9tIHByb2plY3QgbWFrZXJcclxuLy8gd2Ugd2lsbCB1cGRhdGUgdGhlIGFycmF5IGZyb20gdGhlIHByb2plY3QgbWFrZXJzIGZ1bmN0aW9uIHdoZW4gbmVlZGVkIHRoZW4gcnVuIHRoZSByZW5kZXJcclxuXHJcbmltcG9ydCB7IGRlZmF1bHRPcHRpb25zIH0gZnJvbSAnYWNvcm4nXHJcbmltcG9ydCB7IGRhLCBlbCB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSdcclxuaW1wb3J0IHtpbml0aWFscHJvaiwgaW5pdGlhbHRvZG9zdWJtaXR9IGZyb20gJy4vYnV0dG9ubG9naWMuanMnXHJcbmltcG9ydCB7IGRlZmF1bHRwcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdG1ha2VyLmpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckN1c3RvbVByb2plY3RzKCkge1xyXG5cclxuIC8vIGNsZWFyIGN1c3RvbSBwcm9qZWN0IGRvbSBlbGVtZW50cyEgb3RoZXJ3aXNlIGl0IHdpbGwganVzdCBhZGQgdG8gdGhlbSFcclxuIC8vIGRpdiBjb250YWluZXIgY2xhc3MgaXMgY3VzdG9tcHJvamVjdHNcclxuIFxyXG4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbXByb2plY3RzJykuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuXHJcblxyXG4gXHJcblxyXG4vLyBpbXBvcnQgcHJvamVjdCBuYW1lcyBmcm9tIGFycmF5IGNyZWF0ZWQgaW4gcHJvamVjdCBtYWtlciBcclxuXHJcbiBcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4udGhlbigob2JqKSA9PiB7XHJcblxyXG4gICAgLy8gdGhpcyBjcmVhdGVzIGEgbmV3IGFycmF5IGJhc2VkIG9uIGN1cnJlbnQgY29udGVudHMgb2YgcHJvamVjdCBvYmplY3RcclxuICAgIC8vIHdoaWNoIHdlIGNhbiByZW5kZXIgZnJvbVxyXG5cclxuXHJcbiAgICBvYmouZ2V0UHJvamVjdHMoKVxyXG5cclxuICAgIC8vYXJyYXkgYmVsb3cgaXMgY3VycmVudCBuYW1lcyBvZiBjdXNvbSBwcm9qZWN0c1xyXG4gICAgXHJcbiAgICBjb25zdCBjdXN0b21wcm9qZWN0c2xpc3QgPSBvYmouY3VycmVudEN1c3RvbVByb2plY3RzXHJcblxyXG4gICAgLy8gbG9vcCB0aGlzIGFycmF5IFxyXG4gICAgY3VzdG9tcHJvamVjdHNsaXN0LmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgcHJvamVjdCBjb29udGFpbmVyIFxyXG5cclxuICAgICAgICBsZXQgcHJvamVjdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gYWRkIHN0eWxlIHRvIHByb2plY3QgY29udGFpbmVyXHJcblxyXG4gICAgICAgIHByb2plY3RkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdGJ1dHRvbnMnKVxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYnV0dG9ucyBmb3IgdGl0bGUgYW5kIGRsZWxldGUgb2JqZWN0c1xyXG5cclxuICAgICAgICBsZXQgcHJvamVjdGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21wcm9qZWN0dGl0bGUnKVxyXG4gICAgICAgIHByb2plY3RidXR0b24uZGF0YXNldC50aXRsZSA9IGVsZW0udHJpbSgpXHJcblxyXG4gICAgICAgIC8vIHNldCB0aXRsZSB0byB0aGUgYXBwcm9wcmlhdGUgY3VzdG9tIHByb2plY3RcclxuXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbi50ZXh0Q29udGVudCA9IGVsZW1cclxuIFxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRlbGV0ZXByb2plY3RidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGRlbGV0ZXByb2plY3RidXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlcHJvamVjdGJ1dHRvbicpXHJcbiAgICAgICAgZGVsZXRlcHJvamVjdGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiXHJcblxyXG5cclxuICAgICAgICAvLyBhcHBlbmQgdGl0bGUgYW5kIGNsb3NlIHRvIHByb2plY3QgZGl2XHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZWQnKVxyXG4gICAgICAgIHByb2plY3RkaXYuYXBwZW5kQ2hpbGQocHJvamVjdGJ1dHRvbilcclxuICAgICAgICBwcm9qZWN0ZGl2LmFwcGVuZENoaWxkKGRlbGV0ZXByb2plY3RidXR0b24pXHJcbiAgXHJcbiAgXHJcblxyXG4gICAgICAgIC8vIHdlIHdhbnQgdG8gYXBwZW5kIHRoZXNlIHRvIHRoZSBkaXYgd2hpY2ggaG91c2VzIGN1c3RvbSBwcm9qZWN0c1xyXG5cclxuICAgICAgICBjb25zdCBjdXN0b21wcm9qZWN0c3ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tcHJvamVjdHMnKVxyXG5cclxuICAgICAgICBjdXN0b21wcm9qZWN0c3ZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdGRpdilcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gd2UgbmVlZCBhIHdheSB0byBhc3NvY2lhdGUgdGhlIHByb2plY3QgdGl0bGUgYW5kIHRoZSBjbG9zZSBidXR0b25cclxuICAgICAgICAvLyB3ZSBjb3VsZCB1c2UgYSBkYXRhIGF0dHJpYnV0ZSBzZXQgdG8gdGhlIGtleSBzaW5jZSB0aGlzIHdpbGwgYmUgdW5pcXVlXHJcbiAgICAgICAgLy8gZ2l2ZSB0aGUgaG91c2luZyBkaXYgYW5kIHRoZSBjbG9zZSBidXR0b24gdGhlIHNhbWUgZGF0YSBhdHRyaWJ1dGVcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgZGVsZXRlcHJvamVjdGJ1dHRvbi5kYXRhc2V0LnRpdGxlID0gZWxlbVxyXG4gICAgICAgIHByb2plY3RkaXYuZGF0YXNldC50aXRsZSA9IGVsZW1cclxuXHJcbiAgICAgICAgLy8gYXBwZW5kIHRoZSBmdW5jdGlvbiB0byBhZGQgYnV0dG9uIGxvZ2ljIHRvIHVwZGF0ZWQgZG9tIGVsZW1lbnRzXHJcblxyXG4gICAgICAgIGltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbiAgICAgICAgLnRoZW4oKG9iaikgPT4gXHJcbiAgICAgICAgb2JqLmRlbGV0ZVByb2plY3RzKCkpXHJcblxyXG5cclxuICAgICAgICAvLyBcclxuXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBpbXBvcnQoJy4vYnV0dG9ubG9naWMuanMnKVxyXG4gICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgby5hZGRCdXR0b25Mb2dpYygpO1xyXG4gICAgfSlcclxuXHJcbn0pXHJcblxyXG5zZWxlY3RDaG9pY2VDcmVhdGlvbigpXHJcblxyXG4vLyBhZnRlciB3ZSBhdHRhY2ggb3VyIGN1c3RvbSBwcm9qZWN0LCB3ZSB3YW5uYSBnbyB0aHJvdWdoIHRoZW0gYWxsIGFuZCBkbyBzb21lIHNoaXQuLlxyXG5cclxuXHJcbi8vIG9uY2Ugd2UgY2xpY2sgc3VibWl0IHByb2plY3QsIGJlbG93IGZpcmVzIVxyXG5cclxudXBkYXRlZm9yaGlnaCgpIFxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVmb3JoaWdoKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZCcpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbSlcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0byBwb3B1bGF0ZSBkaXNwbGF5IG9mIHByb2plY3RzIGluIHRvZG8gY3JlYXRpb24gYmFzZWQgb24gY3VycmVudCBwcm9qZWN0c1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0Q2hvaWNlQ3JlYXRpb24oKSB7XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gIFxyXG4gICAgLy8gcmVtb3ZlIGFsbCBjb250ZW50IHRvIHN0YXJ0XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3B0aW9ucycpLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbi8vIGFkZCB0aGUgQWxsIHByb2plY3RzIG9wdGlvbiFcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBnZXQgdGhlIG5hbWVzIG9mIHRoZSBjdXN0b20gcHJvamVjdHMgYW5kIGNyZWF0ZSBlbGVtZW50c1xyXG5cclxub2JqLmN1cnJlbnRDdXN0b21Qcm9qZWN0cy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblxyXG5cclxuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG4gICAgb3B0aW9uLnR5cGU9ZWxlbVxyXG4gICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGVsZW1cclxuICAgICBvcHRpb24udmFsdWUgPSBlbGVtXHJcbiAgICAgb3B0aW9uLmRhdGFzZXQudHlwZSA9ICdvcHRpb24nXHJcbiAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzZWxlY3QnKVxyXG4gICAgIFxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3B0aW9ucycpLmFwcGVuZENoaWxkKG9wdGlvbilcclxuXHJcbn0pXHJcblxyXG5cclxuXHJcbiAgIFxyXG5cclxuXHJcblxyXG5cclxufSl9XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gZW5zdXJlIGRhdGUgaW5wdXQgaXMgdG9kYXlzIGRhdGUgb3IgaGlnaGVyXHJcblxyXG5mdW5jdGlvbiBpbnB1dERhdGUoKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJylcclxuICAgIGltcG9ydCgnZGF0ZS1mbnMnKVxyXG4gICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlID0gby5mb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRlKVxyXG4gICAgICAgXHJcbiAgICAgICAgaW5wdXQubWluICA9IGRhdGU7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBkYXRlXHJcbiAgICAgICBjb25zb2xlLmxvZygnSU5QVVRWQUwnLCBpbnB1dC52YWx1ZSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuLy9tYXN0ZXIgZnVuY3Rpb24gdG8gcmVuZGVyIGFsbCBjb21wb25lbnRzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCl7XHJcbiAgICByZWRQcm9qZWN0KClcclxuICAgIGlucHV0RGF0ZSgpXHJcblxyXG4gXHJcbmltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbi50aGVuKChvKSA9PiB7XHJcblxyXG4gICAgcmVuZGVyQ3VzdG9tUHJvamVjdHMoKVxyXG4gICAgaW5pdGlhbFJlbmRlclRvZG8oKVxyXG4gICAgby5tb2RhbExvZ2ljKClcclxuICAgIG8uYWRkQnV0dG9uTG9naWMoKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pXHJcblxyXG5pbml0aWFscHJvaigpXHJcbmluaXRpYWx0b2Rvc3VibWl0KClcclxuXHJcblxyXG59XHJcblxyXG5cclxuLy8gcG9wdWxhdGUgbWFpbiBkaXNwbGF5IGxpa2UgdG9kbyBhcmVhIGJhc2VkIG9uIHNlbGVjdGVkIHByb2plY3QhXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlRGlzcGxheShwcm9qZWN0b2JqZWN0ICkge1xyXG5cclxuICAgIC8vIHdlIGFyZSBwb3B1bGF0aW5nIHRoZSBkb20sIHdlIGNhbiBhbHNvIHN3aXRjaCB0aGUgaGlnaGxpZ2h0ZWQgcHJvamVjdCFcclxuICAgIC8vIHRoaXMgZnVuY3Rpb24gcG9wdWxhdGVzIHRoZSB0b2RvbGlzdHNcclxuXHJcbiAgXHJcblxyXG5sZXQgcHJvamVjdCA9IFwiXCJcclxubGV0IHByb2plY3RzZXQgPSBcIlwiXHJcblxyXG5jb25zdCB0b2RvYXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2VjdGlvbicpXHJcblxyXG5cclxuXHJcblxyXG4vLyBzZXQgdGhlIGRpc3BsYXkgdG8gYmUgYmxhbmshXHJcblxyXG50b2RvYXJlYS5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG5pZiAocHJvamVjdG9iamVjdCA9PSBcIkFsbFwiIHx8IHByb2plY3RvYmplY3QgPT0gXCJhbGxcIikge3Byb2plY3RzZXQgPSBcImRlZmF1bHRwcm9qZWN0c1wifVxyXG5cclxuZWxzZSBpZiAocHJvamVjdG9iamVjdCA9PSBcInRvZGF5XCIpIHtwcm9qZWN0c2V0ID0gXCJkZWZhdWx0cHJvamVjdHNcIn1cclxuXHJcbmVsc2UgaWYgKHByb2plY3RvYmplY3QgPT0gXCJ0aGlzd2Vla1wiKSB7cHJvamVjdHNldCA9IFwiZGVmYXVsdHByb2plY3RzXCJ9XHJcblxyXG5lbHNlIHtwcm9qZWN0c2V0ID0gJ3Byb2plY3RzJ31cclxuXHJcblxyXG5cclxuLy8gdXBkYXRlIGFsbCBhcnJheSBiYXNlZCBvbiBhbGwgb2JqZWN0cyB3aXRoaW4gY3VzdG9tIHByb2plY3RzISEgYmVmb3JlIHdlIHJlbmRlciBkaXNwbGF5IVxyXG5cclxuICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gXHJcbiAgICAudGhlbigobykgPT4ge1xyXG5cclxuXHJcbm8uZGVmYXVsdHByb2plY3RzLmFsbCA9IFtdXHJcbmZvciAobGV0IHByb3AgaW4gby5wcm9qZWN0cykge1xyXG4gICAgLy8gdGhlIHByb3AgaW4gby5wcm9qZWN0cyBpcyB0aGUga2V5IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGFycmF5IG9mIHRvZG8gb2JqZWN0c1xyXG4gICAgLy8gd2Ugc2hvdWxkIGxvb3Agb3ZlciB0aGlzIGFycmF5IGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgZGVmYXVsdCBwcm9qZWN0XHJcbiAgICAvLyBhbGwgYXJyYXkgYmVmb3JlIHJlbmRlcmluZyB0aGUgZG9tXHJcblxyXG4gICAgXHJcblxyXG4gICAgby5wcm9qZWN0c1twcm9wXS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIHNvIGZvciBldmVyeSBjdXN0b20gcHJvamVjdCB0b2RvIG9iamVjdCwgd2Ugd2FudCB0byBwb3B1bGF0ZSB0aGUgYWxsIGFycmF5IVxyXG4gICAgICAgIG8uZGVmYXVsdHByb2plY3RzLmFsbC5wdXNoKGVsZW0pXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKG8uZGVmYXVsdHByb2plY3RzLmFsbCwgJzJvYWlzZHVmOTgwNzIzODk3MjM5ODQ3JylcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gYWZ0ZXIgdXBkYXRpbmcgYWxsIGFycmF5LCB1cGRhdGUgdG9kYXkgYXJyYXkgYW5kIHRoaXMgd2VlaywgYmFzZWQgb24gc29ydGluZyBhbGwgYXJyYXkgYnkgZGF0ZSBvZiBlYWNoIG9iamVjdFxyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RzZXQnLCBwcm9qZWN0c2V0LCBwcm9qZWN0b2JqZWN0LCAncHJvam9iamVjdCcsIG9bcHJvamVjdHNldF0sICdwcm9qZWN0c2V0Jywgb1twcm9qZWN0c2V0XVtwcm9qZWN0b2JqZWN0XSwgJ2FjdHVhbCB0b2RvJylcclxuICAgICAgICBmb3IgKGxldCBwcm9wIG9mIG9bcHJvamVjdHNldF1bcHJvamVjdG9iamVjdF0pIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHByb2plY3Qgc2V0IGRldGVybWluZXMgZGVmYXVsdCBvciBjdXN0b20gcHJvamVjdHNcclxuICAgICAgICAgICAgLy8gcHJvamVjdG9iamVjdCBkZXRlcm1pbmVzIHNwZWNpZmljIHByb2plY3QsIHdoaWNoIHRoZW4gcmV0dXJuc1xyXG4gICAgICAgICAgICAvLyBhbmQgYXJyYXkgb2Ygb2JqZWN0cywgd2hpY2ggd2Ugd291bGQgbmVlZCB0byBzb3J0IHRocm91Z2ggYW5kIHB1bGwgc3BlY2lmaWMgcHJvcGVydGllcyFcclxuICAgICAgICAgICAgLy8gdGhpcyBpcyBhIGZvciBvZiBsb29wIHdoaWNoIHNvcnRzIG92ZXIgdGhlIGFycmF5IGNhbGxlZCBieSBvW3Byb2plY3RzZXRdW3Byb2plY3RvYmplY3RdXHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBldmVyeSBrZXkgd2l0aGluIGN1c29tIHByb2plY3RzIGFuZCBhZGQgdG8gQWxsXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coby5kZWZhdWx0cHJvamVjdHMuYWxsLCAnMjM0MjM0MjM0JylcclxuICAgXHJcbiAgICAgICAgICAgIC8vIGhpZ2hsaWdodCBzcGVjaWZpYyBwcm9qZWN0XHJcbiAgICAgICAgICAgIC8vIHByb2plY3RvYmplY3QgaXMgdGhlIHByb2plY3Qgd2l0aGluIHByb2plY3RzZXRcclxuICAgICAgICAgICAgZnVuY3Rpb24gc2VlKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gcnVuIHRoZSBoaWdobGlnaHQgZnVuY3Rpb24gd2l0aCB0aGUgcHJvamVjdCBkaXYgZXF1YWwgdG8gZXZlbnRcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdCgpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHdlIGNhbiBwdWxsIG91dCB0aGUgcmVsZXZlbnQgZGV0YWlscyB2aWEgcHJvcC50aXRsZSwgcHJvcC5kdWVkYXRlLCBldHhcclxuICAgICAgICAgICAgLy8gYW5kIHRoZW4gYXR0YWNoIHRoZW0gb250byBvdXIgc2NyZWVuIHZpYSB0aGlzIGxvb3AsIGNsZWFyIHRoZSBzY3JlZW4gY29udGVudCBmaXJzdCBhcyBhbHdheXMhXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgIG9bcHJvamVjdHNldF1bcHJvamVjdG9iamVjdF0uZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG5cclxuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gcHJvcC50aXRsZSA/PyBcIlwiXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgfSlcclxuXHJcblxyXG4gICAgICAvLy8gY3JlYXRlIG91ciBpbmRpdmlkdWFsIHRvZG8gaXRlbXMgYmVsb3chISBcclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRpdiB0byBob3VzZSB0aGUgY29udGVudCBzZXQgdGhlIHN0eWxlc1xyXG5cclxuICAgICAgICAgICAgbGV0IHRvZG9jb250ZW50ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0b2RvdGl0bGVsaW5lJylcclxuICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYuY2xhc3NMaXN0LmFkZCgndG9kb2NvbnRlbnQnKVxyXG5cclxuLy8gY3JlYXRlIGEgbWFpbiBkaXYgZWxlbWVudCB0byByaXZhbCB0aGUgYnV0dG9uIGVsZW1lbnRzXHJcblxyXG5cclxuICAgICAgICAgIGxldCB0aXRsZXNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgdG9kb2NvbnRlbnRkaXYuYXBwZW5kQ2hpbGQodGl0bGVzZWN0aW9uKVxyXG4gICAgICAgICAgdGl0bGVzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RpdGxlc2VjdGlvbicpXHJcblxyXG4gICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb3AuZGVzY3JpcHRpb25cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kb3RpdGxlbGluZScpXHJcblxyXG4vLyBzaW5jZSB3ZSBhcmUgbG9vcGluZyB0aHJvdWdoIGFuIGFycmF5IG9mIG9iamVjdHMsIHNldCB0aGUgdGl0bGUgdG8gXHJcbi8vIHRoZSBrZXksIHRoaXMgd2lsbCBhbGxvdyB1cyB0byBhY2Nlc3MgdGhlIGFycmF5IGhlcmUgYW5kIHdlIGNhbiBsb29wIHRocm91Z2ggaXQgYW5kIGRpc3BsYXkgdGhlIGNvbnRlbnRzXHJcbiAgICAgICAgICBcclxuXHJcbnRpdGxlc2VjdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KVxyXG5cclxuICAgICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RvZG90aXRsZXMnKVxyXG5cclxuICAgICAgICAgICAvLyBmb3IgZWFjaCB0b2RvIGNvbnRlbnQgd2UgbWFrZSwgbWFrZSBpdCB1bmlxdWUgc28gaXQgY2FuIGhhdmUgdW5pcXVlIGV2ZW50cyAobGlrZSBiZWluZyByZW1vdmVkISlcclxuXHJcbiAgICAgICAgICAgIHRvZG9hcmVhLmFwcGVuZENoaWxkKHRvZG9jb250ZW50ZGl2KVxyXG4gICAgICAgICAgICB0b2RvY29udGVudGRpdi5kYXRhc2V0LnByb2plY3QgPSBwcm9wLnRpdGxlXHJcbiAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LmRhdGFzZXQucHJvamVjdHNldD0gcHJvcC5wcm9qZWN0XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBidXR0b24gY29udGFpbmVyISB0byBnbyBiZXNpZGUgdG9kb3NlY3Rpb25cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGJ1dHRvbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25jb250YWluZXInKVxyXG5cclxuXHJcblxyXG4vLyBjcmVhdGUgcHJpb3JpdHkgYnV0dG9uIVxyXG5cclxuICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb2J1dHRvbicpXHJcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiZGVsXCJcclxuICAgICAgICAgICAgYnV0dG9uY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChidXR0b24pXHJcbiAgICAgICAgICAgfVxyXG4vLyBDcmVhdGUgYSBjb21wbGV0ZWQgYnV0dG9uXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCd0b2RvY2hlY2tib3gnKVxyXG4gICAgICAgICAgICAgICAgICAgYnV0dG9uY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uY29udGFpbmVyKVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIGNyZWF0ZSBkZWxldGVkIGJ1dHRvbiB3aXRoaW4gdG9kbyBlbGVtZW50c1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb2J1dHRvbicpXHJcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCJcclxuICAgICAgICAgICAgYnV0dG9uY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChidXR0b24pXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBvcHVwVG9kbygpXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGNvbG9yIGJhY2sgb2Ygc2VsZWN0ZWQgcHJvamVjdCByZWQhXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkUHJvamVjdCgpIHtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUmVkKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZCcpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZGJhY2snKVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbi8vIGRyYXcgdGhlIHRvZG8gZGlzcGxheSFcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsUmVuZGVyVG9kbygpIHtcclxuICAgIFxyXG4gIFxyXG4gICAgLy8gZ2V0IHRoZSB0b2RvIGFyZWEgYW5kIHNldCBpdCBlcXVhbCB0byB0aGUgYWxsIGFycmF5IGluIGRlZmF1bHRwcm9qZWN0c1xyXG4gICAgLy8gc3RhcnQgYnkgY2xlYXJpbmcgdGhlIGFyZWFcclxuICAgXHJcbiAgICBwb3B1bGF0ZURpc3BsYXkoJ2FsbCcpXHJcbiAgIFxyXG4gICAgLy8gbG9vcCB0aGUgYXJyYXkgYW5kIGRyYXcgZG9tIGVsZW1lbnRzIGZvciBlYWNoIG9uZSFcclxuXHJcblxyXG4gICAgXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIHBvcHVwIHRvZG8gZGlzcGxheSFcclxuLy8gY2hhbmdlcyBjb2xvciB3aGVuIG1vdXNpbmcgb3ZlciB0aGVtIGFuZCByZW1vdmVzIGl0IHdoZW4gbW91c2luZyBvdXRcclxuLy8gbGV0cyB0aGVtIHBvcC11cCB3aGVuIGNsaWNrZWQhXHJcblxyXG5mdW5jdGlvbiBwb3B1cFRvZG8oKSB7XHJcblxyXG5jb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvY29udGVudCcpXHJcblxyXG50b2Rvcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblxyXG4gICAgLy8gYWRkIGEgY2xpY2sgZXZlbnQgdG8gZWFjaCB0b2RvIGRpc3BsYXlcclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIHdoZW4gY2xpY2tlZCwgYWRkIHRoZSBsYXJnZSBjbGFzcyB0aGF0IGV4cGFuZHMgaXQhIFxyXG4vLyBidXQgcmVtb3ZlIGl0IGZyb20gYW55IG90aGVyIG9uZXMhXHJcbi8vIGxvb3AgdGhlIG90aGVyIG9uZXMgYW5kIHJlbW92ZSBpdCFAXHJcblxyXG50b2Rvcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbmNvbnNvbGUubG9nKGVsZW0sICdOT1QgVEhJUyBFTEVNJylcclxuICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucygnbGFyZ2UnKSkgXHJcbiAgICB7ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdsYXJnZScpfVxyXG59KSBcclxuICAgIFxyXG5cclxuXHJcbi8vIGFwcGx5IHRoZSBsYXJnZSB0YWchXHJcblxyXG5lLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdsYXJnZScpXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoeikgPT4ge1xyXG5pZiAoei50YXJnZXQgIT0gZS50YXJnZXQpIHtcclxuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnbGFyZ2UnKVxyXG59XHJcblxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG5cclxuXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG5cclxufSlcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vIHNjcmlwdCBiZWxvdyB0byBtYXJrIHByb2plY3QgdGl0bGUgcmVkIGJhc2VkIG9uIGlucHV0IGFuZCBkZWZhdWx0IHZpZXdcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdGVkKCkge1xyXG5cclxuICAgIC8vIHRvIGJlIHJ1biBhZnRlciBkb20gaXMgYnVpbHQsIHF1ZXJ5IGFsbCB0aXRsZXNcclxuICAgIC8vIHdlIGFyZSBnb2luZyB0byBcclxuXHJcbiAgICBjb25zdCB0aXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVkJylcclxuICAgIHRpdGxlcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblxyXG4gICAgfSlcclxuXHJcblxyXG59IiwiaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gJy4vdG9kb21vZHVsZSdcclxuaW1wb3J0IHsgcHJvamVjdHMsIGRlZmF1bHRwcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdG1ha2VyLmpzJ1xyXG5jb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGVkJykuY2hlY2tlZFxyXG5cclxuXHJcbi8vIGxvZ2ljIHRvIGRldGVybWluZSBwcmlvcml0eVxyXG4vLyBzZXJpZXMgb2YgcmFkaW8gYnV0dG9ucyBsb29wIHRocm91Z2ggdGhlbVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1Db250cm9sbGVyKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZWRhdGUscHJpb3JpdHkscHJvamVjdCxjb21wbGV0ZWQpIHtcclxuXHJcblxyXG4vLyBjcmVhdGUgYSB0b2RvIG9iamVjdCBmcm9tIHRoZSBzcGVjaWZpZWQgaW5wdXRzIVxyXG5cclxuIFxyXG5cclxuICAgICAgICAgICAvLyBhZGQgaXQgdG8gdGhlIHNwZWNpZmljIHByb2plY3QuLiAgYWxsIGJ5IGRlZmF1bHQgb3Igc2VsZWN0ZWQuLlxyXG5cclxuXHJcbiAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCwgJ1BST0pFQ1RDSE9JQ0UnKVxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICBpZiAocHJvamVjdCA9PSBcImFsbFwiIHx8IHByb2plY3QgPT0gXCJBbGxcIikge1xyXG4gICAgICAgICAgICAvLyB0aGUgc3BlY2lmaWMgb2JqZWN0IGtleSBob3VzZXMgYW4gYXJyYXksIHNvIHB1c2ggb250byB0aGF0IGFycmF5IVxyXG4gICAgICAgICAgICBkZWZhdWx0cHJvamVjdHMuYWxsLnB1c2goY3JlYXRlVG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVkYXRlLHByaW9yaXR5LHByb2plY3QsY29tcGxldGVkKSkgXHJcblxyXG5cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgZWxzZSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gYnV0IGV2ZW4gd2hlbiBhZGRpbmcgdG8gY3VzdG9tIHByb2plY3RzLCB3ZSBhcmUgYWx3YXlzIGFkZGluZyB0byBBbGwhIVxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdHByb2plY3RzLmFsbC5wdXNoKGNyZWF0ZVRvZG8odGl0bGUsZGVzY3JpcHRpb24sZHVlZGF0ZSxwcmlvcml0eSxwcm9qZWN0LGNvbXBsZXRlZCkpIFxyXG5cclxuICAgICAgICAgICAgLy8gYW5kIHRoZSBjdXN0b20gcHJvamVjdCBpdHNlbGZcclxuICAgICAgICAgICAgcHJvamVjdHNbcHJvamVjdF0ucHVzaChjcmVhdGVUb2RvKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZWRhdGUscHJpb3JpdHkscHJvamVjdCxjb21wbGV0ZWQpKSBcclxuXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gYXBwZW5kIHRoZSB0b2RvIHRvIHRoZSBhcHByb3ByaWF0ZSBwcm9qZWN0IVxyXG4vLyBpdCBpcyBlaXRoZXIgdG8gQWxsIHByb2plY3RzLCBvciBhIHNwZWNpZmljIG9uZVxyXG4vLyBmb3IgYWxsIGJlbG93IiwiLy8gcHJvamVjdHMgd2lsbCBuZWVkIHRvIGJlIGNhcGFibGUgb2Ygc3RvcmluZyB3aGljaCB0b2RvJ3MgYmVsb25nIHRvIHRoZW1cclxuLy8gaXQgbG9va3MgY2xlYW5lciB0byBzdG9yZSBhcyBhbiBvYmplY3Qgb2YgcHJvamVjdCBuYW1lcyBhbmQgaGF2ZSB0aGUgdmFsdWVzIGVxdWFsIHRvXHJcbi8vIGFycmF5cyB0aGF0IGNvbnRhaW4gdGhlIHJlbGV2ZW50IHRvZG8gb2JqZWN0cyBcclxuXHJcbi8vIHdlIGNhbiBjb21lIHVwIHdpdGggYSBtYXN0ZXIgcHJvamVjdHMgb2JqZWN0LCBpZiBpbiB0aGUgVUkgd2Ugd291bGQgbGlrZSB0byBzZXBhcmF0ZSB0aGUgZGlzcGxheVxyXG4vLyBpdCBpcyBlYXNpZXIgdG8gaGF2ZSBhIHNlcGFyYXRlIGRlZmF1bHQgcHJvamVjdCBvYmplY3QgYXMgd2UgY2FuIGp1c3QgbG9vcCBvdmVyIGl0IFxyXG4vLyB0byBwb3B1bGF0ZSB0aGUgZGlzcGxheSBhbmQgbm90IGhhdmUgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGRlZmF1bHQgdnMgbm9uXHJcblxyXG4vLyBhbGwga2V5IHdpbGwgaG91c2UgYXJyYXkgdGhhdCBwYXJzZXMgYWxsIGF2YWlsYWJsZSBwcm9qZWN0IG9iamVjdHMgYW5kIGxpc3RzIHRoZW1cclxuLy8gdGhlIHRvZGF5IGFuZCB0aGlzd2VlayBhcnJheSB3aWxsIGhhdmUgdG8gZG8gd2l0aCBzb3J0aW5nIFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0cHJvamVjdHMgPSB7XHJcbiAgICBhbGw6IFtdLFxyXG4gICAgdG9kYXk6IFtdLFxyXG4gICAgdGhpc3dlZWs6IFtdLFxyXG59XHJcblxyXG4vLyB0aGlzIGZ1bmN0aW9uIHRvIHBvcHVsYXRlIGRlZmF1bHQgcHJvamVjdHMsIHdoaWNoIHdpbGwgbG9vcCBvdmVyIGN1c3RvbSBwcm9qZWN0cyFcclxuXHJcblxyXG4vLyB3ZSB3aWxsIG1ha2UgZnVuY3Rpb25zIHRvIHNvcnQgYWxsIHRvIGNyZWF0ZSB0aGlzIHdlZWsgYW5kIHRvZGF5IVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0ge1xyXG4gICBcclxufVxyXG5cclxuLy8gYWRkIHRoZSBhcHByb3ByaWF0ZSB0b2RvJ3MgdG8gdGhlc2UgcHJvamVjdHMgYmFzZWQgb24gdGhlIGFwcHJvcHJpYXRlIGRhdGVzIChkYXRlZm4hKVxyXG5cclxuXHJcblxyXG4vLyBub3cgd2UgZGV2ZWxvcCBhIHdheSB0byBhZGQgY3VzdG9tIHByb2plY3RzIHRvIHRoaXMgb2JqZWN0IVxyXG4vLyBpZiB2aXN1YWxseSB3ZSB3YW50IHRvIHNob3cgYSBjdWUgdGhhdCB0aGlzIGlzIGFuIG9wdGlvbiB3ZSBjYW4gZG8gdGhpcyB3aXRoIHRoZSBVSSBvciBub3QgaW4gdGhpcyBmdW5jdGlvblxyXG4vLyBydW5uaW5nIGFkZCBwcm9qZWN0IHNob3VsZCBhZGQgYSBwcm9cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0bmFtZSkge1xyXG5cclxuICAgIFxyXG5cclxuICAgIC8vIGlmIHdlIHRyeSB0byBhZGQgYSBwcm9qZWN0IG5hbWUgdGhhdCBhbHJlYWR5IGV4aXN0cywgd2UgY2FuIHJldHVybiBhIGNvbmZpcm1hdGlvbiBcclxuaWYgKHByb2plY3RuYW1lID09IFwiXCIpIHtyZXR1cm59XHJcblxyXG5cclxuaWYgKHByb2plY3RzLmhhc093blByb3BlcnR5KHByb2plY3RuYW1lKSkge1xyXG4gICAgY29uc29sZS5sb2coJ2xvZ3MgdGhhdCBwcm9wZXJ0eSBleGlzdHMgd2l0aGluIHByb2plY3RtYWtlci5qcycpXHJcblxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyBjYWxsIGRvbSBmdW5jdGlvbiB0byB0dXJuIGZpZWxkIHJlZCBhbmQgY2hhbmdlIHBsYWNlaG9sZGVyIHRvIGV4aXN0cyFcclxuXHJcblxyXG59XHJcblxyXG4gICAgLy8gZWxzZSB3ZSBhZGQgdGhlIHByb2plY3QgbmFtZSBhcyBhIGtleSB0byBwcm9qZWN0IG9iamVjdFxyXG4gICAgLy8gZXZlbnR1YWxseSB3ZSB3aWxsIGFwcGVuZCB0b2RvJ3MgdG8gdGhlc2UgY2F0ZWdvcmllcyBiYXNlZCBvbiBzb21lIGNyaXRlcmlhIFxyXG5cclxucHJvamVjdHNbcHJvamVjdG5hbWVdID0gW11cclxubGV0IHJlc3VsdCA9IHByb2plY3RuYW1lXHJcblxyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdERUZBVUxUIFBST0pTIEFSUkFZISEhJylcclxuY29uc29sZS5sb2cocHJvamVjdHMsICdjdXJyZW50IHByb2plY3RzIG9iamVjdCcpO1xyXG5cclxuICBcclxuXHJcblxyXG5cclxucmV0dXJuO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyB3ZSB3YW50IHRvIGRlbGV0ZSB0aGV5IGtleSBvZiB0aGUgcHJvamVjdFxyXG4vLyBmdW5jdGlvbiB0byByZW1vdmUgdGhlIHByb2plY3QsIHdlIG5lZWQgYSB3YXkgdG8gZGV0ZXJtaW5lIHdoaWNoIHBvc2l0aW9uXHJcbi8vIGluIHRoZSBhcnJheSB0aGUgcHJvamVjdCBpcyB0byByZW1vdmVcclxuLy9zdXBwbHkgdGhpcyBhbiBpbmRleCBhcyB0aGlzIHdpbGwgYmUgdmlzdWFsIGJhc2VkXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xyXG5cclxuICAgICAgICBkZWxldGUgcHJvamVjdHNbcHJvamVjdF1cclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcclxufVxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBiZWxvdyByZXBvcnRzIG5hbWUgb2YgcHJvamVjdHMgY3VycmVudGx5IGluIGxpc3QgYW5kIGFwcGVuZCB0byBhbiBhcnJheVxyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50Q3VzdG9tUHJvamVjdHMgPSBbXVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XHJcbiAgICBjdXJyZW50Q3VzdG9tUHJvamVjdHMgPSBbXVxyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBpbiBwcm9qZWN0cykge1xyXG4gICAgICAgICAgICBjdXJyZW50Q3VzdG9tUHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgIH0iLCIvLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSB0b2RvIG9iamVjdHNcclxuZnVuY3Rpb24gdXBkYXRlQWxsKCkge1xyXG4gICAgXHJcbiAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgby5kZWZhdWx0cHJvamVjdHMuYWxsID0gW11cclxuXHJcbiAgICAgICAgLy8gbG9vcCBvdmVyIGFsbCBjdXN0b20gcHJvamVjdCBhcnJheXMgYW5kIGFkZCB0byBBbGxcclxuICAgXHJcbiAgICAgICBmb3IgKGxldCBwcm9wIGluIG8ucHJvamVjdHMpIHtcclxuICAgICAgICAvLyBpbiBoZXJlIHByb3AgaXMgZWFjaCBvYmplY3Qga2V5IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGFycmF5IGhvbGRpbmcgb2JqZWN0c1xyXG4gICAgICAgIC8vIG9mIGVhY2ggcHJvamVjdHMgdG9kbydzXHJcblxyXG4gICAgICAgIC8vIHdlIG11c3QgbG9vcCBvdmVyIGVhY2ggcHJvcCBhbmQgYWRkIHRvIEFsbCFcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5sZXQgdG9kb2NhdGNoMSA9IFtdXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksICBwcm9qZWN0LCBjb21wbGV0ZWQgPSBmYWxzZSkgXHJcbnsgICBcclxuXHJcblxyXG4gICAgbGV0IG9iaiA9IHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCAgcHJvamVjdCwgY29tcGxldGVkfVxyXG4gICAgXHJcblxyXG4gICAgY29uc29sZS5sb2coICd0b2RvY2F0Y2gnKVxyXG5cclxuICAgIC8vIHdoZW4gd2UgbWFrZSBhIHRvZG8sIHdlIHdhbnQgdG8gcmVmcmVzaCB0aGUgYWxsIG9iamVjdCBhZ2FpbiB3aGljaCBpcyBhIGNvbGxlY3Rpb24gb2YgZXZlcnkgcHJvamVjdHMgb2JqZWN0IVxyXG4gICAgdXBkYXRlQWxsKCkgXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCdERUZBVUxUIHRvZG90b2RvIEFSUkFZISEhJylcclxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgIHByb2plY3QsIGNvbXBsZXRlZH1cclxufVxyXG5cclxuXHJcbi8vIHdlIHdhbm5hIHVwZGF0ZSB0aGUgYWxsIG9iamVjdCBhZnRlciBtYWtpbmcgYSB0b2RvIVxyXG5cclxuLy8gZnVuY3Rpb24gdG8gc2V0IGNvbXBsZXRlIG9mIHRvZG8gb2JqZWN0IHRvIHRydWUgdGFrZXMgYSB0b2RvIG9iamVjdCBhcyBhbiBhcmd1bWVudFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXBsZXRlKG9iaikge1xyXG4gICAgXHJcbiAgICBpZiAob2JqLmNvbXBsZXRlZCkge1xyXG4gICAgXHJcbiAgICAgICAgb2JqLmNvbXBsZXRlZCA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBvYmouY29tcGxldGVkID0gdHJ1ZVxyXG4gICAgcmV0dXJuXHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgcHJpb3JpdHkgYmV0d2VlbiBsb3cgbWVkaXVtIGFuZCBoaWdoIHRha2VzIGEgdG9kbyBvYmplY3QgYXMgYXJndW1lbnQgYW5kIGEgc2VsZWN0aW9uXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkob2JqLCBwcmlvcml0eSkge1xyXG4gICAgb2JqLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgIHJldHVyblxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==