console.log('Math.PI', Math.PI);
console.log('Math.random()', Math.random());
console.log('Math.floor(2.8)', Math.floor(2.8));

let MyMath = {
  PI: Math.PI,
  random: function() {
    return Math.random();
  },
  floor: function(val) {
    return Math.floor(val);
  }
}

console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.random', MyMath.random());
console.log('MyMath.floor(2.8)', MyMath.floor(2.8));