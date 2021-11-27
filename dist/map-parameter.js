export default function* MapParameter(iterable, mapper) {
    for (const value of iterable) {
        yield mapper(value);
    }
}
//# sourceMappingURL=map-parameter.js.map