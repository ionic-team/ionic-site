export default class FastMap {
    constructor() {
        this.size = 0;
        this._values = {};
    }
    delete(key) {
        this._values[key] = null;
        return true;
    }
    set(key, value) {
        this._values[key] = value;
        return this;
    }
    get(key) {
        return this._values[key];
    }
    forEach(cb, thisArg) {
        const values = this._values;
        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                cb.call(thisArg, values[key], key);
            }
        }
    }
    clear() {
        this._values = {};
    }
}
