import Compound from './compound';
import FunctionOr from './boolean/or-parameters';
import Validatable from '@alirya/validatable/validatable';

/**
 * Or operator for {@link Validatable}
 */
export default class OrParameters<
    Arguments extends Iterable<Validatable>
> extends Compound<Arguments> {




    get valid() : boolean {

        return  FunctionOr(this.iterable, this.defaults);
    }
}
