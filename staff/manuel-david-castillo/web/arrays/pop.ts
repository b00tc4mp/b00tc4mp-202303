export default function pop(array: Array<any>): any {
    if (array) {
        let lastElement: string = array[array.length - 1];
        let newArray = array.slice(0, array.length - 1);
        array = newArray
        return (lastElement)
    } else {
        return null;
    }

}