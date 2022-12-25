import * as module from './todomodule.js'
import { compareAsc, format } from 'date-fns'
import { customprojects, defaultprojects } from './projectmaker.js'
// import {createTodo} from './eventlogic.js'
import {createTodo, setComplete, changePriority} from './todomodule.js'



// plus switch image logic
const image = document.querySelector('#plusbutton')
image.addEventListener('mouseover', (e) => {


e.target.src = '../src/images/plus-circle-svgrepo-com(2).svg'

})
image.addEventListener('mouseout', (e) => {


    e.target.src = '../src/images/plus-circle-svgrepo-com.svg'
    
    })

    image.addEventListener('mousedown', (e) => {


        e.target.src = '../src/images/plus-circle-svgrepo-com(3).svg'
        
        })
    




//dom logic button events

const buttons = document.querySelectorAll('button')
buttons.forEach((elem,ind,arr) => {
    elem.addEventListener('click', (e) => {
        console.log(e.target.id)
        console.log(defaultprojects[e.target.id])
    })
})









const date = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
console.log(date)


let dog = createTodo(2,2,2,2,2,2,2)
console.log(dog)
setComplete(dog)
console.log(dog)
changePriority(dog, 'high')
console.log(dog)