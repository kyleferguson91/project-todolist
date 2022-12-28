"use strict";
(self["webpackChunkproject_todolist"] = self["webpackChunkproject_todolist"] || []).push([["src_formlogic_js"],{

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




function formController() {


const title = document.querySelector('#title').value
const description = document.querySelector('#description').value
const duedate = document.querySelector('#duedate').value
const priority = document.querySelector('#priority').value
const note = document.querySelector('#note').value
const project = document.querySelector('#project').value
const completed = document.querySelector('#completed').checked


Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./todomodule.js */ "./src/todomodule.js"))
.then((obj) => {
    ;(0,_todomodule__WEBPACK_IMPORTED_MODULE_0__.createTodo)(title,description,duedate,priority,note,project,completed)
})

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2Zvcm1sb2dpY19qcy5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtJQUF5QjtBQUN6QjtBQUNBLElBQUksd0RBQVU7QUFDZCxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvZm9ybWxvZ2ljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tICcuL3RvZG9tb2R1bGUnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtQ29udHJvbGxlcigpIHtcclxuXHJcblxyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlXHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWVcclxuY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJykudmFsdWVcclxuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZVxyXG5jb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUnKS52YWx1ZVxyXG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKS52YWx1ZVxyXG5jb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGVkJykuY2hlY2tlZFxyXG5cclxuXHJcbmltcG9ydCgnLi90b2RvbW9kdWxlLmpzJylcclxuLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgY3JlYXRlVG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVkYXRlLHByaW9yaXR5LG5vdGUscHJvamVjdCxjb21wbGV0ZWQpXHJcbn0pXHJcblxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9