// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”



let transportationModes = ["Mercedes Benz", "Ninja Kawasaki", "ELectric e-Bikes","Private Jet" ];
for (let a = 0; a < transportationModes.length;a++) {
    let mode = transportationModes[a];
    console.log(`I would like to own a ${mode}.`);
}