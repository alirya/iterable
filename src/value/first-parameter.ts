import IterableContainer from '../iterable/iterable';
import Value from '@alirya/value/value';
import FirstParameters from './first-parameters';

export default function FirstParameter<
    Type extends any,
>(
    {
        iterable,
    } : IterableContainer<Iterable<Type>>
) : Type|null;

export default function FirstParameter<
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

export default function FirstParameter<
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

export default function FirstParameter<
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

    return FirstParameters(iterable || value, defaults);
}
