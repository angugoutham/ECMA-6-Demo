function Destructuring_example_Object(){
    let doWork=function(){
        return{
            firstName:"angu",
            lastName:"goutham",
            handles:{
            fullName:"angugoutham"
            }
        };
    }
    
    let { firstName: first,
        handles:{fullName: fullname}
        }=doWork();
    
    
    console.log("Destructuring _example_Object",fullname);
    console.log("Destructuring _example_Object",first);
}

Destructuring_example_Object();