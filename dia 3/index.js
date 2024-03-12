let nome = ""
let idade = 0
let peso = 0
let altura = 0 

nome = prompt('digite seu nome: ')
idade = parseInt(prompt('digite sua idade'))
peso = parseInt(prompt(' digite seu peso'))
altura = parseFloat(prompt('digite sua altura'))

let anoNasc = 0
anoNasc = 2024 - idade

let imc = 0
imc = peso / (altura * altura)

console.log(" Olá " +nome+ " vimos que você têm " +idade+ " anos, seu peso é de " +peso+ "Kg e sua altura é de " 
+altura+ "M, também temos se IMC, que é de " +imc+ "kg/m2. Obrigado!!") 