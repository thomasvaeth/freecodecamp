// The DNA strand is missing the pairing element.
// Match each character with the missing element and return the results as a 2d array.
function pair(str) {
    var newStr = str.split('');
    var arr = [];
    for (var i = 0; i < newStr.length; i++) {
        if (newStr[i] === 'A') {
            arr.push(['A', 'T']);
        } else if (newStr[i] === 'T') {
            arr.push(['T', 'A']);
        } else if (newStr[i] === 'C') {
            arr.push(['C', 'G']);
        } else {
            arr.push(['G', 'C']);
        }
    }
    return arr;
}

pair("GCG");