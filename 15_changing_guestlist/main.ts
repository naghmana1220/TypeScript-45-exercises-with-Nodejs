let guestlist = ["zoya","zunaira","zoya","dua"];

let dontcome = guestlist[0];

console.log(dontcome, "Nahi Ahh Sktii");

guestlist.splice(0, 1, "Amna");

guestlist.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me? `));