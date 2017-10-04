// to build a iterator for  the class using generator



function CustomIterator(){

class Company {

constructor() {
    this.employees=[];
}
addEmployees(...names) {
        
            
        this.employees=this.employees.concat(names);
       
    }
    
    // Generator to implement a iteraor 
*[Symbol.iterator](){
        for(let e of this.employees) {
            
            yield e;
        }
    }
}
    
let filter =function*(items,predicate) {
      for(let item of items) {
          console.log("filtering",item);
          if(predicate(item))
              {
                    
                  yield item;
              }
}
    
}

let take=function*(items,number){
    let counter =0;
    if(number<1) return;
    for (let item of items )
    {
        console.log("taken",item);
        yield items;
        count++
        if(count >=number) return;
        
    }
    
}



let company=new Company();
company.addEmployees("Angu","goutham","rajasekaran");
    
let count=0;
    for(let employee of company) {
        count += 1 ;
     }
console.log("Count Through generator itreator",count)
   

 // checking the filter function to check and filter only for the names which start with 'A'
count=0;
    for(let employee of filter(company,e => e[0] =='A'))
        {
            count++;
        }

console.log("Count Through generator itreator with filter",count)
    
 // checking the taken of only one value from filter function to check and filter only for the names which start with 'A'
count=0;
    for(let employee of take(filter(company,e => e[0] =='A'),1))   {
            count++;
        }

console.log("Count Through generator itreator with filter and taken ",count)


}



CustomIterator();
// building iterator through genartors
/*

We can have all logic get implemented by soritng features in order  next() function.
People 

*/