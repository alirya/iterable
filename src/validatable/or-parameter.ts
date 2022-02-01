import Validatable from '@alirya/validatable/validatable';
import OrParameters from './or-parameters';
import IterableContainer from '../iterable/iterable';

/**
 * Or operator for {@link Validatable}
 */
export default class OrParameter<
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
