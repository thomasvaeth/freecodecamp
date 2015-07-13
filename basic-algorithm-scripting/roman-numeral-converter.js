// Convert the given number into a roman numeral.
function convert(num) {
    var roman = '';
    for (i = num; i > 0; i) {
        if (i <= 49 && i >= 40) {
            roman += 'XL';
            i -= 40;
        } else if (i <= 39 && i >= 30 ) {
            roman += 'XXX';
            i -= 30;
        } else if (i <= 29 && i >= 20 ) {
            roman += 'XX';
            i -= 20;
        } else if (i <= 19 && i >= 10 ) {
            roman += 'X';
            i -=10;
        } else if (i >= 9) {
            roman += 'IX';
            i -= 9;
        } else if (i >= 5) {
            roman += 'V';
            i -= 5;
        } else if (i >= 4) {
            roman += 'IV';
            i -= 4;
        } else {
            roman += 'I';
            i -= 1;
        }
    }
    return roman;
}

convert(36);