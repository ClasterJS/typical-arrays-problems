
exports.min = function min (array) {
  let numMin = a.sort((a, b) => a - b) ;
  return numMin[0];
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
    let countAvg = a.reduce((acc , elem) => acc + elem) / a.length;
  return countAvg;
}
