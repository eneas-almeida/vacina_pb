import { UserRepositoryInMemory } from './UserRepositoryInMemory'
import { IUserDTO } from '@entities/user/dtos/IUserDTO'

describe('Criação do usuário em memória', () => {
    test('Deve poder adicionar o usuário ao repositório (1).', async () => {
        const users: IUserDTO[] = [] // Estrutura de lista vazia

        const user_repository: UserRepositoryInMemory = new UserRepositoryInMemory(users) // Repositório

        const new_user = {
            name: 'Tiago Rizzo',
            birth_date: '28/12/1980',
            email: 'tiago@gmail.com',
            password: '2012312',
        }

        await user_repository.add(new_user) // Adiciona o novo usuário ao repositório

        const exists_user = await user_repository.findByEmail('tiago@gmail.com') // Existe o usuário?

        expect(exists_user?.email).toBe('tiago@gmail.com') // Executa a diretiva final
    })

    test('Deve poder retornar um usuário, se ele existe no repositório (2).', async () => {
        const users: IUserDTO[] = [
            {
                name: 'Tiago Rizzo',
                birth_date: '23/11/1983',
                email: 'tiago@gmail.com',
                password: '2012312',
            },
            {
                name: 'Marcos Mellen',
                birth_date: '12/07/1970',
                email: 'marcos@gmail.com',
                password: '4235122',
            },
            {
                name: 'Leonel Messi',
                birth_date: '08/09/1987',
                email: 'messi@gmail.com',
                password: '0123233',
            },
        ]

        const user_repository: UserRepositoryInMemory = new UserRepositoryInMemory(users)

        const exists_user = await user_repository.findByEmail('messi@gmail.com')

        expect(exists_user?.name).toBe('Leonel Messi')
    })

    test('Deve poder retornar undefined se o usuário não existe (3).', async () => {
        const users: IUserDTO[] = [
            {
                name: 'Tiago Rizzo',
                birth_date: '23/11/1983',
                email: 'tiago@gmail.com',
                password: '2012312',
            },
            {
                name: 'Marcos Mellen',
                birth_date: '12/07/1970',
                email: 'marcos@gmail.com',
                password: '4235122',
            },
            {
                name: 'Leonel Messi',
                birth_date: '08/09/1987',
                email: 'messi@gmail.com',
                password: '0123233',
            },
        ]

        const user_repository: UserRepositoryInMemory = new UserRepositoryInMemory(users)

        const exists_user = await user_repository.findByEmail('cristiano_ronaldo@gmail.com')

        expect(exists_user).toEqual(undefined)
    })

    test('Deve poder remover o usuário do repositório (4).', async () => {
        const users: IUserDTO[] = [
            {
                name: 'Tiago Rizzo',
                birth_date: '23/11/1983',
                email: 'tiago@gmail.com',
                password: '2012312',
            },
            {
                name: 'Marcos Mellen',
                birth_date: '12/07/1970',
                email: 'marcos@gmail.com',
                password: '4235122',
            },
            {
                name: 'Leonel Messi',
                birth_date: '08/09/1987',
                email: 'messi@gmail.com',
                password: '0123233',
            },
        ]

        const user_repository: UserRepositoryInMemory = new UserRepositoryInMemory(users)

        user_repository.removeByEmail('marcos@gmail.com') // Remove do repositório

        const exists_user = await user_repository.findByEmail('marcos@gmail.com') // Busca no repositório

        expect(exists_user).toEqual(undefined)
    })
})
