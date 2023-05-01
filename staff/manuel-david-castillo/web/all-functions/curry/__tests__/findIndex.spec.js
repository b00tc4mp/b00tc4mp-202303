class Curry {
  length = 0;

  findIndex(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        return i;
      }
    }
    return -1;
  }
}

const numberCurry = new Curry();
numberCurry[0] = 1;
numberCurry[1] = 2;
numberCurry[2] = 3;
numberCurry[3] = 4;
numberCurry[4] = 5;
numberCurry.length = 5;

function moreThanTwo(elem) {
  return elem > 2;
}

describe("findIndex", () => {
  it("should return the first index which fulfills the function", () => {
    expect(numberCurry.findIndex(moreThanTwo)).toEqual(2);
  });
});
