export default function OrParameters(validatables, defaults = true) {
    for (const validatable of validatables) {
        defaults = validatable.valid;
        if (defaults) {
            return true;
        }
    }
    return defaults;
}
//# sourceMappingURL=or-parameters.js.map