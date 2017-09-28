//Illustriate Constructor logic in ES 6


console.log("Creating class with Construcors ");

class Employee{
    
    constructor(name)
    {
        // this key word is used to reference to the object
        this._name=name;
    }
    
    doWork(){
        
        return "working";
    }
    
    getName(){
        return this._name;
    }
}


let emp=new Employee("angun"); // inokes the cosntructor and stores the name passed in -.name in the object

console.log("dowork method",emp.doWork());
console.log("getName method",emp.getName());

// to make sure how it works using prototyping


console.log("This is similar to the protypes in earlier version of javascript",Employee.prototype.doWork.call());


