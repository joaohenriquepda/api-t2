# T2-Solution

## Ambiente de desenvolvimento 

O ambiente de desenvolvimento consta com suas dependências em containers do Docker. Caso precise instalar o docker na raíz do projeto já tem dois scripts de instalação do Docker e Docker compose para ambientes Linux.

Para utilizar o docker para executar o projeto basta executar o comando abaixo na raíz do projeto
```
$ docker-compose up
```
O Docker irá realizar o download de todas as dependências necessárias e ao final do processo o projeto estará disponível para acesso em **https://localhost:3333**


## Comandos úteis

### server local
Caso não queria usar o Docker para gerenciar as dependências do projeto e já tenha sua máquina configurada com Node e o Adonis, poderá usar o comando a seguir para colocar o sistema em funcionamento

```
$ adonis serve --dev
```

Se tudo ocorrer conforme o esperado poderá acessar o projeto em *https://localhost:3333**

## Processo de deploy e CI/CD

 Atualmente o projeto não conta com integração contínua e deploy contínuo integrado, o processo ainda é manual. Segue abaixo as instruçõe para realizar o deploy no  servidor **Heroku**

 Primeiro precisamos atualizar os arquivos da master, feito isso com o comando a seguir damos início ao processo de deploy o servidor Heroku. Lembrando que o servidor já contém as variáveis de ambiente e caso necessite irá executar os migrates.

 ```
$ git push heroku master
```

O processo vai se iniciar e se caso ocorrer bem em poucos segundos a API já estará pronta para uso


## Links de acesso
 
 O projeto está hospedado no firebase e pode ser acessado em 
 
 https://t2solution.web.app/login

 A API do projeto está  
https://api-t2.herokuapp.com/