// creating a guestlist array 
let guestlist = ["amna","zoya","dua","zunaira"];

// making variable for those guest who can't come
let dontcome = guestlist[0];

// print the name of guest who can't come
console.log(dontcome, "Nahi Ahh Sakty han");

// Add oe Remove from array
guestlist.splice(0, 1, "Amna");

// Message print for bigger table
console.log("Good news ! we have found a bigger table for dinner.");

//Adding a new value at starting index of array
guestlist.unshift("zoya");

//Adding a new value at ending index of array
guestlist.push("zunaira");

//Adding a new guest at middle index of array 
let middleindex : number =Math.floor (guestlist.length / 2);

//Adding a new guest to middle index of array
guestlist.splice(middleindex , 0, "zoya");


console.log("updated list of our guests");

guestlist.forEach(oneguest => console.log(`Salam ${oneguest},would you like to dinner with me `));



console.log()