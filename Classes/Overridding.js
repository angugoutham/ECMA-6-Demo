// to illustriate the concept of the overridding.


console.log(" this can overide methods")
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
    
    typeofWork(){
        return "free";
    }
   
}


class Employee extends Person
{
    doWork(){
        return `${this._name} is of course Working`;
    }
    
    typeofWork() {
       // return "paid";
        return super.typeofWork()+"paid";
    }
    
}

let p1=new Person("angu");
let e1=new Employee("goutham");

console.log(p1.name,"is working for",p1.typeofWork());
console.log(e1.name,"is he Working?:",e1.doWork(),"is working for"+e1.typeofWork());

let makeEveryOneWork= function (...Person){
    var results=[];
    var empResults=[];
    for(var i=0;i<Person.length;i++){
        results.push(Person[i].typeofWork());
    }
     for(var i=0;i<Person.length;i++){
         if(Person[i] instanceof Employee)
        empResults.push(Person[i].typeofWork());
    }
    
    
    console.log(results);
    console.log(empResults);
}

makeEveryOneWork(p1,e1);