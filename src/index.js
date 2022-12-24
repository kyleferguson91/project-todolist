import * as module from './todomodule.js'

import { compareAsc, format } from 'date-fns'
import { customprojects } from './projectmaker.js'

const date = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
console.log(date)



const obj1 = module.todoMaker('fresh')

console.log(obj1)

// project stuff

console.log(customprojects)

