const CalculoIMC = ({ altura, peso }) => peso/Math.pow((altura)/100, 2);

module.exports = CalculoIMC;