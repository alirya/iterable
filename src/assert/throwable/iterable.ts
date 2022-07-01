import EnumType from '../string/iterable';

export default function Iterable<Value>(
    value : unknown,
) : Error {

    return new Error(EnumType.Parameters(value, false));
}
