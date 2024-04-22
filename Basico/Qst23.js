function MostrarTabuada(Numero) {
    for (let i = 1; i <= 10; i++) {
      let Resultado = Numero * i;
      console.log(`${Numero} x ${i} = ${Resultado}`);
    }
}
// Exemplo de uso
let Numero = 7;
MostrarTabuada(Numero);