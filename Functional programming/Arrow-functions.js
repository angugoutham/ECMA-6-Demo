//to illustriate the arrow functions

console.log("Arrow fucntion provide a compact syntax for the function definition")


let add=function(a,b){
  
    console.log("using Fucntional programming with out arrow functions")
    return a+b;
}


let mul= (a,b) => {
    console.log("using Fucntional programming with arrow functions")
   return a*b;
    
}

// Arrow fuctions for expressions
let sub= (a,b) => a-b;

let b=()=> 3;



var numbers =[1,2,3,4];

var sum=0;

numbers.forEach( n => sum += n);

numbers.map( n => n=n*2);
console.log(add(2,3));
console.log(mul(2,3));
console.log(sub(2,b()));

console.log("using arrow function we calculated the sum of array",sum);
console.log("using arrow function we double the elements in the array",numbers);


