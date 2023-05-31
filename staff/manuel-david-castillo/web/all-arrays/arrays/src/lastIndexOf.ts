export default function lastIndexOf(array: Array<any>, searchElement: any, fromIndex?: number): any {
    if (fromIndex) {
        if (fromIndex < 0) {
            for (let i = array.length + fromIndex; i >= 0; i--) {
                if (array[i] === searchElement) {
                    return i
                }
            }
        } else {
            for (let i = fromIndex; i >= 0; i--) {
                if (array[i] === searchElement) {
                    return i
                }
            }
        }
    } else {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] === searchElement) {
                return i
            }
        }
    }
    return -1
}