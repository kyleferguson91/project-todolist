"use strict";
(self["webpackChunkproject_todolist"] = self["webpackChunkproject_todolist"] || []).push([["src_buttonlogic_js-src_domLogic_js"],{

/***/ "./src/buttonlogic.js":
/*!****************************!*\
  !*** ./src/buttonlogic.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addButtonLogic": () => (/* binding */ addButtonLogic),
/* harmony export */   "currentselectedproject": () => (/* binding */ currentselectedproject),
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
/* harmony import */ var _src_images_plus_circle_svgrepo_com_6_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/plus-circle-svgrepo-com(6).svg */ "./src/images/plus-circle-svgrepo-com(6).svg");
/* harmony import */ var _src_images_plus_circle_svgrepo_com_7_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/images/plus-circle-svgrepo-com(7).svg */ "./src/images/plus-circle-svgrepo-com(7).svg");
/* harmony import */ var _src_images_plus_circle_svgrepo_com_8_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/plus-circle-svgrepo-com(8).svg */ "./src/images/plus-circle-svgrepo-com(8).svg");
/* harmony import */ var _domLogic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domLogic.js */ "./src/domLogic.js");








// reset input function
let currentselectedproject = ""
function resetInputs() {
    const input = document.querySelectorAll('input').forEach((elem,ind,arr) => {
        elem.value = ""
        elem.checked = false
        if (elem.type == "date") {
            __webpack_require__.e(/*! import() */ "vendors-node_modules_date-fns_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! date-fns */ "./node_modules/date-fns/esm/index.js"))
            .then(
                (date) => {
                    elem.value = ""
                    
                    elem.value = date.format(new Date(), 'yyyy-MM-dd')
                }
            )
            
        }
    })
    document.querySelector('#completed').checked=""
}


//toggle modal function

function toggleModal() {

    const modalwindow = document.querySelector('.modal-content')

modalwindow.classList.toggle('show-modal')

document.querySelector('.modal').classList.toggle('modalback')
document.querySelector('.modal').classList.toggle('bighide')


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
        
                   
                   
                    
                    ;(0,_domLogic_js__WEBPACK_IMPORTED_MODULE_4__.populateDisplay)(target)
              
               
                })
                
            })
        })
        
        }
    
    
        // function below adds click events to todo buttons
    
    function todoButtonLogic() {
    
    
        const buttons = document.querySelectorAll('.todobutton')
        buttons.forEach((elem,ind,arr) => {
            elem.addEventListener('click', (e) => {

                e.stopImmediatePropagation()
                // when we click delete, call the delete todo function on the specific todo!
                console.log(e.target.parentNode.parentNode)
                console.log(`delete the todo at index ${e.target.parentNode.parentNode.dataset.index} of custom
                project ${e.target.parentNode.parentNode.dataset.project}`)
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./todomodule.js */ "./src/todomodule.js"))
                .then((o) => {
                 
                    o.deleteTodo(e.target.parentNode.parentNode.dataset.projectset, e.target.parentNode.parentNode.dataset.index)

                    // after delete todo, lets populate the display!
                 Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./domLogic.js */ "./src/domLogic.js"))
                 .then((dom) => {
                    dom.populateDisplay('all')
                 })
                })
              
            })
        })
        
        }
    
    
    
    
    // plus switch image logic on hover and click
    
     function plusButtonImageLogic() {
        const image = document.querySelector('#plusbutton')
        image.addEventListener('mouseover', (e) => {

            // 
           
        
        e.target.src = _src_images_plus_circle_svgrepo_com_7_svg__WEBPACK_IMPORTED_MODULE_2__
     
  
        
        })
        image.addEventListener('mouseout', (e) => {
        
        
            e.target.src = _src_images_plus_circle_svgrepo_com_6_svg__WEBPACK_IMPORTED_MODULE_1__
            
            })
        
            image.addEventListener('mousedown', (e) => {
        
        
                e.target.src = _src_images_plus_circle_svgrepo_com_8_svg__WEBPACK_IMPORTED_MODULE_3__
                
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
                
               modalwindow.classList.remove('modalback');
               document.querySelector('.modal-content').classList.remove('show-modal')
               document.querySelector('.modal').classList.add('bighide')
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

var tododuedate = ""

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
   
     })

     submitcompleted.addEventListener('input', (e) => {
        todocompleted = e.target.checked

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


        if (todopriority == "") {todopriority = "priority-low"}

         // if inputs are good, run todo function
         (0,_formlogic_js__WEBPACK_IMPORTED_MODULE_0__.formController)(todotitle, tododescription, tododuedate, todopriority, todoproject, todocompleted)

       
// set completed back to false!
todocompleted = false

   // reset toduedate

   __webpack_require__.e(/*! import() */ "vendors-node_modules_date-fns_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! date-fns */ "./node_modules/date-fns/esm/index.js"))
   .then((date) => {
  tododuedate = date.format(new Date(), 'yyyy-MM-dd')
   })
           
   // remove the modal after creating our todo, and reset the inputs back to their defaults
   
           toggleModal()

         
        
   
   
   // we also want to ensure our inputs are truthy
   // only want to require title, description date and project and complete
   
   
           // render the dom after all this, which will update all elements
   
           Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./domLogic.js */ "./src/domLogic.js"))
           .then((o) => {
             
               // after dom is rendered, select the all projects title and make it red as it is now selected
               o.updateforhigh('all')
               // update current projects slection to all!
               currentselectedproject = 'all'
               o.populateDisplay('all')
           })
   
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./buttonlogic.js */ "./src/buttonlogic.js"))
        .then((obj) => {
            obj.addButtonLogic()
            obj.modalLogic()
            
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./domLogic.js */ "./src/domLogic.js"))
            .then((o) => {
            
                // after dom is rendered, select the project that we just submitted
                o.updateforhigh('all')
                
            })
        })
   
        // update the input to update display if todo belongs to different project
        
       })
       resetInputs()

// submit the input of completed back to not checked


      }



      // initial submit button project logic!
      function initialproj() {
    
const projtitle = document.querySelector('#projecttitle')
if (projtitle.value == "" || checkText(projtitle.value) ) {
    document.querySelector('.projectsubmit').disabled = true

}
      }

      function initialtodosubmit() {
        document.querySelectorAll('.red').forEach((elem) => {
            if (elem.classList.contains('redback')) {elem.classList.remove('redback')}
        })
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
    e.stopImmediatePropagation()
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
o.renderCustomProjects(projecttitlechoice)
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



}

// function below adds click events to default project buttons





function defaultButtonLogic() {


    const buttons = document.querySelectorAll('.defaultproject')
    buttons.forEach((elem,ind,arr) => {
        elem.addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
            .then((obj) => {

                    // set the value of default projects array to blank
                    // all will loop through custom projects and add,
                    // today and this week will filter from all!

                obj.defaultprojects.today = []
                obj.defaultprojects.all = []
                obj.defaultprojects.thisweek = []
            })
          
            ;(0,_domLogic_js__WEBPACK_IMPORTED_MODULE_4__.populateDisplay)(e.target.id)


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
         
        
            e.target.classList.toggle('redback')
            ;(0,_domLogic_js__WEBPACK_IMPORTED_MODULE_4__.populateDisplay)('today')
    
        }



        else if (e.target.id == "thisweek"){
            
            console.log(e.target.id)
            e.target.classList.add('redback')


            ;(0,_domLogic_js__WEBPACK_IMPORTED_MODULE_4__.populateDisplay)('thisweek')
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
        
               
              
                // depending on the value of e.target.id, we want to call that specific array
                // and feed it to a dom function that loops the array and populates the display!
                // all will be the default arr

      
                 
                    console.log(e.target.dataset.title)
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./domLogic.js */ "./src/domLogic.js"))
                .then((o) => {
                    o.removeRed()
                    e.target.classList.add('redback')
                    currentselectedproject = e.target.dataset.title
                    o.populateDisplay(currentselectedproject)
                   console.log(o.projects)
               
                })
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
  e.stopImmediatePropagation()
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
/* harmony import */ var _src_images_plus_square_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/images/plus-square-svgrepo-com.svg */ "./src/images/plus-square-svgrepo-com.svg");
/* harmony import */ var _src_images_minus_square_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/minus-square-svgrepo-com.svg */ "./src/images/minus-square-svgrepo-com.svg");
/* harmony import */ var _src_images_text_align_center_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/images/text-align-center-svgrepo-com.svg */ "./src/images/text-align-center-svgrepo-com.svg");
/* harmony import */ var _src_images_backgrounds_Hexagon_1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/backgrounds/Hexagon(1).svg */ "./src/images/backgrounds/Hexagon(1).svg");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _buttonlogic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttonlogic.js */ "./src/buttonlogic.js");
// use this function to render custom projects array that is served from project maker
// we will update the array from the project makers function when needed then run the render
















function renderCustomProjects(value) {

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
Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./domLogic.js */ "./src/domLogic.js"))
.then((o) => {
  
    o.updateforhigh(value) 
})

}

function updateforhigh(value) {
  
    document.querySelectorAll('.red').forEach((elem) => {
    
 
       if (value == elem.dataset.title) {
    
        elem.classList.add('redback')
       }


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
    const input = document.querySelector('#duedate.dateinput')
    __webpack_require__.e(/*! import() */ "vendors-node_modules_date-fns_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! date-fns */ "./node_modules/date-fns/esm/index.js"))
    .then((o) => {
        const date = o.format(new Date(), 'yyyy-MM-dd')

       
       
        
       console.log('INPUTVAL', input.value);
    })
}


//master function to render all components

function render(){

    inputDate()

 
// set background image


document.body.style.backgroundImage =`url(${_src_images_backgrounds_Hexagon_1_svg__WEBPACK_IMPORTED_MODULE_3__})`

Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./buttonlogic.js */ "./src/buttonlogic.js"))
.then((o) => {

    renderCustomProjects()
    initialRenderTodo()
    o.modalLogic()
    o.addButtonLogic()





})

;(0,_buttonlogic_js__WEBPACK_IMPORTED_MODULE_4__.initialproj)()
;(0,_buttonlogic_js__WEBPACK_IMPORTED_MODULE_4__.initialtodosubmit)()


}


// populate main display like todo area based on selected project!


function populateDisplay(projectobject ) {

    // set todoheader image

    document.querySelector('.todoheaderimage').src = _src_images_text_align_center_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__

    // set background image

    document.body.style.backgroundImage =`url(${_src_images_backgrounds_Hexagon_1_svg__WEBPACK_IMPORTED_MODULE_3__})`



    // we are populating the dom, we can also switch the highlighted project!
    // this function populates the todolists

  

let project = ""
let projectset = ""

const todoarea = document.querySelector('.todosection')



// set the display to be blank!

todoarea.innerHTML = ""

if (projectobject == "All" || projectobject == "all") {projectset = "defaultprojects"
// ensure all is highlighted!!
document.querySelectorAll('.red').forEach((elem) => {
    elem.classList.remove('redback')
    if (elem.dataset.title == "all" ) {elem.classList.add('redback')}
})

}

else if (projectobject == "today") {projectset = "defaultprojects"}

else if (projectobject == "thisweek") {projectset = "defaultprojects"}

else {projectset = 'projects'}



// update all array based on all objects within custom projects!! before we render display!

    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
 
    .then((o) => {

    
   // all is based on custom projects, by iterating over them all
   // pre sort each project array before passing to all..
        // we need to loop over the project and at each key, call the sort function
        // and set that equal to the keys value..

        // loop over the projects object at project key array
        // set that array equal to the array sorted 
        // array sorted based on date..

 for (let prop in o.projects) {

    // skip if array length 0..

    if (o.projects[prop].length != 0) {
            // 
    o.projects[prop] = o.projects[prop].sort(compareFn)

    for (let i = 0; i < o.projects[prop].length; i++)
    {
        // update the array located at key on projects array
        // loop over each object in each array and assign it an index value within the object'
        // done after sorting as these will change!
        o.projects[prop][i].index = i
    }
    }

 }



 function compareFn(a, b) {
  // console.log(a.date,'a', b.date, 'b', a.date < b.date)
 
   // if first date is less than second date, order it last
   if (a.duedate < b.duedate) {
     return -1;
   }
   if (a.duedate > b.duedate) {
     return 1;
   }
   // a must be equal to b
   return 0;
 }



(function sortAll() {o.defaultprojects.all = []
    for (let prop in o.projects) {


        // the prop in o.projects is the key corresponding to the array of todo objects
        // we should loop over this array and append them to the default project
        // all array before rendering the dom
    
    
    
        o.projects[prop].forEach((elem) => {
    
            // so for every custom project todo object, we want to populate the all array!
            // after populating the array, we will sort it!
            o.defaultprojects.all.push(elem)

// but not we sort all again, we sorted each custom project array initially
// then we appended every object from every array onto the all array
// they are sorted by date but by array, so when all combined, the dates must be re sorted
// dates sorted below
            for (let index of o.defaultprojects.all) {
             o.defaultprojects.all = o.defaultprojects.all.sort(compareFn)
            }
            
      

 
// we are returning a new sorted array to then replace the all array with


            
    
        })
     
    }})();

// after updating all array, update today array and this week, based on sorting all array by date of each object
// we want o.defaultprojects.today equal to an array returning function that sorts objects based on a date key 
//that correspond with todays date

(function sortday() {
  
    // empty today array for sorting!
 
    o.defaultprojects.all.forEach((elem,ind,arr) => {
        
__webpack_require__.e(/*! import() */ "vendors-node_modules_date-fns_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! date-fns */ "./node_modules/date-fns/esm/index.js"))
.then(
    (date) => {

    // compare the date in the project to todays date
    let dateer = date.format(new Date(), 'yyyy-MM-dd')
    if (elem.duedate == dateer ) 
    {
 
        // elements with today's date, use them to populate the today array in default
        
        o.defaultprojects.today.push(elem)
    }
})
    })
    
}
)();

(function sortweek() {
    // empty today array for sorting!

    o.defaultprojects.all.forEach((elem,ind,arr) => {
__webpack_require__.e(/*! import() */ "vendors-node_modules_date-fns_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! date-fns */ "./node_modules/date-fns/esm/index.js")).then((date) => {
    // compare the date in the project to todays date
 if (date.parseISO(elem.duedate) <= date.addWeeks((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(date.format(new Date(), 'yyyy-MM-dd')), 1))
    {
        // elements with today's date, use them to populate the today array in default
        
        o.defaultprojects.thisweek.push(elem)
    }
})
    })
})();




        for (let prop of o[projectset][projectobject]) {
          
 
            // project set determines default or custom projects
            // projectobject determines specific project, which then returns
            // and array of objects, which we would need to sort through and pull specific properties!
            // this is a for of loop which sorts over the array called by o[projectset][projectobject]

          
        
            // loop through every key within cusom projects and add to All

   
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
const quickinfo = document.createElement('div')
quickinfo.classList.add('quickinfo')

          let titlesection = document.createElement('div')
          quickinfo.appendChild(titlesection)
          titlesection.classList.add('titlesection')

          let description = document.createElement('p')
          description.textContent = prop.description
          
          description.classList.add('todotitleline')

// since we are looping through an array of objects, set the title to 
// the key, this will allow us to access the array here and we can loop through it and display the contents
          

titlesection.appendChild(text)

           text.classList.add('todotitles')

           // for each todo content we make, make it unique so it can have unique events (like being removed!)
           // add the index as well, which we will dynamically update when we adjust the arrays!

            todoarea.appendChild(todocontentdiv)
            todocontentdiv.dataset.project = prop.title
            todocontentdiv.dataset.projectset= prop.project
            todocontentdiv.dataset.index = prop.index


            // create a button container! to go beside todosection

            const buttoncontainer = document.createElement('div')
            buttoncontainer.classList.add('buttoncontainer')

            // create an expand button
             
            {
          const expand = document.createElement('img')
          expand.src = _src_images_plus_square_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__
          expand.classList.add('expandbutton')
          buttoncontainer.appendChild(expand)

          // add an event to each expand button!
          
          expand.addEventListener('click', (e) => { 
            e.stopImmediatePropagation()

// create a todo content div that we will append and remove!


           const todoinfo = document.createElement('div')
           todoinfo.classList.add('todoinfo')

            // add a form element on the todo..

            const form = document.createElement('form')
            form.classList.add('todoform')


           // we need to create the content that will populate this todo
           // title, description, duedate, priority, completed?
           // and also make it possible to edit the vales by clicking in the fields!
           // we can already change completed and priority
           // so make it so that we can edit description, title and date
           // after we edit these things, refresh the display of that individual todo..
       
            // todoinputs
         
         for (let i = 0; i < 3; i++) {
            const labels = ['Title', 'Description', 'Duedate']
            // create a label for each input 
            const label = document.createElement('label')
            label.for = labels[i]
            label.textContent = labels[i]
            // create an input
            let input = document.createElement('input')
            input.type = 'text'
            input.name = 'title'
            input.id = 'title'
          
            if (labels[i] == 'Duedate') {
                input.type = "date"
                input.id = "date"
                input.name= 'date'
            }

            if (labels[i] == 'Description') {
                input = document.createElement('textarea')
                input.id = "description"
                input.name = 'description'
            }



       
          // append input onto label
  
            // append label housing input onto form..
            form.appendChild(label)
            form.appendChild(input)
         }

         // add a button to submit the form

         const submittodo = document.createElement('button')
         submittodo.textContent = 'Update Todo!'

         // for later manipulation, add a class to submit button
         submittodo.classList.add('submittodo')
         submittodo.type = 'submit'

         // append button to form
         form.appendChild(submittodo)
         form.method = 'get'

         const title = form.querySelector('#title')
         title.value = prop.title
         
         const date = form.querySelector('#date')
         date.value = prop.duedate

         const desc = form.querySelector('#description')
         desc.value = prop.description

         form.addEventListener('submit', (e) => {
            e.preventDefault()
            e.stopImmediatePropagation()

                // submit event on form container, log the values that it makes..

   
               Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
               .then ((o) => {

                // we need to update the relevant todo with the new information..
             
                const project = e.target.parentElement.parentElement.dataset.projectset
                const index = e.target.parentElement.parentElement.dataset.index

               // now update project at index at value
               // and also update the completed status if it has changed, as well as the priority..
               const completed = e.target.parentElement.parentElement.classList.contains('complete')
    
               var priority = e.target.parentElement.parentElement.querySelector('.quickinfo').querySelector('.buttoncontainer').querySelector('#prioritybutton')
               if (priority.classList.contains('prioritywrapperlow')) {
                priority = "priority-low"

               }
else  if (priority.classList.contains('prioritywrappermed')) {
    priority = "priority-med"

}
else  if (priority.classList.contains('prioritywrapperhigh')) {
    priority = "priority-high"

}

     
               // now that we have updated the relvant todo, lets re render this specific todo
               // leaving it expanded and everythign else alone

               // change the title content to updated title
                console.log( )
                e.target.parentElement.parentElement.querySelector('.todotitleline').textContent = title.value
              
                // change the description
                e.target.parentElement.parentElement.querySelector('#description').textContent = desc.value


             
                // change the date
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index.js */ "./src/index.js"))
                .then((o) => {
                    // determine if the date is today
                    
                    
             
                    // if it is today, change the text to Due Today!
                    if (date.value == o.date || date.textContent == o.date) {
                       
                        
                        e.target.parentElement.parentElement.querySelector('.datebutton').textContent = "DUE TODAY"
                    }
                    
                 else {   // if it is not today
                    // leave date value unchanged
                    // and update the divv with date value!
                    console.log('today', date.value, o.date)
                    e.target.parentElement.parentElement.querySelector('.datebutton').textContent = date.value}

                })
               
                
                
                // change the priority
                // will update automatically as it alters the object
                

                // change the completed status!
                
            
                // now update the custom project with the relevant changes..

                o.projects[project][index].title = title.value
                o.projects[project][index].description = desc.value
                o.projects[project][index].duedate = date.value
                o.projects[project][index].completed = completed
                o.projects[project][index].priority = priority
              
                console.log(o.projects[project][index])
          


               })

         })


         todoinfo.appendChild(form)
         // add submit button on form



                  // add a button to cancel submit

                  const cancelsubmit = document.createElement('button')
                  cancelsubmit.textContent = 'Cancel'
         
                  // for later manipulation, add a class to submit button
                  cancelsubmit.classList.add('cancelsubmit')
         
                  // append button to form
                  form.appendChild(cancelsubmit)

                       // when we click the cancel button
                  
                cancelsubmit.addEventListener('click', (e) => {
                    
                     // prevent default behavuour of submittiung the form
                    e.preventDefault()

                    // remove the large tag from the parent container
             
                    e.target.parentElement.parentElement.parentElement.classList.remove('large')

                    // switch the icon back to a plus!
                    console.log(e.target.parentElement.parentElement.parentElement.querySelector('img').src= _src_images_plus_square_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__)
                   
                   //and remove the added content that the plus added

                   const remove = e.target.parentElement.parentElement.parentElement.querySelector('.todoinfo')
                   e.target.parentElement.parentElement.parentElement.removeChild(remove)

                })

                  todoinfo.appendChild(form)
                  // add submit button on form
 


            // when we click an expand icon..
            // we want to expand that specific todo..

            e.target.parentElement.parentElement.parentElement.classList.toggle('large')

            // we then set the image to a minus or a plus, depening if we are adding
            // or removing large

           if ( e.target.parentElement.parentElement.parentElement.classList.contains('large')) {
            e.target.src = _src_images_minus_square_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__
            e.target.parentElement.parentElement.parentElement.appendChild(todoinfo)
           }
            
           

           else {e.target.src = _src_images_plus_square_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__
           e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement.parentElement.querySelector('.todoinfo'))}


           // now we need to style it now that the div is added, maybe the large class will also overwrite how we lay thiings out..


     
          })
            

            }

            // create a date button 

            {
                let button = document.createElement('button')
                button.classList.add('todobutton')
                button.classList.add('datebutton')
                __webpack_require__.e(/*! import() */ "vendors-node_modules_date-fns_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! date-fns */ "./node_modules/date-fns/esm/index.js"))
                .then((o) => {
              button.textContent = prop.duedate

              

              if (prop.duedate == o.format(new Date(), 'yyyy-MM-dd') && prop.completed == true) {
                button.parentElement.querySelector('.deletetodobutton').classList.add('deletewhendone')
                button.parentElement.querySelector('.deletetodobutton').textContent = "DELETE"
                button.textContent = ('DONE!')
            }

            else if (prop.duedate == o.format(new Date(), 'yyyy-MM-dd') && prop.completed != true) {
                button.parentElement.querySelector('.deletetodobutton').classList.remove('deletewhendone')
                button.parentElement.querySelector('.deletetodobutton').textContent = "X"
                button.textContent = ('DUE TODAY')
            }
                })
                buttoncontainer
                .appendChild(button)
            }



// create priority button!

          {

            let button = document.createElement('button')
            button.classList.add('prioritytodobutton')
            button.id = 'prioritybutton'


     if (prop.priority == 'priority-low') {button.textContent = "L"
    button.classList.add('prioritywrapperlow')}
     else if (prop.priority == 'priority-med') {button.textContent = 'M'
     button.classList.add('prioritywrappermed')}
     else {
        button.textContent = "H"
        button.classList.add('prioritywrapperhigh')
     }
            buttoncontainer
            .appendChild(button)


     function priorityChanger(e, priority) {
        // when we click the specific todo object, we will get an index value, as well as a project which we can use 
        // to switch its priority!
        // this function receives the event
        // its the todo containers details we want, not the button container (parent)
        // but the parent of the button container

        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker */ "./src/projectmaker.js"))
        .then((obj) => {
            // find the specific project within default projects
            // since its an array, access it at that specific index
            // and adjust its priority
            obj.projects[e.target.parentNode.parentNode.parentNode.dataset.projectset][e.target.parentNode.parentNode.parentNode.dataset.index].priority = priority 

        })

       

     }


            button.addEventListener('click', (e) => {
                priorityChanger(e)
                if (button.textContent == "L") {
                    button.textContent = "M"
                    button.classList.add('prioritywrappermed')
               
                    button.classList.remove('prioritywrapperlow')
                    priorityChanger(e, 'priority-med')
                    // and we need a way to adjust the priority on the specific todo!!
                    // lets create a function they can all use..
                }
                else if (button.textContent == "M") {
                    button.textContent = "H"
                    button.classList.remove('prioritywrappermed')
                    button.classList.add('prioritywrapperhigh')
                    priorityChanger(e, 'priority-high')
                }
              
                else {
                    button.textContent = "L"
                    button.classList.remove('prioritywrapperhigh')
                    button.classList.add('prioritywrapperlow')
                    priorityChanger(e, 'priority-low')
                }
            })
            
           }
// Create a completed button
     
                   let input = document.createElement('input')
                   input.type = "checkbox"

if (prop.completed == true) {input.setAttribute('checked', 'checked')}


else if (prop.completed == false) {input.removeAttribute('checked')}



                   // add event listener to change complete status!

                input.addEventListener('click', (e) => {
                   
                    // when it is clicked, update the todo's complete status!
                  Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
                  .then((o) => {
                    o.projects
                  console.log(o.projects)

                  // this sets it green when we click to check
                  if (  e.target.parentNode.parentNode.parentNode.classList.contains('complete') ||  e.target.parentNode.parentNode.parentElement.classList.contains('complete')) {
                    // if it is already complete when clicked, then remove the class and change the project
                    e.target.parentNode.parentNode.parentNode.parentElement.classList.remove('complete')
                    e.target.parentNode.parentNode.classList.remove('complete')

                    e.target.parentNode.parentNode.parentNode.classList.remove('complete')
                    // change text content to the date of the todo, unless it is today's date at which point show due today!



                    todocontentdiv.querySelector('.buttoncontainer').querySelector('.datebutton').classList.remove('complete')

                    // change complete status on project!
                    o.projects[e.target.parentNode.parentNode.parentNode.dataset.projectset][e.target.parentNode.parentNode.parentNode.dataset.index].completed = false
                    console.log(o.projects[e.target.parentNode.parentNode.dataset.projectset])
                    // change button from 'done'
                  __webpack_require__.e(/*! import() */ "vendors-node_modules_date-fns_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! date-fns */ "./node_modules/date-fns/esm/index.js"))
                  .then((date) => {
                    if (prop.duedate == date.format(new Date(), "yyyy-MM-dd")) {
                        todocontentdiv.querySelector('.buttoncontainer').querySelector('.datebutton').textContent = 'DUE TODAY!'
                        todocontentdiv.querySelector('.buttoncontainer').querySelector('.deletetodobutton').classList.remove('deletewhendone')
                        todocontentdiv.querySelector('.buttoncontainer').querySelector('.deletetodobutton').textContent = "X"
                    }
                    else {
                        todocontentdiv.querySelector('.buttoncontainer').querySelector('.datebutton').textContent = prop.duedate
                        todocontentdiv.querySelector('.buttoncontainer').querySelector('.deletetodobutton').classList.remove('deletewhendone')
                        todocontentdiv.querySelector('.buttoncontainer').querySelector('.deletetodobutton').textContent = "X"
                    }
                  })
                  }

                  else {
                    // else add the class and add to relevant project
                    e.target.parentNode.parentNode.parentElement.classList.add('complete')
                    todocontentdiv.querySelector('.buttoncontainer').querySelector('.datebutton').classList.add('complete')
                   
                    todocontentdiv.querySelector('.buttoncontainer').querySelector('.datebutton').textContent = 'DONE!'
                    // color the delete button red and make it larger!
                    todocontentdiv.querySelector('.buttoncontainer').querySelector('.deletetodobutton').classList.add('deletewhendone')
                    todocontentdiv.querySelector('.buttoncontainer').querySelector('.deletetodobutton').textContent = "DELETE"
                    todocontentdiv.querySelector('.buttoncontainer').querySelector('.datebutton').classList.remove('redback')
                    o.projects[e.target.parentNode.parentNode.parentNode.dataset.projectset][e.target.parentNode.parentNode.parentNode.dataset.index].completed = true
                   
                  }
                
                    // but we need a way to also set it green if completed is true by default!
                    // do that within the creation of todocontent divs
                 



                  })


                })

                   input.classList.add('todocheckbox')
                   buttoncontainer.appendChild(input)
                
                  
                   // append title and button container to quick info then to div!
                   quickinfo.appendChild(buttoncontainer)
                   todocontentdiv.appendChild(quickinfo)
      
                   if (prop.completed == true) {
                    todocontentdiv.classList.toggle('complete')
                    todocontentdiv.querySelector('.buttoncontainer').querySelector('.datebutton').classList.toggle('complete')
                    todocontentdiv.firstChild.firstChild.nextSibling.querySelector('input').checked = "checked"
          

                  }
        
        
              // create deleted button within todo elements



           {

            let button = document.createElement('button')
            button.classList.add('todobutton')
            button.classList.add('deletetodobutton')
            button.textContent = "X"
            buttoncontainer
            .appendChild(button)

            // add an event listener to each delete button 
            button.addEventListener('click', (e) => {

                e.stopImmediatePropagation()
                // on click, delete the todo! with the relevant details from parent todo container

                console.log(e.target.parentElement.parentElement.dataset)

                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./todomodule.js */ "./src/todomodule.js"))
                .then((obj) => {
                   obj.deleteTodo(e.target.parentElement.parentElement.parentElement.dataset.projectset, e.target.parentElement.parentElement.parentElement.dataset.index)
                    // after we delete the todo, repopulate the display @ all
                    populateDisplay('all')
                 
                })

            })
           }

           // add to each todo content that todo's specific array index 

   


        }

        popupTodo()
    })




    appendTime()

}

