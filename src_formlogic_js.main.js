"use strict";
(self["webpackChunkproject_todolist"] = self["webpackChunkproject_todolist"] || []).push([["src_formlogic_js"],{

/***/ "./src/formlogic.js":
/*!**************************!*\
  !*** ./src/formlogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formController": () => (/* binding */ formController),
/* harmony export */   "populateProjectschoices": () => (/* binding */ populateProjectschoices)
/* harmony export */ });
/* harmony import */ var _todomodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todomodule */ "./src/todomodule.js");




function formController() {


const title = document.querySelector('#title').value
const description = document.querySelector('#description').value
const duedate = document.querySelector('#duedate').value


const project = document.querySelector('#project').value
const completed = document.querySelector('#completed').checked


// logic to determine priority
// series of radio buttons loop through them

const priority = document.querySelectorAll('.prioritychoice')
let prioritychoice = ""

priority.forEach((elem,ind,arr) => {

    // figure out which is checked

    if (elem.checked) {

        prioritychoice = elem.value
        console.log(prioritychoice)
    }



})


Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./todomodule.js */ "./src/todomodule.js"))
.then((obj) => {
    ;(0,_todomodule__WEBPACK_IMPORTED_MODULE_0__.createTodo)(title,description,duedate,prioritychoice,project,completed)
})

}



function populateProjectschoices() {

// this function will be used to create a dynamic list of projects currently active so we can store a todo in them





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2Zvcm1sb2dpY19qcy5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGtJQUF5QjtBQUN6QjtBQUNBLElBQUksd0RBQVU7QUFDZCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9mb3JtbG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy90b2RvbW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tICcuL3RvZG9tb2R1bGUnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtQ29udHJvbGxlcigpIHtcclxuXHJcblxyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlXHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWVcclxuY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJykudmFsdWVcclxuXHJcblxyXG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKS52YWx1ZVxyXG5jb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGVkJykuY2hlY2tlZFxyXG5cclxuXHJcbi8vIGxvZ2ljIHRvIGRldGVybWluZSBwcmlvcml0eVxyXG4vLyBzZXJpZXMgb2YgcmFkaW8gYnV0dG9ucyBsb29wIHRocm91Z2ggdGhlbVxyXG5cclxuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpb3JpdHljaG9pY2UnKVxyXG5sZXQgcHJpb3JpdHljaG9pY2UgPSBcIlwiXHJcblxyXG5wcmlvcml0eS5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuXHJcbiAgICAvLyBmaWd1cmUgb3V0IHdoaWNoIGlzIGNoZWNrZWRcclxuXHJcbiAgICBpZiAoZWxlbS5jaGVja2VkKSB7XHJcblxyXG4gICAgICAgIHByaW9yaXR5Y2hvaWNlID0gZWxlbS52YWx1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByaW9yaXR5Y2hvaWNlKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59KVxyXG5cclxuXHJcbmltcG9ydCgnLi90b2RvbW9kdWxlLmpzJylcclxuLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgY3JlYXRlVG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVkYXRlLHByaW9yaXR5Y2hvaWNlLHByb2plY3QsY29tcGxldGVkKVxyXG59KVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0c2Nob2ljZXMoKSB7XHJcblxyXG4vLyB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgYSBkeW5hbWljIGxpc3Qgb2YgcHJvamVjdHMgY3VycmVudGx5IGFjdGl2ZSBzbyB3ZSBjYW4gc3RvcmUgYSB0b2RvIGluIHRoZW1cclxuXHJcblxyXG5cclxuXHJcblxyXG59IiwiLy8gZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdG9kbyBvYmplY3RzXHJcblxyXG5cclxubGV0IHRvZG9jYXRjaDEgPSBbXVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCAgcHJvamVjdCwgY29tcGxldGVkID0gZmFsc2UpIFxyXG57ICAgXHJcblxyXG4gICAgbGV0IG9iaiA9IHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCAgcHJvamVjdCwgY29tcGxldGVkfVxyXG4gICAgXHJcbiAgICB0b2RvY2F0Y2gxLnB1c2gob2JqKVxyXG4gICAgY29uc29sZS5sb2codG9kb2NhdGNoMSwgJ3RvZG9jYXRjaCcpXHJcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksICBwcm9qZWN0LCBjb21wbGV0ZWR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gc2V0IGNvbXBsZXRlIG9mIHRvZG8gb2JqZWN0IHRvIHRydWUgdGFrZXMgYSB0b2RvIG9iamVjdCBhcyBhbiBhcmd1bWVudFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXBsZXRlKG9iaikge1xyXG4gICAgXHJcbiAgICBpZiAob2JqLmNvbXBsZXRlZCkge1xyXG4gICAgXHJcbiAgICAgICAgb2JqLmNvbXBsZXRlZCA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBvYmouY29tcGxldGVkID0gdHJ1ZVxyXG4gICAgcmV0dXJuXHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgcHJpb3JpdHkgYmV0d2VlbiBsb3cgbWVkaXVtIGFuZCBoaWdoIHRha2VzIGEgdG9kbyBvYmplY3QgYXMgYXJndW1lbnQgYW5kIGEgc2VsZWN0aW9uXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkob2JqLCBwcmlvcml0eSkge1xyXG4gICAgb2JqLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgIHJldHVyblxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==