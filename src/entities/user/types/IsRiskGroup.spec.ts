import { IsRiskGroup } from './IsRiskGroup'

describe('Validador de nome', () => {
    test('Deve poder aceitar um estado em texto válido (1).', () => {
        expect(IsRiskGroup.validate('0')).toBe(true)
    })

    test('Deve poder aceitar um estado em texto válido (2).', () => {
        expect(IsRiskGroup.validate('false')).toBe(true)
    })

    test('Deve poder aceitar um estado em texto válido (3).', () => {
        expect(IsRiskGroup.validate('1')).toBe(true)
    })

    test('Deve poder aceitar um estado em texto válido (4).', () => {
        expect(IsRiskGroup.validate('true')).toBe(true)
    })

    test('Não deve poder aceitar um estado em texto inválido (5).', () => {
        expect(IsRiskGroup.validate('-1')).toBe(false)
    })

    test('Não deve poder aceitar um estado em texto inválido (6).', () => {
        expect(IsRiskGroup.validate('2')).toBe(false)
    })
})
