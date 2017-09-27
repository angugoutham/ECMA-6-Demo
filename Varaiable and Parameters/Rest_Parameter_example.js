// illustrtaiates Rest Parameter

let doWork=function(url,...parameters){
    
    let result=0;
    parameters.forEach(function(n){
       result +=n ;
        
    });
    return result;
};

let result=doWork("google",1,2,3);
console.log(result);