"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myname = "Afnan";
console.log(myname.toLowerCase());
console.log(myname.toUpperCase());
console.log(myname.toTitleCase());
// Title case is not available so i am going to create a funtion for title case.
function make(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() +
            txt.substr(1).toLowerCase();
    });
}
console.log(make('toTitleCase'));
