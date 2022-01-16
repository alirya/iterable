import Guard from '../boolean/iterable';
import Throwable from './throwable/iterable';

export default function Iterable<Enumerate>(
    value : unknown,
    error : (value:unknown)=>Error = Throwable
) : asserts value is Enumerate[keyof Enumerate] {

    if(!Guard(value)) {

        throw error(value);
    }
}


