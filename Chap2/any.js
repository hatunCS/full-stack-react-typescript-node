"use strict";
/*

let val:any = 22;
val = "string value";

val = new Array();
val.push(33);
console.log(val);


The last thing assigned to "val" is an Array type.
TS inherintly allows you to use an Array method (push) without any issues.


let val:any = 22;
val = "String value";
val = new Array();
val.doesnotexist(33);
console.log(val);


The above code WILL compile without any issues because
"any" tells the compiler to skip checking type-compatibility.
However, the program will fail at runtime because DNE is not a valid Array function.

*/
