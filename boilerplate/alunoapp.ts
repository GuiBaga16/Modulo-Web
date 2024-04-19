import Aluno from "./src/models/Aluno";


let a1: Aluno = new Aluno();
a1.nome = "Roger";
a1.escola = "ALGUMA AI";


a1.definirNotas(8, 9, 7);
a1.mediaNotas();