import IterableContainer from './iterable/iterable.js';
import Callback from '@alirya/function/callback/callback.js';
import Callable from '@alirya/function/callable.js';
import Value from '@alirya/value/value.js';

export function * MapParameters<Type, Mapped>(
    iterable: Iterable<Type>,
    mapper : (value: Type) => Mapped
) : Iterable<Mapped> {

    for(const value of iterable) {

        yield mapper(value);
    }
}

export type MapArgumentIterable<Type, Mapped> = IterableContainer<Iterable<Type>> & Callback<Callable<[Type], Mapped>>;
export type MapArgumentValue<Type, Mapped> = Value<Iterable<Type>> & Callback<Callable<[Type], Mapped>>;
export type MapArgument<Type, Mapped> = MapArgumentIterable<Type, Mapped> | MapArgumentValue<Type, Mapped>;

export function MapParameter<Type, Mapped>(
    {
        iterable,
        callback,
    } : MapArgumentIterable<Type, Mapped>
) : Iterable<Mapped>;

export function MapParameter<Type, Mapped>(
    {
        callback,
        value
    } : MapArgumentValue<Type, Mapped>
) : Iterable<Mapped>;

export function * MapParameter<Type, Mapped>(
    {
        iterable,
        callback,
        value
    } : MapArgumentIterable<Type, Mapped> & MapArgumentValue<Type, Mapped>
) : Iterable<Mapped> {

    return MapParameters(iterable || value, callback);
}


namespace Map {
    export const Parameters = MapParameters;
    export const Parameter = MapParameter;
    export type ArgumentIterable<Type, Mapped> = MapArgumentIterable<Type, Mapped>;
    export type ArgumentValue<Type, Mapped> = MapArgumentValue<Type, Mapped>;
    export type Argument<Type, Mapped> = MapArgument<Type, Mapped>;
}
export default Map;
