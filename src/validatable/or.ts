import Compound from './compound';
import FunctionOr from './boolean/or';
import Validatable from '@alirya/validatable/validatable';
import IterableContainer from '../iterable/iterable';

/**
 * Or operator for {@link Validatable}
 */
export class OrParameters<
    Arguments extends Iterable<Validatable>
> extends Compound<Arguments> {

    get valid() : boolean {

        return  FunctionOr.Parameters(this.iterable, this.defaults);
    }
}


/**
 * Or operator for {@link Validatable}
 */
export class OrParameter<
    Arguments extends Iterable<Validatable>
> extends OrParameters<Arguments> {

    constructor({
        iterable,
        defaults = true,
    } : IterableContainer<Arguments> & {
        defaults ?: boolean
    }) {
        super(iterable, defaults);
    }
}


namespace Or {
    export const Parameters = OrParameters;
    export const Parameter = OrParameter;
}
export default Or;
