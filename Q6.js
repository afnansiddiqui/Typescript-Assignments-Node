"use strict";
// using whitespace in my code
Object.defineProperty(exports, "__esModule", { value: true });
let namewithspace = "\t  Afnan Siddiqui\n  ";
console.log(`namewithspace: "${namewithspace}"`);
// now stripping space in code
let namewithStripped = namewithspace.trim();
console.log(`Name Stripped: "${namewithStripped}"`);
