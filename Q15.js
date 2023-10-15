"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
// ------------------------------------------------------------------------
// So Talha is not comming
// lets invite Rafay for the invitation
let Guest = ["Muzzumil", "Talha", "Meshaim"];
for (let a = 0; a < Guest.length; a++) {
    let guest = Guest[a];
    if (guest === "Talha") {
        Guest[a] = "Rafay"; // Replaced Talha with Rafay
    }
    console.log(`Dear ${Guest}, You are invited to my place for the dinner, I'll be Glad if you going to join me for the dinner.`);
}
