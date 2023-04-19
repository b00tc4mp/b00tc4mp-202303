export default function unshift(array: Array<any>, ...elements: Array<any>): any {
    /* 
    TODO pasos con ej: [10, 20, 30], unshift -30, -20, -10, 0
    - creo un for para pasar por todos los elementos del array tantas posiciones como la longitud de elements a la derecha 
    [10, 20, 30, , , , 30] 
    [10, 20, 30, , , 20, 30]
    [10, 20, 30, , 10, 20, 30]
    - asigno a las primeras posiciones los nuevos elementos en orden correlativo 
    [-30, 20, 30, , 10, 20, 30]
    [-30, -20, 30, , 10, 20, 30]
    [-30, -20, -10, , 10, 20, 30]
    [-30, -20, -10, 0, 10, 20, 30]
    - devuelvo el length del nuevo array 
    7
     */

    for (let i = array.length - 1; i >= 0; i--) {
        array[i + elements.length] = array[i]
    }
    for (let i = 0; i < elements.length; i++) {
        array[i] = elements[i]
    }


    return array.length
}