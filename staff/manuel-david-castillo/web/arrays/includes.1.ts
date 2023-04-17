export default function includes(array: Array<any>, element: any, fromindex?: any): boolean {
    if (!fromindex || fromindex < 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                return true
            }
        }
        return false
    } else {
        for (let i = fromindex; i < array.length; i++) {
            if (array[i] === element) {
                return true
            }
        }
    }
    return false
}