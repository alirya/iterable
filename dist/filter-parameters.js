export default function* FilterParameters(iterable, validation) {
    for (const value of iterable) {
        if (validation(value)) {
            yield value;
        }
    }
}
//# sourceMappingURL=filter-parameters.js.map