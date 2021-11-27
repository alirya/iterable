import FindParameters from "./find-parameters";
export default function FindParameter({ iterable, defaults = null, value, validation }) {
    return FindParameters(value || iterable, validation, defaults);
}
//# sourceMappingURL=find-parameter.js.map