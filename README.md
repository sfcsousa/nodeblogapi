# Blog Post API 

Um serviço node js que lê um pasta de sistema, popula uma base de dados mongo e expõe esses dados através de apis

## First things First

As instruções a seguir mostram como instalar o pacote e inicia-lo em ambiente de homologação ou teste.

### Pré-requisitos

* Npm 6.4 + instalado e configurado;
* Mongo DB instalado e configurado como serviço. O serviço deve estar iniciado;

### Instalando

Faça download do projeto para a sua maquina local, e extraia o zip numa pasta de sua preferencia.
Acesse essa pasta via cmd:

```
$ cd nodeblogapi-master
```

Instale todas as depêndencias do projeto

```
$ npm i
```

Navegue até a pasta setup e abra o arquivo ```config.js```

```
$ cd setup

$ code config.js
```

Informe as credenciais de acesso ao omdb em apikey;
Informe os dados de conexao, e o nome da base de dados do seu MongoDB;
Salve o arquivo.

```
    connection: {
        username: '',
        password: '',
        port: '27017',
        host: 'localhost',
        database: 'blogPosts',

    },
    omdb: {
        apikey: '',
        url: 'http://www.omdbapi.com/'
    }
```

Jogue os arquivos de dados na pasta data_input;

Para finilizar inicie a aplicação

```
$ npm run start
```

Acesse http://localhost:3000/ e veja os metodos disponíveis.


## Feito com 

* [Express](https://expressjs.com/) - O framework WEB
* [NPM](https://www.npmjs.com/) - Gerente de Dependências
* [MONGOOSE](https://mongoosejs.com/) - Plugin para connectar e fazer operações na base de dados

## Versionamento

Uso de [SemVer](http://semver.org/) para versionar a aplicação. Vejas as versão disponíveis aqui 
[versões](https://github.com/sfcsousa/nodeblogapi/tags). 

## Autores

* **Pedro Muriel Sousa** - *Initial work* - [SFCSOUSA](https://github.com/sfcsousa)

## Conquistas

* Interessante a abordagem de DDD nesse projeto;

