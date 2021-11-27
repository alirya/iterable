export default function LastParameters(iterable, defaults = null) {
    let result = defaults;
    for (const value of iterable) {
        result = value;
    }
    return result;
}
//# sourceMappingURL=last-parameters.js.map