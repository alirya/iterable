import Validatable from '@alirya/validatable/validatable';
import IterableContainer from '../../iterable/iterable';
import AndParameters from './and-parameters';

export default function AndParameter<
    Validatables extends Iterable<Validatable>
>(
    {
        iterable,
        defaults = true,
    } : IterableContainer<Validatables> & {
        defaults ?: boolean
    }
) : boolean {

    return AndParameters(iterable, defaults);
}
