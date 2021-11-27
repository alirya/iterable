import Return from "../return/return";
import Validatable from "@dikac/t-validatable/validatable";
import IterableContainer from "../iterable/iterable";
/**
 * base for creating compound wrapper for {@template Validatables}
 */
export default abstract class Compound<Validatables extends Iterable<Validatable>> implements Readonly<Validatable>, Iterable<Return<Validatables>>, IterableContainer<Validatables> {
    iterable: Validatables;
    defaults: boolean;
    /**
     * {@param iterable} multiple {@link Validatable} to be processed by subclass
     *
     * {@param defaults} is used if {@param iterable} is empty
     */
    constructor(iterable: Validatables, defaults?: boolean);
    [Symbol.iterator](): Iterator<Return<Validatables>>;
    abstract readonly valid: boolean;
}
