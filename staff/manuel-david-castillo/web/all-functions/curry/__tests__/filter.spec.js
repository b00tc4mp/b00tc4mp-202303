class Curry {
  length = 0;

  filter(callback) {
    let newCurry = new Curry();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        newCurry[newCurry.length] = this[i];
        newCurry.length += 1;
      }
    }

    return newCurry;
  }
}

function lessThanTwo(elem) {
  return elem <= 2;
}

const numberCurry = new Curry();
numberCurry[0] = 1;
numberCurry[1] = 2;
numberCurry[2] = 3;
numberCurry[3] = 4;
numberCurry[4] = 5;
numberCurry.length = 5;

describe("filter", () => {
  it("should create a new array with the element which fulfill the function", () => {
    expect(numberCurry.filter(lessThanTwo)).toEqual({ 0: 1, 1: 2, length: 2 });
  });
});
