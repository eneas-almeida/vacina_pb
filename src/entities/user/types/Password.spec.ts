import { Password } from './Password'

describe('Validador de password', () => {
    test('Deve poder aceitar um password válido (1).', async () => {
        expect(Password.validate('aa4xxRzqq#')).toBe(true)
    })

    test('Não deve poder aceitar um password nulo (2).', async () => {
        expect(Password.validate('')).toBe(false)
    })

    test('Não deve poder aceitar um password menor que 4 caracteres (3).', async () => {
        expect(Password.validate('1234')).toBe(false)
    })

    test('Não deve poder aceitar um password maior que 10 caracteres (4).', async () => {
        expect(Password.validate('123456789xz')).toBe(false)
    })

    test('Não deve poder aceitar um password sem um número, uma letra maiúscula e um caractere especial (5).', async () => {
        expect(Password.validate('aa4xxzzqqq')).toBe(false)
    })

    test('Não deve poder aceitar um password sem um número, uma letra maiúscula e um caractere especial (5).', async () => {
        expect(Password.validate('aa4xxRzqqq')).toBe(false)
    })
})
