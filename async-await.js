function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Say hi from Google");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response!");
    resolve(`Extra information + ${response}`);
  });
}

// makeRequest("Facebook")
//   .then((response) => {
//     console.log("Response has been recieved");
//     return processRequest(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Async Await way of doing it

async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("Response recieved!");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

doWork();
