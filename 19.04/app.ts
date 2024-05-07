import Bebida from "./src/models/Bebida";
import BebidaController from "./src/Controllers/BebidaController";


import promptSync from "prompt-sync";
const prompt = promptSync();


let refrigerador: BebidaController = new BebidaController();
let opcao: number = 0;


while (opcao != 9) {


    console.log(`## Menu ##
[1] Salvar bebida
[2] Listar bebidas
[3] Editar bebida
[4] Excluir bebida
[9] Sair
## Menu ##`);


    opcao = Number(prompt("Digite a opção escolhida: "));


    if (opcao == 1) {


        console.clear();
        let drink: Bebida = new Bebida();


        drink.codigo = Number(prompt("Digite o codigo da bebida:"));
        drink.nome = prompt("Digite o nome da bebida: ");
        drink.cor = prompt("Digite a cor da bebida: ");
        drink.quantidade = prompt("Digite o quantidade da bebida: ");
        drink.temperatura = Number(prompt("Digite a temperatura:"));
        drink.teorAlcool = Number(prompt("Digite o quanto de alcool tem:"));


        refrigerador.salvar(drink);


    } else if (opcao == 2) {


        console.clear();
        console.log("** Imprimindo bebidas **");
        console.log(` `);
        refrigerador.imprimeTodos();
        console.log(` `);
        console.log(`** finalizado **`);


    } else if (opcao == 3) {


        console.clear();
        const codigoEditar = Number(prompt("Digite o código da bebida que deseja editar:"));
        console.log(` `);
        refrigerador.editar(codigoEditar);


    } else if (opcao == 4) {


        console.clear();
        const codigoExcluir = Number(prompt("Digite o código da bebida que deseja excluir:"));
        console.log(` `);
        refrigerador.excluir(codigoExcluir);


    }
}
