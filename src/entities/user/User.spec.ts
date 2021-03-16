import { left, right } from '@shared/Either'
import { User } from '@entities/user/User'
import { NameError } from '@entities/user/errors/NameError'
import { BirthDateError } from './errors/BirthDateError'
import { EmailError } from './errors/EmailError'
import { PasswordError } from './errors/PasswordError'
import { IsRiskGroupError } from './errors/IsRiskGroupError'

describe('Validador de entidade usuário', () => {
    test('Não deve poder criar um usuário, com um nome inválido (1).', async () => {
        const name = 'Tiago' // Deve conter nome e sobrenome: Tiago Rizzo.

        const new_user = {
            name: name,
            birth_date: '28/10/1983',
            email: 'tiago@gmail.com',
            password: 'aa4xxRzqq#',
            is_risk_group: '1',
        }

        const user_or_error = User.create(new_user)

        // Deve retornar uma exceção do tipo NameError
        expect(user_or_error).toEqual(left(new NameError(name)))
    })

    test('Não deve poder criar um usuário, sem uma data válida (dia/mes/ano) (2).', async () => {
        const birth_date = 'xx/10/1983' // Deve conter um dia válido em número

        const new_user = {
            name: 'Tiago Rizzo',
            birth_date: birth_date,
            email: 'tiago@gmail.com',
            password: 'aa4xxRzqq#',
            is_risk_group: '1',
        }

        const user_or_error = User.create(new_user)

        // Deve retornar uma exceção do tipo BirthDateError
        expect(user_or_error).toEqual(left(new BirthDateError(birth_date)))
    })

    test('Não deve poder criar um usuário, com um email inválido (3).', async () => {
        const email = '@gmail.com' // deve conter a primeira parte válida.

        const new_user = {
            name: 'Tiago Rizzo',
            birth_date: '28/10/1983',
            email: email,
            password: 'aa4xxRzqq#',
            is_risk_group: '1',
        }

        const user_or_error = User.create(new_user)

        // Deve retornar uma exceção do tipo EmailError
        expect(user_or_error).toEqual(left(new EmailError(email)))
    })

    test('Não deve poder criar um usuário, com um password inválido (4).', async () => {
        const password = '12345' // Deve conter pelo menos: número, letra maiúscula e carater especial.

        const new_user = {
            name: 'Tiago Rizzo',
            birth_date: '28/10/1983',
            email: 'tiago@gmail.com',
            password: password,
            is_risk_group: '1',
        }

        const user_or_error = User.create(new_user)

        // Deve retornar uma exceção do tipo PasswordError
        expect(user_or_error).toEqual(left(new PasswordError(password)))
    })

    test('Não deve poder criar um usuário, com um estado de grupo de risco inválido (4).', async () => {
        const is_risk_group = '-1' // Deve conter os estados em texto: 0, 1, true ou falso.

        const new_user = {
            name: 'Tiago Rizzo',
            birth_date: '28/10/1983',
            email: 'tiago@gmail.com',
            password: 'aa4xxRzqq#',
            is_risk_group: is_risk_group,
        }

        const user_or_error = User.create(new_user)

        // Deve retornar uma exceção do tipo IsRiskGroupError
        expect(user_or_error).toEqual(left(new IsRiskGroupError(is_risk_group)))
    })
})
