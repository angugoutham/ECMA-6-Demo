// to illustriate the iterators used in Es 6.

console.log("explianing iterator")


function CalculateSum(){
    
    
    console.log("Can work with iterators at low level")
    let sum=0;
    let numbers=[2,3,4,5];
    
    for(let i=0;i<numbers.length;i++)
        {
            
            sum +=numbers[i];
        }
    
    
    console.log("sum using for loop",sum);
    
    sum=0;
    
    for(let i in numbers){
        sum +=numbers[i];
    }
        console.log("sum using for in",sum);

    sum=0;
    
    let iterator=numbers.values();
    let next=iterator.next();
    while (!next.done){
        sum +=next.value;
        next=iterator.next();
    }
            console.log("sum using iterators",sum);

}


CalculateSum();