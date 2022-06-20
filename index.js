function recebeNum(params) {
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