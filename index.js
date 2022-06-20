function recebeNum(params) {
  if((typeof params) !== 'number') return 'o valor deve ser um número';
  switch (true) {
    case params > 0:
      return 'positivo';
    case params < 0:
      return 'negativo';
    default:
      return 'neutro';
  }
}

module.exports = recebeNum;