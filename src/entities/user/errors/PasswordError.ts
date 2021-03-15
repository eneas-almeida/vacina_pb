class PasswordError extends Error {
    public readonly name: string = 'PasswordError'

    constructor(password: string) {
        super(`O password "${password}" é inválido.`)
    }
}

export { PasswordError }
