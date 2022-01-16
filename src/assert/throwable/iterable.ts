import EnumType from '../string/iterable-parameters';

export default function Iterable<Value>(
    value : unknown,
) : Error {

    return new Error(EnumType(value, false));
}
