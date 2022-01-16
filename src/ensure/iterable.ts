import Assert from '../assert/iterable';
import Throwable from '../assert/throwable/iterable';

export default function Iterable<Enumerate>(
    value : unknown,
    error : (value:unknown)=>Error = Throwable
) :  Enumerate[keyof Enumerate] {

    Assert(value, error);
    return value;
}


