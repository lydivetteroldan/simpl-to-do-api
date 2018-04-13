## Simpl To-Do API
This is the Git repository for Simpl To-Do's MongoDB and Express.js API. This API will provide a database for the Simpl To-Do single-page application, which will allow authenticated users to create, read, update and delete their to-do list items.

### [ERD](https://imgur.com/r6gCbqO)

### Technologies Used
- JavaScript
- Express.js
- MongoDB
- Mongoose
- Heroku

### API End Points
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| DELETE | `/sign-out`            | `users#signout`   |
| PATCH  | `/change-password`     | `users#changepw`  |
| GET    | `/todos`               | `todos#index`     |
| POST   | `/todos`               | `todos#create`    |
| GET    | `/todos/:id`           | `todos#show`      |
| PATCH  | `/todos/:id`           | `todos#update`    |
| GET    | `/todos/:id/watch`     | `todos#watch`     |

All data returned from API actions is formatted as JSON.

### Dependencies

Install with `npm install`.

- express
- mongoose

Update the versions in `package.json` by replacing all versions with a glob `(*)` and running `npm update --save && npm update --save-dev`. You may wish to test these changes by deleting the node_modules directory and running `npm install`. Fix any conflicts.

### Unsolved Issues for Future Iterations
- Test with client-side
- Deploy
- Add extra features

## Links
- Simpl To-Do Client repository: [Coming Soon]
- Simpl To-Do Client website: [Coming Soon]
