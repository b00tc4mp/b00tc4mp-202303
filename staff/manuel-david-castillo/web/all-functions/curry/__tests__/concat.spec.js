class Curry {
  length = 0;

  concat(array) {
    const newCurry = new Curry();
    for (let i = 0; i < this.length; i++) {
      newCurry[i] = this[i];
      newCurry.length += 1;
    }
    for (let i = 0; i < array.length; i++) {
      newCurry[i + this.length] = array[i];
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

const otherCurry = new Curry();
otherCurry[0] = "A";
otherCurry[1] = "B";
otherCurry[2] = "C";
otherCurry.length = 3;

describe("concat", () => {
  it("debería unir los Curry dados", () => {
    expect(newCurry.concat(otherCurry)).toEqual({
      0: "A",
      1: "B",
      2: "C",
      3: "A",
      4: "B",
      5: "C",
      length: 6,
    });
  });
});
