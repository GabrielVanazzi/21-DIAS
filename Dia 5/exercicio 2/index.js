// CRIANDO VARIAVEIS
let valor
let quantidade
let opcao = prompt(" Seja bem vindo ao nosso posto de combustível, você deseja:" + 
  "\n1 = abastecer com gasolina; \n2 = abastecer com alcool; \n3 = calibrar os pneus")

// CRINDO SWTCHCASE
switch (opcao) {
 case "1" : 
    valor = parseInt(prompt("Digite o valor que deseja abastecer:"))
    quantidade = valor / 5
    console.log(" Foram abastecidos " + quantidade + "L de gasolina")
    break;
 case "2" : 
    valor = parseInt(prompt("Digite o valor que deseja abastecer:"))
    quantidade = valor / 3
    console.log(" Foram abastecidos " + quantidade + "L de alcool")
    break;
 default:
    console.log(" Pneus calibrados com sucesso! ")
    break;
}