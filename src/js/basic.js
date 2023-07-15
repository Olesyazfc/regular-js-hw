export default class Validator {
    constructor(username) {
        this.username = username
    }
    validateUsername(username) {
        const regular = new RegExp('^[a-zA-Z]+[\\w-]*[a-zA-Z]+$')
        const numbers = new RegExp('\\D+[0-9]{4}\\D+')
        let validName = regular.test(username)
        if (validName == false) {
            return false
        }
        return username.search(numbers) == -1
    }
}