class Curry {
  length = 0;

  indexOf(searchElement, fromIndex) {
    if (fromIndex) {
      if (fromIndex < 0) {
        for (let i = this.length + fromIndex; i < this.length; i++) {
          if (this[i] === searchElement) {
            return i;
          }
        }
      } else {
        for (let i = fromIndex; i < this.length; i++) {
          if (this[i] === searchElement) {
            return i;
          }
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        if (this[i] === searchElement) {
          return i;
        }
      }
    }
    return -1;
  }
}

const numberCurry = new Curry();
numberCurry[0] = 13;
numberCurry[1] = 25;
numberCurry[2] = 32;
numberCurry[3] = 49;
numberCurry[4] = 54;
numberCurry.length = 5;

describe("indexOf", () => {
  it("should return the index 0", () => {
    expect(numberCurry.indexOf(32)).toEqual(2);
  });
});
