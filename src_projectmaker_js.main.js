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
/* harmony export */   "currentCustomProjects": () => (/* binding */ currentCustomProjects),
/* harmony export */   "defaultprojects": () => (/* binding */ defaultprojects),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "projects": () => (/* binding */ projects),
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


const projects = {
   
}

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

projects[projectname].push({title:result})
projects[projectname].push({title:result})
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RtYWtlcl9qcy5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsYUFBYTtBQUN6Qyw0QkFBNEIsYUFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvcHJvamVjdG1ha2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHByb2plY3RzIHdpbGwgbmVlZCB0byBiZSBjYXBhYmxlIG9mIHN0b3Jpbmcgd2hpY2ggdG9kbydzIGJlbG9uZyB0byB0aGVtXHJcbi8vIGl0IGxvb2tzIGNsZWFuZXIgdG8gc3RvcmUgYXMgYW4gb2JqZWN0IG9mIHByb2plY3QgbmFtZXMgYW5kIGhhdmUgdGhlIHZhbHVlcyBlcXVhbCB0b1xyXG4vLyBhcnJheXMgdGhhdCBjb250YWluIHRoZSByZWxldmVudCB0b2RvIG9iamVjdHMgXHJcblxyXG4vLyB3ZSBjYW4gY29tZSB1cCB3aXRoIGEgbWFzdGVyIHByb2plY3RzIG9iamVjdCwgaWYgaW4gdGhlIFVJIHdlIHdvdWxkIGxpa2UgdG8gc2VwYXJhdGUgdGhlIGRpc3BsYXlcclxuLy8gaXQgaXMgZWFzaWVyIHRvIGhhdmUgYSBzZXBhcmF0ZSBkZWZhdWx0IHByb2plY3Qgb2JqZWN0IGFzIHdlIGNhbiBqdXN0IGxvb3Agb3ZlciBpdCBcclxuLy8gdG8gcG9wdWxhdGUgdGhlIGRpc3BsYXkgYW5kIG5vdCBoYXZlIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBkZWZhdWx0IHZzIG5vblxyXG5cclxuLy8gYWxsIGtleSB3aWxsIGhvdXNlIGFycmF5IHRoYXQgcGFyc2VzIGFsbCBhdmFpbGFibGUgcHJvamVjdCBvYmplY3RzIGFuZCBsaXN0cyB0aGVtXHJcbi8vIHRoZSB0b2RheSBhbmQgdGhpc3dlZWsgYXJyYXkgd2lsbCBoYXZlIHRvIGRvIHdpdGggc29ydGluZyBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdHByb2plY3RzID0ge1xyXG4gICAgYWxsOiBbXSxcclxuICAgIHRvZGF5OiBbXSxcclxuICAgIHRoaXN3ZWVrOiBbXSxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IHtcclxuICAgXHJcbn1cclxuXHJcbi8vIGFkZCB0aGUgYXBwcm9wcmlhdGUgdG9kbydzIHRvIHRoZXNlIHByb2plY3RzIGJhc2VkIG9uIHRoZSBhcHByb3ByaWF0ZSBkYXRlcyAoZGF0ZWZuISlcclxuXHJcblxyXG5cclxuLy8gbm93IHdlIGRldmVsb3AgYSB3YXkgdG8gYWRkIGN1c3RvbSBwcm9qZWN0cyB0byB0aGlzIG9iamVjdCFcclxuLy8gaWYgdmlzdWFsbHkgd2Ugd2FudCB0byBzaG93IGEgY3VlIHRoYXQgdGhpcyBpcyBhbiBvcHRpb24gd2UgY2FuIGRvIHRoaXMgd2l0aCB0aGUgVUkgb3Igbm90IGluIHRoaXMgZnVuY3Rpb25cclxuLy8gcnVubmluZyBhZGQgcHJvamVjdCBzaG91bGQgYWRkIGEgcHJvXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdG5hbWUpIHtcclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBpZiB3ZSB0cnkgdG8gYWRkIGEgcHJvamVjdCBuYW1lIHRoYXQgYWxyZWFkeSBleGlzdHMsIHdlIGNhbiByZXR1cm4gYSBjb25maXJtYXRpb24gXHJcbmlmIChwcm9qZWN0bmFtZSA9PSBcIlwiKSB7cmV0dXJufVxyXG5cclxuXHJcbmlmIChwcm9qZWN0cy5oYXNPd25Qcm9wZXJ0eShwcm9qZWN0bmFtZSkpIHtcclxuICAgIGNvbnNvbGUubG9nKCdsb2dzIHRoYXQgcHJvcGVydHkgZXhpc3RzIHdpdGhpbiBwcm9qZWN0bWFrZXIuanMnKVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG4gICAgLy8gY2FsbCBkb20gZnVuY3Rpb24gdG8gdHVybiBmaWVsZCByZWQgYW5kIGNoYW5nZSBwbGFjZWhvbGRlciB0byBleGlzdHMhXHJcblxyXG5cclxufVxyXG5cclxuICAgIC8vIGVsc2Ugd2UgYWRkIHRoZSBwcm9qZWN0IG5hbWUgYXMgYSBrZXkgdG8gcHJvamVjdCBvYmplY3RcclxuICAgIC8vIGV2ZW50dWFsbHkgd2Ugd2lsbCBhcHBlbmQgdG9kbydzIHRvIHRoZXNlIGNhdGVnb3JpZXMgYmFzZWQgb24gc29tZSBjcml0ZXJpYSBcclxuXHJcbnByb2plY3RzW3Byb2plY3RuYW1lXSA9IFtdXHJcbmxldCByZXN1bHQgPSBwcm9qZWN0bmFtZVxyXG5cclxucHJvamVjdHNbcHJvamVjdG5hbWVdLnB1c2goe3RpdGxlOnJlc3VsdH0pXHJcbnByb2plY3RzW3Byb2plY3RuYW1lXS5wdXNoKHt0aXRsZTpyZXN1bHR9KVxyXG5jb25zb2xlLmxvZyhwcm9qZWN0cywgJ2N1cnJlbnQgcHJvamVjdHMgb2JqZWN0Jyk7XHJcblxyXG5cclxuXHJcblxyXG5yZXR1cm47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIHdlIHdhbnQgdG8gZGVsZXRlIHRoZXkga2V5IG9mIHRoZSBwcm9qZWN0XHJcbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgcHJvamVjdCwgd2UgbmVlZCBhIHdheSB0byBkZXRlcm1pbmUgd2hpY2ggcG9zaXRpb25cclxuLy8gaW4gdGhlIGFycmF5IHRoZSBwcm9qZWN0IGlzIHRvIHJlbW92ZVxyXG4vL3N1cHBseSB0aGlzIGFuIGluZGV4IGFzIHRoaXMgd2lsbCBiZSB2aXN1YWwgYmFzZWRcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0KSB7XHJcblxyXG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0c1twcm9qZWN0XVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG59XHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGJlbG93IHJlcG9ydHMgbmFtZSBvZiBwcm9qZWN0cyBjdXJyZW50bHkgaW4gbGlzdCBhbmQgYXBwZW5kIHRvIGFuIGFycmF5XHJcblxyXG5leHBvcnQgbGV0IGN1cnJlbnRDdXN0b21Qcm9qZWN0cyA9IFtdXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcclxuICAgIGN1cnJlbnRDdXN0b21Qcm9qZWN0cyA9IFtdXHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IGluIHByb2plY3RzKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDdXN0b21Qcm9qZWN0cy5wdXNoKHByb2plY3QpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==