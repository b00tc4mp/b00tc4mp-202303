class Curry {
  length = 0;

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i);
    }
  }

  map(callback) {
    const newCurry = new Curry();
    for (let i = 0; i < this.length; i++) {
      newCurry[i] = callback(this[i]);
      newCurry.length += 1;
    }
    return newCurry;
  }
}

window.Curry = Curry;

const newCurry = new Curry();
newCurry[0] = "A";
newCurry[1] = "B";
newCurry[2] = "C";
console.log(newCurry);

newCurry.length = 3;

const add0 = (elem) => {
  return elem + elem;
};

newCurry.forEach((elem, i) => {
  newCurry[i] = add0(elem);
});
console.log(newCurry);

const otherCurry = newCurry.map((elem) => {
  return elem + elem;
});

console.log(otherCurry);
