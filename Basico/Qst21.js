function CalcularAreaPerimetroSalaRetangular(Altura, Largura) {
    let Area = Altura * Largura;
    let Perimetro = 2 * (Altura + Largura);
    
    console.log(`Área da sala: ${Area} metros quadrados meu bom!`);
    console.log(`Perímetro da sala: ${Perimetro} metros meu bom!`);
}
// Exemplo de uso
let Altura = 3; // em metros
let Largura = 5; // em metros
CalcularAreaPerimetroSalaRetangular(Altura, Largura);
  