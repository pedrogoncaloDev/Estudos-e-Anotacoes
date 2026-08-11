# Cadastro de Usuários

Projeto de estudo em React proposto pelo canal [DevClub](https://www.youtube.com/watch?v=_gHr2Pe5LCY&t=3111s), com o objetivo de praticar os fundamentos do React (componentes, hooks, formulários controlados e consumo de API).

## Funcionalidades

- Cadastrar usuário (nome, idade e email)
- Listar usuários cadastrados
- Excluir usuário

## Tecnologias

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Axios](https://axios-http.com/) para consumo da API
- [json-server](https://github.com/typicode/json-server) como API fake, simulando o back-end a partir do arquivo [db/db.json](db/db.json)

## Como rodar

Instale as dependências:

```bash
npm install
```

Suba a API fake (roda em `http://localhost:3000`):

```bash
npm run backend
```

Em outro terminal, suba o front-end:

```bash
npm run dev
```

## Estrutura da API fake

O `json-server` expõe automaticamente as rotas de CRUD a partir da coleção `usuarios` em [db/db.json](db/db.json):

- `GET /usuarios`
- `GET /usuarios/:id`
- `POST /usuarios`
- `PUT/PATCH /usuarios/:id`
- `DELETE /usuarios/:id`
