console.log('filter demo')
import filter from "./filter";

function esSuficientementeGrande(elemento) {
    return elemento >= 10;
}
var filtrados = [12, 5, 8, 130, 44]
// filtrados es [12, 130, 44]

console.log('case 0')
console.log(filter(filtrados, esSuficientementeGrande))