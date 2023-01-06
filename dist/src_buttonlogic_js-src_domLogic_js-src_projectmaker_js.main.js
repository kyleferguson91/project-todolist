"use strict";
(self["webpackChunkproject_todolist"] = self["webpackChunkproject_todolist"] || []).push([["src_buttonlogic_js-src_domLogic_js-src_projectmaker_js"],{

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
    console.log(selectedproj.value, 'selectedproj')
  
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
           else { todoproject = e.target.value}
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
   e.stopImmediatePropagation()

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
        console.log('first')
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
        }

     })
     
     // add event listener when submit button is clickeed 

      projectsubmit.addEventListener('mousedown', (e) => {
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
    
      o.populateDisplay(value)
      o.renderCustomProjects()
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
    
  resetInputs()
  modalLogic()
  
  Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./buttonlogic.js */ "./src/buttonlogic.js"))
  .then((o) => {
      o.addButtonLogic()
      o.modalLogic()
  })
  e.stopImmediatePropagation

  
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
          
           })

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
                e.stopImmediatePropagation()
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
                .then((obj) => {
        
                })
                ;(0,_domLogic_js__WEBPACK_IMPORTED_MODULE_1__.populateDisplay)(e.target.dataset.title)
                // depending on the value of e.target.id, we want to call that specific array
                // and feed it to a dom function that loops the array and populates the display!
                // all will be the default arr

                if (e.target.id == "all") {
                    console.log(e.target.dataset.title)
                }
                else if (e.target.id == "today"){console.log(e.target.dataset.title)}
                else if (e.target.id == "thisweek"){console.log(e.target.dataset.title)}
                else {console.log(e.target.dataset.title)}
    
               
              

        
                
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
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderCustomProjects": () => (/* binding */ renderCustomProjects)
/* harmony export */ });
/* harmony import */ var acorn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! acorn */ "./node_modules/acorn/dist/acorn.mjs");
/* harmony import */ var _buttonlogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonlogic.js */ "./src/buttonlogic.js");
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
        projectbutton.dataset.title = elem

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




}


// function to populate display of projects in todo creation based on current projects

