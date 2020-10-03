
exports.min = function min (array) {
  let numMin = array.sort((a, b) => a - b) ;
  return numMin[0];
}

exports.max = function max (array) {
    let numMax = array.sort((a, b) => b - a) ;
    return numMax[0];
}

exports.avg = function avg (array) {
    let countAvg = array.reduce((acc , elem) => acc + elem) / array.length;
  return countAvg;
}
