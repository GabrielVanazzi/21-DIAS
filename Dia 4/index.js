let fome = (prompt("Você esta com fome?"))
let dinheiro = (prompt("Você tem dinheiro?"))
let restaurante = (prompt("O restaurante está aberto?"))

if(fome === "não" || dinheiro === "não"){
    console.log("Hoje a janta será em casa! ");
}else if(fome === "sim" && restaurante == "sim" ){
    console.log("Hoje o jantar será no seu restaurante favorito! ");
}else{
    console.log("Peça um delivery!")
}