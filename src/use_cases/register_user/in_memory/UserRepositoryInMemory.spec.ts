import { UserRepositoryInMemory } from './UserRepositoryInMemory'
import { IUserDTO } from '@entities/user/dtos/IUserDTO'

describe('Criação do usuário em memória', () => {
    it('Deve poder adicionar o usuário ao repositório (1).', async () => {
        // Cria uma lista de usuários vazia
        const users: IUserDTO[] = []

        // Cria uma instância de repositório de usuários e adiciona a lista acima, vazia
        const user_repository: UserRepositoryInMemory = new UserRepositoryInMemory(users)

        // Email do usuário
        const email = 'tiago@gmail.com'

        // Cria o objeto de um usuário
        const new_user = { name: 'tiago', birth_date: '28/12/1980', email: email, password: '2012312' }

        // Adiciona o novo usuário ao repositório
        await user_repository.add(new_user)

        // Busca o usuário pelo email no Repositório
        const exists_user = await user_repository.findByEmail(email)

        // Executa a diretiva final
        expect(exists_user?.email).toBe('tiago@gmail.com')
    })
})
