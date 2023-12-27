import Validatable from '@axiona/validatable/validatable.js';
import IterableContainer from '../../iterable/iterable.js';

export function AndParameters<
    Validatables extends Iterable<Validatable>
>(
    validatables : Validatables,
    defaults  = true
) : boolean {

    for(const validatable of validatables) {

        defaults = validatable.valid;

        if(!defaults) {

            return false;
        }
    }

    return defaults;
}


export function AndParameter<
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


namespace And {
    export const Parameters = AndParameters;
    export const Parameter = AndParameter;
}
export default And;
