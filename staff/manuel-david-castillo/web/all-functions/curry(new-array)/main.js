class Curry {
  length = 0;

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  }

  map(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  }
}

window.Curry = Curry;

const newCurry = new Curry();
newCurry[0] = "A";
newCurry[1] = "B";
newCurry[2] = "C";
console.log(newCurry);
