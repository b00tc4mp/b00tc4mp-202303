export default function at(array: Array<any>, index: number): number {
    return array[index < 0 ? array.length + index : index]
}