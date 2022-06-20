const { expect } = require('chai');
const fs = require('fs').promises;
const sinon = require('sinon');

const writeFile = require('./writeFile');

describe('testes para escrita em arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFile');
  });

  after(() => {
    fs.writeFile.restore();
  });

  describe('verifica se é uma string', () => {
    it('retorna uma string', async () => {
      const resposta = await writeFile('./file0.txt', 'isso é um teste meu chegado');

      expect(resposta).to.be.a('string');
    });
  })

  describe('verifica se escreve com sucesso', () => {
    it('retorna ok quando escreve com sucesso', async () => {
      const resposta = await writeFile('./file0.txt', 'isso é um teste meu chegado');

      expect(resposta).to.be.equal('ok');
    });
  });
})

describe('chamada de funcao sem argumentos', () => {
  describe('verifica se quando nao passa parametro para a funcao', () => {
    it('retorna um erro', async () => {
      const resposta = await writeFile();

      expect(resposta).to.be.equal('funcao chamada sem argumentos');
    });
  })
})