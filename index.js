const recipes = {};

// function updateObjectWithKeyAndValue(object, key, value) {
//   var newObject = Object.assign({}, object);
//
//   newObject[key] = value;
//
//   return newObject;
// }
//
// function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
//   object[key] = value;
//
//   return object;
// }
//
// function deleteFromObjectByKey(object, key) {
//   var newObject = Object.assign({}, object);
//
//   delete newObject[key];
//
//   return newObject
// }
//
// function destructivelyDeleteFromObjectByKey(object, key) {
//   delete object[key];
//
//   return object;
// }

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object);

  newObj[key] = value;

  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;

  return object;
}

function deleteFromObjectByKey(object, key) {

}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];

  return object;
}
