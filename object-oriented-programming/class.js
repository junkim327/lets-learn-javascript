class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }

  sum() {
    return this.first + this.second;
  }
}

class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  }

  sum() {
    return super.sum() + this.third;
  }

  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}

var kim = new PersonPlus('Kim', 10, 20, 30);
var lee = new Person('Lee', 20, 20);

console.log('kim.avg()', kim.avg());
console.log('kim.sum()', kim.sum());