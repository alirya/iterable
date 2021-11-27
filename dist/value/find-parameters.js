export default function FindParameters(iterable, validation, defaults = null) {
    for (const value of iterable) {
        if (validation(value)) {
            return value;
        }
    }
    return defaults;
}
//# sourceMappingURL=find-parameters.js.map