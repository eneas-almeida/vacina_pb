class EmailError extends Error {
    public readonly name: string = 'EmailError'

    constructor(email: string) {
        super(`O email "${email}" é inválido.`)
    }
}

export { EmailError }
