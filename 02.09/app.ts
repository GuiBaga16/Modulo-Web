// exr 1

let numero1: number = 5;
let numero2: number = 5;
let resultado = numero1 * numero2;
console.log("multiplicação: " + numero1 + " X " + numero2 + " = " + resultado);


// exr 2

import promptSync from "prompt-sync";
const prompt = promptSync();

const time: string = prompt("Digite seu time de futebol: ");
if (time === "Gremio") {

    console.log("Você é Gremista");

} else if (time === "Internacional") {

    console.log("Você é Colorado");

} else {
    console.log("Não consegui encontrar seu time");
}


// exr 3

import promptSync from "prompt-sync";
const prompt = promptSync();

let contadorCleber: number = 0;

for (let i = 0; i < 15; i++) {
    let nome = prompt("Digite um nome:");
    if (nome.toLowerCase() === "Cleber") {
        contadorCleber++;
    }
}
console.log("Foram digitados " + contadorCleber + " nomes Cleber");

//exer 4

import promptSync from "prompt-sync";
const prompt = promptSync();

let numero: number = Number("Digite um número inteiro: ");

for (let i = 0; i <= numero; i++) {
    console.log(i);
}


// exer 5

import promptSync from "prompt-sync";
const prompt = promptSync();

let valor1 = parseInt(prompt("Digite o primeiro valor inteiro: "));
let valor2 = parseInt(prompt("Digite o segundo valor inteiro: "));
let valor3 = parseInt(prompt("Digite o terceiro valor inteiro: "));

if (valor1 <= valor2 && valor1 <= valor3) {
    if (valor2 <= valor3) {
        console.log("Valores em ordem crescente: " + valor1 + ", " + valor2 + ", " + valor3);
    } else {
        console.log("Valores em ordem crescente: " + valor1 + ", " + valor3 + ", " + valor2);
    }
} else if (valor2 <= valor1 && valor2 <= valor3) {
    if (valor1 <= valor3) {
        console.log("Valores em ordem crescente: " + valor2 + ", " + valor1 + ", " + valor3);
    } else {
        console.log("Valores em ordem crescente: " + valor2 + ", " + valor3 + ", " + valor1);
    }
} else {
    if (valor1 <= valor2) {
        console.log("Valores em ordem crescente: " + valor3 + ", " + valor1 + ", " + valor2);
    } else {
        console.log("Valores em ordem crescente: " + valor3 + ", " + valor2 + ", " + valor1);
    }
}


// exer 6

import promptSync from "prompt-sync";
const prompt = promptSync();

let contadorJuca = 0;

for (let i = 0; i < 10; i++) {
    let nome = prompt("Digite um nome: ");
    if (nome.toLowerCase() === "juca") {
        contadorJuca++;
    }
}

console.log("Foram digitados " + contadorJuca + " 'juca'");

