function ConverterDolarParaReal(ValorEmDolar) {
    let CotaçãoDolar = 4.80;
    let ValorEmReais = ValorEmDolar * CotaçãoDolar;
    return ValorEmReais.toFixed(2);
}
// Exemplo de uso
let ValorEmDolar = 50;
let ValorEmReais = converterDolarParaReal(ValorEmDolar);
console.log(`${ValorEmDolar} dólares equivalem a R$ ${ValorEmReais} meu bom!`);