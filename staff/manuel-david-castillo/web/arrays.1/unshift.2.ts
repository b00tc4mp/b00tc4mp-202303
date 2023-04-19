export default function unshift(array: Array<any>, element: number | Array<any>): any {
    /* 
    TODO pasos ej: [10, 20, 30]
    - creo un for para pasar por todos los elementos del array un espacio a la derecha 
    [10, 20, 30, 30]
    [10, 20, 20, 30]
    [10, 10, 20, 30]
    - asigno la primera posición al nuevo elemento 
    [0, 10, 20, 30]
    - devuelvo el length del nuevo array 
    4
     */

    for (let i = array.length - 1; i >= 0; i--) {
        array[i + 1] = array[i]

    }

    array[0] = element

    return array.length
}