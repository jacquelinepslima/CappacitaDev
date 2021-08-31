var dadosClientes = [
    {
    nome: "Lucas",
    sobrenome: "da Silva",
    idade: 21,
    genero: "Masculino",
    plano: "full",
    carencia: false,
    aquisicao: "12/01/2019"
    },
    {
    nome: "Ana",
    sobrenome: "Lima",
    idade: 17,
    genero: "Feminino",
    plano: "medium",
    carencia: false,
    aquisicao: "17/03/2019"
    },
    {
    nome: "Adriana",
    sobrenome: "Menezes",
    idade: 27,
    genero: "Feminino",
    plano: "full",
    carencia: true,
    aquisicao: "14/09/2020"
    },
    {
    nome: "José",
    sobrenome: "Nunes",
    idade: 18,
    genero: "Masculino",
    plano: "full",
    carencia: true,
    aquisicao: "11/08/2020"
    },
    {
    nome: "Tereza",
    sobrenome: "Cassimiro",
    idade: 24,
    genero: "Feminino",
    plano: "full",
    carencia: true,
    aquisicao: "01/09/2020"
    },
    {
    nome: "Fabio",
    sobrenome: "Junior",
    idade: 20,
    genero: "Masculino",
    plano: "full",
    carencia: true,
    aquisicao: "14/09/2020"
    },
    {
    nome: "Jacqueline",
    sobrenome: "Lima",
    idade: 26,
    genero: "Feminino",
    plano: "full",
    carencia: true,
    aquisicao: "12/11/2020"
    }
    ];

    var filtraDados = (array) => {
       return array.filter((clienteSelecionado)=> clienteSelecionado.idade >= 18 && clienteSelecionado.idade <= 26);

    }
    console.log(filtraDados(dadosClientes));