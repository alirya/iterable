import MapParameter from "./map-parameter";
export default function* MapParameters({ iterable, callback, value }) {
    return MapParameter(iterable || value, callback);
}
//# sourceMappingURL=map-parameters.js.map