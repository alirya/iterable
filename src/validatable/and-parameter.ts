import Compound from './compound';
import FunctionAnd from './boolean/and-parameters';
import Validatable from '@alirya/validatable/validatable';
import IterableContainer from '../iterable/iterable';
import AndParameters from './and-parameters';

/**
 * And operator for {@link Validatable}
 */
export default class AndParameter<Arguments extends Iterable<Validatable>> extends AndParameters<Arguments> {

    constructor({
        iterable,
        defaults = true,
    } : IterableContainer<Arguments> & {
        defaults ?: boolean
    }) {
        super(iterable, defaults);
    }

}
