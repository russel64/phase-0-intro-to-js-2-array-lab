// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(`${name}`);
}

function destructivelyPrependCat(name){
    cats.unshift(`${name}`);
}

function destructivelyRemoveLastCat(name){
    cats.pop(`${name}`);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(`${name}`);
}

function appendCat(name){
    const coolCats = [...cats, `${name}`];
    return coolCats;
}

function prependCat(name){
    const coolerCats = [`${name}`, ...cats];
    return coolerCats;
}

function removeLastCat(){
    const coolestCats = [...cats];
    return coolestCats.slice(0, 2);
}

function removeFirstCat(){
    const coolestCats = [...cats];
    return coolestCats.slice(1);
}

