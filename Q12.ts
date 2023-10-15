//Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, but each message should be personalized with the person’s name.



let names = ["Muzzumil", "Meshaim", "Rafay", "Talha"]; 
let message = "Hello, How are you, ";

for (let a = 0; a < names.length; a++) {
    console.log(message + names[a]);
  }