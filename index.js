// Write your solution here





let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

module.exports = {
    cats,
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat
};




function appendCat(name) {
  // Create a new array with the existing cats plus the new cat name
  let newArray = [...cats, name];
  return newArray;
}




function prependCat(name) {
  // Create a new array with the new cat name followed by the existing cats
  let newArray = [name, ...cats];
  return newArray;
}



function removeLastCat() {
  // Create a new array by slicing the original array to exclude the last cat
  let newArray = cats.slice(0, cats.length - 1);
  return newArray;
}

function removeFirstCat() {
  // Create a new array by slicing the original array to exclude the first cat
  let newArray = cats.slice(1);
  return newArray;
}





