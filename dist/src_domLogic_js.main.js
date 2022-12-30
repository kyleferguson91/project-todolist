"use strict";
(self["webpackChunkproject_todolist"] = self["webpackChunkproject_todolist"] || []).push([["src_domLogic_js"],{

/***/ "./src/domLogic.js":
/*!*************************!*\
  !*** ./src/domLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialRenderTodo": () => (/* binding */ initialRenderTodo),
/* harmony export */   "populateDisplay": () => (/* binding */ populateDisplay),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderCustomProjects": () => (/* binding */ renderCustomProjects)
/* harmony export */ });
/* harmony import */ var acorn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! acorn */ "./node_modules/acorn/dist/acorn.mjs");
// use this function to render custom projects array that is served from project maker
// we will update the array from the project makers function when needed then run the render





function renderCustomProjects() {

 // clear custom project dom elements! otherwise it will just add to them!
 // div container class is customprojects
 
 document.querySelector('.customprojects').innerHTML = ""



 

// import project names from array created in project maker 

 




__webpack_require__.e(/*! import() */ "src_projectmaker_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
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

        __webpack_require__.e(/*! import() */ "src_buttonlogic_js").then(__webpack_require__.bind(__webpack_require__, /*! ./buttonlogic.js */ "./src/buttonlogic.js"))
        .then((obj) => 
        obj.deleteProjects())


        // 

    })


    __webpack_require__.e(/*! import() */ "src_buttonlogic_js").then(__webpack_require__.bind(__webpack_require__, /*! ./buttonlogic.js */ "./src/buttonlogic.js"))
    .then((o) => {
      
        o.addButtonLogic();
    })

})

selectChoiceCreation()


}


// function to populate display of projects in todo creation based on current projects

