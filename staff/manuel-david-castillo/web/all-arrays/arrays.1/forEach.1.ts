/*
PASOS:  
 - un for que pase por todos los elementos del array
 - aplicar la función a cada elemento del array 
 */

export default function forEach(array: Array<any>): any {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
} 