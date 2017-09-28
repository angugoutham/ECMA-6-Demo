// Example to illustriate the Spread operator 

let doWork=function(x,y,z){
    
    console.log("Can Spread an array across Parameters")
    
    return x+y+z;
}

var result=doWork(...[5,4,3]);
console.log("expexcted 12",result);



let doWork1=function(){
    
    console.log("Can build array")
    var a=[1,2,3]
    var b=[1,2,3,...a,3,4,5];
    console.log(b);
}



doWork1();

