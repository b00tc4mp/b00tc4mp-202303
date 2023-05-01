function Curry() {
  this.length = 0;
}

Curry.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Curry.prototype.map = function (callback) {
  {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray[i] = callback(this[i]);
    }
    return newArray;
  }
};

let c = new Curry();

c[0] = "A";
c.length++;
c[1] = "B";
c.length++;
c[2] = "C";
c.length++;

console.log(c);
c.forEach((elem) => console.log(elem));
c.map((elem) => elem.toLowerCase());
