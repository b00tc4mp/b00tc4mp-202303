export default function at(array: Array<any>, index: number): any {
    if (index >= 0) {
        const result = array[index]

    return result
    } else {
        return array[array.length + index]
    }
}