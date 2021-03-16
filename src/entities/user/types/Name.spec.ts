import { Name } from './Name'

describe('Validador de nome', () => {
    test('Deve poder aceitar um nome válido (1).', () => {
        expect(Name.validate('Tiago Rizzo')).toBe(true)
    })

    test('Não deve poder aceitar um nome de valor vazio (2).', () => {
        expect(Name.validate('')).toBe(false)
    })

    test('Não deve poder aceitar o dado apenas com o primeiro nome (3).', () => {
        expect(Name.validate('Tiago')).toBe(false)
    })

    test('Não deve poder aceitar nome e sobrenome menor que 10 caracteres (4).', () => {
        expect(Name.validate('Teo linz')).toBe(false)
    })

    test('Não deve poder aceitar nome e sobrenome maior que 25 caracteres (5).', () => {
        expect(Name.validate('Teobaldosantos Marntissilva')).toBe(false)
    })
})
