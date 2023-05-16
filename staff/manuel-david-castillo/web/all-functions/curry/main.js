export class Curry {
  length = 0;

  at(index) {
    return this[index < 0 ? array.length + index : index];
  }
}
