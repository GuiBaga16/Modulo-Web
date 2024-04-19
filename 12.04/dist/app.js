"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Aluno_1 = __importDefault(require("./src/models/Aluno"));
let a1 = new Aluno_1.default();
a1.nome = "Roger";
a1.escola = "ALGUMA AI";
a1.definirNota1(9);
a1.definirNota2(4);
a1.definirNota3(5);
a1.mediaNotas();
a1.imprimeAtributos();
//* ---------------------------------- //*
const Cidade_1 = __importDefault(require("./src/models/Cidade"));
let c1 = new Cidade_1.default();
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
const Fruta_1 = __importDefault(require("./src/models/Fruta"));
let f1 = new Fruta_1.default();
f1.nome = "Pitaya";
f1.cor = "Rosa";
f1.consumir();
f1.consumir();
f1.consumir();
f1.imprimeAtributos();
