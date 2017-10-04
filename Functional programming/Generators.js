// illustriate the Concept of generators

console.log ("generators can build iterators");

//yield functions
let number =function*(start,end) {
    for(let i=start;i<=end;i++)
        yield i;
}

function demo() {
let sum=0;
for(let n of number(1,4)) {
    
    sum +=n;
    }

console.log(sum);
}

demo();