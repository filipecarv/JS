function CalcularAreaPerimetroSalaCircular(Raio) {
    let Area = Math.PI * Raio * Raio;
    let Perimetro = 2 * Math.PI * Raio;
    
    console.log(`Área da sala circular: ${Area.toFixed(2)} metros quadrados meu bom!`);
    console.log(`Perímetro da sala circular: ${Perimetro.toFixed(2)} metros meu bom!`);
}
// Exemplo de uso
let Raio = 4; // em metros
CalcularAreaPerimetroSalaCircular(Raio);