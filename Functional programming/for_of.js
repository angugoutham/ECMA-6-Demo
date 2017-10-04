// illustriating For of

console.log(" illustriating For of");

function for_of(){
    
    //thgis for of can work with iterators 
    
    let sum=0;
    let numbers=[2,3,4,5];
    
   for(let n of numbers){
       
       sum +=n;
   }
            console.log("sum using for of",sum);
}
for_of();