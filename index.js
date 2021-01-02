/*Importa o express no projeto*/
const express = require('express');

/*Importa o bodyParse no projeto*/
const bodyParser = require('body-parser');

/*importa o arquivo js referente as rotas da lista de usuarios*/
const userRoute = require('./routes/userRoute');

/*criado uma aplicação (app) que utilizará os metodos do express()*/
const app = express();
const port = 3000;

/*Transformação do dado do '.post' do formulario em objeto. Para ter disposivel no 'req.body'*/
app.use(bodyParser.urlencoded({ extended: false }));


/*Será passado como dependencia a aplicação express que foi criada (app), 
para a função userRoute, que esta no arquivo userRoute.js*/
userRoute(app);

/*Comando para testar a conexão express*/
app.get('/', (req, res) => res.send('Ola mundo com Express!'));

/*Comando para testar a nodejs*/
app.listen(port, () => console.log('Api rodando na porta 3000'));