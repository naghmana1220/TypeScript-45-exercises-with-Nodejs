interface item {
    name:string
    price:number
}
const book: item = {
     name:"essential typescript",
     price:500,
}
const apple:item ={
    name:"apple",
    price:200,
}
console.log(`book name : ${book.name}, price: $${book.price}`)
console.log(`apple name : ${apple.name}, price: $${apple.price}`)