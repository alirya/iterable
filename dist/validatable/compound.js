/**
 * base for creating compound wrapper for {@template Validatables}
 */
export default class Compound {
    /**
     * {@param iterable} multiple {@link Validatable} to be processed by subclass
     *
     * {@param defaults} is used if {@param iterable} is empty
     */
    constructor(iterable, defaults = true) {
        this.iterable = iterable;
        this.defaults = defaults;
    }
    [Symbol.iterator]() {
        return this.iterable[Symbol.iterator]();
    }
}
//# sourceMappingURL=compound.js.map