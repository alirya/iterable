import IterableContainer from './iterable/iterable';
import Validation from '@alirya/boolean/validation/validation';
import Value from '@alirya/value/value';
export function * FilterParameters<Type extends any = any>(

    iterable: Iterable<Type>,
    validation : (value: Type) => boolean
) : Iterable<Type> {

    for(const value of iterable) {

        if(validation(value)) {

            yield value;
        }
    }
}

export type FilterArgumentIterableContainer<Type extends any = any> = IterableContainer<Iterable<Type>> & Validation<[Type]>;
export type FilterArgumentValue<Type extends any = any> = Value<Iterable<Type>> & Validation<[Type]>;
export type FilterArgument<Type extends any = any> = FilterArgumentIterableContainer<Type> | FilterArgumentValue<Type>;

export function FilterParameter<Type extends any = any>(
    {
        iterable,
        validation
    } : FilterArgumentIterableContainer<Type>
) : Iterable<Type>;

export function FilterParameter<Type extends any = any>(
    {
        value,
        validation
    } : FilterArgumentValue<Type>
) : Iterable<Type>;

export function * FilterParameter<Type extends any = any>(
    {
        iterable,
        value,
        validation
    } : FilterArgumentIterableContainer<Type> & FilterArgumentValue<Type>
) : Iterable<Type> {

    return FilterParameters(iterable || value, validation);
}


namespace Filter {
    export const Parameters = FilterParameters;
    export const Parameter = FilterParameter;
    export type ArgumentIterableContainer<Type extends any = any> = FilterArgumentIterableContainer<Type>;
    export type ArgumentValue<Type extends any = any> = FilterArgumentValue<Type>;
    export type Argument<Type extends any = any> = FilterArgument<Type>;
}
export default Filter;
