// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendCat() {
    return cats.push('Ralph')
} 

function destructivelyAppendCat() {
    return cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat() {
    let newCats = [...cats.slice(), "Broom"]
    return newCats
}

function prependCat() {
    let newCats = [ "Arnold", ...cats.slice()]
    return newCats
}

function removeFirstCat() {
    return cats.slice(1)
}

function removelastCat() {
    let newCats = [...cats.slice(0, -1)]
    return newCats
}