import IterableContainer from "../iterable/iterable";
import Value from "@alirya/value/value";
import LastParameters from "./lasparameters";

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
