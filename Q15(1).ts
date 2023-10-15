// • Start with your program from Exercise 14. 
// Add a print statement at the end of your program stating the name of the guest who can’t make it.


let Guest = ["Muzzumil" , "Talha" , "Meshaim"];
let cantmake = ["Talha"]


for (let a = 0; a < Guest.length; a++) {
    let guest = Guest[a];
    
    console.log(`Dear ${Guest}, You are invited to my place for the dinner, I'll be Glad if you going to join me for dinner.`);
}

    console.log(`Dear ${cantmake}, You are unable to attend the dinner :(`);
