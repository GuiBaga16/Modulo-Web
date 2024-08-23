Table carros {
  "id" serial PRIMARY KEY,
  "marca" varchar(255) NOT NULL,
  "modelo" varchar(255) NOT NULL,
  "cor" varchar(55) NOT NULL,
  "categoria" varchar(255) NOT NULL,
  "dataFabricacao" char(4) NOT NULL,
  "problema" varchar (255) NOT NULL
}

Table pessoas {
  "id" serial PRIMARY KEY,
  "nome" varchar(255) NOT NULL,
  "endereco" varchar(255) NOT NULL,
  "cpf" varchar(11) NOT NULL,
  "email" varchar(55) NOT NULL,
  "genero" varchar(55) NOT NULL
}