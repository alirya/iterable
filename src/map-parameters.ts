import IterableContainer from "./iterable/iterable";
import Callback from "@alirya/function/callback/callback";
import Callable from "@alirya/function/callable";
import MapParameter from "./map-parameter";
import Value from "@alirya/value/value";

export default function MapParameters<Type, Mapped>(
    {
        iterable,
        callback,
    } : IterableContainer<Iterable<Type>> & Callback<Callable<[Type], Mapped>>
) : Iterable<Mapped>;

export default function MapParameters<Type, Mapped>(
    {
        callback,
        value
    } : Value<Iterable<Type>> & Callback<Callable<[Type], Mapped>>
) : Iterable<Mapped>;

export default function * MapParameters<Type, Mapped>(
    {
        iterable,
        callback,
        value
    } : IterableContainer<Iterable<Type>> & Value<Iterable<Type>> & Callback<Callable<[Type], Mapped>>
) : Iterable<Mapped> {

    return MapParameter(iterable || value, callback);
}
