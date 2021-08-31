var dadosClientes = [
    {
      nome: "lucas",
      sobrenome:"da silva",
      idade: 21
    },
    {
      nome:"ana",
      sobrenome:"lima",
      idade: 17
    },
    {
      nome:"adriana",
      sobrenome:"menezes",
      idade: 27
    },
    {
      nome: "joao",
      sobrenome: "junior",
      idade: 25
    }
  ];
  
    function retornarLista(array){
        function idade(clientes){
          return clientes.idade >= 18 && clientes.idade <= 26;
        }
        
        var clienteSelecionado = array.filter(idade);
            return clienteSelecionado;
      };
              console.log(retornarLista(dadosClientes));
  
  // function
  module.exports.retornaLista = (array) => {function idade(clientes){
        return clientes.idade >= 18 && clientes.idade <= 26;
        }
        
        var clienteSelecionado = array.filter(idade);
            return clienteSelecionado;
      };
  console.log(retornarLista(dadosClientes));
  //


  // arrow function
  var retornaClientes = (array) => {
    return array.filter((cliente)=> cliente.idade >= 18 && cliente.idade <= 26)
  };
  
  console.log(retornaClientes(dadosClientes));
  //

  // forEach

  function imprimeIdades(element, index, array) {
    console.log("Os clientes são: " + index + “ é ” element);
    }
    nomes.forEach(imprimeIdades);
