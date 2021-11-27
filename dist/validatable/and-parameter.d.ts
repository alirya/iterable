import Validatable from "@dikac/t-validatable/validatable";
import IterableContainer from "../iterable/iterable";
import AndParameters from "./and-parameters";
/**
 * And operator for {@link Validatable}
 */
export default class AndParameter<Arguments extends Iterable<Validatable>> extends AndParameters<Arguments> {
    constructor({ iterable, defaults, }: IterableContainer<Arguments> & {
        defaults?: boolean;
    });
}
