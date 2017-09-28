// const varaible test
function ConstTest1(){
    const Max_Size=10;
    
    console.log("ConstTest1",Max_Size);
}


function ConstTest2(){
    let Max_Size=10;
    // Max_Size=12 TypeError: Assignment to constant variable.
    
    function subtest(){
        
        var Max_Size=12;
        // let Max_Size=12; SyntaxError: Identifier 'Max_Size' has already been declared
        return  Max_Size;
    }

    var result=subtest();
    console.log("ConstTest2",result);
    console.log("ConstTest2",Max_Size);
}
ConstTest1();
ConstTest2();
