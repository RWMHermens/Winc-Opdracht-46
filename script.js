const testNum = (number) =>
  new Promise((resolve, reject) => {
    if (number < 10) {
      resolve(number + " is kleiner dan 10");
    } else {
      reject(number + " is groter dan 10");
    }
  });

testNum(3)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

testNum(26)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (words) =>
  new Promise((resolve, reject) => {
    if (
      words.every((word) => {
        return typeof word === "string";
      })
    ) {
      resolve(
        sortWords(
          words.map((word) => {
            return word.toUpperCase();
          })
        )
      );
    } else {
      reject("Not a string!");
    }
  });

const sortWords = (words) =>
  new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort());
    } else {
      reject("strings only!");
    }
  });

makeAllCaps(arrayOfWords)
  .then(sortWords(arrayOfWords))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords(complicatedArray))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
