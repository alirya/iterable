import IterableContainer from '../iterable/iterable.js';
import Value from '@axiona/value/value.js';
import Validation from '@axiona/boolean/validation/validation.js';

export function FindParameters<
    Type extends any,
    Default extends Type
>(
    iterable : Iterable<Type>,
    validation : (block:Type) => boolean,
    defaults : Default
) : Type|Default;

export function FindParameters<
    Type extends any,
    Default extends any
>(
    iterable : Iterable<Type>,
    validation : (block:Type) => boolean,
    defaults : Default
) : Type|Default;

export function FindParameters<
    Type extends any,
>(
    iterable : Iterable<Type>,
    validation : (block:Type) => boolean,
) : Type|null;

export function FindParameters<
    Type extends any,
    Default extends Type|null
>(
    iterable : Iterable<Type>,
    validation : (block:Type) => boolean,
    defaults : Default|null = null
) : Type|Default|null {

    for (const value of iterable) {

        if(validation(value)) {

            return value;
        }
    }

    return defaults;
}


export function FindParameter<
    Type extends any,
    Default extends Type
>(
    {
        iterable,
        defaults,
        validation
    } : IterableContainer<Iterable<Type>> & Validation<[Type]> & {
        defaults : Default|null
    }
) : Type|Default;

export function FindParameter<
    Type extends any,
    Default extends Type
>(
    {
        defaults,
        value,
        validation
    } : Value<Iterable<Type>> & Validation<[Type]> & {
        defaults : Default|null
    }
) : Type|Default;

export function FindParameter<
    Type extends any,
    Default extends any
>(
    {
        iterable,
        defaults,
        validation
    } : IterableContainer<Iterable<Type>> & Validation<[Type]> & {
        defaults : Default|null
    }
) : Type|Default;

export function FindParameter<
    Type extends any,
    Default extends any
>(
    {
        defaults,
        value,
        validation
    } : Value<Iterable<Type>> & Validation<[Type]> & {
        defaults : Default|null
    }
) : Type|Default;

export function FindParameter<
    Type extends any,
>(
    {
        iterable,
        value,
        validation
    } : IterableContainer<Iterable<Type>> & Value<Iterable<Type>> & Validation<[Type]>

) : Type|null;

export function FindParameter<
    Type extends any,
    Default extends Type|null
>(
    {
        iterable,
        defaults = null,
        value,
        validation
    } : IterableContainer<Iterable<Type>> & Value<Iterable<Type>> & Validation<[Type]> & {
        defaults : Default|null
    }
) : Type|Default|null {

    return FindParameters(value || iterable, validation, defaults);
}


namespace Find {
    export const Parameters = FindParameters;
    export const Parameter = FindParameter;
}
export default Find;
