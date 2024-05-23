var guestlist = ["zoya", "zunaira", "zoya", "dua"];
var dontcome = guestlist[0];
console.log(dontcome, "Nahi Ahh Sktii");
guestlist.splice(0, 1, "Amna");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me? ")); });
