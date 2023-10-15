"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let GuestList = ["Meshaim", "Rafay", "Muzzmuil"];
let guestCannotMakeIt = GuestList[1];
// let indexToRemove: number = 1; //Supposing Rafay cant make it.
let newGuest = "Shaheer"; //New Guest
console.log(guestCannotMakeIt + " cannot make it to the dinner");
GuestList[1] = newGuest; //Replace
// guest_List.splice(indexToRemove, 1, newGuest);   // Removed rafay and placed Shaheer in its place.
for (let i = 0; i < GuestList.length; i++) {
    console.log("Dear " + GuestList[i] + ", you are cordially invited to dinner. We would be honored to have your presence.");
}
console.log("\n\n");
