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

const defaultprojects = {
    all: [{title:'all'}, {title:'all'}],
    today: [{title:'today'}, {title:'today'}],
    thisweek: [{title:'thisweek'}, {title:'thisweek'}],
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
 alert('Project exists, please choose another name!')

}

    // else we add the project name as a key to project object
    // eventually we will append todo's to these categories based on some criteria 

projects[projectname] = []
let result = projectname

projects[projectname].push({title:result})
projects[projectname].push({title:result})
console.log(projects)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RtYWtlcl9qcy5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFdBQVcsWUFBWSxHQUFHLFlBQVk7QUFDdEMsYUFBYSxjQUFjLEdBQUcsY0FBYztBQUM1QyxnQkFBZ0IsaUJBQWlCLEdBQUcsaUJBQWlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekMsNEJBQTRCLGFBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9wcm9qZWN0bWFrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcHJvamVjdHMgd2lsbCBuZWVkIHRvIGJlIGNhcGFibGUgb2Ygc3RvcmluZyB3aGljaCB0b2RvJ3MgYmVsb25nIHRvIHRoZW1cclxuLy8gaXQgbG9va3MgY2xlYW5lciB0byBzdG9yZSBhcyBhbiBvYmplY3Qgb2YgcHJvamVjdCBuYW1lcyBhbmQgaGF2ZSB0aGUgdmFsdWVzIGVxdWFsIHRvXHJcbi8vIGFycmF5cyB0aGF0IGNvbnRhaW4gdGhlIHJlbGV2ZW50IHRvZG8gb2JqZWN0cyBcclxuXHJcbi8vIHdlIGNhbiBjb21lIHVwIHdpdGggYSBtYXN0ZXIgcHJvamVjdHMgb2JqZWN0LCBpZiBpbiB0aGUgVUkgd2Ugd291bGQgbGlrZSB0byBzZXBhcmF0ZSB0aGUgZGlzcGxheVxyXG4vLyBpdCBpcyBlYXNpZXIgdG8gaGF2ZSBhIHNlcGFyYXRlIGRlZmF1bHQgcHJvamVjdCBvYmplY3QgYXMgd2UgY2FuIGp1c3QgbG9vcCBvdmVyIGl0IFxyXG4vLyB0byBwb3B1bGF0ZSB0aGUgZGlzcGxheSBhbmQgbm90IGhhdmUgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGRlZmF1bHQgdnMgbm9uXHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdHByb2plY3RzID0ge1xyXG4gICAgYWxsOiBbe3RpdGxlOidhbGwnfSwge3RpdGxlOidhbGwnfV0sXHJcbiAgICB0b2RheTogW3t0aXRsZTondG9kYXknfSwge3RpdGxlOid0b2RheSd9XSxcclxuICAgIHRoaXN3ZWVrOiBbe3RpdGxlOid0aGlzd2Vlayd9LCB7dGl0bGU6J3RoaXN3ZWVrJ31dLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0ge1xyXG4gICBcclxufVxyXG5cclxuLy8gYWRkIHRoZSBhcHByb3ByaWF0ZSB0b2RvJ3MgdG8gdGhlc2UgcHJvamVjdHMgYmFzZWQgb24gdGhlIGFwcHJvcHJpYXRlIGRhdGVzIChkYXRlZm4hKVxyXG5cclxuXHJcblxyXG4vLyBub3cgd2UgZGV2ZWxvcCBhIHdheSB0byBhZGQgY3VzdG9tIHByb2plY3RzIHRvIHRoaXMgb2JqZWN0IVxyXG4vLyBpZiB2aXN1YWxseSB3ZSB3YW50IHRvIHNob3cgYSBjdWUgdGhhdCB0aGlzIGlzIGFuIG9wdGlvbiB3ZSBjYW4gZG8gdGhpcyB3aXRoIHRoZSBVSSBvciBub3QgaW4gdGhpcyBmdW5jdGlvblxyXG4vLyBydW5uaW5nIGFkZCBwcm9qZWN0IHNob3VsZCBhZGQgYSBwcm9cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0bmFtZSkge1xyXG5cclxuICAgIFxyXG5cclxuICAgIC8vIGlmIHdlIHRyeSB0byBhZGQgYSBwcm9qZWN0IG5hbWUgdGhhdCBhbHJlYWR5IGV4aXN0cywgd2UgY2FuIHJldHVybiBhIGNvbmZpcm1hdGlvbiBcclxuaWYgKHByb2plY3RuYW1lID09IFwiXCIpIHtyZXR1cm59XHJcblxyXG5cclxuaWYgKHByb2plY3RzLmhhc093blByb3BlcnR5KHByb2plY3RuYW1lKSkge1xyXG4gICAgY29uc29sZS5sb2coJ2xvZ3MgdGhhdCBwcm9wZXJ0eSBleGlzdHMgd2l0aGluIHByb2plY3RtYWtlci5qcycpXHJcbiBhbGVydCgnUHJvamVjdCBleGlzdHMsIHBsZWFzZSBjaG9vc2UgYW5vdGhlciBuYW1lIScpXHJcblxyXG59XHJcblxyXG4gICAgLy8gZWxzZSB3ZSBhZGQgdGhlIHByb2plY3QgbmFtZSBhcyBhIGtleSB0byBwcm9qZWN0IG9iamVjdFxyXG4gICAgLy8gZXZlbnR1YWxseSB3ZSB3aWxsIGFwcGVuZCB0b2RvJ3MgdG8gdGhlc2UgY2F0ZWdvcmllcyBiYXNlZCBvbiBzb21lIGNyaXRlcmlhIFxyXG5cclxucHJvamVjdHNbcHJvamVjdG5hbWVdID0gW11cclxubGV0IHJlc3VsdCA9IHByb2plY3RuYW1lXHJcblxyXG5wcm9qZWN0c1twcm9qZWN0bmFtZV0ucHVzaCh7dGl0bGU6cmVzdWx0fSlcclxucHJvamVjdHNbcHJvamVjdG5hbWVdLnB1c2goe3RpdGxlOnJlc3VsdH0pXHJcbmNvbnNvbGUubG9nKHByb2plY3RzKVxyXG5cclxuY29uc29sZS5sb2cocHJvamVjdHMsIHByb2plY3RuYW1lKVxyXG5cclxucmV0dXJuO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyB3ZSB3YW50IHRvIGRlbGV0ZSB0aGV5IGtleSBvZiB0aGUgcHJvamVjdFxyXG4vLyBmdW5jdGlvbiB0byByZW1vdmUgdGhlIHByb2plY3QsIHdlIG5lZWQgYSB3YXkgdG8gZGV0ZXJtaW5lIHdoaWNoIHBvc2l0aW9uXHJcbi8vIGluIHRoZSBhcnJheSB0aGUgcHJvamVjdCBpcyB0byByZW1vdmVcclxuLy9zdXBwbHkgdGhpcyBhbiBpbmRleCBhcyB0aGlzIHdpbGwgYmUgdmlzdWFsIGJhc2VkXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xyXG5cclxuICAgICAgICBkZWxldGUgcHJvamVjdHNbcHJvamVjdF1cclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcclxufVxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBiZWxvdyByZXBvcnRzIG5hbWUgb2YgcHJvamVjdHMgY3VycmVudGx5IGluIGxpc3QgYW5kIGFwcGVuZCB0byBhbiBhcnJheVxyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50Q3VzdG9tUHJvamVjdHMgPSBbXVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XHJcbiAgICBjdXJyZW50Q3VzdG9tUHJvamVjdHMgPSBbXVxyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBpbiBwcm9qZWN0cykge1xyXG4gICAgICAgICAgICBjdXJyZW50Q3VzdG9tUHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=