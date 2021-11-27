import IterableContainer from "../iterable/iterable";
import Value from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
import FindParameters from "./find-parameters";

export default function FindParameter<
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

export default function FindParameter<
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

export default function FindParameter<
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

export default function FindParameter<
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

export default function FindParameter<
    Type extends any,
>(
    {
        iterable,
        value,
        validation
    } : IterableContainer<Iterable<Type>> & Value<Iterable<Type>> & Validation<[Type]>

) : Type|null;

export default function FindParameter<
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
