function CalcularFatorial(Numero) {
    if (Numero === 0 || Numero === 1) {
      return 1;
    }
  
    let Fatorial = 1;
    for (let i = 2; i <= Numero; i++) {
      Fatorial *= i;
    }
  
    return Fatorial;
}
// Exemplo de uso
let Numero = 5;
let Resultado = CalcularFatorial(Numero);
console.log(`O fatorial de ${Numero} é ${Resultado} meu bom!`);