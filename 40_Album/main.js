function make_album1(artistname, albumtitle) {
    return { artistname: artistname, albumtitle: albumtitle };
}
var album1 = make_album1("Ali zafar", "psl song");
var album2 = make_album1("Atif Aslam", "Ipl song");
var album3 = make_album1("Asim Azhar", "cpl song");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album2(artistname, albumtitle, numberoftracks) {
    return { artistname: artistname, albumtitle: albumtitle, numberoftracks: numberoftracks };
}
var album4 = make_album2("Ali zafar", "psl song");
var album5 = make_album2("Atif Aslam", "Ipl song");
var album6 = make_album2("Asim Azhar", "cpl song");
console.log(album4);
console.log(album5);
console.log(album6);
