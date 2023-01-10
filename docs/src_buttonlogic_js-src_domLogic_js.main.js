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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2J1dHRvbmxvZ2ljX2pzLXNyY19kb21Mb2dpY19qcy5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQzlEO0FBQ3dFO0FBQ0M7QUFDQTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0xBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNJQUEyQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhEQUFlO0FBQ25DO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsOENBQThDO0FBQ3RHLDBCQUEwQiwrQ0FBK0M7QUFDekUsZ0JBQWdCLGtJQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhIQUF1QjtBQUN4QztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNFQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0VBQWE7QUFDeEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0VBQWM7QUFDN0M7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzSUFBMkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsK0xBQWtCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNJQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsNkRBQVU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLCtMQUFrQjtBQUNyQjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOEhBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsUUFBUSxvSUFBMEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhIQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQWE7QUFDYjtBQUNBLHFEQUFxRDtBQUNyRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0lBQTJCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkhBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhIQUF1QjtBQUNqQztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0lBQTBCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhIQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSUFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBYztBQUNkLFFBQVEsc0lBQTJCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNJQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvSUFBMEI7QUFDOUM7QUFDQSxxQkFBcUI7QUFDckIsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhIQUF1QjtBQUN2QyxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0Q7QUFDVDtBQUNQO0FBQ1Y7QUFDOUI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0lBQTJCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFlBQVksOERBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOEhBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzSUFBMkI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhIQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsK0JBQStCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2ckNBO0FBQ0E7QUFDQTtBQUNpRTtBQUN4QjtBQUMrQjtBQUNDO0FBQ0w7QUFDcEU7QUFDQTtBQUN5RTtBQUN6RTtBQUN5RTtBQUN6RTtBQUNtQztBQUNuQztBQUMrRDtBQUMzQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNJQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9JQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksb0lBQTBCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4SEFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNJQUEyQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrTEFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsa0VBQWtCLENBQUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNFQUFhO0FBQzdEO0FBQ0Esb0lBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw2REFBVztBQUNYLG1FQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsMEVBQVc7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGtFQUFrQixDQUFDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzRUFBYTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzSUFBMkI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZCQUE2QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0xBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtMQUFrQjtBQUNsQjtBQUNBLGtEQUFrRCxvREFBUTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0VBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNJQUEyQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0hBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRIQUE0SCxvRUFBUztBQUNySTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2R0FBNkcsb0VBQVM7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxRUFBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGVBQWUsb0VBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0xBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUlBQXdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNJQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0xBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0lBQXlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0xBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkNBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JvQ3lDO0FBQ29CO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1REFBVTtBQUNoQyxZQUFZLHNEQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBUTtBQUNWO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzREFBUTtBQUNkO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRU87QUFDUCxTQUFTLG1HQUFtRyxFQUFFLG1HQUFtRyxFQUFFLG1HQUFtRyxFQUFFLG1HQUFtRztBQUMzWixTQUFTLG1HQUFtRztBQUM1RyxTQUFTLG1HQUFtRztBQUM1Rzs7QUFFTztBQUNQO0FBQ0E7O0FBRUEsT0FBTyxtR0FBbUc7QUFDMUc7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdPOztBQUVQOztBQUVBO0FBQ0Esd0JBQXdCOzs7QUFHeEI7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087O0FBRVA7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRU87QUFDQTtBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSEE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzSUFBMkI7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ087QUFDUDs7O0FBR0EsZUFBZTtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsWUFBWTtBQUNaOzs7QUFHQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7QUFJTzs7QUFFUDtBQUNBO0FBQ0EsSUFBSSxzSUFBNEI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQSxLQUFLO0FBQ0w7OztBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9idXR0b25sb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2RvbUxvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvZm9ybWxvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvcHJvamVjdG1ha2VyLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvdG9kb21vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtQ29udHJvbGxlciBhcyBmb3JtU3VibWl0ICB9IGZyb20gJy4vZm9ybWxvZ2ljLmpzJ1xyXG5cclxuaW1wb3J0IG1haW5wbHVzaW1hZ2UgZnJvbSAnLi4vc3JjL2ltYWdlcy9wbHVzLWNpcmNsZS1zdmdyZXBvLWNvbSg2KS5zdmcnXHJcbmltcG9ydCBob3ZlcnBsdXNpbWFnZSBmcm9tICcuLi9zcmMvaW1hZ2VzL3BsdXMtY2lyY2xlLXN2Z3JlcG8tY29tKDcpLnN2ZydcclxuaW1wb3J0IGNsaWNrcGx1c2ltYWdlIGZyb20gJy4uL3NyYy9pbWFnZXMvcGx1cy1jaXJjbGUtc3ZncmVwby1jb20oOCkuc3ZnJ1xyXG5cclxuXHJcblxyXG4vLyByZXNldCBpbnB1dCBmdW5jdGlvblxyXG5leHBvcnQgbGV0IGN1cnJlbnRzZWxlY3RlZHByb2plY3QgPSBcIlwiXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldElucHV0cygpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICBlbGVtLnZhbHVlID0gXCJcIlxyXG4gICAgICAgIGVsZW0uY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgaWYgKGVsZW0udHlwZSA9PSBcImRhdGVcIikge1xyXG4gICAgICAgICAgICBpbXBvcnQoJ2RhdGUtZm5zJylcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0udmFsdWUgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbS52YWx1ZSA9IGRhdGUuZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlZCcpLmNoZWNrZWQ9XCJcIlxyXG59XHJcblxyXG5cclxuLy90b2dnbGUgbW9kYWwgZnVuY3Rpb25cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1vZGFsKCkge1xyXG5cclxuICAgIGNvbnN0IG1vZGFsd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKVxyXG5cclxubW9kYWx3aW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tb2RhbCcpXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbGJhY2snKVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5jbGFzc0xpc3QudG9nZ2xlKCdiaWdoaWRlJylcclxuXHJcblxyXG5jbG9zZWxvZ2ljKClcclxufVxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBmdW5jdGlvbiBiZWxvdyBhZGRzIGNsaWNrIGV2ZW50cyB0byBjdXN0b20gcHJvamVjdCB0aXRsZSBidXR0b25zIHNvIHdoZW4gdGhleSBhcmUgY2xpY2tlZCB0aGV5IGNyZWF0ZSBhbiBldmVudFxyXG4gICAgXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gY3VzdG9tQnV0dG9uTG9naWMoKSB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tcHJvamVjdHRpdGxlJylcclxuICAgICAgICBidXR0b25zLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0LmRhdGFzZXQudGl0bGVcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVEaXNwbGF5KHRhcmdldClcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGJlbG93IGFkZHMgY2xpY2sgZXZlbnRzIHRvIHRvZG8gYnV0dG9uc1xyXG4gICAgXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdG9kb0J1dHRvbkxvZ2ljKCkge1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9idXR0b24nKVxyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gd2UgY2xpY2sgZGVsZXRlLCBjYWxsIHRoZSBkZWxldGUgdG9kbyBmdW5jdGlvbiBvbiB0aGUgc3BlY2lmaWMgdG9kbyFcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBkZWxldGUgdGhlIHRvZG8gYXQgaW5kZXggJHtlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleH0gb2YgY3VzdG9tXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0ICR7ZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQucHJvamVjdH1gKVxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL3RvZG9tb2R1bGUuanMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBvLmRlbGV0ZVRvZG8oZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQucHJvamVjdHNldCwgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFmdGVyIGRlbGV0ZSB0b2RvLCBsZXRzIHBvcHVsYXRlIHRoZSBkaXNwbGF5IVxyXG4gICAgICAgICAgICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgICAgICAgICAgLnRoZW4oKGRvbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbS5wb3B1bGF0ZURpc3BsYXkoJ2FsbCcpXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIHBsdXMgc3dpdGNoIGltYWdlIGxvZ2ljIG9uIGhvdmVyIGFuZCBjbGlja1xyXG4gICAgXHJcbiAgICAgZnVuY3Rpb24gcGx1c0J1dHRvbkltYWdlTG9naWMoKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGx1c2J1dHRvbicpXHJcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGUudGFyZ2V0LnNyYyA9IGhvdmVycGx1c2ltYWdlXHJcbiAgICAgXHJcbiAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnNyYyA9IG1haW5wbHVzaW1hZ2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5zcmMgPSBjbGlja3BsdXNpbWFnZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiByb2FzdCgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRjb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3Rib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICAgICAgY29uc3QgdG9kb3NlbGVjdGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2VsZWN0JylcclxuICAgICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICBjb25zdCBwcm9qZWN0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzZWxlY3QnKVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMobW9kdWxlLnByb2plY3RzKS5sZW5ndGggPT0gMCkge1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgaW5wdXRjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRjb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3Rib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICAgICAgY29uc3QgdG9kb3NlbGVjdGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2VsZWN0JylcclxuICAgIFxyXG4gICAgICAgIHByb2plY3Rib3guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgaW5wdXRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgICAgdG9kb3NlbGVjdGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcclxuICAgIFxyXG4gICAgdG9kb3NlbGVjdGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2ViZycpIFxyXG4gICAgcHJvamVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcbiAgICB0b2Rvc2VsZWN0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dob3N0JylcclxuICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZSB7ICAgXHJcbiAgICAgICAgdG9kb3NlbGVjdGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdG9kb3NlbGVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgdG9kb3NlbGVjdGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdnaG9zdCcpICBcclxuICAgICAgICBwcm9qZWN0YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZWJnJykgXHJcbiAgICAgICAgcHJvamVjdGJveC5jbGFzc0xpc3QuYWRkKCdoaWRlJykgXHJcbiAgICAgICAgaW5wdXRjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy9tb2RhbCBsb2dpYyB0byBiZSB1c2VkIHdpdGggcGx1cyBidXR0b24gXHJcbiAgICBcclxuICAgICBleHBvcnQgZnVuY3Rpb24gIG1vZGFsTG9naWMgKCkge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1vZGFsd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcclxuICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgIC8vIHdlIG1lZWQgYSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB3ZSBhcmUgb3BlbmluZyB0aGUgbW9kYWxcclxuICAgIC8vIGluIG90aGVyIHdvcmRzIGlmIHRoZSBwcm9qZWN0cyBvYmplY3QgaXMgZW1wdHlcclxuICAgICAgICAvLyB0aGVuIGdyZXkgb3V0IHRoZSB0by1kbyBzZWN0aW9uIGluaXRpYWxseVxyXG5cclxuXHJcbnJvYXN0KClcclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0byBzaG93IGFuZCBoaWRlIG1vZGFsIGJ5IHRvZ2dsaW5nIGEgY2xhc3MgdG8gYmUgY2FsbGVkIGluIG90aGVyIGZ1bmN0aW9uc1xyXG5cclxuICAgICAgICAvLyBmdW5jdGlvbiB0byB0b2dnbGUgd2hlbiBtb2RhbCBzaG93cyBvciBub3RcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU1vZGFsKCkge1xyXG4gICAgICAgICAgICBtb2RhbHdpbmRvdy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1vZGFsJylcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIGZ1bmN0aW9uIHRvIGNvbnNpZGVyIHdoZW4gd2luZG93IG91dHNpZGUgb2YgbW9kYWwgaXMgY2xpY2tlZCB0byBjbG9zZSBtb2RhbFxyXG4gICAgLy8gc2luY2UgbW9kYWx3aW5kb3cgaXMgdGhlIG1vZGFsIHNlbGVjdG9yIHdoaWNoIGlzIHRoZSBlbnRpcmUgYmFja2dyb3VuZFxyXG4gICAgLy8gYW55dGhpbmcgY2xpY2tlZCBpbiB0aGUgYmFja2dyb3VuZCB0aGF0IGlzIG5vdCB0aGUgbW9kYWwgY29udGVudCB3aWxsIGN1YXNlIHRoZSB3aW5kb3cgdG8gY2xvc2VcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHdpbmRvd09uQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWx3aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBtb2RhbHdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbGJhY2snKTtcclxuICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LW1vZGFsJylcclxuICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuY2xhc3NMaXN0LmFkZCgnYmlnaGlkZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHdpbmRvd09uQ2xpY2spO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBjYWxsIHByb2plY3QgYnV0dG9uIHN1Ym1pdCBsb2dpYyB3aGVuIG1vZGFsIGFjdGl2ZVxyXG4gICAgXHJcbiBcclxuICAgICAgICBwcm9qZWN0c3VibWl0bG9naWMoKVxyXG5cclxuXHJcbiAgICAgICAgLy8gY2FsbCBzdWJtaXR0b2RvIGZvcm0gbG9naWMgd2hlbiBtb2RhbCBhY3RpdmUgXHJcbiAgICAgICAgc3VibWl0TG9naWMoKVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gYmVsb3cgdG8gYWRkIGV2ZW50cyB0byBzdWJtaXRpbnB1dHMgYXQgYWxsIHRpbWVzLCBhbmQgZGVjaWRlIHdoYXQgaGFwcGVuc1xyXG4vLyB3aGVuIHN1Ym1pdCBpcyBjbGlja2VkIVxyXG4vLyBlbnN1cmUgZmllbGRzIGdvIHJlZCB3aGVuIGJhZCBkYXRhIGFuZCB0aGF0IHN1Ym1pdCB3b24ndCB3b3JrIHdpdGggYmFkIGRhdGEhIChpdW4gYmVsb3cgZnVuY3Rpb24pXHJcbiAgICBcclxuXHJcbnZhciB0b2RvdGl0bGUgPSBcIlwiXHJcbnZhciB0b2RvZGVzY3JpcHRpb24gPSBcIlwiXHJcblxyXG52YXIgdG9kb2R1ZWRhdGUgPSBcIlwiXHJcblxyXG4gaW1wb3J0KCdkYXRlLWZucycpXHJcbi50aGVuKChvKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gby5mb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKVxyXG4gICAgdG9kb2R1ZWRhdGUgPSBkYXRlXHJcbn0pXHJcblxyXG52YXIgdG9kb3ByaW9yaXR5ID0gXCJcIlxyXG52YXIgdG9kb3Byb2plY3QgPSBcIlwiXHJcbnZhciB0b2RvY29tcGxldGVkID0gXCJcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50c3RvU3VibWl0SW5wdXRzKCkge1xyXG5cclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICAgIGNvbnN0IHN1Ym1pdHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJylcclxuICAgIGNvbnN0IHN1Ym1pdGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJylcclxuICAgIGNvbnN0IHN1Ym1pdHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcclxuICAgIGNvbnN0IHN1Ym1pdGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wbGV0ZWQnKVxyXG4gICAgY29uc3Qgc3VibWl0ZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJylcclxuICAgIGNvbnN0IHN1Ym1pdHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRwcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdG9wdGlvbnMnKVxyXG4gICBcclxuXHJcbi8vIHRoaXMgc2V0cyB0b2RvIHByb2plY3QgdG8gd2hhdHMgaXMgc2VsZWN0ZWQgYnkgZGVmYXVsdCBzbyB3ZSBnZXQgc29tZXRoaW5nXHJcblxyXG4gIFxyXG50b2RvcHJvamVjdCA9IHNlbGVjdGVkcHJvai52YWx1ZVxyXG5cclxuXHJcbiAgICBzdWJtaXR0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICB0b2RvdGl0bGUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG90aXRsZSlcclxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgY29uc3Qgc3VibWl0dG9kb2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRidXR0b24nKVxyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSBcIlwiIHx8IGNoZWNrVGV4dChlLnRhcmdldC52YWx1ZSkgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgc3VibWl0dGl0bGUuY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICAgICAgIHN1Ym1pdHRvZG9idXR0b24uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlICE9IFwiXCIgJiYgY2hlY2tUZXh0KGUudGFyZ2V0LnZhbHVlKSA9PSB0cnVlKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgc3VibWl0dG9kb2J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHN1Ym1pdHRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZGJhY2snKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSlcclxuICAgIHN1Ym1pdGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICB0b2RvZGVzY3JpcHRpb24gPSBlLnRhcmdldC52YWx1ZVxyXG4gICBcclxuICAgICB9KVxyXG5cclxuICAgICBzdWJtaXRjb21wbGV0ZWQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIHRvZG9jb21wbGV0ZWQgPSBlLnRhcmdldC5jaGVja2VkXHJcblxyXG4gICAgIH0pXHJcbiAgICAgXHJcbiAgICAgc3VibWl0ZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG5cclxuICAgICAgICB0b2RvZHVlZGF0ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBcclxuXHJcbiAgICAgICBcclxuICAgICB9KVxyXG5cclxuICAgICBzdWJtaXRwcm9qZWN0LmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgXHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7ICAgICAgICAgIH1cclxuICAgICAgICAgICBlbHNlIHsgdG9kb3Byb2plY3QgPSBlLnRhcmdldC52YWx1ZVxyXG4gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgfSlcclxuICBcclxuICAgICBcclxuICAgICBzdWJtaXRwcmlvcml0eS5mb3JFYWNoKGVsZW0gPT4ge1xyXG5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgIHRvZG9wcmlvcml0eSA9IGUudGFyZ2V0LmlkXHJcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbihcclxuXHJcbiAgICApXHJcbiAgICBjb25zb2xlLmxvZyh0b2RvcHJpb3JpdHkpXHJcbiAgICBcclxuIH0pXHJcbiAgICAgfSlcclxuXHJcbn1cclxuXHJcblxyXG5cclxuICAgIC8vICAgIC8vc3VibWl0IGJ1dHRvbiBsb2dpbiBpbiBtb2RhbCB3aW5kb3cgZm9yIHRvZG9cclxuICAgICAgIC8vIHdhbnQgdG8gdXNlIHRoZSBidXR0b24gdG8gc3VibWl0IGFuc3dlcnMgdG8gYXBwcm9wcmlhdGUgbW9kdWxlXHJcbiAgICAgICAvLyB0aGVuIHJlc2V0IHRoZSBpbnB1dHMgdG8gbm90aGluZyBpbiB0aGVtIGZvciB0aGUgbmV4dCBhZGRpdGlvblxyXG4gICAgICAgXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdExvZ2ljKCkge1xyXG5cclxuXHJcbiAgICAgXHJcbiAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0YnV0dG9uJylcclxuICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgKGZ1bmN0aW9uIHNlZSgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbi8vIHRoaXMgdG9kbyBieSBkZWZhdWx0IGlzIGFkZGVkIHRvIGEgcHJvamVjdCB1bmRlciBjdXN0b20gcHJvamVjdHMsXHJcblxyXG5cclxuICAgICAgICB9KSgpXHJcbiAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuXHJcbi8vIG9uIHN1Ym1pdCBvZiB0b2RvLCB3YW50IHRvIHJlIHVwZGF0ZSB0aGUgYWxsIGFycmF5IVxyXG5cclxuXHJcblxyXG5cclxuICAgLy8gZnVuY3Rpb24gdG8gYWRkIHRvIHRvZG8gb2JqZWN0cyBsaXN0XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgLy8gcnVuIGZvcm0gY29udHJvbGxlciB3aGVuIHdlIGNsaWNrIHN1Ym1pdCB3aGljaCBnZXRzIHRoZSByZWxldmVudCBpbnB1dHMgYW5kIHJ1bnMgdG9kbyBtYWtlclxyXG4gICAgICAgICAvLyB0aGUgaW5wdXRzIHdlIG5lZWQgdG8gdXNlIGNvbWUgZnJvbSB0aGUgYWRkc3VibWl0aW5wdXRzZnVuY3Rpb24hXHJcbiAgICAgICAgIC8vIHdlIHdpbGwgd3JpdGUgdG8gZ2xvYmFsIHZhcmlhYmxlc2RcclxuXHJcblxyXG4gICAgICAgICAvLyBjaGVjayBpZiBpbnB1dHMgYXJlIGVtcHR5IVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRvZG9wcmlvcml0eSA9PSBcIlwiKSB7dG9kb3ByaW9yaXR5ID0gXCJwcmlvcml0eS1sb3dcIn1cclxuXHJcbiAgICAgICAgIC8vIGlmIGlucHV0cyBhcmUgZ29vZCwgcnVuIHRvZG8gZnVuY3Rpb25cclxuICAgICAgICAgZm9ybVN1Ym1pdCh0b2RvdGl0bGUsIHRvZG9kZXNjcmlwdGlvbiwgdG9kb2R1ZWRhdGUsIHRvZG9wcmlvcml0eSwgdG9kb3Byb2plY3QsIHRvZG9jb21wbGV0ZWQpXHJcblxyXG4gICAgICAgXHJcbi8vIHNldCBjb21wbGV0ZWQgYmFjayB0byBmYWxzZSFcclxudG9kb2NvbXBsZXRlZCA9IGZhbHNlXHJcblxyXG4gICAvLyByZXNldCB0b2R1ZWRhdGVcclxuXHJcbiAgIGltcG9ydCgnZGF0ZS1mbnMnKVxyXG4gICAudGhlbigoZGF0ZSkgPT4ge1xyXG4gIHRvZG9kdWVkYXRlID0gZGF0ZS5mb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKVxyXG4gICB9KVxyXG4gICAgICAgICAgIFxyXG4gICAvLyByZW1vdmUgdGhlIG1vZGFsIGFmdGVyIGNyZWF0aW5nIG91ciB0b2RvLCBhbmQgcmVzZXQgdGhlIGlucHV0cyBiYWNrIHRvIHRoZWlyIGRlZmF1bHRzXHJcbiAgIFxyXG4gICAgICAgICAgIHRvZ2dsZU1vZGFsKClcclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICBcclxuICAgXHJcbiAgIC8vIHdlIGFsc28gd2FudCB0byBlbnN1cmUgb3VyIGlucHV0cyBhcmUgdHJ1dGh5XHJcbiAgIC8vIG9ubHkgd2FudCB0byByZXF1aXJlIHRpdGxlLCBkZXNjcmlwdGlvbiBkYXRlIGFuZCBwcm9qZWN0IGFuZCBjb21wbGV0ZVxyXG4gICBcclxuICAgXHJcbiAgICAgICAgICAgLy8gcmVuZGVyIHRoZSBkb20gYWZ0ZXIgYWxsIHRoaXMsIHdoaWNoIHdpbGwgdXBkYXRlIGFsbCBlbGVtZW50c1xyXG4gICBcclxuICAgICAgICAgICBpbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4gICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgLy8gYWZ0ZXIgZG9tIGlzIHJlbmRlcmVkLCBzZWxlY3QgdGhlIGFsbCBwcm9qZWN0cyB0aXRsZSBhbmQgbWFrZSBpdCByZWQgYXMgaXQgaXMgbm93IHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgIG8udXBkYXRlZm9yaGlnaCgnYWxsJylcclxuICAgICAgICAgICAgICAgLy8gdXBkYXRlIGN1cnJlbnQgcHJvamVjdHMgc2xlY3Rpb24gdG8gYWxsIVxyXG4gICAgICAgICAgICAgICBjdXJyZW50c2VsZWN0ZWRwcm9qZWN0ID0gJ2FsbCdcclxuICAgICAgICAgICAgICAgby5wb3B1bGF0ZURpc3BsYXkoJ2FsbCcpXHJcbiAgICAgICAgICAgfSlcclxuICAgXHJcbiAgICAgICAgaW1wb3J0KCcuL2J1dHRvbmxvZ2ljLmpzJylcclxuICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIG9iai5hZGRCdXR0b25Mb2dpYygpXHJcbiAgICAgICAgICAgIG9iai5tb2RhbExvZ2ljKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gYWZ0ZXIgZG9tIGlzIHJlbmRlcmVkLCBzZWxlY3QgdGhlIHByb2plY3QgdGhhdCB3ZSBqdXN0IHN1Ym1pdHRlZFxyXG4gICAgICAgICAgICAgICAgby51cGRhdGVmb3JoaWdoKCdhbGwnKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBpbnB1dCB0byB1cGRhdGUgZGlzcGxheSBpZiB0b2RvIGJlbG9uZ3MgdG8gZGlmZmVyZW50IHByb2plY3RcclxuICAgICAgICBcclxuICAgICAgIH0pXHJcbiAgICAgICByZXNldElucHV0cygpXHJcblxyXG4vLyBzdWJtaXQgdGhlIGlucHV0IG9mIGNvbXBsZXRlZCBiYWNrIHRvIG5vdCBjaGVja2VkXHJcblxyXG5cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAvLyBpbml0aWFsIHN1Ym1pdCBidXR0b24gcHJvamVjdCBsb2dpYyFcclxuICAgICAgZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxwcm9qKCkge1xyXG4gICAgXHJcbmNvbnN0IHByb2p0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0dGl0bGUnKVxyXG5pZiAocHJvanRpdGxlLnZhbHVlID09IFwiXCIgfHwgY2hlY2tUZXh0KHByb2p0aXRsZS52YWx1ZSkgKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHN1Ym1pdCcpLmRpc2FibGVkID0gdHJ1ZVxyXG5cclxufVxyXG4gICAgICB9XHJcblxyXG4gICAgICBleHBvcnQgZnVuY3Rpb24gaW5pdGlhbHRvZG9zdWJtaXQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZCcpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWRiYWNrJykpIHtlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZGJhY2snKX1cclxuICAgICAgICB9KVxyXG5jb25zdCBzdWJtaXRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0YnV0dG9uJylcclxuaWYgKHN1Ym1pdGJ1dHRvbi52YWx1ZSA9PSBcIlwiIHx8IGNoZWNrVGV4dChzdWJtaXRidXR0b24udmFsdWUpICkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdGJ1dHRvbicpLmRpc2FibGVkID0gdHJ1ZVxyXG5cclxufVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgZnVuY3Rpb24gY2hlY2tkZWZhdWx0KHN0cikge1xyXG4gICAgICAgIGxldCB0ZXN0ID0gL14oYWxsfHRvZGF5fHRoaXN3ZWVrKSQvbWlcclxuICAgICAgICByZXR1cm4gdGVzdC50ZXN0KHN0cilcclxuICAgIH0gICBcclxuICAgICAgXHJcbiAvL3N1Ym1pdCBidXR0b24gbG9naW4gaW4gbW9kYWwgd2luZG93IGZvciBwcm9qZWN0XHJcbiAgICAgIC8vIHdhbnQgdG8gdXNlIHRoZSBidXR0b24gdG8gc3VibWl0IGFuc3dlcnMgdG8gYXBwcm9wcmlhdGUgbW9kdWxlXHJcbiAgICAgIC8vIHRoZW4gcmVzZXQgdGhlIGlucHV0cyB0byBub3RoaW5nIGluIHRoZW0gZm9yIHRoZSBuZXh0IGFkZGl0aW9uXHJcbiBsZXQgc3VibWl0ID0gXCJcIlxyXG4gICAgZnVuY3Rpb24gcHJvamVjdHN1Ym1pdGxvZ2ljKCkge1xyXG5cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHByb2plY3RzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHN1Ym1pdCcpXHJcbiAgICAgIGNvbnN0IHByb2plY3R0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0dGl0bGUnKVxyXG5sZXQgcHJvamVjdHRpdGxlY2hvaWNlID0gXCJcIlxyXG4gICAgICAvLyBldmVudCBsaXN0ZW5lciBvbiBwcm9qZWN0IHRpdGxlIHRvIGNhcHR1cmUgY3VycmVudCBpbnB1dFxyXG4gICAgICBwcm9qZWN0dGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgXHJcblxyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICBwcm9qZWN0dGl0bGVjaG9pY2UgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgXHJcblxyXG4gICAgICBcclxuXHJcblxyXG4gICAgICAgIC8vIGlmIHByb2plY3QgdGl0bGUgaXMgbm90IHRydXRoeSwgYWRkIHJlZCBiYWNrZ3JvdW5kXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09IFwiXCIgfHwgY2hlY2tUZXh0KGUudGFyZ2V0LnZhbHVlKSA9PSBmYWxzZSB8fCAgY2hlY2tkZWZhdWx0KGUudGFyZ2V0LnZhbHVlKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBwcm9qZWN0c3VibWl0LmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJylcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIGlmIGl0IGlzIHRydXRoeSwgcmVtb3ZlIHRoZSBiYWNrZ3JvdW5kXHJcbiAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQudmFsdWUgIT0gXCJcIiAmJiBjaGVja1RleHQoZS50YXJnZXQudmFsdWUpID09IHRydWUpIHtcclxuICAgICAgICAgICAgcHJvamVjdHN1Ym1pdC5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgICBzdWJtaXQgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgfSlcclxuICAgICBcclxuICAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgd2hlbiBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWVkIFxyXG5cclxuICAgICAgcHJvamVjdHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSwgc3VibWl0KSA9PiB7XHJcblxyXG4vLyBPTiBTVUJNSVQgT0YgUFJPSkVDVCwgRE8gTk9USElORyBUTyBERUZBVUxUIEFSUkFZXHJcblxyXG5cclxuLy9cclxuXHJcbiAgIFxyXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSBcIlwiXHJcbiAgICAgICAgY29uc3QgcHJvanRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3R0aXRsZScpXHJcblxyXG5cclxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgICAgLy8gd2hlbiB3ZSBjbGljayB0aGUgc3VibWl0IGJ1dHRvbiwgY2hlY2sgdGhlIHRleHQgcmVjZWl2ZWRcclxuICAgICAgIC8vIGlmIGl0IGlzIGEgdHJ1dGh5IGlucHV0IChub3QgYmxhbmsgYW5kIHBhc3NlcyBjaGVjaykgcnVuIGlmIGJsb2NrXHJcbiAgICAgICAvLyBpZiBpdCBpcyBub3QgdHJ1dGh5IHJ1biB0aGUgZWxzZSBibG9ja1xyXG5cclxuICAgICAgICAgIGlmIChjaGVja1RleHQocHJvamVjdHRpdGxlLnZhbHVlKSA9PSB0cnVlICYmIHByb2plY3R0aXRsZS52YWx1ZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBcclxubGV0IHZhbHVlID0gcHJvamVjdHRpdGxlLnZhbHVlXHJcblxyXG4gIFxyXG4gIC8vIGNhbGwgdGhlIHByb2plY3QgY29uc3RydWN0b3IhXHJcbiAgXHJcbiAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgLnRoZW4oKG9iaikgPT4ge1xyXG5cclxuXHJcbiAgICAgIC8vIGFkZCBwcm9qZWN0IHRvIHRoZSBsaXN0XHJcbiAgICAvLyBlbnN1cmUgbmFtZSBkb2Vzbid0IGV4aXN0XHJcblxyXG4gICAgICBpZiAob2JqLmFkZFByb2plY3QodmFsdWUpID09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0ZXhpc3RzISBjaG9vc2UgYW5vdGhlcicpXHJcbiAgICAgICAgYWxlcnQoJ3Byb2plY3RleGlzdHMhIGNob29zZSBhbm90aGVyJylcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRjb250YWluZXInKVxyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxyXG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpXHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnLnNob3ctbW9kYWwnKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gIFxyXG4gICAgICAvLyBpZiBwcm9qZWN0IHRpdGxlIGlzIGJsYW5rLCB0aHJvdyBhbiBhbGVydCBhbmQgcmUgaW5wdXQgdGhlIGRhdGFcclxuXHJcbiAgICAgXHJcbiAgICAgICAvLyBzZXQgcHJvamVjdCB0aXRsZSBlcXVhbCB0byBub3RoaW5nIGFnYWluIFxyXG4gICAgICAgcmVzZXRJbnB1dHMoKSBcclxuICBcclxuICAgICAgIC8vIGNsZWFyIHRoZSBtb2RhbFxyXG4gIFxyXG5cclxuICBcclxuICAgICAgLy91cGRhdGUgdGhlIGRvbVxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIFxyXG5cclxuXHJcbiAgICAgIHRvZ2dsZU1vZGFsKClcclxuICAgICAgLy9hZGQgZXZlbnQgbGlzdGVuZXJzIGFmdGVyIHVwZGF0aW5nIGRvbSBcclxuXHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW1wb3J0KCcuL2RvbUxvZ2ljJylcclxuICAgIC50aGVuKChvKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIHBvcHVsYXRlIHRoZSBkaXNwbGF5IHdpdGggdGhlIHZhbHVlIG9mIHRoZSBwcm9qZWN0IHdlIGNyZWF0ZWQhXHJcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgIG8ucG9wdWxhdGVEaXNwbGF5KHZhbHVlKVxyXG4gICAgIFxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZWxlbS5kYXRhc2V0LnRpdGxlID09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBcclxuICAgIH0pXHJcbiAgfSkgXHJcbiAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGZpcnN0IGxvZyB0aGF0IGl0IGlzIG5vdCB0cnV0aHkgYW5kIGFkZCBhIHJlZCBiYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgdHJ1dGh5IGFkZCByZWQnKVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGFkZCByZWQgdG8gYmFjayBvZiBwcm9qZWN0IHRpdGxlXHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0dGl0bGUuY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocHJvamVjdHRpdGxlLnZhbHVlID09IFwiXCIgfHwgY2hlY2tUZXh0KHByb2plY3R0aXRsZS52YWx1ZSkgPT0gZmFsc2UpIHsgYWxlcnQoJ1BsZWFzZSBFbnRlciBhIFZhbGlkIFByb2plY3QgTmFtZScpXHJcbiAgICAgICAgICAgIHByb2plY3RzdWJtaXQuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhlbiBydW4gdGhlIHByb2plY3RpbnB1dCBmdW5jdGlvbiB0byBsaXN0ZW4gdG8gdGhlIGlucHV0IGFuZCBhZGp1c3QgdGhlIHJlZCBiYWNrZ3JvdW5kIGFjY29yZGluZ2x5XHJcblxyXG4gICAgICAgICAgICAgIGFkZFByb2plY3RJbnB1dFJlZChwcm9qZWN0dGl0bGUpXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoYXQgdG9kbyBzY3JlZW4gZG9lcyBub3QgY29tZSBiYWNrIHVwXHJcbiAgICAgICAgICAgICAgLy8gaWYgdG9kbyBzY3JlZW4gY29udGFpbnMgaGlkZSwgbGVhdmUgaXQgYWxvbmUsIGVsc2VcclxuICAgICAgICAgIGltcG9ydCgnLi9kb21Mb2dpYy5qcycpXHJcbiAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gIFxyXG4gICAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgXHJcbiAgLy8gYWRkIHZhbHVlIG9mIHRpdGxlIGZpZWxkIHRvIHByb2plY3RzIG9iamVjdFxyXG4gICAgXHJcblxyXG4gIFxyXG4gIGltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbiAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgby5hZGRCdXR0b25Mb2dpYygpXHJcbiAgICAgIG8ubW9kYWxMb2dpYygpXHJcbiAgfSlcclxuICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvblxyXG5cclxuXHJcbi8vIG5lYXIgdGhlIGVuZCBvZiB0aGUgZXZlbnQgd2Ugd2lsbCBydW4gcmVtb3ZlIHJlZCwgYW5kIGFmdGVyIGl0IHJlIGFwcGx5IHJlZCBiYXNlZCBvbiBzZWxlY3Rpb25cclxuaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuLnRoZW4oKG8pID0+IHtcclxuICAgIG8ucmVtb3ZlUmVkKClcclxuXHJcbiAgICBcclxuICAgIHJlc2V0SW5wdXRzKClcclxuICAgIG1vZGFsTG9naWMoKVxyXG5cclxuICAgIC8vIGFmdGVyIHJlbmRlciBjdXN0b20gcHJvamVjdHMgd2Ugd2lsbCBhZGp1c3RzIGhpZ2hsaWdodFxyXG5vLnJlbmRlckN1c3RvbVByb2plY3RzKHByb2plY3R0aXRsZWNob2ljZSlcclxuaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbi50aGVuKChvKSA9PiB7XHJcbiAgXHJcblxyXG59KVxyXG5cclxufSlcclxuXHJcblxyXG4gIFxyXG4gICAgICB9KVxyXG4gICAgICBcclxuXHJcblxyXG4gIH1cclxuICAgICAgXHJcblxyXG5cclxuXHJcbi8vIGFkZCB0aGUgZHluYW1pYyBiYWNrZ3JvdW5kIHRvIGlucHV0cywgcnVuIHRoaXMgaW4gcGx1cyBidXR0b24gbW9kYWwgZnVuY3Rpb24gXHJcbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0SW5wdXRSZWQocHJvamVjdHRpdGxlKSB7XHJcbiAgIFxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICBcclxuICAgICAgXHJcbiAgICAgICAgLy8gYWRkIGEgbGlzdGVuZXIgb24gaXQgdHJpZ2dlcmVkIGJ5IGFueSBpbnB1dCB0byBsaXN0ZW4gZm9yIGlucHV0XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvamVjdHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAvLyBpZiBpbnB1dCByZW1haW5zIGJsYW5rIGFuZCBkb2VzIG5vdCBzYXRpc2Z5IHJlZ2V4LCBjb250aW51ZSB0byBrZWVwIGJhY2tncm91bmQgcmVkXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSBcIlwiIHx8IGNoZWNrVGV4dChlLnRhcmdldC52YWx1ZSkgPT0gZmFsc2UpIHsgICAgIFxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnYWRkIHJlZGJhY2snKX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuLy8gaWYgaW5wdXQgaXMgbm90IGJsYW5rIGFuZCBwYXNzZXMgcmVnZXgsIHJlbW92ZSB0aGUgcmVkIGJhY2tncm91bmRcclxuXHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGNoZWNrVGV4dChlLnRhcmdldC52YWx1ZSkgPT0gdHJ1ZSAmJiBlLnRhcmdldC52YWx1ZSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RydXRoeSBpbnB1dCcpXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZGJhY2snKVxyXG4gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHJ1biB0aGlzIHdpdGggZmlyc3Qgc3VibWl0IGFuZCB0aGVuIGJlIGR5bmFtaWNcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4vLyByZWdleCBmb3IgaW5wdXRzIFxyXG5cclxuICAgIFxyXG5mdW5jdGlvbiBjaGVja1RleHQoc3RyKSB7XHJcbiAgICBsZXQgdGVzdDEgPSAvXlteXFxzXSpbXFx3IXxcXHNdKyQvZ2lcclxuXHJcbiAgIHJldHVybiB0ZXN0MS50ZXN0KHN0cilcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcblxyXG4gICBcclxuLy8gZnVuY3Rpb24gdG8gcmVzZXQgdG8gZGVmYXVsdCB0b2RvIGRpc3BsYXkgXHJcblxyXG5mdW5jdGlvbiByZXNldFRvZG8oKSB7XHJcblxyXG4gICAgXHJcbiAgICAgICAgLy8gcmVzZXQgbW9kYWwgd2luZG93IHRvIGNyZWF0ZSB0b2RvIGJ5IGRlZmF1bHRcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb2J1dHRvbnNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2VsZWN0JylcclxuICAgICAgICBjb25zdCBwcm9qZWN0YnV0dG9uc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzZWxlY3QnKVxyXG4gICAgICAgIGNvbnN0IHRvZG9pbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRjb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICAgICAgY29uc3QgbW9kYWx3aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAvLyByZW1vdmUgdGhlIG1vZGFsIHdpbmRvd1xyXG4gICAgICAgICAgIG1vZGFsd2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbW9kYWwnKVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICBwcm9qZWN0aW5wdXRzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgICAgIHRvZG9pbnB1dHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgcHJvamVjdGJ1dHRvbnNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgICAgdG9kb2J1dHRvbnNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiAgICAvL2xvZ2ljIGJlbG93IHRvIHN3aXRjaCBiZXR3ZWVuIGNyZWF0aW9uIG9mIHRvZG8gb3IgYSBwcm9qZWN0XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hDcmVhdGlvbigpIHtcclxuICAgIGNvbnN0IHRvZG9idXR0b25zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NlbGVjdCcpXHJcbiAgICBjb25zdCBwcm9qZWN0YnV0dG9uc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzZWxlY3QnKVxyXG4gICAgY29uc3QgdG9kb2lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dGNvbnRhaW5lcicpXHJcbiAgICBjb25zdCBwcm9qZWN0aW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxyXG4gICAgXHJcbiAgICB0b2RvYnV0dG9uc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZWJnJylcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2ViZyhlKSB7XHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlYmcnKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgdG9kb2J1dHRvbnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHByb2plY3RidXR0b25zZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlYmcnKVxyXG4gICAgICAgIHByb2plY3RpbnB1dHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgICAgdG9kb2J1dHRvbnNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgdG9kb2lucHV0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICBwcm9qZWN0YnV0dG9uc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgIC8vIHJ1biBmdW5jdGlvbiB3aGVuIHN3aXRjaGVkIHRvIGdyZXkgb3V0IHByb2plY3Qgc3VibWl0IVxyXG4gICAgaW5pdGlhbHByb2ooKVxyXG4gICAgICAgIHByb2plY3RidXR0b25zZWxlY3QuY2xhc3NMaXN0LmFkZCgnY2hhbmdlYmcnKVxyXG4gICAgICAgIHByb2plY3RpbnB1dHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgdG9kb2J1dHRvbnNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2ViZycpXHJcbiAgICAgICAgdG9kb2lucHV0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIFxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiAgICBcclxuICAgICAgIC8vIGxvZ2ljIHRvIGRlbGV0ZSBwcm9qZWN0cyBmcm9tIHRoZSBtYXN0ZXIgb2JqZWN0LCBhbmQgdGhlbiByZWZyZXNoIHRoZSBhcnJheSBhbmQgdGhlIGRvbXJlbmRlclxyXG5cclxuICAgICAgIGV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0cygpIHtcclxuICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMob2JqLnByb2plY3RzKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlbHNlIHsgY29uc3QgZGVsZXRlcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVwcm9qZWN0YnV0dG9uJylcclxuICAgICBcclxuICAgICAgICAgICAgZGVsZXRlcHJvamVjdC5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpZ3VyZSBvdXQgd2hpY2ggYnV0dG9uIHdhcyBjbGlja2VkIGFuZCBmaW5kIGFwcHJvcHJpYXRlIHByb2plY3QgdGl0bGVcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlID0gZS50YXJnZXQuZGF0YXNldC50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3YW50IHRvIHJlbW92ZSB0aGUgYWNjb3JkaW5nIGRpdiB3aXRoIGNsYXNzIHByb2plY3RidXR0b25zIGFuZCBkYXRhPXRpdGxlIGVxdWFsIHRvIGFib3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2lsbCBoYW5kbGUgdGhpcyB3aXRoIGEgZnVuY3Rpb24gaW4gdGhlIGRvbSBsb2dpYyBtb2R1bGVcclxuICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGFsc28gbmVlZCB0byByZW1vdmUgdGhlIHByb2plY3QgZnJvbSB0aGUgY3VzdG9tIHByb2plY3RzIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBmdW5jdGlvbiBmb3IgdGhpcyB3aXRoaW4gcHJvamVjdCBtYWtlciBtb2R1bGVcclxuICAgICBcclxuICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gcGFzcyB0aGUgYXJndW1lbnQgb2YgdGhlIGFwcHJvcHJpYXRlIGtleSBhYm92ZSBcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICBvYmoucmVtb3ZlUHJvamVjdChyZW1vdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuL2J1dHRvbmxvZ2ljLmpzJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigobykgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAge28uYWRkQnV0dG9uTG9naWMoKVxyXG4gICAgICAgICAgICAgICAgICBvLm1vZGFsTG9naWMoKX0pXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gY2FsbCByZW5kZXIgY3VzdG9tIHByb2plY3RzIHNpbmNlIHdlIGhhdmUgdXBhdGVkIHRoZSBhcnJheSB0aGF0IGl0IHRha2VzIGFzIGFuIGFyZ3VtZW50XHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgZnVuY3Rpb24gaXRzZWxmIHVwZGF0ZXMgdGhlIGFycmF5IHRvIGJlIHJlbmRlcmVkIGJhc2VkIG9uIHRoZSBjdXJyZW50IG1hc3RlciBwcm9qZWN0IG9iamVjdFxyXG4gICAgICAgICAgICAgICAgcm9hc3QoKVxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL2RvbUxvZ2ljLmpzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChvYmopID0+IHszXHJcbiAgICAgICAgICAgICAgICBvYmoucmVuZGVyKCl9KVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gYWZ0ZXIgd2UgY2xpY2sgb24gZGVsZXRlIGNhbGwgcm9hc3QgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHRvZG8gY29udGVudCBzaG91bGQgYmUgaW52aXNpYmxlXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgXHJcbiAgICAgXHJcblxyXG4gICAgICAgICAgICB9KX1cclxuICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gcHJvamVjdCBkZWxldGUgYnV0dG9uIGxvZ2ljXHJcbiAgICBcclxuICAgICAgICBmdW5jdGlvbiBkZWxldGVCdXR0b25Db2xvcnMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlcHJvamVjdGJ1dHRvbicpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWxldGVidXR0b25zLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LnRpdGxlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkZXRlcm1pbmUgd2hpY2ggZGVsdGUgYnV0dG9uIGhhcyBiZWVuIGhvdmVyZWRcclxuICAgICAgICAgICAgICAgICAgICAvLyBub3cgd2Ugd2FudCB0byBjaGFuZ2UgdGhlIGJhY2tncm91bmQgb2YgdGhlIGNvcnJlc3BvbmRpbmcgZGl2XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RpdHRsZXMgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RidXR0b25zJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGl0dGxlcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmRhdGFzZXQudGl0bGUgPT0gZS50YXJnZXQuZGF0YXNldC50aXRsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge2VsZW0uY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdGl0dGxlcyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdGJ1dHRvbnMnKVxyXG4gICAgICAgICAgICAgICAgcHJvamVjdGl0dGxlcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uZGF0YXNldC50aXRsZSA9PSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHtlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZGJhY2snKX1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuLy9mdW5jdGlvbiBoZXJlIHRvIGFkZCBldmVudCBsaXN0ZW5lcnMgdG8gcHJvZHVjdCBidXR0b25zIHRvIHVwZGF0ZSB0b2RvIGRpc3BsYXlcclxuLy93ZSB3aWxsIGhhdmUgYSBmdW5jdGlvbiB3aGVuIGNsaWNrZWQgdG8gdXBkYXRlIHRoZW0gYWNjb3JkaW5nbHlcclxuLy9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0VGl0bGVFdmVudHMxKCkge1xyXG5jb25zdCB0b2RvZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvY29udGVudCcpXHJcblxyXG4vLyB3aGVuIHdlIGNsaWNrIGFsbCwgbG9vcCB0aHJvdWdoIGFycmF5IGFsbCBhbmQgZGlzcGxheSB0aGUgY29udGVudHMhXHJcblxyXG5jb25zdCBhbGx0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGwnKVxyXG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpXHJcbmNvbnN0IHRoaXN3ZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoaXN3ZWVrJylcclxuXHJcblxyXG5cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gYmVsb3cgYWRkcyBjbGljayBldmVudHMgdG8gZGVmYXVsdCBwcm9qZWN0IGJ1dHRvbnNcclxuaW1wb3J0IHtwb3B1bGF0ZURpc3BsYXksIHJlbW92ZVJlZH0gZnJvbSAnLi9kb21Mb2dpYy5qcydcclxuaW1wb3J0IHsgZm9ybUNvbnRyb2xsZXIgfSBmcm9tICcuL2Zvcm1sb2dpYy5qcydcclxuaW1wb3J0IHsgZWwsIHRyIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJ1xyXG5pbXBvcnQgeyBzdWIgfSBmcm9tICdkYXRlLWZucydcclxubGV0IHByb25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdG5hbWV0YWcnKVxyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEJ1dHRvbkxvZ2ljKCkge1xyXG5cclxuXHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlZmF1bHRwcm9qZWN0JylcclxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgICAgIC50aGVuKChvYmopID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHRoZSB2YWx1ZSBvZiBkZWZhdWx0IHByb2plY3RzIGFycmF5IHRvIGJsYW5rXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsIHdpbGwgbG9vcCB0aHJvdWdoIGN1c3RvbSBwcm9qZWN0cyBhbmQgYWRkLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZGF5IGFuZCB0aGlzIHdlZWsgd2lsbCBmaWx0ZXIgZnJvbSBhbGwhXHJcblxyXG4gICAgICAgICAgICAgICAgb2JqLmRlZmF1bHRwcm9qZWN0cy50b2RheSA9IFtdXHJcbiAgICAgICAgICAgICAgICBvYmouZGVmYXVsdHByb2plY3RzLmFsbCA9IFtdXHJcbiAgICAgICAgICAgICAgICBvYmouZGVmYXVsdHByb2plY3RzLnRoaXN3ZWVrID0gW11cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBwb3B1bGF0ZURpc3BsYXkoZS50YXJnZXQuaWQpXHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAvLyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIGUudGFyZ2V0LmlkLCB3ZSB3YW50IHRvIGNhbGwgdGhhdCBzcGVjaWZpYyBhcnJheVxyXG4gICAgICAgICAgICAvLyBhbmQgZmVlZCBpdCB0byBhIGRvbSBmdW5jdGlvbiB0aGF0IGxvb3BzIHRoZSBhcnJheSBhbmQgcG9wdWxhdGVzIHRoZSBkaXNwbGF5IVxyXG4gICAgICAgICAgICAvLyBhbGwgd2lsbCBiZSB0aGUgZGVmYXVsdCBhcnJcclxuICAgICAgICAgICAgLy8gd2UgdGhlbiB3YW50IHRvIHVwZGF0ZSB0aGUgdmFsdWUgb2YgdGhlIHByb2plY3QgdGhhdCBpcyBoaWdobGlnaHRlZCFcclxuICAgICAgICAgICBpbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4gICAgICAgICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgICBvLnJlbW92ZVJlZCgpXHJcblxyXG4gICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKVxyXG4gICAgICAgICAgICBwcm9uYW1lLnRleHRDb250ZW50ID0gJ0FsbCdcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuaWQgPT0gXCJ0b2RheVwiKXtcclxuICAgICAgICAgICAgcHJvbmFtZS50ZXh0Q29udGVudCA9ICdUb2RheSdcclxuICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdyZWRiYWNrJylcclxuICAgICAgICAgICAgcG9wdWxhdGVEaXNwbGF5KCd0b2RheScpXHJcbiAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuaWQgPT0gXCJ0aGlzd2Vla1wiKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKVxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJylcclxuXHJcbiAgICAgICAgICAgIHByb25hbWUudGV4dENvbnRlbnQgPSBcIlwiXHJcbiAgICAgICAgICAgIHByb25hbWUudGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJ1xyXG4gICAgICAgICAgICBwb3B1bGF0ZURpc3BsYXkoJ3RoaXN3ZWVrJylcclxuICAgICAgICB9XHJcblxyXG4gICBcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBcclxuIFxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbVByb2plY3RCdXR0b25Mb2dpYygpIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tcHJvamVjdHRpdGxlJylcclxuICAgICAgICBidXR0b25zLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgZS50YXJnZXQuaWQsIHdlIHdhbnQgdG8gY2FsbCB0aGF0IHNwZWNpZmljIGFycmF5XHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgZmVlZCBpdCB0byBhIGRvbSBmdW5jdGlvbiB0aGF0IGxvb3BzIHRoZSBhcnJheSBhbmQgcG9wdWxhdGVzIHRoZSBkaXNwbGF5IVxyXG4gICAgICAgICAgICAgICAgLy8gYWxsIHdpbGwgYmUgdGhlIGRlZmF1bHQgYXJyXHJcblxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBjbGlja2VkIHByb2plY3QsIGRpc3BsYXkgaXQgdW5kZXIgdG9kbyBsaXN0IVxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb25hbWUudGV4dENvbnRlbnQgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9uYW1lLnRleHRDb250ZW50ID0gZS50YXJnZXQuZGF0YXNldC50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvLnJlbW92ZVJlZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudHNlbGVjdGVkcHJvamVjdCA9IGUudGFyZ2V0LmRhdGFzZXQudGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBvLnBvcHVsYXRlRGlzcGxheShjdXJyZW50c2VsZWN0ZWRwcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coby5wcm9qZWN0cylcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbmZ1bmN0aW9uIHRvZG9zd2l0Y2hlcigpIHtcclxuICAgIGNvbnN0IHRvZG9kaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9jb250ZW50JylcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkdG9kb2lucHV0ZXZlbnRzKCkge1xyXG4gICAgXHJcbi8vIGFkZCBzZXBhcmF0ZSBldmVudHMgZm9yIGVhY2ggaW5wdXQgb3B0aW9uIVxyXG5cclxuICAgICAgICBcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gYWRkcyBldmVudCBsaXN0ZW5lciB0byBwbHVzIGJ1dHRvbiB0byBiZSBjYWxsZWQgd2hlbiBkb20gcmVuZGVyIHJ1bnNcclxuXHJcblxyXG4gICAgXHJcbiAgICAvLyBtYXN0ZXIgZnVuY3Rpb24gdG8gcnVuIGFsbCBmdW5jdGlvbnMgdGhhdCBhZGQgYnV0dG9uIGxvZ2ljIVxyXG4gICAgXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gYWRkQnV0dG9uTG9naWMoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcnVuIGxvZ2ljIGZvciBzd2l0Y2hpbmcgaW1hZ2Ugb24gcGx1cyBpY29uIG9uIGNsaWNrIFxyXG4gICAgcGx1c0J1dHRvbkltYWdlTG9naWMoKVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vbG9naWMgdG8gYWRkIGV2ZW50cyB0byBkZWZhdWx0IHByb2plY3QgYnV0dG9ucyBcclxuICAgIGRlZmF1bHRCdXR0b25Mb2dpYygpXHJcbiAgICBcclxuICAgIGN1c3RvbVByb2plY3RCdXR0b25Mb2dpYygpXHJcbiAgICAvL2xvZ2ljIHRvIGFkZCBldmVudHMgdG8gY3VzdG9tIHByb2plY3QgYnV0dG9ucyBcclxuICAgIGN1c3RvbUJ1dHRvbkxvZ2ljKClcclxuICAgXHJcbiAgICBcclxuICAgIC8vbG9naWMgdG8gYWRkIGV2ZW50cyB0byB0b2RvIGJ1dHRvbnMgXHJcbiAgICB0b2RvQnV0dG9uTG9naWMoKVxyXG4gICAgXHJcblxyXG4gICAgYWRkdG9kb2lucHV0ZXZlbnRzKClcclxuICAgIHN3aXRjaENyZWF0aW9uKClcclxuXHJcbiAgICBkZWxldGVQcm9qZWN0cygpXHJcbiAgICBcclxuICAgIGRlbGV0ZUJ1dHRvbkNvbG9ycygpIFxyXG4gICAgcHJvamVjdHN1Ym1pdGxvZ2ljKClcclxuICBcclxuICAgIGFkZEV2ZW50c3RvU3VibWl0SW5wdXRzKClcclxuICAgXHJcbiAgLy8gcGx1cyBidXR0b24gZnVuY3Rpb24gbG9naWNcclxuICBwbHVzYnV0dG9ubG9naWMoKVxyXG4gICAgICBcclxuLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHBsdXMgYnV0dG9uIG9uIHBhZ2VcclxuLy8gYWxzbyBjb250YWlucyBsb2dpYyB0byBhZGQgdG8gY2xvc2UgYnV0dG9uIG9uIG1vZGFsIG1vXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZWxvZ2ljKCkgeyAgICAgXHJcbiAgICAgICAgY29uc3QgY2xvc2VidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VidXR0b24nKVxyXG4gICAgLy8gYWRkIGFuIGV2ZW50IHRvIHJlZ2lzdGVyIHRoZSBjbG9zZSBidXR0b25cclxuICAgIC8vIHRoZSBjbG9zZSBidXR0b246XHJcbiAgICBjbG9zZWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgIHRvZ2dsZU1vZGFsKClcclxuXHJcbiAgICAgLy8gcmVzZXQgaXQgdG8gZGVmYXVsdCB0b2RvIGRpc3BsYXkgXHJcbiAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgIHJlc2V0VG9kbygpXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAvLyByZXNldCBpbnB1dCBvZiB0b2RvIHNjcmVlbiBhbmQgYWxsIG90aGVyIGlucHV0cyFcclxuICAgICByZXNldElucHV0cygpIFxyXG5cclxuICAgXHJcbiAgICAgLy8gcnVuIHJvYXN0LCBjaGVjayBpZiB0aGUgb2JqZWN0IGRvZXMgbm90IGV4aXN0IGFnYWluXHJcbiAgICAgcm9hc3QoKVxyXG5cclxuXHJcblxyXG4gfSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsdXNidXR0b25sb2dpYygpIHtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBwbHVzYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXNidXR0b24nKVxyXG4gICAgY29uc3QgY2xvc2VidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VidXR0b24nKVxyXG4gICAgcGx1c2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG5cclxuLy8gcmVtb3ZlIGFueSBleHBhbmRlZCB0b2RvJ3NcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvY29udGVudCcpLmZvckVhY2goKGVsZW0pID0+IHtlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xhcmdlJyl9KVxyXG5cclxuXHJcbiAgICAgICAgLy8gd2hlbiB3ZSBjbGlrYyBwbHVzIHRvbyBhZGQgd2Ugd2FudCB0byBvcGVuIHRoZSBtb2RhbCB3aW5kb3cgZmlyc3RcclxuXHJcblxyXG4gICAgICAgIHRvZ2dsZU1vZGFsKClcclxuXHJcbiAgICBcclxuICAgICAgIC8vIHRoZSB3ZSB3YW50IHRvIGFkZCB0aGUgYXBwcm9wcmlhdGUgbGlzdGVuZXJzIHRvIHRoZSBmaWVsZHMhXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAvL3RvZG9maWVsZHM6XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBcclxuICAgICAgICAvL2FkZCBldmVudCB0byB0aGUgbWFpbiBzdWJtaXQgYnV0dG9uIVxyXG4gICAgICAgIHByb2plY3RzdWJtaXRsb2dpYygpXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgLy8gYWRkIGxvZ2ljIHRvIHRvZG8gc3VibWl0IGJ1dHRvblxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSIsIi8vIHVzZSB0aGlzIGZ1bmN0aW9uIHRvIHJlbmRlciBjdXN0b20gcHJvamVjdHMgYXJyYXkgdGhhdCBpcyBzZXJ2ZWQgZnJvbSBwcm9qZWN0IG1ha2VyXHJcbi8vIHdlIHdpbGwgdXBkYXRlIHRoZSBhcnJheSBmcm9tIHRoZSBwcm9qZWN0IG1ha2VycyBmdW5jdGlvbiB3aGVuIG5lZWRlZCB0aGVuIHJ1biB0aGUgcmVuZGVyXHJcblxyXG5pbXBvcnQgcGx1c3F1YXJlIGZyb20gJy4uL3NyYy9pbWFnZXMvcGx1cy1zcXVhcmUtc3ZncmVwby1jb20uc3ZnJ1xyXG5pbXBvcnQge2RhdGUgYXMgdG9kYXl9ICBmcm9tICcuL2luZGV4LmpzJ1xyXG5pbXBvcnQgbWFpbnBsdXNpbWFnZSBmcm9tICcuLi9zcmMvaW1hZ2VzL3BsdXMtY2lyY2xlLXN2Z3JlcG8tY29tKDYpLnN2ZydcclxuaW1wb3J0IGhvdmVycGx1c2ltYWdlIGZyb20gJy4uL3NyYy9pbWFnZXMvcGx1cy1jaXJjbGUtc3ZncmVwby1jb20oNykuc3ZnJ1xyXG5pbXBvcnQgbWludXNzcXVhcmUgZnJvbSAnLi4vc3JjL2ltYWdlcy9taW51cy1zcXVhcmUtc3ZncmVwby1jb20uc3ZnJ1xyXG5cclxuXHJcbmltcG9ydCBoZWFkZXJpbWFnZSBmcm9tICcuLi9zcmMvaW1hZ2VzL3RleHQtYWxpZ24tY2VudGVyLXN2Z3JlcG8tY29tLnN2ZydcclxuXHJcbmltcG9ydCBtYWlucGFnZWJhY2tncm91bmQgZnJvbSAnLi4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kcy9IZXhhZ29uKDEpLnN2ZydcclxuXHJcbmltcG9ydCB7IHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnXHJcblxyXG5pbXBvcnQge2luaXRpYWxwcm9qLCBpbml0aWFsdG9kb3N1Ym1pdH0gZnJvbSAnLi9idXR0b25sb2dpYy5qcydcclxuaW1wb3J0IHsgdG9Vbmljb2RlIH0gZnJvbSAncHVueWNvZGUnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ3VzdG9tUHJvamVjdHModmFsdWUpIHtcclxuXHJcbiAvLyBjbGVhciBjdXN0b20gcHJvamVjdCBkb20gZWxlbWVudHMhIG90aGVyd2lzZSBpdCB3aWxsIGp1c3QgYWRkIHRvIHRoZW0hXHJcbiAvLyBkaXYgY29udGFpbmVyIGNsYXNzIGlzIGN1c3RvbXByb2plY3RzXHJcbiBcclxuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21wcm9qZWN0cycpLmlubmVySFRNTCA9IFwiXCJcclxuXHJcblxyXG5cclxuIFxyXG5cclxuLy8gaW1wb3J0IHByb2plY3QgbmFtZXMgZnJvbSBhcnJheSBjcmVhdGVkIGluIHByb2plY3QgbWFrZXIgXHJcblxyXG4gXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuLnRoZW4oKG9iaikgPT4ge1xyXG5cclxuICAgIC8vIHRoaXMgY3JlYXRlcyBhIG5ldyBhcnJheSBiYXNlZCBvbiBjdXJyZW50IGNvbnRlbnRzIG9mIHByb2plY3Qgb2JqZWN0XHJcbiAgICAvLyB3aGljaCB3ZSBjYW4gcmVuZGVyIGZyb21cclxuXHJcblxyXG4gICAgb2JqLmdldFByb2plY3RzKClcclxuXHJcbiAgICAvL2FycmF5IGJlbG93IGlzIGN1cnJlbnQgbmFtZXMgb2YgY3Vzb20gcHJvamVjdHNcclxuICAgIFxyXG4gICAgY29uc3QgY3VzdG9tcHJvamVjdHNsaXN0ID0gb2JqLmN1cnJlbnRDdXN0b21Qcm9qZWN0c1xyXG5cclxuICAgIC8vIGxvb3AgdGhpcyBhcnJheSBcclxuICAgIGN1c3RvbXByb2plY3RzbGlzdC5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIHByb2plY3QgY29vbnRhaW5lciBcclxuXHJcbiAgICAgICAgbGV0IHByb2plY3RkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGFkZCBzdHlsZSB0byBwcm9qZWN0IGNvbnRhaW5lclxyXG5cclxuICAgICAgICBwcm9qZWN0ZGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RidXR0b25zJylcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGJ1dHRvbnMgZm9yIHRpdGxlIGFuZCBkbGVsZXRlIG9iamVjdHNcclxuXHJcbiAgICAgICAgbGV0IHByb2plY3RidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIHByb2plY3RidXR0b24uY2xhc3NMaXN0LmFkZCgnY3VzdG9tcHJvamVjdHRpdGxlJylcclxuICAgICAgICBwcm9qZWN0YnV0dG9uLmRhdGFzZXQudGl0bGUgPSBlbGVtLnRyaW0oKVxyXG5cclxuICAgICAgICAvLyBzZXQgdGl0bGUgdG8gdGhlIGFwcHJvcHJpYXRlIGN1c3RvbSBwcm9qZWN0XHJcblxyXG4gICAgICAgIHByb2plY3RidXR0b24udGV4dENvbnRlbnQgPSBlbGVtXHJcbiBcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkZWxldGVwcm9qZWN0YnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBkZWxldGVwcm9qZWN0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZXByb2plY3RidXR0b24nKVxyXG4gICAgICAgIGRlbGV0ZXByb2plY3RidXR0b24udGV4dENvbnRlbnQgPSBcIlhcIlxyXG5cclxuXHJcbiAgICAgICAgLy8gYXBwZW5kIHRpdGxlIGFuZCBjbG9zZSB0byBwcm9qZWN0IGRpdlxyXG4gICAgICAgIHByb2plY3RidXR0b24uY2xhc3NMaXN0LmFkZCgncmVkJylcclxuICAgICAgICBwcm9qZWN0ZGl2LmFwcGVuZENoaWxkKHByb2plY3RidXR0b24pXHJcbiAgICAgICAgcHJvamVjdGRpdi5hcHBlbmRDaGlsZChkZWxldGVwcm9qZWN0YnV0dG9uKVxyXG4gIFxyXG4gIFxyXG5cclxuICAgICAgICAvLyB3ZSB3YW50IHRvIGFwcGVuZCB0aGVzZSB0byB0aGUgZGl2IHdoaWNoIGhvdXNlcyBjdXN0b20gcHJvamVjdHNcclxuXHJcbiAgICAgICAgY29uc3QgY3VzdG9tcHJvamVjdHN2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbXByb2plY3RzJylcclxuXHJcbiAgICAgICAgY3VzdG9tcHJvamVjdHN2aWV3LmFwcGVuZENoaWxkKHByb2plY3RkaXYpXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHdlIG5lZWQgYSB3YXkgdG8gYXNzb2NpYXRlIHRoZSBwcm9qZWN0IHRpdGxlIGFuZCB0aGUgY2xvc2UgYnV0dG9uXHJcbiAgICAgICAgLy8gd2UgY291bGQgdXNlIGEgZGF0YSBhdHRyaWJ1dGUgc2V0IHRvIHRoZSBrZXkgc2luY2UgdGhpcyB3aWxsIGJlIHVuaXF1ZVxyXG4gICAgICAgIC8vIGdpdmUgdGhlIGhvdXNpbmcgZGl2IGFuZCB0aGUgY2xvc2UgYnV0dG9uIHRoZSBzYW1lIGRhdGEgYXR0cmlidXRlXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGRlbGV0ZXByb2plY3RidXR0b24uZGF0YXNldC50aXRsZSA9IGVsZW1cclxuICAgICAgICBwcm9qZWN0ZGl2LmRhdGFzZXQudGl0bGUgPSBlbGVtXHJcblxyXG4gICAgICAgIC8vIGFwcGVuZCB0aGUgZnVuY3Rpb24gdG8gYWRkIGJ1dHRvbiBsb2dpYyB0byB1cGRhdGVkIGRvbSBlbGVtZW50c1xyXG5cclxuICAgICAgICBpbXBvcnQoJy4vYnV0dG9ubG9naWMuanMnKVxyXG4gICAgICAgIC50aGVuKChvYmopID0+IFxyXG4gICAgICAgIG9iai5kZWxldGVQcm9qZWN0cygpKVxyXG5cclxuXHJcbiAgICAgICAgLy8gXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgaW1wb3J0KCcuL2J1dHRvbmxvZ2ljLmpzJylcclxuICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgIG8uYWRkQnV0dG9uTG9naWMoKTtcclxuICAgIH0pXHJcblxyXG59KVxyXG5cclxuc2VsZWN0Q2hvaWNlQ3JlYXRpb24oKVxyXG5cclxuLy8gYWZ0ZXIgd2UgYXR0YWNoIG91ciBjdXN0b20gcHJvamVjdCwgd2Ugd2FubmEgZ28gdGhyb3VnaCB0aGVtIGFsbCBhbmQgZG8gc29tZSBzaGl0Li5cclxuXHJcbi8vIG9uY2Ugd2UgY2xpY2sgc3VibWl0IHByb2plY3QsIGJlbG93IGZpcmVzIVxyXG5pbXBvcnQoJy4vZG9tTG9naWMuanMnKVxyXG4udGhlbigobykgPT4ge1xyXG4gIFxyXG4gICAgby51cGRhdGVmb3JoaWdoKHZhbHVlKSBcclxufSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVmb3JoaWdoKHZhbHVlKSB7XHJcbiAgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVkJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgXHJcbiBcclxuICAgICAgIGlmICh2YWx1ZSA9PSBlbGVtLmRhdGFzZXQudGl0bGUpIHtcclxuICAgIFxyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgncmVkYmFjaycpXHJcbiAgICAgICB9XHJcblxyXG5cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0byBwb3B1bGF0ZSBkaXNwbGF5IG9mIHByb2plY3RzIGluIHRvZG8gY3JlYXRpb24gYmFzZWQgb24gY3VycmVudCBwcm9qZWN0c1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0Q2hvaWNlQ3JlYXRpb24oKSB7XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gIFxyXG4gICAgLy8gcmVtb3ZlIGFsbCBjb250ZW50IHRvIHN0YXJ0XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3B0aW9ucycpLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbi8vIGFkZCB0aGUgQWxsIHByb2plY3RzIG9wdGlvbiFcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBnZXQgdGhlIG5hbWVzIG9mIHRoZSBjdXN0b20gcHJvamVjdHMgYW5kIGNyZWF0ZSBlbGVtZW50c1xyXG5cclxub2JqLmN1cnJlbnRDdXN0b21Qcm9qZWN0cy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblxyXG5cclxuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG4gICAgb3B0aW9uLnR5cGU9ZWxlbVxyXG4gICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGVsZW1cclxuICAgICBvcHRpb24udmFsdWUgPSBlbGVtXHJcbiAgICAgb3B0aW9uLmRhdGFzZXQudHlwZSA9ICdvcHRpb24nXHJcbiAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzZWxlY3QnKVxyXG4gICAgIFxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3B0aW9ucycpLmFwcGVuZENoaWxkKG9wdGlvbilcclxuXHJcbn0pXHJcblxyXG5cclxuXHJcbiAgIFxyXG5cclxuXHJcblxyXG5cclxufSl9XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gZW5zdXJlIGRhdGUgaW5wdXQgaXMgdG9kYXlzIGRhdGUgb3IgaGlnaGVyXHJcblxyXG5mdW5jdGlvbiBpbnB1dERhdGUoKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlLmRhdGVpbnB1dCcpXHJcbiAgICBpbXBvcnQoJ2RhdGUtZm5zJylcclxuICAgIC50aGVuKChvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG8uZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJylcclxuXHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgY29uc29sZS5sb2coJ0lOUFVUVkFMJywgaW5wdXQudmFsdWUpO1xyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbi8vbWFzdGVyIGZ1bmN0aW9uIHRvIHJlbmRlciBhbGwgY29tcG9uZW50c1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcigpe1xyXG5cclxuICAgIGlucHV0RGF0ZSgpXHJcblxyXG4gXHJcbi8vIHNldCBiYWNrZ3JvdW5kIGltYWdlXHJcblxyXG5cclxuZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPWB1cmwoJHttYWlucGFnZWJhY2tncm91bmR9KWBcclxuXHJcblxyXG5cclxuICAgIC8vIHNldCBtYWluIHBsdXMgaW1hZ2UgXHJcblxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHVzYnV0dG9uJykuc3JjID0gbWFpbnBsdXNpbWFnZVxyXG4gICBcclxuaW1wb3J0KCcuL2J1dHRvbmxvZ2ljLmpzJylcclxuLnRoZW4oKG8pID0+IHtcclxuXHJcbiAgICByZW5kZXJDdXN0b21Qcm9qZWN0cygpXHJcbiAgICBpbml0aWFsUmVuZGVyVG9kbygpXHJcbiAgICBvLm1vZGFsTG9naWMoKVxyXG4gICAgby5hZGRCdXR0b25Mb2dpYygpXHJcblxyXG5cclxuXHJcblxyXG5cclxufSlcclxuXHJcbmluaXRpYWxwcm9qKClcclxuaW5pdGlhbHRvZG9zdWJtaXQoKVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4vLyBwb3B1bGF0ZSBtYWluIGRpc3BsYXkgbGlrZSB0b2RvIGFyZWEgYmFzZWQgb24gc2VsZWN0ZWQgcHJvamVjdCFcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVEaXNwbGF5KHByb2plY3RvYmplY3QgKSB7XHJcblxyXG4gICAgLy8gc2V0IHRvZG9oZWFkZXIgaW1hZ2VcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2hlYWRlcmltYWdlJykuc3JjID0gaGVhZGVyaW1hZ2VcclxuXHJcbiAgICAvLyBzZXQgYmFja2dyb3VuZCBpbWFnZVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1gdXJsKCR7bWFpbnBhZ2ViYWNrZ3JvdW5kfSlgXHJcblxyXG4gICAgLy8gc2V0IG1haW4gcGx1cyBpbWFnZSBcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1c2J1dHRvbicpLnNyYyA9IG1haW5wbHVzaW1hZ2VcclxuXHJcblxyXG5cclxuICAgIC8vIHdlIGFyZSBwb3B1bGF0aW5nIHRoZSBkb20sIHdlIGNhbiBhbHNvIHN3aXRjaCB0aGUgaGlnaGxpZ2h0ZWQgcHJvamVjdCFcclxuICAgIC8vIHRoaXMgZnVuY3Rpb24gcG9wdWxhdGVzIHRoZSB0b2RvbGlzdHNcclxuXHJcbiAgXHJcblxyXG5sZXQgcHJvamVjdCA9IFwiXCJcclxubGV0IHByb2plY3RzZXQgPSBcIlwiXHJcblxyXG5jb25zdCB0b2RvYXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2VjdGlvbicpXHJcblxyXG5cclxuXHJcbi8vIHNldCB0aGUgZGlzcGxheSB0byBiZSBibGFuayFcclxuXHJcbnRvZG9hcmVhLmlubmVySFRNTCA9IFwiXCJcclxubGV0IHByb25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdG5hbWV0YWcnKVxyXG5cclxuaWYgKHByb2plY3RvYmplY3QgPT0gXCJBbGxcIiB8fCBwcm9qZWN0b2JqZWN0ID09IFwiYWxsXCIpIHtwcm9qZWN0c2V0ID0gXCJkZWZhdWx0cHJvamVjdHNcIlxyXG4vLyBlbnN1cmUgYWxsIGlzIGhpZ2hsaWdodGVkISFcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZCcpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpXHJcbiAgICBpZiAoZWxlbS5kYXRhc2V0LnRpdGxlID09IFwiYWxsXCIgKSB7ZWxlbS5jbGFzc0xpc3QuYWRkKCdyZWRiYWNrJylcclxuICAgIHByb25hbWUudGV4dENvbnRlbnQgPSBcIlwiXHJcbiAgICBwcm9uYW1lLnRleHRDb250ZW50ID0gXCJBbGxcIn1cclxufSlcclxuXHJcbn1cclxuXHJcbmVsc2UgaWYgKHByb2plY3RvYmplY3QgPT0gXCJ0b2RheVwiKSB7cHJvamVjdHNldCA9IFwiZGVmYXVsdHByb2plY3RzXCJcclxucHJvbmFtZS50ZXh0Q29udGVudCA9IFwiXCJcclxucHJvbmFtZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIlxyXG59XHJcblxyXG5lbHNlIGlmIChwcm9qZWN0b2JqZWN0ID09IFwidGhpc3dlZWtcIikge3Byb2plY3RzZXQgPSBcImRlZmF1bHRwcm9qZWN0c1wiXHJcbnByb25hbWUudGV4dENvbnRlbnQgPSBcIlwiXHJcbnByb25hbWUudGV4dENvbnRlbnQgPSBcIlRoaXMgV2Vla1wiXHJcbn1cclxuXHJcbmVsc2Uge3Byb2plY3RzZXQgPSAncHJvamVjdHMnXHJcbnByb25hbWUudGV4dENvbnRlbnQgPSBcIlwiXHJcbnByb25hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0b2JqZWN0XHJcbn1cclxuXHJcblxyXG5cclxuLy8gdXBkYXRlIGFsbCBhcnJheSBiYXNlZCBvbiBhbGwgb2JqZWN0cyB3aXRoaW4gY3VzdG9tIHByb2plY3RzISEgYmVmb3JlIHdlIHJlbmRlciBkaXNwbGF5IVxyXG5cclxuICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gXHJcbiAgICAudGhlbigobykgPT4ge1xyXG5cclxuICAgIFxyXG4gICAvLyBhbGwgaXMgYmFzZWQgb24gY3VzdG9tIHByb2plY3RzLCBieSBpdGVyYXRpbmcgb3ZlciB0aGVtIGFsbFxyXG4gICAvLyBwcmUgc29ydCBlYWNoIHByb2plY3QgYXJyYXkgYmVmb3JlIHBhc3NpbmcgdG8gYWxsLi5cclxuICAgICAgICAvLyB3ZSBuZWVkIHRvIGxvb3Agb3ZlciB0aGUgcHJvamVjdCBhbmQgYXQgZWFjaCBrZXksIGNhbGwgdGhlIHNvcnQgZnVuY3Rpb25cclxuICAgICAgICAvLyBhbmQgc2V0IHRoYXQgZXF1YWwgdG8gdGhlIGtleXMgdmFsdWUuLlxyXG5cclxuICAgICAgICAvLyBsb29wIG92ZXIgdGhlIHByb2plY3RzIG9iamVjdCBhdCBwcm9qZWN0IGtleSBhcnJheVxyXG4gICAgICAgIC8vIHNldCB0aGF0IGFycmF5IGVxdWFsIHRvIHRoZSBhcnJheSBzb3J0ZWQgXHJcbiAgICAgICAgLy8gYXJyYXkgc29ydGVkIGJhc2VkIG9uIGRhdGUuLlxyXG5cclxuIGZvciAobGV0IHByb3AgaW4gby5wcm9qZWN0cykge1xyXG5cclxuICAgIC8vIHNraXAgaWYgYXJyYXkgbGVuZ3RoIDAuLlxyXG5cclxuICAgIGlmIChvLnByb2plY3RzW3Byb3BdLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgby5wcm9qZWN0c1twcm9wXSA9IG8ucHJvamVjdHNbcHJvcF0uc29ydChjb21wYXJlRm4pXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvLnByb2plY3RzW3Byb3BdLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgYXJyYXkgbG9jYXRlZCBhdCBrZXkgb24gcHJvamVjdHMgYXJyYXlcclxuICAgICAgICAvLyBsb29wIG92ZXIgZWFjaCBvYmplY3QgaW4gZWFjaCBhcnJheSBhbmQgYXNzaWduIGl0IGFuIGluZGV4IHZhbHVlIHdpdGhpbiB0aGUgb2JqZWN0J1xyXG4gICAgICAgIC8vIGRvbmUgYWZ0ZXIgc29ydGluZyBhcyB0aGVzZSB3aWxsIGNoYW5nZSFcclxuICAgICAgICBvLnByb2plY3RzW3Byb3BdW2ldLmluZGV4ID0gaVxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuIH1cclxuXHJcblxyXG5cclxuIGZ1bmN0aW9uIGNvbXBhcmVGbihhLCBiKSB7XHJcbiAgLy8gY29uc29sZS5sb2coYS5kYXRlLCdhJywgYi5kYXRlLCAnYicsIGEuZGF0ZSA8IGIuZGF0ZSlcclxuIFxyXG4gICAvLyBpZiBmaXJzdCBkYXRlIGlzIGxlc3MgdGhhbiBzZWNvbmQgZGF0ZSwgb3JkZXIgaXQgbGFzdFxyXG4gICBpZiAoYS5kdWVkYXRlIDwgYi5kdWVkYXRlKSB7XHJcbiAgICAgcmV0dXJuIC0xO1xyXG4gICB9XHJcbiAgIGlmIChhLmR1ZWRhdGUgPiBiLmR1ZWRhdGUpIHtcclxuICAgICByZXR1cm4gMTtcclxuICAgfVxyXG4gICAvLyBhIG11c3QgYmUgZXF1YWwgdG8gYlxyXG4gICByZXR1cm4gMDtcclxuIH1cclxuXHJcblxyXG5cclxuKGZ1bmN0aW9uIHNvcnRBbGwoKSB7by5kZWZhdWx0cHJvamVjdHMuYWxsID0gW11cclxuICAgIGZvciAobGV0IHByb3AgaW4gby5wcm9qZWN0cykge1xyXG5cclxuXHJcbiAgICAgICAgLy8gdGhlIHByb3AgaW4gby5wcm9qZWN0cyBpcyB0aGUga2V5IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGFycmF5IG9mIHRvZG8gb2JqZWN0c1xyXG4gICAgICAgIC8vIHdlIHNob3VsZCBsb29wIG92ZXIgdGhpcyBhcnJheSBhbmQgYXBwZW5kIHRoZW0gdG8gdGhlIGRlZmF1bHQgcHJvamVjdFxyXG4gICAgICAgIC8vIGFsbCBhcnJheSBiZWZvcmUgcmVuZGVyaW5nIHRoZSBkb21cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBvLnByb2plY3RzW3Byb3BdLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBzbyBmb3IgZXZlcnkgY3VzdG9tIHByb2plY3QgdG9kbyBvYmplY3QsIHdlIHdhbnQgdG8gcG9wdWxhdGUgdGhlIGFsbCBhcnJheSFcclxuICAgICAgICAgICAgLy8gYWZ0ZXIgcG9wdWxhdGluZyB0aGUgYXJyYXksIHdlIHdpbGwgc29ydCBpdCFcclxuICAgICAgICAgICAgby5kZWZhdWx0cHJvamVjdHMuYWxsLnB1c2goZWxlbSlcclxuXHJcbi8vIGJ1dCBub3Qgd2Ugc29ydCBhbGwgYWdhaW4sIHdlIHNvcnRlZCBlYWNoIGN1c3RvbSBwcm9qZWN0IGFycmF5IGluaXRpYWxseVxyXG4vLyB0aGVuIHdlIGFwcGVuZGVkIGV2ZXJ5IG9iamVjdCBmcm9tIGV2ZXJ5IGFycmF5IG9udG8gdGhlIGFsbCBhcnJheVxyXG4vLyB0aGV5IGFyZSBzb3J0ZWQgYnkgZGF0ZSBidXQgYnkgYXJyYXksIHNvIHdoZW4gYWxsIGNvbWJpbmVkLCB0aGUgZGF0ZXMgbXVzdCBiZSByZSBzb3J0ZWRcclxuLy8gZGF0ZXMgc29ydGVkIGJlbG93XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4IG9mIG8uZGVmYXVsdHByb2plY3RzLmFsbCkge1xyXG4gICAgICAgICAgICAgby5kZWZhdWx0cHJvamVjdHMuYWxsID0gby5kZWZhdWx0cHJvamVjdHMuYWxsLnNvcnQoY29tcGFyZUZuKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICBcclxuXHJcbiBcclxuLy8gd2UgYXJlIHJldHVybmluZyBhIG5ldyBzb3J0ZWQgYXJyYXkgdG8gdGhlbiByZXBsYWNlIHRoZSBhbGwgYXJyYXkgd2l0aFxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgfSlcclxuICAgICBcclxuICAgIH19KSgpO1xyXG5cclxuLy8gYWZ0ZXIgdXBkYXRpbmcgYWxsIGFycmF5LCB1cGRhdGUgdG9kYXkgYXJyYXkgYW5kIHRoaXMgd2VlaywgYmFzZWQgb24gc29ydGluZyBhbGwgYXJyYXkgYnkgZGF0ZSBvZiBlYWNoIG9iamVjdFxyXG4vLyB3ZSB3YW50IG8uZGVmYXVsdHByb2plY3RzLnRvZGF5IGVxdWFsIHRvIGFuIGFycmF5IHJldHVybmluZyBmdW5jdGlvbiB0aGF0IHNvcnRzIG9iamVjdHMgYmFzZWQgb24gYSBkYXRlIGtleSBcclxuLy90aGF0IGNvcnJlc3BvbmQgd2l0aCB0b2RheXMgZGF0ZVxyXG5cclxuKGZ1bmN0aW9uIHNvcnRkYXkoKSB7XHJcbiAgXHJcbiAgICAvLyBlbXB0eSB0b2RheSBhcnJheSBmb3Igc29ydGluZyFcclxuIFxyXG4gICAgby5kZWZhdWx0cHJvamVjdHMuYWxsLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgIFxyXG5pbXBvcnQoJ2RhdGUtZm5zJylcclxuLnRoZW4oXHJcbiAgICAoZGF0ZSkgPT4ge1xyXG5cclxuICAgIC8vIGNvbXBhcmUgdGhlIGRhdGUgaW4gdGhlIHByb2plY3QgdG8gdG9kYXlzIGRhdGVcclxuICAgIGxldCBkYXRlZXIgPSBkYXRlLmZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpXHJcbiAgICBpZiAoZWxlbS5kdWVkYXRlID09IGRhdGVlciApIFxyXG4gICAge1xyXG4gXHJcbiAgICAgICAgLy8gZWxlbWVudHMgd2l0aCB0b2RheSdzIGRhdGUsIHVzZSB0aGVtIHRvIHBvcHVsYXRlIHRoZSB0b2RheSBhcnJheSBpbiBkZWZhdWx0XHJcbiAgICAgICAgXHJcbiAgICAgICAgby5kZWZhdWx0cHJvamVjdHMudG9kYXkucHVzaChlbGVtKVxyXG4gICAgfVxyXG59KVxyXG4gICAgfSlcclxuICAgIFxyXG59XHJcbikoKTtcclxuXHJcbihmdW5jdGlvbiBzb3J0d2VlaygpIHtcclxuICAgIC8vIGVtcHR5IHRvZGF5IGFycmF5IGZvciBzb3J0aW5nIVxyXG5cclxuICAgIG8uZGVmYXVsdHByb2plY3RzLmFsbC5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuaW1wb3J0KCdkYXRlLWZucycpLnRoZW4oKGRhdGUpID0+IHtcclxuICAgIC8vIGNvbXBhcmUgdGhlIGRhdGUgaW4gdGhlIHByb2plY3QgdG8gdG9kYXlzIGRhdGVcclxuIGlmIChkYXRlLnBhcnNlSVNPKGVsZW0uZHVlZGF0ZSkgPD0gZGF0ZS5hZGRXZWVrcyhwYXJzZUlTTyhkYXRlLmZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpKSwgMSkpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZWxlbWVudHMgd2l0aCB0b2RheSdzIGRhdGUsIHVzZSB0aGVtIHRvIHBvcHVsYXRlIHRoZSB0b2RheSBhcnJheSBpbiBkZWZhdWx0XHJcbiAgICAgICAgXHJcbiAgICAgICAgby5kZWZhdWx0cHJvamVjdHMudGhpc3dlZWsucHVzaChlbGVtKVxyXG4gICAgfVxyXG59KVxyXG4gICAgfSlcclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcCBvZiBvW3Byb2plY3RzZXRdW3Byb2plY3RvYmplY3RdKSB7XHJcbiAgICAgICAgICBcclxuIFxyXG4gICAgICAgICAgICAvLyBwcm9qZWN0IHNldCBkZXRlcm1pbmVzIGRlZmF1bHQgb3IgY3VzdG9tIHByb2plY3RzXHJcbiAgICAgICAgICAgIC8vIHByb2plY3RvYmplY3QgZGV0ZXJtaW5lcyBzcGVjaWZpYyBwcm9qZWN0LCB3aGljaCB0aGVuIHJldHVybnNcclxuICAgICAgICAgICAgLy8gYW5kIGFycmF5IG9mIG9iamVjdHMsIHdoaWNoIHdlIHdvdWxkIG5lZWQgdG8gc29ydCB0aHJvdWdoIGFuZCBwdWxsIHNwZWNpZmljIHByb3BlcnRpZXMhXHJcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBmb3Igb2YgbG9vcCB3aGljaCBzb3J0cyBvdmVyIHRoZSBhcnJheSBjYWxsZWQgYnkgb1twcm9qZWN0c2V0XVtwcm9qZWN0b2JqZWN0XVxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggZXZlcnkga2V5IHdpdGhpbiBjdXNvbSBwcm9qZWN0cyBhbmQgYWRkIHRvIEFsbFxyXG5cclxuICAgXHJcbiAgICAgICAgICAgIC8vIGhpZ2hsaWdodCBzcGVjaWZpYyBwcm9qZWN0XHJcbiAgICAgICAgICAgIC8vIHByb2plY3RvYmplY3QgaXMgdGhlIHByb2plY3Qgd2l0aGluIHByb2plY3RzZXRcclxuICAgICAgICAgICAgZnVuY3Rpb24gc2VlKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gcnVuIHRoZSBoaWdobGlnaHQgZnVuY3Rpb24gd2l0aCB0aGUgcHJvamVjdCBkaXYgZXF1YWwgdG8gZXZlbnRcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdCgpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHdlIGNhbiBwdWxsIG91dCB0aGUgcmVsZXZlbnQgZGV0YWlscyB2aWEgcHJvcC50aXRsZSwgcHJvcC5kdWVkYXRlLCBldHhcclxuICAgICAgICAgICAgLy8gYW5kIHRoZW4gYXR0YWNoIHRoZW0gb250byBvdXIgc2NyZWVuIHZpYSB0aGlzIGxvb3AsIGNsZWFyIHRoZSBzY3JlZW4gY29udGVudCBmaXJzdCBhcyBhbHdheXMhXHJcblxyXG5cclxuICAgICBcclxuICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgb1twcm9qZWN0c2V0XVtwcm9qZWN0b2JqZWN0XS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblxyXG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBwcm9wLnRpdGxlID8/IFwiXCJcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICB9KVxyXG5cclxuXHJcbiAgICAgIC8vLyBjcmVhdGUgb3VyIGluZGl2aWR1YWwgdG9kbyBpdGVtcyBiZWxvdyEhIFxyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgZGl2IHRvIGhvdXNlIHRoZSBjb250ZW50IHNldCB0aGUgc3R5bGVzXHJcblxyXG4gICAgICAgICAgICBsZXQgdG9kb2NvbnRlbnRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RvZG90aXRsZWxpbmUnKVxyXG4gICAgICAgICAgICB0b2RvY29udGVudGRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvY29udGVudCcpXHJcblxyXG4vLyBjcmVhdGUgYSBtYWluIGRpdiBlbGVtZW50IHRvIHJpdmFsIHRoZSBidXR0b24gZWxlbWVudHNcclxuY29uc3QgcXVpY2tpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxucXVpY2tpbmZvLmNsYXNzTGlzdC5hZGQoJ3F1aWNraW5mbycpXHJcblxyXG4gICAgICAgICAgbGV0IHRpdGxlc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICBxdWlja2luZm8uYXBwZW5kQ2hpbGQodGl0bGVzZWN0aW9uKVxyXG4gICAgICAgICAgdGl0bGVzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RpdGxlc2VjdGlvbicpXHJcblxyXG4gICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb3AuZGVzY3JpcHRpb25cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kb3RpdGxlbGluZScpXHJcblxyXG4vLyBzaW5jZSB3ZSBhcmUgbG9vcGluZyB0aHJvdWdoIGFuIGFycmF5IG9mIG9iamVjdHMsIHNldCB0aGUgdGl0bGUgdG8gXHJcbi8vIHRoZSBrZXksIHRoaXMgd2lsbCBhbGxvdyB1cyB0byBhY2Nlc3MgdGhlIGFycmF5IGhlcmUgYW5kIHdlIGNhbiBsb29wIHRocm91Z2ggaXQgYW5kIGRpc3BsYXkgdGhlIGNvbnRlbnRzXHJcbiAgICAgICAgICBcclxuXHJcbnRpdGxlc2VjdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KVxyXG5cclxuICAgICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RvZG90aXRsZXMnKVxyXG5cclxuICAgICAgICAgICAvLyBmb3IgZWFjaCB0b2RvIGNvbnRlbnQgd2UgbWFrZSwgbWFrZSBpdCB1bmlxdWUgc28gaXQgY2FuIGhhdmUgdW5pcXVlIGV2ZW50cyAobGlrZSBiZWluZyByZW1vdmVkISlcclxuICAgICAgICAgICAvLyBhZGQgdGhlIGluZGV4IGFzIHdlbGwsIHdoaWNoIHdlIHdpbGwgZHluYW1pY2FsbHkgdXBkYXRlIHdoZW4gd2UgYWRqdXN0IHRoZSBhcnJheXMhXHJcblxyXG4gICAgICAgICAgICB0b2RvYXJlYS5hcHBlbmRDaGlsZCh0b2RvY29udGVudGRpdilcclxuICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYuZGF0YXNldC5wcm9qZWN0ID0gcHJvcC50aXRsZVxyXG4gICAgICAgICAgICB0b2RvY29udGVudGRpdi5kYXRhc2V0LnByb2plY3RzZXQ9IHByb3AucHJvamVjdFxyXG4gICAgICAgICAgICB0b2RvY29udGVudGRpdi5kYXRhc2V0LmluZGV4ID0gcHJvcC5pbmRleFxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGJ1dHRvbiBjb250YWluZXIhIHRvIGdvIGJlc2lkZSB0b2Rvc2VjdGlvblxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgYnV0dG9uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbmNvbnRhaW5lcicpXHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gZXhwYW5kIGJ1dHRvblxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgIGNvbnN0IGV4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgICBleHBhbmQuc3JjID0gcGx1c3F1YXJlXHJcbiAgICAgICAgICBleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kYnV0dG9uJylcclxuICAgICAgIFxyXG5cclxuICAgICAgICAgIC8vIGFkZCBhbiBldmVudCB0byBlYWNoIGV4cGFuZCBidXR0b24hXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGV4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcblxyXG4vLyBjcmVhdGUgYSB0b2RvIGNvbnRlbnQgZGl2IHRoYXQgd2Ugd2lsbCBhcHBlbmQgYW5kIHJlbW92ZSFcclxuXHJcblxyXG4gICAgICAgICAgIGNvbnN0IHRvZG9pbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICB0b2RvaW5mby5jbGFzc0xpc3QuYWRkKCd0b2RvaW5mbycpXHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgYSBmb3JtIGVsZW1lbnQgb24gdGhlIHRvZG8uLlxyXG5cclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG9mb3JtJylcclxuXHJcblxyXG4gICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY3JlYXRlIHRoZSBjb250ZW50IHRoYXQgd2lsbCBwb3B1bGF0ZSB0aGlzIHRvZG9cclxuICAgICAgICAgICAvLyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQ/XHJcbiAgICAgICAgICAgLy8gYW5kIGFsc28gbWFrZSBpdCBwb3NzaWJsZSB0byBlZGl0IHRoZSB2YWxlcyBieSBjbGlja2luZyBpbiB0aGUgZmllbGRzIVxyXG4gICAgICAgICAgIC8vIHdlIGNhbiBhbHJlYWR5IGNoYW5nZSBjb21wbGV0ZWQgYW5kIHByaW9yaXR5XHJcbiAgICAgICAgICAgLy8gc28gbWFrZSBpdCBzbyB0aGF0IHdlIGNhbiBlZGl0IGRlc2NyaXB0aW9uLCB0aXRsZSBhbmQgZGF0ZVxyXG4gICAgICAgICAgIC8vIGFmdGVyIHdlIGVkaXQgdGhlc2UgdGhpbmdzLCByZWZyZXNoIHRoZSBkaXNwbGF5IG9mIHRoYXQgaW5kaXZpZHVhbCB0b2RvLi5cclxuICAgICAgIFxyXG4gICAgICAgICAgICAvLyB0b2RvaW5wdXRzXHJcbiAgICAgICAgIFxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbHMgPSBbJ1RpdGxlJywgJ0Rlc2NyaXB0aW9uJywgJ0R1ZWRhdGUnXVxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBsYWJlbCBmb3IgZWFjaCBpbnB1dCBcclxuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICAgICAgICAgIGxhYmVsLmZvciA9IGxhYmVsc1tpXVxyXG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsc1tpXVxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gaW5wdXRcclxuICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICAgICAgICAgIGlucHV0Lm5hbWUgPSAndGl0bGUnXHJcbiAgICAgICAgICAgIGlucHV0LmlkID0gJ3RpdGxlJ1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChsYWJlbHNbaV0gPT0gJ0R1ZWRhdGUnKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gXCJkYXRlXCJcclxuICAgICAgICAgICAgICAgIGlucHV0LmlkID0gXCJkYXRlXCJcclxuICAgICAgICAgICAgICAgIGlucHV0Lm5hbWU9ICdkYXRlJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobGFiZWxzW2ldID09ICdEZXNjcmlwdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gICAgICAgICAgICAgICAgaW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIGlucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgIFxyXG4gICAgICAgICAgLy8gYXBwZW5kIGlucHV0IG9udG8gbGFiZWxcclxuICBcclxuICAgICAgICAgICAgLy8gYXBwZW5kIGxhYmVsIGhvdXNpbmcgaW5wdXQgb250byBmb3JtLi5cclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIHRvIHN1Ym1pdCB0aGUgZm9ybVxyXG5cclxuICAgICAgICAgY29uc3Qgc3VibWl0dG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgIHN1Ym1pdHRvZG8udGV4dENvbnRlbnQgPSAnVXBkYXRlIFRvZG8hJ1xyXG5cclxuICAgICAgICAgLy8gZm9yIGxhdGVyIG1hbmlwdWxhdGlvbiwgYWRkIGEgY2xhc3MgdG8gc3VibWl0IGJ1dHRvblxyXG4gICAgICAgICBzdWJtaXR0b2RvLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdHRvZG8nKVxyXG4gICAgICAgICBzdWJtaXR0b2RvLnR5cGUgPSAnc3VibWl0J1xyXG5cclxuICAgICAgICAgLy8gYXBwZW5kIGJ1dHRvbiB0byBmb3JtXHJcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0dG9kbylcclxuICAgICAgICAgZm9ybS5tZXRob2QgPSAnZ2V0J1xyXG5cclxuICAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpXHJcbiAgICAgICAgIHRpdGxlLnZhbHVlID0gcHJvcC50aXRsZVxyXG4gICAgICAgICBcclxuICAgICAgICAgY29uc3QgZGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2RhdGUnKVxyXG4gICAgICAgICBkYXRlLnZhbHVlID0gcHJvcC5kdWVkYXRlXHJcblxyXG4gICAgICAgICBjb25zdCBkZXNjID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKVxyXG4gICAgICAgICBkZXNjLnZhbHVlID0gcHJvcC5kZXNjcmlwdGlvblxyXG5cclxuICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHN1Ym1pdCBldmVudCBvbiBmb3JtIGNvbnRhaW5lciwgbG9nIHRoZSB2YWx1ZXMgdGhhdCBpdCBtYWtlcy4uXHJcblxyXG4gICBcclxuICAgICAgICAgICAgICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAgICAgICAgICAgIC50aGVuICgobykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSByZWxldmFudCB0b2RvIHdpdGggdGhlIG5ldyBpbmZvcm1hdGlvbi4uXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0c2V0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4XHJcblxyXG4gICAgICAgICAgICAgICAvLyBub3cgdXBkYXRlIHByb2plY3QgYXQgaW5kZXggYXQgdmFsdWVcclxuICAgICAgICAgICAgICAgLy8gYW5kIGFsc28gdXBkYXRlIHRoZSBjb21wbGV0ZWQgc3RhdHVzIGlmIGl0IGhhcyBjaGFuZ2VkLCBhcyB3ZWxsIGFzIHRoZSBwcmlvcml0eS4uXHJcbiAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBsZXRlJylcclxuICAgIFxyXG4gICAgICAgICAgICAgICB2YXIgcHJpb3JpdHkgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnF1aWNraW5mbycpLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlidXR0b24nKVxyXG4gICAgICAgICAgICAgICBpZiAocHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmlvcml0eXdyYXBwZXJsb3cnKSkge1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPSBcInByaW9yaXR5LWxvd1wiXHJcblxyXG4gICAgICAgICAgICAgICB9XHJcbmVsc2UgIGlmIChwcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3ByaW9yaXR5d3JhcHBlcm1lZCcpKSB7XHJcbiAgICBwcmlvcml0eSA9IFwicHJpb3JpdHktbWVkXCJcclxuXHJcbn1cclxuZWxzZSAgaWYgKHByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygncHJpb3JpdHl3cmFwcGVyaGlnaCcpKSB7XHJcbiAgICBwcmlvcml0eSA9IFwicHJpb3JpdHktaGlnaFwiXHJcblxyXG59XHJcblxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAvLyBub3cgdGhhdCB3ZSBoYXZlIHVwZGF0ZWQgdGhlIHJlbHZhbnQgdG9kbywgbGV0cyByZSByZW5kZXIgdGhpcyBzcGVjaWZpYyB0b2RvXHJcbiAgICAgICAgICAgICAgIC8vIGxlYXZpbmcgaXQgZXhwYW5kZWQgYW5kIGV2ZXJ5dGhpZ24gZWxzZSBhbG9uZVxyXG5cclxuICAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSB0aXRsZSBjb250ZW50IHRvIHVwZGF0ZWQgdGl0bGVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCApXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG90aXRsZWxpbmUnKS50ZXh0Q29udGVudCA9IHRpdGxlLnZhbHVlXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgdGhlIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBkZXNjLnZhbHVlXHJcblxyXG5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSBkYXRlXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vaW5kZXguanMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhlIGRhdGUgaXMgdG9kYXlcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGl0IGlzIHRvZGF5LCBjaGFuZ2UgdGhlIHRleHQgdG8gRHVlIFRvZGF5IVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRlLnZhbHVlID09IG8uZGF0ZSB8fCBkYXRlLnRleHRDb250ZW50ID09IG8uZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGFsdGhvdWdoIGlmIHN0YXR1cyBpcyBjb21wbGV0ZSwga2VlcCBkYXRlIHRleHQgYXMgJ0RPTkUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLmNvbXBsZXRlZCA9PSB0cnVlICkgeyBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS50ZXh0Q29udGVudCA9IFwiRE9ORSFcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3AuY29tcGxldGVkID09IGZhbHNlKSB7IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZWJ1dHRvbicpLnRleHRDb250ZW50ID0gXCJEVUUgVE9EQVlcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgZWxzZSB7ICAgLy8gaWYgaXQgaXMgbm90IHRvZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVhdmUgZGF0ZSB2YWx1ZSB1bmNoYW5nZWRcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdXBkYXRlIHRoZSBkaXZ2IHdpdGggZGF0ZSB2YWx1ZSFcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG9kYXknLCBkYXRlLnZhbHVlLCBvLmRhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AuY29tcGxldGVkID09IHRydWUpIHsgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlYnV0dG9uJykudGV4dENvbnRlbnQgPSdET05FISd9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGVsc2UgeyAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlYnV0dG9uJykudGV4dENvbnRlbnQgPSBkYXRlLnZhbHVlXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCByZW1vdmV0b2RvID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaW5mbycpXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGFyZ2UnKVxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kYnV0dG9uJykuc3JjID0gcGx1c3F1YXJlXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVtb3ZldG9kbylcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgcHJpb3JpdHlcclxuICAgICAgICAgICAgICAgIC8vIHdpbGwgdXBkYXRlIGF1dG9tYXRpY2FsbHkgYXMgaXQgYWx0ZXJzIHRoZSBvYmplY3RcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgY29tcGxldGVkIHN0YXR1cyFcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIG5vdyB1cGRhdGUgdGhlIGN1c3RvbSBwcm9qZWN0IHdpdGggdGhlIHJlbGV2YW50IGNoYW5nZXMuLlxyXG5cclxuICAgICAgICAgICAgICAgIG8ucHJvamVjdHNbcHJvamVjdF1baW5kZXhdLnRpdGxlID0gdGl0bGUudmFsdWVcclxuICAgICAgICAgICAgICAgIG8ucHJvamVjdHNbcHJvamVjdF1baW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzYy52YWx1ZVxyXG4gICAgICAgICAgICAgICAgby5wcm9qZWN0c1twcm9qZWN0XVtpbmRleF0uZHVlZGF0ZSA9IGRhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgIG8ucHJvamVjdHNbcHJvamVjdF1baW5kZXhdLmNvbXBsZXRlZCA9IGNvbXBsZXRlZFxyXG4gICAgICAgICAgICAgICAgby5wcm9qZWN0c1twcm9qZWN0XVtpbmRleF0ucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coby5wcm9qZWN0c1twcm9qZWN0XVtpbmRleF0pXHJcbiAgICAgICAgICBcclxuLy8gYW5kIHJldHVybiB0aGF0IHNwZWNpZmljIHRvZG8gdG8gbm9uIGV4cGFuZGVkIHN0YXRlLi5cclxuY29uc29sZS5sb2coKVxyXG5cclxuXHJcbi8vIHJlbW92ZSB0aGUgdG9kbyBpbmZvIHRoYXQgd2FzIGFwcGVuZGVkIG9uIHRvIG1ha2UgdGhlIGNhcmQgYmlnXHJcblxyXG5cclxuLy8gYW5kIHNldCB0aGUgaWNvbiBiYWNrIHRvIGEgcGx1cyBpY29uIVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgIHRvZG9pbmZvLmFwcGVuZENoaWxkKGZvcm0pXHJcbiAgICAgICAgIC8vIGFkZCBzdWJtaXQgYnV0dG9uIG9uIGZvcm1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIHRvIGNhbmNlbCBzdWJtaXRcclxuXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbHN1Ym1pdC50ZXh0Q29udGVudCA9ICdDYW5jZWwnXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvLyBmb3IgbGF0ZXIgbWFuaXB1bGF0aW9uLCBhZGQgYSBjbGFzcyB0byBzdWJtaXQgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdjYW5jZWxzdWJtaXQnKVxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIGJ1dHRvbiB0byBmb3JtXHJcbiAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2Vsc3VibWl0KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHdlIGNsaWNrIHRoZSBjYW5jZWwgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FuY2Vsc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IGJlaGF2dW91ciBvZiBzdWJtaXR0aXVuZyB0aGUgZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGxhcmdlIHRhZyBmcm9tIHRoZSBwYXJlbnQgY29udGFpbmVyXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsYXJnZScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN3aXRjaCB0aGUgaWNvbiBiYWNrIHRvIGEgcGx1cyFcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmM9IHBsdXNxdWFyZSlcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgLy9hbmQgcmVtb3ZlIHRoZSBhZGRlZCBjb250ZW50IHRoYXQgdGhlIHBsdXMgYWRkZWRcclxuXHJcbiAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2luZm8nKVxyXG4gICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVtb3ZlKVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICB0b2RvaW5mby5hcHBlbmRDaGlsZChmb3JtKVxyXG4gICAgICAgICAgICAgICAgICAvLyBhZGQgc3VibWl0IGJ1dHRvbiBvbiBmb3JtXHJcbiBcclxuXHJcblxyXG4gICAgICAgICAgICAvLyB3aGVuIHdlIGNsaWNrIGFuIGV4cGFuZCBpY29uLi5cclxuICAgICAgICAgICAgLy8gd2Ugd2FudCB0byBleHBhbmQgdGhhdCBzcGVjaWZpYyB0b2RvLi5cclxuXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2xhcmdlJylcclxuXHJcbiAgICAgICAgICAgIC8vIHdlIHRoZW4gc2V0IHRoZSBpbWFnZSB0byBhIG1pbnVzIG9yIGEgcGx1cywgZGVwZW5pbmcgaWYgd2UgYXJlIGFkZGluZ1xyXG4gICAgICAgICAgICAvLyBvciByZW1vdmluZyBsYXJnZVxyXG5cclxuICAgICAgICAgICBpZiAoIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbGFyZ2UnKSkge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5zcmMgPSBtaW51c3NxdWFyZVxyXG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvaW5mbylcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICBlbHNlIHtlLnRhcmdldC5zcmMgPSBwbHVzcXVhcmVcclxuICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2luZm8nKSl9XHJcblxyXG5cclxuICAgICAgICAgICAvLyBub3cgd2UgbmVlZCB0byBzdHlsZSBpdCBub3cgdGhhdCB0aGUgZGl2IGlzIGFkZGVkLCBtYXliZSB0aGUgbGFyZ2UgY2xhc3Mgd2lsbCBhbHNvIG92ZXJ3cml0ZSBob3cgd2UgbGF5IHRoaWluZ3Mgb3V0Li5cclxuXHJcblxyXG4gICAgIFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGJ1dHRvbmNvbnRhaW5lci5hcHBlbmRDaGlsZChleHBhbmQpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBkYXRlIGJ1dHRvbiBcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RhdGVidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCdkYXRlLWZucycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHByb3AuZHVlZGF0ZVxyXG5cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHByb3AuZHVlZGF0ZSA9PSBvLmZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpICYmIHByb3AuY29tcGxldGVkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGV0b2RvYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnZGVsZXRld2hlbmRvbmUnKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZXRvZG9idXR0b24nKS50ZXh0Q29udGVudCA9IFwiREVMRVRFXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICgnRE9ORSEnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNlIGlmIChwcm9wLmR1ZWRhdGUgPT0gby5mb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKSAmJiBwcm9wLmNvbXBsZXRlZCAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRldG9kb2J1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2RlbGV0ZXdoZW5kb25lJylcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGV0b2RvYnV0dG9uJykudGV4dENvbnRlbnQgPSBcIlhcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gKCdEVUUgVE9EQVknKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbi8vIGNyZWF0ZSBwcmlvcml0eSBidXR0b24hXHJcblxyXG4gICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eXRvZG9idXR0b24nKVxyXG4gICAgICAgICAgICBidXR0b24uaWQgPSAncHJpb3JpdHlidXR0b24nXHJcblxyXG5cclxuICAgICBpZiAocHJvcC5wcmlvcml0eSA9PSAncHJpb3JpdHktbG93Jykge2J1dHRvbi50ZXh0Q29udGVudCA9IFwiTFwiXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHl3cmFwcGVybG93Jyl9XHJcbiAgICAgZWxzZSBpZiAocHJvcC5wcmlvcml0eSA9PSAncHJpb3JpdHktbWVkJykge2J1dHRvbi50ZXh0Q29udGVudCA9ICdNJ1xyXG4gICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eXdyYXBwZXJtZWQnKX1cclxuICAgICBlbHNlIHtcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkhcIlxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eXdyYXBwZXJoaWdoJylcclxuICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbmNvbnRhaW5lclxyXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG5cclxuXHJcbiAgICAgZnVuY3Rpb24gcHJpb3JpdHlDaGFuZ2VyKGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgLy8gd2hlbiB3ZSBjbGljayB0aGUgc3BlY2lmaWMgdG9kbyBvYmplY3QsIHdlIHdpbGwgZ2V0IGFuIGluZGV4IHZhbHVlLCBhcyB3ZWxsIGFzIGEgcHJvamVjdCB3aGljaCB3ZSBjYW4gdXNlIFxyXG4gICAgICAgIC8vIHRvIHN3aXRjaCBpdHMgcHJpb3JpdHkhXHJcbiAgICAgICAgLy8gdGhpcyBmdW5jdGlvbiByZWNlaXZlcyB0aGUgZXZlbnRcclxuICAgICAgICAvLyBpdHMgdGhlIHRvZG8gY29udGFpbmVycyBkZXRhaWxzIHdlIHdhbnQsIG5vdCB0aGUgYnV0dG9uIGNvbnRhaW5lciAocGFyZW50KVxyXG4gICAgICAgIC8vIGJ1dCB0aGUgcGFyZW50IG9mIHRoZSBidXR0b24gY29udGFpbmVyXHJcblxyXG4gICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXInKVxyXG4gICAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICAgICAgLy8gZmluZCB0aGUgc3BlY2lmaWMgcHJvamVjdCB3aXRoaW4gZGVmYXVsdCBwcm9qZWN0c1xyXG4gICAgICAgICAgICAvLyBzaW5jZSBpdHMgYW4gYXJyYXksIGFjY2VzcyBpdCBhdCB0aGF0IHNwZWNpZmljIGluZGV4XHJcbiAgICAgICAgICAgIC8vIGFuZCBhZGp1c3QgaXRzIHByaW9yaXR5XHJcbiAgICAgICAgICAgIG9iai5wcm9qZWN0c1tlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LnByb2plY3RzZXRdW2UudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXhdLnByaW9yaXR5ID0gcHJpb3JpdHkgXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlDaGFuZ2VyKGUpXHJcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09IFwiTFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJNXCJcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHl3cmFwcGVybWVkJylcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5d3JhcHBlcmxvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlDaGFuZ2VyKGUsICdwcmlvcml0eS1tZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCB3ZSBuZWVkIGEgd2F5IHRvIGFkanVzdCB0aGUgcHJpb3JpdHkgb24gdGhlIHNwZWNpZmljIHRvZG8hIVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldHMgY3JlYXRlIGEgZnVuY3Rpb24gdGhleSBjYW4gYWxsIHVzZS4uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChidXR0b24udGV4dENvbnRlbnQgPT0gXCJNXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eXdyYXBwZXJtZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eXdyYXBwZXJoaWdoJylcclxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUNoYW5nZXIoZSwgJ3ByaW9yaXR5LWhpZ2gnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJMXCJcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHl3cmFwcGVyaGlnaCcpXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5d3JhcHBlcmxvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlDaGFuZ2VyKGUsICdwcmlvcml0eS1sb3cnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICB9XHJcbi8vIENyZWF0ZSBhIGNvbXBsZXRlZCBidXR0b25cclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCJcclxuXHJcbmlmIChwcm9wLmNvbXBsZXRlZCA9PSB0cnVlKSB7aW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKX1cclxuXHJcblxyXG5lbHNlIGlmIChwcm9wLmNvbXBsZXRlZCA9PSBmYWxzZSkge2lucHV0LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGNoYW5nZSBjb21wbGV0ZSBzdGF0dXMhXHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBpdCBpcyBjbGlja2VkLCB1cGRhdGUgdGhlIHRvZG8ncyBjb21wbGV0ZSBzdGF0dXMhXHJcbiAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgICAgICAgICAgICAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG8ucHJvamVjdHNcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coby5wcm9qZWN0cylcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMgc2V0cyBpdCBncmVlbiB3aGVuIHdlIGNsaWNrIHRvIGNoZWNrXHJcbiAgICAgICAgICAgICAgICAgIGlmICggIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGUnKSB8fCAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgaXQgaXMgYWxyZWFkeSBjb21wbGV0ZSB3aGVuIGNsaWNrZWQsIHRoZW4gcmVtb3ZlIHRoZSBjbGFzcyBhbmQgY2hhbmdlIHRoZSBwcm9qZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZSB0ZXh0IGNvbnRlbnQgdG8gdGhlIGRhdGUgb2YgdGhlIHRvZG8sIHVubGVzcyBpdCBpcyB0b2RheSdzIGRhdGUgYXQgd2hpY2ggcG9pbnQgc2hvdyBkdWUgdG9kYXkhXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgY29tcGxldGUgc3RhdHVzIG9uIHByb2plY3QhXHJcbiAgICAgICAgICAgICAgICAgICAgby5wcm9qZWN0c1tlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LnByb2plY3RzZXRdW2UudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXhdLmNvbXBsZXRlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coby5wcm9qZWN0c1tlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0c2V0XSlcclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgYnV0dG9uIGZyb20gJ2RvbmUnXHJcbiAgICAgICAgICAgICAgICAgIGltcG9ydCAoJ2RhdGUtZm5zJylcclxuICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcC5kdWVkYXRlID09IGRhdGUuZm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS50ZXh0Q29udGVudCA9ICdEVUUgVE9EQVkhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRlbGV0ZXRvZG9idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdkZWxldGV3aGVuZG9uZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRldG9kb2J1dHRvbicpLnRleHRDb250ZW50ID0gXCJYXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGF0ZWJ1dHRvbicpLnRleHRDb250ZW50ID0gcHJvcC5kdWVkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRldG9kb2J1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2RlbGV0ZXdoZW5kb25lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYucXVlcnlTZWxlY3RvcignLmJ1dHRvbmNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGV0b2RvYnV0dG9uJykudGV4dENvbnRlbnQgPSBcIlhcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSBhZGQgdGhlIGNsYXNzIGFuZCBhZGQgdG8gcmVsZXZhbnQgcHJvamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJylcclxuICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS50ZXh0Q29udGVudCA9ICdET05FISdcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvciB0aGUgZGVsZXRlIGJ1dHRvbiByZWQgYW5kIG1ha2UgaXQgbGFyZ2VyIVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRldG9kb2J1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZXdoZW5kb25lJylcclxuICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRlbGV0ZXRvZG9idXR0b24nKS50ZXh0Q29udGVudCA9IFwiREVMRVRFXCJcclxuICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmRhdGVidXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdyZWRiYWNrJylcclxuICAgICAgICAgICAgICAgICAgICBvLnByb2plY3RzW2UudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQucHJvamVjdHNldF1bZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleF0uY29tcGxldGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBuZWVkIGEgd2F5IHRvIGFsc28gc2V0IGl0IGdyZWVuIGlmIGNvbXBsZXRlZCBpcyB0cnVlIGJ5IGRlZmF1bHQhXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gdGhhdCB3aXRoaW4gdGhlIGNyZWF0aW9uIG9mIHRvZG9jb250ZW50IGRpdnNcclxuICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCd0b2RvY2hlY2tib3gnKVxyXG4gICAgICAgICAgICAgICAgICAgYnV0dG9uY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIHRpdGxlIGFuZCBidXR0b24gY29udGFpbmVyIHRvIHF1aWNrIGluZm8gdGhlbiB0byBkaXYhXHJcbiAgICAgICAgICAgICAgICAgICBxdWlja2luZm8uYXBwZW5kQ2hpbGQoYnV0dG9uY29udGFpbmVyKVxyXG4gICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYuYXBwZW5kQ2hpbGQocXVpY2tpbmZvKVxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLmNvbXBsZXRlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGF0ZWJ1dHRvbicpLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlJylcclxuICAgICAgICAgICAgICAgICAgICB0b2RvY29udGVudGRpdi5maXJzdENoaWxkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gXCJjaGVja2VkXCJcclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIGNyZWF0ZSBkZWxldGVkIGJ1dHRvbiB3aXRoaW4gdG9kbyBlbGVtZW50c1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb2J1dHRvbicpXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGV0b2RvYnV0dG9uJylcclxuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCJcclxuICAgICAgICAgICAgYnV0dG9uY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChidXR0b24pXHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBkZWxldGUgYnV0dG9uIFxyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgICAgIC8vIG9uIGNsaWNrLCBkZWxldGUgdGhlIHRvZG8hIHdpdGggdGhlIHJlbGV2YW50IGRldGFpbHMgZnJvbSBwYXJlbnQgdG9kbyBjb250YWluZXJcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldClcclxuXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vdG9kb21vZHVsZS5qcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICBvYmouZGVsZXRlVG9kbyhlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LnByb2plY3RzZXQsIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWZ0ZXIgd2UgZGVsZXRlIHRoZSB0b2RvLCByZXBvcHVsYXRlIHRoZSBkaXNwbGF5IEAgYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVEaXNwbGF5KCdhbGwnKVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAvLyBhZGQgdG8gZWFjaCB0b2RvIGNvbnRlbnQgdGhhdCB0b2RvJ3Mgc3BlY2lmaWMgYXJyYXkgaW5kZXggXHJcblxyXG4gICBcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9wdXBUb2RvKClcclxuICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG4gICAgYXBwZW5kVGltZSgpXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gdG8gY29sb3IgYmFjayBvZiBzZWxlY3RlZCBwcm9qZWN0IHJlZCFcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWRQcm9qZWN0KCkge1xyXG4gICAgXHJcbi8vIHNldCB0aGUgYWxsIHRhZyBhcyByZWQgc2luY2Ugd2UgYXJlIGRpc3BsYXlpbmcgYWxsIFxyXG5jb25zdCByZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVkJylcclxucmVkLmZvckVhY2goKGVsZW0pICA9PiB7XHJcbiAgICBpZiAoZWxlbS5kYXRhc2V0LnRpdGxlID09IFwiYWxsXCIpIHtlbGVtLmNsYXNzTGlzdC5hZGQoJ3JlZGJhY2snKX1cclxufSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSZWQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVkJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgncmVkYmFjaycpXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuLy8gZHJhdyB0aGUgdG9kbyBkaXNwbGF5IVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxSZW5kZXJUb2RvKCkge1xyXG4gICAgXHJcbiAgXHJcbiAgICAvLyBnZXQgdGhlIHRvZG8gYXJlYSBhbmQgc2V0IGl0IGVxdWFsIHRvIHRoZSBhbGwgYXJyYXkgaW4gZGVmYXVsdHByb2plY3RzXHJcbiAgICAvLyBzdGFydCBieSBjbGVhcmluZyB0aGUgYXJlYVxyXG4gICBcclxuICAgIHBvcHVsYXRlRGlzcGxheSgnYWxsJylcclxuICAgXHJcbiAgICAvLyBsb29wIHRoZSBhcnJheSBhbmQgZHJhdyBkb20gZWxlbWVudHMgZm9yIGVhY2ggb25lIVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gcG9wdXAgdG9kbyBkaXNwbGF5IVxyXG4vLyBjaGFuZ2VzIGNvbG9yIHdoZW4gbW91c2luZyBvdmVyIHRoZW0gYW5kIHJlbW92ZXMgaXQgd2hlbiBtb3VzaW5nIG91dFxyXG4vLyBsZXRzIHRoZW0gcG9wLXVwIHdoZW4gY2xpY2tlZCFcclxuXHJcbmZ1bmN0aW9uIHBvcHVwVG9kbygpIHtcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbi8vIHNjcmlwdCBiZWxvdyB0byBtYXJrIHByb2plY3QgdGl0bGUgcmVkIGJhc2VkIG9uIGlucHV0IGFuZCBkZWZhdWx0IHZpZXdcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdGVkKCkge1xyXG5cclxuICAgIC8vIHRvIGJlIHJ1biBhZnRlciBkb20gaXMgYnVpbHQsIHF1ZXJ5IGFsbCB0aXRsZXNcclxuICAgIC8vIHdlIGFyZSBnb2luZyB0byBcclxuXHJcbiAgICBjb25zdCB0aXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVkJylcclxuICAgIHRpdGxlcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblxyXG4gICAgfSlcclxuXHJcblxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBiZWxvdyBhcHBlbmRzIGN1cnJlbnQgZGF5IGluIHRpbWUgaW4gdGhlIGhlYWRlciEgdG8gYmUgY2FsbGVkIGluIHBvcHVsYXRlRGlzcGxheVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kVGltZSgpIHtcclxuICAgIGltcG9ydCgnZGF0ZS1mbnMnKVxyXG4gICAgLnRoZW4oKGRhdGUpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcclxuICAgICAgICB0aW1lLmNsYXNzTGlzdC5hZGQoJ3RpbWVoZWFkZXInKVxyXG5cclxuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5mb3JtYXQobmV3IERhdGUoKSwgJ0VFRUUnKVxyXG4gICAgICAgIGxldCBkYXludW1iZXIgPSBkYXRlLmZvcm1hdChuZXcgRGF0ZSgpLCAnZWUnKVxyXG4gICAgICAgIGxldCBtb250aCA9IGRhdGUuZm9ybWF0KG5ldyBEYXRlKCksICdNTU1NJylcclxuICAgICAgICBsZXQgeWVhciA9IGRhdGUuZm9ybWF0KG5ldyBEYXRlKCksICd5JylcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF5LCBkYXludW1iZXIsIHllYXIpXHJcbiAgICAgICAgdGltZS50ZXh0Q29udGVudCA9IHRvZGF5XHJcbiAgICAgICAgY29uc3QgaGVhZGVyZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbHVtbnMnKVxyXG4gICAgICAgIGhlYWRlcmRpdi50ZXh0Q29udGVudCA9IFwiXCJcclxuXHJcblxyXG4gICAgICAgICAgICBoZWFkZXJkaXYuYXBwZW5kQ2hpbGQodGltZSlcclxuICAgICAgICBcclxuXHJcbiAgICB9KVxyXG5cclxufSIsImltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tICcuL3RvZG9tb2R1bGUnXHJcbmltcG9ydCB7IHByb2plY3RzLCBkZWZhdWx0cHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RtYWtlci5qcydcclxuY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlZCcpLmNoZWNrZWRcclxuXHJcblxyXG5cclxuLy8gbG9naWMgdG8gZGV0ZXJtaW5lIHByaW9yaXR5XHJcbi8vIHNlcmllcyBvZiByYWRpbyBidXR0b25zIGxvb3AgdGhyb3VnaCB0aGVtXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybUNvbnRyb2xsZXIodGl0bGUsZGVzY3JpcHRpb24sZHVlZGF0ZSxwcmlvcml0eSxwcm9qZWN0LGNvbXBsZXRlZCkge1xyXG5cclxuaWYgKGNvbXBsZXRlZCA9PSBcIlwiKSB7Y29tcGxldGVkID0gZmFsc2V9XHJcbi8vIGNyZWF0ZSBhIHRvZG8gb2JqZWN0IGZyb20gdGhlIHNwZWNpZmllZCBpbnB1dHMhXHJcblxyXG4gXHJcblxyXG4gICAgICAgICAgIC8vIGFkZCBpdCB0byB0aGUgc3BlY2lmaWMgcHJvamVjdC4uICBhbGwgYnkgZGVmYXVsdCBvciBzZWxlY3RlZC4uXHJcblxyXG5cclxuICAgXHJcbiAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgIFxyXG4gICAgICAgICAgICAvLyBhbmQgdGhlIGN1c3RvbSBwcm9qZWN0IGl0c2VsZlxyXG4gICAgICAgICAgICBsZXQgb2JqID0gY3JlYXRlVG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVkYXRlLHByaW9yaXR5LHByb2plY3QsY29tcGxldGVkKVxyXG4gICAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0XS5wdXNoKG9iailcclxuXHJcbiAgICAgICAgICAgIC8vIHRoZSBmdW5jdGlvbiByZXR1cm5zIGFuIG9iamVjdCBhbmQgd2UgcHVzaCBpdCBvbnRvIHRoZSBhcHByb3ByaWF0ZSBjdXN0b20gcHJvamVjdHMgYXJyYXlcclxuXHJcbiAgLy8gd2UgYWxzbyB3YW50IHRvIGhhdmUgYSBjdXN0b20gaW5kZXggcHJvcGVydHkgZm9yIHRoZSB0b2RvJ3MgYW5kIGZpZ3VyZSBvdXQgdGhlaXIgcG9zaXRpb24gd2l0aGluIHRoZWlyIHJlc3BlY3RpdmUgYXJyYXlcclxuICBwcm9qZWN0c1twcm9qZWN0XS5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgIGVsZW0uaW5kZXggPSBpbmRcclxuICAgXHJcbiAgfSlcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZWluZGV4KCkge1xyXG4gICAgICBwcm9qZWN0c1twcm9qZWN0XS5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgIGVsZW0uaW5kZXggPSBpbmRcclxuICAgIGNvbnNvbGUubG9nKCdBUlJBWUxPT1AnLCBlbGVtKVxyXG4gIH0pXHJcbiAgfVxyXG4gICBcclxuICAgICAgIC8vIGFmdGVyIHdlIGhhdmUgcHVzaGVkIHRoZSBvYmplY3Qgb250byBwcm9qZWN0c1xyXG4gICAgICAgLy8gd2UgbG9vcCB0aGUgYXJyYXkgYW5kIGFkanVzdCBpbmRleGVzIHNvIHRoZSB0b2RvJ3MgaGF2ZSBjdXN0b20gaW5kZXhlcyFcclxuXHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gYXBwZW5kIHRoZSB0b2RvIHRvIHRoZSBhcHByb3ByaWF0ZSBwcm9qZWN0IVxyXG4vLyBpdCBpcyBlaXRoZXIgdG8gQWxsIHByb2plY3RzLCBvciBhIHNwZWNpZmljIG9uZVxyXG4vLyBmb3IgYWxsIGJlbG93IiwiLy8gcHJvamVjdHMgd2lsbCBuZWVkIHRvIGJlIGNhcGFibGUgb2Ygc3RvcmluZyB3aGljaCB0b2RvJ3MgYmVsb25nIHRvIHRoZW1cbi8vIGl0IGxvb2tzIGNsZWFuZXIgdG8gc3RvcmUgYXMgYW4gb2JqZWN0IG9mIHByb2plY3QgbmFtZXMgYW5kIGhhdmUgdGhlIHZhbHVlcyBlcXVhbCB0b1xuLy8gYXJyYXlzIHRoYXQgY29udGFpbiB0aGUgcmVsZXZlbnQgdG9kbyBvYmplY3RzIFxuXG4vLyB3ZSBjYW4gY29tZSB1cCB3aXRoIGEgbWFzdGVyIHByb2plY3RzIG9iamVjdCwgaWYgaW4gdGhlIFVJIHdlIHdvdWxkIGxpa2UgdG8gc2VwYXJhdGUgdGhlIGRpc3BsYXlcbi8vIGl0IGlzIGVhc2llciB0byBoYXZlIGEgc2VwYXJhdGUgZGVmYXVsdCBwcm9qZWN0IG9iamVjdCBhcyB3ZSBjYW4ganVzdCBsb29wIG92ZXIgaXQgXG4vLyB0byBwb3B1bGF0ZSB0aGUgZGlzcGxheSBhbmQgbm90IGhhdmUgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGRlZmF1bHQgdnMgbm9uXG5cbi8vIGFsbCBrZXkgd2lsbCBob3VzZSBhcnJheSB0aGF0IHBhcnNlcyBhbGwgYXZhaWxhYmxlIHByb2plY3Qgb2JqZWN0cyBhbmQgbGlzdHMgdGhlbVxuLy8gdGhlIHRvZGF5IGFuZCB0aGlzd2VlayBhcnJheSB3aWxsIGhhdmUgdG8gZG8gd2l0aCBzb3J0aW5nIFxuXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0cHJvamVjdHMgPSB7XG4gICAgYWxsOiBbXSxcbiAgICB0b2RheTogW10sXG4gICAgdGhpc3dlZWs6IFtdLFxufVxuXG4vLyB0aGlzIGZ1bmN0aW9uIHRvIHBvcHVsYXRlIGRlZmF1bHQgcHJvamVjdHMsIHdoaWNoIHdpbGwgbG9vcCBvdmVyIGN1c3RvbSBwcm9qZWN0cyFcblxuXG4vLyB3ZSB3aWxsIG1ha2UgZnVuY3Rpb25zIHRvIHNvcnQgYWxsIHRvIGNyZWF0ZSB0aGlzIHdlZWsgYW5kIHRvZGF5IVxuXG5leHBvcnQgY29uc3QgcHJvamVjdHN0ZXN0ID0ge1xuICAgIDI6IFt7dGl0bGU6J3Bvb3JhZ2FzJywgZHVlZGF0ZTogJzIwMjItMDItMDInLCBkZXNjcmlwdGlvbjogJ3Bvb3Bvb0FTREFTREFTRCcsIHByaW9yaXR5OiAnbG93JywgaW5kZXg6IDB9LHt0aXRsZToncG9vcmFnYXMnLCBkdWVkYXRlOiAnMjAyMi0wMi0wMicsIGRlc2NyaXB0aW9uOiAncG9vcG9vQVNEQVNEQVNEJywgcHJpb3JpdHk6ICdsb3cnLCBpbmRleDogMH0se3RpdGxlOidwb29yYWdhcycsIGR1ZWRhdGU6ICcyMDIyLTAyLTAyJywgZGVzY3JpcHRpb246ICdwb29wb29BU0RBU0RBU0QnLCBwcmlvcml0eTogJ2xvdycsIGluZGV4OiAwfSx7dGl0bGU6J3Bvb3JhZ2FzJywgZHVlZGF0ZTogJzIwMjMtMDItMDInLCBkZXNjcmlwdGlvbjogJ3Bvb3Bvb0FTREFTREFTRCcsIHByaW9yaXR5OiAnbG93JywgaW5kZXg6IDB9XSxcbiAgICAzOiBbe3RpdGxlOidwb29yYWdhcycsIGR1ZWRhdGU6ICcyMDIyLTAyLTAyJywgZGVzY3JpcHRpb246ICdwb29wb29BU0RBU0RBU0QnLCBwcmlvcml0eTogJ2xvdycsIGluZGV4OiAwfV0sXG4gICAgNTogW3t0aXRsZToncG9vcmFnYXMnLCBkdWVkYXRlOiAnMjAyMi0wMi0wMicsIGRlc2NyaXB0aW9uOiAncG9vcG9vQVNEQVNEQVNEJywgcHJpb3JpdHk6ICdsb3cnLCBpbmRleDogMH1dXG59XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IHtcbiAgXG59XG5cbi8vMjogW3t0aXRsZToncG9vcmFnYXMnLCBkdWVkYXRlOiAnMjAyMi0wMi0wMicsIGRlc2NyaXB0aW9uOiAncG9vcG9vQVNEQVNEQVNEJywgcHJpb3JpdHk6ICdsb3cnLCBpbmRleDogMH0sXVxuLy8gYWRkIHRoZSBhcHByb3ByaWF0ZSB0b2RvJ3MgdG8gdGhlc2UgcHJvamVjdHMgYmFzZWQgb24gdGhlIGFwcHJvcHJpYXRlIGRhdGVzIChkYXRlZm4hKVxuXG5cblxuLy8gbm93IHdlIGRldmVsb3AgYSB3YXkgdG8gYWRkIGN1c3RvbSBwcm9qZWN0cyB0byB0aGlzIG9iamVjdCFcbi8vIGlmIHZpc3VhbGx5IHdlIHdhbnQgdG8gc2hvdyBhIGN1ZSB0aGF0IHRoaXMgaXMgYW4gb3B0aW9uIHdlIGNhbiBkbyB0aGlzIHdpdGggdGhlIFVJIG9yIG5vdCBpbiB0aGlzIGZ1bmN0aW9uXG4vLyBydW5uaW5nIGFkZCBwcm9qZWN0IHNob3VsZCBhZGQgYSBwcm9cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0bmFtZSkge1xuXG4gICAgXG5cbiAgICAvLyBpZiB3ZSB0cnkgdG8gYWRkIGEgcHJvamVjdCBuYW1lIHRoYXQgYWxyZWFkeSBleGlzdHMsIHdlIGNhbiByZXR1cm4gYSBjb25maXJtYXRpb24gXG5pZiAocHJvamVjdG5hbWUgPT0gXCJcIikge3JldHVybn1cblxuXG5pZiAocHJvamVjdHMuaGFzT3duUHJvcGVydHkocHJvamVjdG5hbWUpKSB7XG4gICAgY29uc29sZS5sb2coJ2xvZ3MgdGhhdCBwcm9wZXJ0eSBleGlzdHMgd2l0aGluIHByb2plY3RtYWtlci5qcycpXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgICAvLyBjYWxsIGRvbSBmdW5jdGlvbiB0byB0dXJuIGZpZWxkIHJlZCBhbmQgY2hhbmdlIHBsYWNlaG9sZGVyIHRvIGV4aXN0cyFcblxuXG59XG5cbiAgICAvLyBlbHNlIHdlIGFkZCB0aGUgcHJvamVjdCBuYW1lIGFzIGEga2V5IHRvIHByb2plY3Qgb2JqZWN0XG4gICAgLy8gZXZlbnR1YWxseSB3ZSB3aWxsIGFwcGVuZCB0b2RvJ3MgdG8gdGhlc2UgY2F0ZWdvcmllcyBiYXNlZCBvbiBzb21lIGNyaXRlcmlhIFxuXG5wcm9qZWN0c1twcm9qZWN0bmFtZV0gPSBbXVxubGV0IHJlc3VsdCA9IHByb2plY3RuYW1lXG5cblxuXG5jb25zb2xlLmxvZygnREVGQVVMVCBQUk9KUyBBUlJBWSEhIScpXG5jb25zb2xlLmxvZyhwcm9qZWN0cywgJ2N1cnJlbnQgcHJvamVjdHMgb2JqZWN0Jyk7XG5cbiAgXG5cblxuXG5yZXR1cm47XG59XG5cblxuXG5cblxuXG5cbi8vIHdlIHdhbnQgdG8gZGVsZXRlIHRoZXkga2V5IG9mIHRoZSBwcm9qZWN0XG4vLyBmdW5jdGlvbiB0byByZW1vdmUgdGhlIHByb2plY3QsIHdlIG5lZWQgYSB3YXkgdG8gZGV0ZXJtaW5lIHdoaWNoIHBvc2l0aW9uXG4vLyBpbiB0aGUgYXJyYXkgdGhlIHByb2plY3QgaXMgdG8gcmVtb3ZlXG4vL3N1cHBseSB0aGlzIGFuIGluZGV4IGFzIHRoaXMgd2lsbCBiZSB2aXN1YWwgYmFzZWRcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0KSB7XG5cbiAgICAgICAgZGVsZXRlIHByb2plY3RzW3Byb2plY3RdXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxufVxuXG5cblxuLy8gZnVuY3Rpb24gYmVsb3cgcmVwb3J0cyBuYW1lIG9mIHByb2plY3RzIGN1cnJlbnRseSBpbiBsaXN0IGFuZCBhcHBlbmQgdG8gYW4gYXJyYXlcblxuZXhwb3J0IGxldCBjdXJyZW50Q3VzdG9tUHJvamVjdHMgPSBbXVxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIGN1cnJlbnRDdXN0b21Qcm9qZWN0cyA9IFtdXG5cblxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IGluIHByb2plY3RzKSB7XG4gICAgICAgICAgICBjdXJyZW50Q3VzdG9tUHJvamVjdHMucHVzaChwcm9qZWN0KVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG5cblxuICAgIH0iLCIvLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSB0b2RvIG9iamVjdHNcbmZ1bmN0aW9uIHVwZGF0ZUFsbCgpIHtcbiAgICBcbiAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcbiAgICAudGhlbigobykgPT4ge1xuICAgICAgICBvLmRlZmF1bHRwcm9qZWN0cy5hbGwgPSBbXVxuXG4gICAgICAgIC8vIGxvb3Agb3ZlciBhbGwgY3VzdG9tIHByb2plY3QgYXJyYXlzIGFuZCBhZGQgdG8gQWxsXG4gICBcbiAgICAgICBmb3IgKGxldCBwcm9wIGluIG8ucHJvamVjdHMpIHtcbiAgICAgICAgLy8gaW4gaGVyZSBwcm9wIGlzIGVhY2ggb2JqZWN0IGtleSBjb3JyZXNwb25kaW5nIHRvIHRoZSBhcnJheSBob2xkaW5nIG9iamVjdHNcbiAgICAgICAgLy8gb2YgZWFjaCBwcm9qZWN0cyB0b2RvJ3NcblxuICAgICAgICAvLyB3ZSBtdXN0IGxvb3Agb3ZlciBlYWNoIHByb3AgYW5kIGFkZCB0byBBbGwhXG5cblxuXG5cbiAgICAgICB9XG4gICAgfSlcbn1cblxubGV0IHRvZG9jYXRjaDEgPSBbXVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgIHByb2plY3QsIGNvbXBsZXRlZCA9IGZhbHNlKSBcbnsgICBcblxuXG4gICAgbGV0IG9iaiA9IHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCAgcHJvamVjdCwgY29tcGxldGVkfVxuICAgIFxuXG4gICAgY29uc29sZS5sb2coICd0b2RvY2F0Y2gnKVxuXG4gICAgLy8gd2hlbiB3ZSBtYWtlIGEgdG9kbywgd2Ugd2FudCB0byByZWZyZXNoIHRoZSBhbGwgb2JqZWN0IGFnYWluIHdoaWNoIGlzIGEgY29sbGVjdGlvbiBvZiBldmVyeSBwcm9qZWN0cyBvYmplY3QhXG4gICAgdXBkYXRlQWxsKCkgXG4gICAgXG5cbiAgICBcblxuXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCAgcHJvamVjdCwgY29tcGxldGVkfVxufVxuXG5cbi8vIHdlIHdhbm5hIHVwZGF0ZSB0aGUgYWxsIG9iamVjdCBhZnRlciBtYWtpbmcgYSB0b2RvIVxuXG4vLyBmdW5jdGlvbiB0byBzZXQgY29tcGxldGUgb2YgdG9kbyBvYmplY3QgdG8gdHJ1ZSB0YWtlcyBhIHRvZG8gb2JqZWN0IGFzIGFuIGFyZ3VtZW50XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb21wbGV0ZShvYmopIHtcbiAgICBcbiAgICBpZiAob2JqLmNvbXBsZXRlZCkge1xuICAgIFxuICAgICAgICBvYmouY29tcGxldGVkID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIG9iai5jb21wbGV0ZWQgPSB0cnVlXG4gICAgcmV0dXJuXG59XG5cblxuLy8gZnVuY3Rpb24gdG8gY2hhbmdlIHByaW9yaXR5IGJldHdlZW4gbG93IG1lZGl1bSBhbmQgaGlnaCB0YWtlcyBhIHRvZG8gb2JqZWN0IGFzIGFyZ3VtZW50IGFuZCBhIHNlbGVjdGlvblxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkob2JqLCBwcmlvcml0eSkge1xuICAgIG9iai5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgcmV0dXJuXG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVG9kbyhwcm9qZWN0LCBpbmRleCkge1xuXG4gICAgLy8gd2UgaGF2ZSBhIHNwZWNpZmljIHByb2plY3QsIGFuZCBpbmRleCBvZiB0aGUgdG9kbyFcbiAgICAvLyBkZWxldGUgaXQgZnJvbSB0aGUgYXJyYXkhXG4gICAgaW1wb3J0ICgnLi9wcm9qZWN0bWFrZXIuanMnKVxuICAgIC50aGVuKChvYmopID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCwgaW5kZXgsIG9iai5wcm9qZWN0cylcbiAgICAgICAgb2JqLnByb2plY3RzW3Byb2plY3RdLnNwbGljZShpbmRleCwgMSlcblxuICAgICAgICAvLyBhZnRlciB3ZSBjdXQgdGhlIHRvZG8gb3V0LCB3ZSBtdXN0IHJlZnJlc2ggdGhlIHByb3BlciBpbmRleGVzIG9mIHRoZSBhcnJheSBlbGVtZW50cyBhZ2FpbiFcbiAgICAgICAgb2JqLnByb2plY3RzW3Byb2plY3RdLmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xuICAgICAgICAgICAgZWxlbS5pbmRleCA9IGluZFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FSUkFZTE9PUCcsIGVsZW0pXG4gICAgICAgICAgfSlcblxuXG4gICAgICAgIFxuICAgIH0pXG4gICAgXG5cblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==