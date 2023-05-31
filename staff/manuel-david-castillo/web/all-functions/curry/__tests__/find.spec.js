class Curry {
  length = 0;

  find(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        return this[i];
      }
    }
  }
}

function esCereza(fruta) {
  return fruta.nombre === "cerezas";
}
const inventario = new Curry();
inventario[0] = { nombre: "manzanas", cantidad: 2 };
inventario[1] = { nombre: "bananas", cantidad: 0 };
inventario[2] = { nombre: "cerezas", cantidad: 5 };
inventario.length = 3;

describe("find", () => {
  it("should return the value which fulfills the function", () => {
    expect(inventario.find(esCereza)).toEqual({
      nombre: "cerezas",
      cantidad: 5,
    });
  });
});
