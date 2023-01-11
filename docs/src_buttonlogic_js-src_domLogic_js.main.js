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

console.log = console.info;






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
    const submitproject = document.querySelector('option')
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

     


     
        document.querySelectorAll('.projectselect').forEach((elem) => {
            elem.addEventListener('click', (e) => {
                console.info(e.target.value, 'currentclickedproject')
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





let proname = document.querySelector('.projectnametag')
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
            proname.textContent = 'All'
        }
        else if (e.target.id == "today"){
            proname.textContent = 'Today'
      
    
            
         
        
            e.target.classList.toggle('redback')
            ;(0,_domLogic_js__WEBPACK_IMPORTED_MODULE_4__.populateDisplay)('today')
    
        }



        else if (e.target.id == "thisweek"){
            
            console.log(e.target.id)
            e.target.classList.add('redback')

            proname.textContent = ""
            proname.textContent = 'This Week'
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

      
                 // this is the clicked project, display it under todo list!
       
                    let p = document.createElement('p')
                    console.log(e.target.dataset.title)
                  
                            proname.textContent = ""
                            proname.textContent = e.target.dataset.title
                            
                        
                    

          
                    


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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _src_images_plus_circle_svgrepo_com_6_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/images/plus-circle-svgrepo-com(6).svg */ "./src/images/plus-circle-svgrepo-com(6).svg");
/* harmony import */ var _src_images_plus_circle_svgrepo_com_7_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/plus-circle-svgrepo-com(7).svg */ "./src/images/plus-circle-svgrepo-com(7).svg");
/* harmony import */ var _src_images_minus_square_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/images/minus-square-svgrepo-com.svg */ "./src/images/minus-square-svgrepo-com.svg");
/* harmony import */ var _src_images_text_align_center_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/images/text-align-center-svgrepo-com.svg */ "./src/images/text-align-center-svgrepo-com.svg");
/* harmony import */ var _src_images_backgrounds_Hexagon_1_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/images/backgrounds/Hexagon(1).svg */ "./src/images/backgrounds/Hexagon(1).svg");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _buttonlogic_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttonlogic.js */ "./src/buttonlogic.js");
/* harmony import */ var punycode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! punycode */ "./node_modules/punycode/punycode.es6.js");
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


document.body.style.backgroundImage =`url(${_src_images_backgrounds_Hexagon_1_svg__WEBPACK_IMPORTED_MODULE_6__})`



    // set main plus image 


    document.querySelector('.plusbutton').src = _src_images_plus_circle_svgrepo_com_6_svg__WEBPACK_IMPORTED_MODULE_2__
   
Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./buttonlogic.js */ "./src/buttonlogic.js"))
.then((o) => {

    renderCustomProjects()
    initialRenderTodo()
    o.modalLogic()
    o.addButtonLogic()





})

;(0,_buttonlogic_js__WEBPACK_IMPORTED_MODULE_7__.initialproj)()
;(0,_buttonlogic_js__WEBPACK_IMPORTED_MODULE_7__.initialtodosubmit)()


}


// populate main display like todo area based on selected project!


