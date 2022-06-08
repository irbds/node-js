const CalcIMC = ({ altura, peso }) => peso/Math.pow((altura)/100, 2);

const CalcMediaVel = ({ distancia, tempo }) => distancia/tempo;

module.exports = { 
  CalcIMC,
  CalcMediaVel
}