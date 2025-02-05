async function novaPiada() { // Função para buscar uma nova piada na API
  try { // try serve para tentar executar o código, caso dê erro, ele cai no catch que é o bloco de código que trata o erro :)

      const response = await fetch('https://api.chucknorris.io/jokes/random'); // fetch é uma função que faz uma requisição HTTP para a URL passada como argumento. O await serve para esperar a resposta da requisição, que é assíncrona.
      if (!response.ok) throw new Error('Erro ao buscar a piada'); // Se a resposta não for ok, ele cai no catch e exibe a mensagem de erro. O throw serve para lançar um erro, por exemplo, se a resposta não for ok, ele lança um erro que vai para o catch.

      const data = await response.json(); // O await serve para esperar a resposta da requisição, que é assíncrona. O response.json() é uma função que converte a resposta da requisição em um objeto JavaScript! 
      document.getElementById('piada').innerText= data.value; //document.getElementById('piada') é o elemento HTML que tem o id 'piada'. O innerText serve para alterar o texto do elemento. data.value é o valor da piada que veio da API, ou seja é o texto da piada. data.value veio de response.json() que converteu a resposta da requisição em um objeto JavaScript, e data é o objeto JavaScript que contém a piada sendo value o valor da piada.
  } 
  
  catch (error) { // catch é o bloco de código que trata o erro, ele recebe o erro lançado pelo throw! Super importante para tratar erros e não quebrar a aplicação!!!
      console.error('Erro:', error); // console.error é uma função que exibe uma mensagem de erro no console do navegador. O erro é o erro lançado pelo throw.
      document.getElementById('piada').innerText = 'Erro ao carregar piada. Tente novamente!'; // Se der erro, exibe essa mensagem no elemento com id 'piada'.
  }
}

novaPiada(); // Chama a função novaPiada() para buscar uma piada na API quando a página carregar, é possivel ter varias piadas diferentes, pois a API retorna uma piada aleatória.