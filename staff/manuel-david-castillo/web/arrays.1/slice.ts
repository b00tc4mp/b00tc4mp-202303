export default function slice(array: Array<any>, beggining: number, end?: number): Array<any> {
    let newArray: Array<any> = [];
    let n = 0;
    if (beggining >= array.length) {
        return newArray
    }

    for (let i = beggining < 0 ? array.length + beggining : beggining; i < (end! >= array.length || !end ? array.length : end); i++) {
        newArray[n] = (array[i]);
        n++
    }
    return newArray;
}
