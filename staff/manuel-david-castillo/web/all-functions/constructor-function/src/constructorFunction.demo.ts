class Person {
  name: string
  age: number
  gender: string

  constructor(name: string, age: number, gender: string) {
    this.name = name
    this.age = age
    this.gender = gender
  }
}

const person1: Person = new Person('Manuel', 23, 'male')
const person2: Person = new Person('Paco', 50, 'male')
console.log(person1)
console.log(person1.name)
console.log(person2)
console.log(person2.name)

class OtherPerson {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  saludar() {
    console.log('Hola soy ' + this.name + ' y tengo ' + this.age + ' años')
  }

  getAge() {
    console.log(this.age)
  }

}

let otherPerson1: OtherPerson = new OtherPerson('Arba', 20)
console.log(otherPerson1)
otherPerson1.age = 21
console.log(otherPerson1)
otherPerson1.saludar()
otherPerson1.getAge()
