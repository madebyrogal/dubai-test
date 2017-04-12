export default class Exception {
    constructor(message, code, prevException) {
        this.message = message || '';
        this.code = code || 0;
    }
}
