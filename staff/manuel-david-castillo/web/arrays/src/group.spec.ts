import group from "./group";

describe('group', () => {
  it('should return a object with the element divided according to the function condition', () => {
    const inventory = [
      { name: "asparagus", type: "vegetables", quantity: 5 },
      { name: "bananas", type: "fruit", quantity: 0 },
      { name: "goat", type: "meat", quantity: 23 },
      { name: "cherries", type: "fruit", quantity: 5 },
      { name: "fish", type: "meat", quantity: 22 },
    ];

    const result: any = group(inventory, ({ type }) => type);

    expect(result).toEqual({
      vegetables: [
        { name: 'asparagus', type: 'vegetables', quantity: 5 },
      ],
      fruit: [
        { name: "bananas", type: "fruit", quantity: 0 },
        { name: "cherries", type: "fruit", quantity: 5 }
      ],
      meat: [
        { name: "goat", type: "meat", quantity: 23 },
        { name: "fish", type: "meat", quantity: 22 }
      ]
    })
  })
  it('should return a object with the element divided according to the function condition', () => {
    const inventory = [
      { name: "asparagus", type: "vegetables", quantity: 5 },
      { name: "bananas", type: "fruit", quantity: 0 },
      { name: "goat", type: "meat", quantity: 23 },
      { name: "cherries", type: "fruit", quantity: 5 },
      { name: "fish", type: "meat", quantity: 22 },
    ];

    function myCallback({ quantity }) {
      return quantity > 5 ? "ok" : "restock";
    }

    const result2 = group(inventory, myCallback);
    expect(result2).toEqual({
      restock: [
        { name: "asparagus", type: "vegetables", quantity: 5 },
        { name: "bananas", type: "fruit", quantity: 0 },
        { name: "cherries", type: "fruit", quantity: 5 }
      ],
      ok: [
        { name: "goat", type: "meat", quantity: 23 },
        { name: "fish", type: "meat", quantity: 22 }
      ]
    })
  })
})