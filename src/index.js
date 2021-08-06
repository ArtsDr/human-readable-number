module.exports = function toReadable(number) {

    const belowTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const belowHundred = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let i = 0;
    let stage = arguments[0];
    let result = '';

    if (number < 20) {
        result += belowTwenty[number];

    } else if (number < 100) {
        i = number % 10;
        result += belowHundred[Math.floor(number / 10)];

        if (i != 0){
            result += ' ' + belowTwenty[i];
        }

    } else if (number < 1000) {
        result = toReadable(Math.floor(number / 100)) + ' hundred ' + toReadable(Math.floor(number % 100));
        
    };
    return result;
}
    


