import IterableContainer from '../iterable/iterable';
import Value from '@alirya/value/value';

export function LastParameters<
    Type extends any,
    Default extends Type
>(
    iterable : Iterable<Type>,
    defaults : Default
) : Type|Default;

export function LastParameters<
    Type extends any,
    Default extends any
>(
    iterable : Iterable<Type>,
    defaults : Default
) : Type|Default;

export function LastParameters<
    Type extends any,
>(
    iterable : Iterable<Type>,
) : Type|null;

export function LastParameters<
    Type extends any,
    Default extends Type|null
>(
    iterable : Iterable<Type>,
    defaults : Default|null = null
) : Type|Default|null {

    let result : Type|Default|null = defaults;

    for (const value of iterable) {

        result = value;
    }

    return result;
}

export function LastParameter<
    Type extends any,
>(
    {
        iterable,
    } : IterableContainer<Iterable<Type>>
) : Type|null;

export function LastParameter<
    Type extends any,
    Default extends Type
>(
    {
        defaults,
        value,
    } : Value<Iterable<Type>> & {
        defaults : Default
    }
) : Type|Default;

export function LastParameter<
    Type extends any,
    Default extends any
>(
    {
        defaults,
        value,
    } : Value<Iterable<Type>> & {
        defaults : Default
    }
) : Type|Default;

export function LastParameter<
    Type extends any,
    Default extends Type|null
>(
    {
        iterable,
        defaults = null,
        value,
    } : IterableContainer<Iterable<Type>> & Value<Iterable<Type>> & {
        defaults : Default|null
    }
) : Type|Default|null {

    return LastParameters(iterable || value, defaults);
}


namespace Last {
    export const Parameters = LastParameters;
    export const Parameter = LastParameter;
}
export default Last;
