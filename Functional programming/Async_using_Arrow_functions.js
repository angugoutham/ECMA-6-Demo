// This illustriates the Async feature of the Arrow functions 


console.log("this illustriates the lexical binding of the Arrow functions");


function Async_test_with_out_arrow(){
    
    this.name="scott";
    
    setTimeout(function(){
           console.log("expected Scott:",this.name);
          
    },15);
    
 
}
Async_test_with_out_arrow();

function Async_test_with_arrow(){
    
    this.name="scott";
    
    setTimeout(() => {
          console.log("expected Scot:",this.name);
        //this works because of the Arrow fucntions lexically bind
    },15);
    
 
}

Async_test_with_arrow();