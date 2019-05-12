var memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log('memberArray[1]', memberArray[1]);

var memberObject = {
  manager: 'egoing',
  developer: 'graphittie',
  designer: 'leezhce'
}
console.log('memberObject.designer', memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']); 

// Modify data in the object
memberObject.designer = 'leezche';
console.log("memberObject['designer']", memberObject['designer']); 

// Delete data
delete memberObject.manager
console.log('after delete memberObject.manager', memberObject.manager);