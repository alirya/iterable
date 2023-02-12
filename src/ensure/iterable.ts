import Assert from '../assert/iterable.js';
import Throwable from '../assert/throwable/iterable.js';

export default function Iterable<Enumerate>(
    value : unknown,
    error : (value:unknown)=>Error = Throwable
) :  Enumerate[keyof Enumerate] {

    Assert(value, error);
    return value;
}


