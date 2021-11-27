import Compound from "./compound";
import FunctionOr from "./boolean/or-parameters";
/**
 * Or operator for {@link Validatable}
 */
export default class OrParameters extends Compound {
    get valid() {
        return FunctionOr(this.iterable, this.defaults);
    }
}
//# sourceMappingURL=or-parameters.js.map