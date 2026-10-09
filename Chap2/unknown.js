"use strict";
/*
let val:unknown = 22;
val = "String type";
val = new Array();
val.push(33);
console.log(val);

The code above yields an immediate error.
Unknown is more like a label than a placeholder.
*/
let val = 22;
val = "String type";
val = new Array();
if (val instanceof Array) {
    val.push(33);
}
console.log(val);
/*
Use Gaurds to wrap the push call conditionally.
Unknown is more cumbersome than any, but much safer.
*/
