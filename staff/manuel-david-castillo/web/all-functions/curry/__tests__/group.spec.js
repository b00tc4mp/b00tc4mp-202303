class Curry {
  length = 0;

  group(callback) {
    let newObject = new Curry();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        newObject[callback(this[i])] = [];
      }
    }
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        newObject[callback(this[i])][newObject[callback(this[i])].length] =
          this[i];
      }
    }
    return newObject;
  }
}

const inventory = new Curry();
inventory[0] = { name: "asparagus", type: "vegetables", quantity: 5 };
inventory[1] = { name: "bananas", type: "fruit", quantity: 0 };
inventory[2] = { name: "goat", type: "meat", quantity: 23 };
inventory[3] = { name: "cherries", type: "fruit", quantity: 5 };
inventory[4] = { name: "fish", type: "meat", quantity: 22 };
inventory.length = 5;

const result = inventory.group(({ type }) => type);
let curryResult = new Curry();
curryResult["vegetables"] = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
];
curryResult["fruit"] = [
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "cherries", type: "fruit", quantity: 5 },
];
curryResult["meat"] = [
  { name: "goat", type: "meat", quantity: 23 },
  { name: "fish", type: "meat", quantity: 22 },
];

describe("group", () => {
  it("should return a new Curry which complies with the grouping of function", () => {
    expect(result).toEqual(curryResult);
  });
});
