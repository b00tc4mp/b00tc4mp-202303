/* Pasos: 
- Verificar si tengo que elimnar elementos 

- Mover los antiguos elementos tantos espacios a la derecha como nuevos elementos
- Asignar la posición correspondiente a los nuevos elementos


*/

export default function splice(array: Array<any>, position: number, deleteCount: number, ...elements: any) {
    let count: number = 0;
    if (deleteCount <= 0) {
        for (let i = array.length - 1; i >= position; i--) {
            array[i + elements.length] = array[i]
        }
        for (let i = position; i < position + elements.length; i++) {
            array[i] = elements[count]
            count++
        }
    } else {
        for (let i = position; i < array.length; i++) {
            array.length--
        };
        for (let i = array.length - 1; i >= position; i--) {
            array[i + elements.length] = array[i]
        };
        for (let i = position; i < position + elements.length; i++) {
            array[i] = elements[count]
            count++
        }
    }
}
