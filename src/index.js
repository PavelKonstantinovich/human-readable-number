module.exports = function toReadable(number) {
    let arrToTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let arrToHundred = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    const getNumToHundred = (n) => n >= 20 ? arrToHundred[Math.floor(n / 10)] + ' ' + arrToTwenty[n % 10] : arrToTwenty[n]
    return number === 0 ? 'zero' : number > 99 ? (arrToTwenty[Math.floor(number / 100)] + ' hundred ' + getNumToHundred(number % 100)).trim() : (getNumToHundred(number)).trim()
}
