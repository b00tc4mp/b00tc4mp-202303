export default function shift(array: Array<any>): any {
    /* TODO steps ej: [10, 20, 30]
    - reference first element with const deleted
    - displace elements one position backward (with for loop)
    [20, 20, 30]
    [20, 30, 30]
    - make array length 1 position shorter (--)
    - return deleted
    */

    let deleted = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1]
    };
    array.length--

    return deleted
}