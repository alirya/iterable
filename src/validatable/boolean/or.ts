import Validatable from '@axiona/validatable/validatable.js';
import IterableContainer from '../../iterable/iterable.js';

export function OrParameters<
    Validatables extends Iterable<Validatable>
>(
    validatables : Validatables,
    defaults  = true
) : boolean {

    for(const validatable of validatables) {

        defaults = validatable.valid;

        if(defaults) {

            return true;
        }
    }

    return defaults;
}


export function OrParameter<
    Validatables extends Iterable<Validatable>
>(
    {
        iterable,
        defaults = true,
    } : IterableContainer<Validatables> & {
        defaults ?: boolean
    }
) : boolean {

    return OrParameters(iterable, defaults);
}


namespace Or {
    export const Parameters = OrParameters;
    export const Parameter = OrParameter;
}
export default Or;
