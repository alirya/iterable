import FilterParameters from "./filter-parameters";
export default function* FilterParameter({ iterable, value, validation }) {
    return FilterParameters(iterable || value, validation);
}
//# sourceMappingURL=filter-parameter.js.map