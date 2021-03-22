# Atividade de testes (TDD)

![VacibaPB](./src/main/images/vacina-pb.png)

A atividade faz parte da disciplina **Testes de Software** ministrada pela Profesora Doutora **Mirna Maia**, que consiste em desenvolver um código orietando a testes (TDD) de um cadastro de usuários, utilizando os seguintes campos:

-   Nome completo
-   Data de nascimento
-   Grupo de risco

O código foi escrito em Typescript, estruturado e baseado em uma Arquitetura Limpa, Design Orientado a Domínio (DDD) e Desenvolvimento Orientado a Testes (TDD), de acordo com ensinamentos de Martin Fowler em seu livro sobre refatoração e arquitetura limpa.

## Classes a serem testadas

:link: [Usuário](./src/entities/user/User.ts) (Entidade principal)<br><br>
:link: [Nome](./src/entities/user/types/Name.ts)<br>
:link: [Data de aniversário](./src/entities/user/types/BirthDate.ts)<br>
:link: [Grupo de risco](./src/entities/user/types/IsRiskGroup.ts)<br><br>
:link: [Repositório de usuário](./src/use_cases/register_user/in_memory/UserRepositoryInMemory.ts)

![Jest](./src/main/images/jest.png)

Como ferramenta de teste foi utilizado o framework **Jest**.

## Arquivos de testes

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

O código no presente repositório é de autoria de Edivam Enéas de Almeida Júnior.
