const R = [3, 2, 1, 2]
const L = [1, 4, 5, 3, 5 ]
// const array = []

const flip=(d, a)=>{
    console.log ("the d:", d,"the a:", a)
    const array =[]
    if (d === "R") {
        return array.push(a.sort())
    } else if (d === "L") {
        return array.push(a.reverse())
    } else {
        return "you wrong" 
    }
    return(d, a)
} 


  console.log(flip(R));
  console.log(flip(L));