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
/* harmony import */ var _src_images_plus_circle_svgrepo_com_6_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/plus-circle-svgrepo-com(6).svg */ "./src/images/plus-circle-svgrepo-com(6).svg");
/* harmony import */ var _src_images_plus_circle_svgrepo_com_7_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/images/plus-circle-svgrepo-com(7).svg */ "./src/images/plus-circle-svgrepo-com(7).svg");
/* harmony import */ var _src_images_minus_square_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/minus-square-svgrepo-com.svg */ "./src/images/minus-square-svgrepo-com.svg");
/* harmony import */ var _src_images_text_align_center_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/images/text-align-center-svgrepo-com.svg */ "./src/images/text-align-center-svgrepo-com.svg");
/* harmony import */ var _src_images_backgrounds_Hexagon_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/images/backgrounds/Hexagon(1).svg */ "./src/images/backgrounds/Hexagon(1).svg");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _buttonlogic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttonlogic.js */ "./src/buttonlogic.js");
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


document.body.style.backgroundImage =`url(${_src_images_backgrounds_Hexagon_1_svg__WEBPACK_IMPORTED_MODULE_5__})`



    // set main plus image 


    document.querySelector('.plusbutton').src = _src_images_plus_circle_svgrepo_com_6_svg__WEBPACK_IMPORTED_MODULE_1__
   
Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./buttonlogic.js */ "./src/buttonlogic.js"))
.then((o) => {

    renderCustomProjects()
    initialRenderTodo()
    o.modalLogic()
    o.addButtonLogic()





})

;(0,_buttonlogic_js__WEBPACK_IMPORTED_MODULE_6__.initialproj)()
;(0,_buttonlogic_js__WEBPACK_IMPORTED_MODULE_6__.initialtodosubmit)()


}


// populate main display like todo area based on selected project!


