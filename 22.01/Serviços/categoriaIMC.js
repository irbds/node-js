const categoriaIMC = (IMC) => {
  switch (true) {
    case IMC < 18.5:
      return 'Categoria: Abaixo do peso (magreza)'
    case IMC < 24.9:
      return 'Categoria: Peso normal'
    case IMC < 29.9:
      return 'Categoria: Acima do peso (sobrepeso)'
    case IMC < 34.9:
      return 'Categoria: Obesidade grau I'
    case IMC < 39.9:
      return 'Categoria: Obesidade grau II'
    default:
      return 'Obesidade graus III e IV'
  }
}

module.exports = categoriaIMC;