import { BirthDate } from './BirthDate'

describe('Validador de data de nascimento', () => {
    it('Deve aceitar uma data válida (1).', () => {
        expect(BirthDate.validate('28/12/1983')).toBe(true)
    })
})
