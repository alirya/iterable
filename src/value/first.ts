import IterableContainer from '../iterable/iterable.js';
import Value from '@axiona/value/value.js';

export function FirstParameters<
    Type extends any,
    Default extends Type
>(
    iterable : Iterable<Type>,
    defaults : Default
) : Type|Default;

export function FirstParameters<
    Type extends any,
    Default extends any
>(
    iterable : Iterable<Type>,
    defaults : Default
) : Type|Default;

export function FirstParameters<
    Type extends any,
>(
    iterable : Iterable<Type>,
) : Type|null;

export function FirstParameters<
    Type extends any,
    Default extends Type|null
>(
    iterable : Iterable<Type>,
    defaults : Default|null = null
) : Type|Default {

    return iterable[Symbol.iterator]().next().value || defaults;
}


export type FirstArgumentIterable<Type extends any, Default extends Type> = IterableContainer<Iterable<Type>> & {
    defaults ?: Default
};

export type FirstArgumentValue<Type extends any, Default extends Type> = Value<Iterable<Type>> & {
    defaults ?: Default
};

export function FirstParameter<
    Type extends any,
>(
    {
        iterable,
    } : Omit<FirstArgumentIterable<Type, Type>, 'defaults'>
) : Type|null;

export function FirstParameter<
    Type extends any,
    Default extends Type
>(
    {
        iterable,
        defaults,
    } : Required<FirstArgumentIterable<Type, Default>>
) : Type|Default;

export function FirstParameter<
    Type extends any,
    Default extends Type
>(
    {
        value,
    } : Omit<FirstArgumentValue<Type, Type>, 'defaults'>
) : Type|null;

export function FirstParameter<
    Type extends any,
    Default extends Type
>(
    {
        defaults,
        value,
    } : Required<FirstArgumentValue<Type, Type>>
) : Type|Default;

export function FirstParameter<
    Type extends any,
    Default extends Type
>(
    {
        iterable,
        defaults,
        value,
    } : Required<FirstArgumentIterable<Type, Default>> & Required<FirstArgumentValue<Type, Default>>
) : Type|Default|null {

    return FirstParameters(iterable || value, defaults || null);
}


namespace First {
    export const Parameters = FirstParameters;
    export const Parameter = FirstParameter;
}
export default First;
