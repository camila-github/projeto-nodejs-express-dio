/*Criacao de arquivo .json, para simular uma conexao de banco de dados.*/

/* fs : receberá metodos, para manipular o arquivo .json*/
const fs = require('fs');
/*require(patch)  : Importa o caminho do diretorio, onde ficará o arquivo .json, para o const { join } */
const { join } = require('path');
/*join(__dirname, 'users.json'): juncao com o diretorio onde esta o arquivo userRoute.js,
(__dirname) com o arquivo 'user.json' serao armazenados a lista de usuarios.*/
const filePath = join(__dirname, 'users.json');

/*Metodo Consulta lista de usuarios*/
/*Busca a lista de usuarios no arquivo .json*/
const getUsers = () => {
    /* const data :  Cria uma constante para receber o retorno da consulta*/
    /* fs.existsSync(filePath): Verifica se o arquivo .json existe no diretorio*/
    /* fs.readFileSync(filePath):   Caso sim, acessa o arquivo de maneira assincrona, 
    espera o retorno da lista de usuarios*/
    /* [] Se o arquivo nao existir, retorna um objeto vazio */
    const data = fs.existsSync(filePath) ? fs.readFileSync(filePath) : [];

    /*O tryCatch faz uma checagem de erro, no const data*/
    try {
        return JSON.parse(data); /*retorna a listagem dos dados se tudo ocorrer bem  (.parse) */
    } catch (error) {
        return []; /*Se tiver erro, retorna um objeto vazio*/
    }
};


/* Metodo Salvar lista de usuarios */
/* const saveUser  :  cria uma constante para salvar a lista de usuarios*/
/* (users)  : a função recebe os dados dos usuarios do objeto users*/
/* fs.writeFileSync  :  escreve no arquivo*/
/* filePath  :  indica o caminho do arquivo */
/* JSON.stringify : o objeto recebido em (users) transforma em .JSON*/
/* users - referente o objeto, lista de usuarios | null - nao será criado nenhum outro parametro | '\t' - tabula a lista no arquivo*/
const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'));

/* Cria a função principal, para executar*/
/* Metodo consulta usuario, get()*/
/* const userRoute  : funcao principal para ser executada*/
/* (app)  :  será passado a aplicação (app) como dependencia da funcao. Injeta a dependencia (app) para dentro da funcao userRoute*/
/* app.route('/users/:id?')  :  O app, cria uma rota. Essa rota vai cuidar de todas as requisições http que tem dentro do '/users', 
(requisições como post, get, delete....etc), e sendo opcional pode usar a opção  '/:id?'  para que seja feito as requisições 
(post,get, delete..etc) como o usuario do sistema */
/* Metodo '.get((req, res)'  : recebe a requisição (req) e retorna o resultado (res) */
/* const users = getUsers()  : recebe a lista de usuarios da aplicação (app) */
/* res.send({ users }); :  retorna a lista de objeto usuarios (users) para a aplicação (app) que esta fazendo a requisao*/
const userRoute = (app) => {
    app.route('/users/:id?')

    // METODO CONSULTA - GET()
    /* Conulta usuario, get() */
    .get((req, res) => {
        const users = getUsers();
        res.send({ users });
    })

    // METODO CRIAR - POST()
    /* criar usuario*/
    /* const users = getUsers() : busca usuarios do arquivo .json*/
    /* users.push(req.body) :  será inserido no arquivo .json o usuario criado | req.body : é 
    exatamente o corpo da requisição, dos campos que estão sendo enviado no formulario para 
    o .json, que estará disponivel no 'body', o nome do campo e o valor que esta sendo enviado */
    /* saveUser(users)  :  Salva o novo objeto (users), no arquivo .json*/
    /* res.send(201).send('OK') : retorna com status 201 e com um OK, referente a criação do usuario*/
    .post((req, res) => {
            const users = getUsers();
            users.push(req.body);
            saveUser(users);
            res.status(201).send('OK');
        })
        // METODO UPDATE - PUT()
        /* atualizar o usuario (Rota)*/
        /* const users = getUsers() : busca usuarios do arquivo .json*/
        /* saveUser(users.map(user =>{  : Será usado a opção .map, no objeto users, para que seja criado um novo objeto, atualizando
           o usuario que foi recebido como parametro */
        /*  if(user.id == req.params.id) {  :  será passado o '.id' como paramentro para que seja atualizado o objeto desse id.
        O 'if' irá comparar se o id atual do arquivo .json (user.id) é igual ao id que esta recebendo como paramentro da 
        requisição (req.params.id)*/
        /* ...user, ...req.body   :   Se o 'if' for verdadeiro, retorna o usuario atual (...user), mais, os dados desse usuario
        que foi recebido para ser atualizado (...req.body)*/
        /* return user  : se a condição for falsa, retorna o usuario atual que foi consultado no .json, sem fazer alterações*/
        /*  res.status(200).send('OK')  :  retorna status 200, informando que foi OK atualização*/
        .put((req, res) => {
            const users = getUsers();
            saveUser(users.map(user => {
                if (user.id === req.params.id) {
                    return {
                        ...user,
                        ...req.body
                    };
                }
                return user;
            }));
            res.status(200).send('OK');
        })
        // METODO DELETE()
        /* deleta usuario.*/
        /* saveUser(users.filter(user => user.id !== req.params.id))   :   Utilizado o '.filter', para localizar o usuario*/
        /* user.id !== req.params.id   :  se o usuario atual (user.id) for diferente do parametro recebido (req.params.id()), 
        o usuario é salvo na lista, ou seja, a lista será salvo novamente com todos os usuarios, exceto usuario do parametro
        recebido*/
        .delete((req, res) => {
            const users = getUsers();
            saveUser(users.filter(user => user.id !== req.params.id));
            res.status(200).send('OK');
        });
};


/*Exporta o modulo, para ser acessado externamente*/
module.exports = userRoute;