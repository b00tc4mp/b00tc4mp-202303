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

var car1 = new Car('golf')
var car2 = new Car('lambo')

console.log(car1, car2)
// VM744:17 Car {name: 'golf', status: 'off'} Car {name: 'lambo', status: 'off'}
// undefined
car1.start()
// undefined
car1
// Car {name: 'golf', status: 'on'}
car1.stop()
// undefined
car1
// Car {name: 'golf', status: 'off'}