/* Pasos: 
- Verificar si tengo que elimnar elementos 

- Mover los antiguos elementos tantos espacios a la derecha como nuevos elementos
- Asignar la posición correspondiente a los nuevos elementos


*/

export default function splice(array: Array<any>, position: number, deleteCount: number, ...elements: any) {
    let finalDelete = position >= 0 ? position : array.length + position
    let addAfter: Array<any> = []
    let count1 = 0;
    let count2 = 0;
    for (let i = array.length - 1; i >= finalDelete + deleteCount; i--) {
        addAfter[addAfter.length] = array[i]
    } /* Guarda los elementos que más tarde hay que meter en el array */
    for (let i = array.length - 1 + deleteCount; i > finalDelete; i--) {
        array.length--
    } /* Elimina los elementos hasta la posición de inicio */
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            array[array.length] = elements[count1]
            count1++
        }
    } /* Añadimos los elementos de elements al array */
    if (deleteCount < elements.length) {
        for (let i = 0; i < addAfter.length; i++) {
            array[array.length] = addAfter[addAfter.length - 1 - count2]
            count2++
        }
    }
    /* Añadimos los elementos de addAfter */
}
