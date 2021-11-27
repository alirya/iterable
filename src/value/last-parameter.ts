import IterableContainer from "../iterable/iterable";
import Value from "@dikac/t-value/value";
import LastParameters from "./last-parameters";

export default function LastParameter<
    Type extends any,
>(
    {
        iterable,
    } : IterableContainer<Iterable<Type>>
) : Type|null;

export default function LastParameter<
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

export default function LastParameter<
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

export default function LastParameter<
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
