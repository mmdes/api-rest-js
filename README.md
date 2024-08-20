# API RESTful com NodeJS e Express
---

Projeto com foco em explorar tecnologias para implementação de backend usando boas práticas de programação em JavaScript.

## Tecnologias usadas no projeto

- **Node.js**:  é um ambiente de execução para rodar código JavaScript no servidor.
- **Express**: usado para o desenvolvimento de rotas, middlewares e gerenciamento de requisições e respostas HTTP para construção da API RESTful.
- **Sucrase**: compilador JavaScript. Com esse transpiler podemos escrever código JavaScript moderno (usando recursos como import/export).
- **Sequelize**: ORM (Object-Relational Mapping), simplifica a interação com bancos de dados relacionais.
- **Bcrypt**: biblioteca usado para criar hash de senhas, armazenando-as no banco de dados de forma mais segura.
- **JWT (JSON Web Token)**: usado para criar tokens de autenticação.
- **Insomnia:**: Ferramenta para testar APIs. Permite criar, enviar e visualizar solicitações HTTP.
- **ESLint**: ferramenta de linting que verifica o código em busca de erros, padrões de codificação inconsistentes e más práticas.
- **MariaDB**: SGBD relacional de código aberto

---

## Como rodar?
Siga os seguintes passos para rodar a aplicação em modo de desenvolvimento:

1. **Criação da base de dados MariaDB**:
   - Em um servidor ubuntu ou similar use o seguinte comando para subir o container com a imagem docker do SGBD MariaDB. Substitua 'SUA_SENHA_FORTE' por uma senha que desejar para o banco de dados:
     ```bash
     sudo docker run --restart always -d --name bdmariadb1 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=SUA_SENHA_FORTE mariadb
     ```
2. **Ajustando as credenciais no arquivo .env**:
     - Clone este repositório no seu ambiente de desenvolvimento.
     - Configure a conexão com o banco e a geração de tokens em um arquivo .env. Seu arquivo .env deve ter o seguinte formato:
       ```
       DATABASE=school
       DATABASE_HOST= ENDERECO_SERVIDOR
       DATABASE_PORT= 3306
       DATABASE_USERNAME= USUARIO_BANCO
       DATABASE_PASSWORD= SENHA_BANCO

       TOKEN_SECRET= SERA_USADO_PARA_GERAR_SEU_TOKEN
       TOKEN_EXPIRATION=7d

       ```
3. **Instale as dependências**:
   - Após configurar as variáveis de ambiente, execute o seguinte comando para instalar as dependências:
     ```bash
     npm i
     ```

4. **Execute a aplicação**:
   - Depois da instalação das dependências você poderá subir a aplicação:
     ```bash
     npm run dev
     ```
   - A aplicação inicializará em modo de desenvolvimento
5. **Migrations**:
   - Consolide as migrations na base de dados executando o comando:
      ```bash
      npx sequelize db:migrate
      ```
6. **Importação da Collection e Geração de token**
   - importe a collection presente neste repositório para o Insomnia
   - Configure uma base url no base enviroment do insomnia com o host e porta que levam ao servidor onde a aplicação está rodando. Exemplo:
      ```json
       {
	      "base_url": "localhost:3001"
       }
      ```
   - Crie um usuário através da requisição User > Store, passando um body como o seguinte:
      ```json
       {
      	"name": "admin",
	      "email": "admin@email.com",
	      "password":"SUA_SENHA_FORTE"
       }
      ```
   - Gere um token através da requisição em Token > Create, passando um body como, por exemplo, este:
     ```json
       {
	      "email": "admin@email.com",
	      "password":"SUA_SENHA_FORTE"
       }
     ```
   - Após gerar o token cole-o no header para realizar as demais interações com a API RESTful e a base de dados. O arquivo collection contém dados de exemplo para facilitar no uso das demais funcionalidades da API.
