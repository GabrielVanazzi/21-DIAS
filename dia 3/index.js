let nome = ""
let idade = 0
let peso = 0
let altura = 0

nome = prompt(' insira seu nome: ') 
idade = parseInt(prompt(' digite sua idade : '))
peso = parseInt(prompt(' insira seu peso: '))
altura = parseFloat(prompt(' digite sua altura: '))

let anoNasc = 0
anoNasc = 2024 - idade

let imc = 0
imc = peso / (altura * altura)

console.log( "Olá " + nome + " você têm " + idade + " anos, nasceu em " + anoNasc + ", seu peso é de " + peso + 
"kg, sua altura é de " + altura + "M e seu IMC é de " + imc + "kg/m2. Obrigado! ") 
