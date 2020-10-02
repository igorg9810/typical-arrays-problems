
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

exports.min = function min (array) {
  if (array === undefined || array === null || array.length == 0){
    return 0;
  }
  array.sort(compareNumeric)
  return array[0];
}

exports.max = function max (array) {
  if (array === undefined || array === null || array.length == 0){
    return 0;
  }
  array.sort(compareNumeric)
  return array[array.length - 1];
}

exports.avg = function avg (array) {
  if (array === undefined || array === null || array.length == 0){
    return 0;
  }
  let sum = 0;
  for (let elem of array){
    sum += elem;
  }
  return sum/array.length;
}
