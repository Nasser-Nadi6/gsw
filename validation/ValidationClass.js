class ValidationClass {
    validationError = []
    validationRules
    payload

    constructor(validationRules, payload) {
        this.validationRules = validationRules
        this.payload = payload
        this.handleValidation(validationRules, payload)
    }

    handleValidation(validationRules, payload) {
        validationRules.forEach((rule)=>{
            for (const [ruleKey, ruleValue] of Object.entries(rule)) {
                console.log(ruleKey)
            }
        })
    }

    isRequired(value) {
        console.log(value)
        if (!value) {
            this.validationError.push(
                `${value} is required!`
            )
            console.log(this.validationError)
        } else {
            this.validationError = this.validationError.filter((error) => {
                return error !== `${value} is required!`
            })
        }

    }

    isNumber(value) {

    }

    isObject(value) {

    }
}

module
    .exports = ValidationClass