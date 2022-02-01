# Nuxt 3 Minimal Starter
We recommend to look at the [documentation](https://v3.nuxtjs.org).v3
## Setup
Make sure to install the dependencies
```bash
yarn install
```
## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

---

Deploy in Digital Ocean
    Create node,js APP with postgres db;
    Create redis and attach on app;
    Create worker in app.
    Configure ENV vars:
        ```
        REDIS_URL
        DATABASE_URL
        BUCKETEER_AWS_ACCESS_KEY_ID
        BUCKETEER_AWS_SECRET_ACCESS_KEY
        BUCKETEER_BUCKET_NAME
        BUCKETEER_ENDPOINT
        ```
    Make migrations.
    Create one contact in Database.
TODOS
 - [ ] Connect worker in REDIS, redis tested with manual connection.
 - [ ] Link async functions after REDIS connected.
