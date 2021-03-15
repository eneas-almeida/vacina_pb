import { left, right } from '@shared/Either'
import { NameError } from '@entities/user/errors/NameError'
import { User } from '@entities/user/User'

describe('Validador de entidade usuário', () => {
    it('Não deve criar usuário com nome inválido (1).', async () => {
        const name = '_'

        const user_or_error = User.create({
            name: name,
            email: 'tiago@gmail.com',
            password: 'ifpb#202020',
        })

        /*
            left - indica um error
            right - indica a criacao do objeto
        */

        expect(user_or_error).toEqual(left(new NameError(name)))
    })
})
