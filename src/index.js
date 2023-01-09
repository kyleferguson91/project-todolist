
import { compareAsc, format } from 'date-fns'



// run dom logic and build render 



import('./domLogic.js')
.then((obj) => {
    obj.render()

})




export const date = format(new Date(), 'yyyy-MM-dd')
console.log(date)


