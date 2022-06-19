const {validator} = require('../decorators/decorators')

class CreateEmployeeSchema {
    @validator(['isNumber','isRequired'])
    id
    @validator(['isObject',"isRequired"])
    data
    @validator(['isNumber','isRequired'])
    parentId
}

module.exports = CreateEmployeeSchema