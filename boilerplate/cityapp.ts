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