function populateDisplay(projectobject ) {

    // set todoheader image

    document.querySelector('.todoheaderimage').src = _src_images_text_align_center_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__

    // set background image

    document.body.style.backgroundImage =`url(${_src_images_backgrounds_Hexagon_1_svg__WEBPACK_IMPORTED_MODULE_6__})`

    // set main plus image 

    document.querySelector('.plusbutton').src = _src_images_plus_circle_svgrepo_com_6_svg__WEBPACK_IMPORTED_MODULE_2__



    // we are populating the dom, we can also switch the highlighted project!
    // this function populates the todolists

  

let project = ""
let projectset = ""

const todoarea = document.querySelector('.todosection')



// set the display to be blank!

todoarea.innerHTML = ""
let proname = document.querySelector('.projectnametag')

if (projectobject == "All" || projectobject == "all") {projectset = "defaultprojects"
// ensure all is highlighted!!
document.querySelectorAll('.red').forEach((elem) => {
    elem.classList.remove('redback')
    if (elem.dataset.title == "all" ) {elem.classList.add('redback')
    proname.textContent = ""
    proname.textContent = "All"}
})

}

else if (projectobject == "today") {projectset = "defaultprojects"
proname.textContent = ""
proname.textContent = "Today"
}

else if (projectobject == "thisweek") {projectset = "defaultprojects"
proname.textContent = ""
proname.textContent = "This Week"
}

else {projectset = 'projects'
proname.textContent = ""
proname.textContent = projectobject
}



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
 if (date.parseISO(elem.duedate) <= date.addWeeks((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(date.format(new Date(), 'yyyy-MM-dd')), 1))
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
                       // although if status is complete, keep date text as 'DONE'
                        if (prop.completed == true ) { e.target.parentElement.parentElement.querySelector('.datebutton').textContent = "DONE!"
                  }
                        else if (prop.completed == false) { e.target.parentElement.parentElement.querySelector('.datebutton').textContent = "DUE TODAY"}
                       
                    }
                    
                 else {   // if it is not today
                    // leave date value unchanged
                    // and update the divv with date value!
                    console.log('today', date.value, o.date)
                    if (prop.completed == true) { e.target.parentElement.parentElement.querySelector('.datebutton').textContent ='DONE!'}
                
                else {  
              
                    e.target.parentElement.parentElement.querySelector('.datebutton').textContent = date.value
           }
                }
                    
                  
                let removetodo = e.target.parentElement.parentElement.querySelector('.todoinfo')
                e.target.parentElement.parentElement.classList.remove('large')
                e.target.parentElement.parentElement.querySelector('.buttoncontainer').querySelector('.expandbutton').src = _src_images_plus_square_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__
                e.target.parentElement.parentElement.removeChild(removetodo)
                 
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
          
// and return that specific todo to non expanded state..
console.log()


// remove the todo info that was appended on to make the card big


// and set the icon back to a plus icon!


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
            e.target.src = _src_images_minus_square_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__
            e.target.parentElement.parentElement.parentElement.appendChild(todoinfo)
           }
            
           

           else {e.target.src = _src_images_plus_square_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__
           e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement.parentElement.querySelector('.todoinfo'))}


           // now we need to style it now that the div is added, maybe the large class will also overwrite how we lay thiings out..


     
          })
          buttoncontainer.appendChild(expand)

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
        let daynumber = date.format(new Date(), 'ee')
        let month = date.format(new Date(), 'MMMM')
        let year = date.format(new Date(), 'y')

        console.log(day, daynumber, year)
        time.textContent = _index_js__WEBPACK_IMPORTED_MODULE_1__.date
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2J1dHRvbmxvZ2ljX2pzLXNyY19kb21Mb2dpY19qcy5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQzlEO0FBQ3dFO0FBQ0M7QUFDQTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0xBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNJQUEyQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhEQUFlO0FBQ25DO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsOENBQThDO0FBQ3RHLDBCQUEwQiwrQ0FBK0M7QUFDekUsZ0JBQWdCLGtJQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhIQUF1QjtBQUN4QztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNFQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0VBQWE7QUFDeEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0VBQWM7QUFDN0M7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzSUFBMkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsK0xBQWtCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNJQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsNkRBQVU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLCtMQUFrQjtBQUNyQjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOEhBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsUUFBUSxvSUFBMEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhIQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQWE7QUFDYjtBQUNBLHFEQUFxRDtBQUNyRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0lBQTJCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkhBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhIQUF1QjtBQUNqQztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0lBQTBCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhIQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSUFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBYztBQUNkLFFBQVEsc0lBQTJCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNJQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvSUFBMEI7QUFDOUM7QUFDQSxxQkFBcUI7QUFDckIsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhIQUF1QjtBQUN2QyxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0Q7QUFDVDtBQUNQO0FBQ1Y7QUFDb0I7QUFDbEQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0lBQTJCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFlBQVksOERBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOEhBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzSUFBMkI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhIQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsK0JBQStCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6ckNBO0FBQ0E7QUFDQTtBQUNpRTtBQUN4QjtBQUMrQjtBQUNDO0FBQ0w7QUFDcEU7QUFDQTtBQUN5RTtBQUN6RTtBQUN5RTtBQUN6RTtBQUNtQztBQUNuQztBQUMrRDtBQUMzQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNJQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9JQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksb0lBQTBCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4SEFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNJQUEyQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrTEFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsa0VBQWtCLENBQUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNFQUFhO0FBQzdEO0FBQ0Esb0lBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw2REFBVztBQUNYLG1FQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsMEVBQVc7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGtFQUFrQixDQUFDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzRUFBYTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzSUFBMkI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZCQUE2QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0xBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtMQUFrQjtBQUNsQjtBQUNBLGtEQUFrRCxvREFBUTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0VBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNJQUEyQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0hBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRIQUE0SCxvRUFBUztBQUNySTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2R0FBNkcsb0VBQVM7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxRUFBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGVBQWUsb0VBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0xBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUlBQXdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNJQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0xBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0lBQXlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0xBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkNBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JvQ3lDO0FBQ29CO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1REFBVTtBQUNoQyxZQUFZLHNEQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBUTtBQUNWO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzREFBUTtBQUNkO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRU87QUFDUCxTQUFTLG1HQUFtRyxFQUFFLG1HQUFtRyxFQUFFLG1HQUFtRyxFQUFFLG1HQUFtRztBQUMzWixTQUFTLG1HQUFtRztBQUM1RyxTQUFTLG1HQUFtRztBQUM1Rzs7QUFFTztBQUNQO0FBQ0E7O0FBRUEsT0FBTyxtR0FBbUc7QUFDMUc7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdPOztBQUVQOztBQUVBO0FBQ0Esd0JBQXdCOzs7QUFHeEI7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087O0FBRVA7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRU87QUFDQTtBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSEE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzSUFBMkI7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ087QUFDUDs7O0FBR0EsZUFBZTtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsWUFBWTtBQUNaOzs7QUFHQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7QUFJTzs7QUFFUDtBQUNBO0FBQ0EsSUFBSSxzSUFBNEI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQSxLQUFLO0FBQ0w7OztBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9idXR0b25sb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2RvbUxvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvZm9ybWxvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvcHJvamVjdG1ha2VyLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvdG9kb21vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtQ29udHJvbGxlciBhcyBmb3JtU3VibWl0ICB9IGZyb20gJy4vZm9ybWxvZ2ljLmpzJ1xyXG5jb25zb2xlLmxvZyA9IGNvbnNvbGUuaW5mbztcclxuaW1wb3J0IG1haW5wbHVzaW1hZ2UgZnJvbSAnLi4vc3JjL2ltYWdlcy9wbHVzLWNpcmNsZS1zdmdyZXBvLWNvbSg2KS5zdmcnXHJcbmltcG9ydCBob3ZlcnBsdXNpbWFnZSBmcm9tICcuLi9zcmMvaW1hZ2VzL3BsdXMtY2lyY2xlLXN2Z3JlcG8tY29tKDcpLnN2ZydcclxuaW1wb3J0IGNsaWNrcGx1c2ltYWdlIGZyb20gJy4uL3NyYy9pbWFnZXMvcGx1cy1jaXJjbGUtc3ZncmVwby1jb20oOCkuc3ZnJ1xyXG5cclxuXHJcblxyXG4vLyByZXNldCBpbnB1dCBmdW5jdGlvblxyXG5leHBvcnQgbGV0IGN1cnJlbnRzZWxlY3RlZHByb2plY3QgPSBcIlwiXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldElucHV0cygpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICBlbGVtLnZhbHVlID0gXCJcIlxyXG4gICAgICAgIGVsZW0uY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgaWYgKGVsZW0udHlwZSA9PSBcImRhdGVcIikge1xyXG4gICAgICAgICAgICBpbXBvcnQoJ2RhdGUtZm5zJylcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0udmFsdWUgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbS52YWx1ZSA9IGRhdGUuZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlZCcpLmNoZWNrZWQ9XCJcIlxyXG59XHJcblxyXG5cclxuLy90b2dnbGUgbW9kYWwgZnVuY3Rpb25cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1vZGFsKCkge1xyXG5cclxuICAgIGNvbnN0IG1vZGFsd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKVxyXG5cclxubW9kYWx3aW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tb2RhbCcpXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbGJhY2snKVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5jbGFzc0xpc3QudG9nZ2xlKCdiaWdoaWRlJylcclxuXHJcblxyXG5jbG9zZWxvZ2ljKClcclxufVxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBmdW5jdGlvbiBiZWxvdyBhZGRzIGNsaWNrIGV2ZW50cyB0byBjdXN0b20gcHJvamVjdCB0aXRsZSBidXR0b25zIHNvIHdoZW4gdGhleSBhcmUgY2xpY2tlZCB0aGV5IGNyZWF0ZSBhbiBldmVudFxyXG4gICAgXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gY3VzdG9tQnV0dG9uTG9naWMoKSB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tcHJvamVjdHRpdGxlJylcclxuICAgICAgICBidXR0b25zLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0LmRhdGFzZXQudGl0bGVcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVEaXNwbGF5KHRhcmdldClcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGJlbG93IGFkZHMgY2xpY2sgZXZlbnRzIHRvIHRvZG8gYnV0dG9uc1xyXG4gICAgXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdG9kb0J1dHRvbkxvZ2ljKCkge1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9idXR0b24nKVxyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gd2UgY2xpY2sgZGVsZXRlLCBjYWxsIHRoZSBkZWxldGUgdG9kbyBmdW5jdGlvbiBvbiB0aGUgc3BlY2lmaWMgdG9kbyFcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBkZWxldGUgdGhlIHRvZG8gYXQgaW5kZXggJHtlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleH0gb2YgY3VzdG9tXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0ICR7ZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQucHJvamVjdH1gKVxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL3RvZG9tb2R1bGUuanMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBvLmRlbGV0ZVRvZG8oZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQucHJvamVjdHNldCwgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFmdGVyIGRlbGV0ZSB0b2RvLCBsZXRzIHBvcHVsYXRlIHRoZSBkaXNwbGF5IVxyXG4gICAgICAgICAgICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgICAgICAgICAgLnRoZW4oKGRvbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbS5wb3B1bGF0ZURpc3BsYXkoJ2FsbCcpXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIHBsdXMgc3dpdGNoIGltYWdlIGxvZ2ljIG9uIGhvdmVyIGFuZCBjbGlja1xyXG4gICAgXHJcbiAgICAgZnVuY3Rpb24gcGx1c0J1dHRvbkltYWdlTG9naWMoKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGx1c2J1dHRvbicpXHJcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGUudGFyZ2V0LnNyYyA9IGhvdmVycGx1c2ltYWdlXHJcbiAgICAgXHJcbiAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnNyYyA9IG1haW5wbHVzaW1hZ2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5zcmMgPSBjbGlja3BsdXNpbWFnZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiByb2FzdCgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRjb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3Rib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICAgICAgY29uc3QgdG9kb3NlbGVjdGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2VsZWN0JylcclxuICAgICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICBjb25zdCBwcm9qZWN0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzZWxlY3QnKVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMobW9kdWxlLnByb2plY3RzKS5sZW5ndGggPT0gMCkge1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgaW5wdXRjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRjb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3Rib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICAgICAgY29uc3QgdG9kb3NlbGVjdGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2VsZWN0JylcclxuICAgIFxyXG4gICAgICAgIHByb2plY3Rib3guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgaW5wdXRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgICAgdG9kb3NlbGVjdGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcclxuICAgIFxyXG4gICAgdG9kb3NlbGVjdGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2ViZycpIFxyXG4gICAgcHJvamVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcbiAgICB0b2Rvc2VsZWN0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dob3N0JylcclxuICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZSB7ICAgXHJcbiAgICAgICAgdG9kb3NlbGVjdGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdG9kb3NlbGVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgdG9kb3NlbGVjdGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdnaG9zdCcpICBcclxuICAgICAgICBwcm9qZWN0YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZWJnJykgXHJcbiAgICAgICAgcHJvamVjdGJveC5jbGFzc0xpc3QuYWRkKCdoaWRlJykgXHJcbiAgICAgICAgaW5wdXRjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy9tb2RhbCBsb2dpYyB0byBiZSB1c2VkIHdpdGggcGx1cyBidXR0b24gXHJcbiAgICBcclxuICAgICBleHBvcnQgZnVuY3Rpb24gIG1vZGFsTG9naWMgKCkge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1vZGFsd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcclxuICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgIC8vIHdlIG1lZWQgYSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB3ZSBhcmUgb3BlbmluZyB0aGUgbW9kYWxcclxuICAgIC8vIGluIG90aGVyIHdvcmRzIGlmIHRoZSBwcm9qZWN0cyBvYmplY3QgaXMgZW1wdHlcclxuICAgICAgICAvLyB0aGVuIGdyZXkgb3V0IHRoZSB0by1kbyBzZWN0aW9uIGluaXRpYWxseVxyXG5cclxuXHJcbnJvYXN0KClcclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0byBzaG93IGFuZCBoaWRlIG1vZGFsIGJ5IHRvZ2dsaW5nIGEgY2xhc3MgdG8gYmUgY2FsbGVkIGluIG90aGVyIGZ1bmN0aW9uc1xyXG5cclxuICAgICAgICAvLyBmdW5jdGlvbiB0byB0b2dnbGUgd2hlbiBtb2RhbCBzaG93cyBvciBub3RcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU1vZGFsKCkge1xyXG4gICAgICAgICAgICBtb2RhbHdpbmRvdy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1vZGFsJylcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIGZ1bmN0aW9uIHRvIGNvbnNpZGVyIHdoZW4gd2luZG93IG91dHNpZGUgb2YgbW9kYWwgaXMgY2xpY2tlZCB0byBjbG9zZSBtb2RhbFxyXG4gICAgLy8gc2luY2UgbW9kYWx3aW5kb3cgaXMgdGhlIG1vZGFsIHNlbGVjdG9yIHdoaWNoIGlzIHRoZSBlbnRpcmUgYmFja2dyb3VuZFxyXG4gICAgLy8gYW55dGhpbmcgY2xpY2tlZCBpbiB0aGUgYmFja2dyb3VuZCB0aGF0IGlzIG5vdCB0aGUgbW9kYWwgY29udGVudCB3aWxsIGN1YXNlIHRoZSB3aW5kb3cgdG8gY2xvc2VcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHdpbmRvd09uQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWx3aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBtb2RhbHdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbGJhY2snKTtcclxuICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LW1vZGFsJylcclxuICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuY2xhc3NMaXN0LmFkZCgnYmlnaGlkZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHdpbmRvd09uQ2xpY2spO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBjYWxsIHByb2plY3QgYnV0dG9uIHN1Ym1pdCBsb2dpYyB3aGVuIG1vZGFsIGFjdGl2ZVxyXG4gICAgXHJcbiBcclxuICAgICAgICBwcm9qZWN0c3VibWl0bG9naWMoKVxyXG5cclxuXHJcbiAgICAgICAgLy8gY2FsbCBzdWJtaXR0b2RvIGZvcm0gbG9naWMgd2hlbiBtb2RhbCBhY3RpdmUgXHJcbiAgICAgICAgc3VibWl0TG9naWMoKVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gYmVsb3cgdG8gYWRkIGV2ZW50cyB0byBzdWJtaXRpbnB1dHMgYXQgYWxsIHRpbWVzLCBhbmQgZGVjaWRlIHdoYXQgaGFwcGVuc1xyXG4vLyB3aGVuIHN1Ym1pdCBpcyBjbGlja2VkIVxyXG4vLyBlbnN1cmUgZmllbGRzIGdvIHJlZCB3aGVuIGJhZCBkYXRhIGFuZCB0aGF0IHN1Ym1pdCB3b24ndCB3b3JrIHdpdGggYmFkIGRhdGEhIChpdW4gYmVsb3cgZnVuY3Rpb24pXHJcbiAgICBcclxuXHJcbnZhciB0b2RvdGl0bGUgPSBcIlwiXHJcbnZhciB0b2RvZGVzY3JpcHRpb24gPSBcIlwiXHJcblxyXG52YXIgdG9kb2R1ZWRhdGUgPSBcIlwiXHJcblxyXG4gaW1wb3J0KCdkYXRlLWZucycpXHJcbi50aGVuKChvKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gby5mb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKVxyXG4gICAgdG9kb2R1ZWRhdGUgPSBkYXRlXHJcbn0pXHJcblxyXG52YXIgdG9kb3ByaW9yaXR5ID0gXCJcIlxyXG52YXIgdG9kb3Byb2plY3QgPSBcIlwiXHJcbnZhciB0b2RvY29tcGxldGVkID0gXCJcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50c3RvU3VibWl0SW5wdXRzKCkge1xyXG5cclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICAgIGNvbnN0IHN1Ym1pdHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJylcclxuICAgIGNvbnN0IHN1Ym1pdGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJylcclxuICAgIGNvbnN0IHN1Ym1pdHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcclxuICAgIGNvbnN0IHN1Ym1pdGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wbGV0ZWQnKVxyXG4gICAgY29uc3Qgc3VibWl0ZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJylcclxuICAgIGNvbnN0IHN1Ym1pdHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdvcHRpb24nKVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRwcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdG9wdGlvbnMnKVxyXG4gICBcclxuXHJcbi8vIHRoaXMgc2V0cyB0b2RvIHByb2plY3QgdG8gd2hhdHMgaXMgc2VsZWN0ZWQgYnkgZGVmYXVsdCBzbyB3ZSBnZXQgc29tZXRoaW5nXHJcblxyXG4gIFxyXG50b2RvcHJvamVjdCA9IHNlbGVjdGVkcHJvai52YWx1ZVxyXG5cclxuXHJcbiAgICBzdWJtaXR0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICB0b2RvdGl0bGUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG90aXRsZSlcclxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgY29uc3Qgc3VibWl0dG9kb2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRidXR0b24nKVxyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSBcIlwiIHx8IGNoZWNrVGV4dChlLnRhcmdldC52YWx1ZSkgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgc3VibWl0dGl0bGUuY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICAgICAgIHN1Ym1pdHRvZG9idXR0b24uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlICE9IFwiXCIgJiYgY2hlY2tUZXh0KGUudGFyZ2V0LnZhbHVlKSA9PSB0cnVlKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgc3VibWl0dG9kb2J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHN1Ym1pdHRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZGJhY2snKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSlcclxuICAgIHN1Ym1pdGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICB0b2RvZGVzY3JpcHRpb24gPSBlLnRhcmdldC52YWx1ZVxyXG4gICBcclxuICAgICB9KVxyXG5cclxuICAgICBzdWJtaXRjb21wbGV0ZWQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIHRvZG9jb21wbGV0ZWQgPSBlLnRhcmdldC5jaGVja2VkXHJcblxyXG4gICAgIH0pXHJcbiAgICAgXHJcbiAgICAgc3VibWl0ZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG5cclxuICAgICAgICB0b2RvZHVlZGF0ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBcclxuXHJcbiAgICAgICBcclxuICAgICB9KVxyXG5cclxuICAgICBcclxuXHJcblxyXG4gICAgIFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0c2VsZWN0JykuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhlLnRhcmdldC52YWx1ZSwgJ2N1cnJlbnRjbGlja2VkcHJvamVjdCcpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIFxyXG4gIFxyXG4gICAgIFxyXG4gICAgIHN1Ym1pdHByaW9yaXR5LmZvckVhY2goZWxlbSA9PiB7XHJcbmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgdG9kb3ByaW9yaXR5ID0gZS50YXJnZXQuaWRcclxuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKFxyXG5cclxuICAgIClcclxuICAgIGNvbnNvbGUubG9nKHRvZG9wcmlvcml0eSlcclxuICAgIFxyXG4gfSlcclxuICAgICB9KVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4gICAgLy8gICAgLy9zdWJtaXQgYnV0dG9uIGxvZ2luIGluIG1vZGFsIHdpbmRvdyBmb3IgdG9kb1xyXG4gICAgICAgLy8gd2FudCB0byB1c2UgdGhlIGJ1dHRvbiB0byBzdWJtaXQgYW5zd2VycyB0byBhcHByb3ByaWF0ZSBtb2R1bGVcclxuICAgICAgIC8vIHRoZW4gcmVzZXQgdGhlIGlucHV0cyB0byBub3RoaW5nIGluIHRoZW0gZm9yIHRoZSBuZXh0IGFkZGl0aW9uXHJcbiAgICAgICBcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0TG9naWMoKSB7XHJcblxyXG5cclxuICAgICBcclxuICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRidXR0b24nKVxyXG4gICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAoZnVuY3Rpb24gc2VlKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuLy8gdGhpcyB0b2RvIGJ5IGRlZmF1bHQgaXMgYWRkZWQgdG8gYSBwcm9qZWN0IHVuZGVyIGN1c3RvbSBwcm9qZWN0cyxcclxuXHJcblxyXG4gICAgICAgIH0pKClcclxuICAgICAgICBcclxuXHJcblxyXG5cclxuICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG5cclxuLy8gb24gc3VibWl0IG9mIHRvZG8sIHdhbnQgdG8gcmUgdXBkYXRlIHRoZSBhbGwgYXJyYXkhXHJcblxyXG5cclxuXHJcblxyXG4gICAvLyBmdW5jdGlvbiB0byBhZGQgdG8gdG9kbyBvYmplY3RzIGxpc3RcclxuICAgICAgICBcclxuICAgICAgICAgICAvLyBydW4gZm9ybSBjb250cm9sbGVyIHdoZW4gd2UgY2xpY2sgc3VibWl0IHdoaWNoIGdldHMgdGhlIHJlbGV2ZW50IGlucHV0cyBhbmQgcnVucyB0b2RvIG1ha2VyXHJcbiAgICAgICAgIC8vIHRoZSBpbnB1dHMgd2UgbmVlZCB0byB1c2UgY29tZSBmcm9tIHRoZSBhZGRzdWJtaXRpbnB1dHNmdW5jdGlvbiFcclxuICAgICAgICAgLy8gd2Ugd2lsbCB3cml0ZSB0byBnbG9iYWwgdmFyaWFibGVzZFxyXG5cclxuXHJcbiAgICAgICAgIC8vIGNoZWNrIGlmIGlucHV0cyBhcmUgZW1wdHkhXHJcblxyXG5cclxuICAgICAgICBpZiAodG9kb3ByaW9yaXR5ID09IFwiXCIpIHt0b2RvcHJpb3JpdHkgPSBcInByaW9yaXR5LWxvd1wifVxyXG5cclxuICAgICAgICAgLy8gaWYgaW5wdXRzIGFyZSBnb29kLCBydW4gdG9kbyBmdW5jdGlvblxyXG4gICAgICAgICBmb3JtU3VibWl0KHRvZG90aXRsZSwgdG9kb2Rlc2NyaXB0aW9uLCB0b2RvZHVlZGF0ZSwgdG9kb3ByaW9yaXR5LCB0b2RvcHJvamVjdCwgdG9kb2NvbXBsZXRlZClcclxuXHJcbiAgICAgICBcclxuLy8gc2V0IGNvbXBsZXRlZCBiYWNrIHRvIGZhbHNlIVxyXG50b2RvY29tcGxldGVkID0gZmFsc2VcclxuXHJcbiAgIC8vIHJlc2V0IHRvZHVlZGF0ZVxyXG5cclxuICAgaW1wb3J0KCdkYXRlLWZucycpXHJcbiAgIC50aGVuKChkYXRlKSA9PiB7XHJcbiAgdG9kb2R1ZWRhdGUgPSBkYXRlLmZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpXHJcbiAgIH0pXHJcbiAgICAgICAgICAgXHJcbiAgIC8vIHJlbW92ZSB0aGUgbW9kYWwgYWZ0ZXIgY3JlYXRpbmcgb3VyIHRvZG8sIGFuZCByZXNldCB0aGUgaW5wdXRzIGJhY2sgdG8gdGhlaXIgZGVmYXVsdHNcclxuICAgXHJcbiAgICAgICAgICAgdG9nZ2xlTW9kYWwoKVxyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgIFxyXG4gICBcclxuICAgLy8gd2UgYWxzbyB3YW50IHRvIGVuc3VyZSBvdXIgaW5wdXRzIGFyZSB0cnV0aHlcclxuICAgLy8gb25seSB3YW50IHRvIHJlcXVpcmUgdGl0bGUsIGRlc2NyaXB0aW9uIGRhdGUgYW5kIHByb2plY3QgYW5kIGNvbXBsZXRlXHJcbiAgIFxyXG4gICBcclxuICAgICAgICAgICAvLyByZW5kZXIgdGhlIGRvbSBhZnRlciBhbGwgdGhpcywgd2hpY2ggd2lsbCB1cGRhdGUgYWxsIGVsZW1lbnRzXHJcbiAgIFxyXG4gICAgICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAvLyBhZnRlciBkb20gaXMgcmVuZGVyZWQsIHNlbGVjdCB0aGUgYWxsIHByb2plY3RzIHRpdGxlIGFuZCBtYWtlIGl0IHJlZCBhcyBpdCBpcyBub3cgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgby51cGRhdGVmb3JoaWdoKCdhbGwnKVxyXG4gICAgICAgICAgICAgICAvLyB1cGRhdGUgY3VycmVudCBwcm9qZWN0cyBzbGVjdGlvbiB0byBhbGwhXHJcbiAgICAgICAgICAgICAgIGN1cnJlbnRzZWxlY3RlZHByb2plY3QgPSAnYWxsJ1xyXG4gICAgICAgICAgICAgICBvLnBvcHVsYXRlRGlzcGxheSgnYWxsJylcclxuICAgICAgICAgICB9KVxyXG4gICBcclxuICAgICAgICBpbXBvcnQoJy4vYnV0dG9ubG9naWMuanMnKVxyXG4gICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICAgICAgb2JqLmFkZEJ1dHRvbkxvZ2ljKClcclxuICAgICAgICAgICAgb2JqLm1vZGFsTG9naWMoKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuICAgICAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBhZnRlciBkb20gaXMgcmVuZGVyZWQsIHNlbGVjdCB0aGUgcHJvamVjdCB0aGF0IHdlIGp1c3Qgc3VibWl0dGVkXHJcbiAgICAgICAgICAgICAgICBvLnVwZGF0ZWZvcmhpZ2goJ2FsbCcpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICBcclxuICAgICAgICAvLyB1cGRhdGUgdGhlIGlucHV0IHRvIHVwZGF0ZSBkaXNwbGF5IGlmIHRvZG8gYmVsb25ncyB0byBkaWZmZXJlbnQgcHJvamVjdFxyXG4gICAgICAgIFxyXG4gICAgICAgfSlcclxuICAgICAgIHJlc2V0SW5wdXRzKClcclxuXHJcbi8vIHN1Ym1pdCB0aGUgaW5wdXQgb2YgY29tcGxldGVkIGJhY2sgdG8gbm90IGNoZWNrZWRcclxuXHJcblxyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIC8vIGluaXRpYWwgc3VibWl0IGJ1dHRvbiBwcm9qZWN0IGxvZ2ljIVxyXG4gICAgICBleHBvcnQgZnVuY3Rpb24gaW5pdGlhbHByb2ooKSB7XHJcbiAgICBcclxuY29uc3QgcHJvanRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3R0aXRsZScpXHJcbmlmIChwcm9qdGl0bGUudmFsdWUgPT0gXCJcIiB8fCBjaGVja1RleHQocHJvanRpdGxlLnZhbHVlKSApIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c3VibWl0JykuZGlzYWJsZWQgPSB0cnVlXHJcblxyXG59XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGV4cG9ydCBmdW5jdGlvbiBpbml0aWFsdG9kb3N1Ym1pdCgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVkJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3JlZGJhY2snKSkge2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpfVxyXG4gICAgICAgIH0pXHJcbmNvbnN0IHN1Ym1pdGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRidXR0b24nKVxyXG5pZiAoc3VibWl0YnV0dG9uLnZhbHVlID09IFwiXCIgfHwgY2hlY2tUZXh0KHN1Ym1pdGJ1dHRvbi52YWx1ZSkgKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0YnV0dG9uJykuZGlzYWJsZWQgPSB0cnVlXHJcblxyXG59XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBmdW5jdGlvbiBjaGVja2RlZmF1bHQoc3RyKSB7XHJcbiAgICAgICAgbGV0IHRlc3QgPSAvXihhbGx8dG9kYXl8dGhpc3dlZWspJC9taVxyXG4gICAgICAgIHJldHVybiB0ZXN0LnRlc3Qoc3RyKVxyXG4gICAgfSAgIFxyXG4gICAgICBcclxuIC8vc3VibWl0IGJ1dHRvbiBsb2dpbiBpbiBtb2RhbCB3aW5kb3cgZm9yIHByb2plY3RcclxuICAgICAgLy8gd2FudCB0byB1c2UgdGhlIGJ1dHRvbiB0byBzdWJtaXQgYW5zd2VycyB0byBhcHByb3ByaWF0ZSBtb2R1bGVcclxuICAgICAgLy8gdGhlbiByZXNldCB0aGUgaW5wdXRzIHRvIG5vdGhpbmcgaW4gdGhlbSBmb3IgdGhlIG5leHQgYWRkaXRpb25cclxuIGxldCBzdWJtaXQgPSBcIlwiXHJcbiAgICBmdW5jdGlvbiBwcm9qZWN0c3VibWl0bG9naWMoKSB7XHJcblxyXG4gICAgICBcclxuICAgICAgY29uc3QgcHJvamVjdHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c3VibWl0JylcclxuICAgICAgY29uc3QgcHJvamVjdHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3R0aXRsZScpXHJcbmxldCBwcm9qZWN0dGl0bGVjaG9pY2UgPSBcIlwiXHJcbiAgICAgIC8vIGV2ZW50IGxpc3RlbmVyIG9uIHByb2plY3QgdGl0bGUgdG8gY2FwdHVyZSBjdXJyZW50IGlucHV0XHJcbiAgICAgIHByb2plY3R0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICBcclxuXHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIHByb2plY3R0aXRsZWNob2ljZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICBcclxuXHJcbiAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgLy8gaWYgcHJvamVjdCB0aXRsZSBpcyBub3QgdHJ1dGh5LCBhZGQgcmVkIGJhY2tncm91bmRcclxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gXCJcIiB8fCBjaGVja1RleHQoZS50YXJnZXQudmFsdWUpID09IGZhbHNlIHx8ICBjaGVja2RlZmF1bHQoZS50YXJnZXQudmFsdWUpID09IHRydWUpIHtcclxuICAgICAgICAgIHByb2plY3RzdWJtaXQuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gaWYgaXQgaXMgdHJ1dGh5LCByZW1vdmUgdGhlIGJhY2tncm91bmRcclxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSAhPSBcIlwiICYmIGNoZWNrVGV4dChlLnRhcmdldC52YWx1ZSkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0c3VibWl0LmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpXHJcbiAgICAgICAgICAgIHN1Ym1pdCA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICB9KVxyXG4gICAgIFxyXG4gICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciB3aGVuIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZWQgXHJcblxyXG4gICAgICBwcm9qZWN0c3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlLCBzdWJtaXQpID0+IHtcclxuXHJcbi8vIE9OIFNVQk1JVCBPRiBQUk9KRUNULCBETyBOT1RISU5HIFRPIERFRkFVTFQgQVJSQVlcclxuXHJcblxyXG4vL1xyXG5cclxuICAgXHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9IFwiXCJcclxuICAgICAgICBjb25zdCBwcm9qdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHRpdGxlJylcclxuXHJcblxyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAgICAvLyB3aGVuIHdlIGNsaWNrIHRoZSBzdWJtaXQgYnV0dG9uLCBjaGVjayB0aGUgdGV4dCByZWNlaXZlZFxyXG4gICAgICAgLy8gaWYgaXQgaXMgYSB0cnV0aHkgaW5wdXQgKG5vdCBibGFuayBhbmQgcGFzc2VzIGNoZWNrKSBydW4gaWYgYmxvY2tcclxuICAgICAgIC8vIGlmIGl0IGlzIG5vdCB0cnV0aHkgcnVuIHRoZSBlbHNlIGJsb2NrXHJcblxyXG4gICAgICAgICAgaWYgKGNoZWNrVGV4dChwcm9qZWN0dGl0bGUudmFsdWUpID09IHRydWUgJiYgcHJvamVjdHRpdGxlLnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgIFxyXG5sZXQgdmFsdWUgPSBwcm9qZWN0dGl0bGUudmFsdWVcclxuXHJcbiAgXHJcbiAgLy8gY2FsbCB0aGUgcHJvamVjdCBjb25zdHJ1Y3RvciFcclxuICBcclxuICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAudGhlbigob2JqKSA9PiB7XHJcblxyXG5cclxuICAgICAgLy8gYWRkIHByb2plY3QgdG8gdGhlIGxpc3RcclxuICAgIC8vIGVuc3VyZSBuYW1lIGRvZXNuJ3QgZXhpc3RcclxuXHJcbiAgICAgIGlmIChvYmouYWRkUHJvamVjdCh2YWx1ZSkgPT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RleGlzdHMhIGNob29zZSBhbm90aGVyJylcclxuICAgICAgICBhbGVydCgncHJvamVjdGV4aXN0cyEgY2hvb3NlIGFub3RoZXInKVxyXG5cclxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dGNvbnRhaW5lcicpXHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50JylcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCcuc2hvdy1tb2RhbCcpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgXHJcbiAgICAgIC8vIGlmIHByb2plY3QgdGl0bGUgaXMgYmxhbmssIHRocm93IGFuIGFsZXJ0IGFuZCByZSBpbnB1dCB0aGUgZGF0YVxyXG5cclxuICAgICBcclxuICAgICAgIC8vIHNldCBwcm9qZWN0IHRpdGxlIGVxdWFsIHRvIG5vdGhpbmcgYWdhaW4gXHJcbiAgICAgICByZXNldElucHV0cygpIFxyXG4gIFxyXG4gICAgICAgLy8gY2xlYXIgdGhlIG1vZGFsXHJcbiAgXHJcblxyXG4gIFxyXG4gICAgICAvL3VwZGF0ZSB0aGUgZG9tXHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgXHJcblxyXG5cclxuICAgICAgdG9nZ2xlTW9kYWwoKVxyXG4gICAgICAvL2FkZCBldmVudCBsaXN0ZW5lcnMgYWZ0ZXIgdXBkYXRpbmcgZG9tIFxyXG5cclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnQoJy4vZG9tTG9naWMnKVxyXG4gICAgLnRoZW4oKG8pID0+IHtcclxuXHJcbiAgICAgICAgLy8gcG9wdWxhdGUgdGhlIGRpc3BsYXkgd2l0aCB0aGUgdmFsdWUgb2YgdGhlIHByb2plY3Qgd2UgY3JlYXRlZCFcclxuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgby5wb3B1bGF0ZURpc3BsYXkodmFsdWUpXHJcbiAgICAgXHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgICAgIGlmIChlbGVtLmRhdGFzZXQudGl0bGUgPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIFxyXG4gICAgfSlcclxuICB9KSBcclxuICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy8gZmlyc3QgbG9nIHRoYXQgaXQgaXMgbm90IHRydXRoeSBhbmQgYWRkIGEgcmVkIGJhY2tncm91bmRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCB0cnV0aHkgYWRkIHJlZCcpXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gYWRkIHJlZCB0byBiYWNrIG9mIHByb2plY3QgdGl0bGVcclxuXHJcbiAgICAgICAgICAgIHByb2plY3R0aXRsZS5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJylcclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0dGl0bGUudmFsdWUgPT0gXCJcIiB8fCBjaGVja1RleHQocHJvamVjdHRpdGxlLnZhbHVlKSA9PSBmYWxzZSkgeyBhbGVydCgnUGxlYXNlIEVudGVyIGEgVmFsaWQgUHJvamVjdCBOYW1lJylcclxuICAgICAgICAgICAgcHJvamVjdHN1Ym1pdC5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGVuIHJ1biB0aGUgcHJvamVjdGlucHV0IGZ1bmN0aW9uIHRvIGxpc3RlbiB0byB0aGUgaW5wdXQgYW5kIGFkanVzdCB0aGUgcmVkIGJhY2tncm91bmQgYWNjb3JkaW5nbHlcclxuXHJcbiAgICAgICAgICAgICAgYWRkUHJvamVjdElucHV0UmVkKHByb2plY3R0aXRsZSlcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhhdCB0b2RvIHNjcmVlbiBkb2VzIG5vdCBjb21lIGJhY2sgdXBcclxuICAgICAgICAgICAgICAvLyBpZiB0b2RvIHNjcmVlbiBjb250YWlucyBoaWRlLCBsZWF2ZSBpdCBhbG9uZSwgZWxzZVxyXG4gICAgICAgICAgaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgIH1cclxuICAgICBcclxuICAvLyBhZGQgdmFsdWUgb2YgdGl0bGUgZmllbGQgdG8gcHJvamVjdHMgb2JqZWN0XHJcbiAgICBcclxuXHJcbiAgXHJcbiAgaW1wb3J0KCcuL2J1dHRvbmxvZ2ljLmpzJylcclxuICAudGhlbigobykgPT4ge1xyXG4gICAgICBvLmFkZEJ1dHRvbkxvZ2ljKClcclxuICAgICAgby5tb2RhbExvZ2ljKClcclxuICB9KVxyXG4gIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXHJcblxyXG5cclxuLy8gbmVhciB0aGUgZW5kIG9mIHRoZSBldmVudCB3ZSB3aWxsIHJ1biByZW1vdmUgcmVkLCBhbmQgYWZ0ZXIgaXQgcmUgYXBwbHkgcmVkIGJhc2VkIG9uIHNlbGVjdGlvblxyXG5pbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4udGhlbigobykgPT4ge1xyXG4gICAgby5yZW1vdmVSZWQoKVxyXG5cclxuICAgIFxyXG4gICAgcmVzZXRJbnB1dHMoKVxyXG4gICAgbW9kYWxMb2dpYygpXHJcblxyXG4gICAgLy8gYWZ0ZXIgcmVuZGVyIGN1c3RvbSBwcm9qZWN0cyB3ZSB3aWxsIGFkanVzdHMgaGlnaGxpZ2h0XHJcbm8ucmVuZGVyQ3VzdG9tUHJvamVjdHMocHJvamVjdHRpdGxlY2hvaWNlKVxyXG5pbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuLnRoZW4oKG8pID0+IHtcclxuICBcclxuXHJcbn0pXHJcblxyXG59KVxyXG5cclxuXHJcbiAgXHJcbiAgICAgIH0pXHJcbiAgICAgIFxyXG5cclxuXHJcbiAgfVxyXG4gICAgICBcclxuXHJcblxyXG5cclxuLy8gYWRkIHRoZSBkeW5hbWljIGJhY2tncm91bmQgdG8gaW5wdXRzLCBydW4gdGhpcyBpbiBwbHVzIGJ1dHRvbiBtb2RhbCBmdW5jdGlvbiBcclxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RJbnB1dFJlZChwcm9qZWN0dGl0bGUpIHtcclxuICAgXHJcblxyXG5cclxuICAgICAgIFxyXG4gICAgIFxyXG4gICAgICBcclxuICAgICAgICAvLyBhZGQgYSBsaXN0ZW5lciBvbiBpdCB0cmlnZ2VyZWQgYnkgYW55IGlucHV0IHRvIGxpc3RlbiBmb3IgaW5wdXRcclxuICAgICAgICBcclxuICAgICAgICBwcm9qZWN0dGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIC8vIGlmIGlucHV0IHJlbWFpbnMgYmxhbmsgYW5kIGRvZXMgbm90IHNhdGlzZnkgcmVnZXgsIGNvbnRpbnVlIHRvIGtlZXAgYmFja2dyb3VuZCByZWRcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09IFwiXCIgfHwgY2hlY2tUZXh0KGUudGFyZ2V0LnZhbHVlKSA9PSBmYWxzZSkgeyAgICAgXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJylcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGQgcmVkYmFjaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4vLyBpZiBpbnB1dCBpcyBub3QgYmxhbmsgYW5kIHBhc3NlcyByZWdleCwgcmVtb3ZlIHRoZSByZWQgYmFja2dyb3VuZFxyXG5cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoY2hlY2tUZXh0KGUudGFyZ2V0LnZhbHVlKSA9PSB0cnVlICYmIGUudGFyZ2V0LnZhbHVlICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndHJ1dGh5IGlucHV0JylcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpXHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcnVuIHRoaXMgd2l0aCBmaXJzdCBzdWJtaXQgYW5kIHRoZW4gYmUgZHluYW1pY1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbi8vIHJlZ2V4IGZvciBpbnB1dHMgXHJcblxyXG4gICAgXHJcbmZ1bmN0aW9uIGNoZWNrVGV4dChzdHIpIHtcclxuICAgIGxldCB0ZXN0MSA9IC9eW15cXHNdKltcXHchfFxcc10rJC9naVxyXG5cclxuICAgcmV0dXJuIHRlc3QxLnRlc3Qoc3RyKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgIFxyXG4vLyBmdW5jdGlvbiB0byByZXNldCB0byBkZWZhdWx0IHRvZG8gZGlzcGxheSBcclxuXHJcbmZ1bmN0aW9uIHJlc2V0VG9kbygpIHtcclxuXHJcbiAgICBcclxuICAgICAgICAvLyByZXNldCBtb2RhbCB3aW5kb3cgdG8gY3JlYXRlIHRvZG8gYnkgZGVmYXVsdFxyXG5cclxuICAgICAgICBjb25zdCB0b2RvYnV0dG9uc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZWxlY3QnKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RidXR0b25zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNlbGVjdCcpXHJcbiAgICAgICAgY29uc3QgdG9kb2lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dGNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuICAgICAgICBjb25zdCBtb2RhbHdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgIC8vIHJlbW92ZSB0aGUgbW9kYWwgd2luZG93XHJcbiAgICAgICAgICAgbW9kYWx3aW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1tb2RhbCcpXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgIHByb2plY3RpbnB1dHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgICAgICAgdG9kb2lucHV0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICAgICBwcm9qZWN0YnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZWJnJylcclxuICAgICAgICAgICB0b2RvYnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuXHJcbn1cclxuXHJcblxyXG5cclxuICAgIC8vbG9naWMgYmVsb3cgdG8gc3dpdGNoIGJldHdlZW4gY3JlYXRpb24gb2YgdG9kbyBvciBhIHByb2plY3RcclxuXHJcbmZ1bmN0aW9uIHN3aXRjaENyZWF0aW9uKCkge1xyXG4gICAgY29uc3QgdG9kb2J1dHRvbnNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2VsZWN0JylcclxuICAgIGNvbnN0IHByb2plY3RidXR0b25zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNlbGVjdCcpXHJcbiAgICBjb25zdCB0b2RvaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Y29udGFpbmVyJylcclxuICAgIGNvbnN0IHByb2plY3RpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICBcclxuICAgIHRvZG9idXR0b25zZWxlY3QuY2xhc3NMaXN0LmFkZCgnY2hhbmdlYmcnKVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZWJnKGUpIHtcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjaGFuZ2ViZycpXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICB0b2RvYnV0dG9uc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbnNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgcHJvamVjdGlucHV0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICB0b2RvYnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuICAgICAgICB0b2RvaW5wdXRzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgIHByb2plY3RidXR0b25zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgLy8gcnVuIGZ1bmN0aW9uIHdoZW4gc3dpdGNoZWQgdG8gZ3JleSBvdXQgcHJvamVjdCBzdWJtaXQhXHJcbiAgICBpbml0aWFscHJvaigpXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbnNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgcHJvamVjdGlucHV0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICB0b2RvYnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZWJnJylcclxuICAgICAgICB0b2RvaW5wdXRzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuXHJcbn1cclxuICAgIFxyXG4gICAgICAgLy8gbG9naWMgdG8gZGVsZXRlIHByb2plY3RzIGZyb20gdGhlIG1hc3RlciBvYmplY3QsIGFuZCB0aGVuIHJlZnJlc2ggdGhlIGFycmF5IGFuZCB0aGUgZG9tcmVuZGVyXHJcblxyXG4gICAgICAgZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RzKCkge1xyXG4gICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgIC50aGVuKChvYmopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhvYmoucHJvamVjdHMpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsc2UgeyBjb25zdCBkZWxldGVwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZXByb2plY3RidXR0b24nKVxyXG4gICAgIFxyXG4gICAgICAgICAgICBkZWxldGVwcm9qZWN0LmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmlndXJlIG91dCB3aGljaCBidXR0b24gd2FzIGNsaWNrZWQgYW5kIGZpbmQgYXBwcm9wcmlhdGUgcHJvamVjdCB0aXRsZVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZW1vdmUgPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBhY2NvcmRpbmcgZGl2IHdpdGggY2xhc3MgcHJvamVjdGJ1dHRvbnMgYW5kIGRhdGE9dGl0bGUgZXF1YWwgdG8gYWJvdmVcclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3aWxsIGhhbmRsZSB0aGlzIHdpdGggYSBmdW5jdGlvbiBpbiB0aGUgZG9tIGxvZ2ljIG1vZHVsZVxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgYWxzbyBuZWVkIHRvIHJlbW92ZSB0aGUgcHJvamVjdCBmcm9tIHRoZSBjdXN0b20gcHJvamVjdHMgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIGZ1bmN0aW9uIGZvciB0aGlzIHdpdGhpbiBwcm9qZWN0IG1ha2VyIG1vZHVsZVxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBwYXNzIHRoZSBhcmd1bWVudCBvZiB0aGUgYXBwcm9wcmlhdGUga2V5IGFib3ZlIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG9iai5yZW1vdmVQcm9qZWN0KHJlbW92ZSlcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4vYnV0dG9ubG9naWMuanMnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChvKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICB7by5hZGRCdXR0b25Mb2dpYygpXHJcbiAgICAgICAgICAgICAgICAgIG8ubW9kYWxMb2dpYygpfSlcclxuICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBjYWxsIHJlbmRlciBjdXN0b20gcHJvamVjdHMgc2luY2Ugd2UgaGF2ZSB1cGF0ZWQgdGhlIGFycmF5IHRoYXQgaXQgdGFrZXMgYXMgYW4gYXJndW1lbnRcclxuICAgICAgICAgICAgICAgIC8vIHRoZSBmdW5jdGlvbiBpdHNlbGYgdXBkYXRlcyB0aGUgYXJyYXkgdG8gYmUgcmVuZGVyZWQgYmFzZWQgb24gdGhlIGN1cnJlbnQgbWFzdGVyIHByb2plY3Qgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICByb2FzdCgpXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4gezNcclxuICAgICAgICAgICAgICAgIG9iai5yZW5kZXIoKX0pXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBhZnRlciB3ZSBjbGljayBvbiBkZWxldGUgY2FsbCByb2FzdCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgdG9kbyBjb250ZW50IHNob3VsZCBiZSBpbnZpc2libGVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICBcclxuICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAvLyBwcm9qZWN0IGRlbGV0ZSBidXR0b24gbG9naWNcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGRlbGV0ZUJ1dHRvbkNvbG9ycygpIHtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVwcm9qZWN0YnV0dG9uJylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlbGV0ZWJ1dHRvbnMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQudGl0bGUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGRldGVybWluZSB3aGljaCBkZWx0ZSBidXR0b24gaGFzIGJlZW4gaG92ZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdyB3ZSB3YW50IHRvIGNoYW5nZSB0aGUgYmFja2dyb3VuZCBvZiB0aGUgY29ycmVzcG9uZGluZyBkaXZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdGl0dGxlcyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdGJ1dHRvbnMnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aXR0bGVzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uZGF0YXNldC50aXRsZSA9PSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbS5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0aXR0bGVzID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0YnV0dG9ucycpXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0aXR0bGVzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5kYXRhc2V0LnRpdGxlID09IGUudGFyZ2V0LmRhdGFzZXQudGl0bGUpXHJcbiAgICAgICAgICAgICAgICAgICAge2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4vL2Z1bmN0aW9uIGhlcmUgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyB0byBwcm9kdWN0IGJ1dHRvbnMgdG8gdXBkYXRlIHRvZG8gZGlzcGxheVxyXG4vL3dlIHdpbGwgaGF2ZSBhIGZ1bmN0aW9uIHdoZW4gY2xpY2tlZCB0byB1cGRhdGUgdGhlbSBhY2NvcmRpbmdseVxyXG4vL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RUaXRsZUV2ZW50czEoKSB7XHJcbmNvbnN0IHRvZG9kaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9jb250ZW50JylcclxuXHJcbi8vIHdoZW4gd2UgY2xpY2sgYWxsLCBsb29wIHRocm91Z2ggYXJyYXkgYWxsIGFuZCBkaXNwbGF5IHRoZSBjb250ZW50cyFcclxuXHJcbmNvbnN0IGFsbHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbCcpXHJcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5JylcclxuY29uc3QgdGhpc3dlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhpc3dlZWsnKVxyXG5cclxuXHJcblxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBiZWxvdyBhZGRzIGNsaWNrIGV2ZW50cyB0byBkZWZhdWx0IHByb2plY3QgYnV0dG9uc1xyXG5pbXBvcnQge3BvcHVsYXRlRGlzcGxheSwgcmVtb3ZlUmVkfSBmcm9tICcuL2RvbUxvZ2ljLmpzJ1xyXG5pbXBvcnQgeyBmb3JtQ29udHJvbGxlciB9IGZyb20gJy4vZm9ybWxvZ2ljLmpzJ1xyXG5pbXBvcnQgeyBlbCwgdHIgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnXHJcbmltcG9ydCB7IHN1YiB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5pbXBvcnQgeyBjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiB9IGZyb20gJ2RvbXV0aWxzJ1xyXG5sZXQgcHJvbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0bmFtZXRhZycpXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0QnV0dG9uTG9naWMoKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVmYXVsdHByb2plY3QnKVxyXG4gICAgYnV0dG9ucy5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIHZhbHVlIG9mIGRlZmF1bHQgcHJvamVjdHMgYXJyYXkgdG8gYmxhbmtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGwgd2lsbCBsb29wIHRocm91Z2ggY3VzdG9tIHByb2plY3RzIGFuZCBhZGQsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kYXkgYW5kIHRoaXMgd2VlayB3aWxsIGZpbHRlciBmcm9tIGFsbCFcclxuXHJcbiAgICAgICAgICAgICAgICBvYmouZGVmYXVsdHByb2plY3RzLnRvZGF5ID0gW11cclxuICAgICAgICAgICAgICAgIG9iai5kZWZhdWx0cHJvamVjdHMuYWxsID0gW11cclxuICAgICAgICAgICAgICAgIG9iai5kZWZhdWx0cHJvamVjdHMudGhpc3dlZWsgPSBbXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHBvcHVsYXRlRGlzcGxheShlLnRhcmdldC5pZClcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgZS50YXJnZXQuaWQsIHdlIHdhbnQgdG8gY2FsbCB0aGF0IHNwZWNpZmljIGFycmF5XHJcbiAgICAgICAgICAgIC8vIGFuZCBmZWVkIGl0IHRvIGEgZG9tIGZ1bmN0aW9uIHRoYXQgbG9vcHMgdGhlIGFycmF5IGFuZCBwb3B1bGF0ZXMgdGhlIGRpc3BsYXkhXHJcbiAgICAgICAgICAgIC8vIGFsbCB3aWxsIGJlIHRoZSBkZWZhdWx0IGFyclxyXG4gICAgICAgICAgICAvLyB3ZSB0aGVuIHdhbnQgdG8gdXBkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgcHJvamVjdCB0aGF0IGlzIGhpZ2hsaWdodGVkIVxyXG4gICAgICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICAgIG8ucmVtb3ZlUmVkKClcclxuXHJcbiAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZClcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICAgICAgIHByb25hbWUudGV4dENvbnRlbnQgPSAnQWxsJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSBcInRvZGF5XCIpe1xyXG4gICAgICAgICAgICBwcm9uYW1lLnRleHRDb250ZW50ID0gJ1RvZGF5J1xyXG4gICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgICBwb3B1bGF0ZURpc3BsYXkoJ3RvZGF5JylcclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSBcInRoaXN3ZWVrXCIpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG5cclxuICAgICAgICAgICAgcHJvbmFtZS50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICAgICAgICAgcHJvbmFtZS50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnXHJcbiAgICAgICAgICAgIHBvcHVsYXRlRGlzcGxheSgndGhpc3dlZWsnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIFxyXG4gXHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gY3VzdG9tUHJvamVjdEJ1dHRvbkxvZ2ljKCkge1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b21wcm9qZWN0dGl0bGUnKVxyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBlLnRhcmdldC5pZCwgd2Ugd2FudCB0byBjYWxsIHRoYXQgc3BlY2lmaWMgYXJyYXlcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBmZWVkIGl0IHRvIGEgZG9tIGZ1bmN0aW9uIHRoYXQgbG9vcHMgdGhlIGFycmF5IGFuZCBwb3B1bGF0ZXMgdGhlIGRpc3BsYXkhXHJcbiAgICAgICAgICAgICAgICAvLyBhbGwgd2lsbCBiZSB0aGUgZGVmYXVsdCBhcnJcclxuXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGNsaWNrZWQgcHJvamVjdCwgZGlzcGxheSBpdCB1bmRlciB0b2RvIGxpc3QhXHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQudGl0bGUpXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbmFtZS50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb25hbWUudGV4dENvbnRlbnQgPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG8ucmVtb3ZlUmVkKClcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJylcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50c2VsZWN0ZWRwcm9qZWN0ID0gZS50YXJnZXQuZGF0YXNldC50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIG8ucG9wdWxhdGVEaXNwbGF5KGN1cnJlbnRzZWxlY3RlZHByb2plY3QpXHJcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvLnByb2plY3RzKVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG5cclxuZnVuY3Rpb24gdG9kb3N3aXRjaGVyKCkge1xyXG4gICAgY29uc3QgdG9kb2Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2NvbnRlbnQnKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhZGR0b2RvaW5wdXRldmVudHMoKSB7XHJcbiAgICBcclxuLy8gYWRkIHNlcGFyYXRlIGV2ZW50cyBmb3IgZWFjaCBpbnB1dCBvcHRpb24hXHJcblxyXG4gICAgICAgIFxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBhZGRzIGV2ZW50IGxpc3RlbmVyIHRvIHBsdXMgYnV0dG9uIHRvIGJlIGNhbGxlZCB3aGVuIGRvbSByZW5kZXIgcnVuc1xyXG5cclxuXHJcbiAgICBcclxuICAgIC8vIG1hc3RlciBmdW5jdGlvbiB0byBydW4gYWxsIGZ1bmN0aW9ucyB0aGF0IGFkZCBidXR0b24gbG9naWMhXHJcbiAgICBcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBhZGRCdXR0b25Mb2dpYygpIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBydW4gbG9naWMgZm9yIHN3aXRjaGluZyBpbWFnZSBvbiBwbHVzIGljb24gb24gY2xpY2sgXHJcbiAgICBwbHVzQnV0dG9uSW1hZ2VMb2dpYygpXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy9sb2dpYyB0byBhZGQgZXZlbnRzIHRvIGRlZmF1bHQgcHJvamVjdCBidXR0b25zIFxyXG4gICAgZGVmYXVsdEJ1dHRvbkxvZ2ljKClcclxuICAgIFxyXG4gICAgY3VzdG9tUHJvamVjdEJ1dHRvbkxvZ2ljKClcclxuICAgIC8vbG9naWMgdG8gYWRkIGV2ZW50cyB0byBjdXN0b20gcHJvamVjdCBidXR0b25zIFxyXG4gICAgY3VzdG9tQnV0dG9uTG9naWMoKVxyXG4gICBcclxuICAgIFxyXG4gICAgLy9sb2dpYyB0byBhZGQgZXZlbnRzIHRvIHRvZG8gYnV0dG9ucyBcclxuICAgIHRvZG9CdXR0b25Mb2dpYygpXHJcbiAgICBcclxuXHJcbiAgICBhZGR0b2RvaW5wdXRldmVudHMoKVxyXG4gICAgc3dpdGNoQ3JlYXRpb24oKVxyXG5cclxuICAgIGRlbGV0ZVByb2plY3RzKClcclxuICAgIFxyXG4gICAgZGVsZXRlQnV0dG9uQ29sb3JzKCkgXHJcbiAgICBwcm9qZWN0c3VibWl0bG9naWMoKVxyXG4gIFxyXG4gICAgYWRkRXZlbnRzdG9TdWJtaXRJbnB1dHMoKVxyXG4gICBcclxuICAvLyBwbHVzIGJ1dHRvbiBmdW5jdGlvbiBsb2dpY1xyXG4gIHBsdXNidXR0b25sb2dpYygpXHJcbiAgICAgIFxyXG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gcGx1cyBidXR0b24gb24gcGFnZVxyXG4vLyBhbHNvIGNvbnRhaW5zIGxvZ2ljIHRvIGFkZCB0byBjbG9zZSBidXR0b24gb24gbW9kYWwgbW9cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlbG9naWMoKSB7ICAgICBcclxuICAgICAgICBjb25zdCBjbG9zZWJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZWJ1dHRvbicpXHJcbiAgICAvLyBhZGQgYW4gZXZlbnQgdG8gcmVnaXN0ZXIgdGhlIGNsb3NlIGJ1dHRvblxyXG4gICAgLy8gdGhlIGNsb3NlIGJ1dHRvbjpcclxuICAgIGNsb3NlYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAgdG9nZ2xlTW9kYWwoKVxyXG5cclxuICAgICAvLyByZXNldCBpdCB0byBkZWZhdWx0IHRvZG8gZGlzcGxheSBcclxuICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgcmVzZXRUb2RvKClcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgIC8vIHJlc2V0IGlucHV0IG9mIHRvZG8gc2NyZWVuIGFuZCBhbGwgb3RoZXIgaW5wdXRzIVxyXG4gICAgIHJlc2V0SW5wdXRzKCkgXHJcblxyXG4gICBcclxuICAgICAvLyBydW4gcm9hc3QsIGNoZWNrIGlmIHRoZSBvYmplY3QgZG9lcyBub3QgZXhpc3QgYWdhaW5cclxuICAgICByb2FzdCgpXHJcblxyXG5cclxuXHJcbiB9KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcGx1c2J1dHRvbmxvZ2ljKCkge1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IHBsdXNidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1c2J1dHRvbicpXHJcbiAgICBjb25zdCBjbG9zZWJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZWJ1dHRvbicpXHJcbiAgICBwbHVzYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcblxyXG4vLyByZW1vdmUgYW55IGV4cGFuZGVkIHRvZG8nc1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9jb250ZW50JykuZm9yRWFjaCgoZWxlbSkgPT4ge2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgnbGFyZ2UnKX0pXHJcblxyXG5cclxuICAgICAgICAvLyB3aGVuIHdlIGNsaWtjIHBsdXMgdG9vIGFkZCB3ZSB3YW50IHRvIG9wZW4gdGhlIG1vZGFsIHdpbmRvdyBmaXJzdFxyXG5cclxuXHJcbiAgICAgICAgdG9nZ2xlTW9kYWwoKVxyXG5cclxuICAgIFxyXG4gICAgICAgLy8gdGhlIHdlIHdhbnQgdG8gYWRkIHRoZSBhcHByb3ByaWF0ZSBsaXN0ZW5lcnMgdG8gdGhlIGZpZWxkcyFcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgIC8vdG9kb2ZpZWxkczpcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vYWRkIGV2ZW50IHRvIHRoZSBtYWluIHN1Ym1pdCBidXR0b24hXHJcbiAgICAgICAgcHJvamVjdHN1Ym1pdGxvZ2ljKClcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAvLyBhZGQgbG9naWMgdG8gdG9kbyBzdWJtaXQgYnV0dG9uXHJcbiAgICBcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB9IiwiLy8gdXNlIHRoaXMgZnVuY3Rpb24gdG8gcmVuZGVyIGN1c3RvbSBwcm9qZWN0cyBhcnJheSB0aGF0IGlzIHNlcnZlZCBmcm9tIHByb2plY3QgbWFrZXJcclxuLy8gd2Ugd2lsbCB1cGRhdGUgdGhlIGFycmF5IGZyb20gdGhlIHByb2plY3QgbWFrZXJzIGZ1bmN0aW9uIHdoZW4gbmVlZGVkIHRoZW4gcnVuIHRoZSByZW5kZXJcclxuXHJcbmltcG9ydCBwbHVzcXVhcmUgZnJvbSAnLi4vc3JjL2ltYWdlcy9wbHVzLXNxdWFyZS1zdmdyZXBvLWNvbS5zdmcnXHJcbmltcG9ydCB7ZGF0ZSBhcyB0b2RheX0gIGZyb20gJy4vaW5kZXguanMnXHJcbmltcG9ydCBtYWlucGx1c2ltYWdlIGZyb20gJy4uL3NyYy9pbWFnZXMvcGx1cy1jaXJjbGUtc3ZncmVwby1jb20oNikuc3ZnJ1xyXG5pbXBvcnQgaG92ZXJwbHVzaW1hZ2UgZnJvbSAnLi4vc3JjL2ltYWdlcy9wbHVzLWNpcmNsZS1zdmdyZXBvLWNvbSg3KS5zdmcnXHJcbmltcG9ydCBtaW51c3NxdWFyZSBmcm9tICcuLi9zcmMvaW1hZ2VzL21pbnVzLXNxdWFyZS1zdmdyZXBvLWNvbS5zdmcnXHJcblxyXG5cclxuaW1wb3J0IGhlYWRlcmltYWdlIGZyb20gJy4uL3NyYy9pbWFnZXMvdGV4dC1hbGlnbi1jZW50ZXItc3ZncmVwby1jb20uc3ZnJ1xyXG5cclxuaW1wb3J0IG1haW5wYWdlYmFja2dyb3VuZCBmcm9tICcuLi9zcmMvaW1hZ2VzL2JhY2tncm91bmRzL0hleGFnb24oMSkuc3ZnJ1xyXG5cclxuaW1wb3J0IHsgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucydcclxuXHJcbmltcG9ydCB7aW5pdGlhbHByb2osIGluaXRpYWx0b2Rvc3VibWl0fSBmcm9tICcuL2J1dHRvbmxvZ2ljLmpzJ1xyXG5pbXBvcnQgeyB0b1VuaWNvZGUgfSBmcm9tICdwdW55Y29kZSdcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDdXN0b21Qcm9qZWN0cyh2YWx1ZSkge1xyXG5cclxuIC8vIGNsZWFyIGN1c3RvbSBwcm9qZWN0IGRvbSBlbGVtZW50cyEgb3RoZXJ3aXNlIGl0IHdpbGwganVzdCBhZGQgdG8gdGhlbSFcclxuIC8vIGRpdiBjb250YWluZXIgY2xhc3MgaXMgY3VzdG9tcHJvamVjdHNcclxuIFxyXG4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbXByb2plY3RzJykuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuXHJcblxyXG4gXHJcblxyXG4vLyBpbXBvcnQgcHJvamVjdCBuYW1lcyBmcm9tIGFycmF5IGNyZWF0ZWQgaW4gcHJvamVjdCBtYWtlciBcclxuXHJcbiBcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4udGhlbigob2JqKSA9PiB7XHJcblxyXG4gICAgLy8gdGhpcyBjcmVhdGVzIGEgbmV3IGFycmF5IGJhc2VkIG9uIGN1cnJlbnQgY29udGVudHMgb2YgcHJvamVjdCBvYmplY3RcclxuICAgIC8vIHdoaWNoIHdlIGNhbiByZW5kZXIgZnJvbVxyXG5cclxuXHJcbiAgICBvYmouZ2V0UHJvamVjdHMoKVxyXG5cclxuICAgIC8vYXJyYXkgYmVsb3cgaXMgY3VycmVudCBuYW1lcyBvZiBjdXNvbSBwcm9qZWN0c1xyXG4gICAgXHJcbiAgICBjb25zdCBjdXN0b21wcm9qZWN0c2xpc3QgPSBvYmouY3VycmVudEN1c3RvbVByb2plY3RzXHJcblxyXG4gICAgLy8gbG9vcCB0aGlzIGFycmF5IFxyXG4gICAgY3VzdG9tcHJvamVjdHNsaXN0LmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgcHJvamVjdCBjb29udGFpbmVyIFxyXG5cclxuICAgICAgICBsZXQgcHJvamVjdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gYWRkIHN0eWxlIHRvIHByb2plY3QgY29udGFpbmVyXHJcblxyXG4gICAgICAgIHByb2plY3RkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdGJ1dHRvbnMnKVxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYnV0dG9ucyBmb3IgdGl0bGUgYW5kIGRsZWxldGUgb2JqZWN0c1xyXG5cclxuICAgICAgICBsZXQgcHJvamVjdGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21wcm9qZWN0dGl0bGUnKVxyXG4gICAgICAgIHByb2plY3RidXR0b24uZGF0YXNldC50aXRsZSA9IGVsZW0udHJpbSgpXHJcblxyXG4gICAgICAgIC8vIHNldCB0aXRsZSB0byB0aGUgYXBwcm9wcmlhdGUgY3VzdG9tIHByb2plY3RcclxuXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbi50ZXh0Q29udGVudCA9IGVsZW1cclxuIFxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRlbGV0ZXByb2plY3RidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGRlbGV0ZXByb2plY3RidXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlcHJvamVjdGJ1dHRvbicpXHJcbiAgICAgICAgZGVsZXRlcHJvamVjdGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiXHJcblxyXG5cclxuICAgICAgICAvLyBhcHBlbmQgdGl0bGUgYW5kIGNsb3NlIHRvIHByb2plY3QgZGl2XHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZWQnKVxyXG4gICAgICAgIHByb2plY3RkaXYuYXBwZW5kQ2hpbGQocHJvamVjdGJ1dHRvbilcclxuICAgICAgICBwcm9qZWN0ZGl2LmFwcGVuZENoaWxkKGRlbGV0ZXByb2plY3RidXR0b24pXHJcbiAgXHJcbiAgXHJcblxyXG4gICAgICAgIC8vIHdlIHdhbnQgdG8gYXBwZW5kIHRoZXNlIHRvIHRoZSBkaXYgd2hpY2ggaG91c2VzIGN1c3RvbSBwcm9qZWN0c1xyXG5cclxuICAgICAgICBjb25zdCBjdXN0b21wcm9qZWN0c3ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tcHJvamVjdHMnKVxyXG5cclxuICAgICAgICBjdXN0b21wcm9qZWN0c3ZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdGRpdilcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gd2UgbmVlZCBhIHdheSB0byBhc3NvY2lhdGUgdGhlIHByb2plY3QgdGl0bGUgYW5kIHRoZSBjbG9zZSBidXR0b25cclxuICAgICAgICAvLyB3ZSBjb3VsZCB1c2UgYSBkYXRhIGF0dHJpYnV0ZSBzZXQgdG8gdGhlIGtleSBzaW5jZSB0aGlzIHdpbGwgYmUgdW5pcXVlXHJcbiAgICAgICAgLy8gZ2l2ZSB0aGUgaG91c2luZyBkaXYgYW5kIHRoZSBjbG9zZSBidXR0b24gdGhlIHNhbWUgZGF0YSBhdHRyaWJ1dGVcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgZGVsZXRlcHJvamVjdGJ1dHRvbi5kYXRhc2V0LnRpdGxlID0gZWxlbVxyXG4gICAgICAgIHByb2plY3RkaXYuZGF0YXNldC50aXRsZSA9IGVsZW1cclxuXHJcbiAgICAgICAgLy8gYXBwZW5kIHRoZSBmdW5jdGlvbiB0byBhZGQgYnV0dG9uIGxvZ2ljIHRvIHVwZGF0ZWQgZG9tIGVsZW1lbnRzXHJcblxyXG4gICAgICAgIGltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbiAgICAgICAgLnRoZW4oKG9iaikgPT4gXHJcbiAgICAgICAgb2JqLmRlbGV0ZVByb2plY3RzKCkpXHJcblxyXG5cclxuICAgICAgICAvLyBcclxuXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBpbXBvcnQoJy4vYnV0dG9ubG9naWMuanMnKVxyXG4gICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgby5hZGRCdXR0b25Mb2dpYygpO1xyXG4gICAgfSlcclxuXHJcbn0pXHJcblxyXG5zZWxlY3RDaG9pY2VDcmVhdGlvbigpXHJcblxyXG4vLyBhZnRlciB3ZSBhdHRhY2ggb3VyIGN1c3RvbSBwcm9qZWN0LCB3ZSB3YW5uYSBnbyB0aHJvdWdoIHRoZW0gYWxsIGFuZCBkbyBzb21lIHNoaXQuLlxyXG5cclxuLy8gb25jZSB3ZSBjbGljayBzdWJtaXQgcHJvamVjdCwgYmVsb3cgZmlyZXMhXHJcbmltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbi50aGVuKChvKSA9PiB7XHJcbiAgXHJcbiAgICBvLnVwZGF0ZWZvcmhpZ2godmFsdWUpIFxyXG59KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZWZvcmhpZ2godmFsdWUpIHtcclxuICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWQnKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICBcclxuIFxyXG4gICAgICAgaWYgKHZhbHVlID09IGVsZW0uZGF0YXNldC50aXRsZSkge1xyXG4gICAgXHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJylcclxuICAgICAgIH1cclxuXHJcblxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIHBvcHVsYXRlIGRpc3BsYXkgb2YgcHJvamVjdHMgaW4gdG9kbyBjcmVhdGlvbiBiYXNlZCBvbiBjdXJyZW50IHByb2plY3RzXHJcblxyXG5mdW5jdGlvbiBzZWxlY3RDaG9pY2VDcmVhdGlvbigpIHtcclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgXHJcbiAgICAvLyByZW1vdmUgYWxsIGNvbnRlbnQgdG8gc3RhcnRcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RvcHRpb25zJykuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuLy8gYWRkIHRoZSBBbGwgcHJvamVjdHMgb3B0aW9uIVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGdldCB0aGUgbmFtZXMgb2YgdGhlIGN1c3RvbSBwcm9qZWN0cyBhbmQgY3JlYXRlIGVsZW1lbnRzXHJcblxyXG5vYmouY3VycmVudEN1c3RvbVByb2plY3RzLmZvckVhY2goKGVsZW0pID0+IHtcclxuXHJcblxyXG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgICBvcHRpb24udHlwZT1lbGVtXHJcbiAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gZWxlbVxyXG4gICAgIG9wdGlvbi52YWx1ZSA9IGVsZW1cclxuICAgICBvcHRpb24uZGF0YXNldC50eXBlID0gJ29wdGlvbidcclxuICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdHNlbGVjdCcpXHJcbiAgICAgXHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RvcHRpb25zJykuYXBwZW5kQ2hpbGQob3B0aW9uKVxyXG5cclxufSlcclxuXHJcblxyXG5cclxuICAgXHJcblxyXG5cclxuXHJcblxyXG59KX1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0byBlbnN1cmUgZGF0ZSBpbnB1dCBpcyB0b2RheXMgZGF0ZSBvciBoaWdoZXJcclxuXHJcbmZ1bmN0aW9uIGlucHV0RGF0ZSgpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZWRhdGUuZGF0ZWlucHV0JylcclxuICAgIGltcG9ydCgnZGF0ZS1mbnMnKVxyXG4gICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlID0gby5mb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKVxyXG5cclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICBjb25zb2xlLmxvZygnSU5QVVRWQUwnLCBpbnB1dC52YWx1ZSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuLy9tYXN0ZXIgZnVuY3Rpb24gdG8gcmVuZGVyIGFsbCBjb21wb25lbnRzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCl7XHJcblxyXG4gICAgaW5wdXREYXRlKClcclxuXHJcbiBcclxuLy8gc2V0IGJhY2tncm91bmQgaW1hZ2VcclxuXHJcblxyXG5kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9YHVybCgke21haW5wYWdlYmFja2dyb3VuZH0pYFxyXG5cclxuXHJcblxyXG4gICAgLy8gc2V0IG1haW4gcGx1cyBpbWFnZSBcclxuXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXNidXR0b24nKS5zcmMgPSBtYWlucGx1c2ltYWdlXHJcbiAgIFxyXG5pbXBvcnQoJy4vYnV0dG9ubG9naWMuanMnKVxyXG4udGhlbigobykgPT4ge1xyXG5cclxuICAgIHJlbmRlckN1c3RvbVByb2plY3RzKClcclxuICAgIGluaXRpYWxSZW5kZXJUb2RvKClcclxuICAgIG8ubW9kYWxMb2dpYygpXHJcbiAgICBvLmFkZEJ1dHRvbkxvZ2ljKClcclxuXHJcblxyXG5cclxuXHJcblxyXG59KVxyXG5cclxuaW5pdGlhbHByb2ooKVxyXG5pbml0aWFsdG9kb3N1Ym1pdCgpXHJcblxyXG5cclxufVxyXG5cclxuXHJcbi8vIHBvcHVsYXRlIG1haW4gZGlzcGxheSBsaWtlIHRvZG8gYXJlYSBiYXNlZCBvbiBzZWxlY3RlZCBwcm9qZWN0IVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZURpc3BsYXkocHJvamVjdG9iamVjdCApIHtcclxuXHJcbiAgICAvLyBzZXQgdG9kb2hlYWRlciBpbWFnZVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaGVhZGVyaW1hZ2UnKS5zcmMgPSBoZWFkZXJpbWFnZVxyXG5cclxuICAgIC8vIHNldCBiYWNrZ3JvdW5kIGltYWdlXHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPWB1cmwoJHttYWlucGFnZWJhY2tncm91bmR9KWBcclxuXHJcbiAgICAvLyBzZXQgbWFpbiBwbHVzIGltYWdlIFxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHVzYnV0dG9uJykuc3JjID0gbWFpbnBsdXNpbWFnZVxyXG5cclxuXHJcblxyXG4gICAgLy8gd2UgYXJlIHBvcHVsYXRpbmcgdGhlIGRvbSwgd2UgY2FuIGFsc28gc3dpdGNoIHRoZSBoaWdobGlnaHRlZCBwcm9qZWN0IVxyXG4gICAgLy8gdGhpcyBmdW5jdGlvbiBwb3B1bGF0ZXMgdGhlIHRvZG9saXN0c1xyXG5cclxuICBcclxuXHJcbmxldCBwcm9qZWN0ID0gXCJcIlxyXG5sZXQgcHJvamVjdHNldCA9IFwiXCJcclxuXHJcbmNvbnN0IHRvZG9hcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZWN0aW9uJylcclxuXHJcblxyXG5cclxuLy8gc2V0IHRoZSBkaXNwbGF5IHRvIGJlIGJsYW5rIVxyXG5cclxudG9kb2FyZWEuaW5uZXJIVE1MID0gXCJcIlxyXG5sZXQgcHJvbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0bmFtZXRhZycpXHJcblxyXG5pZiAocHJvamVjdG9iamVjdCA9PSBcIkFsbFwiIHx8IHByb2plY3RvYmplY3QgPT0gXCJhbGxcIikge3Byb2plY3RzZXQgPSBcImRlZmF1bHRwcm9qZWN0c1wiXHJcbi8vIGVuc3VyZSBhbGwgaXMgaGlnaGxpZ2h0ZWQhIVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVkJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdyZWRiYWNrJylcclxuICAgIGlmIChlbGVtLmRhdGFzZXQudGl0bGUgPT0gXCJhbGxcIiApIHtlbGVtLmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgcHJvbmFtZS50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgIHByb25hbWUudGV4dENvbnRlbnQgPSBcIkFsbFwifVxyXG59KVxyXG5cclxufVxyXG5cclxuZWxzZSBpZiAocHJvamVjdG9iamVjdCA9PSBcInRvZGF5XCIpIHtwcm9qZWN0c2V0ID0gXCJkZWZhdWx0cHJvamVjdHNcIlxyXG5wcm9uYW1lLnRleHRDb250ZW50ID0gXCJcIlxyXG5wcm9uYW1lLnRleHRDb250ZW50ID0gXCJUb2RheVwiXHJcbn1cclxuXHJcbmVsc2UgaWYgKHByb2plY3RvYmplY3QgPT0gXCJ0aGlzd2Vla1wiKSB7cHJvamVjdHNldCA9IFwiZGVmYXVsdHByb2plY3RzXCJcclxucHJvbmFtZS50ZXh0Q29udGVudCA9IFwiXCJcclxucHJvbmFtZS50ZXh0Q29udGVudCA9IFwiVGhpcyBXZWVrXCJcclxufVxyXG5cclxuZWxzZSB7cHJvamVjdHNldCA9ICdwcm9qZWN0cydcclxucHJvbmFtZS50ZXh0Q29udGVudCA9IFwiXCJcclxucHJvbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3RvYmplY3RcclxufVxyXG5cclxuXHJcblxyXG4vLyB1cGRhdGUgYWxsIGFycmF5IGJhc2VkIG9uIGFsbCBvYmplY3RzIHdpdGhpbiBjdXN0b20gcHJvamVjdHMhISBiZWZvcmUgd2UgcmVuZGVyIGRpc3BsYXkhXHJcblxyXG4gICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiBcclxuICAgIC50aGVuKChvKSA9PiB7XHJcblxyXG4gICAgXHJcbiAgIC8vIGFsbCBpcyBiYXNlZCBvbiBjdXN0b20gcHJvamVjdHMsIGJ5IGl0ZXJhdGluZyBvdmVyIHRoZW0gYWxsXHJcbiAgIC8vIHByZSBzb3J0IGVhY2ggcHJvamVjdCBhcnJheSBiZWZvcmUgcGFzc2luZyB0byBhbGwuLlxyXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gbG9vcCBvdmVyIHRoZSBwcm9qZWN0IGFuZCBhdCBlYWNoIGtleSwgY2FsbCB0aGUgc29ydCBmdW5jdGlvblxyXG4gICAgICAgIC8vIGFuZCBzZXQgdGhhdCBlcXVhbCB0byB0aGUga2V5cyB2YWx1ZS4uXHJcblxyXG4gICAgICAgIC8vIGxvb3Agb3ZlciB0aGUgcHJvamVjdHMgb2JqZWN0IGF0IHByb2plY3Qga2V5IGFycmF5XHJcbiAgICAgICAgLy8gc2V0IHRoYXQgYXJyYXkgZXF1YWwgdG8gdGhlIGFycmF5IHNvcnRlZCBcclxuICAgICAgICAvLyBhcnJheSBzb3J0ZWQgYmFzZWQgb24gZGF0ZS4uXHJcblxyXG4gZm9yIChsZXQgcHJvcCBpbiBvLnByb2plY3RzKSB7XHJcblxyXG4gICAgLy8gc2tpcCBpZiBhcnJheSBsZW5ndGggMC4uXHJcblxyXG4gICAgaWYgKG8ucHJvamVjdHNbcHJvcF0ubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICBvLnByb2plY3RzW3Byb3BdID0gby5wcm9qZWN0c1twcm9wXS5zb3J0KGNvbXBhcmVGbilcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8ucHJvamVjdHNbcHJvcF0ubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBhcnJheSBsb2NhdGVkIGF0IGtleSBvbiBwcm9qZWN0cyBhcnJheVxyXG4gICAgICAgIC8vIGxvb3Agb3ZlciBlYWNoIG9iamVjdCBpbiBlYWNoIGFycmF5IGFuZCBhc3NpZ24gaXQgYW4gaW5kZXggdmFsdWUgd2l0aGluIHRoZSBvYmplY3QnXHJcbiAgICAgICAgLy8gZG9uZSBhZnRlciBzb3J0aW5nIGFzIHRoZXNlIHdpbGwgY2hhbmdlIVxyXG4gICAgICAgIG8ucHJvamVjdHNbcHJvcF1baV0uaW5kZXggPSBpXHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gfVxyXG5cclxuXHJcblxyXG4gZnVuY3Rpb24gY29tcGFyZUZuKGEsIGIpIHtcclxuICAvLyBjb25zb2xlLmxvZyhhLmRhdGUsJ2EnLCBiLmRhdGUsICdiJywgYS5kYXRlIDwgYi5kYXRlKVxyXG4gXHJcbiAgIC8vIGlmIGZpcnN0IGRhdGUgaXMgbGVzcyB0aGFuIHNlY29uZCBkYXRlLCBvcmRlciBpdCBsYXN0XHJcbiAgIGlmIChhLmR1ZWRhdGUgPCBiLmR1ZWRhdGUpIHtcclxuICAgICByZXR1cm4gLTE7XHJcbiAgIH1cclxuICAgaWYgKGEuZHVlZGF0ZSA+IGIuZHVlZGF0ZSkge1xyXG4gICAgIHJldHVybiAxO1xyXG4gICB9XHJcbiAgIC8vIGEgbXVzdCBiZSBlcXVhbCB0byBiXHJcbiAgIHJldHVybiAwO1xyXG4gfVxyXG5cclxuXHJcblxyXG4oZnVuY3Rpb24gc29ydEFsbCgpIHtvLmRlZmF1bHRwcm9qZWN0cy5hbGwgPSBbXVxyXG4gICAgZm9yIChsZXQgcHJvcCBpbiBvLnByb2plY3RzKSB7XHJcblxyXG5cclxuICAgICAgICAvLyB0aGUgcHJvcCBpbiBvLnByb2plY3RzIGlzIHRoZSBrZXkgY29ycmVzcG9uZGluZyB0byB0aGUgYXJyYXkgb2YgdG9kbyBvYmplY3RzXHJcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGxvb3Agb3ZlciB0aGlzIGFycmF5IGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgZGVmYXVsdCBwcm9qZWN0XHJcbiAgICAgICAgLy8gYWxsIGFycmF5IGJlZm9yZSByZW5kZXJpbmcgdGhlIGRvbVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIG8ucHJvamVjdHNbcHJvcF0uZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIHNvIGZvciBldmVyeSBjdXN0b20gcHJvamVjdCB0b2RvIG9iamVjdCwgd2Ugd2FudCB0byBwb3B1bGF0ZSB0aGUgYWxsIGFycmF5IVxyXG4gICAgICAgICAgICAvLyBhZnRlciBwb3B1bGF0aW5nIHRoZSBhcnJheSwgd2Ugd2lsbCBzb3J0IGl0IVxyXG4gICAgICAgICAgICBvLmRlZmF1bHRwcm9qZWN0cy5hbGwucHVzaChlbGVtKVxyXG5cclxuLy8gYnV0IG5vdCB3ZSBzb3J0IGFsbCBhZ2Fpbiwgd2Ugc29ydGVkIGVhY2ggY3VzdG9tIHByb2plY3QgYXJyYXkgaW5pdGlhbGx5XHJcbi8vIHRoZW4gd2UgYXBwZW5kZWQgZXZlcnkgb2JqZWN0IGZyb20gZXZlcnkgYXJyYXkgb250byB0aGUgYWxsIGFycmF5XHJcbi8vIHRoZXkgYXJlIHNvcnRlZCBieSBkYXRlIGJ1dCBieSBhcnJheSwgc28gd2hlbiBhbGwgY29tYmluZWQsIHRoZSBkYXRlcyBtdXN0IGJlIHJlIHNvcnRlZFxyXG4vLyBkYXRlcyBzb3J0ZWQgYmVsb3dcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggb2Ygby5kZWZhdWx0cHJvamVjdHMuYWxsKSB7XHJcbiAgICAgICAgICAgICBvLmRlZmF1bHRwcm9qZWN0cy5hbGwgPSBvLmRlZmF1bHRwcm9qZWN0cy5hbGwuc29ydChjb21wYXJlRm4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgIFxyXG5cclxuIFxyXG4vLyB3ZSBhcmUgcmV0dXJuaW5nIGEgbmV3IHNvcnRlZCBhcnJheSB0byB0aGVuIHJlcGxhY2UgdGhlIGFsbCBhcnJheSB3aXRoXHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICB9KVxyXG4gICAgIFxyXG4gICAgfX0pKCk7XHJcblxyXG4vLyBhZnRlciB1cGRhdGluZyBhbGwgYXJyYXksIHVwZGF0ZSB0b2RheSBhcnJheSBhbmQgdGhpcyB3ZWVrLCBiYXNlZCBvbiBzb3J0aW5nIGFsbCBhcnJheSBieSBkYXRlIG9mIGVhY2ggb2JqZWN0XHJcbi8vIHdlIHdhbnQgby5kZWZhdWx0cHJvamVjdHMudG9kYXkgZXF1YWwgdG8gYW4gYXJyYXkgcmV0dXJuaW5nIGZ1bmN0aW9uIHRoYXQgc29ydHMgb2JqZWN0cyBiYXNlZCBvbiBhIGRhdGUga2V5IFxyXG4vL3RoYXQgY29ycmVzcG9uZCB3aXRoIHRvZGF5cyBkYXRlXHJcblxyXG4oZnVuY3Rpb24gc29ydGRheSgpIHtcclxuICBcclxuICAgIC8vIGVtcHR5IHRvZGF5IGFycmF5IGZvciBzb3J0aW5nIVxyXG4gXHJcbiAgICBvLmRlZmF1bHRwcm9qZWN0cy5hbGwuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgXHJcbmltcG9ydCgnZGF0ZS1mbnMnKVxyXG4udGhlbihcclxuICAgIChkYXRlKSA9PiB7XHJcblxyXG4gICAgLy8gY29tcGFyZSB0aGUgZGF0ZSBpbiB0aGUgcHJvamVjdCB0byB0b2RheXMgZGF0ZVxyXG4gICAgbGV0IGRhdGVlciA9IGRhdGUuZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJylcclxuICAgIGlmIChlbGVtLmR1ZWRhdGUgPT0gZGF0ZWVyICkgXHJcbiAgICB7XHJcbiBcclxuICAgICAgICAvLyBlbGVtZW50cyB3aXRoIHRvZGF5J3MgZGF0ZSwgdXNlIHRoZW0gdG8gcG9wdWxhdGUgdGhlIHRvZGF5IGFycmF5IGluIGRlZmF1bHRcclxuICAgICAgICBcclxuICAgICAgICBvLmRlZmF1bHRwcm9qZWN0cy50b2RheS5wdXNoKGVsZW0pXHJcbiAgICB9XHJcbn0pXHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuKSgpO1xyXG5cclxuKGZ1bmN0aW9uIHNvcnR3ZWVrKCkge1xyXG4gICAgLy8gZW1wdHkgdG9kYXkgYXJyYXkgZm9yIHNvcnRpbmchXHJcblxyXG4gICAgby5kZWZhdWx0cHJvamVjdHMuYWxsLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG5pbXBvcnQoJ2RhdGUtZm5zJykudGhlbigoZGF0ZSkgPT4ge1xyXG4gICAgLy8gY29tcGFyZSB0aGUgZGF0ZSBpbiB0aGUgcHJvamVjdCB0byB0b2RheXMgZGF0ZVxyXG4gaWYgKGRhdGUucGFyc2VJU08oZWxlbS5kdWVkYXRlKSA8PSBkYXRlLmFkZFdlZWtzKHBhcnNlSVNPKGRhdGUuZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJykpLCAxKSlcclxuICAgIHtcclxuICAgICAgICAvLyBlbGVtZW50cyB3aXRoIHRvZGF5J3MgZGF0ZSwgdXNlIHRoZW0gdG8gcG9wdWxhdGUgdGhlIHRvZGF5IGFycmF5IGluIGRlZmF1bHRcclxuICAgICAgICBcclxuICAgICAgICBvLmRlZmF1bHRwcm9qZWN0cy50aGlzd2Vlay5wdXNoKGVsZW0pXHJcbiAgICB9XHJcbn0pXHJcbiAgICB9KVxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBwcm9wIG9mIG9bcHJvamVjdHNldF1bcHJvamVjdG9iamVjdF0pIHtcclxuICAgICAgICAgIFxyXG4gXHJcbiAgICAgICAgICAgIC8vIHByb2plY3Qgc2V0IGRldGVybWluZXMgZGVmYXVsdCBvciBjdXN0b20gcHJvamVjdHNcclxuICAgICAgICAgICAgLy8gcHJvamVjdG9iamVjdCBkZXRlcm1pbmVzIHNwZWNpZmljIHByb2plY3QsIHdoaWNoIHRoZW4gcmV0dXJuc1xyXG4gICAgICAgICAgICAvLyBhbmQgYXJyYXkgb2Ygb2JqZWN0cywgd2hpY2ggd2Ugd291bGQgbmVlZCB0byBzb3J0IHRocm91Z2ggYW5kIHB1bGwgc3BlY2lmaWMgcHJvcGVydGllcyFcclxuICAgICAgICAgICAgLy8gdGhpcyBpcyBhIGZvciBvZiBsb29wIHdoaWNoIHNvcnRzIG92ZXIgdGhlIGFycmF5IGNhbGxlZCBieSBvW3Byb2plY3RzZXRdW3Byb2plY3RvYmplY3RdXHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBldmVyeSBrZXkgd2l0aGluIGN1c29tIHByb2plY3RzIGFuZCBhZGQgdG8gQWxsXHJcblxyXG4gICBcclxuICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IHNwZWNpZmljIHByb2plY3RcclxuICAgICAgICAgICAgLy8gcHJvamVjdG9iamVjdCBpcyB0aGUgcHJvamVjdCB3aXRoaW4gcHJvamVjdHNldFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZWUoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBydW4gdGhlIGhpZ2hsaWdodCBmdW5jdGlvbiB3aXRoIHRoZSBwcm9qZWN0IGRpdiBlcXVhbCB0byBldmVudFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0KClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gd2UgY2FuIHB1bGwgb3V0IHRoZSByZWxldmVudCBkZXRhaWxzIHZpYSBwcm9wLnRpdGxlLCBwcm9wLmR1ZWRhdGUsIGV0eFxyXG4gICAgICAgICAgICAvLyBhbmQgdGhlbiBhdHRhY2ggdGhlbSBvbnRvIG91ciBzY3JlZW4gdmlhIHRoaXMgbG9vcCwgY2xlYXIgdGhlIHNjcmVlbiBjb250ZW50IGZpcnN0IGFzIGFsd2F5cyFcclxuXHJcblxyXG4gICAgIFxyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICBvW3Byb2plY3RzZXRdW3Byb2plY3RvYmplY3RdLmZvckVhY2goKGVsZW0pID0+IHtcclxuXHJcbiAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHByb3AudGl0bGUgPz8gXCJcIlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIH0pXHJcblxyXG5cclxuICAgICAgLy8vIGNyZWF0ZSBvdXIgaW5kaXZpZHVhbCB0b2RvIGl0ZW1zIGJlbG93ISEgXHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBkaXYgdG8gaG91c2UgdGhlIGNvbnRlbnQgc2V0IHRoZSBzdHlsZXNcclxuXHJcbiAgICAgICAgICAgIGxldCB0b2RvY29udGVudGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndG9kb3RpdGxlbGluZScpXHJcbiAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9jb250ZW50JylcclxuXHJcbi8vIGNyZWF0ZSBhIG1haW4gZGl2IGVsZW1lbnQgdG8gcml2YWwgdGhlIGJ1dHRvbiBlbGVtZW50c1xyXG5jb25zdCBxdWlja2luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5xdWlja2luZm8uY2xhc3NMaXN0LmFkZCgncXVpY2tpbmZvJylcclxuXHJcbiAgICAgICAgICBsZXQgdGl0bGVzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgIHF1aWNraW5mby5hcHBlbmRDaGlsZCh0aXRsZXNlY3Rpb24pXHJcbiAgICAgICAgICB0aXRsZXNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGl0bGVzZWN0aW9uJylcclxuXHJcbiAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvcC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvdGl0bGVsaW5lJylcclxuXHJcbi8vIHNpbmNlIHdlIGFyZSBsb29waW5nIHRocm91Z2ggYW4gYXJyYXkgb2Ygb2JqZWN0cywgc2V0IHRoZSB0aXRsZSB0byBcclxuLy8gdGhlIGtleSwgdGhpcyB3aWxsIGFsbG93IHVzIHRvIGFjY2VzcyB0aGUgYXJyYXkgaGVyZSBhbmQgd2UgY2FuIGxvb3AgdGhyb3VnaCBpdCBhbmQgZGlzcGxheSB0aGUgY29udGVudHNcclxuICAgICAgICAgIFxyXG5cclxudGl0bGVzZWN0aW9uLmFwcGVuZENoaWxkKHRleHQpXHJcblxyXG4gICAgICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndG9kb3RpdGxlcycpXHJcblxyXG4gICAgICAgICAgIC8vIGZvciBlYWNoIHRvZG8gY29udGVudCB3ZSBtYWtlLCBtYWtlIGl0IHVuaXF1ZSBzbyBpdCBjYW4gaGF2ZSB1bmlxdWUgZXZlbnRzIChsaWtlIGJlaW5nIHJlbW92ZWQhKVxyXG4gICAgICAgICAgIC8vIGFkZCB0aGUgaW5kZXggYXMgd2VsbCwgd2hpY2ggd2Ugd2lsbCBkeW5hbWljYWxseSB1cGRhdGUgd2hlbiB3ZSBhZGp1c3QgdGhlIGFycmF5cyFcclxuXHJcbiAgICAgICAgICAgIHRvZG9hcmVhLmFwcGVuZENoaWxkKHRvZG9jb250ZW50ZGl2KVxyXG4gICAgICAgICAgICB0b2RvY29udGVudGRpdi5kYXRhc2V0LnByb2plY3QgPSBwcm9wLnRpdGxlXHJcbiAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LmRhdGFzZXQucHJvamVjdHNldD0gcHJvcC5wcm9qZWN0XHJcbiAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LmRhdGFzZXQuaW5kZXggPSBwcm9wLmluZGV4XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgYnV0dG9uIGNvbnRhaW5lciEgdG8gZ28gYmVzaWRlIHRvZG9zZWN0aW9uXHJcblxyXG4gICAgICAgICAgICBjb25zdCBidXR0b25jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBidXR0b25jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uY29udGFpbmVyJylcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBleHBhbmQgYnV0dG9uXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICAgIGV4cGFuZC5zcmMgPSBwbHVzcXVhcmVcclxuICAgICAgICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmRidXR0b24nKVxyXG4gICAgICAgXHJcblxyXG4gICAgICAgICAgLy8gYWRkIGFuIGV2ZW50IHRvIGVhY2ggZXhwYW5kIGJ1dHRvbiFcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuXHJcbi8vIGNyZWF0ZSBhIHRvZG8gY29udGVudCBkaXYgdGhhdCB3ZSB3aWxsIGFwcGVuZCBhbmQgcmVtb3ZlIVxyXG5cclxuXHJcbiAgICAgICAgICAgY29uc3QgdG9kb2luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgIHRvZG9pbmZvLmNsYXNzTGlzdC5hZGQoJ3RvZG9pbmZvJylcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBhIGZvcm0gZWxlbWVudCBvbiB0aGUgdG9kby4uXHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgndG9kb2Zvcm0nKVxyXG5cclxuXHJcbiAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjcmVhdGUgdGhlIGNvbnRlbnQgdGhhdCB3aWxsIHBvcHVsYXRlIHRoaXMgdG9kb1xyXG4gICAgICAgICAgIC8vIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZD9cclxuICAgICAgICAgICAvLyBhbmQgYWxzbyBtYWtlIGl0IHBvc3NpYmxlIHRvIGVkaXQgdGhlIHZhbGVzIGJ5IGNsaWNraW5nIGluIHRoZSBmaWVsZHMhXHJcbiAgICAgICAgICAgLy8gd2UgY2FuIGFscmVhZHkgY2hhbmdlIGNvbXBsZXRlZCBhbmQgcHJpb3JpdHlcclxuICAgICAgICAgICAvLyBzbyBtYWtlIGl0IHNvIHRoYXQgd2UgY2FuIGVkaXQgZGVzY3JpcHRpb24sIHRpdGxlIGFuZCBkYXRlXHJcbiAgICAgICAgICAgLy8gYWZ0ZXIgd2UgZWRpdCB0aGVzZSB0aGluZ3MsIHJlZnJlc2ggdGhlIGRpc3BsYXkgb2YgdGhhdCBpbmRpdmlkdWFsIHRvZG8uLlxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIC8vIHRvZG9pbnB1dHNcclxuICAgICAgICAgXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVscyA9IFsnVGl0bGUnLCAnRGVzY3JpcHRpb24nLCAnRHVlZGF0ZSddXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGxhYmVsIGZvciBlYWNoIGlucHV0IFxyXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgICAgICAgICAgbGFiZWwuZm9yID0gbGFiZWxzW2ldXHJcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxzW2ldXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBpbnB1dFxyXG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSAndGV4dCdcclxuICAgICAgICAgICAgaW5wdXQubmFtZSA9ICd0aXRsZSdcclxuICAgICAgICAgICAgaW5wdXQuaWQgPSAndGl0bGUnXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGxhYmVsc1tpXSA9PSAnRHVlZGF0ZScpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgaW5wdXQuaWQgPSBcImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgaW5wdXQubmFtZT0gJ2RhdGUnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsYWJlbHNbaV0gPT0gJ0Rlc2NyaXB0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5pZCA9IFwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgaW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgICAvLyBhcHBlbmQgaW5wdXQgb250byBsYWJlbFxyXG4gIFxyXG4gICAgICAgICAgICAvLyBhcHBlbmQgbGFiZWwgaG91c2luZyBpbnB1dCBvbnRvIGZvcm0uLlxyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBhZGQgYSBidXR0b24gdG8gc3VibWl0IHRoZSBmb3JtXHJcblxyXG4gICAgICAgICBjb25zdCBzdWJtaXR0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgc3VibWl0dG9kby50ZXh0Q29udGVudCA9ICdVcGRhdGUgVG9kbyEnXHJcblxyXG4gICAgICAgICAvLyBmb3IgbGF0ZXIgbWFuaXB1bGF0aW9uLCBhZGQgYSBjbGFzcyB0byBzdWJtaXQgYnV0dG9uXHJcbiAgICAgICAgIHN1Ym1pdHRvZG8uY2xhc3NMaXN0LmFkZCgnc3VibWl0dG9kbycpXHJcbiAgICAgICAgIHN1Ym1pdHRvZG8udHlwZSA9ICdzdWJtaXQnXHJcblxyXG4gICAgICAgICAvLyBhcHBlbmQgYnV0dG9uIHRvIGZvcm1cclxuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXR0b2RvKVxyXG4gICAgICAgICBmb3JtLm1ldGhvZCA9ICdnZXQnXHJcblxyXG4gICAgICAgICBjb25zdCB0aXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3RpdGxlJylcclxuICAgICAgICAgdGl0bGUudmFsdWUgPSBwcm9wLnRpdGxlXHJcbiAgICAgICAgIFxyXG4gICAgICAgICBjb25zdCBkYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpXHJcbiAgICAgICAgIGRhdGUudmFsdWUgPSBwcm9wLmR1ZWRhdGVcclxuXHJcbiAgICAgICAgIGNvbnN0IGRlc2MgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpXHJcbiAgICAgICAgIGRlc2MudmFsdWUgPSBwcm9wLmRlc2NyaXB0aW9uXHJcblxyXG4gICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc3VibWl0IGV2ZW50IG9uIGZvcm0gY29udGFpbmVyLCBsb2cgdGhlIHZhbHVlcyB0aGF0IGl0IG1ha2VzLi5cclxuXHJcbiAgIFxyXG4gICAgICAgICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAgICAgICAgLnRoZW4gKChvKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB1cGRhdGUgdGhlIHJlbGV2YW50IHRvZG8gd2l0aCB0aGUgbmV3IGluZm9ybWF0aW9uLi5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LnByb2plY3RzZXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXhcclxuXHJcbiAgICAgICAgICAgICAgIC8vIG5vdyB1cGRhdGUgcHJvamVjdCBhdCBpbmRleCBhdCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAvLyBhbmQgYWxzbyB1cGRhdGUgdGhlIGNvbXBsZXRlZCBzdGF0dXMgaWYgaXQgaGFzIGNoYW5nZWQsIGFzIHdlbGwgYXMgdGhlIHByaW9yaXR5Li5cclxuICAgICAgICAgICAgICAgY29uc3QgY29tcGxldGVkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGUnKVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgIHZhciBwcmlvcml0eSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucXVpY2tpbmZvJykucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eWJ1dHRvbicpXHJcbiAgICAgICAgICAgICAgIGlmIChwcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3ByaW9yaXR5d3JhcHBlcmxvdycpKSB7XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IFwicHJpb3JpdHktbG93XCJcclxuXHJcbiAgICAgICAgICAgICAgIH1cclxuZWxzZSAgaWYgKHByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygncHJpb3JpdHl3cmFwcGVybWVkJykpIHtcclxuICAgIHByaW9yaXR5ID0gXCJwcmlvcml0eS1tZWRcIlxyXG5cclxufVxyXG5lbHNlICBpZiAocHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmlvcml0eXdyYXBwZXJoaWdoJykpIHtcclxuICAgIHByaW9yaXR5ID0gXCJwcmlvcml0eS1oaWdoXCJcclxuXHJcbn1cclxuXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgIC8vIG5vdyB0aGF0IHdlIGhhdmUgdXBkYXRlZCB0aGUgcmVsdmFudCB0b2RvLCBsZXRzIHJlIHJlbmRlciB0aGlzIHNwZWNpZmljIHRvZG9cclxuICAgICAgICAgICAgICAgLy8gbGVhdmluZyBpdCBleHBhbmRlZCBhbmQgZXZlcnl0aGlnbiBlbHNlIGFsb25lXHJcblxyXG4gICAgICAgICAgICAgICAvLyBjaGFuZ2UgdGhlIHRpdGxlIGNvbnRlbnQgdG8gdXBkYXRlZCB0aXRsZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIClcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3RpdGxlbGluZScpLnRleHRDb250ZW50ID0gdGl0bGUudmFsdWVcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IGRlc2MudmFsdWVcclxuXHJcblxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgdGhlIGRhdGVcclxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi9pbmRleC5qcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGUgZGF0ZSBpcyB0b2RheVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgaXQgaXMgdG9kYXksIGNoYW5nZSB0aGUgdGV4dCB0byBEdWUgVG9kYXkhXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGUudmFsdWUgPT0gby5kYXRlIHx8IGRhdGUudGV4dENvbnRlbnQgPT0gby5kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gYWx0aG91Z2ggaWYgc3RhdHVzIGlzIGNvbXBsZXRlLCBrZWVwIGRhdGUgdGV4dCBhcyAnRE9ORSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AuY29tcGxldGVkID09IHRydWUgKSB7IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZWJ1dHRvbicpLnRleHRDb250ZW50ID0gXCJET05FIVwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcC5jb21wbGV0ZWQgPT0gZmFsc2UpIHsgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlYnV0dG9uJykudGV4dENvbnRlbnQgPSBcIkRVRSBUT0RBWVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBlbHNlIHsgICAvLyBpZiBpdCBpcyBub3QgdG9kYXlcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZWF2ZSBkYXRlIHZhbHVlIHVuY2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCB1cGRhdGUgdGhlIGRpdnYgd2l0aCBkYXRlIHZhbHVlIVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2RheScsIGRhdGUudmFsdWUsIG8uZGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcC5jb21wbGV0ZWQgPT0gdHJ1ZSkgeyBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS50ZXh0Q29udGVudCA9J0RPTkUhJ31cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZWxzZSB7ICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS50ZXh0Q29udGVudCA9IGRhdGUudmFsdWVcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHJlbW92ZXRvZG8gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9pbmZvJylcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsYXJnZScpXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5leHBhbmRidXR0b24nKS5zcmMgPSBwbHVzcXVhcmVcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChyZW1vdmV0b2RvKVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSBwcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgLy8gd2lsbCB1cGRhdGUgYXV0b21hdGljYWxseSBhcyBpdCBhbHRlcnMgdGhlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSBjb21wbGV0ZWQgc3RhdHVzIVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gbm93IHVwZGF0ZSB0aGUgY3VzdG9tIHByb2plY3Qgd2l0aCB0aGUgcmVsZXZhbnQgY2hhbmdlcy4uXHJcblxyXG4gICAgICAgICAgICAgICAgby5wcm9qZWN0c1twcm9qZWN0XVtpbmRleF0udGl0bGUgPSB0aXRsZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgby5wcm9qZWN0c1twcm9qZWN0XVtpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjLnZhbHVlXHJcbiAgICAgICAgICAgICAgICBvLnByb2plY3RzW3Byb2plY3RdW2luZGV4XS5kdWVkYXRlID0gZGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgby5wcm9qZWN0c1twcm9qZWN0XVtpbmRleF0uY29tcGxldGVkID0gY29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICBvLnByb2plY3RzW3Byb2plY3RdW2luZGV4XS5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvLnByb2plY3RzW3Byb2plY3RdW2luZGV4XSlcclxuICAgICAgICAgIFxyXG4vLyBhbmQgcmV0dXJuIHRoYXQgc3BlY2lmaWMgdG9kbyB0byBub24gZXhwYW5kZWQgc3RhdGUuLlxyXG5jb25zb2xlLmxvZygpXHJcblxyXG5cclxuLy8gcmVtb3ZlIHRoZSB0b2RvIGluZm8gdGhhdCB3YXMgYXBwZW5kZWQgb24gdG8gbWFrZSB0aGUgY2FyZCBiaWdcclxuXHJcblxyXG4vLyBhbmQgc2V0IHRoZSBpY29uIGJhY2sgdG8gYSBwbHVzIGljb24hXHJcblxyXG5cclxuICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgdG9kb2luZm8uYXBwZW5kQ2hpbGQoZm9ybSlcclxuICAgICAgICAgLy8gYWRkIHN1Ym1pdCBidXR0b24gb24gZm9ybVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyBhZGQgYSBidXR0b24gdG8gY2FuY2VsIHN1Ym1pdFxyXG5cclxuICAgICAgICAgICAgICAgICAgY29uc3QgY2FuY2Vsc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgY2FuY2Vsc3VibWl0LnRleHRDb250ZW50ID0gJ0NhbmNlbCdcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8vIGZvciBsYXRlciBtYW5pcHVsYXRpb24sIGFkZCBhIGNsYXNzIHRvIHN1Ym1pdCBidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2FuY2Vsc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2NhbmNlbHN1Ym1pdCcpXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgYnV0dG9uIHRvIGZvcm1cclxuICAgICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxzdWJtaXQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gd2UgY2xpY2sgdGhlIGNhbmNlbCBidXR0b25cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgYmVoYXZ1b3VyIG9mIHN1Ym1pdHRpdW5nIHRoZSBmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgbGFyZ2UgdGFnIGZyb20gdGhlIHBhcmVudCBjb250YWluZXJcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xhcmdlJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3dpdGNoIHRoZSBpY29uIGJhY2sgdG8gYSBwbHVzIVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYz0gcGx1c3F1YXJlKVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAvL2FuZCByZW1vdmUgdGhlIGFkZGVkIGNvbnRlbnQgdGhhdCB0aGUgcGx1cyBhZGRlZFxyXG5cclxuICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaW5mbycpXHJcbiAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChyZW1vdmUpXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgIHRvZG9pbmZvLmFwcGVuZENoaWxkKGZvcm0pXHJcbiAgICAgICAgICAgICAgICAgIC8vIGFkZCBzdWJtaXQgYnV0dG9uIG9uIGZvcm1cclxuIFxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIHdoZW4gd2UgY2xpY2sgYW4gZXhwYW5kIGljb24uLlxyXG4gICAgICAgICAgICAvLyB3ZSB3YW50IHRvIGV4cGFuZCB0aGF0IHNwZWNpZmljIHRvZG8uLlxyXG5cclxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbGFyZ2UnKVxyXG5cclxuICAgICAgICAgICAgLy8gd2UgdGhlbiBzZXQgdGhlIGltYWdlIHRvIGEgbWludXMgb3IgYSBwbHVzLCBkZXBlbmluZyBpZiB3ZSBhcmUgYWRkaW5nXHJcbiAgICAgICAgICAgIC8vIG9yIHJlbW92aW5nIGxhcmdlXHJcblxyXG4gICAgICAgICAgIGlmICggZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsYXJnZScpKSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnNyYyA9IG1pbnVzc3F1YXJlXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHRvZG9pbmZvKVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgIGVsc2Uge2UudGFyZ2V0LnNyYyA9IHBsdXNxdWFyZVxyXG4gICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaW5mbycpKX1cclxuXHJcblxyXG4gICAgICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHN0eWxlIGl0IG5vdyB0aGF0IHRoZSBkaXYgaXMgYWRkZWQsIG1heWJlIHRoZSBsYXJnZSBjbGFzcyB3aWxsIGFsc28gb3ZlcndyaXRlIGhvdyB3ZSBsYXkgdGhpaW5ncyBvdXQuLlxyXG5cclxuXHJcbiAgICAgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgYnV0dG9uY29udGFpbmVyLmFwcGVuZENoaWxkKGV4cGFuZClcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRhdGUgYnV0dG9uIFxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGF0ZWJ1dHRvbicpXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJ2RhdGUtZm5zJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gcHJvcC5kdWVkYXRlXHJcblxyXG4gICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICBpZiAocHJvcC5kdWVkYXRlID09IG8uZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJykgJiYgcHJvcC5jb21wbGV0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZXRvZG9idXR0b24nKS5jbGFzc0xpc3QuYWRkKCdkZWxldGV3aGVuZG9uZScpXHJcbiAgICAgICAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRldG9kb2J1dHRvbicpLnRleHRDb250ZW50ID0gXCJERUxFVEVcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gKCdET05FIScpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3AuZHVlZGF0ZSA9PSBvLmZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpICYmIHByb3AuY29tcGxldGVkICE9IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGV0b2RvYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnZGVsZXRld2hlbmRvbmUnKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZXRvZG9idXR0b24nKS50ZXh0Q29udGVudCA9IFwiWFwiXHJcbiAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAoJ0RVRSBUT0RBWScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBidXR0b25jb250YWluZXJcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChidXR0b24pXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuLy8gY3JlYXRlIHByaW9yaXR5IGJ1dHRvbiFcclxuXHJcbiAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5dG9kb2J1dHRvbicpXHJcbiAgICAgICAgICAgIGJ1dHRvbi5pZCA9ICdwcmlvcml0eWJ1dHRvbidcclxuXHJcblxyXG4gICAgIGlmIChwcm9wLnByaW9yaXR5ID09ICdwcmlvcml0eS1sb3cnKSB7YnV0dG9uLnRleHRDb250ZW50ID0gXCJMXCJcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eXdyYXBwZXJsb3cnKX1cclxuICAgICBlbHNlIGlmIChwcm9wLnByaW9yaXR5ID09ICdwcmlvcml0eS1tZWQnKSB7YnV0dG9uLnRleHRDb250ZW50ID0gJ00nXHJcbiAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5d3JhcHBlcm1lZCcpfVxyXG4gICAgIGVsc2Uge1xyXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSFwiXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5d3JhcHBlcmhpZ2gnKVxyXG4gICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChidXR0b24pXHJcblxyXG5cclxuICAgICBmdW5jdGlvbiBwcmlvcml0eUNoYW5nZXIoZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICAvLyB3aGVuIHdlIGNsaWNrIHRoZSBzcGVjaWZpYyB0b2RvIG9iamVjdCwgd2Ugd2lsbCBnZXQgYW4gaW5kZXggdmFsdWUsIGFzIHdlbGwgYXMgYSBwcm9qZWN0IHdoaWNoIHdlIGNhbiB1c2UgXHJcbiAgICAgICAgLy8gdG8gc3dpdGNoIGl0cyBwcmlvcml0eSFcclxuICAgICAgICAvLyB0aGlzIGZ1bmN0aW9uIHJlY2VpdmVzIHRoZSBldmVudFxyXG4gICAgICAgIC8vIGl0cyB0aGUgdG9kbyBjb250YWluZXJzIGRldGFpbHMgd2Ugd2FudCwgbm90IHRoZSBidXR0b24gY29udGFpbmVyIChwYXJlbnQpXHJcbiAgICAgICAgLy8gYnV0IHRoZSBwYXJlbnQgb2YgdGhlIGJ1dHRvbiBjb250YWluZXJcclxuXHJcbiAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlcicpXHJcbiAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAvLyBmaW5kIHRoZSBzcGVjaWZpYyBwcm9qZWN0IHdpdGhpbiBkZWZhdWx0IHByb2plY3RzXHJcbiAgICAgICAgICAgIC8vIHNpbmNlIGl0cyBhbiBhcnJheSwgYWNjZXNzIGl0IGF0IHRoYXQgc3BlY2lmaWMgaW5kZXhcclxuICAgICAgICAgICAgLy8gYW5kIGFkanVzdCBpdHMgcHJpb3JpdHlcclxuICAgICAgICAgICAgb2JqLnByb2plY3RzW2UudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQucHJvamVjdHNldF1bZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleF0ucHJpb3JpdHkgPSBwcmlvcml0eSBcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICBcclxuXHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eUNoYW5nZXIoZSlcclxuICAgICAgICAgICAgICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgPT0gXCJMXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIk1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eXdyYXBwZXJtZWQnKVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHl3cmFwcGVybG93JylcclxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNoYW5nZXIoZSwgJ3ByaW9yaXR5LW1lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHdlIG5lZWQgYSB3YXkgdG8gYWRqdXN0IHRoZSBwcmlvcml0eSBvbiB0aGUgc3BlY2lmaWMgdG9kbyEhXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0cyBjcmVhdGUgYSBmdW5jdGlvbiB0aGV5IGNhbiBhbGwgdXNlLi5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PSBcIk1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5d3JhcHBlcm1lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5d3JhcHBlcmhpZ2gnKVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5Q2hhbmdlcihlLCAncHJpb3JpdHktaGlnaCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eXdyYXBwZXJoaWdoJylcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHl3cmFwcGVybG93JylcclxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNoYW5nZXIoZSwgJ3ByaW9yaXR5LWxvdycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIH1cclxuLy8gQ3JlYXRlIGEgY29tcGxldGVkIGJ1dHRvblxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIlxyXG5cclxuaWYgKHByb3AuY29tcGxldGVkID09IHRydWUpIHtpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpfVxyXG5cclxuXHJcbmVsc2UgaWYgKHByb3AuY29tcGxldGVkID09IGZhbHNlKSB7aW5wdXQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyl9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gY2hhbmdlIGNvbXBsZXRlIHN0YXR1cyFcclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIGl0IGlzIGNsaWNrZWQsIHVwZGF0ZSB0aGUgdG9kbydzIGNvbXBsZXRlIHN0YXR1cyFcclxuICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgby5wcm9qZWN0c1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvLnByb2plY3RzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gdGhpcyBzZXRzIGl0IGdyZWVuIHdoZW4gd2UgY2xpY2sgdG8gY2hlY2tcclxuICAgICAgICAgICAgICAgICAgaWYgKCAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZScpIHx8ICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBsZXRlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBpdCBpcyBhbHJlYWR5IGNvbXBsZXRlIHdoZW4gY2xpY2tlZCwgdGhlbiByZW1vdmUgdGhlIGNsYXNzIGFuZCBjaGFuZ2UgdGhlIHByb2plY3RcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJylcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlIHRleHQgY29udGVudCB0byB0aGUgZGF0ZSBvZiB0aGUgdG9kbywgdW5sZXNzIGl0IGlzIHRvZGF5J3MgZGF0ZSBhdCB3aGljaCBwb2ludCBzaG93IGR1ZSB0b2RheSFcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBjb21wbGV0ZSBzdGF0dXMgb24gcHJvamVjdCFcclxuICAgICAgICAgICAgICAgICAgICBvLnByb2plY3RzW2UudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQucHJvamVjdHNldF1bZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleF0uY29tcGxldGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvLnByb2plY3RzW2UudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LnByb2plY3RzZXRdKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBidXR0b24gZnJvbSAnZG9uZSdcclxuICAgICAgICAgICAgICAgICAgaW1wb3J0ICgnZGF0ZS1mbnMnKVxyXG4gICAgICAgICAgICAgICAgICAudGhlbigoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLmR1ZWRhdGUgPT0gZGF0ZS5mb3JtYXQobmV3IERhdGUoKSwgXCJ5eXl5LU1NLWRkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGF0ZWJ1dHRvbicpLnRleHRDb250ZW50ID0gJ0RVRSBUT0RBWSEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRldG9kb2J1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2RlbGV0ZXdoZW5kb25lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGV0b2RvYnV0dG9uJykudGV4dENvbnRlbnQgPSBcIlhcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlYnV0dG9uJykudGV4dENvbnRlbnQgPSBwcm9wLmR1ZWRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGV0b2RvYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnZGVsZXRld2hlbmRvbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRlbGV0ZXRvZG9idXR0b24nKS50ZXh0Q29udGVudCA9IFwiWFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIGFkZCB0aGUgY2xhc3MgYW5kIGFkZCB0byByZWxldmFudCBwcm9qZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGF0ZWJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJylcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGF0ZWJ1dHRvbicpLnRleHRDb250ZW50ID0gJ0RPTkUhJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yIHRoZSBkZWxldGUgYnV0dG9uIHJlZCBhbmQgbWFrZSBpdCBsYXJnZXIhXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGV0b2RvYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnZGVsZXRld2hlbmRvbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRldG9kb2J1dHRvbicpLnRleHRDb250ZW50ID0gXCJERUxFVEVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGF0ZWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgICAgICAgICAgIG8ucHJvamVjdHNbZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0c2V0XVtlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4XS5jb21wbGV0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IHdlIG5lZWQgYSB3YXkgdG8gYWxzbyBzZXQgaXQgZ3JlZW4gaWYgY29tcGxldGVkIGlzIHRydWUgYnkgZGVmYXVsdCFcclxuICAgICAgICAgICAgICAgICAgICAvLyBkbyB0aGF0IHdpdGhpbiB0aGUgY3JlYXRpb24gb2YgdG9kb2NvbnRlbnQgZGl2c1xyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3RvZG9jaGVja2JveCcpXHJcbiAgICAgICAgICAgICAgICAgICBidXR0b25jb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgdGl0bGUgYW5kIGJ1dHRvbiBjb250YWluZXIgdG8gcXVpY2sgaW5mbyB0aGVuIHRvIGRpdiFcclxuICAgICAgICAgICAgICAgICAgIHF1aWNraW5mby5hcHBlbmRDaGlsZChidXR0b25jb250YWluZXIpXHJcbiAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5hcHBlbmRDaGlsZChxdWlja2luZm8pXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgaWYgKHByb3AuY29tcGxldGVkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlYnV0dG9uJykuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNoZWNrZWQgPSBcImNoZWNrZWRcIlxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gY3JlYXRlIGRlbGV0ZWQgYnV0dG9uIHdpdGhpbiB0b2RvIGVsZW1lbnRzXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvYnV0dG9uJylcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZXRvZG9idXR0b24nKVxyXG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlhcIlxyXG4gICAgICAgICAgICBidXR0b25jb250YWluZXJcclxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGJ1dHRvbilcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBlYWNoIGRlbGV0ZSBidXR0b24gXHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgLy8gb24gY2xpY2ssIGRlbGV0ZSB0aGUgdG9kbyEgd2l0aCB0aGUgcmVsZXZhbnQgZGV0YWlscyBmcm9tIHBhcmVudCB0b2RvIGNvbnRhaW5lclxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0KVxyXG5cclxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi90b2RvbW9kdWxlLmpzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgICAgIG9iai5kZWxldGVUb2RvKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucHJvamVjdHNldCwgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleClcclxuICAgICAgICAgICAgICAgICAgICAvLyBhZnRlciB3ZSBkZWxldGUgdGhlIHRvZG8sIHJlcG9wdWxhdGUgdGhlIGRpc3BsYXkgQCBhbGxcclxuICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZURpc3BsYXkoJ2FsbCcpXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIC8vIGFkZCB0byBlYWNoIHRvZG8gY29udGVudCB0aGF0IHRvZG8ncyBzcGVjaWZpYyBhcnJheSBpbmRleCBcclxuXHJcbiAgIFxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb3B1cFRvZG8oKVxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuXHJcbiAgICBhcHBlbmRUaW1lKClcclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB0byBjb2xvciBiYWNrIG9mIHNlbGVjdGVkIHByb2plY3QgcmVkIVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZFByb2plY3QoKSB7XHJcbiAgICBcclxuLy8gc2V0IHRoZSBhbGwgdGFnIGFzIHJlZCBzaW5jZSB3ZSBhcmUgZGlzcGxheWluZyBhbGwgXHJcbmNvbnN0IHJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWQnKVxyXG5yZWQuZm9yRWFjaCgoZWxlbSkgID0+IHtcclxuICAgIGlmIChlbGVtLmRhdGFzZXQudGl0bGUgPT0gXCJhbGxcIikge2VsZW0uY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpfVxyXG59KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJlZCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWQnKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdyZWRiYWNrJylcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG4vLyBkcmF3IHRoZSB0b2RvIGRpc3BsYXkhXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFJlbmRlclRvZG8oKSB7XHJcbiAgICBcclxuICBcclxuICAgIC8vIGdldCB0aGUgdG9kbyBhcmVhIGFuZCBzZXQgaXQgZXF1YWwgdG8gdGhlIGFsbCBhcnJheSBpbiBkZWZhdWx0cHJvamVjdHNcclxuICAgIC8vIHN0YXJ0IGJ5IGNsZWFyaW5nIHRoZSBhcmVhXHJcbiAgIFxyXG4gICAgcG9wdWxhdGVEaXNwbGF5KCdhbGwnKVxyXG4gICBcclxuICAgIC8vIGxvb3AgdGhlIGFycmF5IGFuZCBkcmF3IGRvbSBlbGVtZW50cyBmb3IgZWFjaCBvbmUhXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyBwb3B1cCB0b2RvIGRpc3BsYXkhXHJcbi8vIGNoYW5nZXMgY29sb3Igd2hlbiBtb3VzaW5nIG92ZXIgdGhlbSBhbmQgcmVtb3ZlcyBpdCB3aGVuIG1vdXNpbmcgb3V0XHJcbi8vIGxldHMgdGhlbSBwb3AtdXAgd2hlbiBjbGlja2VkIVxyXG5cclxuZnVuY3Rpb24gcG9wdXBUb2RvKCkge1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuLy8gc2NyaXB0IGJlbG93IHRvIG1hcmsgcHJvamVjdCB0aXRsZSByZWQgYmFzZWQgb24gaW5wdXQgYW5kIGRlZmF1bHQgdmlld1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0ZWQoKSB7XHJcblxyXG4gICAgLy8gdG8gYmUgcnVuIGFmdGVyIGRvbSBpcyBidWlsdCwgcXVlcnkgYWxsIHRpdGxlc1xyXG4gICAgLy8gd2UgYXJlIGdvaW5nIHRvIFxyXG5cclxuICAgIGNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWQnKVxyXG4gICAgdGl0bGVzLmZvckVhY2goKGVsZW0pID0+IHtcclxuXHJcbiAgICB9KVxyXG5cclxuXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGJlbG93IGFwcGVuZHMgY3VycmVudCBkYXkgaW4gdGltZSBpbiB0aGUgaGVhZGVyISB0byBiZSBjYWxsZWQgaW4gcG9wdWxhdGVEaXNwbGF5XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRUaW1lKCkge1xyXG4gICAgaW1wb3J0KCdkYXRlLWZucycpXHJcbiAgICAudGhlbigoZGF0ZSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxyXG4gICAgICAgIHRpbWUuY2xhc3NMaXN0LmFkZCgndGltZWhlYWRlcicpXHJcblxyXG4gICAgICAgIGxldCBkYXkgPSBkYXRlLmZvcm1hdChuZXcgRGF0ZSgpLCAnRUVFRScpXHJcbiAgICAgICAgbGV0IGRheW51bWJlciA9IGRhdGUuZm9ybWF0KG5ldyBEYXRlKCksICdlZScpXHJcbiAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5mb3JtYXQobmV3IERhdGUoKSwgJ01NTU0nKVxyXG4gICAgICAgIGxldCB5ZWFyID0gZGF0ZS5mb3JtYXQobmV3IERhdGUoKSwgJ3knKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXksIGRheW51bWJlciwgeWVhcilcclxuICAgICAgICB0aW1lLnRleHRDb250ZW50ID0gdG9kYXlcclxuICAgICAgICBjb25zdCBoZWFkZXJkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sdW1ucycpXHJcbiAgICAgICAgaGVhZGVyZGl2LnRleHRDb250ZW50ID0gXCJcIlxyXG5cclxuXHJcbiAgICAgICAgICAgIGhlYWRlcmRpdi5hcHBlbmRDaGlsZCh0aW1lKVxyXG4gICAgICAgIFxyXG5cclxuICAgIH0pXHJcblxyXG59IiwiaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gJy4vdG9kb21vZHVsZSdcclxuaW1wb3J0IHsgcHJvamVjdHMsIGRlZmF1bHRwcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdG1ha2VyLmpzJ1xyXG5jb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGVkJykuY2hlY2tlZFxyXG5cclxuXHJcblxyXG4vLyBsb2dpYyB0byBkZXRlcm1pbmUgcHJpb3JpdHlcclxuLy8gc2VyaWVzIG9mIHJhZGlvIGJ1dHRvbnMgbG9vcCB0aHJvdWdoIHRoZW1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtQ29udHJvbGxlcih0aXRsZSxkZXNjcmlwdGlvbixkdWVkYXRlLHByaW9yaXR5LHByb2plY3QsY29tcGxldGVkKSB7XHJcblxyXG5pZiAoY29tcGxldGVkID09IFwiXCIpIHtjb21wbGV0ZWQgPSBmYWxzZX1cclxuLy8gY3JlYXRlIGEgdG9kbyBvYmplY3QgZnJvbSB0aGUgc3BlY2lmaWVkIGlucHV0cyFcclxuXHJcbiBcclxuXHJcbiAgICAgICAgICAgLy8gYWRkIGl0IHRvIHRoZSBzcGVjaWZpYyBwcm9qZWN0Li4gIGFsbCBieSBkZWZhdWx0IG9yIHNlbGVjdGVkLi5cclxuXHJcblxyXG4gICBcclxuICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIC8vIGFuZCB0aGUgY3VzdG9tIHByb2plY3QgaXRzZWxmXHJcbiAgICAgICAgICAgIGxldCBvYmogPSBjcmVhdGVUb2RvKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZWRhdGUscHJpb3JpdHkscHJvamVjdCxjb21wbGV0ZWQpXHJcbiAgICAgICAgICAgIHByb2plY3RzW3Byb2plY3RdLnB1c2gob2JqKVxyXG5cclxuICAgICAgICAgICAgLy8gdGhlIGZ1bmN0aW9uIHJldHVybnMgYW4gb2JqZWN0IGFuZCB3ZSBwdXNoIGl0IG9udG8gdGhlIGFwcHJvcHJpYXRlIGN1c3RvbSBwcm9qZWN0cyBhcnJheVxyXG5cclxuICAvLyB3ZSBhbHNvIHdhbnQgdG8gaGF2ZSBhIGN1c3RvbSBpbmRleCBwcm9wZXJ0eSBmb3IgdGhlIHRvZG8ncyBhbmQgZmlndXJlIG91dCB0aGVpciBwb3NpdGlvbiB3aXRoaW4gdGhlaXIgcmVzcGVjdGl2ZSBhcnJheVxyXG4gIHByb2plY3RzW3Byb2plY3RdLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgZWxlbS5pbmRleCA9IGluZFxyXG4gICBcclxuICB9KVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlaW5kZXgoKSB7XHJcbiAgICAgIHByb2plY3RzW3Byb2plY3RdLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgZWxlbS5pbmRleCA9IGluZFxyXG4gICAgY29uc29sZS5sb2coJ0FSUkFZTE9PUCcsIGVsZW0pXHJcbiAgfSlcclxuICB9XHJcbiAgIFxyXG4gICAgICAgLy8gYWZ0ZXIgd2UgaGF2ZSBwdXNoZWQgdGhlIG9iamVjdCBvbnRvIHByb2plY3RzXHJcbiAgICAgICAvLyB3ZSBsb29wIHRoZSBhcnJheSBhbmQgYWRqdXN0IGluZGV4ZXMgc28gdGhlIHRvZG8ncyBoYXZlIGN1c3RvbSBpbmRleGVzIVxyXG5cclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICBcclxuICAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvLyBhcHBlbmQgdGhlIHRvZG8gdG8gdGhlIGFwcHJvcHJpYXRlIHByb2plY3QhXHJcbi8vIGl0IGlzIGVpdGhlciB0byBBbGwgcHJvamVjdHMsIG9yIGEgc3BlY2lmaWMgb25lXHJcbi8vIGZvciBhbGwgYmVsb3ciLCIvLyBwcm9qZWN0cyB3aWxsIG5lZWQgdG8gYmUgY2FwYWJsZSBvZiBzdG9yaW5nIHdoaWNoIHRvZG8ncyBiZWxvbmcgdG8gdGhlbVxuLy8gaXQgbG9va3MgY2xlYW5lciB0byBzdG9yZSBhcyBhbiBvYmplY3Qgb2YgcHJvamVjdCBuYW1lcyBhbmQgaGF2ZSB0aGUgdmFsdWVzIGVxdWFsIHRvXG4vLyBhcnJheXMgdGhhdCBjb250YWluIHRoZSByZWxldmVudCB0b2RvIG9iamVjdHMgXG5cbi8vIHdlIGNhbiBjb21lIHVwIHdpdGggYSBtYXN0ZXIgcHJvamVjdHMgb2JqZWN0LCBpZiBpbiB0aGUgVUkgd2Ugd291bGQgbGlrZSB0byBzZXBhcmF0ZSB0aGUgZGlzcGxheVxuLy8gaXQgaXMgZWFzaWVyIHRvIGhhdmUgYSBzZXBhcmF0ZSBkZWZhdWx0IHByb2plY3Qgb2JqZWN0IGFzIHdlIGNhbiBqdXN0IGxvb3Agb3ZlciBpdCBcbi8vIHRvIHBvcHVsYXRlIHRoZSBkaXNwbGF5IGFuZCBub3QgaGF2ZSB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gZGVmYXVsdCB2cyBub25cblxuLy8gYWxsIGtleSB3aWxsIGhvdXNlIGFycmF5IHRoYXQgcGFyc2VzIGFsbCBhdmFpbGFibGUgcHJvamVjdCBvYmplY3RzIGFuZCBsaXN0cyB0aGVtXG4vLyB0aGUgdG9kYXkgYW5kIHRoaXN3ZWVrIGFycmF5IHdpbGwgaGF2ZSB0byBkbyB3aXRoIHNvcnRpbmcgXG5cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRwcm9qZWN0cyA9IHtcbiAgICBhbGw6IFtdLFxuICAgIHRvZGF5OiBbXSxcbiAgICB0aGlzd2VlazogW10sXG59XG5cbi8vIHRoaXMgZnVuY3Rpb24gdG8gcG9wdWxhdGUgZGVmYXVsdCBwcm9qZWN0cywgd2hpY2ggd2lsbCBsb29wIG92ZXIgY3VzdG9tIHByb2plY3RzIVxuXG5cbi8vIHdlIHdpbGwgbWFrZSBmdW5jdGlvbnMgdG8gc29ydCBhbGwgdG8gY3JlYXRlIHRoaXMgd2VlayBhbmQgdG9kYXkhXG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0c3Rlc3QgPSB7XG4gICAgMjogW3t0aXRsZToncG9vcmFnYXMnLCBkdWVkYXRlOiAnMjAyMi0wMi0wMicsIGRlc2NyaXB0aW9uOiAncG9vcG9vQVNEQVNEQVNEJywgcHJpb3JpdHk6ICdsb3cnLCBpbmRleDogMH0se3RpdGxlOidwb29yYWdhcycsIGR1ZWRhdGU6ICcyMDIyLTAyLTAyJywgZGVzY3JpcHRpb246ICdwb29wb29BU0RBU0RBU0QnLCBwcmlvcml0eTogJ2xvdycsIGluZGV4OiAwfSx7dGl0bGU6J3Bvb3JhZ2FzJywgZHVlZGF0ZTogJzIwMjItMDItMDInLCBkZXNjcmlwdGlvbjogJ3Bvb3Bvb0FTREFTREFTRCcsIHByaW9yaXR5OiAnbG93JywgaW5kZXg6IDB9LHt0aXRsZToncG9vcmFnYXMnLCBkdWVkYXRlOiAnMjAyMy0wMi0wMicsIGRlc2NyaXB0aW9uOiAncG9vcG9vQVNEQVNEQVNEJywgcHJpb3JpdHk6ICdsb3cnLCBpbmRleDogMH1dLFxuICAgIDM6IFt7dGl0bGU6J3Bvb3JhZ2FzJywgZHVlZGF0ZTogJzIwMjItMDItMDInLCBkZXNjcmlwdGlvbjogJ3Bvb3Bvb0FTREFTREFTRCcsIHByaW9yaXR5OiAnbG93JywgaW5kZXg6IDB9XSxcbiAgICA1OiBbe3RpdGxlOidwb29yYWdhcycsIGR1ZWRhdGU6ICcyMDIyLTAyLTAyJywgZGVzY3JpcHRpb246ICdwb29wb29BU0RBU0RBU0QnLCBwcmlvcml0eTogJ2xvdycsIGluZGV4OiAwfV1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0ge1xuICBcbn1cblxuLy8yOiBbe3RpdGxlOidwb29yYWdhcycsIGR1ZWRhdGU6ICcyMDIyLTAyLTAyJywgZGVzY3JpcHRpb246ICdwb29wb29BU0RBU0RBU0QnLCBwcmlvcml0eTogJ2xvdycsIGluZGV4OiAwfSxdXG4vLyBhZGQgdGhlIGFwcHJvcHJpYXRlIHRvZG8ncyB0byB0aGVzZSBwcm9qZWN0cyBiYXNlZCBvbiB0aGUgYXBwcm9wcmlhdGUgZGF0ZXMgKGRhdGVmbiEpXG5cblxuXG4vLyBub3cgd2UgZGV2ZWxvcCBhIHdheSB0byBhZGQgY3VzdG9tIHByb2plY3RzIHRvIHRoaXMgb2JqZWN0IVxuLy8gaWYgdmlzdWFsbHkgd2Ugd2FudCB0byBzaG93IGEgY3VlIHRoYXQgdGhpcyBpcyBhbiBvcHRpb24gd2UgY2FuIGRvIHRoaXMgd2l0aCB0aGUgVUkgb3Igbm90IGluIHRoaXMgZnVuY3Rpb25cbi8vIHJ1bm5pbmcgYWRkIHByb2plY3Qgc2hvdWxkIGFkZCBhIHByb1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3RuYW1lKSB7XG5cbiAgICBcblxuICAgIC8vIGlmIHdlIHRyeSB0byBhZGQgYSBwcm9qZWN0IG5hbWUgdGhhdCBhbHJlYWR5IGV4aXN0cywgd2UgY2FuIHJldHVybiBhIGNvbmZpcm1hdGlvbiBcbmlmIChwcm9qZWN0bmFtZSA9PSBcIlwiKSB7cmV0dXJufVxuXG5cbmlmIChwcm9qZWN0cy5oYXNPd25Qcm9wZXJ0eShwcm9qZWN0bmFtZSkpIHtcbiAgICBjb25zb2xlLmxvZygnbG9ncyB0aGF0IHByb3BlcnR5IGV4aXN0cyB3aXRoaW4gcHJvamVjdG1ha2VyLmpzJylcblxuICAgIHJldHVybiBmYWxzZVxuICAgIC8vIGNhbGwgZG9tIGZ1bmN0aW9uIHRvIHR1cm4gZmllbGQgcmVkIGFuZCBjaGFuZ2UgcGxhY2Vob2xkZXIgdG8gZXhpc3RzIVxuXG5cbn1cblxuICAgIC8vIGVsc2Ugd2UgYWRkIHRoZSBwcm9qZWN0IG5hbWUgYXMgYSBrZXkgdG8gcHJvamVjdCBvYmplY3RcbiAgICAvLyBldmVudHVhbGx5IHdlIHdpbGwgYXBwZW5kIHRvZG8ncyB0byB0aGVzZSBjYXRlZ29yaWVzIGJhc2VkIG9uIHNvbWUgY3JpdGVyaWEgXG5cbnByb2plY3RzW3Byb2plY3RuYW1lXSA9IFtdXG5sZXQgcmVzdWx0ID0gcHJvamVjdG5hbWVcblxuXG5cbmNvbnNvbGUubG9nKCdERUZBVUxUIFBST0pTIEFSUkFZISEhJylcbmNvbnNvbGUubG9nKHByb2plY3RzLCAnY3VycmVudCBwcm9qZWN0cyBvYmplY3QnKTtcblxuICBcblxuXG5cbnJldHVybjtcbn1cblxuXG5cblxuXG5cblxuLy8gd2Ugd2FudCB0byBkZWxldGUgdGhleSBrZXkgb2YgdGhlIHByb2plY3Rcbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgcHJvamVjdCwgd2UgbmVlZCBhIHdheSB0byBkZXRlcm1pbmUgd2hpY2ggcG9zaXRpb25cbi8vIGluIHRoZSBhcnJheSB0aGUgcHJvamVjdCBpcyB0byByZW1vdmVcbi8vc3VwcGx5IHRoaXMgYW4gaW5kZXggYXMgdGhpcyB3aWxsIGJlIHZpc3VhbCBiYXNlZFxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcblxuICAgICAgICBkZWxldGUgcHJvamVjdHNbcHJvamVjdF1cbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXG59XG5cblxuXG4vLyBmdW5jdGlvbiBiZWxvdyByZXBvcnRzIG5hbWUgb2YgcHJvamVjdHMgY3VycmVudGx5IGluIGxpc3QgYW5kIGFwcGVuZCB0byBhbiBhcnJheVxuXG5leHBvcnQgbGV0IGN1cnJlbnRDdXN0b21Qcm9qZWN0cyA9IFtdXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgY3VycmVudEN1c3RvbVByb2plY3RzID0gW11cblxuXG4gICAgICAgIGZvciAobGV0IHByb2plY3QgaW4gcHJvamVjdHMpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDdXN0b21Qcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcblxuXG4gICAgfSIsIi8vIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIHRvZG8gb2JqZWN0c1xuZnVuY3Rpb24gdXBkYXRlQWxsKCkge1xuICAgIFxuICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxuICAgIC50aGVuKChvKSA9PiB7XG4gICAgICAgIG8uZGVmYXVsdHByb2plY3RzLmFsbCA9IFtdXG5cbiAgICAgICAgLy8gbG9vcCBvdmVyIGFsbCBjdXN0b20gcHJvamVjdCBhcnJheXMgYW5kIGFkZCB0byBBbGxcbiAgIFxuICAgICAgIGZvciAobGV0IHByb3AgaW4gby5wcm9qZWN0cykge1xuICAgICAgICAvLyBpbiBoZXJlIHByb3AgaXMgZWFjaCBvYmplY3Qga2V5IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGFycmF5IGhvbGRpbmcgb2JqZWN0c1xuICAgICAgICAvLyBvZiBlYWNoIHByb2plY3RzIHRvZG8nc1xuXG4gICAgICAgIC8vIHdlIG11c3QgbG9vcCBvdmVyIGVhY2ggcHJvcCBhbmQgYWRkIHRvIEFsbCFcblxuXG5cblxuICAgICAgIH1cbiAgICB9KVxufVxuXG5sZXQgdG9kb2NhdGNoMSA9IFtdXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCAgcHJvamVjdCwgY29tcGxldGVkID0gZmFsc2UpIFxueyAgIFxuXG5cbiAgICBsZXQgb2JqID0ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksICBwcm9qZWN0LCBjb21wbGV0ZWR9XG4gICAgXG5cbiAgICBjb25zb2xlLmxvZyggJ3RvZG9jYXRjaCcpXG5cbiAgICAvLyB3aGVuIHdlIG1ha2UgYSB0b2RvLCB3ZSB3YW50IHRvIHJlZnJlc2ggdGhlIGFsbCBvYmplY3QgYWdhaW4gd2hpY2ggaXMgYSBjb2xsZWN0aW9uIG9mIGV2ZXJ5IHByb2plY3RzIG9iamVjdCFcbiAgICB1cGRhdGVBbGwoKSBcbiAgICBcblxuICAgIFxuXG5cbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksICBwcm9qZWN0LCBjb21wbGV0ZWR9XG59XG5cblxuLy8gd2Ugd2FubmEgdXBkYXRlIHRoZSBhbGwgb2JqZWN0IGFmdGVyIG1ha2luZyBhIHRvZG8hXG5cbi8vIGZ1bmN0aW9uIHRvIHNldCBjb21wbGV0ZSBvZiB0b2RvIG9iamVjdCB0byB0cnVlIHRha2VzIGEgdG9kbyBvYmplY3QgYXMgYW4gYXJndW1lbnRcblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXBsZXRlKG9iaikge1xuICAgIFxuICAgIGlmIChvYmouY29tcGxldGVkKSB7XG4gICAgXG4gICAgICAgIG9iai5jb21wbGV0ZWQgPSBmYWxzZVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgb2JqLmNvbXBsZXRlZCA9IHRydWVcbiAgICByZXR1cm5cbn1cblxuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgcHJpb3JpdHkgYmV0d2VlbiBsb3cgbWVkaXVtIGFuZCBoaWdoIHRha2VzIGEgdG9kbyBvYmplY3QgYXMgYXJndW1lbnQgYW5kIGEgc2VsZWN0aW9uXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQcmlvcml0eShvYmosIHByaW9yaXR5KSB7XG4gICAgb2JqLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICByZXR1cm5cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUb2RvKHByb2plY3QsIGluZGV4KSB7XG5cbiAgICAvLyB3ZSBoYXZlIGEgc3BlY2lmaWMgcHJvamVjdCwgYW5kIGluZGV4IG9mIHRoZSB0b2RvIVxuICAgIC8vIGRlbGV0ZSBpdCBmcm9tIHRoZSBhcnJheSFcbiAgICBpbXBvcnQgKCcuL3Byb2plY3RtYWtlci5qcycpXG4gICAgLnRoZW4oKG9iaikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LCBpbmRleCwgb2JqLnByb2plY3RzKVxuICAgICAgICBvYmoucHJvamVjdHNbcHJvamVjdF0uc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgICAgIC8vIGFmdGVyIHdlIGN1dCB0aGUgdG9kbyBvdXQsIHdlIG11c3QgcmVmcmVzaCB0aGUgcHJvcGVyIGluZGV4ZXMgb2YgdGhlIGFycmF5IGVsZW1lbnRzIGFnYWluIVxuICAgICAgICBvYmoucHJvamVjdHNbcHJvamVjdF0uZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XG4gICAgICAgICAgICBlbGVtLmluZGV4ID0gaW5kXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQVJSQVlMT09QJywgZWxlbSlcbiAgICAgICAgICB9KVxuXG5cbiAgICAgICAgXG4gICAgfSlcbiAgICBcblxuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9