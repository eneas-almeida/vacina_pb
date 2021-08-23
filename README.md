# Case de testes (TDD)

![VacibaPB](./src/main/images/vacina-pb.png)

Case de testes (TDD) em Typescript e NodeJS, utilizando padrões de projetos e modelagem de domínio, baseado em uma Arquitetura Limpa, de acordo com ensinamentos de Martin Fowler em seu livro sobre refatoração e arquitetura limpa.

<p align="left">
    <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="Typescript" title="Typescript" width="30" height="30" /> 
    <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="NodeJS" title="NodeJS" width="30" height="30" /> 
</p>

## Classes a serem testadas

:link: [Usuário](./src/entities/user/User.ts) (Entidade principal)<br><br>
:link: [Nome](./src/entities/user/types/Name.ts)<br>
:link: [Data de aniversário](./src/entities/user/types/BirthDate.ts)<br>
:link: [Grupo de risco](./src/entities/user/types/IsRiskGroup.ts)<br><br>
:link: [Repositório de usuário](./src/use_cases/register_user/in_memory/UserRepositoryInMemory.ts)

## Testes

![Jest](./src/main/images/jest.png)

Como ferramenta de teste foi utilizado **Jest**, um framework voltado para javascript/typescript.

São realizados testes em nível de: Tipos de dados (types), Entidades e Repositórios.

### 1. Testes em nível de tipos de dados

:link: [Nome](./src/entities/user/types/Name.spec.ts)<br>
:link: [Data de aniversário](./src/entities/user/types/BirthDate.spec.ts)<br>
:link: [Grupo de risco](./src/entities/user/types/IsRiskGroup.spec.ts)<br>

Além dos citados acima, também foram realizados testes em tipos de dados: :link: [Email](./src/entities/user/types/Email.spec.ts) e :link: [Password](./src/entities/user/types/Password.spec.ts)

### 2. Testes em nível de entidade

:link: [Entidade usuário](./src/entities/user/User.spec.ts)

### 3. Testes em nível de repositório

:link: [Repositório do usuário](./src/use_cases/register_user/in_memory/UserRepositoryInMemory.spec.ts)

Para executar este projeto, siga os sequintes passos:

**Importante:** Necessário ter o yarn ou npm instalado.

```bash
# Após clonar o repositório
$ yarn install

# Ou se utiliza o npm:
$ npm install
```

Para rodar a bateria de testes

```bash
# Após clonar o repositório
$ yarn test
```

Resultado:

![Resultado](./src/main/images/resultado-tests.png)

## Autor

Edivam Enéas de Almeida Júnior.
