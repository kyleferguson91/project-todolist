
import { compareAsc, format } from 'date-fns'




// run dom logic and build render 



import('./domLogic.js')
.then((obj) => {
    obj.render()
})





const date = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
console.log(date)


