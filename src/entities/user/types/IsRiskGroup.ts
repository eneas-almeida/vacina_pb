import { Either, left, right } from '../../../shared/Either'
import { IsRiskGroupError } from '../errors/IsRiskGroupError'

class IsRiskGroup {
    private readonly is_risk_group: string

    private constructor(is_risk_group: string) {
        this.is_risk_group = is_risk_group
        Object.freeze(this)
    }

    static create(is_risk_group: string): Either<IsRiskGroupError, IsRiskGroup> {
        if (!this.validate(is_risk_group)) {
            return left(new IsRiskGroupError(is_risk_group))
        }

        return right(new IsRiskGroup(is_risk_group))
    }

    get value(): boolean {
        return this.is_risk_group === '1' || 'true' ? true : false
    }

    static validate(is_risk_group: string): boolean {
        const possible_values: string[] = ['0', '1', 'true', 'false']

        if (!possible_values.includes(is_risk_group)) {
            return false
        }

        return true
    }
}

export { IsRiskGroup }
