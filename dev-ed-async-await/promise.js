function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched user data!");
      resolve({
        userName: username,
        pass: password,
      });
    }, 3000);
  });
}

function getUserData(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting data...");
      resolve({
        userEmail: "vorroz@yahoo.com",
      });
    }, 2000);
  });
}

async function displayUser() {
  try {
    const loggedUser = await loginUser("vorroz", 123456);
    const userData = await getUserData();
    console.log(userData);
  } catch (err) {
    console.log("We cant display data!");
  }
}

displayUser();
