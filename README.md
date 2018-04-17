## Simpl To-Do API
This is the Git repository for Simpl To-Do's MongoDB and Express.js API. This API will provide a database for the Simpl To-Do single-page application, which will allow authenticated users to create, read, update and delete their to-do list items.

### Planning & Problem-Solving

I will build this API using MongoDB and Express.js following software design best practices. Each feature will be created individually, tested and refactored as necessary.

You can view the ERD for this project [here](https://imgur.com/r6gCbqO).

### Technologies Used
- JavaScript
- Express.js
- MongoDB
- Mongoose
- Heroku

### Dependencies

Install with `npm install`.

- express
- mongoose

Update the versions in `package.json` by replacing all versions with a glob `(*)` and running `npm update --save && npm update --save-dev`. You may wish to test these changes by deleting the node_modules directory and running `npm install`. Fix any conflicts.

### API End Points
### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/:id` | `users#changepw`  |
| DELETE | `/sign-out/:id`        | `users#signout`   |

#### POST /sign-up

Request:

```sh
curl --include --request POST http://localhost:4741/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'
```

```sh
scripts/sign-up.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email"
  }
}
```

#### POST /sign-in

Request:

```sh
curl --include --request POST http://localhost:4741/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password"
    }
  }'
```

```sh
scripts/sign-in.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email",
    "token": "33ad6372f795694b333ec5f329ebeaaa"
  }
}
```

#### PATCH /change-password/:id

Request:

```sh
curl --include --request PATCH http://localhost:4741/change-password/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "an example password",
      "new": "super sekrit"
    }
  }'
```

```sh
ID=1 TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/change-password.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /sign-out/:id

Request:

```sh
curl --include --request DELETE http://localhost:4741/sign-out/$ID \
  --header "Authorization: Token token=$TOKEN"
```

```sh
ID=1 TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/sign-out.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

### Users

| Verb | URI Pattern | Controller#Action |
|------|-------------|-------------------|
| GET  | `/users`    | `users#index`     |
| GET  | `/users/1`  | `users#show`      |

#### GET /users

Request:

```sh
curl --include --request GET http://localhost:4741/users \
  --header "Authorization: Token token=$TOKEN"
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/users.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "users": [
    {
      "id": 2,
      "email": "another@example.email"
    },
    {
      "id": 1,
      "email": "an@example.email"
    }
  ]
}
```

#### GET /users/:id

Request:

```sh
curl --include --request GET http://localhost:4741/users/$ID \
  --header "Authorization: Token token=$TOKEN"
```

```sh
ID=2 TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/user.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 2,
    "email": "another@example.email"
  }
}
```


### To-Dos
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/todos`               | `todos#index`     |
| POST   | `/todos`               | `todos#create`    |
| GET    | `/todos/:id`           | `todos#show`      |
| PATCH  | `/todos/:id`           | `todos#update`    |
| DELETE | `/todos/:id`           | `todos#destroy`   |

#### GET /todos

Request:

```sh
curl --include --request GET http://localhost:4741/todos \
  --header "Authorization: Token token=$TOKEN"
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/todos/index.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "todos": [
    {
      "id": "2bd651fe5f62d72b5d38cc76",
      "content": "Breathe in",
      "done": false
    },
    {
      "id": "3ad651fe5f62d72b5d38cc76",
      "content": "Breathe out",
      "done": false
    }
  ]
}
```

#### POST /todos

Request:

```sh
curl --include --request POST http://localhost:4741/todos \
  --header "Authorization: Token token=$TOKEN"
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa CONTENT="Eat" scripts/todos/create.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "todo": {
    "id": "5ad651fe5f62d72b5d38cc76",
    "content": "Eat",
    "done": false
  }
}
```


#### GET /todo/:id

Request:

```sh
curl --include --request GET http://localhost:4741/todo/$ID \
  --header "Authorization: Token token=$TOKEN"
```

```sh
ID=5ad651fe5f62d72b5d38cc76 TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/todos/show.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "todo": {
    "id": "5ad651fe5f62d72b5d38cc76",
    "content": "Eat",
    "done": false
  }
}
```

#### PATCH /todo/:id

Request:

```sh
curl --include --request PATCH http://localhost:4741/todo/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "todo": {
      "id": "5ad651fe5f62d72b5d38cc76",
      "content": "Eat more",
      "done": false
    }
  }'
```

```sh
ID="5ad651fe5f62d72b5d38cc76" TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/todos/update.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /todo/:id

Request:

```sh
curl --include --request DELETE http://localhost:4741/todo/$ID \
  --header "Authorization: Token token=$TOKEN"
```

```sh
ID="5ad651fe5f62d72b5d38cc76" TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/todos/destroy.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

All data returned from API actions is formatted as JSON.

### Unsolved Issues for Future Iterations
- Test with client-side
- Deploy
- Add extra features

## Links
- Simpl To-Do repository: https://github.com/lydivetteroldan/simpl-to-do
- Simpl To-Do website: https://lydivetteroldan.github.io/simpl-to-do
