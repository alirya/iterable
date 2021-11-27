
export default function FindParameters<
    Type extends any,
    Default extends Type
>(
    iterable : Iterable<Type>,
    validation : (block:Type) => boolean,
    defaults : Default
) : Type|Default;

export default function FindParameters<
    Type extends any,
    Default extends any
>(
    iterable : Iterable<Type>,
    validation : (block:Type) => boolean,
    defaults : Default
) : Type|Default;

export default function FindParameters<
    Type extends any,
>(
    iterable : Iterable<Type>,
    validation : (block:Type) => boolean,
) : Type|null;

export default function FindParameters<
    Type extends any,
    Default extends Type|null
>(
    iterable : Iterable<Type>,
    validation : (block:Type) => boolean,
    defaults : Default|null = null
) : Type|Default|null {

    for (const value of iterable) {

        if(validation(value)) {

            return value;
        }
    }

    return defaults;
}