function selectChoiceCreation() {

    


    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
    .then((obj) => {
  
    // remove all content to start
    document.querySelector('.selectoptions').innerHTML = ""

// add the All projects option!


let option = document.createElement('option')

option.textContent = 'All'
option.value = 'All'
option.dataset.type = 'option'
option.classList.add('projectselect')

   document.querySelector('.selectoptions').appendChild(option)


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
let project = ""
let projectset = ""

const todoarea = document.querySelector('.todosection')
console.log(projectobject, 'p[rovobj')



// set the display to be blank!

todoarea.innerHTML = ""

if (projectobject == "All" || projectobject == "all") {projectset = "defaultprojects"}

else if (projectobject == "today") {projectset = "defaultprojects"}

else if (projectobject == "thisweek") {projectset = "defaultprojects"}

else {projectset = 'projects'}





    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
 
    .then((o) => {
        console.log('projectset', projectset, projectobject, 'projobject', o[projectset], 'projectset', o[projectset][projectobject], 'actual todo')
        for (let prop of o[projectset][projectobject]) {

            // project set determines default or custom projects
            // projectobject determines specific project, which then returns
            // and array of objects, which we would need to sort through and pull specific properties!
            // this is a for of loop which sorts over the array called by o[projectset][projectobject]

            console.log(o[projectset][projectobject], 'propp', prop)
            let project = document.querySelectorAll('.customprojecttitle').forEach((elem,ind,arr) => {
                console.log(elem, 'CUSTOM PRPJE KIT')
            })

            
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

        text.textContent = prop.title














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

    const selected = document.querySelectorAll('.red')
    selected.forEach(elem => {
        elem.addEventListener(('click'), (e) => {
        console.log(e,'asdkljasdkljasldjalskdjkl32')

      
        })
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



// function red project titles!

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

projects[projectname].push({title:result})
projects[projectname].push({title:result})
console.log(projects, 'current projects object');
Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./domLogic.js */ "./src/domLogic.js"))
.then(o => {
   o.redProject()
})




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


let todocatch1 = []
function createTodo(title, description, duedate, priority,  project, completed = false) 
{   

    let obj = {title, description, duedate, priority,  project, completed}
    
    todocatch1.push(obj)
    console.log(todocatch1, 'todocatch')
    return {title, description, duedate, priority,  project, completed}
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2J1dHRvbmxvZ2ljX2pzLXNyY19kb21Mb2dpY19qcy1zcmNfcHJvamVjdG1ha2VyX2pzLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUM5RDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0lBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOERBQWU7QUFDbkM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzSUFBMkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywrTEFBa0I7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOERBQVU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhIQUF1QjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxRQUFRLG9JQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0lBQTJCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkhBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsOEhBQXVCO0FBQ2pDO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9JQUEwQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQWM7QUFDZCxRQUFRLHNJQUEyQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzSUFBMkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0lBQTBCO0FBQzlDO0FBQ0EscUJBQXFCO0FBQ3JCLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4SEFBdUI7QUFDdkMsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDNkM7QUFDRTtBQUNQO0FBQ1Y7QUFDOUI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNJQUEyQjtBQUN2QztBQUNBO0FBQ0EsYUFBYTtBQUNiLFlBQVksOERBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhIQUF1QjtBQUNsQztBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzSUFBMkI7QUFDM0M7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0IsOERBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsb0RBQW9EO0FBQ3BELHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsK0JBQStCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ24vQkE7QUFDQTtBQUNBO0FBQ3NDO0FBQ0U7QUFDdUI7QUFDL0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSUFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvSUFBMEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLG9JQUEwQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNJQUEyQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtMQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0lBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw2REFBVztBQUNYLG1FQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLG9DQUFvQztBQUNwQztBQUNBLHVDQUF1QztBQUN2QztBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzSUFBMkI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzZHlDO0FBQ29CO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBd0IsQ0FBQyx1REFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBd0IsQ0FBQyx1REFBVTtBQUMvQztBQUNBO0FBQ0EsWUFBWSxzREFBUSxlQUFlLHVEQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixhQUFhO0FBQ3pDLDRCQUE0QixhQUFhO0FBQ3pDO0FBQ0EsOEhBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2J1dHRvbmxvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvZG9tTG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9mb3JtbG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9wcm9qZWN0bWFrZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy90b2RvbW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1Db250cm9sbGVyIGFzIGZvcm1TdWJtaXQgIH0gZnJvbSAnLi9mb3JtbG9naWMuanMnXHJcbi8vIHJlc2V0IGlucHV0IGZ1bmN0aW9uXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRJbnB1dHMoKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgZWxlbS52YWx1ZSA9IFwiXCJcclxuICAgICAgICBlbGVtLmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbi8vdG9nZ2xlIG1vZGFsIGZ1bmN0aW9uXHJcblxyXG5mdW5jdGlvbiB0b2dnbGVNb2RhbCgpIHtcclxuXHJcbiAgICBjb25zdCBtb2RhbHdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50JylcclxuXHJcbm1vZGFsd2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW9kYWwnKVxyXG5cclxuXHJcbmNsb3NlbG9naWMoKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIGZ1bmN0aW9uIGJlbG93IGFkZHMgY2xpY2sgZXZlbnRzIHRvIGN1c3RvbSBwcm9qZWN0IHRpdGxlIGJ1dHRvbnMgc28gd2hlbiB0aGV5IGFyZSBjbGlja2VkIHRoZXkgY3JlYXRlIGFuIGV2ZW50XHJcbiAgICBcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBjdXN0b21CdXR0b25Mb2dpYygpIHtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b21wcm9qZWN0dGl0bGUnKVxyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQuZGF0YXNldC50aXRsZVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZURpc3BsYXkodGFyZ2V0KVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gYmVsb3cgYWRkcyBjbGljayBldmVudHMgdG8gdG9kbyBidXR0b25zXHJcbiAgICBcclxuICAgIGV4cG9ydCBmdW5jdGlvbiB0b2RvQnV0dG9uTG9naWMoKSB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb2J1dHRvbicpXHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gcGx1cyBzd2l0Y2ggaW1hZ2UgbG9naWMgb24gaG92ZXIgYW5kIGNsaWNrXHJcbiAgICBcclxuICAgICBmdW5jdGlvbiBwbHVzQnV0dG9uSW1hZ2VMb2dpYygpIHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbHVzYnV0dG9uJylcclxuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGUudGFyZ2V0LnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3BsdXMtY2lyY2xlLXN2Z3JlcG8tY29tKDIpLnN2ZydcclxuICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgZS50YXJnZXQuc3JjID0gJy4uL3NyYy9pbWFnZXMvcGx1cy1jaXJjbGUtc3ZncmVwby1jb20uc3ZnJ1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3BsdXMtY2lyY2xlLXN2Z3JlcG8tY29tKDMpLnN2ZydcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcm9hc3QoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0Y29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Y29udGFpbmVyJylcclxuICAgICAgICBjb25zdCBwcm9qZWN0Ym94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxyXG4gICAgICAgIGNvbnN0IHRvZG9zZWxlY3RidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NlbGVjdCcpXHJcbiAgICAgICAgY29uc3QgbW9kdWxlID0gYXdhaXQgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c2VsZWN0JylcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1vZHVsZS5wcm9qZWN0cykubGVuZ3RoID09IDApIHtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGlucHV0Y29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Y29udGFpbmVyJylcclxuICAgICAgICBjb25zdCBwcm9qZWN0Ym94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxyXG4gICAgICAgIGNvbnN0IHRvZG9zZWxlY3RidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NlbGVjdCcpXHJcbiAgICBcclxuICAgICAgICBwcm9qZWN0Ym94LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgIGlucHV0Y29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgIHRvZG9zZWxlY3RidXR0b24uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICBcclxuICAgIHRvZG9zZWxlY3RidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlYmcnKSBcclxuICAgIHByb2plY3RidXR0b24uY2xhc3NMaXN0LmFkZCgnY2hhbmdlYmcnKVxyXG4gICAgdG9kb3NlbGVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdnaG9zdCcpXHJcbiAgICBcclxuICAgIH1cclxuICAgIGVsc2UgeyAgIFxyXG4gICAgICAgIHRvZG9zZWxlY3RidXR0b24uZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRvZG9zZWxlY3RidXR0b24uY2xhc3NMaXN0LmFkZCgnY2hhbmdlYmcnKVxyXG4gICAgICAgIHRvZG9zZWxlY3RidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZ2hvc3QnKSAgXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2ViZycpIFxyXG4gICAgICAgIHByb2plY3Rib3guY2xhc3NMaXN0LmFkZCgnaGlkZScpIFxyXG4gICAgICAgIGlucHV0Y29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKX1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8vbW9kYWwgbG9naWMgdG8gYmUgdXNlZCB3aXRoIHBsdXMgYnV0dG9uIFxyXG4gICAgXHJcbiAgICAgZXhwb3J0IGZ1bmN0aW9uICBtb2RhbExvZ2ljICgpIHtcclxuICAgICAgICBcclxuXHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBtb2RhbHdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAvLyB3ZSBtZWVkIGEgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgd2UgYXJlIG9wZW5pbmcgdGhlIG1vZGFsXHJcbiAgICAvLyBpbiBvdGhlciB3b3JkcyBpZiB0aGUgcHJvamVjdHMgb2JqZWN0IGlzIGVtcHR5XHJcbiAgICAgICAgLy8gdGhlbiBncmV5IG91dCB0aGUgdG8tZG8gc2VjdGlvbiBpbml0aWFsbHlcclxuXHJcblxyXG5yb2FzdCgpXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gc2hvdyBhbmQgaGlkZSBtb2RhbCBieSB0b2dnbGluZyBhIGNsYXNzIHRvIGJlIGNhbGxlZCBpbiBvdGhlciBmdW5jdGlvbnNcclxuXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gdG8gdG9nZ2xlIHdoZW4gbW9kYWwgc2hvd3Mgb3Igbm90XHJcbiAgICBcclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVNb2RhbCgpIHtcclxuICAgICAgICAgICAgbW9kYWx3aW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tb2RhbCcpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBmdW5jdGlvbiB0byBjb25zaWRlciB3aGVuIHdpbmRvdyBvdXRzaWRlIG9mIG1vZGFsIGlzIGNsaWNrZWQgdG8gY2xvc2UgbW9kYWxcclxuICAgIC8vIHNpbmNlIG1vZGFsd2luZG93IGlzIHRoZSBtb2RhbCBzZWxlY3RvciB3aGljaCBpcyB0aGUgZW50aXJlIGJhY2tncm91bmRcclxuICAgIC8vIGFueXRoaW5nIGNsaWNrZWQgaW4gdGhlIGJhY2tncm91bmQgdGhhdCBpcyBub3QgdGhlIG1vZGFsIGNvbnRlbnQgd2lsbCBjdWFzZSB0aGUgd2luZG93IHRvIGNsb3NlXHJcbiAgICBcclxuICAgICAgICBmdW5jdGlvbiB3aW5kb3dPbkNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsd2luZG93KSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlTW9kYWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgd2luZG93T25DbGljayk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNhbGwgcHJvamVjdCBidXR0b24gc3VibWl0IGxvZ2ljIHdoZW4gbW9kYWwgYWN0aXZlXHJcbiAgICBcclxuIFxyXG4gICAgICAgIHByb2plY3RzdWJtaXRsb2dpYygpXHJcblxyXG5cclxuICAgICAgICAvLyBjYWxsIHN1Ym1pdHRvZG8gZm9ybSBsb2dpYyB3aGVuIG1vZGFsIGFjdGl2ZSBcclxuICAgICAgICBzdWJtaXRMb2dpYygpXHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBiZWxvdyB0byBhZGQgZXZlbnRzIHRvIHN1Ym1pdGlucHV0cyBhdCBhbGwgdGltZXMsIGFuZCBkZWNpZGUgd2hhdCBoYXBwZW5zXHJcbi8vIHdoZW4gc3VibWl0IGlzIGNsaWNrZWQhXHJcbi8vIGVuc3VyZSBmaWVsZHMgZ28gcmVkIHdoZW4gYmFkIGRhdGEgYW5kIHRoYXQgc3VibWl0IHdvbid0IHdvcmsgd2l0aCBiYWQgZGF0YSEgKGl1biBiZWxvdyBmdW5jdGlvbilcclxuICAgIFxyXG5cclxudmFyIHRvZG90aXRsZSA9IFwiXCJcclxudmFyIHRvZG9kZXNjcmlwdGlvbiA9IFwiXCJcclxuXHJcbnZhciB0b2RvZHVlZGF0ZSA9ICAgIFwiXCJcclxuIGltcG9ydCgnZGF0ZS1mbnMnKVxyXG4udGhlbigobykgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG8uZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJylcclxuICAgIHRvZG9kdWVkYXRlID0gZGF0ZVxyXG59KVxyXG5cclxudmFyIHRvZG9wcmlvcml0eSA9IFwiXCJcclxudmFyIHRvZG9wcm9qZWN0ID0gXCJcIlxyXG52YXIgdG9kb2NvbXBsZXRlZCA9IFwiXCJcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudHN0b1N1Ym1pdElucHV0cygpIHtcclxuXHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICBjb25zdCBzdWJtaXR0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpXHJcbiAgICBjb25zdCBzdWJtaXRkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpXHJcbiAgICBjb25zdCBzdWJtaXRwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXHJcbiAgICBjb25zdCBzdWJtaXRjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGVkJylcclxuICAgIGNvbnN0IHN1Ym1pdGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZScpXHJcbiAgICBjb25zdCBzdWJtaXRwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcclxuICAgIGNvbnN0IHNlbGVjdGVkcHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RvcHRpb25zJylcclxuICAgXHJcblxyXG4vLyB0aGlzIHNldHMgdG9kbyBwcm9qZWN0IHRvIHdoYXRzIGlzIHNlbGVjdGVkIGJ5IGRlZmF1bHQgc28gd2UgZ2V0IHNvbWV0aGluZ1xyXG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRwcm9qLnZhbHVlLCAnc2VsZWN0ZWRwcm9qJylcclxuICBcclxudG9kb3Byb2plY3QgPSBzZWxlY3RlZHByb2oudmFsdWVcclxuXHJcbiAgICBzdWJtaXR0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICB0b2RvdGl0bGUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG90aXRsZSlcclxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgY29uc3Qgc3VibWl0dG9kb2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRidXR0b24nKVxyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSBcIlwiIHx8IGNoZWNrVGV4dChlLnRhcmdldC52YWx1ZSkgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgc3VibWl0dGl0bGUuY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICAgICAgIHN1Ym1pdHRvZG9idXR0b24uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlICE9IFwiXCIgJiYgY2hlY2tUZXh0KGUudGFyZ2V0LnZhbHVlKSA9PSB0cnVlKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgc3VibWl0dG9kb2J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHN1Ym1pdHRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZGJhY2snKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSlcclxuICAgIHN1Ym1pdGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICB0b2RvZGVzY3JpcHRpb24gPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9kZXNjcmlwdGlvbilcclxuICAgICB9KVxyXG5cclxuICAgICBzdWJtaXRjb21wbGV0ZWQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIHRvZG9jb21wbGV0ZWQgPSBlLnRhcmdldC5jaGVja2VkXHJcbiAgICAgICAgY29uc29sZS5sb2codG9kb2NvbXBsZXRlZClcclxuICAgICB9KVxyXG4gICAgIFxyXG4gICAgIHN1Ym1pdGRhdGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAgICAgdG9kb2R1ZWRhdGUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgXHJcblxyXG4gICAgICAgXHJcbiAgICAgfSlcclxuXHJcbiAgICAgc3VibWl0cHJvamVjdC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiBcclxuICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gXCJcIikgeyAgICAgICAgICB9XHJcbiAgICAgICAgICAgZWxzZSB7IHRvZG9wcm9qZWN0ID0gZS50YXJnZXQudmFsdWV9XHJcbiAgICAgICAgfSlcclxuICAgICB9KVxyXG4gIFxyXG4gICAgIFxyXG4gICAgIHN1Ym1pdHByaW9yaXR5LmZvckVhY2goZWxlbSA9PiB7XHJcbmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgdG9kb3ByaW9yaXR5ID0gZS50YXJnZXQuaWRcclxuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKFxyXG5cclxuICAgIClcclxuICAgIGNvbnNvbGUubG9nKHRvZG9wcmlvcml0eSlcclxuIH0pXHJcbiAgICAgfSlcclxuXHJcbn1cclxuXHJcblxyXG5cclxuICAgIC8vICAgIC8vc3VibWl0IGJ1dHRvbiBsb2dpbiBpbiBtb2RhbCB3aW5kb3cgZm9yIHRvZG9cclxuICAgICAgIC8vIHdhbnQgdG8gdXNlIHRoZSBidXR0b24gdG8gc3VibWl0IGFuc3dlcnMgdG8gYXBwcm9wcmlhdGUgbW9kdWxlXHJcbiAgICAgICAvLyB0aGVuIHJlc2V0IHRoZSBpbnB1dHMgdG8gbm90aGluZyBpbiB0aGVtIGZvciB0aGUgbmV4dCBhZGRpdGlvblxyXG4gICAgICAgXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdExvZ2ljKCkge1xyXG5cclxuXHJcbiAgICAgXHJcbiAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0YnV0dG9uJylcclxuICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuXHJcbiAgIC8vIGZ1bmN0aW9uIHRvIGFkZCB0byB0b2RvIG9iamVjdHMgbGlzdFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIC8vIHJ1biBmb3JtIGNvbnRyb2xsZXIgd2hlbiB3ZSBjbGljayBzdWJtaXQgd2hpY2ggZ2V0cyB0aGUgcmVsZXZlbnQgaW5wdXRzIGFuZCBydW5zIHRvZG8gbWFrZXJcclxuICAgICAgICAgLy8gdGhlIGlucHV0cyB3ZSBuZWVkIHRvIHVzZSBjb21lIGZyb20gdGhlIGFkZHN1Ym1pdGlucHV0c2Z1bmN0aW9uIVxyXG4gICAgICAgICAvLyB3ZSB3aWxsIHdyaXRlIHRvIGdsb2JhbCB2YXJpYWJsZXNkXHJcblxyXG5cclxuICAgICAgICAgLy8gY2hlY2sgaWYgaW5wdXRzIGFyZSBlbXB0eSFcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgIC8vIGlmIGlucHV0cyBhcmUgZ29vZCwgcnVpbiB0b2RvIGZ1bmN0aW9uXHJcbiAgICAgICAgIGZvcm1TdWJtaXQodG9kb3RpdGxlLCB0b2RvZGVzY3JpcHRpb24sIHRvZG9kdWVkYXRlLCB0b2RvcHJpb3JpdHkgPSAncHJpb3JpdHktbG93JywgdG9kb3Byb2plY3QsIHRvZG9jb21wbGV0ZWQgPSBmYWxzZSlcclxuXHJcbiAgICAgICBcclxuXHJcbiAgIFxyXG4gICAgICAgICAgIFxyXG4gICAvLyByZW1vdmUgdGhlIG1vZGFsIGFmdGVyIGNyZWF0aW5nIG91ciB0b2RvLCBhbmQgcmVzZXQgdGhlIGlucHV0cyBiYWNrIHRvIHRoZWlyIGRlZmF1bHRzXHJcbiAgIFxyXG4gICAgICAgICAgIHRvZ2dsZU1vZGFsKClcclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICBcclxuICAgXHJcbiAgIC8vIHdlIGFsc28gd2FudCB0byBlbnN1cmUgb3VyIGlucHV0cyBhcmUgdHJ1dGh5XHJcbiAgIC8vIG9ubHkgd2FudCB0byByZXF1aXJlIHRpdGxlLCBkZXNjcmlwdGlvbiBkYXRlIGFuZCBwcm9qZWN0IGFuZCBjb21wbGV0ZVxyXG4gICBcclxuICAgXHJcbiAgICAgICAgICAgLy8gcmVuZGVyIHRoZSBkb20gYWZ0ZXIgYWxsIHRoaXMsIHdoaWNoIHdpbGwgdXBkYXRlIGFsbCBlbGVtZW50c1xyXG4gICBcclxuICAgICAgICAgICBpbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4gICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICAgICAgIG8ucmVuZGVyKClcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgfSlcclxuICAgXHJcbiAgICAgICAgaW1wb3J0KCcuL2J1dHRvbmxvZ2ljLmpzJylcclxuICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIG9iai5hZGRCdXR0b25Mb2dpYygpXHJcbiAgICAgICAgICAgIG9iai5tb2RhbExvZ2ljKClcclxuICAgICAgICB9KVxyXG4gICBcclxuICAgICAgIH0pXHJcbiAgICAgICByZXNldElucHV0cygpXHJcblxyXG5cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGluaXRpYWwgc3VibWl0IGJ1dHRvbiBwcm9qZWN0IGxvZ2ljIVxyXG4gICAgICBleHBvcnQgZnVuY3Rpb24gaW5pdGlhbHByb2ooKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpcnN0JylcclxuY29uc3QgcHJvanRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3R0aXRsZScpXHJcbmlmIChwcm9qdGl0bGUudmFsdWUgPT0gXCJcIiB8fCBjaGVja1RleHQocHJvanRpdGxlLnZhbHVlKSApIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c3VibWl0JykuZGlzYWJsZWQgPSB0cnVlXHJcblxyXG59XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGV4cG9ydCBmdW5jdGlvbiBpbml0aWFsdG9kb3N1Ym1pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZmlyc3QnKVxyXG5jb25zdCBzdWJtaXRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0YnV0dG9uJylcclxuaWYgKHN1Ym1pdGJ1dHRvbi52YWx1ZSA9PSBcIlwiIHx8IGNoZWNrVGV4dChzdWJtaXRidXR0b24udmFsdWUpICkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdGJ1dHRvbicpLmRpc2FibGVkID0gdHJ1ZVxyXG5cclxufVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgZnVuY3Rpb24gY2hlY2tkZWZhdWx0KHN0cikge1xyXG4gICAgICAgIGxldCB0ZXN0ID0gL14oYWxsfHRvZGF5fHRoaXN3ZWVrKSQvbWlcclxuICAgICAgICByZXR1cm4gdGVzdC50ZXN0KHN0cilcclxuICAgIH0gICBcclxuICAgICAgXHJcbiAvL3N1Ym1pdCBidXR0b24gbG9naW4gaW4gbW9kYWwgd2luZG93IGZvciBwcm9qZWN0XHJcbiAgICAgIC8vIHdhbnQgdG8gdXNlIHRoZSBidXR0b24gdG8gc3VibWl0IGFuc3dlcnMgdG8gYXBwcm9wcmlhdGUgbW9kdWxlXHJcbiAgICAgIC8vIHRoZW4gcmVzZXQgdGhlIGlucHV0cyB0byBub3RoaW5nIGluIHRoZW0gZm9yIHRoZSBuZXh0IGFkZGl0aW9uXHJcblxyXG4gICAgZnVuY3Rpb24gcHJvamVjdHN1Ym1pdGxvZ2ljKCkge1xyXG5cclxuICAgICBcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHByb2plY3RzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHN1Ym1pdCcpXHJcbiAgICAgIGNvbnN0IHByb2plY3R0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0dGl0bGUnKVxyXG5sZXQgcHJvamVjdHRpdGxlY2hvaWNlID0gXCJcIlxyXG4gICAgICAvLyBldmVudCBsaXN0ZW5lciBvbiBwcm9qZWN0IHRpdGxlIHRvIGNhcHR1cmUgY3VycmVudCBpbnB1dFxyXG4gICAgICBwcm9qZWN0dGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgIFxyXG5cclxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgcHJvamVjdHRpdGxlY2hvaWNlID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0dGl0bGVjaG9pY2UpXHJcblxyXG4gICAgICBcclxuXHJcblxyXG4gICAgICAgIC8vIGlmIHByb2plY3QgdGl0bGUgaXMgbm90IHRydXRoeSwgYWRkIHJlZCBiYWNrZ3JvdW5kXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09IFwiXCIgfHwgY2hlY2tUZXh0KGUudGFyZ2V0LnZhbHVlKSA9PSBmYWxzZSB8fCAgY2hlY2tkZWZhdWx0KGUudGFyZ2V0LnZhbHVlKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBwcm9qZWN0c3VibWl0LmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJylcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIGlmIGl0IGlzIHRydXRoeSwgcmVtb3ZlIHRoZSBiYWNrZ3JvdW5kXHJcbiAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQudmFsdWUgIT0gXCJcIiAmJiBjaGVja1RleHQoZS50YXJnZXQudmFsdWUpID09IHRydWUpIHtcclxuICAgICAgICAgICAgcHJvamVjdHN1Ym1pdC5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZGJhY2snKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgfSlcclxuICAgICBcclxuICAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgd2hlbiBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWVkIFxyXG5cclxuICAgICAgcHJvamVjdHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAgICAvLyB3aGVuIHdlIGNsaWNrIHRoZSBzdWJtaXQgYnV0dG9uLCBjaGVjayB0aGUgdGV4dCByZWNlaXZlZFxyXG4gICAgICAgLy8gaWYgaXQgaXMgYSB0cnV0aHkgaW5wdXQgKG5vdCBibGFuayBhbmQgcGFzc2VzIGNoZWNrKSBydW4gaWYgYmxvY2tcclxuICAgICAgIC8vIGlmIGl0IGlzIG5vdCB0cnV0aHkgcnVuIHRoZSBlbHNlIGJsb2NrXHJcblxyXG4gICAgICAgICAgaWYgKGNoZWNrVGV4dChwcm9qZWN0dGl0bGUudmFsdWUpID09IHRydWUgJiYgcHJvamVjdHRpdGxlLnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgIFxyXG5sZXQgdmFsdWUgPSBwcm9qZWN0dGl0bGUudmFsdWVcclxuXHJcbiAgXHJcbiAgLy8gY2FsbCB0aGUgcHJvamVjdCBjb25zdHJ1Y3RvciFcclxuICBcclxuICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAudGhlbigob2JqKSA9PiB7XHJcblxyXG5cclxuICAgICAgLy8gYWRkIHByb2plY3QgdG8gdGhlIGxpc3RcclxuICAgIC8vIGVuc3VyZSBuYW1lIGRvZXNuJ3QgZXhpc3RcclxuXHJcbiAgICAgIGlmIChvYmouYWRkUHJvamVjdCh2YWx1ZSkgPT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RleGlzdHMhIGNob29zZSBhbm90aGVyJylcclxuICAgICAgICBhbGVydCgncHJvamVjdGV4aXN0cyEgY2hvb3NlIGFub3RoZXInKVxyXG5cclxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dGNvbnRhaW5lcicpXHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50JylcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCcuc2hvdy1tb2RhbCcpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgXHJcbiAgICAgIC8vIGlmIHByb2plY3QgdGl0bGUgaXMgYmxhbmssIHRocm93IGFuIGFsZXJ0IGFuZCByZSBpbnB1dCB0aGUgZGF0YVxyXG5cclxuICAgICBcclxuICAgICAgIC8vIHNldCBwcm9qZWN0IHRpdGxlIGVxdWFsIHRvIG5vdGhpbmcgYWdhaW4gXHJcbiAgICAgICByZXNldElucHV0cygpIFxyXG4gIFxyXG4gICAgICAgLy8gY2xlYXIgdGhlIG1vZGFsXHJcbiAgXHJcblxyXG4gIFxyXG4gICAgICAvL3VwZGF0ZSB0aGUgZG9tXHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgXHJcblxyXG5cclxuICAgICAgdG9nZ2xlTW9kYWwoKVxyXG4gICAgICAvL2FkZCBldmVudCBsaXN0ZW5lcnMgYWZ0ZXIgdXBkYXRpbmcgZG9tIFxyXG5cclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnQoJy4vZG9tTG9naWMnKVxyXG4gICAgLnRoZW4oKG8pID0+IHtcclxuICAgIFxyXG4gICAgICBvLnBvcHVsYXRlRGlzcGxheSh2YWx1ZSlcclxuICAgICAgby5yZW5kZXJDdXN0b21Qcm9qZWN0cygpXHJcbiAgICB9KVxyXG4gIH0pIFxyXG4gIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAvLyBmaXJzdCBsb2cgdGhhdCBpdCBpcyBub3QgdHJ1dGh5IGFuZCBhZGQgYSByZWQgYmFja2dyb3VuZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IHRydXRoeSBhZGQgcmVkJylcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBhZGQgcmVkIHRvIGJhY2sgb2YgcHJvamVjdCB0aXRsZVxyXG5cclxuICAgICAgICAgICAgcHJvamVjdHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHByb2plY3R0aXRsZS52YWx1ZSA9PSBcIlwiIHx8IGNoZWNrVGV4dChwcm9qZWN0dGl0bGUudmFsdWUpID09IGZhbHNlKSB7IGFsZXJ0KCdQbGVhc2UgRW50ZXIgYSBWYWxpZCBQcm9qZWN0IE5hbWUnKVxyXG4gICAgICAgICAgICBwcm9qZWN0c3VibWl0LmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhlbiBydW4gdGhlIHByb2plY3RpbnB1dCBmdW5jdGlvbiB0byBsaXN0ZW4gdG8gdGhlIGlucHV0IGFuZCBhZGp1c3QgdGhlIHJlZCBiYWNrZ3JvdW5kIGFjY29yZGluZ2x5XHJcblxyXG4gICAgICAgICAgICAgIGFkZFByb2plY3RJbnB1dFJlZChwcm9qZWN0dGl0bGUpXHJcbiAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoYXQgdG9kbyBzY3JlZW4gZG9lcyBub3QgY29tZSBiYWNrIHVwXHJcbiAgICAgICAgICAgICAgLy8gaWYgdG9kbyBzY3JlZW4gY29udGFpbnMgaGlkZSwgbGVhdmUgaXQgYWxvbmUsIGVsc2VcclxuICAgICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gIFxyXG4gICAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgXHJcbiAgLy8gYWRkIHZhbHVlIG9mIHRpdGxlIGZpZWxkIHRvIHByb2plY3RzIG9iamVjdFxyXG4gICAgXHJcbiAgcmVzZXRJbnB1dHMoKVxyXG4gIG1vZGFsTG9naWMoKVxyXG4gIFxyXG4gIGltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbiAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgby5hZGRCdXR0b25Mb2dpYygpXHJcbiAgICAgIG8ubW9kYWxMb2dpYygpXHJcbiAgfSlcclxuICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvblxyXG5cclxuICBcclxuICAgICAgfSlcclxuICAgICAgXHJcblxyXG5cclxuICB9XHJcbiAgICAgIFxyXG5cclxuXHJcblxyXG4vLyBhZGQgdGhlIGR5bmFtaWMgYmFja2dyb3VuZCB0byBpbnB1dHMsIHJ1biB0aGlzIGluIHBsdXMgYnV0dG9uIG1vZGFsIGZ1bmN0aW9uIFxyXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdElucHV0UmVkKHByb2plY3R0aXRsZSkge1xyXG4gICBcclxuXHJcblxyXG4gICAgICAgXHJcbiAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIC8vIGFkZCBhIGxpc3RlbmVyIG9uIGl0IHRyaWdnZXJlZCBieSBhbnkgaW5wdXQgdG8gbGlzdGVuIGZvciBpbnB1dFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2plY3R0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gaWYgaW5wdXQgcmVtYWlucyBibGFuayBhbmQgZG9lcyBub3Qgc2F0aXNmeSByZWdleCwgY29udGludWUgdG8ga2VlcCBiYWNrZ3JvdW5kIHJlZFxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gXCJcIiB8fCBjaGVja1RleHQoZS50YXJnZXQudmFsdWUpID09IGZhbHNlKSB7ICAgICBcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZCByZWRiYWNrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbi8vIGlmIGlucHV0IGlzIG5vdCBibGFuayBhbmQgcGFzc2VzIHJlZ2V4LCByZW1vdmUgdGhlIHJlZCBiYWNrZ3JvdW5kXHJcblxyXG5cclxuICAgICAgICBlbHNlIGlmIChjaGVja1RleHQoZS50YXJnZXQudmFsdWUpID09IHRydWUgJiYgZS50YXJnZXQudmFsdWUgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnV0aHkgaW5wdXQnKVxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyZWRiYWNrJylcclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcnVuIHRoaXMgd2l0aCBmaXJzdCBzdWJtaXQgYW5kIHRoZW4gYmUgZHluYW1pY1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbi8vIHJlZ2V4IGZvciBpbnB1dHMgXHJcblxyXG4gICAgXHJcbmZ1bmN0aW9uIGNoZWNrVGV4dChzdHIpIHtcclxuICAgIGxldCB0ZXN0MSA9IC9eW15cXHNdKltcXHchfFxcc10rJC9naVxyXG5cclxuICAgcmV0dXJuIHRlc3QxLnRlc3Qoc3RyKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgIFxyXG4vLyBmdW5jdGlvbiB0byByZXNldCB0byBkZWZhdWx0IHRvZG8gZGlzcGxheSBcclxuXHJcbmZ1bmN0aW9uIHJlc2V0VG9kbygpIHtcclxuXHJcbiAgICBcclxuICAgICAgICAvLyByZXNldCBtb2RhbCB3aW5kb3cgdG8gY3JlYXRlIHRvZG8gYnkgZGVmYXVsdFxyXG5cclxuICAgICAgICBjb25zdCB0b2RvYnV0dG9uc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZWxlY3QnKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RidXR0b25zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNlbGVjdCcpXHJcbiAgICAgICAgY29uc3QgdG9kb2lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dGNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuICAgICAgICBjb25zdCBtb2RhbHdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgIC8vIHJlbW92ZSB0aGUgbW9kYWwgd2luZG93XHJcbiAgICAgICAgICAgbW9kYWx3aW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1tb2RhbCcpXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgIHByb2plY3RpbnB1dHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgICAgICAgdG9kb2lucHV0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICAgICBwcm9qZWN0YnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZWJnJylcclxuICAgICAgICAgICB0b2RvYnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuXHJcbn1cclxuXHJcblxyXG5cclxuICAgIC8vbG9naWMgYmVsb3cgdG8gc3dpdGNoIGJldHdlZW4gY3JlYXRpb24gb2YgdG9kbyBvciBhIHByb2plY3RcclxuXHJcbmZ1bmN0aW9uIHN3aXRjaENyZWF0aW9uKCkge1xyXG4gICAgY29uc3QgdG9kb2J1dHRvbnNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2VsZWN0JylcclxuICAgIGNvbnN0IHByb2plY3RidXR0b25zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNlbGVjdCcpXHJcbiAgICBjb25zdCB0b2RvaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Y29udGFpbmVyJylcclxuICAgIGNvbnN0IHByb2plY3RpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICBcclxuICAgIHRvZG9idXR0b25zZWxlY3QuY2xhc3NMaXN0LmFkZCgnY2hhbmdlYmcnKVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZWJnKGUpIHtcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjaGFuZ2ViZycpXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICB0b2RvYnV0dG9uc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbnNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgcHJvamVjdGlucHV0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICB0b2RvYnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuICAgICAgICB0b2RvaW5wdXRzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgIHByb2plY3RidXR0b25zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgLy8gcnVuIGZ1bmN0aW9uIHdoZW4gc3dpdGNoZWQgdG8gZ3JleSBvdXQgcHJvamVjdCBzdWJtaXQhXHJcbiAgICBpbml0aWFscHJvaigpXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbnNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgcHJvamVjdGlucHV0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICB0b2RvYnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZWJnJylcclxuICAgICAgICB0b2RvaW5wdXRzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuXHJcbn1cclxuICAgIFxyXG4gICAgICAgLy8gbG9naWMgdG8gZGVsZXRlIHByb2plY3RzIGZyb20gdGhlIG1hc3RlciBvYmplY3QsIGFuZCB0aGVuIHJlZnJlc2ggdGhlIGFycmF5IGFuZCB0aGUgZG9tcmVuZGVyXHJcblxyXG4gICAgICAgZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RzKCkge1xyXG4gICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgIC50aGVuKChvYmopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhvYmoucHJvamVjdHMpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsc2UgeyBjb25zdCBkZWxldGVwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZXByb2plY3RidXR0b24nKVxyXG4gICAgIFxyXG4gICAgICAgICAgICBkZWxldGVwcm9qZWN0LmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmlndXJlIG91dCB3aGljaCBidXR0b24gd2FzIGNsaWNrZWQgYW5kIGZpbmQgYXBwcm9wcmlhdGUgcHJvamVjdCB0aXRsZVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZW1vdmUgPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBhY2NvcmRpbmcgZGl2IHdpdGggY2xhc3MgcHJvamVjdGJ1dHRvbnMgYW5kIGRhdGE9dGl0bGUgZXF1YWwgdG8gYWJvdmVcclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3aWxsIGhhbmRsZSB0aGlzIHdpdGggYSBmdW5jdGlvbiBpbiB0aGUgZG9tIGxvZ2ljIG1vZHVsZVxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgYWxzbyBuZWVkIHRvIHJlbW92ZSB0aGUgcHJvamVjdCBmcm9tIHRoZSBjdXN0b20gcHJvamVjdHMgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIGZ1bmN0aW9uIGZvciB0aGlzIHdpdGhpbiBwcm9qZWN0IG1ha2VyIG1vZHVsZVxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBwYXNzIHRoZSBhcmd1bWVudCBvZiB0aGUgYXBwcm9wcmlhdGUga2V5IGFib3ZlIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG9iai5yZW1vdmVQcm9qZWN0KHJlbW92ZSlcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4vYnV0dG9ubG9naWMuanMnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChvKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICB7by5hZGRCdXR0b25Mb2dpYygpXHJcbiAgICAgICAgICAgICAgICAgIG8ubW9kYWxMb2dpYygpfSlcclxuICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBjYWxsIHJlbmRlciBjdXN0b20gcHJvamVjdHMgc2luY2Ugd2UgaGF2ZSB1cGF0ZWQgdGhlIGFycmF5IHRoYXQgaXQgdGFrZXMgYXMgYW4gYXJndW1lbnRcclxuICAgICAgICAgICAgICAgIC8vIHRoZSBmdW5jdGlvbiBpdHNlbGYgdXBkYXRlcyB0aGUgYXJyYXkgdG8gYmUgcmVuZGVyZWQgYmFzZWQgb24gdGhlIGN1cnJlbnQgbWFzdGVyIHByb2plY3Qgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICByb2FzdCgpXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4gezNcclxuICAgICAgICAgICAgICAgIG9iai5yZW5kZXIoKX0pXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBhZnRlciB3ZSBjbGljayBvbiBkZWxldGUgY2FsbCByb2FzdCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgdG9kbyBjb250ZW50IHNob3VsZCBiZSBpbnZpc2libGVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICBcclxuICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAvLyBwcm9qZWN0IGRlbGV0ZSBidXR0b24gbG9naWNcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGRlbGV0ZUJ1dHRvbkNvbG9ycygpIHtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVwcm9qZWN0YnV0dG9uJylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlbGV0ZWJ1dHRvbnMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQudGl0bGUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGRldGVybWluZSB3aGljaCBkZWx0ZSBidXR0b24gaGFzIGJlZW4gaG92ZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdyB3ZSB3YW50IHRvIGNoYW5nZSB0aGUgYmFja2dyb3VuZCBvZiB0aGUgY29ycmVzcG9uZGluZyBkaXZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdGl0dGxlcyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdGJ1dHRvbnMnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aXR0bGVzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uZGF0YXNldC50aXRsZSA9PSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbS5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0aXR0bGVzID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0YnV0dG9ucycpXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0aXR0bGVzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5kYXRhc2V0LnRpdGxlID09IGUudGFyZ2V0LmRhdGFzZXQudGl0bGUpXHJcbiAgICAgICAgICAgICAgICAgICAge2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4vL2Z1bmN0aW9uIGhlcmUgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyB0byBwcm9kdWN0IGJ1dHRvbnMgdG8gdXBkYXRlIHRvZG8gZGlzcGxheVxyXG4vL3dlIHdpbGwgaGF2ZSBhIGZ1bmN0aW9uIHdoZW4gY2xpY2tlZCB0byB1cGRhdGUgdGhlbSBhY2NvcmRpbmdseVxyXG4vL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RUaXRsZUV2ZW50czEoKSB7XHJcbmNvbnN0IHRvZG9kaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9jb250ZW50JylcclxuXHJcbi8vIHdoZW4gd2UgY2xpY2sgYWxsLCBsb29wIHRocm91Z2ggYXJyYXkgYWxsIGFuZCBkaXNwbGF5IHRoZSBjb250ZW50cyFcclxuXHJcbmNvbnN0IGFsbHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbCcpXHJcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5JylcclxuY29uc3QgdGhpc3dlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhpc3dlZWsnKVxyXG5cclxuY29uc3QgZGVmYXVsdHMgPSBbYWxsdGl0bGUsIHRvZGF5LCB0aGlzd2Vla11cclxuZGVmYXVsdHMuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCwgJ3Byb2Z1bmMnKVxyXG4gICAgfSlcclxufSlcclxuXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGJlbG93IGFkZHMgY2xpY2sgZXZlbnRzIHRvIGRlZmF1bHQgcHJvamVjdCBidXR0b25zXHJcbmltcG9ydCB7cG9wdWxhdGVEaXNwbGF5fSBmcm9tICcuL2RvbUxvZ2ljLmpzJ1xyXG5pbXBvcnQgeyBmb3JtQ29udHJvbGxlciB9IGZyb20gJy4vZm9ybWxvZ2ljLmpzJ1xyXG5pbXBvcnQgeyBlbCwgdHIgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnXHJcbmltcG9ydCB7IHN1YiB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRCdXR0b25Mb2dpYygpIHtcclxuXHJcblxyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWZhdWx0cHJvamVjdCcpXHJcbiAgICBidXR0b25zLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHBvcHVsYXRlRGlzcGxheShlLnRhcmdldC5pZClcclxuICAgICAgICAgICAgLy8gZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBlLnRhcmdldC5pZCwgd2Ugd2FudCB0byBjYWxsIHRoYXQgc3BlY2lmaWMgYXJyYXlcclxuICAgICAgICAgICAgLy8gYW5kIGZlZWQgaXQgdG8gYSBkb20gZnVuY3Rpb24gdGhhdCBsb29wcyB0aGUgYXJyYXkgYW5kIHBvcHVsYXRlcyB0aGUgZGlzcGxheSFcclxuICAgICAgICAgICAgLy8gYWxsIHdpbGwgYmUgdGhlIGRlZmF1bHQgYXJyXHJcbiAgICAgICAgICAgIC8vIHdlIHRoZW4gd2FudCB0byB1cGRhdGUgdGhlIHZhbHVlIG9mIHRoZSBwcm9qZWN0IHRoYXQgaXMgaGlnaGxpZ2h0ZWQhXHJcbiAgICAgICAgICAgaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuICAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSBcInRvZGF5XCIpe2NvbnNvbGUubG9nKGUudGFyZ2V0LmlkKX1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuaWQgPT0gXCJ0aGlzd2Vla1wiKXtjb25zb2xlLmxvZyhlLnRhcmdldC5pZCl9XHJcbiAgICAgICAgICAgIFxyXG4gXHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gY3VzdG9tUHJvamVjdEJ1dHRvbkxvZ2ljKCkge1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b21wcm9qZWN0dGl0bGUnKVxyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcG9wdWxhdGVEaXNwbGF5KGUudGFyZ2V0LmRhdGFzZXQudGl0bGUpXHJcbiAgICAgICAgICAgICAgICAvLyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIGUudGFyZ2V0LmlkLCB3ZSB3YW50IHRvIGNhbGwgdGhhdCBzcGVjaWZpYyBhcnJheVxyXG4gICAgICAgICAgICAgICAgLy8gYW5kIGZlZWQgaXQgdG8gYSBkb20gZnVuY3Rpb24gdGhhdCBsb29wcyB0aGUgYXJyYXkgYW5kIHBvcHVsYXRlcyB0aGUgZGlzcGxheSFcclxuICAgICAgICAgICAgICAgIC8vIGFsbCB3aWxsIGJlIHRoZSBkZWZhdWx0IGFyclxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC50aXRsZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LmlkID09IFwidG9kYXlcIil7Y29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC50aXRsZSl9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSBcInRoaXN3ZWVrXCIpe2NvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQudGl0bGUpfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7Y29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC50aXRsZSl9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbmZ1bmN0aW9uIHRvZG9zd2l0Y2hlcigpIHtcclxuICAgIGNvbnN0IHRvZG9kaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9jb250ZW50JylcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkdG9kb2lucHV0ZXZlbnRzKCkge1xyXG4gICAgXHJcbi8vIGFkZCBzZXBhcmF0ZSBldmVudHMgZm9yIGVhY2ggaW5wdXQgb3B0aW9uIVxyXG5cclxuICAgICAgICBcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gYWRkcyBldmVudCBsaXN0ZW5lciB0byBwbHVzIGJ1dHRvbiB0byBiZSBjYWxsZWQgd2hlbiBkb20gcmVuZGVyIHJ1bnNcclxuXHJcblxyXG4gICAgXHJcbiAgICAvLyBtYXN0ZXIgZnVuY3Rpb24gdG8gcnVuIGFsbCBmdW5jdGlvbnMgdGhhdCBhZGQgYnV0dG9uIGxvZ2ljIVxyXG4gICAgXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gYWRkQnV0dG9uTG9naWMoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcnVuIGxvZ2ljIGZvciBzd2l0Y2hpbmcgaW1hZ2Ugb24gcGx1cyBpY29uIG9uIGNsaWNrIFxyXG4gICAgcGx1c0J1dHRvbkltYWdlTG9naWMoKVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vbG9naWMgdG8gYWRkIGV2ZW50cyB0byBkZWZhdWx0IHByb2plY3QgYnV0dG9ucyBcclxuICAgIGRlZmF1bHRCdXR0b25Mb2dpYygpXHJcbiAgICBcclxuICAgIGN1c3RvbVByb2plY3RCdXR0b25Mb2dpYygpXHJcbiAgICAvL2xvZ2ljIHRvIGFkZCBldmVudHMgdG8gY3VzdG9tIHByb2plY3QgYnV0dG9ucyBcclxuICAgIGN1c3RvbUJ1dHRvbkxvZ2ljKClcclxuICAgXHJcbiAgICBcclxuICAgIC8vbG9naWMgdG8gYWRkIGV2ZW50cyB0byB0b2RvIGJ1dHRvbnMgXHJcbiAgICB0b2RvQnV0dG9uTG9naWMoKVxyXG4gICAgXHJcblxyXG4gICAgYWRkdG9kb2lucHV0ZXZlbnRzKClcclxuICAgIHN3aXRjaENyZWF0aW9uKClcclxuXHJcbiAgICBkZWxldGVQcm9qZWN0cygpXHJcbiAgICBcclxuICAgIGRlbGV0ZUJ1dHRvbkNvbG9ycygpIFxyXG4gICAgcHJvamVjdHN1Ym1pdGxvZ2ljKClcclxuICBcclxuICAgIGFkZEV2ZW50c3RvU3VibWl0SW5wdXRzKClcclxuICAgXHJcbiAgLy8gcGx1cyBidXR0b24gZnVuY3Rpb24gbG9naWNcclxuICBwbHVzYnV0dG9ubG9naWMoKVxyXG4gICAgICBcclxuLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHBsdXMgYnV0dG9uIG9uIHBhZ2VcclxuLy8gYWxzbyBjb250YWlucyBsb2dpYyB0byBhZGQgdG8gY2xvc2UgYnV0dG9uIG9uIG1vZGFsIG1vXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZWxvZ2ljKCkgeyAgICAgXHJcbiAgICAgICAgY29uc3QgY2xvc2VidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VidXR0b24nKVxyXG4gICAgLy8gYWRkIGFuIGV2ZW50IHRvIHJlZ2lzdGVyIHRoZSBjbG9zZSBidXR0b25cclxuICAgIC8vIHRoZSBjbG9zZSBidXR0b246XHJcbiAgICBjbG9zZWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgIHRvZ2dsZU1vZGFsKClcclxuXHJcbiAgICAgLy8gcmVzZXQgaXQgdG8gZGVmYXVsdCB0b2RvIGRpc3BsYXkgXHJcbiAgICAgY29uc29sZS5sb2coJ3RvdG8nKVxyXG4gICAgIHJlc2V0VG9kbygpXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAvLyByZXNldCBpbnB1dCBvZiB0b2RvIHNjcmVlbiBhbmQgYWxsIG90aGVyIGlucHV0cyFcclxuICAgICByZXNldElucHV0cygpIFxyXG5cclxuICAgXHJcbiAgICAgLy8gcnVuIHJvYXN0LCBjaGVjayBpZiB0aGUgb2JqZWN0IGRvZXMgbm90IGV4aXN0IGFnYWluXHJcbiAgICAgcm9hc3QoKVxyXG5cclxuXHJcblxyXG4gfSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsdXNidXR0b25sb2dpYygpIHtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBwbHVzYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXNidXR0b24nKVxyXG4gICAgY29uc3QgY2xvc2VidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VidXR0b24nKVxyXG4gICAgcGx1c2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG5cclxuLy8gcmVtb3ZlIGFueSBleHBhbmRlZCB0b2RvJ3NcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvY29udGVudCcpLmZvckVhY2goKGVsZW0pID0+IHtlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xhcmdlJyl9KVxyXG5cclxuXHJcbiAgICAgICAgLy8gd2hlbiB3ZSBjbGlrYyBwbHVzIHRvbyBhZGQgd2Ugd2FudCB0byBvcGVuIHRoZSBtb2RhbCB3aW5kb3cgZmlyc3RcclxuXHJcblxyXG4gICAgICAgIHRvZ2dsZU1vZGFsKClcclxuXHJcbiAgICBcclxuICAgICAgIC8vIHRoZSB3ZSB3YW50IHRvIGFkZCB0aGUgYXBwcm9wcmlhdGUgbGlzdGVuZXJzIHRvIHRoZSBmaWVsZHMhXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAvL3RvZG9maWVsZHM6XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBcclxuICAgICAgICAvL2FkZCBldmVudCB0byB0aGUgbWFpbiBzdWJtaXQgYnV0dG9uIVxyXG4gICAgICAgIHByb2plY3RzdWJtaXRsb2dpYygpXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgLy8gYWRkIGxvZ2ljIHRvIHRvZG8gc3VibWl0IGJ1dHRvblxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSIsIi8vIHVzZSB0aGlzIGZ1bmN0aW9uIHRvIHJlbmRlciBjdXN0b20gcHJvamVjdHMgYXJyYXkgdGhhdCBpcyBzZXJ2ZWQgZnJvbSBwcm9qZWN0IG1ha2VyXHJcbi8vIHdlIHdpbGwgdXBkYXRlIHRoZSBhcnJheSBmcm9tIHRoZSBwcm9qZWN0IG1ha2VycyBmdW5jdGlvbiB3aGVuIG5lZWRlZCB0aGVuIHJ1biB0aGUgcmVuZGVyXHJcblxyXG5pbXBvcnQgeyBkZWZhdWx0T3B0aW9ucyB9IGZyb20gJ2Fjb3JuJ1xyXG5pbXBvcnQgeyBkYSwgZWwgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnXHJcbmltcG9ydCB7aW5pdGlhbHByb2osIGluaXRpYWx0b2Rvc3VibWl0fSBmcm9tICcuL2J1dHRvbmxvZ2ljLmpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckN1c3RvbVByb2plY3RzKCkge1xyXG5cclxuIC8vIGNsZWFyIGN1c3RvbSBwcm9qZWN0IGRvbSBlbGVtZW50cyEgb3RoZXJ3aXNlIGl0IHdpbGwganVzdCBhZGQgdG8gdGhlbSFcclxuIC8vIGRpdiBjb250YWluZXIgY2xhc3MgaXMgY3VzdG9tcHJvamVjdHNcclxuIFxyXG4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbXByb2plY3RzJykuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuXHJcblxyXG4gXHJcblxyXG4vLyBpbXBvcnQgcHJvamVjdCBuYW1lcyBmcm9tIGFycmF5IGNyZWF0ZWQgaW4gcHJvamVjdCBtYWtlciBcclxuXHJcbiBcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4udGhlbigob2JqKSA9PiB7XHJcblxyXG4gICAgLy8gdGhpcyBjcmVhdGVzIGEgbmV3IGFycmF5IGJhc2VkIG9uIGN1cnJlbnQgY29udGVudHMgb2YgcHJvamVjdCBvYmplY3RcclxuICAgIC8vIHdoaWNoIHdlIGNhbiByZW5kZXIgZnJvbVxyXG5cclxuXHJcbiAgICBvYmouZ2V0UHJvamVjdHMoKVxyXG5cclxuICAgIC8vYXJyYXkgYmVsb3cgaXMgY3VycmVudCBuYW1lcyBvZiBjdXNvbSBwcm9qZWN0c1xyXG4gICAgXHJcbiAgICBjb25zdCBjdXN0b21wcm9qZWN0c2xpc3QgPSBvYmouY3VycmVudEN1c3RvbVByb2plY3RzXHJcblxyXG4gICAgLy8gbG9vcCB0aGlzIGFycmF5IFxyXG4gICAgY3VzdG9tcHJvamVjdHNsaXN0LmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgcHJvamVjdCBjb29udGFpbmVyIFxyXG5cclxuICAgICAgICBsZXQgcHJvamVjdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gYWRkIHN0eWxlIHRvIHByb2plY3QgY29udGFpbmVyXHJcblxyXG4gICAgICAgIHByb2plY3RkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdGJ1dHRvbnMnKVxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYnV0dG9ucyBmb3IgdGl0bGUgYW5kIGRsZWxldGUgb2JqZWN0c1xyXG5cclxuICAgICAgICBsZXQgcHJvamVjdGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21wcm9qZWN0dGl0bGUnKVxyXG4gICAgICAgIHByb2plY3RidXR0b24uZGF0YXNldC50aXRsZSA9IGVsZW1cclxuXHJcbiAgICAgICAgLy8gc2V0IHRpdGxlIHRvIHRoZSBhcHByb3ByaWF0ZSBjdXN0b20gcHJvamVjdFxyXG5cclxuICAgICAgICBwcm9qZWN0YnV0dG9uLnRleHRDb250ZW50ID0gZWxlbVxyXG4gXHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICBsZXQgZGVsZXRlcHJvamVjdGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgZGVsZXRlcHJvamVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVwcm9qZWN0YnV0dG9uJylcclxuICAgICAgICBkZWxldGVwcm9qZWN0YnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCJcclxuXHJcblxyXG4gICAgICAgIC8vIGFwcGVuZCB0aXRsZSBhbmQgY2xvc2UgdG8gcHJvamVjdCBkaXZcclxuICAgICAgICBwcm9qZWN0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlZCcpXHJcbiAgICAgICAgcHJvamVjdGRpdi5hcHBlbmRDaGlsZChwcm9qZWN0YnV0dG9uKVxyXG4gICAgICAgIHByb2plY3RkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlcHJvamVjdGJ1dHRvbilcclxuICBcclxuICBcclxuXHJcbiAgICAgICAgLy8gd2Ugd2FudCB0byBhcHBlbmQgdGhlc2UgdG8gdGhlIGRpdiB3aGljaCBob3VzZXMgY3VzdG9tIHByb2plY3RzXHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbXByb2plY3RzdmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21wcm9qZWN0cycpXHJcblxyXG4gICAgICAgIGN1c3RvbXByb2plY3Rzdmlldy5hcHBlbmRDaGlsZChwcm9qZWN0ZGl2KVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyB3ZSBuZWVkIGEgd2F5IHRvIGFzc29jaWF0ZSB0aGUgcHJvamVjdCB0aXRsZSBhbmQgdGhlIGNsb3NlIGJ1dHRvblxyXG4gICAgICAgIC8vIHdlIGNvdWxkIHVzZSBhIGRhdGEgYXR0cmlidXRlIHNldCB0byB0aGUga2V5IHNpbmNlIHRoaXMgd2lsbCBiZSB1bmlxdWVcclxuICAgICAgICAvLyBnaXZlIHRoZSBob3VzaW5nIGRpdiBhbmQgdGhlIGNsb3NlIGJ1dHRvbiB0aGUgc2FtZSBkYXRhIGF0dHJpYnV0ZVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBkZWxldGVwcm9qZWN0YnV0dG9uLmRhdGFzZXQudGl0bGUgPSBlbGVtXHJcbiAgICAgICAgcHJvamVjdGRpdi5kYXRhc2V0LnRpdGxlID0gZWxlbVxyXG5cclxuICAgICAgICAvLyBhcHBlbmQgdGhlIGZ1bmN0aW9uIHRvIGFkZCBidXR0b24gbG9naWMgdG8gdXBkYXRlZCBkb20gZWxlbWVudHNcclxuXHJcbiAgICAgICAgaW1wb3J0KCcuL2J1dHRvbmxvZ2ljLmpzJylcclxuICAgICAgICAudGhlbigob2JqKSA9PiBcclxuICAgICAgICBvYmouZGVsZXRlUHJvamVjdHMoKSlcclxuXHJcblxyXG4gICAgICAgIC8vIFxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIGltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbiAgICAudGhlbigobykgPT4ge1xyXG4gICAgICBcclxuICAgICAgICBvLmFkZEJ1dHRvbkxvZ2ljKCk7XHJcbiAgICB9KVxyXG5cclxufSlcclxuXHJcbnNlbGVjdENob2ljZUNyZWF0aW9uKClcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0byBwb3B1bGF0ZSBkaXNwbGF5IG9mIHByb2plY3RzIGluIHRvZG8gY3JlYXRpb24gYmFzZWQgb24gY3VycmVudCBwcm9qZWN0c1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0Q2hvaWNlQ3JlYXRpb24oKSB7XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gIFxyXG4gICAgLy8gcmVtb3ZlIGFsbCBjb250ZW50IHRvIHN0YXJ0XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3B0aW9ucycpLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbi8vIGFkZCB0aGUgQWxsIHByb2plY3RzIG9wdGlvbiFcclxuXHJcblxyXG5sZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcclxuXHJcbm9wdGlvbi50ZXh0Q29udGVudCA9ICdBbGwnXHJcbm9wdGlvbi52YWx1ZSA9ICdBbGwnXHJcbm9wdGlvbi5kYXRhc2V0LnR5cGUgPSAnb3B0aW9uJ1xyXG5vcHRpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdHNlbGVjdCcpXHJcblxyXG4gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3B0aW9ucycpLmFwcGVuZENoaWxkKG9wdGlvbilcclxuXHJcblxyXG4vLyBnZXQgdGhlIG5hbWVzIG9mIHRoZSBjdXN0b20gcHJvamVjdHMgYW5kIGNyZWF0ZSBlbGVtZW50c1xyXG5cclxub2JqLmN1cnJlbnRDdXN0b21Qcm9qZWN0cy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblxyXG5cclxuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG4gICAgb3B0aW9uLnR5cGU9ZWxlbVxyXG4gICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGVsZW1cclxuICAgICBvcHRpb24udmFsdWUgPSBlbGVtXHJcbiAgICAgb3B0aW9uLmRhdGFzZXQudHlwZSA9ICdvcHRpb24nXHJcbiAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzZWxlY3QnKVxyXG4gICAgIFxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3B0aW9ucycpLmFwcGVuZENoaWxkKG9wdGlvbilcclxuXHJcbn0pXHJcblxyXG5cclxuXHJcbiAgIFxyXG5cclxuXHJcblxyXG5cclxufSl9XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gZW5zdXJlIGRhdGUgaW5wdXQgaXMgdG9kYXlzIGRhdGUgb3IgaGlnaGVyXHJcblxyXG5mdW5jdGlvbiBpbnB1dERhdGUoKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJylcclxuICAgIGltcG9ydCgnZGF0ZS1mbnMnKVxyXG4gICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlID0gby5mb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRlKVxyXG4gICAgICAgXHJcbiAgICAgICAgaW5wdXQubWluICA9IGRhdGU7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBkYXRlXHJcbiAgICAgICBjb25zb2xlLmxvZygnSU5QVVRWQUwnLCBpbnB1dC52YWx1ZSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuLy9tYXN0ZXIgZnVuY3Rpb24gdG8gcmVuZGVyIGFsbCBjb21wb25lbnRzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCl7XHJcbiAgICByZWRQcm9qZWN0KClcclxuICAgIGlucHV0RGF0ZSgpXHJcblxyXG4gXHJcbmltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbi50aGVuKChvKSA9PiB7XHJcblxyXG4gICAgcmVuZGVyQ3VzdG9tUHJvamVjdHMoKVxyXG4gICAgaW5pdGlhbFJlbmRlclRvZG8oKVxyXG4gICAgby5tb2RhbExvZ2ljKClcclxuICAgIG8uYWRkQnV0dG9uTG9naWMoKVxyXG5cclxuXHJcbn0pXHJcblxyXG5pbml0aWFscHJvaigpXHJcbmluaXRpYWx0b2Rvc3VibWl0KClcclxufVxyXG5cclxuXHJcbi8vIHBvcHVsYXRlIG1haW4gZGlzcGxheSBsaWtlIHRvZG8gYXJlYSBiYXNlZCBvbiBzZWxlY3RlZCBwcm9qZWN0IVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZURpc3BsYXkocHJvamVjdG9iamVjdCApIHtcclxubGV0IHByb2plY3QgPSBcIlwiXHJcbmxldCBwcm9qZWN0c2V0ID0gXCJcIlxyXG5cclxuY29uc3QgdG9kb2FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NlY3Rpb24nKVxyXG5jb25zb2xlLmxvZyhwcm9qZWN0b2JqZWN0LCAncFtyb3ZvYmonKVxyXG5cclxuXHJcblxyXG4vLyBzZXQgdGhlIGRpc3BsYXkgdG8gYmUgYmxhbmshXHJcblxyXG50b2RvYXJlYS5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG5pZiAocHJvamVjdG9iamVjdCA9PSBcIkFsbFwiIHx8IHByb2plY3RvYmplY3QgPT0gXCJhbGxcIikge3Byb2plY3RzZXQgPSBcImRlZmF1bHRwcm9qZWN0c1wifVxyXG5cclxuZWxzZSBpZiAocHJvamVjdG9iamVjdCA9PSBcInRvZGF5XCIpIHtwcm9qZWN0c2V0ID0gXCJkZWZhdWx0cHJvamVjdHNcIn1cclxuXHJcbmVsc2UgaWYgKHByb2plY3RvYmplY3QgPT0gXCJ0aGlzd2Vla1wiKSB7cHJvamVjdHNldCA9IFwiZGVmYXVsdHByb2plY3RzXCJ9XHJcblxyXG5lbHNlIHtwcm9qZWN0c2V0ID0gJ3Byb2plY3RzJ31cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiBcclxuICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RzZXQnLCBwcm9qZWN0c2V0LCBwcm9qZWN0b2JqZWN0LCAncHJvam9iamVjdCcsIG9bcHJvamVjdHNldF0sICdwcm9qZWN0c2V0Jywgb1twcm9qZWN0c2V0XVtwcm9qZWN0b2JqZWN0XSwgJ2FjdHVhbCB0b2RvJylcclxuICAgICAgICBmb3IgKGxldCBwcm9wIG9mIG9bcHJvamVjdHNldF1bcHJvamVjdG9iamVjdF0pIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHByb2plY3Qgc2V0IGRldGVybWluZXMgZGVmYXVsdCBvciBjdXN0b20gcHJvamVjdHNcclxuICAgICAgICAgICAgLy8gcHJvamVjdG9iamVjdCBkZXRlcm1pbmVzIHNwZWNpZmljIHByb2plY3QsIHdoaWNoIHRoZW4gcmV0dXJuc1xyXG4gICAgICAgICAgICAvLyBhbmQgYXJyYXkgb2Ygb2JqZWN0cywgd2hpY2ggd2Ugd291bGQgbmVlZCB0byBzb3J0IHRocm91Z2ggYW5kIHB1bGwgc3BlY2lmaWMgcHJvcGVydGllcyFcclxuICAgICAgICAgICAgLy8gdGhpcyBpcyBhIGZvciBvZiBsb29wIHdoaWNoIHNvcnRzIG92ZXIgdGhlIGFycmF5IGNhbGxlZCBieSBvW3Byb2plY3RzZXRdW3Byb2plY3RvYmplY3RdXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvW3Byb2plY3RzZXRdW3Byb2plY3RvYmplY3RdLCAncHJvcHAnLCBwcm9wKVxyXG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b21wcm9qZWN0dGl0bGUnKS5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW0sICdDVVNUT00gUFJQSkUgS0lUJylcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBoaWdobGlnaHQgc3BlY2lmaWMgcHJvamVjdFxyXG4gICAgICAgICAgICAvLyBwcm9qZWN0b2JqZWN0IGlzIHRoZSBwcm9qZWN0IHdpdGhpbiBwcm9qZWN0c2V0XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNlZSgpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJ1biB0aGUgaGlnaGxpZ2h0IGZ1bmN0aW9uIHdpdGggdGhlIHByb2plY3QgZGl2IGVxdWFsIHRvIGV2ZW50XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFByb2plY3QoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB3ZSBjYW4gcHVsbCBvdXQgdGhlIHJlbGV2ZW50IGRldGFpbHMgdmlhIHByb3AudGl0bGUsIHByb3AuZHVlZGF0ZSwgZXR4XHJcbiAgICAgICAgICAgIC8vIGFuZCB0aGVuIGF0dGFjaCB0aGVtIG9udG8gb3VyIHNjcmVlbiB2aWEgdGhpcyBsb29wLCBjbGVhciB0aGUgc2NyZWVuIGNvbnRlbnQgZmlyc3QgYXMgYWx3YXlzIVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICBvW3Byb2plY3RzZXRdW3Byb2plY3RvYmplY3RdLmZvckVhY2goKGVsZW0pID0+IHtcclxuXHJcbiAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHByb3AudGl0bGVcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICB9KVxyXG5cclxuXHJcbiAgICAgIC8vLyBjcmVhdGUgb3VyIGluZGl2aWR1YWwgdG9kbyBpdGVtcyBiZWxvdyEhIFxyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgZGl2IHRvIGhvdXNlIHRoZSBjb250ZW50IHNldCB0aGUgc3R5bGVzXHJcblxyXG4gICAgICAgICAgICBsZXQgdG9kb2NvbnRlbnRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RvZG90aXRsZWxpbmUnKVxyXG4gICAgICAgICAgICB0b2RvY29udGVudGRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvY29udGVudCcpXHJcblxyXG4vLyBjcmVhdGUgYSBtYWluIGRpdiBlbGVtZW50IHRvIHJpdmFsIHRoZSBidXR0b24gZWxlbWVudHNcclxuXHJcblxyXG4gICAgICAgICAgbGV0IHRpdGxlc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICB0b2RvY29udGVudGRpdi5hcHBlbmRDaGlsZCh0aXRsZXNlY3Rpb24pXHJcbiAgICAgICAgICB0aXRsZXNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGl0bGVzZWN0aW9uJylcclxuXHJcbiAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvcC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvdGl0bGVsaW5lJylcclxuXHJcbi8vIHNpbmNlIHdlIGFyZSBsb29waW5nIHRocm91Z2ggYW4gYXJyYXkgb2Ygb2JqZWN0cywgc2V0IHRoZSB0aXRsZSB0byBcclxuLy8gdGhlIGtleSwgdGhpcyB3aWxsIGFsbG93IHVzIHRvIGFjY2VzcyB0aGUgYXJyYXkgaGVyZSBhbmQgd2UgY2FuIGxvb3AgdGhyb3VnaCBpdCBhbmQgZGlzcGxheSB0aGUgY29udGVudHNcclxuICAgICAgICAgIFxyXG5cclxudGl0bGVzZWN0aW9uLmFwcGVuZENoaWxkKHRleHQpXHJcblxyXG4gICAgICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndG9kb3RpdGxlcycpXHJcblxyXG4gICAgICAgICAgIC8vIGZvciBlYWNoIHRvZG8gY29udGVudCB3ZSBtYWtlLCBtYWtlIGl0IHVuaXF1ZSBzbyBpdCBjYW4gaGF2ZSB1bmlxdWUgZXZlbnRzIChsaWtlIGJlaW5nIHJlbW92ZWQhKVxyXG5cclxuICAgICAgICAgICAgdG9kb2FyZWEuYXBwZW5kQ2hpbGQodG9kb2NvbnRlbnRkaXYpXHJcbiAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LmRhdGFzZXQucHJvamVjdCA9IHByb3AudGl0bGVcclxuICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYuZGF0YXNldC5wcm9qZWN0c2V0PSBwcm9wLnByb2plY3RcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGJ1dHRvbiBjb250YWluZXIhIHRvIGdvIGJlc2lkZSB0b2Rvc2VjdGlvblxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgYnV0dG9uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbmNvbnRhaW5lcicpXHJcblxyXG5cclxuXHJcbi8vIGNyZWF0ZSBwcmlvcml0eSBidXR0b24hXHJcblxyXG4gICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvYnV0dG9uJylcclxuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJkZWxcIlxyXG4gICAgICAgICAgICBidXR0b25jb250YWluZXJcclxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGJ1dHRvbilcclxuICAgICAgICAgICB9XHJcbi8vIENyZWF0ZSBhIGNvbXBsZXRlZCBidXR0b25cclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3RvZG9jaGVja2JveCcpXHJcbiAgICAgICAgICAgICAgICAgICBidXR0b25jb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5hcHBlbmRDaGlsZChidXR0b25jb250YWluZXIpXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gY3JlYXRlIGRlbGV0ZWQgYnV0dG9uIHdpdGhpbiB0b2RvIGVsZW1lbnRzXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvYnV0dG9uJylcclxuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIlxyXG4gICAgICAgICAgICBidXR0b25jb250YWluZXJcclxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGJ1dHRvbilcclxuICAgICAgICAgICB9XHJcblxyXG4gICBcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9wdXBUb2RvKClcclxuICAgIH0pXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGNvbG9yIGJhY2sgb2Ygc2VsZWN0ZWQgcHJvamVjdCByZWQhXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkUHJvamVjdCgpIHtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWQnKVxyXG4gICAgc2VsZWN0ZWQuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoKCdjbGljaycpLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUsJ2FzZGtsamFzZGtsamFzbGRqYWxza2Rqa2wzMicpXHJcblxyXG4gICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gZHJhdyB0aGUgdG9kbyBkaXNwbGF5IVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxSZW5kZXJUb2RvKCkge1xyXG4gICAgXHJcbiAgXHJcbiAgICAvLyBnZXQgdGhlIHRvZG8gYXJlYSBhbmQgc2V0IGl0IGVxdWFsIHRvIHRoZSBhbGwgYXJyYXkgaW4gZGVmYXVsdHByb2plY3RzXHJcbiAgICAvLyBzdGFydCBieSBjbGVhcmluZyB0aGUgYXJlYVxyXG4gICBcclxuICAgIHBvcHVsYXRlRGlzcGxheSgnYWxsJylcclxuICAgXHJcbiAgICAvLyBsb29wIHRoZSBhcnJheSBhbmQgZHJhdyBkb20gZWxlbWVudHMgZm9yIGVhY2ggb25lIVxyXG5cclxuXHJcbiAgICBcclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gcG9wdXAgdG9kbyBkaXNwbGF5IVxyXG4vLyBjaGFuZ2VzIGNvbG9yIHdoZW4gbW91c2luZyBvdmVyIHRoZW0gYW5kIHJlbW92ZXMgaXQgd2hlbiBtb3VzaW5nIG91dFxyXG4vLyBsZXRzIHRoZW0gcG9wLXVwIHdoZW4gY2xpY2tlZCFcclxuXHJcbmZ1bmN0aW9uIHBvcHVwVG9kbygpIHtcclxuXHJcbmNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9jb250ZW50JylcclxuXHJcbnRvZG9zLmZvckVhY2goKGVsZW0pID0+IHtcclxuXHJcbiAgICAvLyBhZGQgYSBjbGljayBldmVudCB0byBlYWNoIHRvZG8gZGlzcGxheVxyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gd2hlbiBjbGlja2VkLCBhZGQgdGhlIGxhcmdlIGNsYXNzIHRoYXQgZXhwYW5kcyBpdCEgXHJcbi8vIGJ1dCByZW1vdmUgaXQgZnJvbSBhbnkgb3RoZXIgb25lcyFcclxuLy8gbG9vcCB0aGUgb3RoZXIgb25lcyBhbmQgcmVtb3ZlIGl0IUBcclxuXHJcbnRvZG9zLmZvckVhY2goKGVsZW0pID0+IHtcclxuY29uc29sZS5sb2coZWxlbSwgJ05PVCBUSElTIEVMRU0nKVxyXG4gICAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdsYXJnZScpKSBcclxuICAgIHtlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xhcmdlJyl9XHJcbn0pIFxyXG4gICAgXHJcblxyXG5cclxuLy8gYXBwbHkgdGhlIGxhcmdlIHRhZyFcclxuXHJcbmUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2xhcmdlJylcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICh6KSA9PiB7XHJcbmlmICh6LnRhcmdldCAhPSBlLnRhcmdldCkge1xyXG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdsYXJnZScpXHJcbn1cclxuXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcblxyXG5cclxuXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG59KVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gcmVkIHByb2plY3QgdGl0bGVzISIsImltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tICcuL3RvZG9tb2R1bGUnXHJcbmltcG9ydCB7IHByb2plY3RzLCBkZWZhdWx0cHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RtYWtlci5qcydcclxuY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlZCcpLmNoZWNrZWRcclxuXHJcblxyXG4vLyBsb2dpYyB0byBkZXRlcm1pbmUgcHJpb3JpdHlcclxuLy8gc2VyaWVzIG9mIHJhZGlvIGJ1dHRvbnMgbG9vcCB0aHJvdWdoIHRoZW1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtQ29udHJvbGxlcih0aXRsZSxkZXNjcmlwdGlvbixkdWVkYXRlLHByaW9yaXR5LHByb2plY3QsY29tcGxldGVkKSB7XHJcblxyXG5cclxuXHJcbi8vIGNyZWF0ZSBhIHRvZG8gb2JqZWN0IGZyb20gdGhlIHNwZWNpZmllZCBpbnB1dHMhXHJcblxyXG4gXHJcblxyXG4gICAgICAgICAgIC8vIGFkZCBpdCB0byB0aGUgc3BlY2lmaWMgcHJvamVjdC4uICBhbGwgYnkgZGVmYXVsdCBvciBzZWxlY3RlZC4uXHJcblxyXG5cclxuICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LCAnUFJPSkVDVENIT0lDRScpXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgIGlmIChwcm9qZWN0ID09IFwiYWxsXCIgfHwgcHJvamVjdCA9PSBcIkFsbFwiKSB7XHJcbiAgICAgICAgICAgIC8vIHRoZSBzcGVjaWZpYyBvYmplY3Qga2V5IGhvdXNlcyBhbiBhcnJheSwgc28gcHVzaCBvbnRvIHRoYXQgYXJyYXkhXHJcbiAgICAgICAgICAgIGRlZmF1bHRwcm9qZWN0cy5hbGwucHVzaChjcmVhdGVUb2RvKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZWRhdGUscHJpb3JpdHkscHJvamVjdCxjb21wbGV0ZWQpKSBcclxuXHJcblxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBlbHNlIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBidXQgZXZlbiB3aGVuIGFkZGluZyB0byBjdXN0b20gcHJvamVjdHMsIHdlIGFyZSBhbHdheXMgYWRkaW5nIHRvIEFsbCEhXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0cHJvamVjdHMuYWxsLnB1c2goY3JlYXRlVG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVkYXRlLHByaW9yaXR5LHByb2plY3QsY29tcGxldGVkKSkgXHJcblxyXG4gICAgICAgICAgICAvLyBhbmQgdGhlIGN1c3RvbSBwcm9qZWN0IGl0c2VsZlxyXG4gICAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0XS5wdXNoKGNyZWF0ZVRvZG8odGl0bGUsZGVzY3JpcHRpb24sZHVlZGF0ZSxwcmlvcml0eSxwcm9qZWN0LGNvbXBsZXRlZCkpIFxyXG5cclxuICAgICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvLyBhcHBlbmQgdGhlIHRvZG8gdG8gdGhlIGFwcHJvcHJpYXRlIHByb2plY3QhXHJcbi8vIGl0IGlzIGVpdGhlciB0byBBbGwgcHJvamVjdHMsIG9yIGEgc3BlY2lmaWMgb25lXHJcbi8vIGZvciBhbGwgYmVsb3ciLCIvLyBwcm9qZWN0cyB3aWxsIG5lZWQgdG8gYmUgY2FwYWJsZSBvZiBzdG9yaW5nIHdoaWNoIHRvZG8ncyBiZWxvbmcgdG8gdGhlbVxyXG4vLyBpdCBsb29rcyBjbGVhbmVyIHRvIHN0b3JlIGFzIGFuIG9iamVjdCBvZiBwcm9qZWN0IG5hbWVzIGFuZCBoYXZlIHRoZSB2YWx1ZXMgZXF1YWwgdG9cclxuLy8gYXJyYXlzIHRoYXQgY29udGFpbiB0aGUgcmVsZXZlbnQgdG9kbyBvYmplY3RzIFxyXG5cclxuLy8gd2UgY2FuIGNvbWUgdXAgd2l0aCBhIG1hc3RlciBwcm9qZWN0cyBvYmplY3QsIGlmIGluIHRoZSBVSSB3ZSB3b3VsZCBsaWtlIHRvIHNlcGFyYXRlIHRoZSBkaXNwbGF5XHJcbi8vIGl0IGlzIGVhc2llciB0byBoYXZlIGEgc2VwYXJhdGUgZGVmYXVsdCBwcm9qZWN0IG9iamVjdCBhcyB3ZSBjYW4ganVzdCBsb29wIG92ZXIgaXQgXHJcbi8vIHRvIHBvcHVsYXRlIHRoZSBkaXNwbGF5IGFuZCBub3QgaGF2ZSB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gZGVmYXVsdCB2cyBub25cclxuXHJcbi8vIGFsbCBrZXkgd2lsbCBob3VzZSBhcnJheSB0aGF0IHBhcnNlcyBhbGwgYXZhaWxhYmxlIHByb2plY3Qgb2JqZWN0cyBhbmQgbGlzdHMgdGhlbVxyXG4vLyB0aGUgdG9kYXkgYW5kIHRoaXN3ZWVrIGFycmF5IHdpbGwgaGF2ZSB0byBkbyB3aXRoIHNvcnRpbmcgXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRwcm9qZWN0cyA9IHtcclxuICAgIGFsbDogW10sXHJcbiAgICB0b2RheTogW10sXHJcbiAgICB0aGlzd2VlazogW10sXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSB7XHJcbiAgIFxyXG59XHJcblxyXG4vLyBhZGQgdGhlIGFwcHJvcHJpYXRlIHRvZG8ncyB0byB0aGVzZSBwcm9qZWN0cyBiYXNlZCBvbiB0aGUgYXBwcm9wcmlhdGUgZGF0ZXMgKGRhdGVmbiEpXHJcblxyXG5cclxuXHJcbi8vIG5vdyB3ZSBkZXZlbG9wIGEgd2F5IHRvIGFkZCBjdXN0b20gcHJvamVjdHMgdG8gdGhpcyBvYmplY3QhXHJcbi8vIGlmIHZpc3VhbGx5IHdlIHdhbnQgdG8gc2hvdyBhIGN1ZSB0aGF0IHRoaXMgaXMgYW4gb3B0aW9uIHdlIGNhbiBkbyB0aGlzIHdpdGggdGhlIFVJIG9yIG5vdCBpbiB0aGlzIGZ1bmN0aW9uXHJcbi8vIHJ1bm5pbmcgYWRkIHByb2plY3Qgc2hvdWxkIGFkZCBhIHByb1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3RuYW1lKSB7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gaWYgd2UgdHJ5IHRvIGFkZCBhIHByb2plY3QgbmFtZSB0aGF0IGFscmVhZHkgZXhpc3RzLCB3ZSBjYW4gcmV0dXJuIGEgY29uZmlybWF0aW9uIFxyXG5pZiAocHJvamVjdG5hbWUgPT0gXCJcIikge3JldHVybn1cclxuXHJcblxyXG5pZiAocHJvamVjdHMuaGFzT3duUHJvcGVydHkocHJvamVjdG5hbWUpKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbG9ncyB0aGF0IHByb3BlcnR5IGV4aXN0cyB3aXRoaW4gcHJvamVjdG1ha2VyLmpzJylcclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICAgIC8vIGNhbGwgZG9tIGZ1bmN0aW9uIHRvIHR1cm4gZmllbGQgcmVkIGFuZCBjaGFuZ2UgcGxhY2Vob2xkZXIgdG8gZXhpc3RzIVxyXG5cclxuXHJcbn1cclxuXHJcbiAgICAvLyBlbHNlIHdlIGFkZCB0aGUgcHJvamVjdCBuYW1lIGFzIGEga2V5IHRvIHByb2plY3Qgb2JqZWN0XHJcbiAgICAvLyBldmVudHVhbGx5IHdlIHdpbGwgYXBwZW5kIHRvZG8ncyB0byB0aGVzZSBjYXRlZ29yaWVzIGJhc2VkIG9uIHNvbWUgY3JpdGVyaWEgXHJcblxyXG5wcm9qZWN0c1twcm9qZWN0bmFtZV0gPSBbXVxyXG5sZXQgcmVzdWx0ID0gcHJvamVjdG5hbWVcclxuXHJcbnByb2plY3RzW3Byb2plY3RuYW1lXS5wdXNoKHt0aXRsZTpyZXN1bHR9KVxyXG5wcm9qZWN0c1twcm9qZWN0bmFtZV0ucHVzaCh7dGl0bGU6cmVzdWx0fSlcclxuY29uc29sZS5sb2cocHJvamVjdHMsICdjdXJyZW50IHByb2plY3RzIG9iamVjdCcpO1xyXG5pbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4udGhlbihvID0+IHtcclxuICAgby5yZWRQcm9qZWN0KClcclxufSlcclxuXHJcblxyXG5cclxuXHJcbnJldHVybjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gd2Ugd2FudCB0byBkZWxldGUgdGhleSBrZXkgb2YgdGhlIHByb2plY3RcclxuLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBwcm9qZWN0LCB3ZSBuZWVkIGEgd2F5IHRvIGRldGVybWluZSB3aGljaCBwb3NpdGlvblxyXG4vLyBpbiB0aGUgYXJyYXkgdGhlIHByb2plY3QgaXMgdG8gcmVtb3ZlXHJcbi8vc3VwcGx5IHRoaXMgYW4gaW5kZXggYXMgdGhpcyB3aWxsIGJlIHZpc3VhbCBiYXNlZFxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcclxuXHJcbiAgICAgICAgZGVsZXRlIHByb2plY3RzW3Byb2plY3RdXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbn1cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gYmVsb3cgcmVwb3J0cyBuYW1lIG9mIHByb2plY3RzIGN1cnJlbnRseSBpbiBsaXN0IGFuZCBhcHBlbmQgdG8gYW4gYXJyYXlcclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudEN1c3RvbVByb2plY3RzID0gW11cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xyXG4gICAgY3VycmVudEN1c3RvbVByb2plY3RzID0gW11cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IHByb2plY3QgaW4gcHJvamVjdHMpIHtcclxuICAgICAgICAgICAgY3VycmVudEN1c3RvbVByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICB9IiwiLy8gZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdG9kbyBvYmplY3RzXHJcblxyXG5cclxubGV0IHRvZG9jYXRjaDEgPSBbXVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCAgcHJvamVjdCwgY29tcGxldGVkID0gZmFsc2UpIFxyXG57ICAgXHJcblxyXG4gICAgbGV0IG9iaiA9IHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCAgcHJvamVjdCwgY29tcGxldGVkfVxyXG4gICAgXHJcbiAgICB0b2RvY2F0Y2gxLnB1c2gob2JqKVxyXG4gICAgY29uc29sZS5sb2codG9kb2NhdGNoMSwgJ3RvZG9jYXRjaCcpXHJcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksICBwcm9qZWN0LCBjb21wbGV0ZWR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gc2V0IGNvbXBsZXRlIG9mIHRvZG8gb2JqZWN0IHRvIHRydWUgdGFrZXMgYSB0b2RvIG9iamVjdCBhcyBhbiBhcmd1bWVudFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXBsZXRlKG9iaikge1xyXG4gICAgXHJcbiAgICBpZiAob2JqLmNvbXBsZXRlZCkge1xyXG4gICAgXHJcbiAgICAgICAgb2JqLmNvbXBsZXRlZCA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBvYmouY29tcGxldGVkID0gdHJ1ZVxyXG4gICAgcmV0dXJuXHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgcHJpb3JpdHkgYmV0d2VlbiBsb3cgbWVkaXVtIGFuZCBoaWdoIHRha2VzIGEgdG9kbyBvYmplY3QgYXMgYXJndW1lbnQgYW5kIGEgc2VsZWN0aW9uXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkob2JqLCBwcmlvcml0eSkge1xyXG4gICAgb2JqLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgIHJldHVyblxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==