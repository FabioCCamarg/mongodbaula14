//Exerício 1
exports.exercicio1 = (req, res) => {
  const palavra = req.query.palavra;
  let qtdeVogais = 0;
  for (let i = 0; i < palavra.length; i++) {
    if (
      palavra[i].toLowerCase() === "a" ||
      palavra[i].toLowerCase() === "e" ||
      palavra[i].toLowerCase() === "i" ||
      palavra[i].toLowerCase() === "o" ||
      palavra[i].toLowerCase() === "u"
    ) {
      qtdeVogais++;
    }
  }
  res.json({ qtdeVogais: qtdeVogais });
};
//----------------------------------------------//

//Exercício 2
exports.exercicio2 = (req, resp) => {
  function calcularMontante(c, i, t) {
    const taxaJuros = i / 100;
    const montante = c * Math.pow(1 + taxaJuros, t);
    return montante.toFixed(2);
  }

  const { capital, taxaJuros, tempo } = req.query;
  const montante = calcularMontante(capital, taxaJuros, tempo);
  resp.json({ capital, taxaJuros, tempo, montante });
};

//Exercício 3
exports.exercicio3 = (req, resp) => {
  function contarCaracteres(str, caractere) {
    let contador = 0;

    for (let char of str) {
      if (char === caractere) {
        contador++;
      }
    }
    return contador;
  }
  const { texto, caractere } = req.body;
  const resultado = contarCaracteres(texto, caractere);
  resp.json({ texto, caractere, total: resultado });
};

//Exercicio 4
exports.exercicio4 = (req, resp) => {

  function verificaAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  const { ano } = req.query;
  const isBissexto = verificaAnoBissexto(ano);

  if (isBissexto) {
    resp.json({ messagem: `${ano} é um ano Bissexto.` });
  } else {
    resp.json({ mensagem: `${ano} não é um ano Bissexto` });
  }
};

//Exercício 5
exports.exercicio5 = (req, resp) => {
    const { numeros } = req.query;

    const menor = Math.min(...numeros);
    const maior = Math.max(...numeros);

    // Enviando a resposta com a mensagem
    resp.json({ mensagem: `O menor número é ${menor} e o maior número é ${maior}.` });
};

//Exercício 6 
exports.exercicio6 = (req,resp) => {
    function simularLoteria(numerosEscolhidos) {
        // Verifica se o usuário escolheu 6 números
        if (numerosEscolhidos.length !== 6) {
            return "Por favor, escolha exatamente 6 números.";
        }
    
        // Função para gerar um número aleatório entre 1 e 60
        function gerarNumeroAleatorio() {
            return Math.floor(Math.random() * 60) + 1;
        }
    
        // Sorteia 6 números aleatórios
        const numerosSorteados = [];
        while (numerosSorteados.length < 6) {
            const numero = gerarNumeroAleatorio();
            if (!numerosSorteados.includes(numero)) {
                numerosSorteados.push(numero);
            }
        }
    
        // Verifica quantos números o usuário acertou
        const acertos = numerosEscolhidos.filter(numero => numerosSorteados.includes(numero));
    
        return {
            mensagem: `Você acertou ${acertos.length} número(s).`,
            numerosEscolhidos,
            numerosSorteados,
            acertos
        };
    }
    
}
