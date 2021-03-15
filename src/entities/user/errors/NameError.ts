class NameError extends Error {
    public readonly name: string = 'NameError'

    constructor(name: string) {
        super(`O nome "${name}" é inválido!`)
    }
}

export { NameError }
