function make_album1(artistname:string , albumtitle:string){
           return{artistname , albumtitle}
}
let album1 = make_album1("Ali zafar","psl song")
let album2 = make_album1("Atif Aslam","Ipl song")
let album3 = make_album1("Asim Azhar","cpl song")

console.log(album1)
console.log(album2)
console.log(album3)

function make_album2(artistname:string , albumtitle:string, numberoftracks?: number){
             return{artistname,albumtitle,numberoftracks}
}
let album4 = make_album2("Ali zafar","psl song")
let album5 = make_album2("Atif Aslam","Ipl song")
let album6 = make_album2("Asim Azhar","cpl song")

console.log(album4)
console.log(album5)
console.log(album6)

