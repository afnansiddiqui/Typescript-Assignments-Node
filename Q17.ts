let dinnerGuests = ["Muzzumil", "Talha", "Meshaim"];

console.log("Great news! We found a bigger dinner table!");

dinnerGuests.unshift("Ali");
dinnerGuests.splice(2, 0, "Rafay"); 
dinnerGuests.push("Alizay");

console.log("Sorry, but we can only invite two people for dinner.");


while (dinnerGuests.length > 2) {
    const removedGuest = dinnerGuests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

dinnerGuests.splice(0, 2);

console.log("Final guest list:", dinnerGuests);
