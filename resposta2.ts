enum Profissao {
  Atriz,
  Padeiro,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao: Profissao;
}

const pessoa1: Pessoa = {
  nome: "Maria",
  idade: 29,
  profissao: Profissao.Atriz,
};

const pessoa2: Pessoa = {
  nome: "Roberto",
  idade: 19,
  profissao: Profissao.Padeiro,
};

const pessoa3: Pessoa = {
  nome: "Laura",
  idade: 32,
  profissao: Profissao.Atriz,
};

const pessoa4: Pessoa = {
  nome: "Carlos",
  idade: 19,
  profissao: Profissao.Padeiro,
};
