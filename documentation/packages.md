# Packages

[README.md](../README.md)

## Inicializar um novo projeto

```bash
$ yarn init -y
```

### Dependências de desenvolvimento

```bash
$ yarn add nodemon typescript tsconfig-paths ts-node-dev npm-run-all eslint-import-resolver-typescript prettier eslint-config-prettier eslint-plugin-prettier jest ts-jest supertest -D
```

### Dependências de desenvolvimento: types

```bash
$ yarn add @types/node @types/express @types/uuid @types/bcryptjs @types/jsonwebtoken @types/cors @types/helmet @types/mongodb @types/morgan @types/nodemailer @types/bull @types/ioredis @types/multer @types/jest @types/supertest @types/module-alias -D
```

### Dependências de produção

```bash
$ yarn add express express-async-errors dotenv helmet morgan youch cowsay typeorm pg mongodb reflect-metadata bcryptjs date-fns jsonwebtoken cors class-transformer module-alias
```

## YARN

```bash
# Instalar uma versão exata do pacote (-E)
$ yarn add express -E

# Atualizar para um versão especifica, necessãrio o ^
$ yarn upgrade express@^

# Checar versões dos pacotes
$ yarn global add npm-check-updates
$ npm-check-updates -u
$ yarn upgrade

# Versão de todos os pacotes instalados
$ npm ls --depth=0

# Visualizar pacotes desatualizados
$ npm outdated

# Atualizar todos os pacotes para as últimas versoes
$ npm update
```

## package.json

```JSON
{
    "name": "behappy",
    "version": "1.0.0",
    "main": "index.js",
    "repository": "git@github.com:venzel/beHappy.git",
    "author": "Venzel (desktop) <venzelsoft@gmail.com>",
    "license": "MIT",
    "devDependencies": {
        "@types/bcryptjs": "^2.4.2",
        "@types/bull": "^3.14.4",
        "@types/cors": "^2.8.7",
        "@types/express": "^4.17.9",
        "@types/helmet": "^4.0.0",
        "@types/ioredis": "^4.17.8",
        "@types/jest": "^26.0.19",
        "@types/jsonwebtoken": "^8.5.0",
        "@types/module-alias": "^2.0.0",
        "@types/mongodb": "^3.6.3",
        "@types/morgan": "^1.9.0",
        "@types/multer": "^1.4.5",
        "@types/node": "^14.14.12",
        "@types/nodemailer": "^6.4.0",
        "@types/supertest": "^2.0.10",
        "@types/uuid": "^8.3.0",
        "cz-conventional-changelog": "3.3.0",
        "eslint-config-prettier": "^7.0.0",
        "eslint-import-resolver-typescript": "^2.3.0",
        "eslint-plugin-prettier": "^3.2.0",
        "jest": "^26.6.3",
        "nodemon": "^2.0.6",
        "npm-run-all": "^4.1.5",
        "prettier": "^2.2.1",
        "supertest": "^6.0.1",
        "ts-jest": "^26.4.4",
        "ts-node-dev": "^1.1.1",
        "tsconfig-paths": "^3.9.0",
        "typescript": "^4.1.2"
    },
    "dependencies": {
        "@sentry/node": "^5.29.0",
        "bcryptjs": "^2.4.3",
        "bull": "3.14.0",
        "class-transformer": "^0.3.1",
        "cors": "^2.8.5",
        "cowsay": "^1.4.0",
        "date-fns": "^2.16.1",
        "dotenv": "^8.2.0",
        "express": "^4.17.1",
        "express-async-errors": "^3.1.1",
        "helmet": "^4.2.0",
        "ioredis": "^4.19.2",
        "jsonwebtoken": "^8.5.1",
        "module-alias": "^2.2.2",
        "mongodb": "^3.6.3",
        "morgan": "^1.10.0",
        "multer": "^1.4.2",
        "nodemailer": "^6.4.17",
        "nodemailer-express-handlebars": "^4.0.0",
        "pg": "^8.5.1",
        "reflect-metadata": "^0.1.13",
        "tsyringe": "^4.4.0",
        "typeorm": "^0.2.29",
        "uuid": "^8.3.2",
        "youch": "^2.1.1"
    },
    "scripts": {
        "build": "yarn tsc",
        "dev": "npm-run-all -p dev:*",
        "dev:server": "ts-node-dev --trace-deprecation -r tsconfig-paths/register --transpile-only --ignore-watch node_modules ./src/shared/infra/http/Server.ts",
        "dev:queue": "ts-node-dev -p --trace-deprecation -r tsconfig-paths/register --transpile-only --ignore-watch node_modules ./src/shared/infra/http/Queue.ts",
        "pro": "npm-run-all -p pro:*",
        "pro:server": "nodemon --experimental-modules ./dist/shared/infra/http/Server.js",
        "pro:queue": "nodemon -p --experimental-modules ./dist/shared/infra/http/Queue.js",
        "c": "cz"
    },
    "config": {
        "commitizen": {
            "path": "./node_modules/cz-conventional-changelog"
        }
    }
}
```
