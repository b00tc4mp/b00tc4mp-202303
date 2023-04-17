export default function slice(array: Array<any>, principio: number, fin?: number): Array<any> {
    let newArray: Array<any> = [];
    if (principio >= array.length) {
        return newArray
    }

    for (let i = principio < 0 ? array.length + principio : principio; i < (fin! < array.length ? fin! : array.length); i++) {
        newArray.push(array[i]);
    }
    return newArray;
}
