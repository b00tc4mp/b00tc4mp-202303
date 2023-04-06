import indexOf from './indexOf'

var array = [2, 9, 9];

indexOf(array, 2);     // 0
indexOf(array, 7);     // -1
indexOf(array, 9, 2);  // 2
indexOf(array, 2, -1); // -1
indexOf(array, 2, -3); // 0
