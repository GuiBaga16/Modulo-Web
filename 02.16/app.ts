import promptSync from "prompt-sync";
const prompt = promptSync();

let continuar = 's';
let nomes: string[] = [];
let valores: number[] = [];
let total = 0;

while (continuar === 's') {
    const nome = prompt("Digite o nome do pedido: ");
    const valor = parseInt(prompt("Digite o valor da compra: "));

    nomes.push(nome);
    valores.push(valor);
    total += valor;

    continuar = prompt("Deseja continuar? (s/n): ");
}
console.log("Os pedidos são:");
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i] + ": R$" + valores[i]);
}

console.log("O valor total é: R$" + total);