ICalculator.prototype.suma = function (number1, number2) {
    let sum = new ICalculator(this.valueof());
    return number1 + number2;
};
ICalculator.prototype.resta = function (number1, number2) {
    let sum = new ICalculator(this.valueof());
    return number1 - number2;
};
window.onload = function () {
    var calc = new ICalculator();
    console.log(`Resultado suma: ${calc.suma(1, 2)}`);
    console.log(`Resultado resta: ${calc.resta(2, 1)}`);
};
