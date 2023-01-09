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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RtYWtlcl9qcy5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxTQUFTLG1HQUFtRyxFQUFFLG1HQUFtRyxFQUFFLG1HQUFtRyxFQUFFLG1HQUFtRztBQUMzWixTQUFTLG1HQUFtRztBQUM1RyxTQUFTLG1HQUFtRztBQUM1RztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPLG1HQUFtRztBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9wcm9qZWN0bWFrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcHJvamVjdHMgd2lsbCBuZWVkIHRvIGJlIGNhcGFibGUgb2Ygc3RvcmluZyB3aGljaCB0b2RvJ3MgYmVsb25nIHRvIHRoZW1cclxuLy8gaXQgbG9va3MgY2xlYW5lciB0byBzdG9yZSBhcyBhbiBvYmplY3Qgb2YgcHJvamVjdCBuYW1lcyBhbmQgaGF2ZSB0aGUgdmFsdWVzIGVxdWFsIHRvXHJcbi8vIGFycmF5cyB0aGF0IGNvbnRhaW4gdGhlIHJlbGV2ZW50IHRvZG8gb2JqZWN0cyBcclxuXHJcbi8vIHdlIGNhbiBjb21lIHVwIHdpdGggYSBtYXN0ZXIgcHJvamVjdHMgb2JqZWN0LCBpZiBpbiB0aGUgVUkgd2Ugd291bGQgbGlrZSB0byBzZXBhcmF0ZSB0aGUgZGlzcGxheVxyXG4vLyBpdCBpcyBlYXNpZXIgdG8gaGF2ZSBhIHNlcGFyYXRlIGRlZmF1bHQgcHJvamVjdCBvYmplY3QgYXMgd2UgY2FuIGp1c3QgbG9vcCBvdmVyIGl0IFxyXG4vLyB0byBwb3B1bGF0ZSB0aGUgZGlzcGxheSBhbmQgbm90IGhhdmUgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGRlZmF1bHQgdnMgbm9uXHJcblxyXG4vLyBhbGwga2V5IHdpbGwgaG91c2UgYXJyYXkgdGhhdCBwYXJzZXMgYWxsIGF2YWlsYWJsZSBwcm9qZWN0IG9iamVjdHMgYW5kIGxpc3RzIHRoZW1cclxuLy8gdGhlIHRvZGF5IGFuZCB0aGlzd2VlayBhcnJheSB3aWxsIGhhdmUgdG8gZG8gd2l0aCBzb3J0aW5nIFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0cHJvamVjdHMgPSB7XHJcbiAgICBhbGw6IFtdLFxyXG4gICAgdG9kYXk6IFtdLFxyXG4gICAgdGhpc3dlZWs6IFtdLFxyXG59XHJcblxyXG4vLyB0aGlzIGZ1bmN0aW9uIHRvIHBvcHVsYXRlIGRlZmF1bHQgcHJvamVjdHMsIHdoaWNoIHdpbGwgbG9vcCBvdmVyIGN1c3RvbSBwcm9qZWN0cyFcclxuXHJcblxyXG4vLyB3ZSB3aWxsIG1ha2UgZnVuY3Rpb25zIHRvIHNvcnQgYWxsIHRvIGNyZWF0ZSB0aGlzIHdlZWsgYW5kIHRvZGF5IVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzdGVzdCA9IHtcclxuICAgIDI6IFt7dGl0bGU6J3Bvb3JhZ2FzJywgZHVlZGF0ZTogJzIwMjItMDItMDInLCBkZXNjcmlwdGlvbjogJ3Bvb3Bvb0FTREFTREFTRCcsIHByaW9yaXR5OiAnbG93JywgaW5kZXg6IDB9LHt0aXRsZToncG9vcmFnYXMnLCBkdWVkYXRlOiAnMjAyMi0wMi0wMicsIGRlc2NyaXB0aW9uOiAncG9vcG9vQVNEQVNEQVNEJywgcHJpb3JpdHk6ICdsb3cnLCBpbmRleDogMH0se3RpdGxlOidwb29yYWdhcycsIGR1ZWRhdGU6ICcyMDIyLTAyLTAyJywgZGVzY3JpcHRpb246ICdwb29wb29BU0RBU0RBU0QnLCBwcmlvcml0eTogJ2xvdycsIGluZGV4OiAwfSx7dGl0bGU6J3Bvb3JhZ2FzJywgZHVlZGF0ZTogJzIwMjMtMDItMDInLCBkZXNjcmlwdGlvbjogJ3Bvb3Bvb0FTREFTREFTRCcsIHByaW9yaXR5OiAnbG93JywgaW5kZXg6IDB9XSxcclxuICAgIDM6IFt7dGl0bGU6J3Bvb3JhZ2FzJywgZHVlZGF0ZTogJzIwMjItMDItMDInLCBkZXNjcmlwdGlvbjogJ3Bvb3Bvb0FTREFTREFTRCcsIHByaW9yaXR5OiAnbG93JywgaW5kZXg6IDB9XSxcclxuICAgIDU6IFt7dGl0bGU6J3Bvb3JhZ2FzJywgZHVlZGF0ZTogJzIwMjItMDItMDInLCBkZXNjcmlwdGlvbjogJ3Bvb3Bvb0FTREFTREFTRCcsIHByaW9yaXR5OiAnbG93JywgaW5kZXg6IDB9XVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSB7XHJcbiAgXHJcbn1cclxuXHJcbi8vMjogW3t0aXRsZToncG9vcmFnYXMnLCBkdWVkYXRlOiAnMjAyMi0wMi0wMicsIGRlc2NyaXB0aW9uOiAncG9vcG9vQVNEQVNEQVNEJywgcHJpb3JpdHk6ICdsb3cnLCBpbmRleDogMH0sXVxyXG4vLyBhZGQgdGhlIGFwcHJvcHJpYXRlIHRvZG8ncyB0byB0aGVzZSBwcm9qZWN0cyBiYXNlZCBvbiB0aGUgYXBwcm9wcmlhdGUgZGF0ZXMgKGRhdGVmbiEpXHJcblxyXG5cclxuXHJcbi8vIG5vdyB3ZSBkZXZlbG9wIGEgd2F5IHRvIGFkZCBjdXN0b20gcHJvamVjdHMgdG8gdGhpcyBvYmplY3QhXHJcbi8vIGlmIHZpc3VhbGx5IHdlIHdhbnQgdG8gc2hvdyBhIGN1ZSB0aGF0IHRoaXMgaXMgYW4gb3B0aW9uIHdlIGNhbiBkbyB0aGlzIHdpdGggdGhlIFVJIG9yIG5vdCBpbiB0aGlzIGZ1bmN0aW9uXHJcbi8vIHJ1bm5pbmcgYWRkIHByb2plY3Qgc2hvdWxkIGFkZCBhIHByb1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3RuYW1lKSB7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gaWYgd2UgdHJ5IHRvIGFkZCBhIHByb2plY3QgbmFtZSB0aGF0IGFscmVhZHkgZXhpc3RzLCB3ZSBjYW4gcmV0dXJuIGEgY29uZmlybWF0aW9uIFxyXG5pZiAocHJvamVjdG5hbWUgPT0gXCJcIikge3JldHVybn1cclxuXHJcblxyXG5pZiAocHJvamVjdHMuaGFzT3duUHJvcGVydHkocHJvamVjdG5hbWUpKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbG9ncyB0aGF0IHByb3BlcnR5IGV4aXN0cyB3aXRoaW4gcHJvamVjdG1ha2VyLmpzJylcclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICAgIC8vIGNhbGwgZG9tIGZ1bmN0aW9uIHRvIHR1cm4gZmllbGQgcmVkIGFuZCBjaGFuZ2UgcGxhY2Vob2xkZXIgdG8gZXhpc3RzIVxyXG5cclxuXHJcbn1cclxuXHJcbiAgICAvLyBlbHNlIHdlIGFkZCB0aGUgcHJvamVjdCBuYW1lIGFzIGEga2V5IHRvIHByb2plY3Qgb2JqZWN0XHJcbiAgICAvLyBldmVudHVhbGx5IHdlIHdpbGwgYXBwZW5kIHRvZG8ncyB0byB0aGVzZSBjYXRlZ29yaWVzIGJhc2VkIG9uIHNvbWUgY3JpdGVyaWEgXHJcblxyXG5wcm9qZWN0c1twcm9qZWN0bmFtZV0gPSBbXVxyXG5sZXQgcmVzdWx0ID0gcHJvamVjdG5hbWVcclxuXHJcblxyXG5cclxuY29uc29sZS5sb2coJ0RFRkFVTFQgUFJPSlMgQVJSQVkhISEnKVxyXG5jb25zb2xlLmxvZyhwcm9qZWN0cywgJ2N1cnJlbnQgcHJvamVjdHMgb2JqZWN0Jyk7XHJcblxyXG4gIFxyXG5cclxuXHJcblxyXG5yZXR1cm47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIHdlIHdhbnQgdG8gZGVsZXRlIHRoZXkga2V5IG9mIHRoZSBwcm9qZWN0XHJcbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgcHJvamVjdCwgd2UgbmVlZCBhIHdheSB0byBkZXRlcm1pbmUgd2hpY2ggcG9zaXRpb25cclxuLy8gaW4gdGhlIGFycmF5IHRoZSBwcm9qZWN0IGlzIHRvIHJlbW92ZVxyXG4vL3N1cHBseSB0aGlzIGFuIGluZGV4IGFzIHRoaXMgd2lsbCBiZSB2aXN1YWwgYmFzZWRcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0KSB7XHJcblxyXG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0c1twcm9qZWN0XVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG59XHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGJlbG93IHJlcG9ydHMgbmFtZSBvZiBwcm9qZWN0cyBjdXJyZW50bHkgaW4gbGlzdCBhbmQgYXBwZW5kIHRvIGFuIGFycmF5XHJcblxyXG5leHBvcnQgbGV0IGN1cnJlbnRDdXN0b21Qcm9qZWN0cyA9IFtdXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcclxuICAgIGN1cnJlbnRDdXN0b21Qcm9qZWN0cyA9IFtdXHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IGluIHByb2plY3RzKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDdXN0b21Qcm9qZWN0cy5wdXNoKHByb2plY3QpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==