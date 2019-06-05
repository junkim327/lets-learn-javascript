class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }

  sum() {
    return (this.first + this.second);
  }
}

var kim = new Person('Kim', 10, 20);
kim.sum = function() {
  return 'kim : ' + (this.first + this.second);
}
var lee = new Person('Lee', 20, 20);

console.log('Kim', kim.sum());
console.log('Lee', lee.sum());