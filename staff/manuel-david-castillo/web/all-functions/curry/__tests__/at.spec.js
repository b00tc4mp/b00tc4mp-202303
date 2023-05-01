class Curry {
  length = 0;

  at(index) {
    return this[index < 0 ? array.length + index : index];
  }
}

const newCurry = new Curry();
newCurry[0] = "A";
newCurry[1] = "B";
newCurry[2] = "C";
newCurry.length = 3;

describe("at", () => {
  it("debería devolver el valor del index dado", () => {
    expect(newCurry.at(1)).toEqual("B");
  });
});
