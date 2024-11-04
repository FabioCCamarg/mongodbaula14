let escola = [
  {
    ra: "1",
    nome: "João",
    disciplinas: [
      { codigo: "MAT101", nome: "Matemática", professor: "Prof. Carlos" },
      { codigo: "HIS101", nome: "História", professor: "Prof. Ana" },
      { codigo: "POR101", nome: "Português", professor: "Prof. João" },
      { codigo: "GEO101", nome: "Geografia", professor: "Prof. Ana" },
    ],
  },

  {
    ra: "2",
    nome: "Maria",
    disciplinas: [
      { codigo: "MAT101", nome: "Matemática", professor: "Prof. Carlos" },
      { codigo: "HIS101", nome: "História", professor: "Prof. Ana" },
      { codigo: "GEO101", nome: "Geografia", professor: "Prof. Ana" },
    ],
  },

  {
    ra: "3",
    nome: "Pedro",
    disciplinas: [
      { codigo: "CIE101", nome: "Ciências", professor: "Prof. João" },
      { codigo: "HIS101", nome: "História", professor: "Prof. Ana" },
      { codigo: "POR101", nome: "Português", professor: "Prof. João" },
      { codigo: "GEO101", nome: "Geografia", professor: "Prof. Ana" },
      { codigo: "EDF101", nome: "Educação Física", professor: "Prof. Carlos" },
    ],
  },
];

exports.mostrarTodos = (req, resp) => {
  resp.json(escola);

  //Para testar a API utilizar URL: http://localhost:3000/lista2/alunos
};

exports.AlunoRa = (req, resp) => {
  const { ra } = req.params;
  const aluno = escola.find((aluno) => aluno.ra === ra);
  if (aluno) {
    resp.json(aluno);
  } else {
    resp.status(404).json({ mensage: "Aluno não encontrado" });
  }

  //Para testar a API utilizar URL: http://localhost:3000/lista2/alunos/1
};
exports.listarDisciplinas = (req, resp) => {
  const { ra } = req.params;
  const aluno = escola.find((aluno) => aluno.ra === ra);
  if (aluno) {
    resp.json(aluno.disciplinas);
  } else {
    resp.status(404).json({ mensage: "Aluno não encontrado" });
  }
  resp.json(escola.disciplinas);

  //Para testar a API utilizar URL: http://localhost:3000/lista2/alunos/1/disciplinas
};

exports.adicionarDisciplina = (req, resp) => {
  const { ra } = req.params;
  const { codigo, nome, professor } = req.body;

  //metodo para procurar um objeto específico dentro do array
  const aluno = escola.find((aluno) => aluno.ra === ra);

  if (aluno) {
    const novaDisciplina = { codigo, nome, professor };
    aluno.disciplinas.push(novaDisciplina);

    resp.status(201).json({
      mensagem: "Disciplina adicionada com sucesso!",
      discipllinaAdiconiada: novaDisciplina,
      aluno,
    });
  } else {
    resp.status(404).json({ mensagem: "Aluno não encontrado" });
  }
};

exports.atualizarDadosAluno = (req, resp) => {
  const { ra } = req.params;
  const { nome, disciplinas } = req.body;

  const aluno = escola.find((aluno) => aluno.ra === ra);
  if (!aluno) return res.status(404).json({ message: "Aluno não encontrado" });

  if (nome) aluno.nome = nome;
  if (disciplinas) aluno.disciplinas = disciplinas;

  resp.json({ message: "Aluno atualizado com sucesso", aluno });
};
