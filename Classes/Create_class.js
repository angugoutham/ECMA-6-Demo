// Examples to illustriate classes concept in ES6

console.log("Creating class");

class Employee{
    
    
    doWork(){
        
        return "working";
    }
    
    getName(){
        return "Angu";
    }
}


let emp=new Employee();

console.log("dowork method",emp.doWork());
console.log("getName method",emp.getName());

// to make sure how it works using prototyping


console.log("This is similar to the protypes in earlier version of javascript",Employee.prototype.doWork.call());


