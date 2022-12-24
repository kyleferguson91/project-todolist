"use strict";
(self["webpackChunkproject_todolist"] = self["webpackChunkproject_todolist"] || []).push([["src_projectmaker_js"],{

/***/ "./src/projectmaker.js":
/*!*****************************!*\
  !*** ./src/projectmaker.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "customprojects": () => (/* binding */ customprojects),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
// default project array, this will not change!

const defualtprojects =  ['All', 'Today', 'Week']


// projects will be titles that get added onto an array, we can delete them etc..
// starts with placeholder text, and removes it for the first project
// performs a check to ensure that subsequent additions don't replace the first item


const customprojects = ['Add a Custom Todo List']

function addProject(project) {
    if (customprojects[0] == 'Add a Custom Todo List') {
        customprojects[0] = project
        return
    }
    customprojects.push(project)
}

// function to remove the project, we need a way to determine which position
// in the array the project is to remove
//supply this an index as this will be visual based!

function removeProject(ind) {
customprojects.splice(ind,1)
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RtYWtlcl9qcy5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvcHJvamVjdG1ha2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGRlZmF1bHQgcHJvamVjdCBhcnJheSwgdGhpcyB3aWxsIG5vdCBjaGFuZ2UhXHJcblxyXG5jb25zdCBkZWZ1YWx0cHJvamVjdHMgPSAgWydBbGwnLCAnVG9kYXknLCAnV2VlayddXHJcblxyXG5cclxuLy8gcHJvamVjdHMgd2lsbCBiZSB0aXRsZXMgdGhhdCBnZXQgYWRkZWQgb250byBhbiBhcnJheSwgd2UgY2FuIGRlbGV0ZSB0aGVtIGV0Yy4uXHJcbi8vIHN0YXJ0cyB3aXRoIHBsYWNlaG9sZGVyIHRleHQsIGFuZCByZW1vdmVzIGl0IGZvciB0aGUgZmlyc3QgcHJvamVjdFxyXG4vLyBwZXJmb3JtcyBhIGNoZWNrIHRvIGVuc3VyZSB0aGF0IHN1YnNlcXVlbnQgYWRkaXRpb25zIGRvbid0IHJlcGxhY2UgdGhlIGZpcnN0IGl0ZW1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgY3VzdG9tcHJvamVjdHMgPSBbJ0FkZCBhIEN1c3RvbSBUb2RvIExpc3QnXVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgaWYgKGN1c3RvbXByb2plY3RzWzBdID09ICdBZGQgYSBDdXN0b20gVG9kbyBMaXN0Jykge1xyXG4gICAgICAgIGN1c3RvbXByb2plY3RzWzBdID0gcHJvamVjdFxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY3VzdG9tcHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB0byByZW1vdmUgdGhlIHByb2plY3QsIHdlIG5lZWQgYSB3YXkgdG8gZGV0ZXJtaW5lIHdoaWNoIHBvc2l0aW9uXHJcbi8vIGluIHRoZSBhcnJheSB0aGUgcHJvamVjdCBpcyB0byByZW1vdmVcclxuLy9zdXBwbHkgdGhpcyBhbiBpbmRleCBhcyB0aGlzIHdpbGwgYmUgdmlzdWFsIGJhc2VkIVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaW5kKSB7XHJcbmN1c3RvbXByb2plY3RzLnNwbGljZShpbmQsMSlcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==