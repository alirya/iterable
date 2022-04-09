import IterableContainer from './iterable/iterable';
import Callback from '@alirya/function/callback/callback';
import Callable from '@alirya/function/callable';
import MapParameters from './map-parameters';
import Value from '@alirya/value/value';

export default function MapParameter<Type, Mapped>(
    {
        iterable,
        callback,
    } : IterableContainer<Iterable<Type>> & Callback<Callable<[Type], Mapped>>
) : Iterable<Mapped>;

export default function MapParameter<Type, Mapped>(
    {
        callback,
        value
    } : Value<Iterable<Type>> & Callback<Callable<[Type], Mapped>>
) : Iterable<Mapped>;

export default function * MapParameter<Type, Mapped>(
    {
        iterable,
        callback,
        value
    } : IterableContainer<Iterable<Type>> & Value<Iterable<Type>> & Callback<Callable<[Type], Mapped>>
) : Iterable<Mapped> {

    return MapParameters(iterable || value, callback);
}
