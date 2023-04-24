/* Pasos: 
- Verificar si tengo que elimnar elementos 

- Mover los antiguos elementos tantos espacios a la derecha como nuevos elementos
- Asignar la posición correspondiente a los nuevos elementos


*/

export default function splice(array: Array<any>, position: number, deleteCount: number, ...elements: any) {
    let finalDelete = position >= 0 ? position : array.length + position
    if (elements.length > deleteCount) {
        for (let i = array.length; i > finalDelete; i--) {
            array[i] = array[i - 1]
        }
        for (let i = 0; i < elements.length; i++) {
            array[finalDelete + i] = elements[i]
        }
    }
    if (elements.length === deleteCount) {
        for (let i = 0; i < elements.length; i++) {
            array[finalDelete + i] = elements[i]
        }
    }
    if (elements.length < deleteCount) {
        for (let i = finalDelete; i < finalDelete + deleteCount; i++) {
            array[i] = array[i + deleteCount]
        }
        array.length -= deleteCount
    }
}
