console.log('join demo')
import join from "./join";

const elements = ['Fire', 'Air', 'Water'];
console.log('case 0')
console.log(join(elements));
// Expected output: "Fire,Air,Water"
console.log('case 1')
console.log(join(elements, ''));
// Expected output: "FireAirWater"
console.log('case 2')
console.log(join(elements, '-'));
// Expected output: "Fire-Air-Water"
console.log('case 3')
console.log(join(elements, 10));
// Expected output: "Fire10Air10Water"