import { Email } from './Email'

describe('Validador de email', () => {
    it('Deve aceitar um email válido (1).', () => {
        expect(Email.validate('eneas.computacao@gmail.com')).toBe(true)
    })

    it('Não deve aceitar e-mail com valor vazio (2).', () => {
        expect(Email.validate('')).toBe(false)
    })

    it('Não deve aceitar e-mail sem arroba (3).', () => {
        expect(Email.validate('gmail.com')).toBe(false)
    })

    it('Não deve aceitar mais de 64 caracteres na parte local (4).', () => {
        const localPart = 'c'.repeat(100)
        const email = localPart + '@gmail.com'
        expect(Email.validate(email)).toBe(false)
    })

    it('Não deve aceitar parte local vazia (5).', () => {
        expect(Email.validate('@gmail.com')).toBe(false)
    })

    it('Não deve aceitar caractere inválido - parte local (6).', () => {
        expect(Email.validate('e cao@gmail.com')).toBe(false)
    })

    it('Não deve aceitar um ponto como primeiro caractere - parte local (7).', () => {
        expect(Email.validate('.eneas.computacao@gmail.com')).toBe(false)
    })

    it('Não deve aceitar um ponto como último caractere - parte local (8).', () => {
        expect(Email.validate('eneas.computacao.@gmail.com')).toBe(false)
    })

    it('Não deve aceitar mais de 255 caracteres - parte do domínio (9).', () => {
        const domain = 'c'.repeat(260) // Repete o c 260 vezes
        const email = 'eneas.computacao@' + domain + '.com'
        expect(Email.validate(email)).toBe(false)
    })

    it('Não deve aceitar ponto como primeiro caractere - parte do domínio (10).', () => {
        expect(Email.validate('venzel@.gmail.com')).toBe(false)
    })
})
