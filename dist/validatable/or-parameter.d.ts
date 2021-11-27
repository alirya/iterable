import Validatable from "@dikac/t-validatable/validatable";
import OrParameters from "./or-parameters";
import IterableContainer from "../iterable/iterable";
/**
 * Or operator for {@link Validatable}
 */
export default class OrParameter<Arguments extends Iterable<Validatable>> extends OrParameters<Arguments> {
    constructor({ iterable, defaults, }: IterableContainer<Arguments> & {
        defaults?: boolean;
    });
}