function populateDisplay(projectobject ) {

    // set todoheader image

    document.querySelector('.todoheaderimage').src = _src_images_text_align_center_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__

    // set background image

    document.body.style.backgroundImage =`url(${_src_images_backgrounds_Hexagon_1_svg__WEBPACK_IMPORTED_MODULE_5__})`

    // set main plus image 

    document.querySelector('.plusbutton').src = _src_images_plus_circle_svgrepo_com_6_svg__WEBPACK_IMPORTED_MODULE_1__



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
 if (date.parseISO(elem.duedate) <= date.addWeeks((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(date.format(new Date(), 'yyyy-MM-dd')), 1))
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
                
                else {  e.target.parentElement.parentElement.querySelector('.datebutton').textContent = date.value}
                }
                    
                  
                   
                 
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
            e.target.src = _src_images_minus_square_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2J1dHRvbmxvZ2ljX2pzLXNyY19kb21Mb2dpY19qcy5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQzlEO0FBQ3dFO0FBQ0M7QUFDQTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0xBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNJQUEyQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhEQUFlO0FBQ25DO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsOENBQThDO0FBQ3RHLDBCQUEwQiwrQ0FBK0M7QUFDekUsZ0JBQWdCLGtJQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhIQUF1QjtBQUN4QztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNFQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0VBQWE7QUFDeEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0VBQWM7QUFDN0M7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzSUFBMkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsK0xBQWtCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNJQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsNkRBQVU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLCtMQUFrQjtBQUNyQjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOEhBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsUUFBUSxvSUFBMEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhIQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQWE7QUFDYjtBQUNBLHFEQUFxRDtBQUNyRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0lBQTJCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkhBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhIQUF1QjtBQUNqQztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0lBQTBCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhIQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSUFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBYztBQUNkLFFBQVEsc0lBQTJCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNJQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvSUFBMEI7QUFDOUM7QUFDQSxxQkFBcUI7QUFDckIsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhIQUF1QjtBQUN2QyxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0Q7QUFDVDtBQUNQO0FBQ1Y7QUFDOUI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0lBQTJCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFlBQVksOERBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOEhBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzSUFBMkI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhIQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsK0JBQStCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdnJDQTtBQUNBO0FBQ0E7QUFDaUU7QUFDakU7QUFDd0U7QUFDQztBQUNMO0FBQ3BFO0FBQ3lFO0FBQ3pFO0FBQ3lFO0FBQ3pFO0FBQ21DO0FBQ25DO0FBQytEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0lBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0lBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxvSUFBMEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhIQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0lBQTJCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtMQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxrRUFBa0IsQ0FBQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsc0VBQWE7QUFDN0Q7QUFDQSxvSUFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDZEQUFXO0FBQ1gsbUVBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCwwRUFBVztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsa0VBQWtCLENBQUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNFQUFhO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNJQUEyQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrTEFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0xBQWtCO0FBQ2xCO0FBQ0Esa0RBQWtELG9EQUFRO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvRUFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0lBQTJCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3SEFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkdBQTZHLG9FQUFTO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUVBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlLG9FQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtMQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1JQUF3QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzSUFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtMQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtJQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtMQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLElBQUksUUFBUSxXQUFXLFNBQVMsT0FBTyxFQUFFLEtBQUs7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaG5DeUM7QUFDb0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVEQUFVO0FBQ2hDLFlBQVksc0RBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNEQUFRO0FBQ1Y7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFRO0FBQ2Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFTztBQUNQLFNBQVMsbUdBQW1HLEVBQUUsbUdBQW1HLEVBQUUsbUdBQW1HLEVBQUUsbUdBQW1HO0FBQzNaLFNBQVMsbUdBQW1HO0FBQzVHLFNBQVMsbUdBQW1HO0FBQzVHOztBQUVPO0FBQ1A7QUFDQTs7QUFFQSxPQUFPLG1HQUFtRztBQUMxRzs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR087O0FBRVA7O0FBRUE7QUFDQSx3QkFBd0I7OztBQUd4QjtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTzs7QUFFUDtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFTztBQUNBO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNJQUEyQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDTztBQUNQOzs7QUFHQSxlQUFlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxZQUFZO0FBQ1o7OztBQUdBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7OztBQUlPOztBQUVQO0FBQ0E7QUFDQSxJQUFJLHNJQUE0QjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBLEtBQUs7QUFDTDs7O0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2J1dHRvbmxvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvZG9tTG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9mb3JtbG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9wcm9qZWN0bWFrZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy90b2RvbW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1Db250cm9sbGVyIGFzIGZvcm1TdWJtaXQgIH0gZnJvbSAnLi9mb3JtbG9naWMuanMnXHJcblxyXG5pbXBvcnQgbWFpbnBsdXNpbWFnZSBmcm9tICcuLi9zcmMvaW1hZ2VzL3BsdXMtY2lyY2xlLXN2Z3JlcG8tY29tKDYpLnN2ZydcclxuaW1wb3J0IGhvdmVycGx1c2ltYWdlIGZyb20gJy4uL3NyYy9pbWFnZXMvcGx1cy1jaXJjbGUtc3ZncmVwby1jb20oNykuc3ZnJ1xyXG5pbXBvcnQgY2xpY2twbHVzaW1hZ2UgZnJvbSAnLi4vc3JjL2ltYWdlcy9wbHVzLWNpcmNsZS1zdmdyZXBvLWNvbSg4KS5zdmcnXHJcblxyXG5cclxuXHJcbi8vIHJlc2V0IGlucHV0IGZ1bmN0aW9uXHJcbmV4cG9ydCBsZXQgY3VycmVudHNlbGVjdGVkcHJvamVjdCA9IFwiXCJcclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0SW5wdXRzKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgIGVsZW0udmFsdWUgPSBcIlwiXHJcbiAgICAgICAgZWxlbS5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICBpZiAoZWxlbS50eXBlID09IFwiZGF0ZVwiKSB7XHJcbiAgICAgICAgICAgIGltcG9ydCgnZGF0ZS1mbnMnKVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgIChkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbS52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBlbGVtLnZhbHVlID0gZGF0ZS5mb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGVkJykuY2hlY2tlZD1cIlwiXHJcbn1cclxuXHJcblxyXG4vL3RvZ2dsZSBtb2RhbCBmdW5jdGlvblxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKSB7XHJcblxyXG4gICAgY29uc3QgbW9kYWx3aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpXHJcblxyXG5tb2RhbHdpbmRvdy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1vZGFsJylcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsYmFjaycpXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLmNsYXNzTGlzdC50b2dnbGUoJ2JpZ2hpZGUnKVxyXG5cclxuXHJcbmNsb3NlbG9naWMoKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIGZ1bmN0aW9uIGJlbG93IGFkZHMgY2xpY2sgZXZlbnRzIHRvIGN1c3RvbSBwcm9qZWN0IHRpdGxlIGJ1dHRvbnMgc28gd2hlbiB0aGV5IGFyZSBjbGlja2VkIHRoZXkgY3JlYXRlIGFuIGV2ZW50XHJcbiAgICBcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBjdXN0b21CdXR0b25Mb2dpYygpIHtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b21wcm9qZWN0dGl0bGUnKVxyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQuZGF0YXNldC50aXRsZVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZURpc3BsYXkodGFyZ2V0KVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gYmVsb3cgYWRkcyBjbGljayBldmVudHMgdG8gdG9kbyBidXR0b25zXHJcbiAgICBcclxuICAgIGV4cG9ydCBmdW5jdGlvbiB0b2RvQnV0dG9uTG9naWMoKSB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb2J1dHRvbicpXHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB3ZSBjbGljayBkZWxldGUsIGNhbGwgdGhlIGRlbGV0ZSB0b2RvIGZ1bmN0aW9uIG9uIHRoZSBzcGVjaWZpYyB0b2RvIVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGRlbGV0ZSB0aGUgdG9kbyBhdCBpbmRleCAke2UudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4fSBvZiBjdXN0b21cclxuICAgICAgICAgICAgICAgIHByb2plY3QgJHtlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0fWApXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vdG9kb21vZHVsZS5qcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG8uZGVsZXRlVG9kbyhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0c2V0LCBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWZ0ZXIgZGVsZXRlIHRvZG8sIGxldHMgcG9wdWxhdGUgdGhlIGRpc3BsYXkhXHJcbiAgICAgICAgICAgICAgICAgaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuICAgICAgICAgICAgICAgICAudGhlbigoZG9tKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9tLnBvcHVsYXRlRGlzcGxheSgnYWxsJylcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gcGx1cyBzd2l0Y2ggaW1hZ2UgbG9naWMgb24gaG92ZXIgYW5kIGNsaWNrXHJcbiAgICBcclxuICAgICBmdW5jdGlvbiBwbHVzQnV0dG9uSW1hZ2VMb2dpYygpIHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbHVzYnV0dG9uJylcclxuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZS50YXJnZXQuc3JjID0gaG92ZXJwbHVzaW1hZ2VcclxuICAgICBcclxuICBcclxuICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgZS50YXJnZXQuc3JjID0gbWFpbnBsdXNpbWFnZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnNyYyA9IGNsaWNrcGx1c2ltYWdlXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJvYXN0KCkge1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dGNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuICAgICAgICBjb25zdCB0b2Rvc2VsZWN0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZWxlY3QnKVxyXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNlbGVjdCcpXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhtb2R1bGUucHJvamVjdHMpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBpbnB1dGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dGNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuICAgICAgICBjb25zdCB0b2Rvc2VsZWN0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZWxlY3QnKVxyXG4gICAgXHJcbiAgICAgICAgcHJvamVjdGJveC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICBpbnB1dGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICB0b2Rvc2VsZWN0YnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgXHJcbiAgICB0b2Rvc2VsZWN0YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZWJnJykgXHJcbiAgICBwcm9qZWN0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuICAgIHRvZG9zZWxlY3RidXR0b24uY2xhc3NMaXN0LmFkZCgnZ2hvc3QnKVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBlbHNlIHsgICBcclxuICAgICAgICB0b2Rvc2VsZWN0YnV0dG9uLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICB0b2Rvc2VsZWN0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuICAgICAgICB0b2Rvc2VsZWN0YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2dob3N0JykgIFxyXG4gICAgICAgIHByb2plY3RidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlYmcnKSBcclxuICAgICAgICBwcm9qZWN0Ym94LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSBcclxuICAgICAgICBpbnB1dGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyl9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvL21vZGFsIGxvZ2ljIHRvIGJlIHVzZWQgd2l0aCBwbHVzIGJ1dHRvbiBcclxuICAgIFxyXG4gICAgIGV4cG9ydCBmdW5jdGlvbiAgbW9kYWxMb2dpYyAoKSB7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgbW9kYWx3aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgLy8gd2UgbWVlZCBhIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHdlIGFyZSBvcGVuaW5nIHRoZSBtb2RhbFxyXG4gICAgLy8gaW4gb3RoZXIgd29yZHMgaWYgdGhlIHByb2plY3RzIG9iamVjdCBpcyBlbXB0eVxyXG4gICAgICAgIC8vIHRoZW4gZ3JleSBvdXQgdGhlIHRvLWRvIHNlY3Rpb24gaW5pdGlhbGx5XHJcblxyXG5cclxucm9hc3QoKVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIHNob3cgYW5kIGhpZGUgbW9kYWwgYnkgdG9nZ2xpbmcgYSBjbGFzcyB0byBiZSBjYWxsZWQgaW4gb3RoZXIgZnVuY3Rpb25zXHJcblxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSB3aGVuIG1vZGFsIHNob3dzIG9yIG5vdFxyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKSB7XHJcbiAgICAgICAgICAgIG1vZGFsd2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW9kYWwnKVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gZnVuY3Rpb24gdG8gY29uc2lkZXIgd2hlbiB3aW5kb3cgb3V0c2lkZSBvZiBtb2RhbCBpcyBjbGlja2VkIHRvIGNsb3NlIG1vZGFsXHJcbiAgICAvLyBzaW5jZSBtb2RhbHdpbmRvdyBpcyB0aGUgbW9kYWwgc2VsZWN0b3Igd2hpY2ggaXMgdGhlIGVudGlyZSBiYWNrZ3JvdW5kXHJcbiAgICAvLyBhbnl0aGluZyBjbGlja2VkIGluIHRoZSBiYWNrZ3JvdW5kIHRoYXQgaXMgbm90IHRoZSBtb2RhbCBjb250ZW50IHdpbGwgY3Vhc2UgdGhlIHdpbmRvdyB0byBjbG9zZVxyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gd2luZG93T25DbGljayhldmVudCkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbHdpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIG1vZGFsd2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsYmFjaycpO1xyXG4gICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbW9kYWwnKVxyXG4gICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5jbGFzc0xpc3QuYWRkKCdiaWdoaWRlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgd2luZG93T25DbGljayk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNhbGwgcHJvamVjdCBidXR0b24gc3VibWl0IGxvZ2ljIHdoZW4gbW9kYWwgYWN0aXZlXHJcbiAgICBcclxuIFxyXG4gICAgICAgIHByb2plY3RzdWJtaXRsb2dpYygpXHJcblxyXG5cclxuICAgICAgICAvLyBjYWxsIHN1Ym1pdHRvZG8gZm9ybSBsb2dpYyB3aGVuIG1vZGFsIGFjdGl2ZSBcclxuICAgICAgICBzdWJtaXRMb2dpYygpXHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBiZWxvdyB0byBhZGQgZXZlbnRzIHRvIHN1Ym1pdGlucHV0cyBhdCBhbGwgdGltZXMsIGFuZCBkZWNpZGUgd2hhdCBoYXBwZW5zXHJcbi8vIHdoZW4gc3VibWl0IGlzIGNsaWNrZWQhXHJcbi8vIGVuc3VyZSBmaWVsZHMgZ28gcmVkIHdoZW4gYmFkIGRhdGEgYW5kIHRoYXQgc3VibWl0IHdvbid0IHdvcmsgd2l0aCBiYWQgZGF0YSEgKGl1biBiZWxvdyBmdW5jdGlvbilcclxuICAgIFxyXG5cclxudmFyIHRvZG90aXRsZSA9IFwiXCJcclxudmFyIHRvZG9kZXNjcmlwdGlvbiA9IFwiXCJcclxuXHJcbnZhciB0b2RvZHVlZGF0ZSA9IFwiXCJcclxuXHJcbiBpbXBvcnQoJ2RhdGUtZm5zJylcclxuLnRoZW4oKG8pID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBvLmZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpXHJcbiAgICB0b2RvZHVlZGF0ZSA9IGRhdGVcclxufSlcclxuXHJcbnZhciB0b2RvcHJpb3JpdHkgPSBcIlwiXHJcbnZhciB0b2RvcHJvamVjdCA9IFwiXCJcclxudmFyIHRvZG9jb21wbGV0ZWQgPSBcIlwiXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnRzdG9TdWJtaXRJbnB1dHMoKSB7XHJcblxyXG4gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgY29uc3Qgc3VibWl0dGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKVxyXG4gICAgY29uc3Qgc3VibWl0ZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKVxyXG4gICAgY29uc3Qgc3VibWl0cHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxyXG4gICAgY29uc3Qgc3VibWl0Y29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlZCcpXHJcbiAgICBjb25zdCBzdWJtaXRkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZWRhdGUnKVxyXG4gICAgY29uc3Qgc3VibWl0cHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXHJcbiAgICBjb25zdCBzZWxlY3RlZHByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3B0aW9ucycpXHJcbiAgIFxyXG5cclxuLy8gdGhpcyBzZXRzIHRvZG8gcHJvamVjdCB0byB3aGF0cyBpcyBzZWxlY3RlZCBieSBkZWZhdWx0IHNvIHdlIGdldCBzb21ldGhpbmdcclxuXHJcbiAgXHJcbnRvZG9wcm9qZWN0ID0gc2VsZWN0ZWRwcm9qLnZhbHVlXHJcblxyXG5cclxuICAgIHN1Ym1pdHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgIHRvZG90aXRsZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgY29uc29sZS5sb2codG9kb3RpdGxlKVxyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICBjb25zdCBzdWJtaXR0b2RvYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdGJ1dHRvbicpXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09IFwiXCIgfHwgY2hlY2tUZXh0KGUudGFyZ2V0LnZhbHVlKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBzdWJtaXR0aXRsZS5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJylcclxuICAgICAgICAgICAgc3VibWl0dG9kb2J1dHRvbi5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQudmFsdWUgIT0gXCJcIiAmJiBjaGVja1RleHQoZS50YXJnZXQudmFsdWUpID09IHRydWUpIHtcclxuICAgIFxyXG4gICAgICAgICAgICBzdWJtaXR0b2RvYnV0dG9uLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgc3VibWl0dGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KVxyXG4gICAgc3VibWl0ZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIHRvZG9kZXNjcmlwdGlvbiA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgIFxyXG4gICAgIH0pXHJcblxyXG4gICAgIHN1Ym1pdGNvbXBsZXRlZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgdG9kb2NvbXBsZXRlZCA9IGUudGFyZ2V0LmNoZWNrZWRcclxuXHJcbiAgICAgfSlcclxuICAgICBcclxuICAgICBzdWJtaXRkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgICAgIHRvZG9kdWVkYXRlID0gZS50YXJnZXQudmFsdWVcclxuICAgIFxyXG5cclxuICAgICAgIFxyXG4gICAgIH0pXHJcblxyXG4gICAgIHN1Ym1pdHByb2plY3QuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICBcclxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09IFwiXCIpIHsgICAgICAgICAgfVxyXG4gICAgICAgICAgIGVsc2UgeyB0b2RvcHJvamVjdCA9IGUudGFyZ2V0LnZhbHVlXHJcbiBcclxuICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICB9KVxyXG4gIFxyXG4gICAgIFxyXG4gICAgIHN1Ym1pdHByaW9yaXR5LmZvckVhY2goZWxlbSA9PiB7XHJcbmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgdG9kb3ByaW9yaXR5ID0gZS50YXJnZXQuaWRcclxuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKFxyXG5cclxuICAgIClcclxuICAgIGNvbnNvbGUubG9nKHRvZG9wcmlvcml0eSlcclxuICAgIFxyXG4gfSlcclxuICAgICB9KVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4gICAgLy8gICAgLy9zdWJtaXQgYnV0dG9uIGxvZ2luIGluIG1vZGFsIHdpbmRvdyBmb3IgdG9kb1xyXG4gICAgICAgLy8gd2FudCB0byB1c2UgdGhlIGJ1dHRvbiB0byBzdWJtaXQgYW5zd2VycyB0byBhcHByb3ByaWF0ZSBtb2R1bGVcclxuICAgICAgIC8vIHRoZW4gcmVzZXQgdGhlIGlucHV0cyB0byBub3RoaW5nIGluIHRoZW0gZm9yIHRoZSBuZXh0IGFkZGl0aW9uXHJcbiAgICAgICBcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0TG9naWMoKSB7XHJcblxyXG5cclxuICAgICBcclxuICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRidXR0b24nKVxyXG4gICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAoZnVuY3Rpb24gc2VlKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuLy8gdGhpcyB0b2RvIGJ5IGRlZmF1bHQgaXMgYWRkZWQgdG8gYSBwcm9qZWN0IHVuZGVyIGN1c3RvbSBwcm9qZWN0cyxcclxuXHJcblxyXG4gICAgICAgIH0pKClcclxuICAgICAgICBcclxuXHJcblxyXG5cclxuICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG5cclxuLy8gb24gc3VibWl0IG9mIHRvZG8sIHdhbnQgdG8gcmUgdXBkYXRlIHRoZSBhbGwgYXJyYXkhXHJcblxyXG5cclxuXHJcblxyXG4gICAvLyBmdW5jdGlvbiB0byBhZGQgdG8gdG9kbyBvYmplY3RzIGxpc3RcclxuICAgICAgICBcclxuICAgICAgICAgICAvLyBydW4gZm9ybSBjb250cm9sbGVyIHdoZW4gd2UgY2xpY2sgc3VibWl0IHdoaWNoIGdldHMgdGhlIHJlbGV2ZW50IGlucHV0cyBhbmQgcnVucyB0b2RvIG1ha2VyXHJcbiAgICAgICAgIC8vIHRoZSBpbnB1dHMgd2UgbmVlZCB0byB1c2UgY29tZSBmcm9tIHRoZSBhZGRzdWJtaXRpbnB1dHNmdW5jdGlvbiFcclxuICAgICAgICAgLy8gd2Ugd2lsbCB3cml0ZSB0byBnbG9iYWwgdmFyaWFibGVzZFxyXG5cclxuXHJcbiAgICAgICAgIC8vIGNoZWNrIGlmIGlucHV0cyBhcmUgZW1wdHkhXHJcblxyXG5cclxuICAgICAgICBpZiAodG9kb3ByaW9yaXR5ID09IFwiXCIpIHt0b2RvcHJpb3JpdHkgPSBcInByaW9yaXR5LWxvd1wifVxyXG5cclxuICAgICAgICAgLy8gaWYgaW5wdXRzIGFyZSBnb29kLCBydW4gdG9kbyBmdW5jdGlvblxyXG4gICAgICAgICBmb3JtU3VibWl0KHRvZG90aXRsZSwgdG9kb2Rlc2NyaXB0aW9uLCB0b2RvZHVlZGF0ZSwgdG9kb3ByaW9yaXR5LCB0b2RvcHJvamVjdCwgdG9kb2NvbXBsZXRlZClcclxuXHJcbiAgICAgICBcclxuLy8gc2V0IGNvbXBsZXRlZCBiYWNrIHRvIGZhbHNlIVxyXG50b2RvY29tcGxldGVkID0gZmFsc2VcclxuXHJcbiAgIC8vIHJlc2V0IHRvZHVlZGF0ZVxyXG5cclxuICAgaW1wb3J0KCdkYXRlLWZucycpXHJcbiAgIC50aGVuKChkYXRlKSA9PiB7XHJcbiAgdG9kb2R1ZWRhdGUgPSBkYXRlLmZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpXHJcbiAgIH0pXHJcbiAgICAgICAgICAgXHJcbiAgIC8vIHJlbW92ZSB0aGUgbW9kYWwgYWZ0ZXIgY3JlYXRpbmcgb3VyIHRvZG8sIGFuZCByZXNldCB0aGUgaW5wdXRzIGJhY2sgdG8gdGhlaXIgZGVmYXVsdHNcclxuICAgXHJcbiAgICAgICAgICAgdG9nZ2xlTW9kYWwoKVxyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgIFxyXG4gICBcclxuICAgLy8gd2UgYWxzbyB3YW50IHRvIGVuc3VyZSBvdXIgaW5wdXRzIGFyZSB0cnV0aHlcclxuICAgLy8gb25seSB3YW50IHRvIHJlcXVpcmUgdGl0bGUsIGRlc2NyaXB0aW9uIGRhdGUgYW5kIHByb2plY3QgYW5kIGNvbXBsZXRlXHJcbiAgIFxyXG4gICBcclxuICAgICAgICAgICAvLyByZW5kZXIgdGhlIGRvbSBhZnRlciBhbGwgdGhpcywgd2hpY2ggd2lsbCB1cGRhdGUgYWxsIGVsZW1lbnRzXHJcbiAgIFxyXG4gICAgICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAvLyBhZnRlciBkb20gaXMgcmVuZGVyZWQsIHNlbGVjdCB0aGUgYWxsIHByb2plY3RzIHRpdGxlIGFuZCBtYWtlIGl0IHJlZCBhcyBpdCBpcyBub3cgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgby51cGRhdGVmb3JoaWdoKCdhbGwnKVxyXG4gICAgICAgICAgICAgICAvLyB1cGRhdGUgY3VycmVudCBwcm9qZWN0cyBzbGVjdGlvbiB0byBhbGwhXHJcbiAgICAgICAgICAgICAgIGN1cnJlbnRzZWxlY3RlZHByb2plY3QgPSAnYWxsJ1xyXG4gICAgICAgICAgICAgICBvLnBvcHVsYXRlRGlzcGxheSgnYWxsJylcclxuICAgICAgICAgICB9KVxyXG4gICBcclxuICAgICAgICBpbXBvcnQoJy4vYnV0dG9ubG9naWMuanMnKVxyXG4gICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICAgICAgb2JqLmFkZEJ1dHRvbkxvZ2ljKClcclxuICAgICAgICAgICAgb2JqLm1vZGFsTG9naWMoKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuICAgICAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBhZnRlciBkb20gaXMgcmVuZGVyZWQsIHNlbGVjdCB0aGUgcHJvamVjdCB0aGF0IHdlIGp1c3Qgc3VibWl0dGVkXHJcbiAgICAgICAgICAgICAgICBvLnVwZGF0ZWZvcmhpZ2goJ2FsbCcpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICBcclxuICAgICAgICAvLyB1cGRhdGUgdGhlIGlucHV0IHRvIHVwZGF0ZSBkaXNwbGF5IGlmIHRvZG8gYmVsb25ncyB0byBkaWZmZXJlbnQgcHJvamVjdFxyXG4gICAgICAgIFxyXG4gICAgICAgfSlcclxuICAgICAgIHJlc2V0SW5wdXRzKClcclxuXHJcbi8vIHN1Ym1pdCB0aGUgaW5wdXQgb2YgY29tcGxldGVkIGJhY2sgdG8gbm90IGNoZWNrZWRcclxuXHJcblxyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIC8vIGluaXRpYWwgc3VibWl0IGJ1dHRvbiBwcm9qZWN0IGxvZ2ljIVxyXG4gICAgICBleHBvcnQgZnVuY3Rpb24gaW5pdGlhbHByb2ooKSB7XHJcbiAgICBcclxuY29uc3QgcHJvanRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3R0aXRsZScpXHJcbmlmIChwcm9qdGl0bGUudmFsdWUgPT0gXCJcIiB8fCBjaGVja1RleHQocHJvanRpdGxlLnZhbHVlKSApIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c3VibWl0JykuZGlzYWJsZWQgPSB0cnVlXHJcblxyXG59XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGV4cG9ydCBmdW5jdGlvbiBpbml0aWFsdG9kb3N1Ym1pdCgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVkJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3JlZGJhY2snKSkge2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpfVxyXG4gICAgICAgIH0pXHJcbmNvbnN0IHN1Ym1pdGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRidXR0b24nKVxyXG5pZiAoc3VibWl0YnV0dG9uLnZhbHVlID09IFwiXCIgfHwgY2hlY2tUZXh0KHN1Ym1pdGJ1dHRvbi52YWx1ZSkgKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0YnV0dG9uJykuZGlzYWJsZWQgPSB0cnVlXHJcblxyXG59XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBmdW5jdGlvbiBjaGVja2RlZmF1bHQoc3RyKSB7XHJcbiAgICAgICAgbGV0IHRlc3QgPSAvXihhbGx8dG9kYXl8dGhpc3dlZWspJC9taVxyXG4gICAgICAgIHJldHVybiB0ZXN0LnRlc3Qoc3RyKVxyXG4gICAgfSAgIFxyXG4gICAgICBcclxuIC8vc3VibWl0IGJ1dHRvbiBsb2dpbiBpbiBtb2RhbCB3aW5kb3cgZm9yIHByb2plY3RcclxuICAgICAgLy8gd2FudCB0byB1c2UgdGhlIGJ1dHRvbiB0byBzdWJtaXQgYW5zd2VycyB0byBhcHByb3ByaWF0ZSBtb2R1bGVcclxuICAgICAgLy8gdGhlbiByZXNldCB0aGUgaW5wdXRzIHRvIG5vdGhpbmcgaW4gdGhlbSBmb3IgdGhlIG5leHQgYWRkaXRpb25cclxuIGxldCBzdWJtaXQgPSBcIlwiXHJcbiAgICBmdW5jdGlvbiBwcm9qZWN0c3VibWl0bG9naWMoKSB7XHJcblxyXG4gICAgICBcclxuICAgICAgY29uc3QgcHJvamVjdHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c3VibWl0JylcclxuICAgICAgY29uc3QgcHJvamVjdHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3R0aXRsZScpXHJcbmxldCBwcm9qZWN0dGl0bGVjaG9pY2UgPSBcIlwiXHJcbiAgICAgIC8vIGV2ZW50IGxpc3RlbmVyIG9uIHByb2plY3QgdGl0bGUgdG8gY2FwdHVyZSBjdXJyZW50IGlucHV0XHJcbiAgICAgIHByb2plY3R0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICBcclxuXHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIHByb2plY3R0aXRsZWNob2ljZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICBcclxuXHJcbiAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgLy8gaWYgcHJvamVjdCB0aXRsZSBpcyBub3QgdHJ1dGh5LCBhZGQgcmVkIGJhY2tncm91bmRcclxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gXCJcIiB8fCBjaGVja1RleHQoZS50YXJnZXQudmFsdWUpID09IGZhbHNlIHx8ICBjaGVja2RlZmF1bHQoZS50YXJnZXQudmFsdWUpID09IHRydWUpIHtcclxuICAgICAgICAgIHByb2plY3RzdWJtaXQuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gaWYgaXQgaXMgdHJ1dGh5LCByZW1vdmUgdGhlIGJhY2tncm91bmRcclxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSAhPSBcIlwiICYmIGNoZWNrVGV4dChlLnRhcmdldC52YWx1ZSkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0c3VibWl0LmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpXHJcbiAgICAgICAgICAgIHN1Ym1pdCA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICB9KVxyXG4gICAgIFxyXG4gICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciB3aGVuIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZWQgXHJcblxyXG4gICAgICBwcm9qZWN0c3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlLCBzdWJtaXQpID0+IHtcclxuXHJcbi8vIE9OIFNVQk1JVCBPRiBQUk9KRUNULCBETyBOT1RISU5HIFRPIERFRkFVTFQgQVJSQVlcclxuXHJcblxyXG4vL1xyXG5cclxuICAgXHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9IFwiXCJcclxuICAgICAgICBjb25zdCBwcm9qdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHRpdGxlJylcclxuXHJcblxyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAgICAvLyB3aGVuIHdlIGNsaWNrIHRoZSBzdWJtaXQgYnV0dG9uLCBjaGVjayB0aGUgdGV4dCByZWNlaXZlZFxyXG4gICAgICAgLy8gaWYgaXQgaXMgYSB0cnV0aHkgaW5wdXQgKG5vdCBibGFuayBhbmQgcGFzc2VzIGNoZWNrKSBydW4gaWYgYmxvY2tcclxuICAgICAgIC8vIGlmIGl0IGlzIG5vdCB0cnV0aHkgcnVuIHRoZSBlbHNlIGJsb2NrXHJcblxyXG4gICAgICAgICAgaWYgKGNoZWNrVGV4dChwcm9qZWN0dGl0bGUudmFsdWUpID09IHRydWUgJiYgcHJvamVjdHRpdGxlLnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgIFxyXG5sZXQgdmFsdWUgPSBwcm9qZWN0dGl0bGUudmFsdWVcclxuXHJcbiAgXHJcbiAgLy8gY2FsbCB0aGUgcHJvamVjdCBjb25zdHJ1Y3RvciFcclxuICBcclxuICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAudGhlbigob2JqKSA9PiB7XHJcblxyXG5cclxuICAgICAgLy8gYWRkIHByb2plY3QgdG8gdGhlIGxpc3RcclxuICAgIC8vIGVuc3VyZSBuYW1lIGRvZXNuJ3QgZXhpc3RcclxuXHJcbiAgICAgIGlmIChvYmouYWRkUHJvamVjdCh2YWx1ZSkgPT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RleGlzdHMhIGNob29zZSBhbm90aGVyJylcclxuICAgICAgICBhbGVydCgncHJvamVjdGV4aXN0cyEgY2hvb3NlIGFub3RoZXInKVxyXG5cclxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dGNvbnRhaW5lcicpXHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50JylcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCcuc2hvdy1tb2RhbCcpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgXHJcbiAgICAgIC8vIGlmIHByb2plY3QgdGl0bGUgaXMgYmxhbmssIHRocm93IGFuIGFsZXJ0IGFuZCByZSBpbnB1dCB0aGUgZGF0YVxyXG5cclxuICAgICBcclxuICAgICAgIC8vIHNldCBwcm9qZWN0IHRpdGxlIGVxdWFsIHRvIG5vdGhpbmcgYWdhaW4gXHJcbiAgICAgICByZXNldElucHV0cygpIFxyXG4gIFxyXG4gICAgICAgLy8gY2xlYXIgdGhlIG1vZGFsXHJcbiAgXHJcblxyXG4gIFxyXG4gICAgICAvL3VwZGF0ZSB0aGUgZG9tXHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgXHJcblxyXG5cclxuICAgICAgdG9nZ2xlTW9kYWwoKVxyXG4gICAgICAvL2FkZCBldmVudCBsaXN0ZW5lcnMgYWZ0ZXIgdXBkYXRpbmcgZG9tIFxyXG5cclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnQoJy4vZG9tTG9naWMnKVxyXG4gICAgLnRoZW4oKG8pID0+IHtcclxuXHJcbiAgICAgICAgLy8gcG9wdWxhdGUgdGhlIGRpc3BsYXkgd2l0aCB0aGUgdmFsdWUgb2YgdGhlIHByb2plY3Qgd2UgY3JlYXRlZCFcclxuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgby5wb3B1bGF0ZURpc3BsYXkodmFsdWUpXHJcbiAgICAgXHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgICAgIGlmIChlbGVtLmRhdGFzZXQudGl0bGUgPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIFxyXG4gICAgfSlcclxuICB9KSBcclxuICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy8gZmlyc3QgbG9nIHRoYXQgaXQgaXMgbm90IHRydXRoeSBhbmQgYWRkIGEgcmVkIGJhY2tncm91bmRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCB0cnV0aHkgYWRkIHJlZCcpXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gYWRkIHJlZCB0byBiYWNrIG9mIHByb2plY3QgdGl0bGVcclxuXHJcbiAgICAgICAgICAgIHByb2plY3R0aXRsZS5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJylcclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0dGl0bGUudmFsdWUgPT0gXCJcIiB8fCBjaGVja1RleHQocHJvamVjdHRpdGxlLnZhbHVlKSA9PSBmYWxzZSkgeyBhbGVydCgnUGxlYXNlIEVudGVyIGEgVmFsaWQgUHJvamVjdCBOYW1lJylcclxuICAgICAgICAgICAgcHJvamVjdHN1Ym1pdC5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGVuIHJ1biB0aGUgcHJvamVjdGlucHV0IGZ1bmN0aW9uIHRvIGxpc3RlbiB0byB0aGUgaW5wdXQgYW5kIGFkanVzdCB0aGUgcmVkIGJhY2tncm91bmQgYWNjb3JkaW5nbHlcclxuXHJcbiAgICAgICAgICAgICAgYWRkUHJvamVjdElucHV0UmVkKHByb2plY3R0aXRsZSlcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhhdCB0b2RvIHNjcmVlbiBkb2VzIG5vdCBjb21lIGJhY2sgdXBcclxuICAgICAgICAgICAgICAvLyBpZiB0b2RvIHNjcmVlbiBjb250YWlucyBoaWRlLCBsZWF2ZSBpdCBhbG9uZSwgZWxzZVxyXG4gICAgICAgICAgaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgIH1cclxuICAgICBcclxuICAvLyBhZGQgdmFsdWUgb2YgdGl0bGUgZmllbGQgdG8gcHJvamVjdHMgb2JqZWN0XHJcbiAgICBcclxuXHJcbiAgXHJcbiAgaW1wb3J0KCcuL2J1dHRvbmxvZ2ljLmpzJylcclxuICAudGhlbigobykgPT4ge1xyXG4gICAgICBvLmFkZEJ1dHRvbkxvZ2ljKClcclxuICAgICAgby5tb2RhbExvZ2ljKClcclxuICB9KVxyXG4gIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXHJcblxyXG5cclxuLy8gbmVhciB0aGUgZW5kIG9mIHRoZSBldmVudCB3ZSB3aWxsIHJ1biByZW1vdmUgcmVkLCBhbmQgYWZ0ZXIgaXQgcmUgYXBwbHkgcmVkIGJhc2VkIG9uIHNlbGVjdGlvblxyXG5pbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4udGhlbigobykgPT4ge1xyXG4gICAgby5yZW1vdmVSZWQoKVxyXG5cclxuICAgIFxyXG4gICAgcmVzZXRJbnB1dHMoKVxyXG4gICAgbW9kYWxMb2dpYygpXHJcblxyXG4gICAgLy8gYWZ0ZXIgcmVuZGVyIGN1c3RvbSBwcm9qZWN0cyB3ZSB3aWxsIGFkanVzdHMgaGlnaGxpZ2h0XHJcbm8ucmVuZGVyQ3VzdG9tUHJvamVjdHMocHJvamVjdHRpdGxlY2hvaWNlKVxyXG5pbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuLnRoZW4oKG8pID0+IHtcclxuICBcclxuXHJcbn0pXHJcblxyXG59KVxyXG5cclxuXHJcbiAgXHJcbiAgICAgIH0pXHJcbiAgICAgIFxyXG5cclxuXHJcbiAgfVxyXG4gICAgICBcclxuXHJcblxyXG5cclxuLy8gYWRkIHRoZSBkeW5hbWljIGJhY2tncm91bmQgdG8gaW5wdXRzLCBydW4gdGhpcyBpbiBwbHVzIGJ1dHRvbiBtb2RhbCBmdW5jdGlvbiBcclxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RJbnB1dFJlZChwcm9qZWN0dGl0bGUpIHtcclxuICAgXHJcblxyXG5cclxuICAgICAgIFxyXG4gICAgIFxyXG4gICAgICBcclxuICAgICAgICAvLyBhZGQgYSBsaXN0ZW5lciBvbiBpdCB0cmlnZ2VyZWQgYnkgYW55IGlucHV0IHRvIGxpc3RlbiBmb3IgaW5wdXRcclxuICAgICAgICBcclxuICAgICAgICBwcm9qZWN0dGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIC8vIGlmIGlucHV0IHJlbWFpbnMgYmxhbmsgYW5kIGRvZXMgbm90IHNhdGlzZnkgcmVnZXgsIGNvbnRpbnVlIHRvIGtlZXAgYmFja2dyb3VuZCByZWRcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09IFwiXCIgfHwgY2hlY2tUZXh0KGUudGFyZ2V0LnZhbHVlKSA9PSBmYWxzZSkgeyAgICAgXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJylcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGQgcmVkYmFjaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4vLyBpZiBpbnB1dCBpcyBub3QgYmxhbmsgYW5kIHBhc3NlcyByZWdleCwgcmVtb3ZlIHRoZSByZWQgYmFja2dyb3VuZFxyXG5cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoY2hlY2tUZXh0KGUudGFyZ2V0LnZhbHVlKSA9PSB0cnVlICYmIGUudGFyZ2V0LnZhbHVlICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndHJ1dGh5IGlucHV0JylcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpXHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcnVuIHRoaXMgd2l0aCBmaXJzdCBzdWJtaXQgYW5kIHRoZW4gYmUgZHluYW1pY1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbi8vIHJlZ2V4IGZvciBpbnB1dHMgXHJcblxyXG4gICAgXHJcbmZ1bmN0aW9uIGNoZWNrVGV4dChzdHIpIHtcclxuICAgIGxldCB0ZXN0MSA9IC9eW15cXHNdKltcXHchfFxcc10rJC9naVxyXG5cclxuICAgcmV0dXJuIHRlc3QxLnRlc3Qoc3RyKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgIFxyXG4vLyBmdW5jdGlvbiB0byByZXNldCB0byBkZWZhdWx0IHRvZG8gZGlzcGxheSBcclxuXHJcbmZ1bmN0aW9uIHJlc2V0VG9kbygpIHtcclxuXHJcbiAgICBcclxuICAgICAgICAvLyByZXNldCBtb2RhbCB3aW5kb3cgdG8gY3JlYXRlIHRvZG8gYnkgZGVmYXVsdFxyXG5cclxuICAgICAgICBjb25zdCB0b2RvYnV0dG9uc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZWxlY3QnKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RidXR0b25zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNlbGVjdCcpXHJcbiAgICAgICAgY29uc3QgdG9kb2lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dGNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuICAgICAgICBjb25zdCBtb2RhbHdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgIC8vIHJlbW92ZSB0aGUgbW9kYWwgd2luZG93XHJcbiAgICAgICAgICAgbW9kYWx3aW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1tb2RhbCcpXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgIHByb2plY3RpbnB1dHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgICAgICAgdG9kb2lucHV0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICAgICBwcm9qZWN0YnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZWJnJylcclxuICAgICAgICAgICB0b2RvYnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuXHJcbn1cclxuXHJcblxyXG5cclxuICAgIC8vbG9naWMgYmVsb3cgdG8gc3dpdGNoIGJldHdlZW4gY3JlYXRpb24gb2YgdG9kbyBvciBhIHByb2plY3RcclxuXHJcbmZ1bmN0aW9uIHN3aXRjaENyZWF0aW9uKCkge1xyXG4gICAgY29uc3QgdG9kb2J1dHRvbnNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2VsZWN0JylcclxuICAgIGNvbnN0IHByb2plY3RidXR0b25zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNlbGVjdCcpXHJcbiAgICBjb25zdCB0b2RvaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Y29udGFpbmVyJylcclxuICAgIGNvbnN0IHByb2plY3RpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICBcclxuICAgIHRvZG9idXR0b25zZWxlY3QuY2xhc3NMaXN0LmFkZCgnY2hhbmdlYmcnKVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZWJnKGUpIHtcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjaGFuZ2ViZycpXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICB0b2RvYnV0dG9uc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbnNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgcHJvamVjdGlucHV0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICB0b2RvYnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuICAgICAgICB0b2RvaW5wdXRzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgIHByb2plY3RidXR0b25zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgLy8gcnVuIGZ1bmN0aW9uIHdoZW4gc3dpdGNoZWQgdG8gZ3JleSBvdXQgcHJvamVjdCBzdWJtaXQhXHJcbiAgICBpbml0aWFscHJvaigpXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbnNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgcHJvamVjdGlucHV0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICB0b2RvYnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZWJnJylcclxuICAgICAgICB0b2RvaW5wdXRzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuXHJcbn1cclxuICAgIFxyXG4gICAgICAgLy8gbG9naWMgdG8gZGVsZXRlIHByb2plY3RzIGZyb20gdGhlIG1hc3RlciBvYmplY3QsIGFuZCB0aGVuIHJlZnJlc2ggdGhlIGFycmF5IGFuZCB0aGUgZG9tcmVuZGVyXHJcblxyXG4gICAgICAgZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RzKCkge1xyXG4gICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgIC50aGVuKChvYmopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhvYmoucHJvamVjdHMpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsc2UgeyBjb25zdCBkZWxldGVwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZXByb2plY3RidXR0b24nKVxyXG4gICAgIFxyXG4gICAgICAgICAgICBkZWxldGVwcm9qZWN0LmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmlndXJlIG91dCB3aGljaCBidXR0b24gd2FzIGNsaWNrZWQgYW5kIGZpbmQgYXBwcm9wcmlhdGUgcHJvamVjdCB0aXRsZVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZW1vdmUgPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBhY2NvcmRpbmcgZGl2IHdpdGggY2xhc3MgcHJvamVjdGJ1dHRvbnMgYW5kIGRhdGE9dGl0bGUgZXF1YWwgdG8gYWJvdmVcclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3aWxsIGhhbmRsZSB0aGlzIHdpdGggYSBmdW5jdGlvbiBpbiB0aGUgZG9tIGxvZ2ljIG1vZHVsZVxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgYWxzbyBuZWVkIHRvIHJlbW92ZSB0aGUgcHJvamVjdCBmcm9tIHRoZSBjdXN0b20gcHJvamVjdHMgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIGZ1bmN0aW9uIGZvciB0aGlzIHdpdGhpbiBwcm9qZWN0IG1ha2VyIG1vZHVsZVxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBwYXNzIHRoZSBhcmd1bWVudCBvZiB0aGUgYXBwcm9wcmlhdGUga2V5IGFib3ZlIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG9iai5yZW1vdmVQcm9qZWN0KHJlbW92ZSlcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4vYnV0dG9ubG9naWMuanMnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChvKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICB7by5hZGRCdXR0b25Mb2dpYygpXHJcbiAgICAgICAgICAgICAgICAgIG8ubW9kYWxMb2dpYygpfSlcclxuICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBjYWxsIHJlbmRlciBjdXN0b20gcHJvamVjdHMgc2luY2Ugd2UgaGF2ZSB1cGF0ZWQgdGhlIGFycmF5IHRoYXQgaXQgdGFrZXMgYXMgYW4gYXJndW1lbnRcclxuICAgICAgICAgICAgICAgIC8vIHRoZSBmdW5jdGlvbiBpdHNlbGYgdXBkYXRlcyB0aGUgYXJyYXkgdG8gYmUgcmVuZGVyZWQgYmFzZWQgb24gdGhlIGN1cnJlbnQgbWFzdGVyIHByb2plY3Qgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICByb2FzdCgpXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4gezNcclxuICAgICAgICAgICAgICAgIG9iai5yZW5kZXIoKX0pXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBhZnRlciB3ZSBjbGljayBvbiBkZWxldGUgY2FsbCByb2FzdCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgdG9kbyBjb250ZW50IHNob3VsZCBiZSBpbnZpc2libGVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICBcclxuICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAvLyBwcm9qZWN0IGRlbGV0ZSBidXR0b24gbG9naWNcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGRlbGV0ZUJ1dHRvbkNvbG9ycygpIHtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVwcm9qZWN0YnV0dG9uJylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlbGV0ZWJ1dHRvbnMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQudGl0bGUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGRldGVybWluZSB3aGljaCBkZWx0ZSBidXR0b24gaGFzIGJlZW4gaG92ZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdyB3ZSB3YW50IHRvIGNoYW5nZSB0aGUgYmFja2dyb3VuZCBvZiB0aGUgY29ycmVzcG9uZGluZyBkaXZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdGl0dGxlcyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdGJ1dHRvbnMnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aXR0bGVzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uZGF0YXNldC50aXRsZSA9PSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbS5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0aXR0bGVzID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0YnV0dG9ucycpXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0aXR0bGVzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5kYXRhc2V0LnRpdGxlID09IGUudGFyZ2V0LmRhdGFzZXQudGl0bGUpXHJcbiAgICAgICAgICAgICAgICAgICAge2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4vL2Z1bmN0aW9uIGhlcmUgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyB0byBwcm9kdWN0IGJ1dHRvbnMgdG8gdXBkYXRlIHRvZG8gZGlzcGxheVxyXG4vL3dlIHdpbGwgaGF2ZSBhIGZ1bmN0aW9uIHdoZW4gY2xpY2tlZCB0byB1cGRhdGUgdGhlbSBhY2NvcmRpbmdseVxyXG4vL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RUaXRsZUV2ZW50czEoKSB7XHJcbmNvbnN0IHRvZG9kaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9jb250ZW50JylcclxuXHJcbi8vIHdoZW4gd2UgY2xpY2sgYWxsLCBsb29wIHRocm91Z2ggYXJyYXkgYWxsIGFuZCBkaXNwbGF5IHRoZSBjb250ZW50cyFcclxuXHJcbmNvbnN0IGFsbHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbCcpXHJcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5JylcclxuY29uc3QgdGhpc3dlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhpc3dlZWsnKVxyXG5cclxuXHJcblxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBiZWxvdyBhZGRzIGNsaWNrIGV2ZW50cyB0byBkZWZhdWx0IHByb2plY3QgYnV0dG9uc1xyXG5pbXBvcnQge3BvcHVsYXRlRGlzcGxheSwgcmVtb3ZlUmVkfSBmcm9tICcuL2RvbUxvZ2ljLmpzJ1xyXG5pbXBvcnQgeyBmb3JtQ29udHJvbGxlciB9IGZyb20gJy4vZm9ybWxvZ2ljLmpzJ1xyXG5pbXBvcnQgeyBlbCwgdHIgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnXHJcbmltcG9ydCB7IHN1YiB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5sZXQgcHJvbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0bmFtZXRhZycpXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0QnV0dG9uTG9naWMoKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVmYXVsdHByb2plY3QnKVxyXG4gICAgYnV0dG9ucy5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIHZhbHVlIG9mIGRlZmF1bHQgcHJvamVjdHMgYXJyYXkgdG8gYmxhbmtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGwgd2lsbCBsb29wIHRocm91Z2ggY3VzdG9tIHByb2plY3RzIGFuZCBhZGQsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kYXkgYW5kIHRoaXMgd2VlayB3aWxsIGZpbHRlciBmcm9tIGFsbCFcclxuXHJcbiAgICAgICAgICAgICAgICBvYmouZGVmYXVsdHByb2plY3RzLnRvZGF5ID0gW11cclxuICAgICAgICAgICAgICAgIG9iai5kZWZhdWx0cHJvamVjdHMuYWxsID0gW11cclxuICAgICAgICAgICAgICAgIG9iai5kZWZhdWx0cHJvamVjdHMudGhpc3dlZWsgPSBbXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHBvcHVsYXRlRGlzcGxheShlLnRhcmdldC5pZClcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgZS50YXJnZXQuaWQsIHdlIHdhbnQgdG8gY2FsbCB0aGF0IHNwZWNpZmljIGFycmF5XHJcbiAgICAgICAgICAgIC8vIGFuZCBmZWVkIGl0IHRvIGEgZG9tIGZ1bmN0aW9uIHRoYXQgbG9vcHMgdGhlIGFycmF5IGFuZCBwb3B1bGF0ZXMgdGhlIGRpc3BsYXkhXHJcbiAgICAgICAgICAgIC8vIGFsbCB3aWxsIGJlIHRoZSBkZWZhdWx0IGFyclxyXG4gICAgICAgICAgICAvLyB3ZSB0aGVuIHdhbnQgdG8gdXBkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgcHJvamVjdCB0aGF0IGlzIGhpZ2hsaWdodGVkIVxyXG4gICAgICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICAgIG8ucmVtb3ZlUmVkKClcclxuXHJcbiAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZClcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICAgICAgIHByb25hbWUudGV4dENvbnRlbnQgPSAnQWxsJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSBcInRvZGF5XCIpe1xyXG4gICAgICAgICAgICBwcm9uYW1lLnRleHRDb250ZW50ID0gJ1RvZGF5J1xyXG4gICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgICBwb3B1bGF0ZURpc3BsYXkoJ3RvZGF5JylcclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSBcInRoaXN3ZWVrXCIpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG5cclxuICAgICAgICAgICAgcHJvbmFtZS50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICAgICAgICAgcHJvbmFtZS50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnXHJcbiAgICAgICAgICAgIHBvcHVsYXRlRGlzcGxheSgndGhpc3dlZWsnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIFxyXG4gXHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gY3VzdG9tUHJvamVjdEJ1dHRvbkxvZ2ljKCkge1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b21wcm9qZWN0dGl0bGUnKVxyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBlLnRhcmdldC5pZCwgd2Ugd2FudCB0byBjYWxsIHRoYXQgc3BlY2lmaWMgYXJyYXlcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBmZWVkIGl0IHRvIGEgZG9tIGZ1bmN0aW9uIHRoYXQgbG9vcHMgdGhlIGFycmF5IGFuZCBwb3B1bGF0ZXMgdGhlIGRpc3BsYXkhXHJcbiAgICAgICAgICAgICAgICAvLyBhbGwgd2lsbCBiZSB0aGUgZGVmYXVsdCBhcnJcclxuXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGNsaWNrZWQgcHJvamVjdCwgZGlzcGxheSBpdCB1bmRlciB0b2RvIGxpc3QhXHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQudGl0bGUpXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbmFtZS50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb25hbWUudGV4dENvbnRlbnQgPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG8ucmVtb3ZlUmVkKClcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJylcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50c2VsZWN0ZWRwcm9qZWN0ID0gZS50YXJnZXQuZGF0YXNldC50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIG8ucG9wdWxhdGVEaXNwbGF5KGN1cnJlbnRzZWxlY3RlZHByb2plY3QpXHJcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvLnByb2plY3RzKVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG5cclxuZnVuY3Rpb24gdG9kb3N3aXRjaGVyKCkge1xyXG4gICAgY29uc3QgdG9kb2Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2NvbnRlbnQnKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhZGR0b2RvaW5wdXRldmVudHMoKSB7XHJcbiAgICBcclxuLy8gYWRkIHNlcGFyYXRlIGV2ZW50cyBmb3IgZWFjaCBpbnB1dCBvcHRpb24hXHJcblxyXG4gICAgICAgIFxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBhZGRzIGV2ZW50IGxpc3RlbmVyIHRvIHBsdXMgYnV0dG9uIHRvIGJlIGNhbGxlZCB3aGVuIGRvbSByZW5kZXIgcnVuc1xyXG5cclxuXHJcbiAgICBcclxuICAgIC8vIG1hc3RlciBmdW5jdGlvbiB0byBydW4gYWxsIGZ1bmN0aW9ucyB0aGF0IGFkZCBidXR0b24gbG9naWMhXHJcbiAgICBcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBhZGRCdXR0b25Mb2dpYygpIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBydW4gbG9naWMgZm9yIHN3aXRjaGluZyBpbWFnZSBvbiBwbHVzIGljb24gb24gY2xpY2sgXHJcbiAgICBwbHVzQnV0dG9uSW1hZ2VMb2dpYygpXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy9sb2dpYyB0byBhZGQgZXZlbnRzIHRvIGRlZmF1bHQgcHJvamVjdCBidXR0b25zIFxyXG4gICAgZGVmYXVsdEJ1dHRvbkxvZ2ljKClcclxuICAgIFxyXG4gICAgY3VzdG9tUHJvamVjdEJ1dHRvbkxvZ2ljKClcclxuICAgIC8vbG9naWMgdG8gYWRkIGV2ZW50cyB0byBjdXN0b20gcHJvamVjdCBidXR0b25zIFxyXG4gICAgY3VzdG9tQnV0dG9uTG9naWMoKVxyXG4gICBcclxuICAgIFxyXG4gICAgLy9sb2dpYyB0byBhZGQgZXZlbnRzIHRvIHRvZG8gYnV0dG9ucyBcclxuICAgIHRvZG9CdXR0b25Mb2dpYygpXHJcbiAgICBcclxuXHJcbiAgICBhZGR0b2RvaW5wdXRldmVudHMoKVxyXG4gICAgc3dpdGNoQ3JlYXRpb24oKVxyXG5cclxuICAgIGRlbGV0ZVByb2plY3RzKClcclxuICAgIFxyXG4gICAgZGVsZXRlQnV0dG9uQ29sb3JzKCkgXHJcbiAgICBwcm9qZWN0c3VibWl0bG9naWMoKVxyXG4gIFxyXG4gICAgYWRkRXZlbnRzdG9TdWJtaXRJbnB1dHMoKVxyXG4gICBcclxuICAvLyBwbHVzIGJ1dHRvbiBmdW5jdGlvbiBsb2dpY1xyXG4gIHBsdXNidXR0b25sb2dpYygpXHJcbiAgICAgIFxyXG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gcGx1cyBidXR0b24gb24gcGFnZVxyXG4vLyBhbHNvIGNvbnRhaW5zIGxvZ2ljIHRvIGFkZCB0byBjbG9zZSBidXR0b24gb24gbW9kYWwgbW9cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlbG9naWMoKSB7ICAgICBcclxuICAgICAgICBjb25zdCBjbG9zZWJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZWJ1dHRvbicpXHJcbiAgICAvLyBhZGQgYW4gZXZlbnQgdG8gcmVnaXN0ZXIgdGhlIGNsb3NlIGJ1dHRvblxyXG4gICAgLy8gdGhlIGNsb3NlIGJ1dHRvbjpcclxuICAgIGNsb3NlYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAgdG9nZ2xlTW9kYWwoKVxyXG5cclxuICAgICAvLyByZXNldCBpdCB0byBkZWZhdWx0IHRvZG8gZGlzcGxheSBcclxuICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgcmVzZXRUb2RvKClcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgIC8vIHJlc2V0IGlucHV0IG9mIHRvZG8gc2NyZWVuIGFuZCBhbGwgb3RoZXIgaW5wdXRzIVxyXG4gICAgIHJlc2V0SW5wdXRzKCkgXHJcblxyXG4gICBcclxuICAgICAvLyBydW4gcm9hc3QsIGNoZWNrIGlmIHRoZSBvYmplY3QgZG9lcyBub3QgZXhpc3QgYWdhaW5cclxuICAgICByb2FzdCgpXHJcblxyXG5cclxuXHJcbiB9KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcGx1c2J1dHRvbmxvZ2ljKCkge1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IHBsdXNidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1c2J1dHRvbicpXHJcbiAgICBjb25zdCBjbG9zZWJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZWJ1dHRvbicpXHJcbiAgICBwbHVzYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcblxyXG4vLyByZW1vdmUgYW55IGV4cGFuZGVkIHRvZG8nc1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9jb250ZW50JykuZm9yRWFjaCgoZWxlbSkgPT4ge2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgnbGFyZ2UnKX0pXHJcblxyXG5cclxuICAgICAgICAvLyB3aGVuIHdlIGNsaWtjIHBsdXMgdG9vIGFkZCB3ZSB3YW50IHRvIG9wZW4gdGhlIG1vZGFsIHdpbmRvdyBmaXJzdFxyXG5cclxuXHJcbiAgICAgICAgdG9nZ2xlTW9kYWwoKVxyXG5cclxuICAgIFxyXG4gICAgICAgLy8gdGhlIHdlIHdhbnQgdG8gYWRkIHRoZSBhcHByb3ByaWF0ZSBsaXN0ZW5lcnMgdG8gdGhlIGZpZWxkcyFcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgIC8vdG9kb2ZpZWxkczpcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vYWRkIGV2ZW50IHRvIHRoZSBtYWluIHN1Ym1pdCBidXR0b24hXHJcbiAgICAgICAgcHJvamVjdHN1Ym1pdGxvZ2ljKClcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAvLyBhZGQgbG9naWMgdG8gdG9kbyBzdWJtaXQgYnV0dG9uXHJcbiAgICBcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB9IiwiLy8gdXNlIHRoaXMgZnVuY3Rpb24gdG8gcmVuZGVyIGN1c3RvbSBwcm9qZWN0cyBhcnJheSB0aGF0IGlzIHNlcnZlZCBmcm9tIHByb2plY3QgbWFrZXJcclxuLy8gd2Ugd2lsbCB1cGRhdGUgdGhlIGFycmF5IGZyb20gdGhlIHByb2plY3QgbWFrZXJzIGZ1bmN0aW9uIHdoZW4gbmVlZGVkIHRoZW4gcnVuIHRoZSByZW5kZXJcclxuXHJcbmltcG9ydCBwbHVzcXVhcmUgZnJvbSAnLi4vc3JjL2ltYWdlcy9wbHVzLXNxdWFyZS1zdmdyZXBvLWNvbS5zdmcnXHJcblxyXG5pbXBvcnQgbWFpbnBsdXNpbWFnZSBmcm9tICcuLi9zcmMvaW1hZ2VzL3BsdXMtY2lyY2xlLXN2Z3JlcG8tY29tKDYpLnN2ZydcclxuaW1wb3J0IGhvdmVycGx1c2ltYWdlIGZyb20gJy4uL3NyYy9pbWFnZXMvcGx1cy1jaXJjbGUtc3ZncmVwby1jb20oNykuc3ZnJ1xyXG5pbXBvcnQgbWludXNzcXVhcmUgZnJvbSAnLi4vc3JjL2ltYWdlcy9taW51cy1zcXVhcmUtc3ZncmVwby1jb20uc3ZnJ1xyXG5cclxuaW1wb3J0IGhlYWRlcmltYWdlIGZyb20gJy4uL3NyYy9pbWFnZXMvdGV4dC1hbGlnbi1jZW50ZXItc3ZncmVwby1jb20uc3ZnJ1xyXG5cclxuaW1wb3J0IG1haW5wYWdlYmFja2dyb3VuZCBmcm9tICcuLi9zcmMvaW1hZ2VzL2JhY2tncm91bmRzL0hleGFnb24oMSkuc3ZnJ1xyXG5cclxuaW1wb3J0IHsgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucydcclxuXHJcbmltcG9ydCB7aW5pdGlhbHByb2osIGluaXRpYWx0b2Rvc3VibWl0fSBmcm9tICcuL2J1dHRvbmxvZ2ljLmpzJ1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckN1c3RvbVByb2plY3RzKHZhbHVlKSB7XHJcblxyXG4gLy8gY2xlYXIgY3VzdG9tIHByb2plY3QgZG9tIGVsZW1lbnRzISBvdGhlcndpc2UgaXQgd2lsbCBqdXN0IGFkZCB0byB0aGVtIVxyXG4gLy8gZGl2IGNvbnRhaW5lciBjbGFzcyBpcyBjdXN0b21wcm9qZWN0c1xyXG4gXHJcbiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tcHJvamVjdHMnKS5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG5cclxuXHJcbiBcclxuXHJcbi8vIGltcG9ydCBwcm9qZWN0IG5hbWVzIGZyb20gYXJyYXkgY3JlYXRlZCBpbiBwcm9qZWN0IG1ha2VyIFxyXG5cclxuIFxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbi50aGVuKChvYmopID0+IHtcclxuXHJcbiAgICAvLyB0aGlzIGNyZWF0ZXMgYSBuZXcgYXJyYXkgYmFzZWQgb24gY3VycmVudCBjb250ZW50cyBvZiBwcm9qZWN0IG9iamVjdFxyXG4gICAgLy8gd2hpY2ggd2UgY2FuIHJlbmRlciBmcm9tXHJcblxyXG5cclxuICAgIG9iai5nZXRQcm9qZWN0cygpXHJcblxyXG4gICAgLy9hcnJheSBiZWxvdyBpcyBjdXJyZW50IG5hbWVzIG9mIGN1c29tIHByb2plY3RzXHJcbiAgICBcclxuICAgIGNvbnN0IGN1c3RvbXByb2plY3RzbGlzdCA9IG9iai5jdXJyZW50Q3VzdG9tUHJvamVjdHNcclxuXHJcbiAgICAvLyBsb29wIHRoaXMgYXJyYXkgXHJcbiAgICBjdXN0b21wcm9qZWN0c2xpc3QuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBwcm9qZWN0IGNvb250YWluZXIgXHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBcclxuICAgICAgICAvLyBhZGQgc3R5bGUgdG8gcHJvamVjdCBjb250YWluZXJcclxuXHJcbiAgICAgICAgcHJvamVjdGRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0YnV0dG9ucycpXHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBidXR0b25zIGZvciB0aXRsZSBhbmQgZGxlbGV0ZSBvYmplY3RzXHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0YnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBwcm9qZWN0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbXByb2plY3R0aXRsZScpXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbi5kYXRhc2V0LnRpdGxlID0gZWxlbS50cmltKClcclxuXHJcbiAgICAgICAgLy8gc2V0IHRpdGxlIHRvIHRoZSBhcHByb3ByaWF0ZSBjdXN0b20gcHJvamVjdFxyXG5cclxuICAgICAgICBwcm9qZWN0YnV0dG9uLnRleHRDb250ZW50ID0gZWxlbVxyXG4gXHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICBsZXQgZGVsZXRlcHJvamVjdGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgZGVsZXRlcHJvamVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVwcm9qZWN0YnV0dG9uJylcclxuICAgICAgICBkZWxldGVwcm9qZWN0YnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCJcclxuXHJcblxyXG4gICAgICAgIC8vIGFwcGVuZCB0aXRsZSBhbmQgY2xvc2UgdG8gcHJvamVjdCBkaXZcclxuICAgICAgICBwcm9qZWN0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlZCcpXHJcbiAgICAgICAgcHJvamVjdGRpdi5hcHBlbmRDaGlsZChwcm9qZWN0YnV0dG9uKVxyXG4gICAgICAgIHByb2plY3RkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlcHJvamVjdGJ1dHRvbilcclxuICBcclxuICBcclxuXHJcbiAgICAgICAgLy8gd2Ugd2FudCB0byBhcHBlbmQgdGhlc2UgdG8gdGhlIGRpdiB3aGljaCBob3VzZXMgY3VzdG9tIHByb2plY3RzXHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbXByb2plY3RzdmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21wcm9qZWN0cycpXHJcblxyXG4gICAgICAgIGN1c3RvbXByb2plY3Rzdmlldy5hcHBlbmRDaGlsZChwcm9qZWN0ZGl2KVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyB3ZSBuZWVkIGEgd2F5IHRvIGFzc29jaWF0ZSB0aGUgcHJvamVjdCB0aXRsZSBhbmQgdGhlIGNsb3NlIGJ1dHRvblxyXG4gICAgICAgIC8vIHdlIGNvdWxkIHVzZSBhIGRhdGEgYXR0cmlidXRlIHNldCB0byB0aGUga2V5IHNpbmNlIHRoaXMgd2lsbCBiZSB1bmlxdWVcclxuICAgICAgICAvLyBnaXZlIHRoZSBob3VzaW5nIGRpdiBhbmQgdGhlIGNsb3NlIGJ1dHRvbiB0aGUgc2FtZSBkYXRhIGF0dHJpYnV0ZVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBkZWxldGVwcm9qZWN0YnV0dG9uLmRhdGFzZXQudGl0bGUgPSBlbGVtXHJcbiAgICAgICAgcHJvamVjdGRpdi5kYXRhc2V0LnRpdGxlID0gZWxlbVxyXG5cclxuICAgICAgICAvLyBhcHBlbmQgdGhlIGZ1bmN0aW9uIHRvIGFkZCBidXR0b24gbG9naWMgdG8gdXBkYXRlZCBkb20gZWxlbWVudHNcclxuXHJcbiAgICAgICAgaW1wb3J0KCcuL2J1dHRvbmxvZ2ljLmpzJylcclxuICAgICAgICAudGhlbigob2JqKSA9PiBcclxuICAgICAgICBvYmouZGVsZXRlUHJvamVjdHMoKSlcclxuXHJcblxyXG4gICAgICAgIC8vIFxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIGltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbiAgICAudGhlbigobykgPT4ge1xyXG4gICAgICBcclxuICAgICAgICBvLmFkZEJ1dHRvbkxvZ2ljKCk7XHJcbiAgICB9KVxyXG5cclxufSlcclxuXHJcbnNlbGVjdENob2ljZUNyZWF0aW9uKClcclxuXHJcbi8vIGFmdGVyIHdlIGF0dGFjaCBvdXIgY3VzdG9tIHByb2plY3QsIHdlIHdhbm5hIGdvIHRocm91Z2ggdGhlbSBhbGwgYW5kIGRvIHNvbWUgc2hpdC4uXHJcblxyXG4vLyBvbmNlIHdlIGNsaWNrIHN1Ym1pdCBwcm9qZWN0LCBiZWxvdyBmaXJlcyFcclxuaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuLnRoZW4oKG8pID0+IHtcclxuICBcclxuICAgIG8udXBkYXRlZm9yaGlnaCh2YWx1ZSkgXHJcbn0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlZm9yaGlnaCh2YWx1ZSkge1xyXG4gIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZCcpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgIFxyXG4gXHJcbiAgICAgICBpZiAodmFsdWUgPT0gZWxlbS5kYXRhc2V0LnRpdGxlKSB7XHJcbiAgICBcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgfVxyXG5cclxuXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gcG9wdWxhdGUgZGlzcGxheSBvZiBwcm9qZWN0cyBpbiB0b2RvIGNyZWF0aW9uIGJhc2VkIG9uIGN1cnJlbnQgcHJvamVjdHNcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdENob2ljZUNyZWF0aW9uKCkge1xyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgIC50aGVuKChvYmopID0+IHtcclxuICBcclxuICAgIC8vIHJlbW92ZSBhbGwgY29udGVudCB0byBzdGFydFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdG9wdGlvbnMnKS5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4vLyBhZGQgdGhlIEFsbCBwcm9qZWN0cyBvcHRpb24hXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gZ2V0IHRoZSBuYW1lcyBvZiB0aGUgY3VzdG9tIHByb2plY3RzIGFuZCBjcmVhdGUgZWxlbWVudHNcclxuXHJcbm9iai5jdXJyZW50Q3VzdG9tUHJvamVjdHMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG5cclxuXHJcbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcclxuICAgIG9wdGlvbi50eXBlPWVsZW1cclxuICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBlbGVtXHJcbiAgICAgb3B0aW9uLnZhbHVlID0gZWxlbVxyXG4gICAgIG9wdGlvbi5kYXRhc2V0LnR5cGUgPSAnb3B0aW9uJ1xyXG4gICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c2VsZWN0JylcclxuICAgICBcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdG9wdGlvbnMnKS5hcHBlbmRDaGlsZChvcHRpb24pXHJcblxyXG59KVxyXG5cclxuXHJcblxyXG4gICBcclxuXHJcblxyXG5cclxuXHJcbn0pfVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGVuc3VyZSBkYXRlIGlucHV0IGlzIHRvZGF5cyBkYXRlIG9yIGhpZ2hlclxyXG5cclxuZnVuY3Rpb24gaW5wdXREYXRlKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZS5kYXRlaW5wdXQnKVxyXG4gICAgaW1wb3J0KCdkYXRlLWZucycpXHJcbiAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBvLmZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpXHJcblxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgIGNvbnNvbGUubG9nKCdJTlBVVFZBTCcsIGlucHV0LnZhbHVlKTtcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG4vL21hc3RlciBmdW5jdGlvbiB0byByZW5kZXIgYWxsIGNvbXBvbmVudHNcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoKXtcclxuXHJcbiAgICBpbnB1dERhdGUoKVxyXG5cclxuIFxyXG4vLyBzZXQgYmFja2dyb3VuZCBpbWFnZVxyXG5cclxuXHJcbmRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1gdXJsKCR7bWFpbnBhZ2ViYWNrZ3JvdW5kfSlgXHJcblxyXG5cclxuXHJcbiAgICAvLyBzZXQgbWFpbiBwbHVzIGltYWdlIFxyXG5cclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1c2J1dHRvbicpLnNyYyA9IG1haW5wbHVzaW1hZ2VcclxuICAgXHJcbmltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbi50aGVuKChvKSA9PiB7XHJcblxyXG4gICAgcmVuZGVyQ3VzdG9tUHJvamVjdHMoKVxyXG4gICAgaW5pdGlhbFJlbmRlclRvZG8oKVxyXG4gICAgby5tb2RhbExvZ2ljKClcclxuICAgIG8uYWRkQnV0dG9uTG9naWMoKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pXHJcblxyXG5pbml0aWFscHJvaigpXHJcbmluaXRpYWx0b2Rvc3VibWl0KClcclxuXHJcblxyXG59XHJcblxyXG5cclxuLy8gcG9wdWxhdGUgbWFpbiBkaXNwbGF5IGxpa2UgdG9kbyBhcmVhIGJhc2VkIG9uIHNlbGVjdGVkIHByb2plY3QhXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlRGlzcGxheShwcm9qZWN0b2JqZWN0ICkge1xyXG5cclxuICAgIC8vIHNldCB0b2RvaGVhZGVyIGltYWdlXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9oZWFkZXJpbWFnZScpLnNyYyA9IGhlYWRlcmltYWdlXHJcblxyXG4gICAgLy8gc2V0IGJhY2tncm91bmQgaW1hZ2VcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9YHVybCgke21haW5wYWdlYmFja2dyb3VuZH0pYFxyXG5cclxuICAgIC8vIHNldCBtYWluIHBsdXMgaW1hZ2UgXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXNidXR0b24nKS5zcmMgPSBtYWlucGx1c2ltYWdlXHJcblxyXG5cclxuXHJcbiAgICAvLyB3ZSBhcmUgcG9wdWxhdGluZyB0aGUgZG9tLCB3ZSBjYW4gYWxzbyBzd2l0Y2ggdGhlIGhpZ2hsaWdodGVkIHByb2plY3QhXHJcbiAgICAvLyB0aGlzIGZ1bmN0aW9uIHBvcHVsYXRlcyB0aGUgdG9kb2xpc3RzXHJcblxyXG4gIFxyXG5cclxubGV0IHByb2plY3QgPSBcIlwiXHJcbmxldCBwcm9qZWN0c2V0ID0gXCJcIlxyXG5cclxuY29uc3QgdG9kb2FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NlY3Rpb24nKVxyXG5cclxuXHJcblxyXG4vLyBzZXQgdGhlIGRpc3BsYXkgdG8gYmUgYmxhbmshXHJcblxyXG50b2RvYXJlYS5pbm5lckhUTUwgPSBcIlwiXHJcbmxldCBwcm9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RuYW1ldGFnJylcclxuXHJcbmlmIChwcm9qZWN0b2JqZWN0ID09IFwiQWxsXCIgfHwgcHJvamVjdG9iamVjdCA9PSBcImFsbFwiKSB7cHJvamVjdHNldCA9IFwiZGVmYXVsdHByb2plY3RzXCJcclxuLy8gZW5zdXJlIGFsbCBpcyBoaWdobGlnaHRlZCEhXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWQnKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZGJhY2snKVxyXG4gICAgaWYgKGVsZW0uZGF0YXNldC50aXRsZSA9PSBcImFsbFwiICkge2VsZW0uY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICBwcm9uYW1lLnRleHRDb250ZW50ID0gXCJcIlxyXG4gICAgcHJvbmFtZS50ZXh0Q29udGVudCA9IFwiQWxsXCJ9XHJcbn0pXHJcblxyXG59XHJcblxyXG5lbHNlIGlmIChwcm9qZWN0b2JqZWN0ID09IFwidG9kYXlcIikge3Byb2plY3RzZXQgPSBcImRlZmF1bHRwcm9qZWN0c1wiXHJcbnByb25hbWUudGV4dENvbnRlbnQgPSBcIlwiXHJcbnByb25hbWUudGV4dENvbnRlbnQgPSBcIlRvZGF5XCJcclxufVxyXG5cclxuZWxzZSBpZiAocHJvamVjdG9iamVjdCA9PSBcInRoaXN3ZWVrXCIpIHtwcm9qZWN0c2V0ID0gXCJkZWZhdWx0cHJvamVjdHNcIlxyXG5wcm9uYW1lLnRleHRDb250ZW50ID0gXCJcIlxyXG5wcm9uYW1lLnRleHRDb250ZW50ID0gXCJUaGlzIFdlZWtcIlxyXG59XHJcblxyXG5lbHNlIHtwcm9qZWN0c2V0ID0gJ3Byb2plY3RzJ1xyXG5wcm9uYW1lLnRleHRDb250ZW50ID0gXCJcIlxyXG5wcm9uYW1lLnRleHRDb250ZW50ID0gcHJvamVjdG9iamVjdFxyXG59XHJcblxyXG5cclxuXHJcbi8vIHVwZGF0ZSBhbGwgYXJyYXkgYmFzZWQgb24gYWxsIG9iamVjdHMgd2l0aGluIGN1c3RvbSBwcm9qZWN0cyEhIGJlZm9yZSB3ZSByZW5kZXIgZGlzcGxheSFcclxuXHJcbiAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuIFxyXG4gICAgLnRoZW4oKG8pID0+IHtcclxuXHJcbiAgICBcclxuICAgLy8gYWxsIGlzIGJhc2VkIG9uIGN1c3RvbSBwcm9qZWN0cywgYnkgaXRlcmF0aW5nIG92ZXIgdGhlbSBhbGxcclxuICAgLy8gcHJlIHNvcnQgZWFjaCBwcm9qZWN0IGFycmF5IGJlZm9yZSBwYXNzaW5nIHRvIGFsbC4uXHJcbiAgICAgICAgLy8gd2UgbmVlZCB0byBsb29wIG92ZXIgdGhlIHByb2plY3QgYW5kIGF0IGVhY2gga2V5LCBjYWxsIHRoZSBzb3J0IGZ1bmN0aW9uXHJcbiAgICAgICAgLy8gYW5kIHNldCB0aGF0IGVxdWFsIHRvIHRoZSBrZXlzIHZhbHVlLi5cclxuXHJcbiAgICAgICAgLy8gbG9vcCBvdmVyIHRoZSBwcm9qZWN0cyBvYmplY3QgYXQgcHJvamVjdCBrZXkgYXJyYXlcclxuICAgICAgICAvLyBzZXQgdGhhdCBhcnJheSBlcXVhbCB0byB0aGUgYXJyYXkgc29ydGVkIFxyXG4gICAgICAgIC8vIGFycmF5IHNvcnRlZCBiYXNlZCBvbiBkYXRlLi5cclxuXHJcbiBmb3IgKGxldCBwcm9wIGluIG8ucHJvamVjdHMpIHtcclxuXHJcbiAgICAvLyBza2lwIGlmIGFycmF5IGxlbmd0aCAwLi5cclxuXHJcbiAgICBpZiAoby5wcm9qZWN0c1twcm9wXS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAvLyBcclxuICAgIG8ucHJvamVjdHNbcHJvcF0gPSBvLnByb2plY3RzW3Byb3BdLnNvcnQoY29tcGFyZUZuKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5wcm9qZWN0c1twcm9wXS5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICAvLyB1cGRhdGUgdGhlIGFycmF5IGxvY2F0ZWQgYXQga2V5IG9uIHByb2plY3RzIGFycmF5XHJcbiAgICAgICAgLy8gbG9vcCBvdmVyIGVhY2ggb2JqZWN0IGluIGVhY2ggYXJyYXkgYW5kIGFzc2lnbiBpdCBhbiBpbmRleCB2YWx1ZSB3aXRoaW4gdGhlIG9iamVjdCdcclxuICAgICAgICAvLyBkb25lIGFmdGVyIHNvcnRpbmcgYXMgdGhlc2Ugd2lsbCBjaGFuZ2UhXHJcbiAgICAgICAgby5wcm9qZWN0c1twcm9wXVtpXS5pbmRleCA9IGlcclxuICAgIH1cclxuICAgIH1cclxuXHJcbiB9XHJcblxyXG5cclxuXHJcbiBmdW5jdGlvbiBjb21wYXJlRm4oYSwgYikge1xyXG4gIC8vIGNvbnNvbGUubG9nKGEuZGF0ZSwnYScsIGIuZGF0ZSwgJ2InLCBhLmRhdGUgPCBiLmRhdGUpXHJcbiBcclxuICAgLy8gaWYgZmlyc3QgZGF0ZSBpcyBsZXNzIHRoYW4gc2Vjb25kIGRhdGUsIG9yZGVyIGl0IGxhc3RcclxuICAgaWYgKGEuZHVlZGF0ZSA8IGIuZHVlZGF0ZSkge1xyXG4gICAgIHJldHVybiAtMTtcclxuICAgfVxyXG4gICBpZiAoYS5kdWVkYXRlID4gYi5kdWVkYXRlKSB7XHJcbiAgICAgcmV0dXJuIDE7XHJcbiAgIH1cclxuICAgLy8gYSBtdXN0IGJlIGVxdWFsIHRvIGJcclxuICAgcmV0dXJuIDA7XHJcbiB9XHJcblxyXG5cclxuXHJcbihmdW5jdGlvbiBzb3J0QWxsKCkge28uZGVmYXVsdHByb2plY3RzLmFsbCA9IFtdXHJcbiAgICBmb3IgKGxldCBwcm9wIGluIG8ucHJvamVjdHMpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIHRoZSBwcm9wIGluIG8ucHJvamVjdHMgaXMgdGhlIGtleSBjb3JyZXNwb25kaW5nIHRvIHRoZSBhcnJheSBvZiB0b2RvIG9iamVjdHNcclxuICAgICAgICAvLyB3ZSBzaG91bGQgbG9vcCBvdmVyIHRoaXMgYXJyYXkgYW5kIGFwcGVuZCB0aGVtIHRvIHRoZSBkZWZhdWx0IHByb2plY3RcclxuICAgICAgICAvLyBhbGwgYXJyYXkgYmVmb3JlIHJlbmRlcmluZyB0aGUgZG9tXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgby5wcm9qZWN0c1twcm9wXS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gc28gZm9yIGV2ZXJ5IGN1c3RvbSBwcm9qZWN0IHRvZG8gb2JqZWN0LCB3ZSB3YW50IHRvIHBvcHVsYXRlIHRoZSBhbGwgYXJyYXkhXHJcbiAgICAgICAgICAgIC8vIGFmdGVyIHBvcHVsYXRpbmcgdGhlIGFycmF5LCB3ZSB3aWxsIHNvcnQgaXQhXHJcbiAgICAgICAgICAgIG8uZGVmYXVsdHByb2plY3RzLmFsbC5wdXNoKGVsZW0pXHJcblxyXG4vLyBidXQgbm90IHdlIHNvcnQgYWxsIGFnYWluLCB3ZSBzb3J0ZWQgZWFjaCBjdXN0b20gcHJvamVjdCBhcnJheSBpbml0aWFsbHlcclxuLy8gdGhlbiB3ZSBhcHBlbmRlZCBldmVyeSBvYmplY3QgZnJvbSBldmVyeSBhcnJheSBvbnRvIHRoZSBhbGwgYXJyYXlcclxuLy8gdGhleSBhcmUgc29ydGVkIGJ5IGRhdGUgYnV0IGJ5IGFycmF5LCBzbyB3aGVuIGFsbCBjb21iaW5lZCwgdGhlIGRhdGVzIG11c3QgYmUgcmUgc29ydGVkXHJcbi8vIGRhdGVzIHNvcnRlZCBiZWxvd1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCBvZiBvLmRlZmF1bHRwcm9qZWN0cy5hbGwpIHtcclxuICAgICAgICAgICAgIG8uZGVmYXVsdHByb2plY3RzLmFsbCA9IG8uZGVmYXVsdHByb2plY3RzLmFsbC5zb3J0KGNvbXBhcmVGbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgXHJcblxyXG4gXHJcbi8vIHdlIGFyZSByZXR1cm5pbmcgYSBuZXcgc29ydGVkIGFycmF5IHRvIHRoZW4gcmVwbGFjZSB0aGUgYWxsIGFycmF5IHdpdGhcclxuXHJcblxyXG4gICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgXHJcbiAgICB9fSkoKTtcclxuXHJcbi8vIGFmdGVyIHVwZGF0aW5nIGFsbCBhcnJheSwgdXBkYXRlIHRvZGF5IGFycmF5IGFuZCB0aGlzIHdlZWssIGJhc2VkIG9uIHNvcnRpbmcgYWxsIGFycmF5IGJ5IGRhdGUgb2YgZWFjaCBvYmplY3RcclxuLy8gd2Ugd2FudCBvLmRlZmF1bHRwcm9qZWN0cy50b2RheSBlcXVhbCB0byBhbiBhcnJheSByZXR1cm5pbmcgZnVuY3Rpb24gdGhhdCBzb3J0cyBvYmplY3RzIGJhc2VkIG9uIGEgZGF0ZSBrZXkgXHJcbi8vdGhhdCBjb3JyZXNwb25kIHdpdGggdG9kYXlzIGRhdGVcclxuXHJcbihmdW5jdGlvbiBzb3J0ZGF5KCkge1xyXG4gIFxyXG4gICAgLy8gZW1wdHkgdG9kYXkgYXJyYXkgZm9yIHNvcnRpbmchXHJcbiBcclxuICAgIG8uZGVmYXVsdHByb2plY3RzLmFsbC5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICBcclxuaW1wb3J0KCdkYXRlLWZucycpXHJcbi50aGVuKFxyXG4gICAgKGRhdGUpID0+IHtcclxuXHJcbiAgICAvLyBjb21wYXJlIHRoZSBkYXRlIGluIHRoZSBwcm9qZWN0IHRvIHRvZGF5cyBkYXRlXHJcbiAgICBsZXQgZGF0ZWVyID0gZGF0ZS5mb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKVxyXG4gICAgaWYgKGVsZW0uZHVlZGF0ZSA9PSBkYXRlZXIgKSBcclxuICAgIHtcclxuIFxyXG4gICAgICAgIC8vIGVsZW1lbnRzIHdpdGggdG9kYXkncyBkYXRlLCB1c2UgdGhlbSB0byBwb3B1bGF0ZSB0aGUgdG9kYXkgYXJyYXkgaW4gZGVmYXVsdFxyXG4gICAgICAgIFxyXG4gICAgICAgIG8uZGVmYXVsdHByb2plY3RzLnRvZGF5LnB1c2goZWxlbSlcclxuICAgIH1cclxufSlcclxuICAgIH0pXHJcbiAgICBcclxufVxyXG4pKCk7XHJcblxyXG4oZnVuY3Rpb24gc29ydHdlZWsoKSB7XHJcbiAgICAvLyBlbXB0eSB0b2RheSBhcnJheSBmb3Igc29ydGluZyFcclxuXHJcbiAgICBvLmRlZmF1bHRwcm9qZWN0cy5hbGwuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbmltcG9ydCgnZGF0ZS1mbnMnKS50aGVuKChkYXRlKSA9PiB7XHJcbiAgICAvLyBjb21wYXJlIHRoZSBkYXRlIGluIHRoZSBwcm9qZWN0IHRvIHRvZGF5cyBkYXRlXHJcbiBpZiAoZGF0ZS5wYXJzZUlTTyhlbGVtLmR1ZWRhdGUpIDw9IGRhdGUuYWRkV2Vla3MocGFyc2VJU08oZGF0ZS5mb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKSksIDEpKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGVsZW1lbnRzIHdpdGggdG9kYXkncyBkYXRlLCB1c2UgdGhlbSB0byBwb3B1bGF0ZSB0aGUgdG9kYXkgYXJyYXkgaW4gZGVmYXVsdFxyXG4gICAgICAgIFxyXG4gICAgICAgIG8uZGVmYXVsdHByb2plY3RzLnRoaXN3ZWVrLnB1c2goZWxlbSlcclxuICAgIH1cclxufSlcclxuICAgIH0pXHJcbn0pKCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IHByb3Agb2Ygb1twcm9qZWN0c2V0XVtwcm9qZWN0b2JqZWN0XSkge1xyXG4gICAgICAgICAgXHJcbiBcclxuICAgICAgICAgICAgLy8gcHJvamVjdCBzZXQgZGV0ZXJtaW5lcyBkZWZhdWx0IG9yIGN1c3RvbSBwcm9qZWN0c1xyXG4gICAgICAgICAgICAvLyBwcm9qZWN0b2JqZWN0IGRldGVybWluZXMgc3BlY2lmaWMgcHJvamVjdCwgd2hpY2ggdGhlbiByZXR1cm5zXHJcbiAgICAgICAgICAgIC8vIGFuZCBhcnJheSBvZiBvYmplY3RzLCB3aGljaCB3ZSB3b3VsZCBuZWVkIHRvIHNvcnQgdGhyb3VnaCBhbmQgcHVsbCBzcGVjaWZpYyBwcm9wZXJ0aWVzIVxyXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGEgZm9yIG9mIGxvb3Agd2hpY2ggc29ydHMgb3ZlciB0aGUgYXJyYXkgY2FsbGVkIGJ5IG9bcHJvamVjdHNldF1bcHJvamVjdG9iamVjdF1cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGV2ZXJ5IGtleSB3aXRoaW4gY3Vzb20gcHJvamVjdHMgYW5kIGFkZCB0byBBbGxcclxuXHJcbiAgIFxyXG4gICAgICAgICAgICAvLyBoaWdobGlnaHQgc3BlY2lmaWMgcHJvamVjdFxyXG4gICAgICAgICAgICAvLyBwcm9qZWN0b2JqZWN0IGlzIHRoZSBwcm9qZWN0IHdpdGhpbiBwcm9qZWN0c2V0XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNlZSgpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJ1biB0aGUgaGlnaGxpZ2h0IGZ1bmN0aW9uIHdpdGggdGhlIHByb2plY3QgZGl2IGVxdWFsIHRvIGV2ZW50XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFByb2plY3QoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB3ZSBjYW4gcHVsbCBvdXQgdGhlIHJlbGV2ZW50IGRldGFpbHMgdmlhIHByb3AudGl0bGUsIHByb3AuZHVlZGF0ZSwgZXR4XHJcbiAgICAgICAgICAgIC8vIGFuZCB0aGVuIGF0dGFjaCB0aGVtIG9udG8gb3VyIHNjcmVlbiB2aWEgdGhpcyBsb29wLCBjbGVhciB0aGUgc2NyZWVuIGNvbnRlbnQgZmlyc3QgYXMgYWx3YXlzIVxyXG5cclxuXHJcbiAgICAgXHJcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgIG9bcHJvamVjdHNldF1bcHJvamVjdG9iamVjdF0uZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG5cclxuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gcHJvcC50aXRsZSA/PyBcIlwiXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgfSlcclxuXHJcblxyXG4gICAgICAvLy8gY3JlYXRlIG91ciBpbmRpdmlkdWFsIHRvZG8gaXRlbXMgYmVsb3chISBcclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRpdiB0byBob3VzZSB0aGUgY29udGVudCBzZXQgdGhlIHN0eWxlc1xyXG5cclxuICAgICAgICAgICAgbGV0IHRvZG9jb250ZW50ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0b2RvdGl0bGVsaW5lJylcclxuICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYuY2xhc3NMaXN0LmFkZCgndG9kb2NvbnRlbnQnKVxyXG5cclxuLy8gY3JlYXRlIGEgbWFpbiBkaXYgZWxlbWVudCB0byByaXZhbCB0aGUgYnV0dG9uIGVsZW1lbnRzXHJcbmNvbnN0IHF1aWNraW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnF1aWNraW5mby5jbGFzc0xpc3QuYWRkKCdxdWlja2luZm8nKVxyXG5cclxuICAgICAgICAgIGxldCB0aXRsZXNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgcXVpY2tpbmZvLmFwcGVuZENoaWxkKHRpdGxlc2VjdGlvbilcclxuICAgICAgICAgIHRpdGxlc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0aXRsZXNlY3Rpb24nKVxyXG5cclxuICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9wLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG90aXRsZWxpbmUnKVxyXG5cclxuLy8gc2luY2Ugd2UgYXJlIGxvb3BpbmcgdGhyb3VnaCBhbiBhcnJheSBvZiBvYmplY3RzLCBzZXQgdGhlIHRpdGxlIHRvIFxyXG4vLyB0aGUga2V5LCB0aGlzIHdpbGwgYWxsb3cgdXMgdG8gYWNjZXNzIHRoZSBhcnJheSBoZXJlIGFuZCB3ZSBjYW4gbG9vcCB0aHJvdWdoIGl0IGFuZCBkaXNwbGF5IHRoZSBjb250ZW50c1xyXG4gICAgICAgICAgXHJcblxyXG50aXRsZXNlY3Rpb24uYXBwZW5kQ2hpbGQodGV4dClcclxuXHJcbiAgICAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0b2RvdGl0bGVzJylcclxuXHJcbiAgICAgICAgICAgLy8gZm9yIGVhY2ggdG9kbyBjb250ZW50IHdlIG1ha2UsIG1ha2UgaXQgdW5pcXVlIHNvIGl0IGNhbiBoYXZlIHVuaXF1ZSBldmVudHMgKGxpa2UgYmVpbmcgcmVtb3ZlZCEpXHJcbiAgICAgICAgICAgLy8gYWRkIHRoZSBpbmRleCBhcyB3ZWxsLCB3aGljaCB3ZSB3aWxsIGR5bmFtaWNhbGx5IHVwZGF0ZSB3aGVuIHdlIGFkanVzdCB0aGUgYXJyYXlzIVxyXG5cclxuICAgICAgICAgICAgdG9kb2FyZWEuYXBwZW5kQ2hpbGQodG9kb2NvbnRlbnRkaXYpXHJcbiAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LmRhdGFzZXQucHJvamVjdCA9IHByb3AudGl0bGVcclxuICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYuZGF0YXNldC5wcm9qZWN0c2V0PSBwcm9wLnByb2plY3RcclxuICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYuZGF0YXNldC5pbmRleCA9IHByb3AuaW5kZXhcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBidXR0b24gY29udGFpbmVyISB0byBnbyBiZXNpZGUgdG9kb3NlY3Rpb25cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGJ1dHRvbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25jb250YWluZXInKVxyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGV4cGFuZCBidXR0b25cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICBjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgICAgZXhwYW5kLnNyYyA9IHBsdXNxdWFyZVxyXG4gICAgICAgICAgZXhwYW5kLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGJ1dHRvbicpXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgICAvLyBhZGQgYW4gZXZlbnQgdG8gZWFjaCBleHBhbmQgYnV0dG9uIVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBleHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG5cclxuLy8gY3JlYXRlIGEgdG9kbyBjb250ZW50IGRpdiB0aGF0IHdlIHdpbGwgYXBwZW5kIGFuZCByZW1vdmUhXHJcblxyXG5cclxuICAgICAgICAgICBjb25zdCB0b2RvaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgdG9kb2luZm8uY2xhc3NMaXN0LmFkZCgndG9kb2luZm8nKVxyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGEgZm9ybSBlbGVtZW50IG9uIHRoZSB0b2RvLi5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvZm9ybScpXHJcblxyXG5cclxuICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGNyZWF0ZSB0aGUgY29udGVudCB0aGF0IHdpbGwgcG9wdWxhdGUgdGhpcyB0b2RvXHJcbiAgICAgICAgICAgLy8gdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgY29tcGxldGVkP1xyXG4gICAgICAgICAgIC8vIGFuZCBhbHNvIG1ha2UgaXQgcG9zc2libGUgdG8gZWRpdCB0aGUgdmFsZXMgYnkgY2xpY2tpbmcgaW4gdGhlIGZpZWxkcyFcclxuICAgICAgICAgICAvLyB3ZSBjYW4gYWxyZWFkeSBjaGFuZ2UgY29tcGxldGVkIGFuZCBwcmlvcml0eVxyXG4gICAgICAgICAgIC8vIHNvIG1ha2UgaXQgc28gdGhhdCB3ZSBjYW4gZWRpdCBkZXNjcmlwdGlvbiwgdGl0bGUgYW5kIGRhdGVcclxuICAgICAgICAgICAvLyBhZnRlciB3ZSBlZGl0IHRoZXNlIHRoaW5ncywgcmVmcmVzaCB0aGUgZGlzcGxheSBvZiB0aGF0IGluZGl2aWR1YWwgdG9kby4uXHJcbiAgICAgICBcclxuICAgICAgICAgICAgLy8gdG9kb2lucHV0c1xyXG4gICAgICAgICBcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWxzID0gWydUaXRsZScsICdEZXNjcmlwdGlvbicsICdEdWVkYXRlJ11cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbGFiZWwgZm9yIGVhY2ggaW5wdXQgXHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgICAgICAgICBsYWJlbC5mb3IgPSBsYWJlbHNbaV1cclxuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbHNbaV1cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGlucHV0XHJcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgICAgICAgICBpbnB1dC5uYW1lID0gJ3RpdGxlJ1xyXG4gICAgICAgICAgICBpbnB1dC5pZCA9ICd0aXRsZSdcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAobGFiZWxzW2ldID09ICdEdWVkYXRlJykge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5pZCA9IFwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5uYW1lPSAnZGF0ZSdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGxhYmVsc1tpXSA9PSAnRGVzY3JpcHRpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuICAgICAgICAgICAgICAgIGlucHV0LmlkID0gXCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICAgICAgIC8vIGFwcGVuZCBpbnB1dCBvbnRvIGxhYmVsXHJcbiAgXHJcbiAgICAgICAgICAgIC8vIGFwcGVuZCBsYWJlbCBob3VzaW5nIGlucHV0IG9udG8gZm9ybS4uXHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIGFkZCBhIGJ1dHRvbiB0byBzdWJtaXQgdGhlIGZvcm1cclxuXHJcbiAgICAgICAgIGNvbnN0IHN1Ym1pdHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICBzdWJtaXR0b2RvLnRleHRDb250ZW50ID0gJ1VwZGF0ZSBUb2RvISdcclxuXHJcbiAgICAgICAgIC8vIGZvciBsYXRlciBtYW5pcHVsYXRpb24sIGFkZCBhIGNsYXNzIHRvIHN1Ym1pdCBidXR0b25cclxuICAgICAgICAgc3VibWl0dG9kby5jbGFzc0xpc3QuYWRkKCdzdWJtaXR0b2RvJylcclxuICAgICAgICAgc3VibWl0dG9kby50eXBlID0gJ3N1Ym1pdCdcclxuXHJcbiAgICAgICAgIC8vIGFwcGVuZCBidXR0b24gdG8gZm9ybVxyXG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdHRvZG8pXHJcbiAgICAgICAgIGZvcm0ubWV0aG9kID0gJ2dldCdcclxuXHJcbiAgICAgICAgIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKVxyXG4gICAgICAgICB0aXRsZS52YWx1ZSA9IHByb3AudGl0bGVcclxuICAgICAgICAgXHJcbiAgICAgICAgIGNvbnN0IGRhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJylcclxuICAgICAgICAgZGF0ZS52YWx1ZSA9IHByb3AuZHVlZGF0ZVxyXG5cclxuICAgICAgICAgY29uc3QgZGVzYyA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJylcclxuICAgICAgICAgZGVzYy52YWx1ZSA9IHByb3AuZGVzY3JpcHRpb25cclxuXHJcbiAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzdWJtaXQgZXZlbnQgb24gZm9ybSBjb250YWluZXIsIGxvZyB0aGUgdmFsdWVzIHRoYXQgaXQgbWFrZXMuLlxyXG5cclxuICAgXHJcbiAgICAgICAgICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgICAgICAgICAudGhlbiAoKG8pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgcmVsZXZhbnQgdG9kbyB3aXRoIHRoZSBuZXcgaW5mb3JtYXRpb24uLlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucHJvamVjdHNldFxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleFxyXG5cclxuICAgICAgICAgICAgICAgLy8gbm93IHVwZGF0ZSBwcm9qZWN0IGF0IGluZGV4IGF0IHZhbHVlXHJcbiAgICAgICAgICAgICAgIC8vIGFuZCBhbHNvIHVwZGF0ZSB0aGUgY29tcGxldGVkIHN0YXR1cyBpZiBpdCBoYXMgY2hhbmdlZCwgYXMgd2VsbCBhcyB0aGUgcHJpb3JpdHkuLlxyXG4gICAgICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZScpXHJcbiAgICBcclxuICAgICAgICAgICAgICAgdmFyIHByaW9yaXR5ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWlja2luZm8nKS5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5YnV0dG9uJylcclxuICAgICAgICAgICAgICAgaWYgKHByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygncHJpb3JpdHl3cmFwcGVybG93JykpIHtcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gXCJwcmlvcml0eS1sb3dcIlxyXG5cclxuICAgICAgICAgICAgICAgfVxyXG5lbHNlICBpZiAocHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmlvcml0eXdyYXBwZXJtZWQnKSkge1xyXG4gICAgcHJpb3JpdHkgPSBcInByaW9yaXR5LW1lZFwiXHJcblxyXG59XHJcbmVsc2UgIGlmIChwcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3ByaW9yaXR5d3JhcHBlcmhpZ2gnKSkge1xyXG4gICAgcHJpb3JpdHkgPSBcInByaW9yaXR5LWhpZ2hcIlxyXG5cclxufVxyXG5cclxuICAgICBcclxuICAgICAgICAgICAgICAgLy8gbm93IHRoYXQgd2UgaGF2ZSB1cGRhdGVkIHRoZSByZWx2YW50IHRvZG8sIGxldHMgcmUgcmVuZGVyIHRoaXMgc3BlY2lmaWMgdG9kb1xyXG4gICAgICAgICAgICAgICAvLyBsZWF2aW5nIGl0IGV4cGFuZGVkIGFuZCBldmVyeXRoaWduIGVsc2UgYWxvbmVcclxuXHJcbiAgICAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgdGl0bGUgY29udGVudCB0byB1cGRhdGVkIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggKVxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvdGl0bGVsaW5lJykudGV4dENvbnRlbnQgPSB0aXRsZS52YWx1ZVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gZGVzYy52YWx1ZVxyXG5cclxuXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgZGF0ZVxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL2luZGV4LmpzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoZSBkYXRlIGlzIHRvZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBpdCBpcyB0b2RheSwgY2hhbmdlIHRoZSB0ZXh0IHRvIER1ZSBUb2RheSFcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZS52YWx1ZSA9PSBvLmRhdGUgfHwgZGF0ZS50ZXh0Q29udGVudCA9PSBvLmRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAvLyBhbHRob3VnaCBpZiBzdGF0dXMgaXMgY29tcGxldGUsIGtlZXAgZGF0ZSB0ZXh0IGFzICdET05FJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcC5jb21wbGV0ZWQgPT0gdHJ1ZSApIHsgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlYnV0dG9uJykudGV4dENvbnRlbnQgPSBcIkRPTkUhXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wLmNvbXBsZXRlZCA9PSBmYWxzZSkgeyBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS50ZXh0Q29udGVudCA9IFwiRFVFIFRPREFZXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGVsc2UgeyAgIC8vIGlmIGl0IGlzIG5vdCB0b2RheVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxlYXZlIGRhdGUgdmFsdWUgdW5jaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHVwZGF0ZSB0aGUgZGl2diB3aXRoIGRhdGUgdmFsdWUhXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZGF5JywgZGF0ZS52YWx1ZSwgby5kYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLmNvbXBsZXRlZCA9PSB0cnVlKSB7IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZWJ1dHRvbicpLnRleHRDb250ZW50ID0nRE9ORSEnfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBlbHNlIHsgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZWJ1dHRvbicpLnRleHRDb250ZW50ID0gZGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgcHJpb3JpdHlcclxuICAgICAgICAgICAgICAgIC8vIHdpbGwgdXBkYXRlIGF1dG9tYXRpY2FsbHkgYXMgaXQgYWx0ZXJzIHRoZSBvYmplY3RcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgY29tcGxldGVkIHN0YXR1cyFcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIG5vdyB1cGRhdGUgdGhlIGN1c3RvbSBwcm9qZWN0IHdpdGggdGhlIHJlbGV2YW50IGNoYW5nZXMuLlxyXG5cclxuICAgICAgICAgICAgICAgIG8ucHJvamVjdHNbcHJvamVjdF1baW5kZXhdLnRpdGxlID0gdGl0bGUudmFsdWVcclxuICAgICAgICAgICAgICAgIG8ucHJvamVjdHNbcHJvamVjdF1baW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzYy52YWx1ZVxyXG4gICAgICAgICAgICAgICAgby5wcm9qZWN0c1twcm9qZWN0XVtpbmRleF0uZHVlZGF0ZSA9IGRhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgIG8ucHJvamVjdHNbcHJvamVjdF1baW5kZXhdLmNvbXBsZXRlZCA9IGNvbXBsZXRlZFxyXG4gICAgICAgICAgICAgICAgby5wcm9qZWN0c1twcm9qZWN0XVtpbmRleF0ucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coby5wcm9qZWN0c1twcm9qZWN0XVtpbmRleF0pXHJcbiAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICB0b2RvaW5mby5hcHBlbmRDaGlsZChmb3JtKVxyXG4gICAgICAgICAvLyBhZGQgc3VibWl0IGJ1dHRvbiBvbiBmb3JtXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIGFkZCBhIGJ1dHRvbiB0byBjYW5jZWwgc3VibWl0XHJcblxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWxzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICBjYW5jZWxzdWJtaXQudGV4dENvbnRlbnQgPSAnQ2FuY2VsJ1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy8gZm9yIGxhdGVyIG1hbmlwdWxhdGlvbiwgYWRkIGEgY2xhc3MgdG8gc3VibWl0IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjYW5jZWxzdWJtaXQuY2xhc3NMaXN0LmFkZCgnY2FuY2Vsc3VibWl0JylcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBidXR0b24gdG8gZm9ybVxyXG4gICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbHN1Ym1pdClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB3ZSBjbGljayB0aGUgY2FuY2VsIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhbmNlbHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCBiZWhhdnVvdXIgb2Ygc3VibWl0dGl1bmcgdGhlIGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBsYXJnZSB0YWcgZnJvbSB0aGUgcGFyZW50IGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGFyZ2UnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzd2l0Y2ggdGhlIGljb24gYmFjayB0byBhIHBsdXMhXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJykuc3JjPSBwbHVzcXVhcmUpXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIC8vYW5kIHJlbW92ZSB0aGUgYWRkZWQgY29udGVudCB0aGF0IHRoZSBwbHVzIGFkZGVkXHJcblxyXG4gICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9pbmZvJylcclxuICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHJlbW92ZSlcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgdG9kb2luZm8uYXBwZW5kQ2hpbGQoZm9ybSlcclxuICAgICAgICAgICAgICAgICAgLy8gYWRkIHN1Ym1pdCBidXR0b24gb24gZm9ybVxyXG4gXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gd2hlbiB3ZSBjbGljayBhbiBleHBhbmQgaWNvbi4uXHJcbiAgICAgICAgICAgIC8vIHdlIHdhbnQgdG8gZXhwYW5kIHRoYXQgc3BlY2lmaWMgdG9kby4uXHJcblxyXG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdsYXJnZScpXHJcblxyXG4gICAgICAgICAgICAvLyB3ZSB0aGVuIHNldCB0aGUgaW1hZ2UgdG8gYSBtaW51cyBvciBhIHBsdXMsIGRlcGVuaW5nIGlmIHdlIGFyZSBhZGRpbmdcclxuICAgICAgICAgICAgLy8gb3IgcmVtb3ZpbmcgbGFyZ2VcclxuXHJcbiAgICAgICAgICAgaWYgKCBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2xhcmdlJykpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQuc3JjID0gbWludXNzcXVhcmVcclxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb2luZm8pXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgZWxzZSB7ZS50YXJnZXQuc3JjID0gcGx1c3F1YXJlXHJcbiAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9pbmZvJykpfVxyXG5cclxuXHJcbiAgICAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gc3R5bGUgaXQgbm93IHRoYXQgdGhlIGRpdiBpcyBhZGRlZCwgbWF5YmUgdGhlIGxhcmdlIGNsYXNzIHdpbGwgYWxzbyBvdmVyd3JpdGUgaG93IHdlIGxheSB0aGlpbmdzIG91dC4uXHJcblxyXG5cclxuICAgICBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBidXR0b25jb250YWluZXIuYXBwZW5kQ2hpbGQoZXhwYW5kKVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgZGF0ZSBidXR0b24gXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkYXRlYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGltcG9ydCgnZGF0ZS1mbnMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBwcm9wLmR1ZWRhdGVcclxuXHJcbiAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgIGlmIChwcm9wLmR1ZWRhdGUgPT0gby5mb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKSAmJiBwcm9wLmNvbXBsZXRlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRldG9kb2J1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZXdoZW5kb25lJylcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGV0b2RvYnV0dG9uJykudGV4dENvbnRlbnQgPSBcIkRFTEVURVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAoJ0RPTkUhJylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcC5kdWVkYXRlID09IG8uZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJykgJiYgcHJvcC5jb21wbGV0ZWQgIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZXRvZG9idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdkZWxldGV3aGVuZG9uZScpXHJcbiAgICAgICAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRldG9kb2J1dHRvbicpLnRleHRDb250ZW50ID0gXCJYXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICgnRFVFIFRPREFZJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJ1dHRvbmNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKGJ1dHRvbilcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4vLyBjcmVhdGUgcHJpb3JpdHkgYnV0dG9uIVxyXG5cclxuICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHl0b2RvYnV0dG9uJylcclxuICAgICAgICAgICAgYnV0dG9uLmlkID0gJ3ByaW9yaXR5YnV0dG9uJ1xyXG5cclxuXHJcbiAgICAgaWYgKHByb3AucHJpb3JpdHkgPT0gJ3ByaW9yaXR5LWxvdycpIHtidXR0b24udGV4dENvbnRlbnQgPSBcIkxcIlxyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5d3JhcHBlcmxvdycpfVxyXG4gICAgIGVsc2UgaWYgKHByb3AucHJpb3JpdHkgPT0gJ3ByaW9yaXR5LW1lZCcpIHtidXR0b24udGV4dENvbnRlbnQgPSAnTSdcclxuICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHl3cmFwcGVybWVkJyl9XHJcbiAgICAgZWxzZSB7XHJcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJIXCJcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHl3cmFwcGVyaGlnaCcpXHJcbiAgICAgfVxyXG4gICAgICAgICAgICBidXR0b25jb250YWluZXJcclxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGJ1dHRvbilcclxuXHJcblxyXG4gICAgIGZ1bmN0aW9uIHByaW9yaXR5Q2hhbmdlcihlLCBwcmlvcml0eSkge1xyXG4gICAgICAgIC8vIHdoZW4gd2UgY2xpY2sgdGhlIHNwZWNpZmljIHRvZG8gb2JqZWN0LCB3ZSB3aWxsIGdldCBhbiBpbmRleCB2YWx1ZSwgYXMgd2VsbCBhcyBhIHByb2plY3Qgd2hpY2ggd2UgY2FuIHVzZSBcclxuICAgICAgICAvLyB0byBzd2l0Y2ggaXRzIHByaW9yaXR5IVxyXG4gICAgICAgIC8vIHRoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgdGhlIGV2ZW50XHJcbiAgICAgICAgLy8gaXRzIHRoZSB0b2RvIGNvbnRhaW5lcnMgZGV0YWlscyB3ZSB3YW50LCBub3QgdGhlIGJ1dHRvbiBjb250YWluZXIgKHBhcmVudClcclxuICAgICAgICAvLyBidXQgdGhlIHBhcmVudCBvZiB0aGUgYnV0dG9uIGNvbnRhaW5lclxyXG5cclxuICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyJylcclxuICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGZpbmQgdGhlIHNwZWNpZmljIHByb2plY3Qgd2l0aGluIGRlZmF1bHQgcHJvamVjdHNcclxuICAgICAgICAgICAgLy8gc2luY2UgaXRzIGFuIGFycmF5LCBhY2Nlc3MgaXQgYXQgdGhhdCBzcGVjaWZpYyBpbmRleFxyXG4gICAgICAgICAgICAvLyBhbmQgYWRqdXN0IGl0cyBwcmlvcml0eVxyXG4gICAgICAgICAgICBvYmoucHJvamVjdHNbZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0c2V0XVtlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4XS5wcmlvcml0eSA9IHByaW9yaXR5IFxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgIFxyXG5cclxuICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5Q2hhbmdlcihlKVxyXG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PSBcIkxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5d3JhcHBlcm1lZCcpXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eXdyYXBwZXJsb3cnKVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5Q2hhbmdlcihlLCAncHJpb3JpdHktbWVkJylcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgd2UgbmVlZCBhIHdheSB0byBhZGp1c3QgdGhlIHByaW9yaXR5IG9uIHRoZSBzcGVjaWZpYyB0b2RvISFcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXRzIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoZXkgY2FuIGFsbCB1c2UuLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09IFwiTVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJIXCJcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHl3cmFwcGVybWVkJylcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHl3cmFwcGVyaGlnaCcpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlDaGFuZ2VyKGUsICdwcmlvcml0eS1oaWdoJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5d3JhcHBlcmhpZ2gnKVxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eXdyYXBwZXJsb3cnKVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5Q2hhbmdlcihlLCAncHJpb3JpdHktbG93JylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgfVxyXG4vLyBDcmVhdGUgYSBjb21wbGV0ZWQgYnV0dG9uXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiXHJcblxyXG5pZiAocHJvcC5jb21wbGV0ZWQgPT0gdHJ1ZSkge2lucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyl9XHJcblxyXG5cclxuZWxzZSBpZiAocHJvcC5jb21wbGV0ZWQgPT0gZmFsc2UpIHtpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKX1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBjaGFuZ2UgY29tcGxldGUgc3RhdHVzIVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gaXQgaXMgY2xpY2tlZCwgdXBkYXRlIHRoZSB0b2RvJ3MgY29tcGxldGUgc3RhdHVzIVxyXG4gICAgICAgICAgICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAgICAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvLnByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG8ucHJvamVjdHMpXHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyB0aGlzIHNldHMgaXQgZ3JlZW4gd2hlbiB3ZSBjbGljayB0byBjaGVja1xyXG4gICAgICAgICAgICAgICAgICBpZiAoICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBsZXRlJykgfHwgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGl0IGlzIGFscmVhZHkgY29tcGxldGUgd2hlbiBjbGlja2VkLCB0aGVuIHJlbW92ZSB0aGUgY2xhc3MgYW5kIGNoYW5nZSB0aGUgcHJvamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJylcclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgdGV4dCBjb250ZW50IHRvIHRoZSBkYXRlIG9mIHRoZSB0b2RvLCB1bmxlc3MgaXQgaXMgdG9kYXkncyBkYXRlIGF0IHdoaWNoIHBvaW50IHNob3cgZHVlIHRvZGF5IVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGF0ZWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlIGNvbXBsZXRlIHN0YXR1cyBvbiBwcm9qZWN0IVxyXG4gICAgICAgICAgICAgICAgICAgIG8ucHJvamVjdHNbZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0c2V0XVtlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4XS5jb21wbGV0ZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG8ucHJvamVjdHNbZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQucHJvamVjdHNldF0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlIGJ1dHRvbiBmcm9tICdkb25lJ1xyXG4gICAgICAgICAgICAgICAgICBpbXBvcnQgKCdkYXRlLWZucycpXHJcbiAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AuZHVlZGF0ZSA9PSBkYXRlLmZvcm1hdChuZXcgRGF0ZSgpLCBcInl5eXktTU0tZGRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlYnV0dG9uJykudGV4dENvbnRlbnQgPSAnRFVFIFRPREFZISdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGV0b2RvYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnZGVsZXRld2hlbmRvbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRlbGV0ZXRvZG9idXR0b24nKS50ZXh0Q29udGVudCA9IFwiWFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS50ZXh0Q29udGVudCA9IHByb3AuZHVlZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRlbGV0ZXRvZG9idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdkZWxldGV3aGVuZG9uZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRldG9kb2J1dHRvbicpLnRleHRDb250ZW50ID0gXCJYXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsc2UgYWRkIHRoZSBjbGFzcyBhbmQgYWRkIHRvIHJlbGV2YW50IHByb2plY3RcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlYnV0dG9uJykudGV4dENvbnRlbnQgPSAnRE9ORSEnXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3IgdGhlIGRlbGV0ZSBidXR0b24gcmVkIGFuZCBtYWtlIGl0IGxhcmdlciFcclxuICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRlbGV0ZXRvZG9idXR0b24nKS5jbGFzc0xpc3QuYWRkKCdkZWxldGV3aGVuZG9uZScpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGV0b2RvYnV0dG9uJykudGV4dENvbnRlbnQgPSBcIkRFTEVURVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpXHJcbiAgICAgICAgICAgICAgICAgICAgby5wcm9qZWN0c1tlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LnByb2plY3RzZXRdW2UudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXhdLmNvbXBsZXRlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgd2UgbmVlZCBhIHdheSB0byBhbHNvIHNldCBpdCBncmVlbiBpZiBjb21wbGV0ZWQgaXMgdHJ1ZSBieSBkZWZhdWx0IVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIHRoYXQgd2l0aGluIHRoZSBjcmVhdGlvbiBvZiB0b2RvY29udGVudCBkaXZzXHJcbiAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kb2NoZWNrYm94JylcclxuICAgICAgICAgICAgICAgICAgIGJ1dHRvbmNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCB0aXRsZSBhbmQgYnV0dG9uIGNvbnRhaW5lciB0byBxdWljayBpbmZvIHRoZW4gdG8gZGl2IVxyXG4gICAgICAgICAgICAgICAgICAgcXVpY2tpbmZvLmFwcGVuZENoaWxkKGJ1dHRvbmNvbnRhaW5lcilcclxuICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LmFwcGVuZENoaWxkKHF1aWNraW5mbylcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBpZiAocHJvcC5jb21wbGV0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlJylcclxuICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCA9IFwiY2hlY2tlZFwiXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAvLyBjcmVhdGUgZGVsZXRlZCBidXR0b24gd2l0aGluIHRvZG8gZWxlbWVudHNcclxuXHJcblxyXG5cclxuICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9idXR0b24nKVxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRldG9kb2J1dHRvbicpXHJcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiXHJcbiAgICAgICAgICAgIGJ1dHRvbmNvbnRhaW5lclxyXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggZGVsZXRlIGJ1dHRvbiBcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgICAgICAvLyBvbiBjbGljaywgZGVsZXRlIHRoZSB0b2RvISB3aXRoIHRoZSByZWxldmFudCBkZXRhaWxzIGZyb20gcGFyZW50IHRvZG8gY29udGFpbmVyXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQpXHJcblxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL3RvZG9tb2R1bGUuanMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgb2JqLmRlbGV0ZVRvZG8oZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0c2V0LCBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFmdGVyIHdlIGRlbGV0ZSB0aGUgdG9kbywgcmVwb3B1bGF0ZSB0aGUgZGlzcGxheSBAIGFsbFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlRGlzcGxheSgnYWxsJylcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgLy8gYWRkIHRvIGVhY2ggdG9kbyBjb250ZW50IHRoYXQgdG9kbydzIHNwZWNpZmljIGFycmF5IGluZGV4IFxyXG5cclxuICAgXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBvcHVwVG9kbygpXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG5cclxuICAgIGFwcGVuZFRpbWUoKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGNvbG9yIGJhY2sgb2Ygc2VsZWN0ZWQgcHJvamVjdCByZWQhXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkUHJvamVjdCgpIHtcclxuICAgIFxyXG4vLyBzZXQgdGhlIGFsbCB0YWcgYXMgcmVkIHNpbmNlIHdlIGFyZSBkaXNwbGF5aW5nIGFsbCBcclxuY29uc3QgcmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZCcpXHJcbnJlZC5mb3JFYWNoKChlbGVtKSAgPT4ge1xyXG4gICAgaWYgKGVsZW0uZGF0YXNldC50aXRsZSA9PSBcImFsbFwiKSB7ZWxlbS5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJyl9XHJcbn0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUmVkKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZCcpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZGJhY2snKVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbi8vIGRyYXcgdGhlIHRvZG8gZGlzcGxheSFcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsUmVuZGVyVG9kbygpIHtcclxuICAgIFxyXG4gIFxyXG4gICAgLy8gZ2V0IHRoZSB0b2RvIGFyZWEgYW5kIHNldCBpdCBlcXVhbCB0byB0aGUgYWxsIGFycmF5IGluIGRlZmF1bHRwcm9qZWN0c1xyXG4gICAgLy8gc3RhcnQgYnkgY2xlYXJpbmcgdGhlIGFyZWFcclxuICAgXHJcbiAgICBwb3B1bGF0ZURpc3BsYXkoJ2FsbCcpXHJcbiAgIFxyXG4gICAgLy8gbG9vcCB0aGUgYXJyYXkgYW5kIGRyYXcgZG9tIGVsZW1lbnRzIGZvciBlYWNoIG9uZSFcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIHBvcHVwIHRvZG8gZGlzcGxheSFcclxuLy8gY2hhbmdlcyBjb2xvciB3aGVuIG1vdXNpbmcgb3ZlciB0aGVtIGFuZCByZW1vdmVzIGl0IHdoZW4gbW91c2luZyBvdXRcclxuLy8gbGV0cyB0aGVtIHBvcC11cCB3aGVuIGNsaWNrZWQhXHJcblxyXG5mdW5jdGlvbiBwb3B1cFRvZG8oKSB7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4vLyBzY3JpcHQgYmVsb3cgdG8gbWFyayBwcm9qZWN0IHRpdGxlIHJlZCBiYXNlZCBvbiBpbnB1dCBhbmQgZGVmYXVsdCB2aWV3XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RlZCgpIHtcclxuXHJcbiAgICAvLyB0byBiZSBydW4gYWZ0ZXIgZG9tIGlzIGJ1aWx0LCBxdWVyeSBhbGwgdGl0bGVzXHJcbiAgICAvLyB3ZSBhcmUgZ29pbmcgdG8gXHJcblxyXG4gICAgY29uc3QgdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZCcpXHJcbiAgICB0aXRsZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG5cclxuICAgIH0pXHJcblxyXG5cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gYmVsb3cgYXBwZW5kcyBjdXJyZW50IGRheSBpbiB0aW1lIGluIHRoZSBoZWFkZXIhIHRvIGJlIGNhbGxlZCBpbiBwb3B1bGF0ZURpc3BsYXlcclxuXHJcbmZ1bmN0aW9uIGFwcGVuZFRpbWUoKSB7XHJcbiAgICBpbXBvcnQoJ2RhdGUtZm5zJylcclxuICAgIC50aGVuKChkYXRlKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpXHJcbiAgICAgICAgdGltZS5jbGFzc0xpc3QuYWRkKCd0aW1laGVhZGVyJylcclxuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5mb3JtYXQobmV3IERhdGUoKSwgJ0VFRUUnKVxyXG4gICAgICAgIGxldCBkYXludW1iZXIgPSBkYXRlLmZvcm1hdChuZXcgRGF0ZSgpLCAnZW8nKVxyXG4gICAgICAgIGxldCBtb250aCA9IGRhdGUuZm9ybWF0KG5ldyBEYXRlKCksICdNTU1NJylcclxuICAgICAgICBsZXQgeWVhciA9IGRhdGUuZm9ybWF0KG5ldyBEYXRlKCksICd5JylcclxuICAgICAgICB0aW1lLnRleHRDb250ZW50ID0gYCR7ZGF5fSwgdGhlICR7ZGF5bnVtYmVyfSBkYXkgb2YgJHttb250aH0gJHt5ZWFyfSFgXHJcbiAgICAgICAgY29uc3QgaGVhZGVyZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbHVtbnMnKVxyXG4gICAgICAgIGhlYWRlcmRpdi50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICAgICAgICAgaGVhZGVyZGl2LmFwcGVuZENoaWxkKHRpbWUpXHJcbiAgICAgICAgXHJcblxyXG4gICAgfSlcclxuXHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSAnLi90b2RvbW9kdWxlJ1xyXG5pbXBvcnQgeyBwcm9qZWN0cywgZGVmYXVsdHByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0bWFrZXIuanMnXHJcbmNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wbGV0ZWQnKS5jaGVja2VkXHJcblxyXG5cclxuXHJcbi8vIGxvZ2ljIHRvIGRldGVybWluZSBwcmlvcml0eVxyXG4vLyBzZXJpZXMgb2YgcmFkaW8gYnV0dG9ucyBsb29wIHRocm91Z2ggdGhlbVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1Db250cm9sbGVyKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZWRhdGUscHJpb3JpdHkscHJvamVjdCxjb21wbGV0ZWQpIHtcclxuXHJcbmlmIChjb21wbGV0ZWQgPT0gXCJcIikge2NvbXBsZXRlZCA9IGZhbHNlfVxyXG4vLyBjcmVhdGUgYSB0b2RvIG9iamVjdCBmcm9tIHRoZSBzcGVjaWZpZWQgaW5wdXRzIVxyXG5cclxuIFxyXG5cclxuICAgICAgICAgICAvLyBhZGQgaXQgdG8gdGhlIHNwZWNpZmljIHByb2plY3QuLiAgYWxsIGJ5IGRlZmF1bHQgb3Igc2VsZWN0ZWQuLlxyXG5cclxuXHJcbiAgIFxyXG4gICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICAgICAgICAgLy8gYW5kIHRoZSBjdXN0b20gcHJvamVjdCBpdHNlbGZcclxuICAgICAgICAgICAgbGV0IG9iaiA9IGNyZWF0ZVRvZG8odGl0bGUsZGVzY3JpcHRpb24sZHVlZGF0ZSxwcmlvcml0eSxwcm9qZWN0LGNvbXBsZXRlZClcclxuICAgICAgICAgICAgcHJvamVjdHNbcHJvamVjdF0ucHVzaChvYmopXHJcblxyXG4gICAgICAgICAgICAvLyB0aGUgZnVuY3Rpb24gcmV0dXJucyBhbiBvYmplY3QgYW5kIHdlIHB1c2ggaXQgb250byB0aGUgYXBwcm9wcmlhdGUgY3VzdG9tIHByb2plY3RzIGFycmF5XHJcblxyXG4gIC8vIHdlIGFsc28gd2FudCB0byBoYXZlIGEgY3VzdG9tIGluZGV4IHByb3BlcnR5IGZvciB0aGUgdG9kbydzIGFuZCBmaWd1cmUgb3V0IHRoZWlyIHBvc2l0aW9uIHdpdGhpbiB0aGVpciByZXNwZWN0aXZlIGFycmF5XHJcbiAgcHJvamVjdHNbcHJvamVjdF0uZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICBlbGVtLmluZGV4ID0gaW5kXHJcbiAgIFxyXG4gIH0pXHJcblxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVpbmRleCgpIHtcclxuICAgICAgcHJvamVjdHNbcHJvamVjdF0uZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICBlbGVtLmluZGV4ID0gaW5kXHJcbiAgICBjb25zb2xlLmxvZygnQVJSQVlMT09QJywgZWxlbSlcclxuICB9KVxyXG4gIH1cclxuICAgXHJcbiAgICAgICAvLyBhZnRlciB3ZSBoYXZlIHB1c2hlZCB0aGUgb2JqZWN0IG9udG8gcHJvamVjdHNcclxuICAgICAgIC8vIHdlIGxvb3AgdGhlIGFycmF5IGFuZCBhZGp1c3QgaW5kZXhlcyBzbyB0aGUgdG9kbydzIGhhdmUgY3VzdG9tIGluZGV4ZXMhXHJcblxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgIFxyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8vIGFwcGVuZCB0aGUgdG9kbyB0byB0aGUgYXBwcm9wcmlhdGUgcHJvamVjdCFcclxuLy8gaXQgaXMgZWl0aGVyIHRvIEFsbCBwcm9qZWN0cywgb3IgYSBzcGVjaWZpYyBvbmVcclxuLy8gZm9yIGFsbCBiZWxvdyIsIi8vIHByb2plY3RzIHdpbGwgbmVlZCB0byBiZSBjYXBhYmxlIG9mIHN0b3Jpbmcgd2hpY2ggdG9kbydzIGJlbG9uZyB0byB0aGVtXG4vLyBpdCBsb29rcyBjbGVhbmVyIHRvIHN0b3JlIGFzIGFuIG9iamVjdCBvZiBwcm9qZWN0IG5hbWVzIGFuZCBoYXZlIHRoZSB2YWx1ZXMgZXF1YWwgdG9cbi8vIGFycmF5cyB0aGF0IGNvbnRhaW4gdGhlIHJlbGV2ZW50IHRvZG8gb2JqZWN0cyBcblxuLy8gd2UgY2FuIGNvbWUgdXAgd2l0aCBhIG1hc3RlciBwcm9qZWN0cyBvYmplY3QsIGlmIGluIHRoZSBVSSB3ZSB3b3VsZCBsaWtlIHRvIHNlcGFyYXRlIHRoZSBkaXNwbGF5XG4vLyBpdCBpcyBlYXNpZXIgdG8gaGF2ZSBhIHNlcGFyYXRlIGRlZmF1bHQgcHJvamVjdCBvYmplY3QgYXMgd2UgY2FuIGp1c3QgbG9vcCBvdmVyIGl0IFxuLy8gdG8gcG9wdWxhdGUgdGhlIGRpc3BsYXkgYW5kIG5vdCBoYXZlIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBkZWZhdWx0IHZzIG5vblxuXG4vLyBhbGwga2V5IHdpbGwgaG91c2UgYXJyYXkgdGhhdCBwYXJzZXMgYWxsIGF2YWlsYWJsZSBwcm9qZWN0IG9iamVjdHMgYW5kIGxpc3RzIHRoZW1cbi8vIHRoZSB0b2RheSBhbmQgdGhpc3dlZWsgYXJyYXkgd2lsbCBoYXZlIHRvIGRvIHdpdGggc29ydGluZyBcblxuXG5leHBvcnQgY29uc3QgZGVmYXVsdHByb2plY3RzID0ge1xuICAgIGFsbDogW10sXG4gICAgdG9kYXk6IFtdLFxuICAgIHRoaXN3ZWVrOiBbXSxcbn1cblxuLy8gdGhpcyBmdW5jdGlvbiB0byBwb3B1bGF0ZSBkZWZhdWx0IHByb2plY3RzLCB3aGljaCB3aWxsIGxvb3Agb3ZlciBjdXN0b20gcHJvamVjdHMhXG5cblxuLy8gd2Ugd2lsbCBtYWtlIGZ1bmN0aW9ucyB0byBzb3J0IGFsbCB0byBjcmVhdGUgdGhpcyB3ZWVrIGFuZCB0b2RheSFcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzdGVzdCA9IHtcbiAgICAyOiBbe3RpdGxlOidwb29yYWdhcycsIGR1ZWRhdGU6ICcyMDIyLTAyLTAyJywgZGVzY3JpcHRpb246ICdwb29wb29BU0RBU0RBU0QnLCBwcmlvcml0eTogJ2xvdycsIGluZGV4OiAwfSx7dGl0bGU6J3Bvb3JhZ2FzJywgZHVlZGF0ZTogJzIwMjItMDItMDInLCBkZXNjcmlwdGlvbjogJ3Bvb3Bvb0FTREFTREFTRCcsIHByaW9yaXR5OiAnbG93JywgaW5kZXg6IDB9LHt0aXRsZToncG9vcmFnYXMnLCBkdWVkYXRlOiAnMjAyMi0wMi0wMicsIGRlc2NyaXB0aW9uOiAncG9vcG9vQVNEQVNEQVNEJywgcHJpb3JpdHk6ICdsb3cnLCBpbmRleDogMH0se3RpdGxlOidwb29yYWdhcycsIGR1ZWRhdGU6ICcyMDIzLTAyLTAyJywgZGVzY3JpcHRpb246ICdwb29wb29BU0RBU0RBU0QnLCBwcmlvcml0eTogJ2xvdycsIGluZGV4OiAwfV0sXG4gICAgMzogW3t0aXRsZToncG9vcmFnYXMnLCBkdWVkYXRlOiAnMjAyMi0wMi0wMicsIGRlc2NyaXB0aW9uOiAncG9vcG9vQVNEQVNEQVNEJywgcHJpb3JpdHk6ICdsb3cnLCBpbmRleDogMH1dLFxuICAgIDU6IFt7dGl0bGU6J3Bvb3JhZ2FzJywgZHVlZGF0ZTogJzIwMjItMDItMDInLCBkZXNjcmlwdGlvbjogJ3Bvb3Bvb0FTREFTREFTRCcsIHByaW9yaXR5OiAnbG93JywgaW5kZXg6IDB9XVxufVxuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSB7XG4gIFxufVxuXG4vLzI6IFt7dGl0bGU6J3Bvb3JhZ2FzJywgZHVlZGF0ZTogJzIwMjItMDItMDInLCBkZXNjcmlwdGlvbjogJ3Bvb3Bvb0FTREFTREFTRCcsIHByaW9yaXR5OiAnbG93JywgaW5kZXg6IDB9LF1cbi8vIGFkZCB0aGUgYXBwcm9wcmlhdGUgdG9kbydzIHRvIHRoZXNlIHByb2plY3RzIGJhc2VkIG9uIHRoZSBhcHByb3ByaWF0ZSBkYXRlcyAoZGF0ZWZuISlcblxuXG5cbi8vIG5vdyB3ZSBkZXZlbG9wIGEgd2F5IHRvIGFkZCBjdXN0b20gcHJvamVjdHMgdG8gdGhpcyBvYmplY3QhXG4vLyBpZiB2aXN1YWxseSB3ZSB3YW50IHRvIHNob3cgYSBjdWUgdGhhdCB0aGlzIGlzIGFuIG9wdGlvbiB3ZSBjYW4gZG8gdGhpcyB3aXRoIHRoZSBVSSBvciBub3QgaW4gdGhpcyBmdW5jdGlvblxuLy8gcnVubmluZyBhZGQgcHJvamVjdCBzaG91bGQgYWRkIGEgcHJvXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdG5hbWUpIHtcblxuICAgIFxuXG4gICAgLy8gaWYgd2UgdHJ5IHRvIGFkZCBhIHByb2plY3QgbmFtZSB0aGF0IGFscmVhZHkgZXhpc3RzLCB3ZSBjYW4gcmV0dXJuIGEgY29uZmlybWF0aW9uIFxuaWYgKHByb2plY3RuYW1lID09IFwiXCIpIHtyZXR1cm59XG5cblxuaWYgKHByb2plY3RzLmhhc093blByb3BlcnR5KHByb2plY3RuYW1lKSkge1xuICAgIGNvbnNvbGUubG9nKCdsb2dzIHRoYXQgcHJvcGVydHkgZXhpc3RzIHdpdGhpbiBwcm9qZWN0bWFrZXIuanMnKVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gICAgLy8gY2FsbCBkb20gZnVuY3Rpb24gdG8gdHVybiBmaWVsZCByZWQgYW5kIGNoYW5nZSBwbGFjZWhvbGRlciB0byBleGlzdHMhXG5cblxufVxuXG4gICAgLy8gZWxzZSB3ZSBhZGQgdGhlIHByb2plY3QgbmFtZSBhcyBhIGtleSB0byBwcm9qZWN0IG9iamVjdFxuICAgIC8vIGV2ZW50dWFsbHkgd2Ugd2lsbCBhcHBlbmQgdG9kbydzIHRvIHRoZXNlIGNhdGVnb3JpZXMgYmFzZWQgb24gc29tZSBjcml0ZXJpYSBcblxucHJvamVjdHNbcHJvamVjdG5hbWVdID0gW11cbmxldCByZXN1bHQgPSBwcm9qZWN0bmFtZVxuXG5cblxuY29uc29sZS5sb2coJ0RFRkFVTFQgUFJPSlMgQVJSQVkhISEnKVxuY29uc29sZS5sb2cocHJvamVjdHMsICdjdXJyZW50IHByb2plY3RzIG9iamVjdCcpO1xuXG4gIFxuXG5cblxucmV0dXJuO1xufVxuXG5cblxuXG5cblxuXG4vLyB3ZSB3YW50IHRvIGRlbGV0ZSB0aGV5IGtleSBvZiB0aGUgcHJvamVjdFxuLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBwcm9qZWN0LCB3ZSBuZWVkIGEgd2F5IHRvIGRldGVybWluZSB3aGljaCBwb3NpdGlvblxuLy8gaW4gdGhlIGFycmF5IHRoZSBwcm9qZWN0IGlzIHRvIHJlbW92ZVxuLy9zdXBwbHkgdGhpcyBhbiBpbmRleCBhcyB0aGlzIHdpbGwgYmUgdmlzdWFsIGJhc2VkXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xuXG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0c1twcm9qZWN0XVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbn1cblxuXG5cbi8vIGZ1bmN0aW9uIGJlbG93IHJlcG9ydHMgbmFtZSBvZiBwcm9qZWN0cyBjdXJyZW50bHkgaW4gbGlzdCBhbmQgYXBwZW5kIHRvIGFuIGFycmF5XG5cbmV4cG9ydCBsZXQgY3VycmVudEN1c3RvbVByb2plY3RzID0gW11cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICBjdXJyZW50Q3VzdG9tUHJvamVjdHMgPSBbXVxuXG5cbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBpbiBwcm9qZWN0cykge1xuICAgICAgICAgICAgY3VycmVudEN1c3RvbVByb2plY3RzLnB1c2gocHJvamVjdClcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuXG5cbiAgICB9IiwiLy8gZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdG9kbyBvYmplY3RzXG5mdW5jdGlvbiB1cGRhdGVBbGwoKSB7XG4gICAgXG4gICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXG4gICAgLnRoZW4oKG8pID0+IHtcbiAgICAgICAgby5kZWZhdWx0cHJvamVjdHMuYWxsID0gW11cblxuICAgICAgICAvLyBsb29wIG92ZXIgYWxsIGN1c3RvbSBwcm9qZWN0IGFycmF5cyBhbmQgYWRkIHRvIEFsbFxuICAgXG4gICAgICAgZm9yIChsZXQgcHJvcCBpbiBvLnByb2plY3RzKSB7XG4gICAgICAgIC8vIGluIGhlcmUgcHJvcCBpcyBlYWNoIG9iamVjdCBrZXkgY29ycmVzcG9uZGluZyB0byB0aGUgYXJyYXkgaG9sZGluZyBvYmplY3RzXG4gICAgICAgIC8vIG9mIGVhY2ggcHJvamVjdHMgdG9kbydzXG5cbiAgICAgICAgLy8gd2UgbXVzdCBsb29wIG92ZXIgZWFjaCBwcm9wIGFuZCBhZGQgdG8gQWxsIVxuXG5cblxuXG4gICAgICAgfVxuICAgIH0pXG59XG5cbmxldCB0b2RvY2F0Y2gxID0gW11cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksICBwcm9qZWN0LCBjb21wbGV0ZWQgPSBmYWxzZSkgXG57ICAgXG5cblxuICAgIGxldCBvYmogPSB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgIHByb2plY3QsIGNvbXBsZXRlZH1cbiAgICBcblxuICAgIGNvbnNvbGUubG9nKCAndG9kb2NhdGNoJylcblxuICAgIC8vIHdoZW4gd2UgbWFrZSBhIHRvZG8sIHdlIHdhbnQgdG8gcmVmcmVzaCB0aGUgYWxsIG9iamVjdCBhZ2FpbiB3aGljaCBpcyBhIGNvbGxlY3Rpb24gb2YgZXZlcnkgcHJvamVjdHMgb2JqZWN0IVxuICAgIHVwZGF0ZUFsbCgpIFxuICAgIFxuXG4gICAgXG5cblxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgIHByb2plY3QsIGNvbXBsZXRlZH1cbn1cblxuXG4vLyB3ZSB3YW5uYSB1cGRhdGUgdGhlIGFsbCBvYmplY3QgYWZ0ZXIgbWFraW5nIGEgdG9kbyFcblxuLy8gZnVuY3Rpb24gdG8gc2V0IGNvbXBsZXRlIG9mIHRvZG8gb2JqZWN0IHRvIHRydWUgdGFrZXMgYSB0b2RvIG9iamVjdCBhcyBhbiBhcmd1bWVudFxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29tcGxldGUob2JqKSB7XG4gICAgXG4gICAgaWYgKG9iai5jb21wbGV0ZWQpIHtcbiAgICBcbiAgICAgICAgb2JqLmNvbXBsZXRlZCA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBvYmouY29tcGxldGVkID0gdHJ1ZVxuICAgIHJldHVyblxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBwcmlvcml0eSBiZXR3ZWVuIGxvdyBtZWRpdW0gYW5kIGhpZ2ggdGFrZXMgYSB0b2RvIG9iamVjdCBhcyBhcmd1bWVudCBhbmQgYSBzZWxlY3Rpb25cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KG9iaiwgcHJpb3JpdHkpIHtcbiAgICBvYmoucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgIHJldHVyblxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvZG8ocHJvamVjdCwgaW5kZXgpIHtcblxuICAgIC8vIHdlIGhhdmUgYSBzcGVjaWZpYyBwcm9qZWN0LCBhbmQgaW5kZXggb2YgdGhlIHRvZG8hXG4gICAgLy8gZGVsZXRlIGl0IGZyb20gdGhlIGFycmF5IVxuICAgIGltcG9ydCAoJy4vcHJvamVjdG1ha2VyLmpzJylcbiAgICAudGhlbigob2JqKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QsIGluZGV4LCBvYmoucHJvamVjdHMpXG4gICAgICAgIG9iai5wcm9qZWN0c1twcm9qZWN0XS5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICAgICAgLy8gYWZ0ZXIgd2UgY3V0IHRoZSB0b2RvIG91dCwgd2UgbXVzdCByZWZyZXNoIHRoZSBwcm9wZXIgaW5kZXhlcyBvZiB0aGUgYXJyYXkgZWxlbWVudHMgYWdhaW4hXG4gICAgICAgIG9iai5wcm9qZWN0c1twcm9qZWN0XS5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcbiAgICAgICAgICAgIGVsZW0uaW5kZXggPSBpbmRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBUlJBWUxPT1AnLCBlbGVtKVxuICAgICAgICAgIH0pXG5cblxuICAgICAgICBcbiAgICB9KVxuICAgIFxuXG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=