

**Idiomas disponíveis:**

* Português (PT-BR)
* Inglês (EN)


# POC Nest.js with Keycloak

This project demonstrates the configuration and creation of a simple Nest.js environment using Keycloak for authentication and route authorization.

## Prerequisites

* [Docker](https://www.docker.com/) installed
* [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed

## Environment Setup

1.  **Create a new Nest.js project:**

    ```bash
    nest new poc-nest-keycloak
    cd poc-nest-keycloak
    ```

2.  **Install the necessary dependencies:**

    ```bash
    yarn add @nestjs/passport passport passport-jwt keycloak-connect nest-keycloak-connect
    ```

3.  **Configure Docker Compose:**

    * Create a `docker-compose.yml` file in the project root to spin up Keycloak and any required databases.
    * Example `docker-compose.yml`:

        ```yaml
        version: '3.8'
        services:
          keycloak:
            image: quay.io/keycloak/keycloak:latest
            environment:
              KEYCLOAK_ADMIN: admin
              KEYCLOAK_ADMIN_PASSWORD: admin
            ports:
              - '8080:8080'
        ```

    * Start the containers with:

        ```bash
        docker compose up -d
        ```

4.  **Configure Keycloak:**

    * Access the Keycloak admin console at `http://localhost:8080/admin/`.
    * Create a new realm (e.g., `meu-realm`).
    * Create a new client (e.g., `meu-cliente`).
    * Obtain the `KEYCLOAK_SECRET` from the client credentials.
    * Create a test user with a valid email and non-temporary password.
    * Create an `admin` role and assign it to the test admin user.

5.  **Configure Nest.js:**

    * Create a `keycloak` folder for Keycloak configuration files.
    * Create the `keycloak.module.ts` file inside the keycloak folder, and configure the connection to Keycloak.
    * Configure environment variables in the `.env` file (e.g., `KEYCLOAK_REALM`, `KEYCLOAK_CLIENT_ID`, `KEYCLOAK_SECRET`).
    * Configure `app.module.ts` to import and use the `KeycloakModule`.

6.  **Create Routes:**

    * Create protected routes using the `@Roles` decorator to define required roles.
    * Create public routes using the `@Public` decorator to allow access without authentication.
    * The login route can be implemented directly in the API or via Postman for testing.

7.  **Test Routes:**

    * Use Postman or a similar tool to test the protected and public routes.
    * The `postman-collection.yml` file in the repository contains the test calls used.

## Notes

* In some cases, specifying the realm when using roles may be necessary (e.g., `realm:ROLE-NAME`).
* The `postman-collection.yml` file contains the test calls used in this project.

## Contribution

Contributions are welcome! Feel free to open issues or pull requests.

# POC Nest.js com Keycloak

Este projeto demonstra a configuração e criação de um ambiente Nest.js simples, utilizando Keycloak para autenticação e autorização de rotas.

## Pré-requisitos

* [Docker](https://www.docker.com/) instalado
* [Node.js](https://nodejs.org/) e [Yarn](https://yarnpkg.com/) instalados

## Configuração do Ambiente

1.  **Criar um novo projeto Nest.js:**

    ```bash
    nest new poc-nest-keycloak
    cd poc-nest-keycloak
    ```

2.  **Instalar as dependências necessárias:**

    ```bash
    yarn add @nestjs/passport passport passport-jwt keycloak-connect nest-keycloak-connect
    ```

3.  **Configurar o Docker Compose:**

    * Crie um arquivo `docker-compose.yml` na raiz do projeto para subir o Keycloak e os bancos de dados necessários.
    * Exemplo de `docker-compose.yml`:

        ```yaml
        version: '3.8'
        services:
          keycloak:
            image: quay.io/keycloak/keycloak:latest
            environment:
              KEYCLOAK_ADMIN: admin
              KEYCLOAK_ADMIN_PASSWORD: admin
            ports:
              - '8080:8080'
        ```

    * Suba os containers com:

        ```bash
        docker compose up -d
        ```

4.  **Configurar o Keycloak:**

    * Acesse o console de administração do Keycloak em `http://localhost:8080/admin/`.
    * Crie um novo realm (ex: `meu-realm`).
    * Crie um novo cliente (ex: `meu-cliente`).
    * Obtenha o `KEYCLOAK_SECRET` nas credenciais do cliente.
    * Crie um usuário de teste com um e-mail válido e senha não temporária.
    * Crie uma role `admin` e atribua-a ao usuário admin de teste.

5.  **Configurar o Nest.js:**

    * Crie uma pasta `keycloak` para os arquivos de configuração do Keycloak.
    * Crie o arquivo `keycloak.module.ts` dentro da pasta keycloak, e configure a conexão com o Keycloak.
    * Configure as variáveis de ambiente no arquivo `.env` (ex: `KEYCLOAK_REALM`, `KEYCLOAK_CLIENT_ID`, `KEYCLOAK_SECRET`).
    * Configure o `app.module.ts` para importar e usar o `KeycloakModule`.

6.  **Criar Rotas:**

    * Crie rotas protegidas usando o decorator `@Roles` para definir as roles necessárias.
    * Crie rotas públicas usando o decorator `@Public` para permitir acesso sem autenticação.
    * A rota de login pode ser implementada diretamente na API ou via Postman para testes.

7.  **Testar as Rotas:**

    * Use o Postman ou outra ferramenta similar para testar as rotas protegidas e públicas.
    * O arquivo `postman-collection.yml` no repositório contém as chamadas utilizadas para teste.

## Observações

* Em alguns casos, pode ser necessário especificar o realm ao usar roles (ex: `realm:NOME-DA-ROLE`).
* O arquivo `postman-collection.yml` contém as chamadas de teste utilizadas neste projeto.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.