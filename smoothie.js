const fruits = [
  "pineapple",
  "orange",
  "banana",
  "apple",
  "kiwi",
  "mango",
  "papaya",
  "pear",
  "dragonfruit",
  "peach",
];
const randomFruit1 = fruits[Math.floor(Math.random() * 10)];
const randomFruit2 = fruits[Math.floor(Math.random() * 10)];
const randomFruit3 = fruits[Math.floor(Math.random() * 10)];

// console.log(randomFruit1);
// console.log(randomFruit2);
// console.log(randomFruit3);

function pickFruits(randomFruit1, randomFruit2, randomFruit3) {
  return new Promise((resolve, reject) => {
    console.log("Processing your fruit pick...");
    if (
      randomFruit1 !== randomFruit2 &&
      randomFruit2 !== randomFruit3 &&
      randomFruit3 !== randomFruit1
    ) {
      resolve(
        `Your selected fruits are ${randomFruit1}, ${randomFruit2} and ${randomFruit3} `
      );
    } else {
      reject("Please select three different fruits!");
    }
  });
}
function processFruits() {
  return new Promise((resolve) => {
    const sliceRandomFruit1 = randomFruit1.slice(0, 3);
    const sliceRandomFruit2 = randomFruit2.slice(0, 3);
    const sliceRandomFruit3 = randomFruit3.slice(0, 2);

    const joinedName = [
      sliceRandomFruit1,
      sliceRandomFruit2,
      sliceRandomFruit3,
    ].join("-");
    const blendedName = joinedName.concat("licious");
    resolve("Your fruit blendname is:" + blendedName);
  });
}
async function makeSmoothie() {
  try {
    const pickedFruits = await pickFruits(
      randomFruit1,
      randomFruit2,
      randomFruit3
    );
    console.log(pickedFruits);
    const BlendName = await processFruits(pickedFruits);
    console.log(BlendName);
  } catch {
    console.error(
      "Something went wrong either in picking fruits or blend naming!"
    );
  }
}

makeSmoothie();
