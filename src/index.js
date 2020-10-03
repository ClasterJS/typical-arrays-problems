
exports.min = function min (array) {
    if (!(array && array.length === 0 ) && (array !== '') && (array !== undefined) && (array !== 0)) {
        let numMin = array.sort((a, b) => a - b) ;
        return numMin[0]
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if (!(array && array.length === 0 ) && (array !== '') && (array !== undefined) && (array !== 0)) {
        let numMax = array.sort((a, b) => b - a) ;
        return numMax[0];
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if (!(array && array.length === 0 ) && (array !== '') && (array !== undefined) && (array !== 0)) {
        let countAvg = array.reduce((acc , elem) => acc + elem) / array.length;
        return countAvg;
    } else {
        return 0;
    }
}
