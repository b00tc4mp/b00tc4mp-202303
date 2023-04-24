export default function splice(array: Array<any>, position: number, deleteCount: number, ...elements: any) {
    for (let i = position; i < array.length + elements.length; i++) {
        if (deleteCount === elements.length) {
            array[position] = elements[elements.length - 1]
        }
    }
}