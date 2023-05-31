import Curry from "../main";

describe("at", () => {
  it("should return B", () => {
    const newCurry = new Curry();
    newCurry[0] = "A";
    newCurry[1] = "B";
    newCurry[2] = "C";
    newCurry.length = 3;

    expect(newCurry.at(1)).toEqual("B");
  });
});
