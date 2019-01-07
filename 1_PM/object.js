// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const isFalsy = {
  name: "hello",
  date: 10,
  notFalse: true,
  isDefined: undefined,
  string: "",
}

const hasFalsyValue = obj => {
  for (key in obj) {
    if (typeof(obj[key]) === "object") {
      hasFalsyValue(obj[key]);
    } else {
      if (obj[key] == false) {
        return true;
      }
    }
  }
  return false;
};

console.log(hasFalsyValue(isFalsy));