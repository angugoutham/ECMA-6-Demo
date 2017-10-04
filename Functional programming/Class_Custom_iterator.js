// to build a iterator the class



function CustomIterator(){

class Company {

constructor() {
    this.employees=[];
}
addEmployees(...names) {
        
            
        this.employees=this.employees.concat(names);
       
    }
    
    
[Symbol.iterator](){
        return new ArrayIterator(this.employees)
    }
    
}
    // To impelement a iterator to iterate through the objects using custom iterator
class ArrayIterator {
 constructor(array) {
            this.array=array;
            this.index=0;
        }
 next() {
            var result={ value: undefined , done: true};
       
            if(this.index < this.array.length){
                 
                result.value = this.array[this.index];
                result.done = false;
                this.index += 1;
            }
            
            return result;
        }
        
    }


let company=new Company();
company.addEmployees("Angu","goutham","rajasekaran");
    
let count=0;
    for(let employee of company) {
        count += 1 ;
     }
console.log("Count Through Custom itreator",count)

}
CustomIterator();
// building iterator through genartors





/*

We can have all logic get implemented by soritng features in order  next() function.
People 

*/