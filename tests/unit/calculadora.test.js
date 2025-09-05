const calculadora = require("../../models/calculadora");

test("Somar 2 + 2 retorna 4", () => {
  const resultado = calculadora.soma(2, 2);
  expect(resultado).toBe(4);
});

test("Somar 5 + 100 retorna 105", () => {
  const resultado = calculadora.soma(5, 100);
  expect(resultado).toBe(105);
});

test("String 'banana' + 100 retorna string 'erro'", () => {
  const resultado = calculadora.soma("banana", 100);
  expect(resultado).toBe("Erro");
});
