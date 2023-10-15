let GuestList: string[] = ["Meshaim", "Rafay", "Muzzmuil"];
let guestCannotMakeIt: string = GuestList[1];
let newGuest: string = "Shaheer";

console.log(guestCannotMakeIt + " cannot make it to the dinner");
GuestList[1] = newGuest;

for (let i = 0; i < GuestList.length; i++) {
  console.log("Dear " + GuestList[i] + ", you are cordially invited to dinner. We would be honored to have your presence.");
}

console.log("\n\n");

// Second set of invitation messages for those who are still on the list



for (let i = 0; i < GuestList.length; i++) {
  console.log("Second Invitation: Dear " + GuestList[i] + ", you are cordially invited to dinner. We would be honored to have your presence.");
}
