import Return from '../return/return';
import Validatable from '@alirya/validatable/validatable';
import IterableContainer from '../iterable/iterable';

export interface CompoundType<Validatables extends Iterable<Validatable>> extends
    Readonly<Validatable>, Iterable<Return<Validatables>>, IterableContainer<Validatables> {

}
/**
 * base for creating compound wrapper for {@template Validatables}
 */
export default abstract class Compound<Validatables extends Iterable<Validatable>>
    implements CompoundType<Validatables>
{

    /**
     * {@param iterable} multiple {@link Validatable} to be processed by subclass
     *
     * {@param defaults} is used if {@param iterable} is empty
     */
    constructor(
        public iterable : Validatables,
        public defaults : boolean = true
    ) {

    }

    [Symbol.iterator]() : Iterator<Return<Validatables>> {

        return <Iterator<Return<Validatables>>> this.iterable[Symbol.iterator]();
    }

    abstract readonly valid: boolean;
}
