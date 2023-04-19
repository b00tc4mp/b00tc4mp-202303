export default function includes(array: Array<any>, element: any, fromIndex?: any): boolean {
    for (let i = !fromIndex || fromIndex < 0 ? 0 : fromIndex; i < array.length; i++) {
        if (array[i] === element) {
            return true
        }
    }
    return false
}