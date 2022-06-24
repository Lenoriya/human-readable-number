module.exports = function toReadable (number) {
    function one_digit (n) {
        switch (n) {
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'tree';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
        }
    }

    function two_digit (n) {
        switch (n) {
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen';
            case 15: return 'fifteen';
            case 16: return 'sixteen';
            case 17: return 'seventeen';
            case 18: return 'eighteen';
            case 19: return 'nineteen';
            case 20: return 'twenty';
            case 30: return 'thirty';
            case 40: return 'forty';
            case 50: return 'fifty';
            case 60: return 'sixty';
            case 70: return 'seventy';
            case 80: return 'eighty';
            case 90: return 'ninety';
        }
    }

    if (number < 10) return one_digit(number);
    else if ((number >= 10) && (number <= 20)) return two_digit(number);
    else if (number < 100) {
        if (number % 10 === 0) return two_digit(number);
        else return (two_digit(Math.floor(number/10)) +' '+ (one_digit(number % 10)));
    }
    else return (one_digit(Math.floor(number/100))+ ' hundred ')
  
}
