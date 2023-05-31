class Curry {
  length = 0;

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i);
    }
  }
}

const newCurry = new Curry();
newCurry[0] = "A";
newCurry[1] = "B";
newCurry[2] = "C";
newCurry.length = 3;

describe("forEach", () => {
  it("debería añadir el mismo elemento que hay en su posición", () => {
    const add0 = (elem) => {
      return elem + elem;
    };

    newCurry.forEach((elem, i) => {
      newCurry[i] = add0(elem);
    });

    expect(newCurry).toEqual({ 0: "AA", 1: "BB", 2: "CC", length: 3 });
  });
});
