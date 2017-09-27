function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable! treats as same varaible functionally or globally
    console.log("varTest1:",x);  // 2
  }
  console.log("varTest1:",x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable ,due to block scope
    console.log("letTest:",x);  // 2
  }
  console.log("letTest:",x);  // 1
}

var vartest2 = function(flag)
{
    
    if(flag)
        {
            
            var x = 3;
            
        }
    return x;
    
}

lettest2 = function(flag)
{
    let x;
    
    if(flag)
        {
            
            //  let x = 3; throws error in the retrun statment ,since let is block scope
            
            x=3;
        }
    return x;
    
}

varTest();
letTest();
console.log ("vartest2:",vartest2(false));
console.log ("lettest2:",lettest2(true));






