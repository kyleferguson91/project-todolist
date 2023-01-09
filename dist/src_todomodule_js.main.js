"use strict";
(self["webpackChunkproject_todolist"] = self["webpackChunkproject_todolist"] || []).push([["src_todomodule_js"],{

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
    
    __webpack_require__.e(/*! import() */ "src_projectmaker_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
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
    __webpack_require__.e(/*! import() */ "src_projectmaker_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectmaker.js */ "./src/projectmaker.js"))
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RvZG9tb2R1bGVfanMubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrS0FBMkI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrS0FBNEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL3RvZG9tb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdG9kbyBvYmplY3RzXHJcbmZ1bmN0aW9uIHVwZGF0ZUFsbCgpIHtcclxuICAgIFxyXG4gICAgaW1wb3J0KCcuL3Byb2plY3RtYWtlci5qcycpXHJcbiAgICAudGhlbigobykgPT4ge1xyXG4gICAgICAgIG8uZGVmYXVsdHByb2plY3RzLmFsbCA9IFtdXHJcblxyXG4gICAgICAgIC8vIGxvb3Agb3ZlciBhbGwgY3VzdG9tIHByb2plY3QgYXJyYXlzIGFuZCBhZGQgdG8gQWxsXHJcbiAgIFxyXG4gICAgICAgZm9yIChsZXQgcHJvcCBpbiBvLnByb2plY3RzKSB7XHJcbiAgICAgICAgLy8gaW4gaGVyZSBwcm9wIGlzIGVhY2ggb2JqZWN0IGtleSBjb3JyZXNwb25kaW5nIHRvIHRoZSBhcnJheSBob2xkaW5nIG9iamVjdHNcclxuICAgICAgICAvLyBvZiBlYWNoIHByb2plY3RzIHRvZG8nc1xyXG5cclxuICAgICAgICAvLyB3ZSBtdXN0IGxvb3Agb3ZlciBlYWNoIHByb3AgYW5kIGFkZCB0byBBbGwhXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxubGV0IHRvZG9jYXRjaDEgPSBbXVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCAgcHJvamVjdCwgY29tcGxldGVkID0gZmFsc2UpIFxyXG57ICAgXHJcblxyXG5cclxuICAgIGxldCBvYmogPSB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgIHByb2plY3QsIGNvbXBsZXRlZH1cclxuICAgIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKCAndG9kb2NhdGNoJylcclxuXHJcbiAgICAvLyB3aGVuIHdlIG1ha2UgYSB0b2RvLCB3ZSB3YW50IHRvIHJlZnJlc2ggdGhlIGFsbCBvYmplY3QgYWdhaW4gd2hpY2ggaXMgYSBjb2xsZWN0aW9uIG9mIGV2ZXJ5IHByb2plY3RzIG9iamVjdCFcclxuICAgIHVwZGF0ZUFsbCgpIFxyXG4gICAgXHJcblxyXG5cclxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgIHByb2plY3QsIGNvbXBsZXRlZH1cclxufVxyXG5cclxuXHJcbi8vIHdlIHdhbm5hIHVwZGF0ZSB0aGUgYWxsIG9iamVjdCBhZnRlciBtYWtpbmcgYSB0b2RvIVxyXG5cclxuLy8gZnVuY3Rpb24gdG8gc2V0IGNvbXBsZXRlIG9mIHRvZG8gb2JqZWN0IHRvIHRydWUgdGFrZXMgYSB0b2RvIG9iamVjdCBhcyBhbiBhcmd1bWVudFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXBsZXRlKG9iaikge1xyXG4gICAgXHJcbiAgICBpZiAob2JqLmNvbXBsZXRlZCkge1xyXG4gICAgXHJcbiAgICAgICAgb2JqLmNvbXBsZXRlZCA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBvYmouY29tcGxldGVkID0gdHJ1ZVxyXG4gICAgcmV0dXJuXHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgcHJpb3JpdHkgYmV0d2VlbiBsb3cgbWVkaXVtIGFuZCBoaWdoIHRha2VzIGEgdG9kbyBvYmplY3QgYXMgYXJndW1lbnQgYW5kIGEgc2VsZWN0aW9uXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkob2JqLCBwcmlvcml0eSkge1xyXG4gICAgb2JqLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgIHJldHVyblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUb2RvKHByb2plY3QsIGluZGV4KSB7XHJcblxyXG4gICAgLy8gd2UgaGF2ZSBhIHNwZWNpZmljIHByb2plY3QsIGFuZCBpbmRleCBvZiB0aGUgdG9kbyFcclxuICAgIC8vIGRlbGV0ZSBpdCBmcm9tIHRoZSBhcnJheSFcclxuICAgIGltcG9ydCAoJy4vcHJvamVjdG1ha2VyLmpzJylcclxuICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LCBpbmRleCwgb2JqLnByb2plY3RzKVxyXG4gICAgICAgIG9iai5wcm9qZWN0c1twcm9qZWN0XS5zcGxpY2UoaW5kZXgsIDEpXHJcblxyXG4gICAgICAgIC8vIGFmdGVyIHdlIGN1dCB0aGUgdG9kbyBvdXQsIHdlIG11c3QgcmVmcmVzaCB0aGUgcHJvcGVyIGluZGV4ZXMgb2YgdGhlIGFycmF5IGVsZW1lbnRzIGFnYWluIVxyXG4gICAgICAgIG9iai5wcm9qZWN0c1twcm9qZWN0XS5mb3JFYWNoKChlbGVtLGluZCxhcnIpID0+IHtcclxuICAgICAgICAgICAgZWxlbS5pbmRleCA9IGluZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQVJSQVlMT09QJywgZWxlbSlcclxuICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBcclxuXHJcblxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9