//Destructuring_example_Array
function Destructuring_test_1(){
    let x=2;
    let y=3;
    [x,y]=[y,x]
    console.log("Destructuring_test_1",x);
    console.log("Destructuring_test_1",y);
    
}



function Destructuring_test_2(){
    
    var temp=function(){
    return [1,2,3];
   }
   // let [x,y]=temp();
    let [,x,y]=temp();
    console.log("Destructuring_test_2",x);
    console.log("Destructuring_test_2",y);
    
}



Destructuring_test_1();
Destructuring_test_2();
