class Curry {
  length = 0;

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i);
    }
  }

  map(callback) {
    const newCurry = new Curry();
    for (let i = 0; i < this.length; i++) {
      newCurry[i] = callback(this[i]);
      newCurry.length += 1;
    }
    return newCurry;
  }

  at(index) {
    return this[index < 0 ? array.length + index : index];
  }

  concat(array) {
    const newCurry = new Curry();
    for (let i = 0; i < this.length; i++) {
      newCurry[i] = this[i];
      newCurry.length += 1;
    }
    for (let i = 0; i < array.length; i++) {
      newCurry[i + this.length] = array[i];
      newCurry.length += 1;
    }
    return newCurry;
  }

  filter(callback) {
    let newCurry = new Curry();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        newCurry[newCurry.length] = this[i];
        newCurry.length += 1; /* Arreglar esto */
      }
    }

    return newCurry;
  }

  find(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        return this[i];
      }
    }
  }

  findIndex(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        return i;
      }
    }
    return -1;
  }
}

window.Curry = Curry;

const newCurry = new Curry();
newCurry[0] = "A";
newCurry[1] = "B";
newCurry[2] = "C";
console.log("newCurry original");
console.log(newCurry);

newCurry.length = 3;

const add0 = (elem) => {
  return elem + elem;
};

newCurry.forEach((elem, i) => {
  newCurry[i] = add0(elem);
});
console.log("newCurry tras aplicar forEach");
console.log(newCurry);

const otherCurry = newCurry.map((elem) => {
  return elem + elem;
});
console.log("otherCurry creado con map");
console.log(otherCurry);

const index = otherCurry.at(1);
console.log("Index devuelto con at");
console.log(index);

const concatCurry = newCurry.concat(otherCurry);
console.log("curry concatenado con otro curry");
console.log(concatCurry);

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

const filterCurry = numberCurry.filter(lessThanTwo);
console.log("valores que cumplen la condición de la función, usando filter");
console.log(filterCurry);

function esCereza(fruta) {
  return fruta.nombre === "cerezas";
}
const inventario = new Curry();
inventario[0] = { nombre: "manzanas", cantidad: 2 };
inventario[1] = { nombre: "bananas", cantidad: 0 };
inventario[2] = { nombre: "cerezas", cantidad: 5 };
inventario.length = 3;

console.log("Elemento encontrado con find");
console.log(inventario.find(esCereza));

function moreThanTwo(elem) {
  return elem > 2;
}

console.log("Index del primer valor que cumple la función");
const filterIndexCurry = numberCurry.findIndex(moreThanTwo);
console.log(filterIndexCurry);
