console.log("map demo")
import map from "./map"

var numbers = [1, 5, 10, 15];
function doubles(x) {
    return x * 2;
};
console.log('case 0')
console.log(map(numbers, doubles))
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]


var numbers = [1, 4, 9];
function roots(num) {
    return Math.sqrt(num);
};
console.log('case 1')
console.log(map(numbers, roots))
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]


var kvArray = [{ clave: 1, valor: 10 },
{ clave: 2, valor: 20 },
{ clave: 3, valor: 30 }];

function reformattedArray(obj) {
    var rObj = {};
    rObj[obj.clave] = obj.valor;
    return rObj;
};
console.log('case 2')
console.log(map(kvArray, reformattedArray))
// reformattedArray es ahora [{1:10}, {2:20}, {3:30}],

// kvArray sigue siendo:
// [{clave:1, valor:10},
//  {clave:2, valor:20},
//  {clave:3, valor: 30}]