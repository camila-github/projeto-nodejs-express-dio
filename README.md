## Projeto: Criação de uma API em Json para simular conexão de um banco de dados.

- Foi criado uma API em Json para simular a conexão de um banco de dados. Para testar, foi utilizado o Postman para acessar a api, usando os metodos GET(), POST(), PUT(), DELETE(). 

- Utilizado as tecnologias voltado ao BackEnd
    * NodeJS 
    * Express
    * JavaScript 
 
- O projeto publicado é referente ao treinamento do Curso Bootcamp - Desenvolvedor NodeJS da Digital Innovation One [https://digitalinnovation.one](https://digitalinnovation.one).

## Conceitos Utilizados

- Criação de ambiente NodeJS + Express. 
- Criação de Rotas utilizando os conceitos de Modulo. 
- Criação de API com Express com uso dos metodos GET( ), POST( ), PUT( ), DELETE( ). 
- Utilização de Postman, para acessar a api.


## Ferramentas Utilizadas 

##### IDE: 

- Pode ser utilizado qualquer IDE de preferencia. O link informado abaixo é apenas uma sugestão.
- IDE que utilizei:  VSCODE
- Link: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- No site do vscode é possivel encontrar orientação de como instalar o vscode.


##### NODEJS: 

- O Node normalmente é disponibilizado em duas versões, a Current que é a versão mais atual e a LTS que é a de suporte de longo tempo. O LTS significa que esta é a versão mais estável que receberá suporte do time do Node até uma nova versão LTS. Eu utilizei a versão do LTS. Ao fazer o download escolha de acordo com o seu tipo de sistema operacional. Abaixo o link do nodejs.

- Link: [https://nodejs.org/en/](https://nodejs.org/en/)

- Para verificar a versão do NodeJS, utilize o comando abaixo, no terminal:

  `$  node -v`

- Para verificar se o NodeJS esta funcionando, crie algo simples, como por exemplo uma pasta do seu projeto. Crie um arquivo index.js, digite algo para mostrar na tela do terminal (por exemplo: console.log ('NodeJS Funcionando!!!') ), depois abra o terminal, vá ate o caminho onde esta o seu projeto com o arquivo index.js e digite o comando abaixo. Se aparecer a mensagem do console log, então o nodeJS esta funcionando.

  `$  node index.js`

  `$ Resultado esperado: NodeJS Funcionando!!!`



##### EXPRESS

- Apos instalar o NodeJS, o NPM tambem será instalado. Para verificar a versão do NPM utilize o comando abaixo:

  `$  npm -v`

- Antes de instalar o express, crie primeiro um arquivo 'package.json' no seu projeto, para assim poder armazenar as dependencias que o projeto terá. Nesse caso, acesse o terminal, e dentro da pasta do projeto, utilize o comando abaixo para criar o arquivo. 

  `$  npm init`

- Para instalar o express, acesse o terminal, e dentro da pasta do projeto, digite o comando abaixo. A dependencia será criada apenas para o projeto em que esta, e apos executar o comando, verifique que dentro do projeto, será criado uma outra pasta com o nome 'node_modules'. Nessa pasta tem varios modulos que foram importados para o seu projeto, e tambem terá o modulo 'express'. E alem disso, no arquivo 'package.json', será registrado que o projeto terá a dependencia 'express'.

  `$  npm install express --save`

- Para saber se o express, esta funcionando, acesse o arquivo 'index.js' pela IDE, limpe os comandos que tiver e digite os comandos abaixo e salve. 

```javascript
/*Importa o express no projeto*/
const express = require('express');

/*criado uma aplicação (app) que utilizará os metodos do express()*/
const app = express();

/*Informe o numero da porta que a aplicação será acessada. Detalhe: è apenas uma sugestão, 
se tiver em uso por outra aplicação, verifique uma outra porta que nao esta em uso*/
const port = 3000; 

/*Comando para testar a conexão express no navegador*/
app.get('/', (req, res) => res.send('Ola mundo com Express!'));

/*Comando para testar o nodejs. Detalhe: esse comando sempre tem que esta no final do arquivo js*/
app.listen(port, () => console.log('Api rodando na porta 3000'));
```

- Abra o terminal e digite o comando abaixo. Se aparecer a mensagem 'Api rodando na porta 3000',
então o servidor do NodeJS/Express esta ativo e funcionando.
Detalhe: para funcionar a aplicação no navegador, o servidor do nodeJS tem que estar ativo no terminal.
Para encerrar a conexão do servidor no terminal pressione CTRL + C.

  `$  node index.js`

  `$  Resultado esperado: Api rodando na porta 3000`

- Para saber se irá funcionar no navegador, acesse o navegador e digite o endereço abaixo. Se aparecer no navegador a mensagem 'Ola mundo com Express!', então a configuração funcionou. Detalhe: o servidor do nodejs tem que estar ativo no terminal

  Acessar o navegador e digitar o link (o link é local) :  [http://localhost:3000/](http://localhost:3000/)

  `$ Resultado esperado: Ola mundo com Express!`


##### ACESSAR API PARA TESTAR: 

- Utilizado o Postman. Para utilizar o Postman, basta instalar o APP em seu computador. Isso pode ser realizado de duas maneiras: Instalando a versão desktop (Basta acessar, baixar a versão e instalar o executável) ou Instalando a extensão do Chrome (Basta acessar a Chrome Store e instalar a extensão do Postman). Eu instalei o Postman no computador.

  [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