// function to color back of selected project red!

function redProject() {
    
// set the all tag as red since we are displaying all 
const red = document.querySelectorAll('.red')
red.forEach((elem)  => {
    if (elem.dataset.title == "all") {elem.classList.add('redback')}
})

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
    
}



// script below to mark project title red based on input and default view

function selected() {

    // to be run after dom is built, query all titles
    // we are going to 

    const titles = document.querySelectorAll('.red')
    titles.forEach((elem) => {

    })


}

// function below appends current day in time in the header! to be called in populateDisplay

function appendTime() {
    __webpack_require__.e(/*! import() */ "vendors-node_modules_date-fns_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! date-fns */ "./node_modules/date-fns/esm/index.js"))
    .then((date) => {

        const time = document.createElement('h4')
        time.classList.add('timeheader')
        let day = date.format(new Date(), 'EEEE')
        let daynumber = date.format(new Date(), 'eo')
        let month = date.format(new Date(), 'MMMM')
        let year = date.format(new Date(), 'y')
        time.textContent = `${day}, the ${daynumber} day of ${month} ${year}!`
        const headerdiv = document.querySelector('.columns')
        headerdiv.textContent = ""
            headerdiv.appendChild(time)
        

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

if (completed == "") {completed = false}
// create a todo object from the specified inputs!

 

           // add it to the specific project..  all by default or selected..


   
           


            


       
            // and the custom project itself
            let obj = (0,_todomodule__WEBPACK_IMPORTED_MODULE_0__.createTodo)(title,description,duedate,priority,project,completed)
            _projectmaker_js__WEBPACK_IMPORTED_MODULE_1__.projects[project].push(obj)

            // the function returns an object and we push it onto the appropriate custom projects array

  // we also want to have a custom index property for the todo's and figure out their position within their respective array
  _projectmaker_js__WEBPACK_IMPORTED_MODULE_1__.projects[project].forEach((elem,ind,arr) => {
    elem.index = ind
   
  })


  function createindex() {
      _projectmaker_js__WEBPACK_IMPORTED_MODULE_1__.projects[project].forEach((elem,ind,arr) => {
    elem.index = ind
    console.log('ARRAYLOOP', elem)
  })
  }
   
       // after we have pushed the object onto projects
       // we loop the array and adjust indexes so the todo's have custom indexes!


           
       
     
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
/* harmony export */   "projectstest": () => (/* binding */ projectstest),
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

const projectstest = {
    2: [{title:'pooragas', duedate: '2022-02-02', description: 'poopooASDASDASD', priority: 'low', index: 0},{title:'pooragas', duedate: '2022-02-02', description: 'poopooASDASDASD', priority: 'low', index: 0},{title:'pooragas', duedate: '2022-02-02', description: 'poopooASDASDASD', priority: 'low', index: 0},{title:'pooragas', duedate: '2023-02-02', description: 'poopooASDASDASD', priority: 'low', index: 0}],
    3: [{title:'pooragas', duedate: '2022-02-02', description: 'poopooASDASDASD', priority: 'low', index: 0}],
    5: [{title:'pooragas', duedate: '2022-02-02', description: 'poopooASDASDASD', priority: 'low', index: 0}]
}

const projects = {
  
}

//2: [{title:'pooragas', duedate: '2022-02-02', description: 'poopooASDASDASD', priority: 'low', index: 0},]
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
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
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



function deleteTodo(project, index) {

    // we have a specific project, and index of the todo!
    // delete it from the array!
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
    .then((obj) => {
        console.log(project, index, obj.projects)
        obj.projects[project].splice(index, 1)

        // after we cut the todo out, we must refresh the proper indexes of the array elements again!
        obj.projects[project].forEach((elem,ind,arr) => {
            elem.index = ind
            console.log('ARRAYLOOP', elem)
          })


        
    })
    


}

/***/ }),

/***/ "./src/images/backgrounds/Hexagon(1).svg":
/*!***********************************************!*\
  !*** ./src/images/backgrounds/Hexagon(1).svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88aa25a6d856bf0be6e7.svg";

/***/ }),

/***/ "./src/images/minus-square-svgrepo-com.svg":
/*!*************************************************!*\
  !*** ./src/images/minus-square-svgrepo-com.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74724411e05d6e8013c3.svg";

/***/ }),

/***/ "./src/images/plus-circle-svgrepo-com(6).svg":
/*!***************************************************!*\
  !*** ./src/images/plus-circle-svgrepo-com(6).svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "557f3229d8b5a12f0498.svg";

/***/ }),

/***/ "./src/images/plus-circle-svgrepo-com(7).svg":
/*!***************************************************!*\
  !*** ./src/images/plus-circle-svgrepo-com(7).svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a3eb9c268c7b61d3b42.svg";

/***/ }),

/***/ "./src/images/plus-circle-svgrepo-com(8).svg":
/*!***************************************************!*\
  !*** ./src/images/plus-circle-svgrepo-com(8).svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8637cbd268e38ae434fa.svg";

/***/ }),

/***/ "./src/images/plus-square-svgrepo-com.svg":
/*!************************************************!*\
  !*** ./src/images/plus-square-svgrepo-com.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "202a2ce0ab8f8561b26e.svg";

/***/ }),

