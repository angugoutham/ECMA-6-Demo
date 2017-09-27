
let String_templates=function(name){
    
    console.log("can easily combine literals and data");
    return `hello, ${name}`;
    
}

var result=String_templates("angu");
console.log(result);


let generateTags=function(strings,...values)
{
    console.log("this can generate tags");
    console.log(strings);
    console.log(values);
let result="";
    for( let i=0;i<strings.length;i++)
        {
            result +=strings[i];
            if(i<values.length)
                {
                    result +=values[i]
                }
        }
   return  result.toUpperCase();
    
    
}

var x=1;
var y=2;
var generateTagsResults=generateTags `${x} + ${y} is ${x+y}`

//
console.log(generateTagsResults);