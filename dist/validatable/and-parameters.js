import Compound from "./compound";
import FunctionAnd from "./boolean/and-parameters";
/**
 * And operator for {@link Validatable}
 */
export default class AndParameters extends Compound {
    get valid() {
        return FunctionAnd(this.iterable, this.defaults);
    }
}
//# sourceMappingURL=and-parameters.js.map