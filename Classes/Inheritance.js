// to illustriate the inheritance realtionship- is arelationship

console.log(" this works As Employee is a person realationship.")
class Person{
    
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


class Employee extends Person
{
    doWork(){
        return `${this._name} is of course Working`;
    }
    
    
}

let p1=new Person("angu");
let e1=new Employee("goutham");

console.log(p1.name);
console.log(e1.name,"is he Working:",e1.doWork());

