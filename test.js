const { expect } = require('chai');

const recebeNum = require('./index');

describe('verifica o numero', () => {
  describe('verifica se e positivo', () => {
    it('retorna positivo', () => {
      const resposta = recebeNum(4);

      expect(resposta).to.be.a('string');
      expect(resposta).to.be.equal('positivo');
    });
  });

  describe('verifica se e negativo', () => {
    it('retorna negativo', () => {
      const resposta = recebeNum(-4);

      expect(resposta).to.be.a('string');
      expect(resposta).to.be.equal('negativo');
    });
  });

  describe('verifica se e neutro', () => {
    it('retorna neutro', () => {
      const resposta = recebeNum(0);

      expect(resposta).to.be.a('string');
      expect(resposta).to.be.equal('neutro');
    });
  });

  describe('verifica erro ao inserir !number', () => {
    it('retorna uma string avisando q nao recebeu numero', () => {
      const resposta = recebeNum('isso com certeza nao é um numero');

      expect(resposta).to.be.a('string');
      expect(resposta).to.be.equal('o valor deve ser um número');
    });
  });
});