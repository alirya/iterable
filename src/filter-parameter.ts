import IterableContainer from './iterable/iterable';
import Validation from '@alirya/boolean/validation/validation';
import Value from '@alirya/value/value';
import FilterParameters from './filter-parameters';

export default function FilterParameter<Type extends any = any>(
    {
        iterable,
        validation
    } : IterableContainer<Iterable<Type>> & Validation<[Type]>
) : Iterable<Type>;

export default function FilterParameter<Type extends any = any>(
    {
        value,
        validation
    } : Value<Iterable<Type>> & Validation<[Type]>
) : Iterable<Type>;

export default function * FilterParameter<Type extends any = any>(
    {
        iterable,
        value,
        validation
    } : IterableContainer<Iterable<Type>> & Value<Iterable<Type>> & Validation<[Type]>
) : Iterable<Type> {

    return FilterParameters(iterable || value, validation);
}
