/* Pasos: 
- Verificar si tengo que elimnar elementos 

- Mover los antiguos elementos tantos espacios a la derecha como nuevos elementos
- Asignar la posición correspondiente a los nuevos elementos


*/

export default function splice(array: Array<any>, position: number, deleteCount: number, ...elements: any) {
    let finalDelete = position >= 0 ? position : array.length + position
    let addAfter: Array<any> = []
    let count1 = 0;
    for (let i = array.length - 1; i >= finalDelete + deleteCount; i--) {
        addAfter[addAfter.length] = array[i]
    } /* Guarda los elementos que más tarde hay que meter en el array */
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            addAfter[addAfter.length] = elements[i]
        }
    } /* Añado a addAfter los elementos a añadir de elements */
    console.log(addAfter)
    for (let i = array.length - 1 + deleteCount; i > finalDelete; i--) {
        array.length--
    } /* Eliminar elementos del array hasta el lugar adecuado */
    count1 = array.length
    for (let i = addAfter.length - 1; i >= 0; i--) {
        array[count1] = addAfter[i]
        count1++
    }
}
