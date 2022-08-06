

export default function * Merge<Type>(...iterables:ReadonlyArray<Iterable<Type>>) : Iterable<Type> {

    for (const iterable of iterables) {

        yield * iterable;
    }
    
}