class Curry {
  length = 0;

  includes(element, fromIndex) {
    for (
      let i = !fromIndex || fromIndex < 0 ? 0 : fromIndex;
      i < this.length;
      i++
    ) {
      if (this[i] === element || (isNaN(this[i]) && isNaN(element))) {
        return true;
      }
    }
    return false;
  }
}

const numberCurry = new Curry();
numberCurry[0] = 13;
numberCurry[1] = 25;
numberCurry[2] = 32;
numberCurry[3] = 49;
numberCurry[4] = 54;
numberCurry.length = 5;

describe("includes", () => {
  it("should return true because 25 are includes", () => {
    expect(numberCurry.includes(25)).toEqual(true);
  });
});
