import { BirthDate } from './BirthDate'

describe('Validador de data de nascimento', () => {
    test('Deve poder aceitar uma data válida (1).', () => {
        expect(BirthDate.validate('28/12/1983')).toBe(true)
    })

    test('Não deve poder aceitar uma data com menos de 10 caracteres (2).', () => {
        expect(BirthDate.validate('')).toBe(false)
    })

    // DIA

    test('Não deve poder aceitar uma data com o valor dia não numérico (3).', () => {
        expect(BirthDate.validate('dd/12/1984')).toBe(false)
    })

    test('Não deve poder aceitar uma data com o valor dia em branco (4).', () => {
        expect(BirthDate.validate('/11/1980')).toBe(false)
    })

    test('Não deve poder aceitar uma data com o valor dia maior que 31 (5).', () => {
        expect(BirthDate.validate('32/11/1980')).toBe(false)
    })

    // MÊS

    test('Não deve poder aceitar uma data com valor mês não numérico (6).', () => {
        expect(BirthDate.validate('13/mm/1984')).toBe(false)
    })

    test('Não deve poder aceitar uma data com valor mês em branco (7).', () => {
        expect(BirthDate.validate('21//1984')).toBe(false)
    })

    // ANO

    test('Não deve poder aceitar uma data com o valor ano não numérico (8).', () => {
        expect(BirthDate.validate('13/11/aaaa')).toBe(false)
    })

    test('Não deve poder aceitar uma data com valor ano em branco (9).', () => {
        expect(BirthDate.validate('13/11/')).toBe(false)
    })

    test('Não deve poder aceitar uma data com valor ano menor que 1900 (10).', () => {
        expect(BirthDate.validate('13/11/1899')).toBe(false)
    })
})
