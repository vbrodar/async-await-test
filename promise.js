// Promises practice - Web Dev Simplified

let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message); // This is in the then Success -- prints out if promise is resolved
}).catch((message) => {
  console.log("This is in catch " + message); // This is in catch Failed -- prints out if promise is rejected
});

// Promise in example
const userLeft = false;
const userWatchingCatMemes = false;

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User left",
        message: "#sad",
      });
    } else if (userWatchingCatMemes) {
      reject({
        name: "User Watching Cat Memes",
        message: "Vedran < Cat ",
      });
    } else {
      resolve("This is fine");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log("Success" + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

// Multiple promises

const watchYoutube = new Promise((resolve, reject) => {
  resolve("Watched Web Dev Simplified");
});

const playedGame = new Promise((resolve, reject) => {
  resolve("Played Football Manager");
});

const learnedPromises = new Promise((resolve, reject) => {
  resolve("Learned Async/Await");
});

Promise.all([watchYoutube, playedGame, learnedPromises]).then((messages) => {
  //.race unlike .all does .then after first promise is finished and returns 1 message
  console.log(messages);
});
