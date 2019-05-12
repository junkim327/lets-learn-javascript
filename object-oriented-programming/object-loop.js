var memberArray = ['egoing', 'graphittie', 'leezche'];
var i = 0;
console.group('array loop');
while (i < memberArray.length)  {
  console.log(i, memberArray[i]);
  i++;
}
console.groupEnd('array loop');

var memberObject = {
  manager: 'egoing',
  developer: 'graphittie',
  designer: 'leezche'
}
console.group('object loop');
// for...in statement
for (var name in memberObject) {
  console.log(name, memberObject[name]);
}
console.groupEnd('object loop');