/***/ "./src/images/text-align-center-svgrepo-com.svg":
/*!******************************************************!*\
  !*** ./src/images/text-align-center-svgrepo-com.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "131212a0959d2be01d79.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2J1dHRvbmxvZ2ljX2pzLXNyY19kb21Mb2dpY19qcy5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQzlEO0FBQ3dFO0FBQ0M7QUFDQTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0xBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNJQUEyQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhEQUFlO0FBQ25DO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsOENBQThDO0FBQ3RHLDBCQUEwQiwrQ0FBK0M7QUFDekUsZ0JBQWdCLGtJQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhIQUF1QjtBQUN4QztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNFQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0VBQWE7QUFDeEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0VBQWM7QUFDN0M7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzSUFBMkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsK0xBQWtCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNJQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsNkRBQVU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLCtMQUFrQjtBQUNyQjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOEhBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsUUFBUSxvSUFBMEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhIQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQWE7QUFDYjtBQUNBLHFEQUFxRDtBQUNyRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0lBQTJCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkhBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhIQUF1QjtBQUNqQztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0lBQTBCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhIQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSUFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBYztBQUNkLFFBQVEsc0lBQTJCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNJQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvSUFBMEI7QUFDOUM7QUFDQSxxQkFBcUI7QUFDckIsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhIQUF1QjtBQUN2QyxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0Q7QUFDVDtBQUNQO0FBQ1Y7QUFDOUI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0lBQTJCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFlBQVksOERBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4SEFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOERBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOERBQWU7QUFDM0I7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNJQUEyQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhIQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsK0JBQStCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xxQ0E7QUFDQTtBQUNBO0FBQ2lFO0FBQ2pFO0FBQ29FO0FBQ3BFO0FBQ3lFO0FBQ3pFO0FBQ3lFO0FBQ3pFO0FBQ21DO0FBQ25DO0FBQytEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0lBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0lBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxvSUFBMEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhIQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0lBQTJCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtMQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxrRUFBa0IsQ0FBQztBQUMvRDtBQUNBLG9JQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkRBQVc7QUFDWCxtRUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EscURBQXFELDBFQUFXO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxrRUFBa0IsQ0FBQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBLHVDQUF1QztBQUN2QztBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzSUFBMkI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZCQUE2QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0xBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtMQUFrQjtBQUNsQjtBQUNBLGtEQUFrRCxvREFBUTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7OztBQUdBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7O0FBSU87O0FBRVA7QUFDQTtBQUNBLElBQUksc0lBQTRCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0EsS0FBSztBQUNMOzs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvYnV0dG9ubG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9kb21Mb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2Zvcm1sb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL3Byb2plY3RtYWtlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL3RvZG9tb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybUNvbnRyb2xsZXIgYXMgZm9ybVN1Ym1pdCAgfSBmcm9tICcuL2Zvcm1sb2dpYy5qcydcclxuXHJcbmltcG9ydCBtYWlucGx1c2ltYWdlIGZyb20gJy4uL3NyYy9pbWFnZXMvcGx1cy1jaXJjbGUtc3ZncmVwby1jb20oNikuc3ZnJ1xyXG5pbXBvcnQgaG92ZXJwbHVzaW1hZ2UgZnJvbSAnLi4vc3JjL2ltYWdlcy9wbHVzLWNpcmNsZS1zdmdyZXBvLWNvbSg3KS5zdmcnXHJcbmltcG9ydCBjbGlja3BsdXNpbWFnZSBmcm9tICcuLi9zcmMvaW1hZ2VzL3BsdXMtY2lyY2xlLXN2Z3JlcG8tY29tKDgpLnN2ZydcclxuXHJcblxyXG5cclxuLy8gcmVzZXQgaW5wdXQgZnVuY3Rpb25cclxuZXhwb3J0IGxldCBjdXJyZW50c2VsZWN0ZWRwcm9qZWN0ID0gXCJcIlxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRJbnB1dHMoKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgZWxlbS52YWx1ZSA9IFwiXCJcclxuICAgICAgICBlbGVtLmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIGlmIChlbGVtLnR5cGUgPT0gXCJkYXRlXCIpIHtcclxuICAgICAgICAgICAgaW1wb3J0KCdkYXRlLWZucycpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgKGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtLnZhbHVlID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0udmFsdWUgPSBkYXRlLmZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wbGV0ZWQnKS5jaGVja2VkPVwiXCJcclxufVxyXG5cclxuXHJcbi8vdG9nZ2xlIG1vZGFsIGZ1bmN0aW9uXHJcblxyXG5mdW5jdGlvbiB0b2dnbGVNb2RhbCgpIHtcclxuXHJcbiAgICBjb25zdCBtb2RhbHdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50JylcclxuXHJcbm1vZGFsd2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW9kYWwnKVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuY2xhc3NMaXN0LnRvZ2dsZSgnbW9kYWxiYWNrJylcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuY2xhc3NMaXN0LnRvZ2dsZSgnYmlnaGlkZScpXHJcblxyXG5cclxuY2xvc2Vsb2dpYygpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gZnVuY3Rpb24gYmVsb3cgYWRkcyBjbGljayBldmVudHMgdG8gY3VzdG9tIHByb2plY3QgdGl0bGUgYnV0dG9ucyBzbyB3aGVuIHRoZXkgYXJlIGNsaWNrZWQgdGhleSBjcmVhdGUgYW4gZXZlbnRcclxuICAgIFxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbUJ1dHRvbkxvZ2ljKCkge1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbXByb2plY3R0aXRsZScpXHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlRGlzcGxheSh0YXJnZXQpXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAvLyBmdW5jdGlvbiBiZWxvdyBhZGRzIGNsaWNrIGV2ZW50cyB0byB0b2RvIGJ1dHRvbnNcclxuICAgIFxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHRvZG9CdXR0b25Mb2dpYygpIHtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvYnV0dG9uJylcclxuICAgICAgICBidXR0b25zLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHdlIGNsaWNrIGRlbGV0ZSwgY2FsbCB0aGUgZGVsZXRlIHRvZG8gZnVuY3Rpb24gb24gdGhlIHNwZWNpZmljIHRvZG8hXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGVsZXRlIHRoZSB0b2RvIGF0IGluZGV4ICR7ZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXh9IG9mIGN1c3RvbVxyXG4gICAgICAgICAgICAgICAgcHJvamVjdCAke2UudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LnByb2plY3R9YClcclxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi90b2RvbW9kdWxlLmpzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgby5kZWxldGVUb2RvKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LnByb2plY3RzZXQsIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBhZnRlciBkZWxldGUgdG9kbywgbGV0cyBwb3B1bGF0ZSB0aGUgZGlzcGxheSFcclxuICAgICAgICAgICAgICAgICBpbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4gICAgICAgICAgICAgICAgIC50aGVuKChkb20pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb20ucG9wdWxhdGVEaXNwbGF5KCdhbGwnKVxyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBwbHVzIHN3aXRjaCBpbWFnZSBsb2dpYyBvbiBob3ZlciBhbmQgY2xpY2tcclxuICAgIFxyXG4gICAgIGZ1bmN0aW9uIHBsdXNCdXR0b25JbWFnZUxvZ2ljKCkge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsdXNidXR0b24nKVxyXG4gICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBlLnRhcmdldC5zcmMgPSBob3ZlcnBsdXNpbWFnZVxyXG4gICAgIFxyXG4gIFxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBlLnRhcmdldC5zcmMgPSBtYWlucGx1c2ltYWdlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuc3JjID0gY2xpY2twbHVzaW1hZ2VcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcm9hc3QoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0Y29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Y29udGFpbmVyJylcclxuICAgICAgICBjb25zdCBwcm9qZWN0Ym94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxyXG4gICAgICAgIGNvbnN0IHRvZG9zZWxlY3RidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NlbGVjdCcpXHJcbiAgICAgICAgY29uc3QgbW9kdWxlID0gYXdhaXQgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c2VsZWN0JylcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1vZHVsZS5wcm9qZWN0cykubGVuZ3RoID09IDApIHtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGlucHV0Y29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Y29udGFpbmVyJylcclxuICAgICAgICBjb25zdCBwcm9qZWN0Ym94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxyXG4gICAgICAgIGNvbnN0IHRvZG9zZWxlY3RidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NlbGVjdCcpXHJcbiAgICBcclxuICAgICAgICBwcm9qZWN0Ym94LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgIGlucHV0Y29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgIHRvZG9zZWxlY3RidXR0b24uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICBcclxuICAgIHRvZG9zZWxlY3RidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlYmcnKSBcclxuICAgIHByb2plY3RidXR0b24uY2xhc3NMaXN0LmFkZCgnY2hhbmdlYmcnKVxyXG4gICAgdG9kb3NlbGVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdnaG9zdCcpXHJcbiAgICBcclxuICAgIH1cclxuICAgIGVsc2UgeyAgIFxyXG4gICAgICAgIHRvZG9zZWxlY3RidXR0b24uZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRvZG9zZWxlY3RidXR0b24uY2xhc3NMaXN0LmFkZCgnY2hhbmdlYmcnKVxyXG4gICAgICAgIHRvZG9zZWxlY3RidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZ2hvc3QnKSAgXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2ViZycpIFxyXG4gICAgICAgIHByb2plY3Rib3guY2xhc3NMaXN0LmFkZCgnaGlkZScpIFxyXG4gICAgICAgIGlucHV0Y29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKX1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8vbW9kYWwgbG9naWMgdG8gYmUgdXNlZCB3aXRoIHBsdXMgYnV0dG9uIFxyXG4gICAgXHJcbiAgICAgZXhwb3J0IGZ1bmN0aW9uICBtb2RhbExvZ2ljICgpIHtcclxuICAgICAgICBcclxuXHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBtb2RhbHdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAvLyB3ZSBtZWVkIGEgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgd2UgYXJlIG9wZW5pbmcgdGhlIG1vZGFsXHJcbiAgICAvLyBpbiBvdGhlciB3b3JkcyBpZiB0aGUgcHJvamVjdHMgb2JqZWN0IGlzIGVtcHR5XHJcbiAgICAgICAgLy8gdGhlbiBncmV5IG91dCB0aGUgdG8tZG8gc2VjdGlvbiBpbml0aWFsbHlcclxuXHJcblxyXG5yb2FzdCgpXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gc2hvdyBhbmQgaGlkZSBtb2RhbCBieSB0b2dnbGluZyBhIGNsYXNzIHRvIGJlIGNhbGxlZCBpbiBvdGhlciBmdW5jdGlvbnNcclxuXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gdG8gdG9nZ2xlIHdoZW4gbW9kYWwgc2hvd3Mgb3Igbm90XHJcbiAgICBcclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVNb2RhbCgpIHtcclxuICAgICAgICAgICAgbW9kYWx3aW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tb2RhbCcpXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBmdW5jdGlvbiB0byBjb25zaWRlciB3aGVuIHdpbmRvdyBvdXRzaWRlIG9mIG1vZGFsIGlzIGNsaWNrZWQgdG8gY2xvc2UgbW9kYWxcclxuICAgIC8vIHNpbmNlIG1vZGFsd2luZG93IGlzIHRoZSBtb2RhbCBzZWxlY3RvciB3aGljaCBpcyB0aGUgZW50aXJlIGJhY2tncm91bmRcclxuICAgIC8vIGFueXRoaW5nIGNsaWNrZWQgaW4gdGhlIGJhY2tncm91bmQgdGhhdCBpcyBub3QgdGhlIG1vZGFsIGNvbnRlbnQgd2lsbCBjdWFzZSB0aGUgd2luZG93IHRvIGNsb3NlXHJcbiAgICBcclxuICAgICAgICBmdW5jdGlvbiB3aW5kb3dPbkNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgbW9kYWx3aW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxiYWNrJyk7XHJcbiAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50JykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1tb2RhbCcpXHJcbiAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLmNsYXNzTGlzdC5hZGQoJ2JpZ2hpZGUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB3aW5kb3dPbkNsaWNrKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2FsbCBwcm9qZWN0IGJ1dHRvbiBzdWJtaXQgbG9naWMgd2hlbiBtb2RhbCBhY3RpdmVcclxuICAgIFxyXG4gXHJcbiAgICAgICAgcHJvamVjdHN1Ym1pdGxvZ2ljKClcclxuXHJcblxyXG4gICAgICAgIC8vIGNhbGwgc3VibWl0dG9kbyBmb3JtIGxvZ2ljIHdoZW4gbW9kYWwgYWN0aXZlIFxyXG4gICAgICAgIHN1Ym1pdExvZ2ljKClcclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGJlbG93IHRvIGFkZCBldmVudHMgdG8gc3VibWl0aW5wdXRzIGF0IGFsbCB0aW1lcywgYW5kIGRlY2lkZSB3aGF0IGhhcHBlbnNcclxuLy8gd2hlbiBzdWJtaXQgaXMgY2xpY2tlZCFcclxuLy8gZW5zdXJlIGZpZWxkcyBnbyByZWQgd2hlbiBiYWQgZGF0YSBhbmQgdGhhdCBzdWJtaXQgd29uJ3Qgd29yayB3aXRoIGJhZCBkYXRhISAoaXVuIGJlbG93IGZ1bmN0aW9uKVxyXG4gICAgXHJcblxyXG52YXIgdG9kb3RpdGxlID0gXCJcIlxyXG52YXIgdG9kb2Rlc2NyaXB0aW9uID0gXCJcIlxyXG5cclxudmFyIHRvZG9kdWVkYXRlID0gXCJcIlxyXG5cclxuIGltcG9ydCgnZGF0ZS1mbnMnKVxyXG4udGhlbigobykgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG8uZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJylcclxuICAgIHRvZG9kdWVkYXRlID0gZGF0ZVxyXG59KVxyXG5cclxudmFyIHRvZG9wcmlvcml0eSA9IFwiXCJcclxudmFyIHRvZG9wcm9qZWN0ID0gXCJcIlxyXG52YXIgdG9kb2NvbXBsZXRlZCA9IFwiXCJcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudHN0b1N1Ym1pdElucHV0cygpIHtcclxuXHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICBjb25zdCBzdWJtaXR0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpXHJcbiAgICBjb25zdCBzdWJtaXRkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpXHJcbiAgICBjb25zdCBzdWJtaXRwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXHJcbiAgICBjb25zdCBzdWJtaXRjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGVkJylcclxuICAgIGNvbnN0IHN1Ym1pdGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZScpXHJcbiAgICBjb25zdCBzdWJtaXRwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcclxuICAgIGNvbnN0IHNlbGVjdGVkcHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RvcHRpb25zJylcclxuICAgXHJcblxyXG4vLyB0aGlzIHNldHMgdG9kbyBwcm9qZWN0IHRvIHdoYXRzIGlzIHNlbGVjdGVkIGJ5IGRlZmF1bHQgc28gd2UgZ2V0IHNvbWV0aGluZ1xyXG5cclxuICBcclxudG9kb3Byb2plY3QgPSBzZWxlY3RlZHByb2oudmFsdWVcclxuXHJcblxyXG4gICAgc3VibWl0dGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgdG9kb3RpdGxlID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvdGl0bGUpXHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGNvbnN0IHN1Ym1pdHRvZG9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0YnV0dG9uJylcclxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gXCJcIiB8fCBjaGVja1RleHQoZS50YXJnZXQudmFsdWUpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHN1Ym1pdHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgICBzdWJtaXR0b2RvYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSAhPSBcIlwiICYmIGNoZWNrVGV4dChlLnRhcmdldC52YWx1ZSkgPT0gdHJ1ZSkge1xyXG4gICAgXHJcbiAgICAgICAgICAgIHN1Ym1pdHRvZG9idXR0b24uZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBzdWJtaXR0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdyZWRiYWNrJylcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pXHJcbiAgICBzdWJtaXRkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgdG9kb2Rlc2NyaXB0aW9uID0gZS50YXJnZXQudmFsdWVcclxuICAgXHJcbiAgICAgfSlcclxuXHJcbiAgICAgc3VibWl0Y29tcGxldGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICB0b2RvY29tcGxldGVkID0gZS50YXJnZXQuY2hlY2tlZFxyXG5cclxuICAgICB9KVxyXG4gICAgIFxyXG4gICAgIHN1Ym1pdGRhdGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAgICAgdG9kb2R1ZWRhdGUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgXHJcblxyXG4gICAgICAgXHJcbiAgICAgfSlcclxuXHJcbiAgICAgc3VibWl0cHJvamVjdC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgIFxyXG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBcclxuICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gXCJcIikgeyAgICAgICAgICB9XHJcbiAgICAgICAgICAgZWxzZSB7IHRvZG9wcm9qZWN0ID0gZS50YXJnZXQudmFsdWVcclxuIFxyXG4gICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgIH0pXHJcbiAgXHJcbiAgICAgXHJcbiAgICAgc3VibWl0cHJpb3JpdHkuZm9yRWFjaChlbGVtID0+IHtcclxuZWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICB0b2RvcHJpb3JpdHkgPSBlLnRhcmdldC5pZFxyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oXHJcblxyXG4gICAgKVxyXG4gICAgY29uc29sZS5sb2codG9kb3ByaW9yaXR5KVxyXG4gICAgXHJcbiB9KVxyXG4gICAgIH0pXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiAgICAvLyAgICAvL3N1Ym1pdCBidXR0b24gbG9naW4gaW4gbW9kYWwgd2luZG93IGZvciB0b2RvXHJcbiAgICAgICAvLyB3YW50IHRvIHVzZSB0aGUgYnV0dG9uIHRvIHN1Ym1pdCBhbnN3ZXJzIHRvIGFwcHJvcHJpYXRlIG1vZHVsZVxyXG4gICAgICAgLy8gdGhlbiByZXNldCB0aGUgaW5wdXRzIHRvIG5vdGhpbmcgaW4gdGhlbSBmb3IgdGhlIG5leHQgYWRkaXRpb25cclxuICAgICAgIFxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXRMb2dpYygpIHtcclxuXHJcblxyXG4gICAgIFxyXG4gICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdGJ1dHRvbicpXHJcbiAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIChmdW5jdGlvbiBzZWUoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4vLyB0aGlzIHRvZG8gYnkgZGVmYXVsdCBpcyBhZGRlZCB0byBhIHByb2plY3QgdW5kZXIgY3VzdG9tIHByb2plY3RzLFxyXG5cclxuXHJcbiAgICAgICAgfSkoKVxyXG4gICAgICAgIFxyXG5cclxuXHJcblxyXG4gICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcblxyXG4vLyBvbiBzdWJtaXQgb2YgdG9kbywgd2FudCB0byByZSB1cGRhdGUgdGhlIGFsbCBhcnJheSFcclxuXHJcblxyXG5cclxuXHJcbiAgIC8vIGZ1bmN0aW9uIHRvIGFkZCB0byB0b2RvIG9iamVjdHMgbGlzdFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIC8vIHJ1biBmb3JtIGNvbnRyb2xsZXIgd2hlbiB3ZSBjbGljayBzdWJtaXQgd2hpY2ggZ2V0cyB0aGUgcmVsZXZlbnQgaW5wdXRzIGFuZCBydW5zIHRvZG8gbWFrZXJcclxuICAgICAgICAgLy8gdGhlIGlucHV0cyB3ZSBuZWVkIHRvIHVzZSBjb21lIGZyb20gdGhlIGFkZHN1Ym1pdGlucHV0c2Z1bmN0aW9uIVxyXG4gICAgICAgICAvLyB3ZSB3aWxsIHdyaXRlIHRvIGdsb2JhbCB2YXJpYWJsZXNkXHJcblxyXG5cclxuICAgICAgICAgLy8gY2hlY2sgaWYgaW5wdXRzIGFyZSBlbXB0eSFcclxuXHJcblxyXG4gICAgICAgIGlmICh0b2RvcHJpb3JpdHkgPT0gXCJcIikge3RvZG9wcmlvcml0eSA9IFwicHJpb3JpdHktbG93XCJ9XHJcblxyXG4gICAgICAgICAvLyBpZiBpbnB1dHMgYXJlIGdvb2QsIHJ1biB0b2RvIGZ1bmN0aW9uXHJcbiAgICAgICAgIGZvcm1TdWJtaXQodG9kb3RpdGxlLCB0b2RvZGVzY3JpcHRpb24sIHRvZG9kdWVkYXRlLCB0b2RvcHJpb3JpdHksIHRvZG9wcm9qZWN0LCB0b2RvY29tcGxldGVkKVxyXG5cclxuICAgICAgIFxyXG4vLyBzZXQgY29tcGxldGVkIGJhY2sgdG8gZmFsc2UhXHJcbnRvZG9jb21wbGV0ZWQgPSBmYWxzZVxyXG5cclxuICAgLy8gcmVzZXQgdG9kdWVkYXRlXHJcblxyXG4gICBpbXBvcnQoJ2RhdGUtZm5zJylcclxuICAgLnRoZW4oKGRhdGUpID0+IHtcclxuICB0b2RvZHVlZGF0ZSA9IGRhdGUuZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJylcclxuICAgfSlcclxuICAgICAgICAgICBcclxuICAgLy8gcmVtb3ZlIHRoZSBtb2RhbCBhZnRlciBjcmVhdGluZyBvdXIgdG9kbywgYW5kIHJlc2V0IHRoZSBpbnB1dHMgYmFjayB0byB0aGVpciBkZWZhdWx0c1xyXG4gICBcclxuICAgICAgICAgICB0b2dnbGVNb2RhbCgpXHJcblxyXG4gICAgICAgICBcclxuICAgICAgICBcclxuICAgXHJcbiAgIFxyXG4gICAvLyB3ZSBhbHNvIHdhbnQgdG8gZW5zdXJlIG91ciBpbnB1dHMgYXJlIHRydXRoeVxyXG4gICAvLyBvbmx5IHdhbnQgdG8gcmVxdWlyZSB0aXRsZSwgZGVzY3JpcHRpb24gZGF0ZSBhbmQgcHJvamVjdCBhbmQgY29tcGxldGVcclxuICAgXHJcbiAgIFxyXG4gICAgICAgICAgIC8vIHJlbmRlciB0aGUgZG9tIGFmdGVyIGFsbCB0aGlzLCB3aGljaCB3aWxsIHVwZGF0ZSBhbGwgZWxlbWVudHNcclxuICAgXHJcbiAgICAgICAgICAgaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuICAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIC8vIGFmdGVyIGRvbSBpcyByZW5kZXJlZCwgc2VsZWN0IHRoZSBhbGwgcHJvamVjdHMgdGl0bGUgYW5kIG1ha2UgaXQgcmVkIGFzIGl0IGlzIG5vdyBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICBvLnVwZGF0ZWZvcmhpZ2goJ2FsbCcpXHJcbiAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBjdXJyZW50IHByb2plY3RzIHNsZWN0aW9uIHRvIGFsbCFcclxuICAgICAgICAgICAgICAgY3VycmVudHNlbGVjdGVkcHJvamVjdCA9ICdhbGwnXHJcbiAgICAgICAgICAgICAgIG8ucG9wdWxhdGVEaXNwbGF5KCdhbGwnKVxyXG4gICAgICAgICAgIH0pXHJcbiAgIFxyXG4gICAgICAgIGltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbiAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgICAgICAgICBvYmouYWRkQnV0dG9uTG9naWMoKVxyXG4gICAgICAgICAgICBvYmoubW9kYWxMb2dpYygpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4gICAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGFmdGVyIGRvbSBpcyByZW5kZXJlZCwgc2VsZWN0IHRoZSBwcm9qZWN0IHRoYXQgd2UganVzdCBzdWJtaXR0ZWRcclxuICAgICAgICAgICAgICAgIG8udXBkYXRlZm9yaGlnaCgnYWxsJylcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgIFxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgaW5wdXQgdG8gdXBkYXRlIGRpc3BsYXkgaWYgdG9kbyBiZWxvbmdzIHRvIGRpZmZlcmVudCBwcm9qZWN0XHJcbiAgICAgICAgXHJcbiAgICAgICB9KVxyXG4gICAgICAgcmVzZXRJbnB1dHMoKVxyXG5cclxuLy8gc3VibWl0IHRoZSBpbnB1dCBvZiBjb21wbGV0ZWQgYmFjayB0byBub3QgY2hlY2tlZFxyXG5cclxuXHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgLy8gaW5pdGlhbCBzdWJtaXQgYnV0dG9uIHByb2plY3QgbG9naWMhXHJcbiAgICAgIGV4cG9ydCBmdW5jdGlvbiBpbml0aWFscHJvaigpIHtcclxuICAgIFxyXG5jb25zdCBwcm9qdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHRpdGxlJylcclxuaWYgKHByb2p0aXRsZS52YWx1ZSA9PSBcIlwiIHx8IGNoZWNrVGV4dChwcm9qdGl0bGUudmFsdWUpICkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzdWJtaXQnKS5kaXNhYmxlZCA9IHRydWVcclxuXHJcbn1cclxuICAgICAgfVxyXG5cclxuICAgICAgZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWx0b2Rvc3VibWl0KCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWQnKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucygncmVkYmFjaycpKSB7ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdyZWRiYWNrJyl9XHJcbiAgICAgICAgfSlcclxuY29uc3Qgc3VibWl0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdGJ1dHRvbicpXHJcbmlmIChzdWJtaXRidXR0b24udmFsdWUgPT0gXCJcIiB8fCBjaGVja1RleHQoc3VibWl0YnV0dG9uLnZhbHVlKSApIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRidXR0b24nKS5kaXNhYmxlZCA9IHRydWVcclxuXHJcbn1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGZ1bmN0aW9uIGNoZWNrZGVmYXVsdChzdHIpIHtcclxuICAgICAgICBsZXQgdGVzdCA9IC9eKGFsbHx0b2RheXx0aGlzd2VlaykkL21pXHJcbiAgICAgICAgcmV0dXJuIHRlc3QudGVzdChzdHIpXHJcbiAgICB9ICAgXHJcbiAgICAgIFxyXG4gLy9zdWJtaXQgYnV0dG9uIGxvZ2luIGluIG1vZGFsIHdpbmRvdyBmb3IgcHJvamVjdFxyXG4gICAgICAvLyB3YW50IHRvIHVzZSB0aGUgYnV0dG9uIHRvIHN1Ym1pdCBhbnN3ZXJzIHRvIGFwcHJvcHJpYXRlIG1vZHVsZVxyXG4gICAgICAvLyB0aGVuIHJlc2V0IHRoZSBpbnB1dHMgdG8gbm90aGluZyBpbiB0aGVtIGZvciB0aGUgbmV4dCBhZGRpdGlvblxyXG4gbGV0IHN1Ym1pdCA9IFwiXCJcclxuICAgIGZ1bmN0aW9uIHByb2plY3RzdWJtaXRsb2dpYygpIHtcclxuXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBwcm9qZWN0c3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzdWJtaXQnKVxyXG4gICAgICBjb25zdCBwcm9qZWN0dGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHRpdGxlJylcclxubGV0IHByb2plY3R0aXRsZWNob2ljZSA9IFwiXCJcclxuICAgICAgLy8gZXZlbnQgbGlzdGVuZXIgb24gcHJvamVjdCB0aXRsZSB0byBjYXB0dXJlIGN1cnJlbnQgaW5wdXRcclxuICAgICAgcHJvamVjdHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgIFxyXG5cclxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgcHJvamVjdHRpdGxlY2hvaWNlID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgIFxyXG5cclxuICAgICAgXHJcblxyXG5cclxuICAgICAgICAvLyBpZiBwcm9qZWN0IHRpdGxlIGlzIG5vdCB0cnV0aHksIGFkZCByZWQgYmFja2dyb3VuZFxyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSBcIlwiIHx8IGNoZWNrVGV4dChlLnRhcmdldC52YWx1ZSkgPT0gZmFsc2UgfHwgIGNoZWNrZGVmYXVsdChlLnRhcmdldC52YWx1ZSkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgcHJvamVjdHN1Ym1pdC5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBpZiBpdCBpcyB0cnV0aHksIHJlbW92ZSB0aGUgYmFja2dyb3VuZFxyXG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlICE9IFwiXCIgJiYgY2hlY2tUZXh0KGUudGFyZ2V0LnZhbHVlKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RzdWJtaXQuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyZWRiYWNrJylcclxuICAgICAgICAgICAgc3VibWl0ID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgIH0pXHJcbiAgICAgXHJcbiAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHdoZW4gc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VlZCBcclxuXHJcbiAgICAgIHByb2plY3RzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUsIHN1Ym1pdCkgPT4ge1xyXG5cclxuLy8gT04gU1VCTUlUIE9GIFBST0pFQ1QsIERPIE5PVEhJTkcgVE8gREVGQVVMVCBBUlJBWVxyXG5cclxuXHJcbi8vXHJcblxyXG4gICBcclxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gXCJcIlxyXG4gICAgICAgIGNvbnN0IHByb2p0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0dGl0bGUnKVxyXG5cclxuXHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG5cclxuICAgICAgIC8vIHdoZW4gd2UgY2xpY2sgdGhlIHN1Ym1pdCBidXR0b24sIGNoZWNrIHRoZSB0ZXh0IHJlY2VpdmVkXHJcbiAgICAgICAvLyBpZiBpdCBpcyBhIHRydXRoeSBpbnB1dCAobm90IGJsYW5rIGFuZCBwYXNzZXMgY2hlY2spIHJ1biBpZiBibG9ja1xyXG4gICAgICAgLy8gaWYgaXQgaXMgbm90IHRydXRoeSBydW4gdGhlIGVsc2UgYmxvY2tcclxuXHJcbiAgICAgICAgICBpZiAoY2hlY2tUZXh0KHByb2plY3R0aXRsZS52YWx1ZSkgPT0gdHJ1ZSAmJiBwcm9qZWN0dGl0bGUudmFsdWUgIT0gXCJcIikge1xyXG4gICAgICAgICBcclxuICAgICAgICAgXHJcbmxldCB2YWx1ZSA9IHByb2plY3R0aXRsZS52YWx1ZVxyXG5cclxuICBcclxuICAvLyBjYWxsIHRoZSBwcm9qZWN0IGNvbnN0cnVjdG9yIVxyXG4gIFxyXG4gIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gIC50aGVuKChvYmopID0+IHtcclxuXHJcblxyXG4gICAgICAvLyBhZGQgcHJvamVjdCB0byB0aGUgbGlzdFxyXG4gICAgLy8gZW5zdXJlIG5hbWUgZG9lc24ndCBleGlzdFxyXG5cclxuICAgICAgaWYgKG9iai5hZGRQcm9qZWN0KHZhbHVlKSA9PSBmYWxzZSkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdGV4aXN0cyEgY2hvb3NlIGFub3RoZXInKVxyXG4gICAgICAgIGFsZXJ0KCdwcm9qZWN0ZXhpc3RzISBjaG9vc2UgYW5vdGhlcicpXHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Y29udGFpbmVyJylcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKVxyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJy5zaG93LW1vZGFsJylcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICBcclxuICAgICAgLy8gaWYgcHJvamVjdCB0aXRsZSBpcyBibGFuaywgdGhyb3cgYW4gYWxlcnQgYW5kIHJlIGlucHV0IHRoZSBkYXRhXHJcblxyXG4gICAgIFxyXG4gICAgICAgLy8gc2V0IHByb2plY3QgdGl0bGUgZXF1YWwgdG8gbm90aGluZyBhZ2FpbiBcclxuICAgICAgIHJlc2V0SW5wdXRzKCkgXHJcbiAgXHJcbiAgICAgICAvLyBjbGVhciB0aGUgbW9kYWxcclxuICBcclxuXHJcbiAgXHJcbiAgICAgIC8vdXBkYXRlIHRoZSBkb21cclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICBcclxuXHJcblxyXG4gICAgICB0b2dnbGVNb2RhbCgpXHJcbiAgICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVycyBhZnRlciB1cGRhdGluZyBkb20gXHJcblxyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydCgnLi9kb21Mb2dpYycpXHJcbiAgICAudGhlbigobykgPT4ge1xyXG5cclxuICAgICAgICAvLyBwb3B1bGF0ZSB0aGUgZGlzcGxheSB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgcHJvamVjdCB3ZSBjcmVhdGVkIVxyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICBvLnBvcHVsYXRlRGlzcGxheSh2YWx1ZSlcclxuICAgICBcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICBcclxuICAgICAgICAgICAgaWYgKGVsZW0uZGF0YXNldC50aXRsZSA9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgXHJcbiAgICB9KVxyXG4gIH0pIFxyXG4gIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAvLyBmaXJzdCBsb2cgdGhhdCBpdCBpcyBub3QgdHJ1dGh5IGFuZCBhZGQgYSByZWQgYmFja2dyb3VuZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IHRydXRoeSBhZGQgcmVkJylcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBhZGQgcmVkIHRvIGJhY2sgb2YgcHJvamVjdCB0aXRsZVxyXG5cclxuICAgICAgICAgICAgcHJvamVjdHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHByb2plY3R0aXRsZS52YWx1ZSA9PSBcIlwiIHx8IGNoZWNrVGV4dChwcm9qZWN0dGl0bGUudmFsdWUpID09IGZhbHNlKSB7IGFsZXJ0KCdQbGVhc2UgRW50ZXIgYSBWYWxpZCBQcm9qZWN0IE5hbWUnKVxyXG4gICAgICAgICAgICBwcm9qZWN0c3VibWl0LmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoZW4gcnVuIHRoZSBwcm9qZWN0aW5wdXQgZnVuY3Rpb24gdG8gbGlzdGVuIHRvIHRoZSBpbnB1dCBhbmQgYWRqdXN0IHRoZSByZWQgYmFja2dyb3VuZCBhY2NvcmRpbmdseVxyXG5cclxuICAgICAgICAgICAgICBhZGRQcm9qZWN0SW5wdXRSZWQocHJvamVjdHRpdGxlKVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGF0IHRvZG8gc2NyZWVuIGRvZXMgbm90IGNvbWUgYmFjayB1cFxyXG4gICAgICAgICAgICAgIC8vIGlmIHRvZG8gc2NyZWVuIGNvbnRhaW5zIGhpZGUsIGxlYXZlIGl0IGFsb25lLCBlbHNlXHJcbiAgICAgICAgICBpbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4gICAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICBcclxuICAgICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgICAgfVxyXG4gICAgIFxyXG4gIC8vIGFkZCB2YWx1ZSBvZiB0aXRsZSBmaWVsZCB0byBwcm9qZWN0cyBvYmplY3RcclxuICAgIFxyXG5cclxuICBcclxuICBpbXBvcnQoJy4vYnV0dG9ubG9naWMuanMnKVxyXG4gIC50aGVuKChvKSA9PiB7XHJcbiAgICAgIG8uYWRkQnV0dG9uTG9naWMoKVxyXG4gICAgICBvLm1vZGFsTG9naWMoKVxyXG4gIH0pXHJcbiAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb25cclxuXHJcblxyXG4vLyBuZWFyIHRoZSBlbmQgb2YgdGhlIGV2ZW50IHdlIHdpbGwgcnVuIHJlbW92ZSByZWQsIGFuZCBhZnRlciBpdCByZSBhcHBseSByZWQgYmFzZWQgb24gc2VsZWN0aW9uXHJcbmltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbi50aGVuKChvKSA9PiB7XHJcbiAgICBvLnJlbW92ZVJlZCgpXHJcblxyXG4gICAgXHJcbiAgICByZXNldElucHV0cygpXHJcbiAgICBtb2RhbExvZ2ljKClcclxuXHJcbiAgICAvLyBhZnRlciByZW5kZXIgY3VzdG9tIHByb2plY3RzIHdlIHdpbGwgYWRqdXN0cyBoaWdobGlnaHRcclxuby5yZW5kZXJDdXN0b21Qcm9qZWN0cyhwcm9qZWN0dGl0bGVjaG9pY2UpXHJcbmltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4udGhlbigobykgPT4ge1xyXG4gIFxyXG5cclxufSlcclxuXHJcbn0pXHJcblxyXG5cclxuICBcclxuICAgICAgfSlcclxuICAgICAgXHJcblxyXG5cclxuICB9XHJcbiAgICAgIFxyXG5cclxuXHJcblxyXG4vLyBhZGQgdGhlIGR5bmFtaWMgYmFja2dyb3VuZCB0byBpbnB1dHMsIHJ1biB0aGlzIGluIHBsdXMgYnV0dG9uIG1vZGFsIGZ1bmN0aW9uIFxyXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdElucHV0UmVkKHByb2plY3R0aXRsZSkge1xyXG4gICBcclxuXHJcblxyXG4gICAgICAgXHJcbiAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIC8vIGFkZCBhIGxpc3RlbmVyIG9uIGl0IHRyaWdnZXJlZCBieSBhbnkgaW5wdXQgdG8gbGlzdGVuIGZvciBpbnB1dFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2plY3R0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gaWYgaW5wdXQgcmVtYWlucyBibGFuayBhbmQgZG9lcyBub3Qgc2F0aXNmeSByZWdleCwgY29udGludWUgdG8ga2VlcCBiYWNrZ3JvdW5kIHJlZFxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gXCJcIiB8fCBjaGVja1RleHQoZS50YXJnZXQudmFsdWUpID09IGZhbHNlKSB7ICAgICBcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZCByZWRiYWNrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbi8vIGlmIGlucHV0IGlzIG5vdCBibGFuayBhbmQgcGFzc2VzIHJlZ2V4LCByZW1vdmUgdGhlIHJlZCBiYWNrZ3JvdW5kXHJcblxyXG5cclxuICAgICAgICBlbHNlIGlmIChjaGVja1RleHQoZS50YXJnZXQudmFsdWUpID09IHRydWUgJiYgZS50YXJnZXQudmFsdWUgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnV0aHkgaW5wdXQnKVxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyZWRiYWNrJylcclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBydW4gdGhpcyB3aXRoIGZpcnN0IHN1Ym1pdCBhbmQgdGhlbiBiZSBkeW5hbWljXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuLy8gcmVnZXggZm9yIGlucHV0cyBcclxuXHJcbiAgICBcclxuZnVuY3Rpb24gY2hlY2tUZXh0KHN0cikge1xyXG4gICAgbGV0IHRlc3QxID0gL15bXlxcc10qW1xcdyF8XFxzXSskL2dpXHJcblxyXG4gICByZXR1cm4gdGVzdDEudGVzdChzdHIpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG5cclxuICAgXHJcbi8vIGZ1bmN0aW9uIHRvIHJlc2V0IHRvIGRlZmF1bHQgdG9kbyBkaXNwbGF5IFxyXG5cclxuZnVuY3Rpb24gcmVzZXRUb2RvKCkge1xyXG5cclxuICAgIFxyXG4gICAgICAgIC8vIHJlc2V0IG1vZGFsIHdpbmRvdyB0byBjcmVhdGUgdG9kbyBieSBkZWZhdWx0XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9idXR0b25zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NlbGVjdCcpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGJ1dHRvbnNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c2VsZWN0JylcclxuICAgICAgICBjb25zdCB0b2RvaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Y29udGFpbmVyJylcclxuICAgICAgICBjb25zdCBwcm9qZWN0aW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxyXG4gICAgICAgIGNvbnN0IG1vZGFsd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBtb2RhbCB3aW5kb3dcclxuICAgICAgICAgICBtb2RhbHdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LW1vZGFsJylcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgcHJvamVjdGlucHV0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICAgICB0b2RvaW5wdXRzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgICAgIHByb2plY3RidXR0b25zZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlYmcnKVxyXG4gICAgICAgICAgIHRvZG9idXR0b25zZWxlY3QuY2xhc3NMaXN0LmFkZCgnY2hhbmdlYmcnKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4gICAgLy9sb2dpYyBiZWxvdyB0byBzd2l0Y2ggYmV0d2VlbiBjcmVhdGlvbiBvZiB0b2RvIG9yIGEgcHJvamVjdFxyXG5cclxuZnVuY3Rpb24gc3dpdGNoQ3JlYXRpb24oKSB7XHJcbiAgICBjb25zdCB0b2RvYnV0dG9uc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZWxlY3QnKVxyXG4gICAgY29uc3QgcHJvamVjdGJ1dHRvbnNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c2VsZWN0JylcclxuICAgIGNvbnN0IHRvZG9pbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRjb250YWluZXInKVxyXG4gICAgY29uc3QgcHJvamVjdGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuICAgIFxyXG4gICAgdG9kb2J1dHRvbnNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlYmcoZSkge1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NoYW5nZWJnJylcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHRvZG9idXR0b25zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBwcm9qZWN0YnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZWJnJylcclxuICAgICAgICBwcm9qZWN0aW5wdXRzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgIHRvZG9idXR0b25zZWxlY3QuY2xhc3NMaXN0LmFkZCgnY2hhbmdlYmcnKVxyXG4gICAgICAgIHRvZG9pbnB1dHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH0pXHJcblxyXG4gICAgcHJvamVjdGJ1dHRvbnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAvLyBydW4gZnVuY3Rpb24gd2hlbiBzd2l0Y2hlZCB0byBncmV5IG91dCBwcm9qZWN0IHN1Ym1pdCFcclxuICAgIGluaXRpYWxwcm9qKClcclxuICAgICAgICBwcm9qZWN0YnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuICAgICAgICBwcm9qZWN0aW5wdXRzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgIHRvZG9idXR0b25zZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlYmcnKVxyXG4gICAgICAgIHRvZG9pbnB1dHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICBcclxuXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4gICAgXHJcbiAgICAgICAvLyBsb2dpYyB0byBkZWxldGUgcHJvamVjdHMgZnJvbSB0aGUgbWFzdGVyIG9iamVjdCwgYW5kIHRoZW4gcmVmcmVzaCB0aGUgYXJyYXkgYW5kIHRoZSBkb21yZW5kZXJcclxuXHJcbiAgICAgICBleHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdHMoKSB7XHJcbiAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG9iai5wcm9qZWN0cykubGVuZ3RoID09IDApIHtcclxuICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZWxzZSB7IGNvbnN0IGRlbGV0ZXByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlcHJvamVjdGJ1dHRvbicpXHJcbiAgICAgXHJcbiAgICAgICAgICAgIGRlbGV0ZXByb2plY3QuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBmaWd1cmUgb3V0IHdoaWNoIGJ1dHRvbiB3YXMgY2xpY2tlZCBhbmQgZmluZCBhcHByb3ByaWF0ZSBwcm9qZWN0IHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlbW92ZSA9IGUudGFyZ2V0LmRhdGFzZXQudGl0bGVcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2FudCB0byByZW1vdmUgdGhlIGFjY29yZGluZyBkaXYgd2l0aCBjbGFzcyBwcm9qZWN0YnV0dG9ucyBhbmQgZGF0YT10aXRsZSBlcXVhbCB0byBhYm92ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHdpbGwgaGFuZGxlIHRoaXMgd2l0aCBhIGZ1bmN0aW9uIGluIHRoZSBkb20gbG9naWMgbW9kdWxlXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBhbHNvIG5lZWQgdG8gcmVtb3ZlIHRoZSBwcm9qZWN0IGZyb20gdGhlIGN1c3RvbSBwcm9qZWN0cyBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIGEgZnVuY3Rpb24gZm9yIHRoaXMgd2l0aGluIHByb2plY3QgbWFrZXIgbW9kdWxlXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2FuIHBhc3MgdGhlIGFyZ3VtZW50IG9mIHRoZSBhcHByb3ByaWF0ZSBrZXkgYWJvdmUgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLnJlbW92ZVByb2plY3QocmVtb3ZlKVxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKG8pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIHtvLmFkZEJ1dHRvbkxvZ2ljKClcclxuICAgICAgICAgICAgICAgICAgby5tb2RhbExvZ2ljKCl9KVxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGNhbGwgcmVuZGVyIGN1c3RvbSBwcm9qZWN0cyBzaW5jZSB3ZSBoYXZlIHVwYXRlZCB0aGUgYXJyYXkgdGhhdCBpdCB0YWtlcyBhcyBhbiBhcmd1bWVudFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIGZ1bmN0aW9uIGl0c2VsZiB1cGRhdGVzIHRoZSBhcnJheSB0byBiZSByZW5kZXJlZCBiYXNlZCBvbiB0aGUgY3VycmVudCBtYXN0ZXIgcHJvamVjdCBvYmplY3RcclxuICAgICAgICAgICAgICAgIHJvYXN0KClcclxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigob2JqKSA9PiB7M1xyXG4gICAgICAgICAgICAgICAgb2JqLnJlbmRlcigpfSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGFmdGVyIHdlIGNsaWNrIG9uIGRlbGV0ZSBjYWxsIHJvYXN0IGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiB0b2RvIGNvbnRlbnQgc2hvdWxkIGJlIGludmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgIFxyXG4gICAgIFxyXG5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIHByb2plY3QgZGVsZXRlIGJ1dHRvbiBsb2dpY1xyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gZGVsZXRlQnV0dG9uQ29sb3JzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZXByb2plY3RidXR0b24nKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGVsZXRlYnV0dG9ucy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC50aXRsZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgZGV0ZXJtaW5lIHdoaWNoIGRlbHRlIGJ1dHRvbiBoYXMgYmVlbiBob3ZlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm93IHdlIHdhbnQgdG8gY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBjb3JyZXNwb25kaW5nIGRpdlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0aXR0bGVzID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0YnV0dG9ucycpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RpdHRsZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5kYXRhc2V0LnRpdGxlID09IGUudGFyZ2V0LmRhdGFzZXQudGl0bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtLmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKX1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RpdHRsZXMgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RidXR0b25zJylcclxuICAgICAgICAgICAgICAgIHByb2plY3RpdHRsZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmRhdGFzZXQudGl0bGUgPT0gZS50YXJnZXQuZGF0YXNldC50aXRsZSlcclxuICAgICAgICAgICAgICAgICAgICB7ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdyZWRiYWNrJyl9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbi8vZnVuY3Rpb24gaGVyZSB0byBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHByb2R1Y3QgYnV0dG9ucyB0byB1cGRhdGUgdG9kbyBkaXNwbGF5XHJcbi8vd2Ugd2lsbCBoYXZlIGEgZnVuY3Rpb24gd2hlbiBjbGlja2VkIHRvIHVwZGF0ZSB0aGVtIGFjY29yZGluZ2x5XHJcbi8vXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFRpdGxlRXZlbnRzMSgpIHtcclxuY29uc3QgdG9kb2Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2NvbnRlbnQnKVxyXG5cclxuLy8gd2hlbiB3ZSBjbGljayBhbGwsIGxvb3AgdGhyb3VnaCBhcnJheSBhbGwgYW5kIGRpc3BsYXkgdGhlIGNvbnRlbnRzIVxyXG5cclxuY29uc3QgYWxsdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsJylcclxuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKVxyXG5jb25zdCB0aGlzd2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGlzd2VlaycpXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGJlbG93IGFkZHMgY2xpY2sgZXZlbnRzIHRvIGRlZmF1bHQgcHJvamVjdCBidXR0b25zXHJcbmltcG9ydCB7cG9wdWxhdGVEaXNwbGF5LCByZW1vdmVSZWR9IGZyb20gJy4vZG9tTG9naWMuanMnXHJcbmltcG9ydCB7IGZvcm1Db250cm9sbGVyIH0gZnJvbSAnLi9mb3JtbG9naWMuanMnXHJcbmltcG9ydCB7IGVsLCB0ciB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSdcclxuaW1wb3J0IHsgc3ViIH0gZnJvbSAnZGF0ZS1mbnMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEJ1dHRvbkxvZ2ljKCkge1xyXG5cclxuXHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlZmF1bHRwcm9qZWN0JylcclxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgICAgIC50aGVuKChvYmopID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHRoZSB2YWx1ZSBvZiBkZWZhdWx0IHByb2plY3RzIGFycmF5IHRvIGJsYW5rXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsIHdpbGwgbG9vcCB0aHJvdWdoIGN1c3RvbSBwcm9qZWN0cyBhbmQgYWRkLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZGF5IGFuZCB0aGlzIHdlZWsgd2lsbCBmaWx0ZXIgZnJvbSBhbGwhXHJcblxyXG4gICAgICAgICAgICAgICAgb2JqLmRlZmF1bHRwcm9qZWN0cy50b2RheSA9IFtdXHJcbiAgICAgICAgICAgICAgICBvYmouZGVmYXVsdHByb2plY3RzLmFsbCA9IFtdXHJcbiAgICAgICAgICAgICAgICBvYmouZGVmYXVsdHByb2plY3RzLnRoaXN3ZWVrID0gW11cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBwb3B1bGF0ZURpc3BsYXkoZS50YXJnZXQuaWQpXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBlLnRhcmdldC5pZCwgd2Ugd2FudCB0byBjYWxsIHRoYXQgc3BlY2lmaWMgYXJyYXlcclxuICAgICAgICAgICAgLy8gYW5kIGZlZWQgaXQgdG8gYSBkb20gZnVuY3Rpb24gdGhhdCBsb29wcyB0aGUgYXJyYXkgYW5kIHBvcHVsYXRlcyB0aGUgZGlzcGxheSFcclxuICAgICAgICAgICAgLy8gYWxsIHdpbGwgYmUgdGhlIGRlZmF1bHQgYXJyXHJcbiAgICAgICAgICAgIC8vIHdlIHRoZW4gd2FudCB0byB1cGRhdGUgdGhlIHZhbHVlIG9mIHRoZSBwcm9qZWN0IHRoYXQgaXMgaGlnaGxpZ2h0ZWQhXHJcbiAgICAgICAgICAgaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuICAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgICAgby5yZW1vdmVSZWQoKVxyXG5cclxuICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKVxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJylcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuaWQgPT0gXCJ0b2RheVwiKXtcclxuICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKVxyXG4gICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncmVkYmFjaycpXHJcbiAgICAgICAgICAgIHBvcHVsYXRlRGlzcGxheSgndG9kYXknKVxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LmlkID09IFwidGhpc3dlZWtcIil7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZClcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcblxyXG5cclxuICAgICAgICAgICAgcG9wdWxhdGVEaXNwbGF5KCd0aGlzd2VlaycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBcclxuIFxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbVByb2plY3RCdXR0b25Mb2dpYygpIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tcHJvamVjdHRpdGxlJylcclxuICAgICAgICBidXR0b25zLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgZS50YXJnZXQuaWQsIHdlIHdhbnQgdG8gY2FsbCB0aGF0IHNwZWNpZmljIGFycmF5XHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgZmVlZCBpdCB0byBhIGRvbSBmdW5jdGlvbiB0aGF0IGxvb3BzIHRoZSBhcnJheSBhbmQgcG9wdWxhdGVzIHRoZSBkaXNwbGF5IVxyXG4gICAgICAgICAgICAgICAgLy8gYWxsIHdpbGwgYmUgdGhlIGRlZmF1bHQgYXJyXHJcblxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgby5yZW1vdmVSZWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRzZWxlY3RlZHByb2plY3QgPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgby5wb3B1bGF0ZURpc3BsYXkoY3VycmVudHNlbGVjdGVkcHJvamVjdClcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG8ucHJvamVjdHMpXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcblxyXG5mdW5jdGlvbiB0b2Rvc3dpdGNoZXIoKSB7XHJcbiAgICBjb25zdCB0b2RvZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvY29udGVudCcpXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZHRvZG9pbnB1dGV2ZW50cygpIHtcclxuICAgIFxyXG4vLyBhZGQgc2VwYXJhdGUgZXZlbnRzIGZvciBlYWNoIGlucHV0IG9wdGlvbiFcclxuXHJcbiAgICAgICAgXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGFkZHMgZXZlbnQgbGlzdGVuZXIgdG8gcGx1cyBidXR0b24gdG8gYmUgY2FsbGVkIHdoZW4gZG9tIHJlbmRlciBydW5zXHJcblxyXG5cclxuICAgIFxyXG4gICAgLy8gbWFzdGVyIGZ1bmN0aW9uIHRvIHJ1biBhbGwgZnVuY3Rpb25zIHRoYXQgYWRkIGJ1dHRvbiBsb2dpYyFcclxuICAgIFxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGFkZEJ1dHRvbkxvZ2ljKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHJ1biBsb2dpYyBmb3Igc3dpdGNoaW5nIGltYWdlIG9uIHBsdXMgaWNvbiBvbiBjbGljayBcclxuICAgIHBsdXNCdXR0b25JbWFnZUxvZ2ljKClcclxuICAgIFxyXG4gICAgXHJcbiAgICAvL2xvZ2ljIHRvIGFkZCBldmVudHMgdG8gZGVmYXVsdCBwcm9qZWN0IGJ1dHRvbnMgXHJcbiAgICBkZWZhdWx0QnV0dG9uTG9naWMoKVxyXG4gICAgXHJcbiAgICBjdXN0b21Qcm9qZWN0QnV0dG9uTG9naWMoKVxyXG4gICAgLy9sb2dpYyB0byBhZGQgZXZlbnRzIHRvIGN1c3RvbSBwcm9qZWN0IGJ1dHRvbnMgXHJcbiAgICBjdXN0b21CdXR0b25Mb2dpYygpXHJcbiAgIFxyXG4gICAgXHJcbiAgICAvL2xvZ2ljIHRvIGFkZCBldmVudHMgdG8gdG9kbyBidXR0b25zIFxyXG4gICAgdG9kb0J1dHRvbkxvZ2ljKClcclxuICAgIFxyXG5cclxuICAgIGFkZHRvZG9pbnB1dGV2ZW50cygpXHJcbiAgICBzd2l0Y2hDcmVhdGlvbigpXHJcblxyXG4gICAgZGVsZXRlUHJvamVjdHMoKVxyXG4gICAgXHJcbiAgICBkZWxldGVCdXR0b25Db2xvcnMoKSBcclxuICAgIHByb2plY3RzdWJtaXRsb2dpYygpXHJcbiAgXHJcbiAgICBhZGRFdmVudHN0b1N1Ym1pdElucHV0cygpXHJcbiAgIFxyXG4gIC8vIHBsdXMgYnV0dG9uIGZ1bmN0aW9uIGxvZ2ljXHJcbiAgcGx1c2J1dHRvbmxvZ2ljKClcclxuICAgICAgXHJcbi8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBwbHVzIGJ1dHRvbiBvbiBwYWdlXHJcbi8vIGFsc28gY29udGFpbnMgbG9naWMgdG8gYWRkIHRvIGNsb3NlIGJ1dHRvbiBvbiBtb2RhbCBtb1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2Vsb2dpYygpIHsgICAgIFxyXG4gICAgICAgIGNvbnN0IGNsb3NlYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlYnV0dG9uJylcclxuICAgIC8vIGFkZCBhbiBldmVudCB0byByZWdpc3RlciB0aGUgY2xvc2UgYnV0dG9uXHJcbiAgICAvLyB0aGUgY2xvc2UgYnV0dG9uOlxyXG4gICAgY2xvc2VidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgICB0b2dnbGVNb2RhbCgpXHJcblxyXG4gICAgIC8vIHJlc2V0IGl0IHRvIGRlZmF1bHQgdG9kbyBkaXNwbGF5IFxyXG4gIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICByZXNldFRvZG8oKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgLy8gcmVzZXQgaW5wdXQgb2YgdG9kbyBzY3JlZW4gYW5kIGFsbCBvdGhlciBpbnB1dHMhXHJcbiAgICAgcmVzZXRJbnB1dHMoKSBcclxuXHJcbiAgIFxyXG4gICAgIC8vIHJ1biByb2FzdCwgY2hlY2sgaWYgdGhlIG9iamVjdCBkb2VzIG5vdCBleGlzdCBhZ2FpblxyXG4gICAgIHJvYXN0KClcclxuXHJcblxyXG5cclxuIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBwbHVzYnV0dG9ubG9naWMoKSB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgcGx1c2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHVzYnV0dG9uJylcclxuICAgIGNvbnN0IGNsb3NlYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlYnV0dG9uJylcclxuICAgIHBsdXNidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuXHJcbi8vIHJlbW92ZSBhbnkgZXhwYW5kZWQgdG9kbydzXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb2NvbnRlbnQnKS5mb3JFYWNoKChlbGVtKSA9PiB7ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdsYXJnZScpfSlcclxuXHJcblxyXG4gICAgICAgIC8vIHdoZW4gd2UgY2xpa2MgcGx1cyB0b28gYWRkIHdlIHdhbnQgdG8gb3BlbiB0aGUgbW9kYWwgd2luZG93IGZpcnN0XHJcblxyXG5cclxuICAgICAgICB0b2dnbGVNb2RhbCgpXHJcblxyXG4gICAgXHJcbiAgICAgICAvLyB0aGUgd2Ugd2FudCB0byBhZGQgdGhlIGFwcHJvcHJpYXRlIGxpc3RlbmVycyB0byB0aGUgZmllbGRzIVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgLy90b2RvZmllbGRzOlxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9hZGQgZXZlbnQgdG8gdGhlIG1haW4gc3VibWl0IGJ1dHRvbiFcclxuICAgICAgICBwcm9qZWN0c3VibWl0bG9naWMoKVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIC8vIGFkZCBsb2dpYyB0byB0b2RvIHN1Ym1pdCBidXR0b25cclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIH0iLCIvLyB1c2UgdGhpcyBmdW5jdGlvbiB0byByZW5kZXIgY3VzdG9tIHByb2plY3RzIGFycmF5IHRoYXQgaXMgc2VydmVkIGZyb20gcHJvamVjdCBtYWtlclxyXG4vLyB3ZSB3aWxsIHVwZGF0ZSB0aGUgYXJyYXkgZnJvbSB0aGUgcHJvamVjdCBtYWtlcnMgZnVuY3Rpb24gd2hlbiBuZWVkZWQgdGhlbiBydW4gdGhlIHJlbmRlclxyXG5cclxuaW1wb3J0IHBsdXNxdWFyZSBmcm9tICcuLi9zcmMvaW1hZ2VzL3BsdXMtc3F1YXJlLXN2Z3JlcG8tY29tLnN2ZydcclxuXHJcbmltcG9ydCBtaW51c3NxdWFyZSBmcm9tICcuLi9zcmMvaW1hZ2VzL21pbnVzLXNxdWFyZS1zdmdyZXBvLWNvbS5zdmcnXHJcblxyXG5pbXBvcnQgaGVhZGVyaW1hZ2UgZnJvbSAnLi4vc3JjL2ltYWdlcy90ZXh0LWFsaWduLWNlbnRlci1zdmdyZXBvLWNvbS5zdmcnXHJcblxyXG5pbXBvcnQgbWFpbnBhZ2ViYWNrZ3JvdW5kIGZyb20gJy4uL3NyYy9pbWFnZXMvYmFja2dyb3VuZHMvSGV4YWdvbigxKS5zdmcnXHJcblxyXG5pbXBvcnQgeyBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5cclxuaW1wb3J0IHtpbml0aWFscHJvaiwgaW5pdGlhbHRvZG9zdWJtaXR9IGZyb20gJy4vYnV0dG9ubG9naWMuanMnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ3VzdG9tUHJvamVjdHModmFsdWUpIHtcclxuXHJcbiAvLyBjbGVhciBjdXN0b20gcHJvamVjdCBkb20gZWxlbWVudHMhIG90aGVyd2lzZSBpdCB3aWxsIGp1c3QgYWRkIHRvIHRoZW0hXHJcbiAvLyBkaXYgY29udGFpbmVyIGNsYXNzIGlzIGN1c3RvbXByb2plY3RzXHJcbiBcclxuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21wcm9qZWN0cycpLmlubmVySFRNTCA9IFwiXCJcclxuXHJcblxyXG5cclxuIFxyXG5cclxuLy8gaW1wb3J0IHByb2plY3QgbmFtZXMgZnJvbSBhcnJheSBjcmVhdGVkIGluIHByb2plY3QgbWFrZXIgXHJcblxyXG4gXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuLnRoZW4oKG9iaikgPT4ge1xyXG5cclxuICAgIC8vIHRoaXMgY3JlYXRlcyBhIG5ldyBhcnJheSBiYXNlZCBvbiBjdXJyZW50IGNvbnRlbnRzIG9mIHByb2plY3Qgb2JqZWN0XHJcbiAgICAvLyB3aGljaCB3ZSBjYW4gcmVuZGVyIGZyb21cclxuXHJcblxyXG4gICAgb2JqLmdldFByb2plY3RzKClcclxuXHJcbiAgICAvL2FycmF5IGJlbG93IGlzIGN1cnJlbnQgbmFtZXMgb2YgY3Vzb20gcHJvamVjdHNcclxuICAgIFxyXG4gICAgY29uc3QgY3VzdG9tcHJvamVjdHNsaXN0ID0gb2JqLmN1cnJlbnRDdXN0b21Qcm9qZWN0c1xyXG5cclxuICAgIC8vIGxvb3AgdGhpcyBhcnJheSBcclxuICAgIGN1c3RvbXByb2plY3RzbGlzdC5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIHByb2plY3QgY29vbnRhaW5lciBcclxuXHJcbiAgICAgICAgbGV0IHByb2plY3RkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGFkZCBzdHlsZSB0byBwcm9qZWN0IGNvbnRhaW5lclxyXG5cclxuICAgICAgICBwcm9qZWN0ZGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RidXR0b25zJylcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGJ1dHRvbnMgZm9yIHRpdGxlIGFuZCBkbGVsZXRlIG9iamVjdHNcclxuXHJcbiAgICAgICAgbGV0IHByb2plY3RidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIHByb2plY3RidXR0b24uY2xhc3NMaXN0LmFkZCgnY3VzdG9tcHJvamVjdHRpdGxlJylcclxuICAgICAgICBwcm9qZWN0YnV0dG9uLmRhdGFzZXQudGl0bGUgPSBlbGVtLnRyaW0oKVxyXG5cclxuICAgICAgICAvLyBzZXQgdGl0bGUgdG8gdGhlIGFwcHJvcHJpYXRlIGN1c3RvbSBwcm9qZWN0XHJcblxyXG4gICAgICAgIHByb2plY3RidXR0b24udGV4dENvbnRlbnQgPSBlbGVtXHJcbiBcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkZWxldGVwcm9qZWN0YnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBkZWxldGVwcm9qZWN0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZXByb2plY3RidXR0b24nKVxyXG4gICAgICAgIGRlbGV0ZXByb2plY3RidXR0b24udGV4dENvbnRlbnQgPSBcIlhcIlxyXG5cclxuXHJcbiAgICAgICAgLy8gYXBwZW5kIHRpdGxlIGFuZCBjbG9zZSB0byBwcm9qZWN0IGRpdlxyXG4gICAgICAgIHByb2plY3RidXR0b24uY2xhc3NMaXN0LmFkZCgncmVkJylcclxuICAgICAgICBwcm9qZWN0ZGl2LmFwcGVuZENoaWxkKHByb2plY3RidXR0b24pXHJcbiAgICAgICAgcHJvamVjdGRpdi5hcHBlbmRDaGlsZChkZWxldGVwcm9qZWN0YnV0dG9uKVxyXG4gIFxyXG4gIFxyXG5cclxuICAgICAgICAvLyB3ZSB3YW50IHRvIGFwcGVuZCB0aGVzZSB0byB0aGUgZGl2IHdoaWNoIGhvdXNlcyBjdXN0b20gcHJvamVjdHNcclxuXHJcbiAgICAgICAgY29uc3QgY3VzdG9tcHJvamVjdHN2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbXByb2plY3RzJylcclxuXHJcbiAgICAgICAgY3VzdG9tcHJvamVjdHN2aWV3LmFwcGVuZENoaWxkKHByb2plY3RkaXYpXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHdlIG5lZWQgYSB3YXkgdG8gYXNzb2NpYXRlIHRoZSBwcm9qZWN0IHRpdGxlIGFuZCB0aGUgY2xvc2UgYnV0dG9uXHJcbiAgICAgICAgLy8gd2UgY291bGQgdXNlIGEgZGF0YSBhdHRyaWJ1dGUgc2V0IHRvIHRoZSBrZXkgc2luY2UgdGhpcyB3aWxsIGJlIHVuaXF1ZVxyXG4gICAgICAgIC8vIGdpdmUgdGhlIGhvdXNpbmcgZGl2IGFuZCB0aGUgY2xvc2UgYnV0dG9uIHRoZSBzYW1lIGRhdGEgYXR0cmlidXRlXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGRlbGV0ZXByb2plY3RidXR0b24uZGF0YXNldC50aXRsZSA9IGVsZW1cclxuICAgICAgICBwcm9qZWN0ZGl2LmRhdGFzZXQudGl0bGUgPSBlbGVtXHJcblxyXG4gICAgICAgIC8vIGFwcGVuZCB0aGUgZnVuY3Rpb24gdG8gYWRkIGJ1dHRvbiBsb2dpYyB0byB1cGRhdGVkIGRvbSBlbGVtZW50c1xyXG5cclxuICAgICAgICBpbXBvcnQoJy4vYnV0dG9ubG9naWMuanMnKVxyXG4gICAgICAgIC50aGVuKChvYmopID0+IFxyXG4gICAgICAgIG9iai5kZWxldGVQcm9qZWN0cygpKVxyXG5cclxuXHJcbiAgICAgICAgLy8gXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgaW1wb3J0KCcuL2J1dHRvbmxvZ2ljLmpzJylcclxuICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgIG8uYWRkQnV0dG9uTG9naWMoKTtcclxuICAgIH0pXHJcblxyXG59KVxyXG5cclxuc2VsZWN0Q2hvaWNlQ3JlYXRpb24oKVxyXG5cclxuLy8gYWZ0ZXIgd2UgYXR0YWNoIG91ciBjdXN0b20gcHJvamVjdCwgd2Ugd2FubmEgZ28gdGhyb3VnaCB0aGVtIGFsbCBhbmQgZG8gc29tZSBzaGl0Li5cclxuXHJcbi8vIG9uY2Ugd2UgY2xpY2sgc3VibWl0IHByb2plY3QsIGJlbG93IGZpcmVzIVxyXG5pbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4udGhlbigobykgPT4ge1xyXG4gIFxyXG4gICAgby51cGRhdGVmb3JoaWdoKHZhbHVlKSBcclxufSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVmb3JoaWdoKHZhbHVlKSB7XHJcbiAgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVkJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgXHJcbiBcclxuICAgICAgIGlmICh2YWx1ZSA9PSBlbGVtLmRhdGFzZXQudGl0bGUpIHtcclxuICAgIFxyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICB9XHJcblxyXG5cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0byBwb3B1bGF0ZSBkaXNwbGF5IG9mIHByb2plY3RzIGluIHRvZG8gY3JlYXRpb24gYmFzZWQgb24gY3VycmVudCBwcm9qZWN0c1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0Q2hvaWNlQ3JlYXRpb24oKSB7XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gIFxyXG4gICAgLy8gcmVtb3ZlIGFsbCBjb250ZW50IHRvIHN0YXJ0XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3B0aW9ucycpLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbi8vIGFkZCB0aGUgQWxsIHByb2plY3RzIG9wdGlvbiFcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBnZXQgdGhlIG5hbWVzIG9mIHRoZSBjdXN0b20gcHJvamVjdHMgYW5kIGNyZWF0ZSBlbGVtZW50c1xyXG5cclxub2JqLmN1cnJlbnRDdXN0b21Qcm9qZWN0cy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblxyXG5cclxuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG4gICAgb3B0aW9uLnR5cGU9ZWxlbVxyXG4gICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGVsZW1cclxuICAgICBvcHRpb24udmFsdWUgPSBlbGVtXHJcbiAgICAgb3B0aW9uLmRhdGFzZXQudHlwZSA9ICdvcHRpb24nXHJcbiAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzZWxlY3QnKVxyXG4gICAgIFxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3B0aW9ucycpLmFwcGVuZENoaWxkKG9wdGlvbilcclxuXHJcbn0pXHJcblxyXG5cclxuXHJcbiAgIFxyXG5cclxuXHJcblxyXG5cclxufSl9XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gZW5zdXJlIGRhdGUgaW5wdXQgaXMgdG9kYXlzIGRhdGUgb3IgaGlnaGVyXHJcblxyXG5mdW5jdGlvbiBpbnB1dERhdGUoKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlLmRhdGVpbnB1dCcpXHJcbiAgICBpbXBvcnQoJ2RhdGUtZm5zJylcclxuICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG8uZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJylcclxuXHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgY29uc29sZS5sb2coJ0lOUFVUVkFMJywgaW5wdXQudmFsdWUpO1xyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbi8vbWFzdGVyIGZ1bmN0aW9uIHRvIHJlbmRlciBhbGwgY29tcG9uZW50c1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcigpe1xyXG5cclxuICAgIGlucHV0RGF0ZSgpXHJcblxyXG4gXHJcbi8vIHNldCBiYWNrZ3JvdW5kIGltYWdlXHJcblxyXG5cclxuZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPWB1cmwoJHttYWlucGFnZWJhY2tncm91bmR9KWBcclxuXHJcbmltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbi50aGVuKChvKSA9PiB7XHJcblxyXG4gICAgcmVuZGVyQ3VzdG9tUHJvamVjdHMoKVxyXG4gICAgaW5pdGlhbFJlbmRlclRvZG8oKVxyXG4gICAgby5tb2RhbExvZ2ljKClcclxuICAgIG8uYWRkQnV0dG9uTG9naWMoKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pXHJcblxyXG5pbml0aWFscHJvaigpXHJcbmluaXRpYWx0b2Rvc3VibWl0KClcclxuXHJcblxyXG59XHJcblxyXG5cclxuLy8gcG9wdWxhdGUgbWFpbiBkaXNwbGF5IGxpa2UgdG9kbyBhcmVhIGJhc2VkIG9uIHNlbGVjdGVkIHByb2plY3QhXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlRGlzcGxheShwcm9qZWN0b2JqZWN0ICkge1xyXG5cclxuICAgIC8vIHNldCB0b2RvaGVhZGVyIGltYWdlXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9oZWFkZXJpbWFnZScpLnNyYyA9IGhlYWRlcmltYWdlXHJcblxyXG4gICAgLy8gc2V0IGJhY2tncm91bmQgaW1hZ2VcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9YHVybCgke21haW5wYWdlYmFja2dyb3VuZH0pYFxyXG5cclxuXHJcblxyXG4gICAgLy8gd2UgYXJlIHBvcHVsYXRpbmcgdGhlIGRvbSwgd2UgY2FuIGFsc28gc3dpdGNoIHRoZSBoaWdobGlnaHRlZCBwcm9qZWN0IVxyXG4gICAgLy8gdGhpcyBmdW5jdGlvbiBwb3B1bGF0ZXMgdGhlIHRvZG9saXN0c1xyXG5cclxuICBcclxuXHJcbmxldCBwcm9qZWN0ID0gXCJcIlxyXG5sZXQgcHJvamVjdHNldCA9IFwiXCJcclxuXHJcbmNvbnN0IHRvZG9hcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZWN0aW9uJylcclxuXHJcblxyXG5cclxuLy8gc2V0IHRoZSBkaXNwbGF5IHRvIGJlIGJsYW5rIVxyXG5cclxudG9kb2FyZWEuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuaWYgKHByb2plY3RvYmplY3QgPT0gXCJBbGxcIiB8fCBwcm9qZWN0b2JqZWN0ID09IFwiYWxsXCIpIHtwcm9qZWN0c2V0ID0gXCJkZWZhdWx0cHJvamVjdHNcIlxyXG4vLyBlbnN1cmUgYWxsIGlzIGhpZ2hsaWdodGVkISFcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZCcpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpXHJcbiAgICBpZiAoZWxlbS5kYXRhc2V0LnRpdGxlID09IFwiYWxsXCIgKSB7ZWxlbS5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJyl9XHJcbn0pXHJcblxyXG59XHJcblxyXG5lbHNlIGlmIChwcm9qZWN0b2JqZWN0ID09IFwidG9kYXlcIikge3Byb2plY3RzZXQgPSBcImRlZmF1bHRwcm9qZWN0c1wifVxyXG5cclxuZWxzZSBpZiAocHJvamVjdG9iamVjdCA9PSBcInRoaXN3ZWVrXCIpIHtwcm9qZWN0c2V0ID0gXCJkZWZhdWx0cHJvamVjdHNcIn1cclxuXHJcbmVsc2Uge3Byb2plY3RzZXQgPSAncHJvamVjdHMnfVxyXG5cclxuXHJcblxyXG4vLyB1cGRhdGUgYWxsIGFycmF5IGJhc2VkIG9uIGFsbCBvYmplY3RzIHdpdGhpbiBjdXN0b20gcHJvamVjdHMhISBiZWZvcmUgd2UgcmVuZGVyIGRpc3BsYXkhXHJcblxyXG4gICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiBcclxuICAgIC50aGVuKChvKSA9PiB7XHJcblxyXG4gICAgXHJcbiAgIC8vIGFsbCBpcyBiYXNlZCBvbiBjdXN0b20gcHJvamVjdHMsIGJ5IGl0ZXJhdGluZyBvdmVyIHRoZW0gYWxsXHJcbiAgIC8vIHByZSBzb3J0IGVhY2ggcHJvamVjdCBhcnJheSBiZWZvcmUgcGFzc2luZyB0byBhbGwuLlxyXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gbG9vcCBvdmVyIHRoZSBwcm9qZWN0IGFuZCBhdCBlYWNoIGtleSwgY2FsbCB0aGUgc29ydCBmdW5jdGlvblxyXG4gICAgICAgIC8vIGFuZCBzZXQgdGhhdCBlcXVhbCB0byB0aGUga2V5cyB2YWx1ZS4uXHJcblxyXG4gICAgICAgIC8vIGxvb3Agb3ZlciB0aGUgcHJvamVjdHMgb2JqZWN0IGF0IHByb2plY3Qga2V5IGFycmF5XHJcbiAgICAgICAgLy8gc2V0IHRoYXQgYXJyYXkgZXF1YWwgdG8gdGhlIGFycmF5IHNvcnRlZCBcclxuICAgICAgICAvLyBhcnJheSBzb3J0ZWQgYmFzZWQgb24gZGF0ZS4uXHJcblxyXG4gZm9yIChsZXQgcHJvcCBpbiBvLnByb2plY3RzKSB7XHJcblxyXG4gICAgLy8gc2tpcCBpZiBhcnJheSBsZW5ndGggMC4uXHJcblxyXG4gICAgaWYgKG8ucHJvamVjdHNbcHJvcF0ubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICBvLnByb2plY3RzW3Byb3BdID0gby5wcm9qZWN0c1twcm9wXS5zb3J0KGNvbXBhcmVGbilcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8ucHJvamVjdHNbcHJvcF0ubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBhcnJheSBsb2NhdGVkIGF0IGtleSBvbiBwcm9qZWN0cyBhcnJheVxyXG4gICAgICAgIC8vIGxvb3Agb3ZlciBlYWNoIG9iamVjdCBpbiBlYWNoIGFycmF5IGFuZCBhc3NpZ24gaXQgYW4gaW5kZXggdmFsdWUgd2l0aGluIHRoZSBvYmplY3QnXHJcbiAgICAgICAgLy8gZG9uZSBhZnRlciBzb3J0aW5nIGFzIHRoZXNlIHdpbGwgY2hhbmdlIVxyXG4gICAgICAgIG8ucHJvamVjdHNbcHJvcF1baV0uaW5kZXggPSBpXHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gfVxyXG5cclxuXHJcblxyXG4gZnVuY3Rpb24gY29tcGFyZUZuKGEsIGIpIHtcclxuICAvLyBjb25zb2xlLmxvZyhhLmRhdGUsJ2EnLCBiLmRhdGUsICdiJywgYS5kYXRlIDwgYi5kYXRlKVxyXG4gXHJcbiAgIC8vIGlmIGZpcnN0IGRhdGUgaXMgbGVzcyB0aGFuIHNlY29uZCBkYXRlLCBvcmRlciBpdCBsYXN0XHJcbiAgIGlmIChhLmR1ZWRhdGUgPCBiLmR1ZWRhdGUpIHtcclxuICAgICByZXR1cm4gLTE7XHJcbiAgIH1cclxuICAgaWYgKGEuZHVlZGF0ZSA+IGIuZHVlZGF0ZSkge1xyXG4gICAgIHJldHVybiAxO1xyXG4gICB9XHJcbiAgIC8vIGEgbXVzdCBiZSBlcXVhbCB0byBiXHJcbiAgIHJldHVybiAwO1xyXG4gfVxyXG5cclxuXHJcblxyXG4oZnVuY3Rpb24gc29ydEFsbCgpIHtvLmRlZmF1bHRwcm9qZWN0cy5hbGwgPSBbXVxyXG4gICAgZm9yIChsZXQgcHJvcCBpbiBvLnByb2plY3RzKSB7XHJcblxyXG5cclxuICAgICAgICAvLyB0aGUgcHJvcCBpbiBvLnByb2plY3RzIGlzIHRoZSBrZXkgY29ycmVzcG9uZGluZyB0byB0aGUgYXJyYXkgb2YgdG9kbyBvYmplY3RzXHJcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGxvb3Agb3ZlciB0aGlzIGFycmF5IGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgZGVmYXVsdCBwcm9qZWN0XHJcbiAgICAgICAgLy8gYWxsIGFycmF5IGJlZm9yZSByZW5kZXJpbmcgdGhlIGRvbVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIG8ucHJvamVjdHNbcHJvcF0uZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIHNvIGZvciBldmVyeSBjdXN0b20gcHJvamVjdCB0b2RvIG9iamVjdCwgd2Ugd2FudCB0byBwb3B1bGF0ZSB0aGUgYWxsIGFycmF5IVxyXG4gICAgICAgICAgICAvLyBhZnRlciBwb3B1bGF0aW5nIHRoZSBhcnJheSwgd2Ugd2lsbCBzb3J0IGl0IVxyXG4gICAgICAgICAgICBvLmRlZmF1bHRwcm9qZWN0cy5hbGwucHVzaChlbGVtKVxyXG5cclxuLy8gYnV0IG5vdCB3ZSBzb3J0IGFsbCBhZ2Fpbiwgd2Ugc29ydGVkIGVhY2ggY3VzdG9tIHByb2plY3QgYXJyYXkgaW5pdGlhbGx5XHJcbi8vIHRoZW4gd2UgYXBwZW5kZWQgZXZlcnkgb2JqZWN0IGZyb20gZXZlcnkgYXJyYXkgb250byB0aGUgYWxsIGFycmF5XHJcbi8vIHRoZXkgYXJlIHNvcnRlZCBieSBkYXRlIGJ1dCBieSBhcnJheSwgc28gd2hlbiBhbGwgY29tYmluZWQsIHRoZSBkYXRlcyBtdXN0IGJlIHJlIHNvcnRlZFxyXG4vLyBkYXRlcyBzb3J0ZWQgYmVsb3dcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggb2Ygby5kZWZhdWx0cHJvamVjdHMuYWxsKSB7XHJcbiAgICAgICAgICAgICBvLmRlZmF1bHRwcm9qZWN0cy5hbGwgPSBvLmRlZmF1bHRwcm9qZWN0cy5hbGwuc29ydChjb21wYXJlRm4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgIFxyXG5cclxuIFxyXG4vLyB3ZSBhcmUgcmV0dXJuaW5nIGEgbmV3IHNvcnRlZCBhcnJheSB0byB0aGVuIHJlcGxhY2UgdGhlIGFsbCBhcnJheSB3aXRoXHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICB9KVxyXG4gICAgIFxyXG4gICAgfX0pKCk7XHJcblxyXG4vLyBhZnRlciB1cGRhdGluZyBhbGwgYXJyYXksIHVwZGF0ZSB0b2RheSBhcnJheSBhbmQgdGhpcyB3ZWVrLCBiYXNlZCBvbiBzb3J0aW5nIGFsbCBhcnJheSBieSBkYXRlIG9mIGVhY2ggb2JqZWN0XHJcbi8vIHdlIHdhbnQgby5kZWZhdWx0cHJvamVjdHMudG9kYXkgZXF1YWwgdG8gYW4gYXJyYXkgcmV0dXJuaW5nIGZ1bmN0aW9uIHRoYXQgc29ydHMgb2JqZWN0cyBiYXNlZCBvbiBhIGRhdGUga2V5IFxyXG4vL3RoYXQgY29ycmVzcG9uZCB3aXRoIHRvZGF5cyBkYXRlXHJcblxyXG4oZnVuY3Rpb24gc29ydGRheSgpIHtcclxuICBcclxuICAgIC8vIGVtcHR5IHRvZGF5IGFycmF5IGZvciBzb3J0aW5nIVxyXG4gXHJcbiAgICBvLmRlZmF1bHRwcm9qZWN0cy5hbGwuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgXHJcbmltcG9ydCgnZGF0ZS1mbnMnKVxyXG4udGhlbihcclxuICAgIChkYXRlKSA9PiB7XHJcblxyXG4gICAgLy8gY29tcGFyZSB0aGUgZGF0ZSBpbiB0aGUgcHJvamVjdCB0byB0b2RheXMgZGF0ZVxyXG4gICAgbGV0IGRhdGVlciA9IGRhdGUuZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJylcclxuICAgIGlmIChlbGVtLmR1ZWRhdGUgPT0gZGF0ZWVyICkgXHJcbiAgICB7XHJcbiBcclxuICAgICAgICAvLyBlbGVtZW50cyB3aXRoIHRvZGF5J3MgZGF0ZSwgdXNlIHRoZW0gdG8gcG9wdWxhdGUgdGhlIHRvZGF5IGFycmF5IGluIGRlZmF1bHRcclxuICAgICAgICBcclxuICAgICAgICBvLmRlZmF1bHRwcm9qZWN0cy50b2RheS5wdXNoKGVsZW0pXHJcbiAgICB9XHJcbn0pXHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuKSgpO1xyXG5cclxuKGZ1bmN0aW9uIHNvcnR3ZWVrKCkge1xyXG4gICAgLy8gZW1wdHkgdG9kYXkgYXJyYXkgZm9yIHNvcnRpbmchXHJcblxyXG4gICAgby5kZWZhdWx0cHJvamVjdHMuYWxsLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG5pbXBvcnQoJ2RhdGUtZm5zJykudGhlbigoZGF0ZSkgPT4ge1xyXG4gICAgLy8gY29tcGFyZSB0aGUgZGF0ZSBpbiB0aGUgcHJvamVjdCB0byB0b2RheXMgZGF0ZVxyXG4gaWYgKGRhdGUucGFyc2VJU08oZWxlbS5kdWVkYXRlKSA8PSBkYXRlLmFkZFdlZWtzKHBhcnNlSVNPKGRhdGUuZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJykpLCAxKSlcclxuICAgIHtcclxuICAgICAgICAvLyBlbGVtZW50cyB3aXRoIHRvZGF5J3MgZGF0ZSwgdXNlIHRoZW0gdG8gcG9wdWxhdGUgdGhlIHRvZGF5IGFycmF5IGluIGRlZmF1bHRcclxuICAgICAgICBcclxuICAgICAgICBvLmRlZmF1bHRwcm9qZWN0cy50aGlzd2Vlay5wdXNoKGVsZW0pXHJcbiAgICB9XHJcbn0pXHJcbiAgICB9KVxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBwcm9wIG9mIG9bcHJvamVjdHNldF1bcHJvamVjdG9iamVjdF0pIHtcclxuICAgICAgICAgIFxyXG4gXHJcbiAgICAgICAgICAgIC8vIHByb2plY3Qgc2V0IGRldGVybWluZXMgZGVmYXVsdCBvciBjdXN0b20gcHJvamVjdHNcclxuICAgICAgICAgICAgLy8gcHJvamVjdG9iamVjdCBkZXRlcm1pbmVzIHNwZWNpZmljIHByb2plY3QsIHdoaWNoIHRoZW4gcmV0dXJuc1xyXG4gICAgICAgICAgICAvLyBhbmQgYXJyYXkgb2Ygb2JqZWN0cywgd2hpY2ggd2Ugd291bGQgbmVlZCB0byBzb3J0IHRocm91Z2ggYW5kIHB1bGwgc3BlY2lmaWMgcHJvcGVydGllcyFcclxuICAgICAgICAgICAgLy8gdGhpcyBpcyBhIGZvciBvZiBsb29wIHdoaWNoIHNvcnRzIG92ZXIgdGhlIGFycmF5IGNhbGxlZCBieSBvW3Byb2plY3RzZXRdW3Byb2plY3RvYmplY3RdXHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBldmVyeSBrZXkgd2l0aGluIGN1c29tIHByb2plY3RzIGFuZCBhZGQgdG8gQWxsXHJcblxyXG4gICBcclxuICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IHNwZWNpZmljIHByb2plY3RcclxuICAgICAgICAgICAgLy8gcHJvamVjdG9iamVjdCBpcyB0aGUgcHJvamVjdCB3aXRoaW4gcHJvamVjdHNldFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZWUoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBydW4gdGhlIGhpZ2hsaWdodCBmdW5jdGlvbiB3aXRoIHRoZSBwcm9qZWN0IGRpdiBlcXVhbCB0byBldmVudFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0KClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gd2UgY2FuIHB1bGwgb3V0IHRoZSByZWxldmVudCBkZXRhaWxzIHZpYSBwcm9wLnRpdGxlLCBwcm9wLmR1ZWRhdGUsIGV0eFxyXG4gICAgICAgICAgICAvLyBhbmQgdGhlbiBhdHRhY2ggdGhlbSBvbnRvIG91ciBzY3JlZW4gdmlhIHRoaXMgbG9vcCwgY2xlYXIgdGhlIHNjcmVlbiBjb250ZW50IGZpcnN0IGFzIGFsd2F5cyFcclxuXHJcblxyXG4gICAgIFxyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICBvW3Byb2plY3RzZXRdW3Byb2plY3RvYmplY3RdLmZvckVhY2goKGVsZW0pID0+IHtcclxuXHJcbiAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHByb3AudGl0bGUgPz8gXCJcIlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIH0pXHJcblxyXG5cclxuICAgICAgLy8vIGNyZWF0ZSBvdXIgaW5kaXZpZHVhbCB0b2RvIGl0ZW1zIGJlbG93ISEgXHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBkaXYgdG8gaG91c2UgdGhlIGNvbnRlbnQgc2V0IHRoZSBzdHlsZXNcclxuXHJcbiAgICAgICAgICAgIGxldCB0b2RvY29udGVudGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndG9kb3RpdGxlbGluZScpXHJcbiAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9jb250ZW50JylcclxuXHJcbi8vIGNyZWF0ZSBhIG1haW4gZGl2IGVsZW1lbnQgdG8gcml2YWwgdGhlIGJ1dHRvbiBlbGVtZW50c1xyXG5jb25zdCBxdWlja2luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5xdWlja2luZm8uY2xhc3NMaXN0LmFkZCgncXVpY2tpbmZvJylcclxuXHJcbiAgICAgICAgICBsZXQgdGl0bGVzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgIHF1aWNraW5mby5hcHBlbmRDaGlsZCh0aXRsZXNlY3Rpb24pXHJcbiAgICAgICAgICB0aXRsZXNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGl0bGVzZWN0aW9uJylcclxuXHJcbiAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvcC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvdGl0bGVsaW5lJylcclxuXHJcbi8vIHNpbmNlIHdlIGFyZSBsb29waW5nIHRocm91Z2ggYW4gYXJyYXkgb2Ygb2JqZWN0cywgc2V0IHRoZSB0aXRsZSB0byBcclxuLy8gdGhlIGtleSwgdGhpcyB3aWxsIGFsbG93IHVzIHRvIGFjY2VzcyB0aGUgYXJyYXkgaGVyZSBhbmQgd2UgY2FuIGxvb3AgdGhyb3VnaCBpdCBhbmQgZGlzcGxheSB0aGUgY29udGVudHNcclxuICAgICAgICAgIFxyXG5cclxudGl0bGVzZWN0aW9uLmFwcGVuZENoaWxkKHRleHQpXHJcblxyXG4gICAgICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndG9kb3RpdGxlcycpXHJcblxyXG4gICAgICAgICAgIC8vIGZvciBlYWNoIHRvZG8gY29udGVudCB3ZSBtYWtlLCBtYWtlIGl0IHVuaXF1ZSBzbyBpdCBjYW4gaGF2ZSB1bmlxdWUgZXZlbnRzIChsaWtlIGJlaW5nIHJlbW92ZWQhKVxyXG4gICAgICAgICAgIC8vIGFkZCB0aGUgaW5kZXggYXMgd2VsbCwgd2hpY2ggd2Ugd2lsbCBkeW5hbWljYWxseSB1cGRhdGUgd2hlbiB3ZSBhZGp1c3QgdGhlIGFycmF5cyFcclxuXHJcbiAgICAgICAgICAgIHRvZG9hcmVhLmFwcGVuZENoaWxkKHRvZG9jb250ZW50ZGl2KVxyXG4gICAgICAgICAgICB0b2RvY29udGVudGRpdi5kYXRhc2V0LnByb2plY3QgPSBwcm9wLnRpdGxlXHJcbiAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LmRhdGFzZXQucHJvamVjdHNldD0gcHJvcC5wcm9qZWN0XHJcbiAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LmRhdGFzZXQuaW5kZXggPSBwcm9wLmluZGV4XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgYnV0dG9uIGNvbnRhaW5lciEgdG8gZ28gYmVzaWRlIHRvZG9zZWN0aW9uXHJcblxyXG4gICAgICAgICAgICBjb25zdCBidXR0b25jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBidXR0b25jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uY29udGFpbmVyJylcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBleHBhbmQgYnV0dG9uXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICAgIGV4cGFuZC5zcmMgPSBwbHVzcXVhcmVcclxuICAgICAgICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmRidXR0b24nKVxyXG4gICAgICAgICAgYnV0dG9uY29udGFpbmVyLmFwcGVuZENoaWxkKGV4cGFuZClcclxuXHJcbiAgICAgICAgICAvLyBhZGQgYW4gZXZlbnQgdG8gZWFjaCBleHBhbmQgYnV0dG9uIVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBleHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG5cclxuLy8gY3JlYXRlIGEgdG9kbyBjb250ZW50IGRpdiB0aGF0IHdlIHdpbGwgYXBwZW5kIGFuZCByZW1vdmUhXHJcblxyXG5cclxuICAgICAgICAgICBjb25zdCB0b2RvaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgdG9kb2luZm8uY2xhc3NMaXN0LmFkZCgndG9kb2luZm8nKVxyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGEgZm9ybSBlbGVtZW50IG9uIHRoZSB0b2RvLi5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvZm9ybScpXHJcblxyXG5cclxuICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGNyZWF0ZSB0aGUgY29udGVudCB0aGF0IHdpbGwgcG9wdWxhdGUgdGhpcyB0b2RvXHJcbiAgICAgICAgICAgLy8gdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgY29tcGxldGVkP1xyXG4gICAgICAgICAgIC8vIGFuZCBhbHNvIG1ha2UgaXQgcG9zc2libGUgdG8gZWRpdCB0aGUgdmFsZXMgYnkgY2xpY2tpbmcgaW4gdGhlIGZpZWxkcyFcclxuICAgICAgICAgICAvLyB3ZSBjYW4gYWxyZWFkeSBjaGFuZ2UgY29tcGxldGVkIGFuZCBwcmlvcml0eVxyXG4gICAgICAgICAgIC8vIHNvIG1ha2UgaXQgc28gdGhhdCB3ZSBjYW4gZWRpdCBkZXNjcmlwdGlvbiwgdGl0bGUgYW5kIGRhdGVcclxuICAgICAgICAgICAvLyBhZnRlciB3ZSBlZGl0IHRoZXNlIHRoaW5ncywgcmVmcmVzaCB0aGUgZGlzcGxheSBvZiB0aGF0IGluZGl2aWR1YWwgdG9kby4uXHJcbiAgICAgICBcclxuICAgICAgICAgICAgLy8gdG9kb2lucHV0c1xyXG4gICAgICAgICBcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWxzID0gWydUaXRsZScsICdEZXNjcmlwdGlvbicsICdEdWVkYXRlJ11cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbGFiZWwgZm9yIGVhY2ggaW5wdXQgXHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgICAgICAgICBsYWJlbC5mb3IgPSBsYWJlbHNbaV1cclxuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbHNbaV1cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGlucHV0XHJcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgICAgICAgICBpbnB1dC5uYW1lID0gJ3RpdGxlJ1xyXG4gICAgICAgICAgICBpbnB1dC5pZCA9ICd0aXRsZSdcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAobGFiZWxzW2ldID09ICdEdWVkYXRlJykge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5pZCA9IFwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5uYW1lPSAnZGF0ZSdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGxhYmVsc1tpXSA9PSAnRGVzY3JpcHRpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuICAgICAgICAgICAgICAgIGlucHV0LmlkID0gXCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICAgICAgIC8vIGFwcGVuZCBpbnB1dCBvbnRvIGxhYmVsXHJcbiAgXHJcbiAgICAgICAgICAgIC8vIGFwcGVuZCBsYWJlbCBob3VzaW5nIGlucHV0IG9udG8gZm9ybS4uXHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIGFkZCBhIGJ1dHRvbiB0byBzdWJtaXQgdGhlIGZvcm1cclxuXHJcbiAgICAgICAgIGNvbnN0IHN1Ym1pdHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICBzdWJtaXR0b2RvLnRleHRDb250ZW50ID0gJ1VwZGF0ZSBUb2RvISdcclxuXHJcbiAgICAgICAgIC8vIGZvciBsYXRlciBtYW5pcHVsYXRpb24sIGFkZCBhIGNsYXNzIHRvIHN1Ym1pdCBidXR0b25cclxuICAgICAgICAgc3VibWl0dG9kby5jbGFzc0xpc3QuYWRkKCdzdWJtaXR0b2RvJylcclxuICAgICAgICAgc3VibWl0dG9kby50eXBlID0gJ3N1Ym1pdCdcclxuXHJcbiAgICAgICAgIC8vIGFwcGVuZCBidXR0b24gdG8gZm9ybVxyXG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdHRvZG8pXHJcbiAgICAgICAgIGZvcm0ubWV0aG9kID0gJ2dldCdcclxuXHJcbiAgICAgICAgIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKVxyXG4gICAgICAgICB0aXRsZS52YWx1ZSA9IHByb3AudGl0bGVcclxuICAgICAgICAgXHJcbiAgICAgICAgIGNvbnN0IGRhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJylcclxuICAgICAgICAgZGF0ZS52YWx1ZSA9IHByb3AuZHVlZGF0ZVxyXG5cclxuICAgICAgICAgY29uc3QgZGVzYyA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJylcclxuICAgICAgICAgZGVzYy52YWx1ZSA9IHByb3AuZGVzY3JpcHRpb25cclxuXHJcbiAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzdWJtaXQgZXZlbnQgb24gZm9ybSBjb250YWluZXIsIGxvZyB0aGUgdmFsdWVzIHRoYXQgaXQgbWFrZXMuLlxyXG5cclxuICAgXHJcbiAgICAgICAgICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgICAgICAgICAudGhlbiAoKG8pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgcmVsZXZhbnQgdG9kbyB3aXRoIHRoZSBuZXcgaW5mb3JtYXRpb24uLlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucHJvamVjdHNldFxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleFxyXG5cclxuICAgICAgICAgICAgICAgLy8gbm93IHVwZGF0ZSBwcm9qZWN0IGF0IGluZGV4IGF0IHZhbHVlXHJcbiAgICAgICAgICAgICAgIC8vIGFuZCBhbHNvIHVwZGF0ZSB0aGUgY29tcGxldGVkIHN0YXR1cyBpZiBpdCBoYXMgY2hhbmdlZCwgYXMgd2VsbCBhcyB0aGUgcHJpb3JpdHkuLlxyXG4gICAgICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZScpXHJcbiAgICBcclxuICAgICAgICAgICAgICAgdmFyIHByaW9yaXR5ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWlja2luZm8nKS5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5YnV0dG9uJylcclxuICAgICAgICAgICAgICAgaWYgKHByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygncHJpb3JpdHl3cmFwcGVybG93JykpIHtcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gXCJwcmlvcml0eS1sb3dcIlxyXG5cclxuICAgICAgICAgICAgICAgfVxyXG5lbHNlICBpZiAocHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmlvcml0eXdyYXBwZXJtZWQnKSkge1xyXG4gICAgcHJpb3JpdHkgPSBcInByaW9yaXR5LW1lZFwiXHJcblxyXG59XHJcbmVsc2UgIGlmIChwcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3ByaW9yaXR5d3JhcHBlcmhpZ2gnKSkge1xyXG4gICAgcHJpb3JpdHkgPSBcInByaW9yaXR5LWhpZ2hcIlxyXG5cclxufVxyXG5cclxuICAgICBcclxuICAgICAgICAgICAgICAgLy8gbm93IHRoYXQgd2UgaGF2ZSB1cGRhdGVkIHRoZSByZWx2YW50IHRvZG8sIGxldHMgcmUgcmVuZGVyIHRoaXMgc3BlY2lmaWMgdG9kb1xyXG4gICAgICAgICAgICAgICAvLyBsZWF2aW5nIGl0IGV4cGFuZGVkIGFuZCBldmVyeXRoaWduIGVsc2UgYWxvbmVcclxuXHJcbiAgICAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgdGl0bGUgY29udGVudCB0byB1cGRhdGVkIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggKVxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvdGl0bGVsaW5lJykudGV4dENvbnRlbnQgPSB0aXRsZS52YWx1ZVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gZGVzYy52YWx1ZVxyXG5cclxuXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgZGF0ZVxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL2luZGV4LmpzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoZSBkYXRlIGlzIHRvZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBpdCBpcyB0b2RheSwgY2hhbmdlIHRoZSB0ZXh0IHRvIER1ZSBUb2RheSFcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZS52YWx1ZSA9PSBvLmRhdGUgfHwgZGF0ZS50ZXh0Q29udGVudCA9PSBvLmRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZWJ1dHRvbicpLnRleHRDb250ZW50ID0gXCJEVUUgVE9EQVlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBlbHNlIHsgICAvLyBpZiBpdCBpcyBub3QgdG9kYXlcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZWF2ZSBkYXRlIHZhbHVlIHVuY2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCB1cGRhdGUgdGhlIGRpdnYgd2l0aCBkYXRlIHZhbHVlIVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2RheScsIGRhdGUudmFsdWUsIG8uZGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS50ZXh0Q29udGVudCA9IGRhdGUudmFsdWV9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSBwcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgLy8gd2lsbCB1cGRhdGUgYXV0b21hdGljYWxseSBhcyBpdCBhbHRlcnMgdGhlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSBjb21wbGV0ZWQgc3RhdHVzIVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gbm93IHVwZGF0ZSB0aGUgY3VzdG9tIHByb2plY3Qgd2l0aCB0aGUgcmVsZXZhbnQgY2hhbmdlcy4uXHJcblxyXG4gICAgICAgICAgICAgICAgby5wcm9qZWN0c1twcm9qZWN0XVtpbmRleF0udGl0bGUgPSB0aXRsZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgby5wcm9qZWN0c1twcm9qZWN0XVtpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjLnZhbHVlXHJcbiAgICAgICAgICAgICAgICBvLnByb2plY3RzW3Byb2plY3RdW2luZGV4XS5kdWVkYXRlID0gZGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgby5wcm9qZWN0c1twcm9qZWN0XVtpbmRleF0uY29tcGxldGVkID0gY29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICBvLnByb2plY3RzW3Byb2plY3RdW2luZGV4XS5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvLnByb2plY3RzW3Byb2plY3RdW2luZGV4XSlcclxuICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgIHRvZG9pbmZvLmFwcGVuZENoaWxkKGZvcm0pXHJcbiAgICAgICAgIC8vIGFkZCBzdWJtaXQgYnV0dG9uIG9uIGZvcm1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIHRvIGNhbmNlbCBzdWJtaXRcclxuXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbHN1Ym1pdC50ZXh0Q29udGVudCA9ICdDYW5jZWwnXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvLyBmb3IgbGF0ZXIgbWFuaXB1bGF0aW9uLCBhZGQgYSBjbGFzcyB0byBzdWJtaXQgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdjYW5jZWxzdWJtaXQnKVxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIGJ1dHRvbiB0byBmb3JtXHJcbiAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2Vsc3VibWl0KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHdlIGNsaWNrIHRoZSBjYW5jZWwgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FuY2Vsc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IGJlaGF2dW91ciBvZiBzdWJtaXR0aXVuZyB0aGUgZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGxhcmdlIHRhZyBmcm9tIHRoZSBwYXJlbnQgY29udGFpbmVyXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsYXJnZScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN3aXRjaCB0aGUgaWNvbiBiYWNrIHRvIGEgcGx1cyFcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmM9IHBsdXNxdWFyZSlcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgLy9hbmQgcmVtb3ZlIHRoZSBhZGRlZCBjb250ZW50IHRoYXQgdGhlIHBsdXMgYWRkZWRcclxuXHJcbiAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2luZm8nKVxyXG4gICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVtb3ZlKVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICB0b2RvaW5mby5hcHBlbmRDaGlsZChmb3JtKVxyXG4gICAgICAgICAgICAgICAgICAvLyBhZGQgc3VibWl0IGJ1dHRvbiBvbiBmb3JtXHJcbiBcclxuXHJcblxyXG4gICAgICAgICAgICAvLyB3aGVuIHdlIGNsaWNrIGFuIGV4cGFuZCBpY29uLi5cclxuICAgICAgICAgICAgLy8gd2Ugd2FudCB0byBleHBhbmQgdGhhdCBzcGVjaWZpYyB0b2RvLi5cclxuXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2xhcmdlJylcclxuXHJcbiAgICAgICAgICAgIC8vIHdlIHRoZW4gc2V0IHRoZSBpbWFnZSB0byBhIG1pbnVzIG9yIGEgcGx1cywgZGVwZW5pbmcgaWYgd2UgYXJlIGFkZGluZ1xyXG4gICAgICAgICAgICAvLyBvciByZW1vdmluZyBsYXJnZVxyXG5cclxuICAgICAgICAgICBpZiAoIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbGFyZ2UnKSkge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5zcmMgPSBtaW51c3NxdWFyZVxyXG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvaW5mbylcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICBlbHNlIHtlLnRhcmdldC5zcmMgPSBwbHVzcXVhcmVcclxuICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2luZm8nKSl9XHJcblxyXG5cclxuICAgICAgICAgICAvLyBub3cgd2UgbmVlZCB0byBzdHlsZSBpdCBub3cgdGhhdCB0aGUgZGl2IGlzIGFkZGVkLCBtYXliZSB0aGUgbGFyZ2UgY2xhc3Mgd2lsbCBhbHNvIG92ZXJ3cml0ZSBob3cgd2UgbGF5IHRoaWluZ3Mgb3V0Li5cclxuXHJcblxyXG4gICAgIFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBkYXRlIGJ1dHRvbiBcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RhdGVidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCdkYXRlLWZucycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHByb3AuZHVlZGF0ZVxyXG5cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHByb3AuZHVlZGF0ZSA9PSBvLmZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpICYmIHByb3AuY29tcGxldGVkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGV0b2RvYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnZGVsZXRld2hlbmRvbmUnKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZXRvZG9idXR0b24nKS50ZXh0Q29udGVudCA9IFwiREVMRVRFXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICgnRE9ORSEnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNlIGlmIChwcm9wLmR1ZWRhdGUgPT0gby5mb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKSAmJiBwcm9wLmNvbXBsZXRlZCAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRldG9kb2J1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2RlbGV0ZXdoZW5kb25lJylcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGV0b2RvYnV0dG9uJykudGV4dENvbnRlbnQgPSBcIlhcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gKCdEVUUgVE9EQVknKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbi8vIGNyZWF0ZSBwcmlvcml0eSBidXR0b24hXHJcblxyXG4gICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eXRvZG9idXR0b24nKVxyXG4gICAgICAgICAgICBidXR0b24uaWQgPSAncHJpb3JpdHlidXR0b24nXHJcblxyXG5cclxuICAgICBpZiAocHJvcC5wcmlvcml0eSA9PSAncHJpb3JpdHktbG93Jykge2J1dHRvbi50ZXh0Q29udGVudCA9IFwiTFwiXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHl3cmFwcGVybG93Jyl9XHJcbiAgICAgZWxzZSBpZiAocHJvcC5wcmlvcml0eSA9PSAncHJpb3JpdHktbWVkJykge2J1dHRvbi50ZXh0Q29udGVudCA9ICdNJ1xyXG4gICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eXdyYXBwZXJtZWQnKX1cclxuICAgICBlbHNlIHtcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkhcIlxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eXdyYXBwZXJoaWdoJylcclxuICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbmNvbnRhaW5lclxyXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG5cclxuXHJcbiAgICAgZnVuY3Rpb24gcHJpb3JpdHlDaGFuZ2VyKGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgLy8gd2hlbiB3ZSBjbGljayB0aGUgc3BlY2lmaWMgdG9kbyBvYmplY3QsIHdlIHdpbGwgZ2V0IGFuIGluZGV4IHZhbHVlLCBhcyB3ZWxsIGFzIGEgcHJvamVjdCB3aGljaCB3ZSBjYW4gdXNlIFxyXG4gICAgICAgIC8vIHRvIHN3aXRjaCBpdHMgcHJpb3JpdHkhXHJcbiAgICAgICAgLy8gdGhpcyBmdW5jdGlvbiByZWNlaXZlcyB0aGUgZXZlbnRcclxuICAgICAgICAvLyBpdHMgdGhlIHRvZG8gY29udGFpbmVycyBkZXRhaWxzIHdlIHdhbnQsIG5vdCB0aGUgYnV0dG9uIGNvbnRhaW5lciAocGFyZW50KVxyXG4gICAgICAgIC8vIGJ1dCB0aGUgcGFyZW50IG9mIHRoZSBidXR0b24gY29udGFpbmVyXHJcblxyXG4gICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXInKVxyXG4gICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICAgICAgLy8gZmluZCB0aGUgc3BlY2lmaWMgcHJvamVjdCB3aXRoaW4gZGVmYXVsdCBwcm9qZWN0c1xyXG4gICAgICAgICAgICAvLyBzaW5jZSBpdHMgYW4gYXJyYXksIGFjY2VzcyBpdCBhdCB0aGF0IHNwZWNpZmljIGluZGV4XHJcbiAgICAgICAgICAgIC8vIGFuZCBhZGp1c3QgaXRzIHByaW9yaXR5XHJcbiAgICAgICAgICAgIG9iai5wcm9qZWN0c1tlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LnByb2plY3RzZXRdW2UudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXhdLnByaW9yaXR5ID0gcHJpb3JpdHkgXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlDaGFuZ2VyKGUpXHJcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09IFwiTFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJNXCJcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHl3cmFwcGVybWVkJylcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5d3JhcHBlcmxvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlDaGFuZ2VyKGUsICdwcmlvcml0eS1tZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCB3ZSBuZWVkIGEgd2F5IHRvIGFkanVzdCB0aGUgcHJpb3JpdHkgb24gdGhlIHNwZWNpZmljIHRvZG8hIVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldHMgY3JlYXRlIGEgZnVuY3Rpb24gdGhleSBjYW4gYWxsIHVzZS4uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChidXR0b24udGV4dENvbnRlbnQgPT0gXCJNXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eXdyYXBwZXJtZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eXdyYXBwZXJoaWdoJylcclxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNoYW5nZXIoZSwgJ3ByaW9yaXR5LWhpZ2gnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJMXCJcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHl3cmFwcGVyaGlnaCcpXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5d3JhcHBlcmxvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlDaGFuZ2VyKGUsICdwcmlvcml0eS1sb3cnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICB9XHJcbi8vIENyZWF0ZSBhIGNvbXBsZXRlZCBidXR0b25cclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCJcclxuXHJcbmlmIChwcm9wLmNvbXBsZXRlZCA9PSB0cnVlKSB7aW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKX1cclxuXHJcblxyXG5lbHNlIGlmIChwcm9wLmNvbXBsZXRlZCA9PSBmYWxzZSkge2lucHV0LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGNoYW5nZSBjb21wbGV0ZSBzdGF0dXMhXHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBpdCBpcyBjbGlja2VkLCB1cGRhdGUgdGhlIHRvZG8ncyBjb21wbGV0ZSBzdGF0dXMhXHJcbiAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgICAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG8ucHJvamVjdHNcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coby5wcm9qZWN0cylcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMgc2V0cyBpdCBncmVlbiB3aGVuIHdlIGNsaWNrIHRvIGNoZWNrXHJcbiAgICAgICAgICAgICAgICAgIGlmICggIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGUnKSB8fCAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgaXQgaXMgYWxyZWFkeSBjb21wbGV0ZSB3aGVuIGNsaWNrZWQsIHRoZW4gcmVtb3ZlIHRoZSBjbGFzcyBhbmQgY2hhbmdlIHRoZSBwcm9qZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZSB0ZXh0IGNvbnRlbnQgdG8gdGhlIGRhdGUgb2YgdGhlIHRvZG8sIHVubGVzcyBpdCBpcyB0b2RheSdzIGRhdGUgYXQgd2hpY2ggcG9pbnQgc2hvdyBkdWUgdG9kYXkhXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgY29tcGxldGUgc3RhdHVzIG9uIHByb2plY3QhXHJcbiAgICAgICAgICAgICAgICAgICAgby5wcm9qZWN0c1tlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LnByb2plY3RzZXRdW2UudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXhdLmNvbXBsZXRlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coby5wcm9qZWN0c1tlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0c2V0XSlcclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgYnV0dG9uIGZyb20gJ2RvbmUnXHJcbiAgICAgICAgICAgICAgICAgIGltcG9ydCAoJ2RhdGUtZm5zJylcclxuICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcC5kdWVkYXRlID09IGRhdGUuZm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS50ZXh0Q29udGVudCA9ICdEVUUgVE9EQVkhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRlbGV0ZXRvZG9idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdkZWxldGV3aGVuZG9uZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRldG9kb2J1dHRvbicpLnRleHRDb250ZW50ID0gXCJYXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGF0ZWJ1dHRvbicpLnRleHRDb250ZW50ID0gcHJvcC5kdWVkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRldG9kb2J1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2RlbGV0ZXdoZW5kb25lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGV0b2RvYnV0dG9uJykudGV4dENvbnRlbnQgPSBcIlhcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSBhZGQgdGhlIGNsYXNzIGFuZCBhZGQgdG8gcmVsZXZhbnQgcHJvamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJylcclxuICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS50ZXh0Q29udGVudCA9ICdET05FISdcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvciB0aGUgZGVsZXRlIGJ1dHRvbiByZWQgYW5kIG1ha2UgaXQgbGFyZ2VyIVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRldG9kb2J1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZXdoZW5kb25lJylcclxuICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRlbGV0ZXRvZG9idXR0b24nKS50ZXh0Q29udGVudCA9IFwiREVMRVRFXCJcclxuICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdyZWRiYWNrJylcclxuICAgICAgICAgICAgICAgICAgICBvLnByb2plY3RzW2UudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQucHJvamVjdHNldF1bZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleF0uY29tcGxldGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBuZWVkIGEgd2F5IHRvIGFsc28gc2V0IGl0IGdyZWVuIGlmIGNvbXBsZXRlZCBpcyB0cnVlIGJ5IGRlZmF1bHQhXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gdGhhdCB3aXRoaW4gdGhlIGNyZWF0aW9uIG9mIHRvZG9jb250ZW50IGRpdnNcclxuICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCd0b2RvY2hlY2tib3gnKVxyXG4gICAgICAgICAgICAgICAgICAgYnV0dG9uY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIHRpdGxlIGFuZCBidXR0b24gY29udGFpbmVyIHRvIHF1aWNrIGluZm8gdGhlbiB0byBkaXYhXHJcbiAgICAgICAgICAgICAgICAgICBxdWlja2luZm8uYXBwZW5kQ2hpbGQoYnV0dG9uY29udGFpbmVyKVxyXG4gICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYuYXBwZW5kQ2hpbGQocXVpY2tpbmZvKVxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLmNvbXBsZXRlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGF0ZWJ1dHRvbicpLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlJylcclxuICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5maXJzdENoaWxkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gXCJjaGVja2VkXCJcclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIGNyZWF0ZSBkZWxldGVkIGJ1dHRvbiB3aXRoaW4gdG9kbyBlbGVtZW50c1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb2J1dHRvbicpXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGV0b2RvYnV0dG9uJylcclxuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCJcclxuICAgICAgICAgICAgYnV0dG9uY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChidXR0b24pXHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBkZWxldGUgYnV0dG9uIFxyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgICAgIC8vIG9uIGNsaWNrLCBkZWxldGUgdGhlIHRvZG8hIHdpdGggdGhlIHJlbGV2YW50IGRldGFpbHMgZnJvbSBwYXJlbnQgdG9kbyBjb250YWluZXJcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldClcclxuXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vdG9kb21vZHVsZS5qcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICBvYmouZGVsZXRlVG9kbyhlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LnByb2plY3RzZXQsIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWZ0ZXIgd2UgZGVsZXRlIHRoZSB0b2RvLCByZXBvcHVsYXRlIHRoZSBkaXNwbGF5IEAgYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVEaXNwbGF5KCdhbGwnKVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAvLyBhZGQgdG8gZWFjaCB0b2RvIGNvbnRlbnQgdGhhdCB0b2RvJ3Mgc3BlY2lmaWMgYXJyYXkgaW5kZXggXHJcblxyXG4gICBcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9wdXBUb2RvKClcclxuICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG4gICAgYXBwZW5kVGltZSgpXHJcblxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB0byBjb2xvciBiYWNrIG9mIHNlbGVjdGVkIHByb2plY3QgcmVkIVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZFByb2plY3QoKSB7XHJcbiAgICBcclxuLy8gc2V0IHRoZSBhbGwgdGFnIGFzIHJlZCBzaW5jZSB3ZSBhcmUgZGlzcGxheWluZyBhbGwgXHJcbmNvbnN0IHJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWQnKVxyXG5yZWQuZm9yRWFjaCgoZWxlbSkgID0+IHtcclxuICAgIGlmIChlbGVtLmRhdGFzZXQudGl0bGUgPT0gXCJhbGxcIikge2VsZW0uY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpfVxyXG59KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJlZCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWQnKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdyZWRiYWNrJylcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG4vLyBkcmF3IHRoZSB0b2RvIGRpc3BsYXkhXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFJlbmRlclRvZG8oKSB7XHJcbiAgICBcclxuICBcclxuICAgIC8vIGdldCB0aGUgdG9kbyBhcmVhIGFuZCBzZXQgaXQgZXF1YWwgdG8gdGhlIGFsbCBhcnJheSBpbiBkZWZhdWx0cHJvamVjdHNcclxuICAgIC8vIHN0YXJ0IGJ5IGNsZWFyaW5nIHRoZSBhcmVhXHJcbiAgIFxyXG4gICAgcG9wdWxhdGVEaXNwbGF5KCdhbGwnKVxyXG4gICBcclxuICAgIC8vIGxvb3AgdGhlIGFycmF5IGFuZCBkcmF3IGRvbSBlbGVtZW50cyBmb3IgZWFjaCBvbmUhXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyBwb3B1cCB0b2RvIGRpc3BsYXkhXHJcbi8vIGNoYW5nZXMgY29sb3Igd2hlbiBtb3VzaW5nIG92ZXIgdGhlbSBhbmQgcmVtb3ZlcyBpdCB3aGVuIG1vdXNpbmcgb3V0XHJcbi8vIGxldHMgdGhlbSBwb3AtdXAgd2hlbiBjbGlja2VkIVxyXG5cclxuZnVuY3Rpb24gcG9wdXBUb2RvKCkge1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuLy8gc2NyaXB0IGJlbG93IHRvIG1hcmsgcHJvamVjdCB0aXRsZSByZWQgYmFzZWQgb24gaW5wdXQgYW5kIGRlZmF1bHQgdmlld1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0ZWQoKSB7XHJcblxyXG4gICAgLy8gdG8gYmUgcnVuIGFmdGVyIGRvbSBpcyBidWlsdCwgcXVlcnkgYWxsIHRpdGxlc1xyXG4gICAgLy8gd2UgYXJlIGdvaW5nIHRvIFxyXG5cclxuICAgIGNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWQnKVxyXG4gICAgdGl0bGVzLmZvckVhY2goKGVsZW0pID0+IHtcclxuXHJcbiAgICB9KVxyXG5cclxuXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGJlbG93IGFwcGVuZHMgY3VycmVudCBkYXkgaW4gdGltZSBpbiB0aGUgaGVhZGVyISB0byBiZSBjYWxsZWQgaW4gcG9wdWxhdGVEaXNwbGF5XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRUaW1lKCkge1xyXG4gICAgaW1wb3J0KCdkYXRlLWZucycpXHJcbiAgICAudGhlbigoZGF0ZSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxyXG4gICAgICAgIHRpbWUuY2xhc3NMaXN0LmFkZCgndGltZWhlYWRlcicpXHJcbiAgICAgICAgbGV0IGRheSA9IGRhdGUuZm9ybWF0KG5ldyBEYXRlKCksICdFRUVFJylcclxuICAgICAgICBsZXQgZGF5bnVtYmVyID0gZGF0ZS5mb3JtYXQobmV3IERhdGUoKSwgJ2VvJylcclxuICAgICAgICBsZXQgbW9udGggPSBkYXRlLmZvcm1hdChuZXcgRGF0ZSgpLCAnTU1NTScpXHJcbiAgICAgICAgbGV0IHllYXIgPSBkYXRlLmZvcm1hdChuZXcgRGF0ZSgpLCAneScpXHJcbiAgICAgICAgdGltZS50ZXh0Q29udGVudCA9IGAke2RheX0sIHRoZSAke2RheW51bWJlcn0gZGF5IG9mICR7bW9udGh9ICR7eWVhcn0hYFxyXG4gICAgICAgIGNvbnN0IGhlYWRlcmRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2x1bW5zJylcclxuICAgICAgICBoZWFkZXJkaXYudGV4dENvbnRlbnQgPSBcIlwiXHJcbiAgICAgICAgICAgIGhlYWRlcmRpdi5hcHBlbmRDaGlsZCh0aW1lKVxyXG4gICAgICAgIFxyXG5cclxuICAgIH0pXHJcblxyXG59IiwiaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gJy4vdG9kb21vZHVsZSdcclxuaW1wb3J0IHsgcHJvamVjdHMsIGRlZmF1bHRwcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdG1ha2VyLmpzJ1xyXG5jb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGVkJykuY2hlY2tlZFxyXG5cclxuXHJcblxyXG4vLyBsb2dpYyB0byBkZXRlcm1pbmUgcHJpb3JpdHlcclxuLy8gc2VyaWVzIG9mIHJhZGlvIGJ1dHRvbnMgbG9vcCB0aHJvdWdoIHRoZW1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtQ29udHJvbGxlcih0aXRsZSxkZXNjcmlwdGlvbixkdWVkYXRlLHByaW9yaXR5LHByb2plY3QsY29tcGxldGVkKSB7XHJcblxyXG5pZiAoY29tcGxldGVkID09IFwiXCIpIHtjb21wbGV0ZWQgPSBmYWxzZX1cclxuLy8gY3JlYXRlIGEgdG9kbyBvYmplY3QgZnJvbSB0aGUgc3BlY2lmaWVkIGlucHV0cyFcclxuXHJcbiBcclxuXHJcbiAgICAgICAgICAgLy8gYWRkIGl0IHRvIHRoZSBzcGVjaWZpYyBwcm9qZWN0Li4gIGFsbCBieSBkZWZhdWx0IG9yIHNlbGVjdGVkLi5cclxuXHJcblxyXG4gICBcclxuICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIC8vIGFuZCB0aGUgY3VzdG9tIHByb2plY3QgaXRzZWxmXHJcbiAgICAgICAgICAgIGxldCBvYmogPSBjcmVhdGVUb2RvKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZWRhdGUscHJpb3JpdHkscHJvamVjdCxjb21wbGV0ZWQpXHJcbiAgICAgICAgICAgIHByb2plY3RzW3Byb2plY3RdLnB1c2gob2JqKVxyXG5cclxuICAgICAgICAgICAgLy8gdGhlIGZ1bmN0aW9uIHJldHVybnMgYW4gb2JqZWN0IGFuZCB3ZSBwdXNoIGl0IG9udG8gdGhlIGFwcHJvcHJpYXRlIGN1c3RvbSBwcm9qZWN0cyBhcnJheVxyXG5cclxuICAvLyB3ZSBhbHNvIHdhbnQgdG8gaGF2ZSBhIGN1c3RvbSBpbmRleCBwcm9wZXJ0eSBmb3IgdGhlIHRvZG8ncyBhbmQgZmlndXJlIG91dCB0aGVpciBwb3NpdGlvbiB3aXRoaW4gdGhlaXIgcmVzcGVjdGl2ZSBhcnJheVxyXG4gIHByb2plY3RzW3Byb2plY3RdLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgZWxlbS5pbmRleCA9IGluZFxyXG4gICBcclxuICB9KVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlaW5kZXgoKSB7XHJcbiAgICAgIHByb2plY3RzW3Byb2plY3RdLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgZWxlbS5pbmRleCA9IGluZFxyXG4gICAgY29uc29sZS5sb2coJ0FSUkFZTE9PUCcsIGVsZW0pXHJcbiAgfSlcclxuICB9XHJcbiAgIFxyXG4gICAgICAgLy8gYWZ0ZXIgd2UgaGF2ZSBwdXNoZWQgdGhlIG9iamVjdCBvbnRvIHByb2plY3RzXHJcbiAgICAgICAvLyB3ZSBsb29wIHRoZSBhcnJheSBhbmQgYWRqdXN0IGluZGV4ZXMgc28gdGhlIHRvZG8ncyBoYXZlIGN1c3RvbSBpbmRleGVzIVxyXG5cclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICBcclxuICAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvLyBhcHBlbmQgdGhlIHRvZG8gdG8gdGhlIGFwcHJvcHJpYXRlIHByb2plY3QhXHJcbi8vIGl0IGlzIGVpdGhlciB0byBBbGwgcHJvamVjdHMsIG9yIGEgc3BlY2lmaWMgb25lXHJcbi8vIGZvciBhbGwgYmVsb3ciLCIvLyBwcm9qZWN0cyB3aWxsIG5lZWQgdG8gYmUgY2FwYWJsZSBvZiBzdG9yaW5nIHdoaWNoIHRvZG8ncyBiZWxvbmcgdG8gdGhlbVxuLy8gaXQgbG9va3MgY2xlYW5lciB0byBzdG9yZSBhcyBhbiBvYmplY3Qgb2YgcHJvamVjdCBuYW1lcyBhbmQgaGF2ZSB0aGUgdmFsdWVzIGVxdWFsIHRvXG4vLyBhcnJheXMgdGhhdCBjb250YWluIHRoZSByZWxldmVudCB0b2RvIG9iamVjdHMgXG5cbi8vIHdlIGNhbiBjb21lIHVwIHdpdGggYSBtYXN0ZXIgcHJvamVjdHMgb2JqZWN0LCBpZiBpbiB0aGUgVUkgd2Ugd291bGQgbGlrZSB0byBzZXBhcmF0ZSB0aGUgZGlzcGxheVxuLy8gaXQgaXMgZWFzaWVyIHRvIGhhdmUgYSBzZXBhcmF0ZSBkZWZhdWx0IHByb2plY3Qgb2JqZWN0IGFzIHdlIGNhbiBqdXN0IGxvb3Agb3ZlciBpdCBcbi8vIHRvIHBvcHVsYXRlIHRoZSBkaXNwbGF5IGFuZCBub3QgaGF2ZSB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gZGVmYXVsdCB2cyBub25cblxuLy8gYWxsIGtleSB3aWxsIGhvdXNlIGFycmF5IHRoYXQgcGFyc2VzIGFsbCBhdmFpbGFibGUgcHJvamVjdCBvYmplY3RzIGFuZCBsaXN0cyB0aGVtXG4vLyB0aGUgdG9kYXkgYW5kIHRoaXN3ZWVrIGFycmF5IHdpbGwgaGF2ZSB0byBkbyB3aXRoIHNvcnRpbmcgXG5cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRwcm9qZWN0cyA9IHtcbiAgICBhbGw6IFtdLFxuICAgIHRvZGF5OiBbXSxcbiAgICB0aGlzd2VlazogW10sXG59XG5cbi8vIHRoaXMgZnVuY3Rpb24gdG8gcG9wdWxhdGUgZGVmYXVsdCBwcm9qZWN0cywgd2hpY2ggd2lsbCBsb29wIG92ZXIgY3VzdG9tIHByb2plY3RzIVxuXG5cbi8vIHdlIHdpbGwgbWFrZSBmdW5jdGlvbnMgdG8gc29ydCBhbGwgdG8gY3JlYXRlIHRoaXMgd2VlayBhbmQgdG9kYXkhXG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0c3Rlc3QgPSB7XG4gICAgMjogW3t0aXRsZToncG9vcmFnYXMnLCBkdWVkYXRlOiAnMjAyMi0wMi0wMicsIGRlc2NyaXB0aW9uOiAncG9vcG9vQVNEQVNEQVNEJywgcHJpb3JpdHk6ICdsb3cnLCBpbmRleDogMH0se3RpdGxlOidwb29yYWdhcycsIGR1ZWRhdGU6ICcyMDIyLTAyLTAyJywgZGVzY3JpcHRpb246ICdwb29wb29BU0RBU0RBU0QnLCBwcmlvcml0eTogJ2xvdycsIGluZGV4OiAwfSx7dGl0bGU6J3Bvb3JhZ2FzJywgZHVlZGF0ZTogJzIwMjItMDItMDInLCBkZXNjcmlwdGlvbjogJ3Bvb3Bvb0FTREFTREFTRCcsIHByaW9yaXR5OiAnbG93JywgaW5kZXg6IDB9LHt0aXRsZToncG9vcmFnYXMnLCBkdWVkYXRlOiAnMjAyMy0wMi0wMicsIGRlc2NyaXB0aW9uOiAncG9vcG9vQVNEQVNEQVNEJywgcHJpb3JpdHk6ICdsb3cnLCBpbmRleDogMH1dLFxuICAgIDM6IFt7dGl0bGU6J3Bvb3JhZ2FzJywgZHVlZGF0ZTogJzIwMjItMDItMDInLCBkZXNjcmlwdGlvbjogJ3Bvb3Bvb0FTREFTREFTRCcsIHByaW9yaXR5OiAnbG93JywgaW5kZXg6IDB9XSxcbiAgICA1OiBbe3RpdGxlOidwb29yYWdhcycsIGR1ZWRhdGU6ICcyMDIyLTAyLTAyJywgZGVzY3JpcHRpb246ICdwb29wb29BU0RBU0RBU0QnLCBwcmlvcml0eTogJ2xvdycsIGluZGV4OiAwfV1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0ge1xuICBcbn1cblxuLy8yOiBbe3RpdGxlOidwb29yYWdhcycsIGR1ZWRhdGU6ICcyMDIyLTAyLTAyJywgZGVzY3JpcHRpb246ICdwb29wb29BU0RBU0RBU0QnLCBwcmlvcml0eTogJ2xvdycsIGluZGV4OiAwfSxdXG4vLyBhZGQgdGhlIGFwcHJvcHJpYXRlIHRvZG8ncyB0byB0aGVzZSBwcm9qZWN0cyBiYXNlZCBvbiB0aGUgYXBwcm9wcmlhdGUgZGF0ZXMgKGRhdGVmbiEpXG5cblxuXG4vLyBub3cgd2UgZGV2ZWxvcCBhIHdheSB0byBhZGQgY3VzdG9tIHByb2plY3RzIHRvIHRoaXMgb2JqZWN0IVxuLy8gaWYgdmlzdWFsbHkgd2Ugd2FudCB0byBzaG93IGEgY3VlIHRoYXQgdGhpcyBpcyBhbiBvcHRpb24gd2UgY2FuIGRvIHRoaXMgd2l0aCB0aGUgVUkgb3Igbm90IGluIHRoaXMgZnVuY3Rpb25cbi8vIHJ1bm5pbmcgYWRkIHByb2plY3Qgc2hvdWxkIGFkZCBhIHByb1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3RuYW1lKSB7XG5cbiAgICBcblxuICAgIC8vIGlmIHdlIHRyeSB0byBhZGQgYSBwcm9qZWN0IG5hbWUgdGhhdCBhbHJlYWR5IGV4aXN0cywgd2UgY2FuIHJldHVybiBhIGNvbmZpcm1hdGlvbiBcbmlmIChwcm9qZWN0bmFtZSA9PSBcIlwiKSB7cmV0dXJufVxuXG5cbmlmIChwcm9qZWN0cy5oYXNPd25Qcm9wZXJ0eShwcm9qZWN0bmFtZSkpIHtcbiAgICBjb25zb2xlLmxvZygnbG9ncyB0aGF0IHByb3BlcnR5IGV4aXN0cyB3aXRoaW4gcHJvamVjdG1ha2VyLmpzJylcblxuICAgIHJldHVybiBmYWxzZVxuICAgIC8vIGNhbGwgZG9tIGZ1bmN0aW9uIHRvIHR1cm4gZmllbGQgcmVkIGFuZCBjaGFuZ2UgcGxhY2Vob2xkZXIgdG8gZXhpc3RzIVxuXG5cbn1cblxuICAgIC8vIGVsc2Ugd2UgYWRkIHRoZSBwcm9qZWN0IG5hbWUgYXMgYSBrZXkgdG8gcHJvamVjdCBvYmplY3RcbiAgICAvLyBldmVudHVhbGx5IHdlIHdpbGwgYXBwZW5kIHRvZG8ncyB0byB0aGVzZSBjYXRlZ29yaWVzIGJhc2VkIG9uIHNvbWUgY3JpdGVyaWEgXG5cbnByb2plY3RzW3Byb2plY3RuYW1lXSA9IFtdXG5sZXQgcmVzdWx0ID0gcHJvamVjdG5hbWVcblxuXG5cbmNvbnNvbGUubG9nKCdERUZBVUxUIFBST0pTIEFSUkFZISEhJylcbmNvbnNvbGUubG9nKHByb2plY3RzLCAnY3VycmVudCBwcm9qZWN0cyBvYmplY3QnKTtcblxuICBcblxuXG5cbnJldHVybjtcbn1cblxuXG5cblxuXG5cblxuLy8gd2Ugd2FudCB0byBkZWxldGUgdGhleSBrZXkgb2YgdGhlIHByb2plY3Rcbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgcHJvamVjdCwgd2UgbmVlZCBhIHdheSB0byBkZXRlcm1pbmUgd2hpY2ggcG9zaXRpb25cbi8vIGluIHRoZSBhcnJheSB0aGUgcHJvamVjdCBpcyB0byByZW1vdmVcbi8vc3VwcGx5IHRoaXMgYW4gaW5kZXggYXMgdGhpcyB3aWxsIGJlIHZpc3VhbCBiYXNlZFxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcblxuICAgICAgICBkZWxldGUgcHJvamVjdHNbcHJvamVjdF1cbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXG59XG5cblxuXG4vLyBmdW5jdGlvbiBiZWxvdyByZXBvcnRzIG5hbWUgb2YgcHJvamVjdHMgY3VycmVudGx5IGluIGxpc3QgYW5kIGFwcGVuZCB0byBhbiBhcnJheVxuXG5leHBvcnQgbGV0IGN1cnJlbnRDdXN0b21Qcm9qZWN0cyA9IFtdXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgY3VycmVudEN1c3RvbVByb2plY3RzID0gW11cblxuXG4gICAgICAgIGZvciAobGV0IHByb2plY3QgaW4gcHJvamVjdHMpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDdXN0b21Qcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcblxuXG4gICAgfSIsIi8vIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIHRvZG8gb2JqZWN0c1xuZnVuY3Rpb24gdXBkYXRlQWxsKCkge1xuICAgIFxuICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxuICAgIC50aGVuKChvKSA9PiB7XG4gICAgICAgIG8uZGVmYXVsdHByb2plY3RzLmFsbCA9IFtdXG5cbiAgICAgICAgLy8gbG9vcCBvdmVyIGFsbCBjdXN0b20gcHJvamVjdCBhcnJheXMgYW5kIGFkZCB0byBBbGxcbiAgIFxuICAgICAgIGZvciAobGV0IHByb3AgaW4gby5wcm9qZWN0cykge1xuICAgICAgICAvLyBpbiBoZXJlIHByb3AgaXMgZWFjaCBvYmplY3Qga2V5IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGFycmF5IGhvbGRpbmcgb2JqZWN0c1xuICAgICAgICAvLyBvZiBlYWNoIHByb2plY3RzIHRvZG8nc1xuXG4gICAgICAgIC8vIHdlIG11c3QgbG9vcCBvdmVyIGVhY2ggcHJvcCBhbmQgYWRkIHRvIEFsbCFcblxuXG5cblxuICAgICAgIH1cbiAgICB9KVxufVxuXG5sZXQgdG9kb2NhdGNoMSA9IFtdXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCAgcHJvamVjdCwgY29tcGxldGVkID0gZmFsc2UpIFxueyAgIFxuXG5cbiAgICBsZXQgb2JqID0ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksICBwcm9qZWN0LCBjb21wbGV0ZWR9XG4gICAgXG5cbiAgICBjb25zb2xlLmxvZyggJ3RvZG9jYXRjaCcpXG5cbiAgICAvLyB3aGVuIHdlIG1ha2UgYSB0b2RvLCB3ZSB3YW50IHRvIHJlZnJlc2ggdGhlIGFsbCBvYmplY3QgYWdhaW4gd2hpY2ggaXMgYSBjb2xsZWN0aW9uIG9mIGV2ZXJ5IHByb2plY3RzIG9iamVjdCFcbiAgICB1cGRhdGVBbGwoKSBcbiAgICBcblxuXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCAgcHJvamVjdCwgY29tcGxldGVkfVxufVxuXG5cbi8vIHdlIHdhbm5hIHVwZGF0ZSB0aGUgYWxsIG9iamVjdCBhZnRlciBtYWtpbmcgYSB0b2RvIVxuXG4vLyBmdW5jdGlvbiB0byBzZXQgY29tcGxldGUgb2YgdG9kbyBvYmplY3QgdG8gdHJ1ZSB0YWtlcyBhIHRvZG8gb2JqZWN0IGFzIGFuIGFyZ3VtZW50XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb21wbGV0ZShvYmopIHtcbiAgICBcbiAgICBpZiAob2JqLmNvbXBsZXRlZCkge1xuICAgIFxuICAgICAgICBvYmouY29tcGxldGVkID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIG9iai5jb21wbGV0ZWQgPSB0cnVlXG4gICAgcmV0dXJuXG59XG5cblxuLy8gZnVuY3Rpb24gdG8gY2hhbmdlIHByaW9yaXR5IGJldHdlZW4gbG93IG1lZGl1bSBhbmQgaGlnaCB0YWtlcyBhIHRvZG8gb2JqZWN0IGFzIGFyZ3VtZW50IGFuZCBhIHNlbGVjdGlvblxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkob2JqLCBwcmlvcml0eSkge1xuICAgIG9iai5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgcmV0dXJuXG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVG9kbyhwcm9qZWN0LCBpbmRleCkge1xuXG4gICAgLy8gd2UgaGF2ZSBhIHNwZWNpZmljIHByb2plY3QsIGFuZCBpbmRleCBvZiB0aGUgdG9kbyFcbiAgICAvLyBkZWxldGUgaXQgZnJvbSB0aGUgYXJyYXkhXG4gICAgaW1wb3J0ICgnLi9wcm9qZWN0bWFrZXIuanMnKVxuICAgIC50aGVuKChvYmopID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCwgaW5kZXgsIG9iai5wcm9qZWN0cylcbiAgICAgICAgb2JqLnByb2plY3RzW3Byb2plY3RdLnNwbGljZShpbmRleCwgMSlcblxuICAgICAgICAvLyBhZnRlciB3ZSBjdXQgdGhlIHRvZG8gb3V0LCB3ZSBtdXN0IHJlZnJlc2ggdGhlIHByb3BlciBpbmRleGVzIG9mIHRoZSBhcnJheSBlbGVtZW50cyBhZ2FpbiFcbiAgICAgICAgb2JqLnByb2plY3RzW3Byb2plY3RdLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xuICAgICAgICAgICAgZWxlbS5pbmRleCA9IGluZFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FSUkFZTE9PUCcsIGVsZW0pXG4gICAgICAgICAgfSlcblxuXG4gICAgICAgIFxuICAgIH0pXG4gICAgXG5cblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==