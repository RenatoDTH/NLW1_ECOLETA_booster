# NLW1_ECOLETA_booster
Ecoleta é uma colectoria de recursos onde você pesquisa por estabelecimentos em diversos locais. O projeto foi produzido dentro do ambiente fullStack, com uma api, versão web e versão mobile.
Todo o ensinamento foi apresentado pela [RocketSeat](http://rocketseat.com.br/)

Inicialmente para você poder testar a aplicação é necessário baixar o NLW1_ECOLETA_booster.
Depois é necessário você entrar em cada pasta (server, mobile e web) e rodar:

```
yarn
ou 
npm install
```
Para poder instalar as dependências.

Na sequência é de extrema importância verificar seu ip da máquina e alterar os campos nos [controllers](https://github.com/RenatoDTH/NLW1_ECOLETA_booster/tree/master/server/src/controllers) do server e também na [api](https://github.com/RenatoDTH/NLW1_ECOLETA_booster/blob/master/mobile/src/services/api.ts) do services do mobile (uma vez, que o mobile não tem acesso ao localhost para android)

Feito isso, caso o banco de dados *não* esteja funcionando, recomendo excluir  o [database.sqlite](https://github.com/RenatoDTH/NLW1_ECOLETA_booster/tree/master/server/src/database), na pasta database em server e rodar na sequência>

```
yarn knex:migrate
e depois
yarn knex:seed
```
Para produzir o database.

## Backend
Para rodar a aplicação depois de fazer os preparativos, entre na pasta server e rode:
```
yarn dev
```

## Web
Com o backend rodando, você entra em um novo terminal na pasta web e roda:
```
yarn start
```

## Mobile
Com o backend rodando, você entra na pasta mobile em um novo terminal e roda:
```
yarn start
```
Porém é necessário, caso você esteja utilizando um dispositivo físico, baixar o expo em seu aparelho e capturar o QR Code que vai aparecer em tela.
