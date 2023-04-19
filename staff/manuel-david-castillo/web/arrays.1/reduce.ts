export default function reduce(array: Array<any>, callback: Function, initialValue: number): any {
    let acumulador: any = initialValue
    for (let i = 0; i < array.length; i++) {
        acumulador = callback(acumulador, array[i])
    }
    return acumulador
}