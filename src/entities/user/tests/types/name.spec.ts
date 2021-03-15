import { Name } from '../../types/Name'

describe('Validador de nome', () => {
    it('Deve aceitar um nome válido (1).', () => {
        expect(Name.validate('Tiago Rizzo')).toBe(true)
    })
})
