class IsRiskGroupError extends Error {
    public readonly risk_group: string = 'RiskGroupError'

    constructor(risk_group: string) {
        super(`O estado "${risk_group}" do grupo de risco é inválido.`)
    }
}

export { IsRiskGroupError }
