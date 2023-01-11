
import { compareAsc, format } from 'date-fns'
import { storageAvailable } from './localstorage.js'
import {projects} from './projectmaker.js'

// create date

export const date = format(new Date(), 'EEEE, LLLL dd, yyyy')
console.log(date)
console.log(storageAvailable('localStorage'))



// check if storage exists, in this case localstorage

if (storageAvailable('localStorage')) {


//localStorage.clear()
// localstorage is available

    console.log('LOCALSTORAGE')
    console.log(window['localStorage'])

// dummy project

    //localStorage.setItem('projects', JSON.stringify({cats: [{title:'pee'}, {title:'pee2'}], dogs: [{title: 'poo'}, {title: 'poo2'}]}))



    // now we know local storage is available, check if it is empty! / first use
    // we will store a projects object, equal to all projects that we render


    if (!localStorage.getItem('projects')) {
// projects value does not exist in localstorage it is the first use

// create it as an empty object so that project maker can call upon it and add to it

localStorage.setItem('projects', JSON.stringify({}))

      } 
      
      else {
                // else projects object exists in local storage, render from this!
        // projects object should be equal to this
        console.log('PROJECTS EXISTS')
        console.log(projects, )
        // copy the properties from our object onto projects..
console.log(localStorage)
//localStorage.clear()
        for (let prop in JSON.parse(localStorage.getItem('projects'))) {
            // loop through properties of local storage projects object
            // add a property to dom project object and set its value 
            // equal to the value from the local storage object at that key
            // this value should be an array, an array of objects!!
            
            projects[prop] = JSON.parse(localStorage.getItem('projects'))[prop]

            // each value in dom projects is now the same as local storage
            console.log(projects)

            // we need to update the local storage when we update the projects 
            // array via the dom!
            // the easiest thing to do would be to update the local storage after each time
            // we click update todo, create a project or create a todo
        }

   
       

    
console.log()
      }
      


   }


   else {
// else local storage does not exist
// then the projects object should be just a blank object as it is by default
// and work with session storage
// we only update the project object in the event that there is local storage


     console.log('NONONO LOCAL STORAGE!')



   }
   


// run dom logic and build render 



import('./domLogic.js')
.then((obj) => {
    obj.render()

})


