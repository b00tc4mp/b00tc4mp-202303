class Curry {
  length = 0;

  map(callback) {
    const newCurry = new Curry();
    for (let i = 0; i < this.length; i++) {
      newCurry[i] = callback(this[i]);
      newCurry.length += 1;
    }
    return newCurry;
  }
}

const newCurry = new Curry();
newCurry[0] = "A";
newCurry[1] = "B";
newCurry[2] = "C";
newCurry.length = 3;

describe("map", () => {
  it("debería añadir el mismo elemento que hay en su posición", () => {
    const otherCurry = newCurry.map((elem) => {
      return elem + elem;
    });

    expect(otherCurry).toEqual({ 0: "AA", 1: "BB", 2: "CC", length: 3 });
  });
});
