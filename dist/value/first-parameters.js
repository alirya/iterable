export default function FirstParameters(iterable, defaults = null) {
    return iterable[Symbol.iterator]().next().value || defaults;
}
//# sourceMappingURL=first-parameters.js.map