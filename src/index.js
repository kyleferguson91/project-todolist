import * as module from './todomodule.js'
import { compareAsc, format } from 'date-fns'
import { customprojects } from './projectmaker.js'
// import {createTodo} from './eventlogic.js'
import {createTodo, setComplete, changePriority} from './todomodule.js'



const date = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
console.log(date)


let dog = createTodo(2,2,2,2,2,2,2)
console.log(dog)
setComplete(dog)
console.log(dog)
changePriority(dog, 'high')
console.log(dog)