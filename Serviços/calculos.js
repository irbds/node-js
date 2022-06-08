const CalcIMC = ({ altura, peso }) => peso/Math.pow((altura)/100, 2);

const CalcMediaVel = ({ distancia, tempo }) => distancia/tempo;

const RandomNum = () => Math.floor((Math.random() * 10));

module.exports = { 
  CalcIMC,
  CalcMediaVel,
  RandomNum
}