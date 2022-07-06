import Guard from '../boolean/iterable.js';
import Throwable from './throwable/iterable.js';

export default function Iterable<Enumerate>(
    value : unknown,
    error : (value:unknown)=>Error = Throwable
) : asserts value is Enumerate[keyof Enumerate] {

    if(!Guard(value)) {

        throw error(value);
    }
}


