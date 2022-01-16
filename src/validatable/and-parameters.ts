import Compound from './compound';
import FunctionAnd from './boolean/and-parameters';
import Validatable from '@alirya/validatable/validatable';

/**
 * And operator for {@link Validatable}
 */
export default class AndParameters<Arguments extends Iterable<Validatable>> extends Compound<Arguments> {

    get valid() : boolean {

        return  FunctionAnd(this.iterable, this.defaults);
    }
}
