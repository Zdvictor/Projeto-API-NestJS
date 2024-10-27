# API NestJS


## Introdução

Esta API foi construída com NestJS e fornece endpoints para operações de usuários e autenticação.

## Endpoints

### UserController

| Método   | Endpoint      | Descrição                           |
| -------- | ------------- | ----------------------------------- |
| `POST`   | `/users`      | Cria um novo usuário               |
| `GET`    | `/users`      | Lista todos os usuários            |
| `GET`    | `/users/:id`  | Retorna um usuário específico      |
| `PUT`    | `/users/:id`  | Atualiza completamente um usuário |
| `PATCH`  | `/users/:id`  | Atualiza parcialmente um usuário   |
| `DELETE` | `/users/:id`  | Remove um usuário                  |

#### Exemplo de Requisições e Respostas

- **POST /users**
  - **Descrição**: Cria um novo usuário.
  - **Body**:
    ```json
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "password": "123456"
    }
    ```
  - **Resposta**:
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com"
    }
    ```
  - **Erros**:
    - `400 Bad Request`: Quando o corpo da requisição está inválido.
    - `409 Conflict`: Quando o email já está em uso.

- **GET /users**
  - **Descrição**: Lista todos os usuários.
  - **Resposta**:
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "email": "johndoe@example.com"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "janesmith@example.com"
      }
    ]
    ```

- **GET /users/:id**
  - **Descrição**: Retorna um usuário específico.
  - **Resposta**:
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com"
    }
    ```
  - **Erros**:
    - `404 Not Found`: Quando o ID do usuário não existe.

- **PUT /users/:id**
  - **Descrição**: Atualiza completamente os dados do usuário.
  - **Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "newpassword123"
    }
    ```
  - **Resposta**:
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
    ```
  - **Erros**:
    - `400 Bad Request`: Quando os dados fornecidos são inválidos.
    - `404 Not Found`: Quando o ID do usuário não existe.

- **DELETE /users/:id**
  - **Descrição**: Remove um usuário.
  - **Resposta**:
    ```json
    {
      "success": true
    }
    ```
  - **Erros**:
    - `404 Not Found`: Quando o ID do usuário não existe.

### AuthController

| Método   | Endpoint          | Descrição                           |
| -------- | ------------------ | ----------------------------------- |
| `POST`   | `/auth/login`      | Autentica um usuário               |
| `POST`   | `/auth/register`   | Registra um novo usuário           |
| `POST`   | `/auth/forget`     | Envia email para redefinir senha   |
| `POST`   | `/auth/reset`      | Redefine senha usando um token     |
| `POST`   | `/auth/me`         | Retorna informações do usuário logado |
| `POST`   | `/auth/photo`      | Faz upload de uma foto do usuário  |

#### Exemplos de Requisições e Respostas

- **POST /auth/login**
  - **Descrição**: Autentica um usuário.
  - **Body**:
    ```json
    {
      "email": "johndoe@example.com",
      "password": "123456"
    }
    ```
  - **Resposta**:
    ```json
    {
      "accessToken": "jwt_token_here"
    }
    ```
  - **Erros**:
    - `401 Unauthorized`: Quando as credenciais são inválidas.

- **POST /auth/register**
  - **Descrição**: Registra um novo usuário.
  - **Body**:
    ```json
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "password": "123456"
    }
    ```
  - **Resposta**:
    ```json
    {
      "accessToken": "jwt_token_here"
    }
    ```
  - **Erros**:
    - `400 Bad Request`: Quando os dados fornecidos são inválidos.
    - `409 Conflict`: Quando o email já está em uso.

- **POST /auth/forget**
  - **Descrição**: Envia um email para redefinir a senha.
  - **Body**:
    ```json
    {
      "email": "johndoe@example.com"
    }
    ```
  - **Resposta**:
    ```json
    {
      "success": true
    }
    ```

---

## Exemplos de Respostas

### Erros Comuns

- **400 Bad Request**: Os dados fornecidos estão incorretos ou ausentes.
- **401 Unauthorized**: O usuário não está autenticado para acessar o recurso.
- **404 Not Found**: O recurso solicitado não foi encontrado.
- **409 Conflict**: Um conflito ocorreu, como tentar registrar um email já em uso.

---
