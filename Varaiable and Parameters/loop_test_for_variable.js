//loop test for let and var

function letTest(){
const arr = [];
for (let i=0; i < 3; i++) {
    arr.push(() => i);
}
arr.map(x => x()); // [0,1,2]
console.log("letTest",arr.map(x => x()));
}

function constTest(){
    
const arr = [];
for (const i=0; i < 3; i++) {
  console.log(i);
  arr.push(() => i);
}
arr.map(x => x()); // [0,1,2]
console.log("constTest",arr.map(x => x()));
}

function varTest(){
const arr = [];
for (var i=0; i < 3; i++) {
    console.log(i);
    arr.push(() => i);
}
arr.map(x => x()); // [0,1,2]
console.log("varTest",arr.map(x => x()));
}


letTest();
// constTest(); throws TypeError: Assignment to constant variable.
varTest();