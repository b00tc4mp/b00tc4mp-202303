export default function indexOf(array: Array<any>, searchElement: any, fromIndex?: number): any {
    if (fromIndex) {
        if (fromIndex < 0) {
            for (let i = array.length + fromIndex; i < array.length; i++) {
                if (array[i] === searchElement) {
                    return i
                } else {
                    return -1;
                }
            }
        } else {
            for (let i = fromIndex; i < array.length; i++) {
                if (array[i] === searchElement) {
                    return i
                } else {
                    return -1;
                }
            }
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === searchElement) {
                return i
            } else {
                return -1;
            }
        }
    }
}