function selectChoiceCreation() {

    __webpack_require__.e(/*! import() */ "src_projectmaker_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
    .then((obj) => {
  
    // remove all content to start
    document.querySelector('.selectoptions').innerHTML = ""

// get the names of the custom projects and create elements

obj.currentCustomProjects.forEach((elem) => {


    let option = document.createElement('option')

     option.textContent = elem
     option.value = elem

        document.querySelector('.selectoptions').appendChild(option)

})




})}


//master function to render all components

function render(){



 
__webpack_require__.e(/*! import() */ "src_buttonlogic_js").then(__webpack_require__.bind(__webpack_require__, /*! ./buttonlogic.js */ "./src/buttonlogic.js"))
.then((o) => {

    renderCustomProjects()
    initialRenderTodo()
    o.modalLogic()
    o.addButtonLogic()

})

}



function populateDisplay(projectobject ) {
let project = ""
let projectset = ""

const todoarea = document.querySelector('.todosection')

todoarea.innerHTML = ""

if (projectobject == "all") {projectset = "defaultprojects"}

else if (projectobject == "today") {projectset = "defaultprojects"}

else if (projectobject == "thisweek") {projectset = "defaultprojects"}

else {projectset = 'projects'}

console.log(projectobject, projectset, 'object set')




    __webpack_require__.e(/*! import() */ "src_projectmaker_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
    .then((o) => {
        console.log(o.projects, 'projlog')
        for (let prop of o[projectset][projectobject]) {
            console.log(prop, 'propp')
                // create a div to house the content set the styles

            let todocontentdiv = document.createElement('div')
            todocontentdiv.classList.add('todocontent')

// create a p element to house the title

           let text = document.createElement('p')

// since we are looping through an array of objects, set the title to 

           text.textContent = prop.title

           todocontentdiv.appendChild(text)

           text.classList.add('todotitles')

            todoarea.appendChild(todocontentdiv)

            const buttoncontainer = document.createElement('div')
            buttoncontainer.classList.add('buttoncontainer')



           for (let i = 0; i<3; i++) {

            let button = document.createElement('button')
            button.classList.add('todobutton')
            button.textContent = "Stuff"
            buttoncontainer.appendChild(button)
           }
           todocontentdiv.appendChild(buttoncontainer)




            console.log(prop)
        }
    })
}




// draw the todo display!

function initialRenderTodo() {
    
    // get the todo area and set it equal to the all array in defaultprojects
    // start by clearing the area
   
    populateDisplay('all')
   
    // loop the array and draw dom elements for each one!


    



}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2RvbUxvZ2ljX2pzLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDc0M7QUFDRjtBQUNwQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0tBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0pBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSwrSkFBMEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtLQUEyQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtKQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLG9DQUFvQztBQUNwQztBQUNBLHVDQUF1QztBQUN2QztBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtLQUEyQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixLQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9kb21Mb2dpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1c2UgdGhpcyBmdW5jdGlvbiB0byByZW5kZXIgY3VzdG9tIHByb2plY3RzIGFycmF5IHRoYXQgaXMgc2VydmVkIGZyb20gcHJvamVjdCBtYWtlclxyXG4vLyB3ZSB3aWxsIHVwZGF0ZSB0aGUgYXJyYXkgZnJvbSB0aGUgcHJvamVjdCBtYWtlcnMgZnVuY3Rpb24gd2hlbiBuZWVkZWQgdGhlbiBydW4gdGhlIHJlbmRlclxyXG5cclxuaW1wb3J0IHsgZGVmYXVsdE9wdGlvbnMgfSBmcm9tICdhY29ybidcclxuaW1wb3J0IHsgZWwgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckN1c3RvbVByb2plY3RzKCkge1xyXG5cclxuIC8vIGNsZWFyIGN1c3RvbSBwcm9qZWN0IGRvbSBlbGVtZW50cyEgb3RoZXJ3aXNlIGl0IHdpbGwganVzdCBhZGQgdG8gdGhlbSFcclxuIC8vIGRpdiBjb250YWluZXIgY2xhc3MgaXMgY3VzdG9tcHJvamVjdHNcclxuIFxyXG4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbXByb2plY3RzJykuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuXHJcblxyXG4gXHJcblxyXG4vLyBpbXBvcnQgcHJvamVjdCBuYW1lcyBmcm9tIGFycmF5IGNyZWF0ZWQgaW4gcHJvamVjdCBtYWtlciBcclxuXHJcbiBcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4udGhlbigob2JqKSA9PiB7XHJcblxyXG4gICAgLy8gdGhpcyBjcmVhdGVzIGEgbmV3IGFycmF5IGJhc2VkIG9uIGN1cnJlbnQgY29udGVudHMgb2YgcHJvamVjdCBvYmplY3RcclxuICAgIC8vIHdoaWNoIHdlIGNhbiByZW5kZXIgZnJvbVxyXG5cclxuXHJcbiAgICBvYmouZ2V0UHJvamVjdHMoKVxyXG5cclxuICAgIC8vYXJyYXkgYmVsb3cgaXMgY3VycmVudCBuYW1lcyBvZiBjdXNvbSBwcm9qZWN0c1xyXG4gICAgXHJcbiAgICBjb25zdCBjdXN0b21wcm9qZWN0c2xpc3QgPSBvYmouY3VycmVudEN1c3RvbVByb2plY3RzXHJcblxyXG4gICAgLy8gbG9vcCB0aGlzIGFycmF5IFxyXG4gICAgY3VzdG9tcHJvamVjdHNsaXN0LmZvckVhY2goKGVsZW0saW5kLGFycikgPT4ge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgcHJvamVjdCBjb29udGFpbmVyIFxyXG5cclxuICAgICAgICBsZXQgcHJvamVjdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gYWRkIHN0eWxlIHRvIHByb2plY3QgY29udGFpbmVyXHJcblxyXG4gICAgICAgIHByb2plY3RkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdGJ1dHRvbnMnKVxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYnV0dG9ucyBmb3IgdGl0bGUgYW5kIGRsZWxldGUgb2JqZWN0c1xyXG5cclxuICAgICAgICBsZXQgcHJvamVjdGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21wcm9qZWN0dGl0bGUnKVxyXG4gICAgICAgIHByb2plY3RidXR0b24uZGF0YXNldC50aXRsZSA9IGVsZW1cclxuXHJcbiAgICAgICAgLy8gc2V0IHRpdGxlIHRvIHRoZSBhcHByb3ByaWF0ZSBjdXN0b20gcHJvamVjdFxyXG5cclxuICAgICAgICBwcm9qZWN0YnV0dG9uLnRleHRDb250ZW50ID0gZWxlbVxyXG4gXHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICBsZXQgZGVsZXRlcHJvamVjdGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgZGVsZXRlcHJvamVjdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVwcm9qZWN0YnV0dG9uJylcclxuICAgICAgICBkZWxldGVwcm9qZWN0YnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCJcclxuXHJcblxyXG4gICAgICAgIC8vIGFwcGVuZCB0aXRsZSBhbmQgY2xvc2UgdG8gcHJvamVjdCBkaXZcclxuXHJcbiAgICAgICAgcHJvamVjdGRpdi5hcHBlbmRDaGlsZChwcm9qZWN0YnV0dG9uKVxyXG4gICAgICAgIHByb2plY3RkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlcHJvamVjdGJ1dHRvbilcclxuICBcclxuICBcclxuXHJcbiAgICAgICAgLy8gd2Ugd2FudCB0byBhcHBlbmQgdGhlc2UgdG8gdGhlIGRpdiB3aGljaCBob3VzZXMgY3VzdG9tIHByb2plY3RzXHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbXByb2plY3RzdmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21wcm9qZWN0cycpXHJcblxyXG4gICAgICAgIGN1c3RvbXByb2plY3Rzdmlldy5hcHBlbmRDaGlsZChwcm9qZWN0ZGl2KVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyB3ZSBuZWVkIGEgd2F5IHRvIGFzc29jaWF0ZSB0aGUgcHJvamVjdCB0aXRsZSBhbmQgdGhlIGNsb3NlIGJ1dHRvblxyXG4gICAgICAgIC8vIHdlIGNvdWxkIHVzZSBhIGRhdGEgYXR0cmlidXRlIHNldCB0byB0aGUga2V5IHNpbmNlIHRoaXMgd2lsbCBiZSB1bmlxdWVcclxuICAgICAgICAvLyBnaXZlIHRoZSBob3VzaW5nIGRpdiBhbmQgdGhlIGNsb3NlIGJ1dHRvbiB0aGUgc2FtZSBkYXRhIGF0dHJpYnV0ZVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBkZWxldGVwcm9qZWN0YnV0dG9uLmRhdGFzZXQudGl0bGUgPSBlbGVtXHJcbiAgICAgICAgcHJvamVjdGRpdi5kYXRhc2V0LnRpdGxlID0gZWxlbVxyXG5cclxuICAgICAgICAvLyBhcHBlbmQgdGhlIGZ1bmN0aW9uIHRvIGFkZCBidXR0b24gbG9naWMgdG8gdXBkYXRlZCBkb20gZWxlbWVudHNcclxuXHJcbiAgICAgICAgaW1wb3J0KCcuL2J1dHRvbmxvZ2ljLmpzJylcclxuICAgICAgICAudGhlbigob2JqKSA9PiBcclxuICAgICAgICBvYmouZGVsZXRlUHJvamVjdHMoKSlcclxuXHJcblxyXG4gICAgICAgIC8vIFxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIGltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbiAgICAudGhlbigobykgPT4ge1xyXG4gICAgICBcclxuICAgICAgICBvLmFkZEJ1dHRvbkxvZ2ljKCk7XHJcbiAgICB9KVxyXG5cclxufSlcclxuXHJcbnNlbGVjdENob2ljZUNyZWF0aW9uKClcclxuXHJcblxyXG59XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gcG9wdWxhdGUgZGlzcGxheSBvZiBwcm9qZWN0cyBpbiB0b2RvIGNyZWF0aW9uIGJhc2VkIG9uIGN1cnJlbnQgcHJvamVjdHNcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdENob2ljZUNyZWF0aW9uKCkge1xyXG5cclxuICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gIFxyXG4gICAgLy8gcmVtb3ZlIGFsbCBjb250ZW50IHRvIHN0YXJ0XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3B0aW9ucycpLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbi8vIGdldCB0aGUgbmFtZXMgb2YgdGhlIGN1c3RvbSBwcm9qZWN0cyBhbmQgY3JlYXRlIGVsZW1lbnRzXHJcblxyXG5vYmouY3VycmVudEN1c3RvbVByb2plY3RzLmZvckVhY2goKGVsZW0pID0+IHtcclxuXHJcblxyXG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcblxyXG4gICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGVsZW1cclxuICAgICBvcHRpb24udmFsdWUgPSBlbGVtXHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RvcHRpb25zJykuYXBwZW5kQ2hpbGQob3B0aW9uKVxyXG5cclxufSlcclxuXHJcblxyXG5cclxuXHJcbn0pfVxyXG5cclxuXHJcbi8vbWFzdGVyIGZ1bmN0aW9uIHRvIHJlbmRlciBhbGwgY29tcG9uZW50c1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcigpe1xyXG5cclxuXHJcblxyXG4gXHJcbmltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbi50aGVuKChvKSA9PiB7XHJcblxyXG4gICAgcmVuZGVyQ3VzdG9tUHJvamVjdHMoKVxyXG4gICAgaW5pdGlhbFJlbmRlclRvZG8oKVxyXG4gICAgby5tb2RhbExvZ2ljKClcclxuICAgIG8uYWRkQnV0dG9uTG9naWMoKVxyXG5cclxufSlcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlRGlzcGxheShwcm9qZWN0b2JqZWN0ICkge1xyXG5sZXQgcHJvamVjdCA9IFwiXCJcclxubGV0IHByb2plY3RzZXQgPSBcIlwiXHJcblxyXG5jb25zdCB0b2RvYXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2VjdGlvbicpXHJcblxyXG50b2RvYXJlYS5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG5pZiAocHJvamVjdG9iamVjdCA9PSBcImFsbFwiKSB7cHJvamVjdHNldCA9IFwiZGVmYXVsdHByb2plY3RzXCJ9XHJcblxyXG5lbHNlIGlmIChwcm9qZWN0b2JqZWN0ID09IFwidG9kYXlcIikge3Byb2plY3RzZXQgPSBcImRlZmF1bHRwcm9qZWN0c1wifVxyXG5cclxuZWxzZSBpZiAocHJvamVjdG9iamVjdCA9PSBcInRoaXN3ZWVrXCIpIHtwcm9qZWN0c2V0ID0gXCJkZWZhdWx0cHJvamVjdHNcIn1cclxuXHJcbmVsc2Uge3Byb2plY3RzZXQgPSAncHJvamVjdHMnfVxyXG5cclxuY29uc29sZS5sb2cocHJvamVjdG9iamVjdCwgcHJvamVjdHNldCwgJ29iamVjdCBzZXQnKVxyXG5cclxuXHJcblxyXG5cclxuICAgIGltcG9ydCgnLi9wcm9qZWN0bWFrZXIuanMnKVxyXG4gICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhvLnByb2plY3RzLCAncHJvamxvZycpXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcCBvZiBvW3Byb2plY3RzZXRdW3Byb2plY3RvYmplY3RdKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb3AsICdwcm9wcCcpXHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBkaXYgdG8gaG91c2UgdGhlIGNvbnRlbnQgc2V0IHRoZSBzdHlsZXNcclxuXHJcbiAgICAgICAgICAgIGxldCB0b2RvY29udGVudGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHRvZG9jb250ZW50ZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9jb250ZW50JylcclxuXHJcbi8vIGNyZWF0ZSBhIHAgZWxlbWVudCB0byBob3VzZSB0aGUgdGl0bGVcclxuXHJcbiAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHJcbi8vIHNpbmNlIHdlIGFyZSBsb29waW5nIHRocm91Z2ggYW4gYXJyYXkgb2Ygb2JqZWN0cywgc2V0IHRoZSB0aXRsZSB0byBcclxuXHJcbiAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHByb3AudGl0bGVcclxuXHJcbiAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYuYXBwZW5kQ2hpbGQodGV4dClcclxuXHJcbiAgICAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0b2RvdGl0bGVzJylcclxuXHJcbiAgICAgICAgICAgIHRvZG9hcmVhLmFwcGVuZENoaWxkKHRvZG9jb250ZW50ZGl2KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgYnV0dG9uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbmNvbnRhaW5lcicpXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8MzsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9idXR0b24nKVxyXG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlN0dWZmXCJcclxuICAgICAgICAgICAgYnV0dG9uY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbilcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgdG9kb2NvbnRlbnRkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uY29udGFpbmVyKVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvcClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyBkcmF3IHRoZSB0b2RvIGRpc3BsYXkhXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFJlbmRlclRvZG8oKSB7XHJcbiAgICBcclxuICAgIC8vIGdldCB0aGUgdG9kbyBhcmVhIGFuZCBzZXQgaXQgZXF1YWwgdG8gdGhlIGFsbCBhcnJheSBpbiBkZWZhdWx0cHJvamVjdHNcclxuICAgIC8vIHN0YXJ0IGJ5IGNsZWFyaW5nIHRoZSBhcmVhXHJcbiAgIFxyXG4gICAgcG9wdWxhdGVEaXNwbGF5KCdhbGwnKVxyXG4gICBcclxuICAgIC8vIGxvb3AgdGhlIGFycmF5IGFuZCBkcmF3IGRvbSBlbGVtZW50cyBmb3IgZWFjaCBvbmUhXHJcblxyXG5cclxuICAgIFxyXG5cclxuXHJcblxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9