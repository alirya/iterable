export default function Iterable<Assumption extends unknown>(value : unknown): value is Iterable<Assumption> {

    switch (value) {
        case undefined :
        case null :
            return false;
    }

    return typeof (<any>value)[Symbol.iterator] === 'function';
}
