//Parameter passing in ECMA Script JS 6

var Example=function(name="Scott"){
   // return name+"may";
    
    return name;
};

var Example_result = Example("angu");

 console.log(Example_result);
var ArrayExample=function(a=1,b=2,c=3){
    
    return [a,b,c];
}

let [a,b,c]=ArrayExample(5,undefined)
console.log(a);
console.log(b);
console.log(c);


function apiExample(url="namely",{cache=true,data="angu"}){
    return {data,
           url}
}

let apiExample_result=apiExample("google",{cache:false});
console.log(apiExample_result.url);console.log(apiExample_result.data);