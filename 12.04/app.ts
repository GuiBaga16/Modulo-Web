import Aluno from "./src/models/Aluno";


let a1: Aluno = new Aluno();
a1.nome = "Roger";
a1.escola = "ALGUMA AI";


a1.definirNotas(8, 9, 7);
a1.mediaNotas();

//* ---------------------------------- //*

import Cidade from "./src/models/Cidade";


let c1: Cidade = new Cidade();
c1.tamanho = "Pequeno";
c1.prefeito = "Olusegun Obasanjo";
c1.pais = "Nigeria";
c1.nome = " Èkó";
c1.habitantes = 1950;
c1.estado = "Lagos";


c1.aumentarHabitantes(500);
c1.diminuirHabitantes(1000);


c1.editaPrefeito("Cleber");


c1.imprimeAtributos();


//* -----------------------------------//*

import Fruta from "./src/models/Fruta";

let f1: Fruta = new Fruta();
f1.nome = "Pitaya";
f1.cor = "Rosa";

f1.consumir();