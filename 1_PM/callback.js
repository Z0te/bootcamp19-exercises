// In an alternate universe, coins have a `true` and a `false` side.
// Write code that first gets a user via a getUser() call, then in the callback,
// flips a coin and tells the user whether or not their guess was correct

const coinToss = (user, callback) => {
  const result = Math.round(Math.random());
  const didWin = user.guess === result;
  callback(didWin, user.firstName);
};

const getUser = callback => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    guess: Math.round(Math.random())
  };
  callback(user, announce);
};

const announce = (result, name) => {
  if (result) {
    console.log(`${name} Won`);
  } else {
    console.log(`${name} lost`);
  }
}

getUser(coinToss);