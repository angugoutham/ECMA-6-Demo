console.log("Creating class with Getters and Setters");
 

class Employee{
    
    constructor(name){
        this._name=name;
    }
    
    get name() {
        return this._name.toUpperCase();
    }
    set name(newValue) {
        this._name +=newValue;
    }
   
}

let e =new Employee("angu");

//getter invloked
console.log(e.name);

// setter involked
e.name="goutham";

// Updated name 
console.log(e.name);




