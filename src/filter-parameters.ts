export default function * FilterParameters<Type extends any = any>(
    iterable: Iterable<Type>,
    validation : (value: Type) => boolean
) : Iterable<Type> {

    for(const value of iterable) {

        if(validation(value)) {

            yield value;
        }
    }
}
