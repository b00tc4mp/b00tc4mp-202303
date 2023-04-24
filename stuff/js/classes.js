/*
function Car(name) {
    this.name = name
    this.status = 'off'
}

Car.prototype.start = function() {
    this.status = 'on'
}

Car.prototype.stop = function() {
    this.status = 'off'
}
*/

class Car {
    constructor(name) {
        this.name = name
        this.status = 'off'
    }

    start() {
        this.status = 'on'
    }

    stop() {
        this.status = 'off'
    }
}

var car1 = new Car('golf')
var car2 = new Car('lambo')

// undefined
car1
// Car {name: 'golf', status: 'off'}
car2
// Car {name: 'lambo', status: 'off'}
car1.start()
// undefined
car1
// Car {name: 'golf', status: 'on'}