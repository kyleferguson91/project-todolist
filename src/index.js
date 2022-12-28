
import { compareAsc, format } from 'date-fns'
import { customprojects, defaultprojects } from './projectmaker.js'
// import {createTodo} from './eventlogic.js'
import {createTodo, setComplete, changePriority} from './todomodule.js'
import * as dom from './domLogic.js'
import {addButtonLogic} from './buttonlogic.js'


// run master function to add logic to all buttons
addButtonLogic();

// run dom logic

(async function dom() {
    let dom = await import('./domLogic.js')
    dom.renderCustomProjects()
})();






const date = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
console.log(date)


