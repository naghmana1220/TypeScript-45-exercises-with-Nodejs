let size: string[] = ['medium','large']

let defaultMessage = "I Love Typescript"
let mediumShirt = (`size OF shirt is: ${size[0]}, ${defaultMessage}`)
let largeShirt = (`size OF shirt is: ${size[1]}, ${defaultMessage}`)
let smallShirt = (`size of shirt: small and i love painting`)
let extralarge = (`size of shirt is: extralarge and i love hiking`)

function make_tshirt(){
    let simpleFunction = (mediumShirt)
    console.log(simpleFunction)
    return simpleFunction
}

let response = make_tshirt()
console.log(response)