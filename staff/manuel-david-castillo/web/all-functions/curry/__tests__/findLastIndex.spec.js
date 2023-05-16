class Curry {
  length = 0;

  findLastIndex(callback) {
    for (let i = this.length - 1; i >= 0; i--) {
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

describe("findLastIndex", () => {
  it("should return the index of value which fulfills the function starting at the end", () => {
    expect(numberCurry.findLastIndex(moreThanTwo)).toEqual(4);
  });
});
