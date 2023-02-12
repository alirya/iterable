import Compound from './compound.js';
import FunctionAnd from './boolean/and.js';
import Validatable from '@alirya/validatable/validatable.js';
import IterableContainer from '../iterable/iterable.js';

/**
 * And operator for {@link Validatable}
 */
export class AndParameters<Arguments extends Iterable<Validatable>> extends Compound<Arguments> {

    get valid() : boolean {

        return  FunctionAnd.Parameters(this.iterable, this.defaults);
    }
}


/**
 * And operator for {@link Validatable}
 */
export class AndParameter<Arguments extends Iterable<Validatable>> extends AndParameters<Arguments> {

    constructor({
        iterable,
        defaults = true,
    } : IterableContainer<Arguments> & {
        defaults ?: boolean
    }) {
        super(iterable, defaults);
    }

}


namespace And {
    export const Parameters = AndParameters;
    export const Parameter = AndParameter;
}
export default And;
