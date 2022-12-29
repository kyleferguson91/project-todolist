"use strict";
(self["webpackChunkproject_todolist"] = self["webpackChunkproject_todolist"] || []).push([["src_projectmaker_js-_94ac0"],{

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
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _buttonlogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonlogic */ "./src/buttonlogic.js");
// projects will need to be capable of storing which todo's belong to them
// it looks cleaner to store as an object of project names and have the values equal to
// arrays that contain the relevent todo objects 



// we can come up with a master projects object, if in the UI we would like to separate the display
// it is easier to have a separate default project object as we can just loop over it 
// to populate the display and not have to differentiate between default vs non

const defaultprojects = {
    all: ['all'],
    today: ['today'],
    thisweek: ['this week'],
}


const projects = {

}

// add the appropriate todo's to these projects based on the appropriate dates (datefn!)



// now we develop a way to add custom projects to this object!
// if visually we want to show a cue that this is an option we can do this with the UI or not in this function
// running add project should add a pro


function addProject(projectname) {
let test = []
    for (let letter of projectname) {
        if (letter == " ") {
            test.push("")
        }
        else {test.push(letter)}
    }
    projectname = test.join("")

  
    // if we try to add a project name that already exists, we can return a confirmation 
if (projectname == "") {return}


if (projects.hasOwnProperty(projectname)) {
    console.log('logs that property exists within projectmaker.js')
 alert('Project exists, please choose another name!')

}

    // else we add the project name as a key to project object
    // eventually we will append todo's to these categories based on some criteria 

projects[projectname] = []

console.log(projects, projectname)

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RtYWtlcl9qcy1fOTRhYzAubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9wcm9qZWN0bWFrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcHJvamVjdHMgd2lsbCBuZWVkIHRvIGJlIGNhcGFibGUgb2Ygc3RvcmluZyB3aGljaCB0b2RvJ3MgYmVsb25nIHRvIHRoZW1cclxuLy8gaXQgbG9va3MgY2xlYW5lciB0byBzdG9yZSBhcyBhbiBvYmplY3Qgb2YgcHJvamVjdCBuYW1lcyBhbmQgaGF2ZSB0aGUgdmFsdWVzIGVxdWFsIHRvXHJcbi8vIGFycmF5cyB0aGF0IGNvbnRhaW4gdGhlIHJlbGV2ZW50IHRvZG8gb2JqZWN0cyBcclxuXHJcbmltcG9ydCB7IHRlc3QgfSBmcm9tIFwiLi9idXR0b25sb2dpY1wiXHJcblxyXG4vLyB3ZSBjYW4gY29tZSB1cCB3aXRoIGEgbWFzdGVyIHByb2plY3RzIG9iamVjdCwgaWYgaW4gdGhlIFVJIHdlIHdvdWxkIGxpa2UgdG8gc2VwYXJhdGUgdGhlIGRpc3BsYXlcclxuLy8gaXQgaXMgZWFzaWVyIHRvIGhhdmUgYSBzZXBhcmF0ZSBkZWZhdWx0IHByb2plY3Qgb2JqZWN0IGFzIHdlIGNhbiBqdXN0IGxvb3Agb3ZlciBpdCBcclxuLy8gdG8gcG9wdWxhdGUgdGhlIGRpc3BsYXkgYW5kIG5vdCBoYXZlIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBkZWZhdWx0IHZzIG5vblxyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRwcm9qZWN0cyA9IHtcclxuICAgIGFsbDogWydhbGwnXSxcclxuICAgIHRvZGF5OiBbJ3RvZGF5J10sXHJcbiAgICB0aGlzd2VlazogWyd0aGlzIHdlZWsnXSxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IHtcclxuXHJcbn1cclxuXHJcbi8vIGFkZCB0aGUgYXBwcm9wcmlhdGUgdG9kbydzIHRvIHRoZXNlIHByb2plY3RzIGJhc2VkIG9uIHRoZSBhcHByb3ByaWF0ZSBkYXRlcyAoZGF0ZWZuISlcclxuXHJcblxyXG5cclxuLy8gbm93IHdlIGRldmVsb3AgYSB3YXkgdG8gYWRkIGN1c3RvbSBwcm9qZWN0cyB0byB0aGlzIG9iamVjdCFcclxuLy8gaWYgdmlzdWFsbHkgd2Ugd2FudCB0byBzaG93IGEgY3VlIHRoYXQgdGhpcyBpcyBhbiBvcHRpb24gd2UgY2FuIGRvIHRoaXMgd2l0aCB0aGUgVUkgb3Igbm90IGluIHRoaXMgZnVuY3Rpb25cclxuLy8gcnVubmluZyBhZGQgcHJvamVjdCBzaG91bGQgYWRkIGEgcHJvXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdG5hbWUpIHtcclxubGV0IHRlc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgbGV0dGVyIG9mIHByb2plY3RuYW1lKSB7XHJcbiAgICAgICAgaWYgKGxldHRlciA9PSBcIiBcIikge1xyXG4gICAgICAgICAgICB0ZXN0LnB1c2goXCJcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7dGVzdC5wdXNoKGxldHRlcil9XHJcbiAgICB9XHJcbiAgICBwcm9qZWN0bmFtZSA9IHRlc3Quam9pbihcIlwiKVxyXG5cclxuICBcclxuICAgIC8vIGlmIHdlIHRyeSB0byBhZGQgYSBwcm9qZWN0IG5hbWUgdGhhdCBhbHJlYWR5IGV4aXN0cywgd2UgY2FuIHJldHVybiBhIGNvbmZpcm1hdGlvbiBcclxuaWYgKHByb2plY3RuYW1lID09IFwiXCIpIHtyZXR1cm59XHJcblxyXG5cclxuaWYgKHByb2plY3RzLmhhc093blByb3BlcnR5KHByb2plY3RuYW1lKSkge1xyXG4gICAgY29uc29sZS5sb2coJ2xvZ3MgdGhhdCBwcm9wZXJ0eSBleGlzdHMgd2l0aGluIHByb2plY3RtYWtlci5qcycpXHJcbiBhbGVydCgnUHJvamVjdCBleGlzdHMsIHBsZWFzZSBjaG9vc2UgYW5vdGhlciBuYW1lIScpXHJcblxyXG59XHJcblxyXG4gICAgLy8gZWxzZSB3ZSBhZGQgdGhlIHByb2plY3QgbmFtZSBhcyBhIGtleSB0byBwcm9qZWN0IG9iamVjdFxyXG4gICAgLy8gZXZlbnR1YWxseSB3ZSB3aWxsIGFwcGVuZCB0b2RvJ3MgdG8gdGhlc2UgY2F0ZWdvcmllcyBiYXNlZCBvbiBzb21lIGNyaXRlcmlhIFxyXG5cclxucHJvamVjdHNbcHJvamVjdG5hbWVdID0gW11cclxuXHJcbmNvbnNvbGUubG9nKHByb2plY3RzLCBwcm9qZWN0bmFtZSlcclxuXHJcbnJldHVybjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gd2Ugd2FudCB0byBkZWxldGUgdGhleSBrZXkgb2YgdGhlIHByb2plY3RcclxuLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBwcm9qZWN0LCB3ZSBuZWVkIGEgd2F5IHRvIGRldGVybWluZSB3aGljaCBwb3NpdGlvblxyXG4vLyBpbiB0aGUgYXJyYXkgdGhlIHByb2plY3QgaXMgdG8gcmVtb3ZlXHJcbi8vc3VwcGx5IHRoaXMgYW4gaW5kZXggYXMgdGhpcyB3aWxsIGJlIHZpc3VhbCBiYXNlZFxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcclxuXHJcbiAgICAgICAgZGVsZXRlIHByb2plY3RzW3Byb2plY3RdXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbn1cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gYmVsb3cgcmVwb3J0cyBuYW1lIG9mIHByb2plY3RzIGN1cnJlbnRseSBpbiBsaXN0IGFuZCBhcHBlbmQgdG8gYW4gYXJyYXlcclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudEN1c3RvbVByb2plY3RzID0gW11cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xyXG4gICAgY3VycmVudEN1c3RvbVByb2plY3RzID0gW11cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IHByb2plY3QgaW4gcHJvamVjdHMpIHtcclxuICAgICAgICAgICAgY3VycmVudEN1c3RvbVByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9