"use strict";
(self["webpackChunkproject_todolist"] = self["webpackChunkproject_todolist"] || []).push([["src_domLogic_js"],{

/***/ "./src/domLogic.js":
/*!*************************!*\
  !*** ./src/domLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderCustomProjects": () => (/* binding */ renderCustomProjects)
/* harmony export */ });
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
        projectbutton.id = "custom1"

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
    o.modalLogic()
    o.addButtonLogic()
    renderCustomProjects()
  

})

}



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2RvbUxvZ2ljX2pzLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtLQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtKQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksK0pBQTBCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrS0FBMkI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrSkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvZG9tTG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdXNlIHRoaXMgZnVuY3Rpb24gdG8gcmVuZGVyIGN1c3RvbSBwcm9qZWN0cyBhcnJheSB0aGF0IGlzIHNlcnZlZCBmcm9tIHByb2plY3QgbWFrZXJcclxuLy8gd2Ugd2lsbCB1cGRhdGUgdGhlIGFycmF5IGZyb20gdGhlIHByb2plY3QgbWFrZXJzIGZ1bmN0aW9uIHdoZW4gbmVlZGVkIHRoZW4gcnVuIHRoZSByZW5kZXJcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ3VzdG9tUHJvamVjdHMoKSB7XHJcblxyXG4gLy8gY2xlYXIgY3VzdG9tIHByb2plY3QgZG9tIGVsZW1lbnRzISBvdGhlcndpc2UgaXQgd2lsbCBqdXN0IGFkZCB0byB0aGVtIVxyXG4gLy8gZGl2IGNvbnRhaW5lciBjbGFzcyBpcyBjdXN0b21wcm9qZWN0c1xyXG4gXHJcbiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tcHJvamVjdHMnKS5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG5cclxuXHJcbiBcclxuXHJcbi8vIGltcG9ydCBwcm9qZWN0IG5hbWVzIGZyb20gYXJyYXkgY3JlYXRlZCBpbiBwcm9qZWN0IG1ha2VyIFxyXG5cclxuIFxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbi50aGVuKChvYmopID0+IHtcclxuXHJcbiAgICAvLyB0aGlzIGNyZWF0ZXMgYSBuZXcgYXJyYXkgYmFzZWQgb24gY3VycmVudCBjb250ZW50cyBvZiBwcm9qZWN0IG9iamVjdFxyXG4gICAgLy8gd2hpY2ggd2UgY2FuIHJlbmRlciBmcm9tXHJcblxyXG5cclxuICAgIG9iai5nZXRQcm9qZWN0cygpXHJcblxyXG4gICAgLy9hcnJheSBiZWxvdyBpcyBjdXJyZW50IG5hbWVzIG9mIGN1c29tIHByb2plY3RzXHJcbiAgICBcclxuICAgIGNvbnN0IGN1c3RvbXByb2plY3RzbGlzdCA9IG9iai5jdXJyZW50Q3VzdG9tUHJvamVjdHNcclxuXHJcbiAgICAvLyBsb29wIHRoaXMgYXJyYXkgXHJcbiAgICBjdXN0b21wcm9qZWN0c2xpc3QuZm9yRWFjaCgoZWxlbSxpbmQsYXJyKSA9PiB7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBwcm9qZWN0IGNvb250YWluZXIgXHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBcclxuICAgICAgICAvLyBhZGQgc3R5bGUgdG8gcHJvamVjdCBjb250YWluZXJcclxuXHJcbiAgICAgICAgcHJvamVjdGRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0YnV0dG9ucycpXHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBidXR0b25zIGZvciB0aXRsZSBhbmQgZGxlbGV0ZSBvYmplY3RzXHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0YnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBwcm9qZWN0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbXByb2plY3R0aXRsZScpXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbi5pZCA9IFwiY3VzdG9tMVwiXHJcblxyXG4gICAgICAgIC8vIHNldCB0aXRsZSB0byB0aGUgYXBwcm9wcmlhdGUgY3VzdG9tIHByb2plY3RcclxuXHJcbiAgICAgICAgcHJvamVjdGJ1dHRvbi50ZXh0Q29udGVudCA9IGVsZW1cclxuIFxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRlbGV0ZXByb2plY3RidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGRlbGV0ZXByb2plY3RidXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlcHJvamVjdGJ1dHRvbicpXHJcbiAgICAgICAgZGVsZXRlcHJvamVjdGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiXHJcblxyXG5cclxuICAgICAgICAvLyBhcHBlbmQgdGl0bGUgYW5kIGNsb3NlIHRvIHByb2plY3QgZGl2XHJcblxyXG4gICAgICAgIHByb2plY3RkaXYuYXBwZW5kQ2hpbGQocHJvamVjdGJ1dHRvbilcclxuICAgICAgICBwcm9qZWN0ZGl2LmFwcGVuZENoaWxkKGRlbGV0ZXByb2plY3RidXR0b24pXHJcbiAgXHJcbiAgXHJcblxyXG4gICAgICAgIC8vIHdlIHdhbnQgdG8gYXBwZW5kIHRoZXNlIHRvIHRoZSBkaXYgd2hpY2ggaG91c2VzIGN1c3RvbSBwcm9qZWN0c1xyXG5cclxuICAgICAgICBjb25zdCBjdXN0b21wcm9qZWN0c3ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tcHJvamVjdHMnKVxyXG5cclxuICAgICAgICBjdXN0b21wcm9qZWN0c3ZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdGRpdilcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gd2UgbmVlZCBhIHdheSB0byBhc3NvY2lhdGUgdGhlIHByb2plY3QgdGl0bGUgYW5kIHRoZSBjbG9zZSBidXR0b25cclxuICAgICAgICAvLyB3ZSBjb3VsZCB1c2UgYSBkYXRhIGF0dHJpYnV0ZSBzZXQgdG8gdGhlIGtleSBzaW5jZSB0aGlzIHdpbGwgYmUgdW5pcXVlXHJcbiAgICAgICAgLy8gZ2l2ZSB0aGUgaG91c2luZyBkaXYgYW5kIHRoZSBjbG9zZSBidXR0b24gdGhlIHNhbWUgZGF0YSBhdHRyaWJ1dGVcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgZGVsZXRlcHJvamVjdGJ1dHRvbi5kYXRhc2V0LnRpdGxlID0gZWxlbVxyXG4gICAgICAgIHByb2plY3RkaXYuZGF0YXNldC50aXRsZSA9IGVsZW1cclxuXHJcbiAgICAgICAgLy8gYXBwZW5kIHRoZSBmdW5jdGlvbiB0byBhZGQgYnV0dG9uIGxvZ2ljIHRvIHVwZGF0ZWQgZG9tIGVsZW1lbnRzXHJcblxyXG4gICAgICAgIGltcG9ydCgnLi9idXR0b25sb2dpYy5qcycpXHJcbiAgICAgICAgLnRoZW4oKG9iaikgPT4gXHJcbiAgICAgICAgb2JqLmRlbGV0ZVByb2plY3RzKCkpXHJcblxyXG5cclxuICAgICAgICAvLyBcclxuXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBpbXBvcnQoJy4vYnV0dG9ubG9naWMuanMnKVxyXG4gICAgLnRoZW4oKG8pID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgby5hZGRCdXR0b25Mb2dpYygpO1xyXG4gICAgfSlcclxuXHJcbn0pXHJcblxyXG5zZWxlY3RDaG9pY2VDcmVhdGlvbigpXHJcblxyXG5cclxufVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIHBvcHVsYXRlIGRpc3BsYXkgb2YgcHJvamVjdHMgaW4gdG9kbyBjcmVhdGlvbiBiYXNlZCBvbiBjdXJyZW50IHByb2plY3RzXHJcblxyXG5mdW5jdGlvbiBzZWxlY3RDaG9pY2VDcmVhdGlvbigpIHtcclxuXHJcbiAgICBpbXBvcnQoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgIC50aGVuKChvYmopID0+IHtcclxuICBcclxuICAgIC8vIHJlbW92ZSBhbGwgY29udGVudCB0byBzdGFydFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdG9wdGlvbnMnKS5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4vLyBnZXQgdGhlIG5hbWVzIG9mIHRoZSBjdXN0b20gcHJvamVjdHMgYW5kIGNyZWF0ZSBlbGVtZW50c1xyXG5cclxub2JqLmN1cnJlbnRDdXN0b21Qcm9qZWN0cy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblxyXG5cclxuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG5cclxuICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBlbGVtXHJcbiAgICAgb3B0aW9uLnZhbHVlID0gZWxlbVxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3B0aW9ucycpLmFwcGVuZENoaWxkKG9wdGlvbilcclxuXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG59KX1cclxuXHJcblxyXG4vL21hc3RlciBmdW5jdGlvbiB0byByZW5kZXIgYWxsIGNvbXBvbmVudHNcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoKXtcclxuXHJcblxyXG5cclxuIFxyXG5pbXBvcnQoJy4vYnV0dG9ubG9naWMuanMnKVxyXG4udGhlbigobykgPT4ge1xyXG4gICAgby5tb2RhbExvZ2ljKClcclxuICAgIG8uYWRkQnV0dG9uTG9naWMoKVxyXG4gICAgcmVuZGVyQ3VzdG9tUHJvamVjdHMoKVxyXG4gIFxyXG5cclxufSlcclxuXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==