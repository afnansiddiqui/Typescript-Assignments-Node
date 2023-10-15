"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dinnerGuests = ["Muzzumil", "Talha", "Meshaim"];
console.log("Great news! We found a bigger dinner table!");
dinnerGuests.unshift("Ali");
dinnerGuests.splice(2, 0, "Rafay");
dinnerGuests.push("Alizay");
for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
