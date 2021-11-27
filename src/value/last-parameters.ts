
export default function LastParameters<
    Type extends any,
    Default extends Type
>(
    iterable : Iterable<Type>,
    defaults : Default
) : Type|Default;

export default function LastParameters<
    Type extends any,
    Default extends any
>(
    iterable : Iterable<Type>,
    defaults : Default
) : Type|Default;

export default function LastParameters<
    Type extends any,
>(
    iterable : Iterable<Type>,
) : Type|null;

export default function LastParameters<
    Type extends any,
    Default extends Type|null
>(
    iterable : Iterable<Type>,
    defaults : Default|null = null
) : Type|Default|null {

    let result : Type|Default|null = defaults;

    for (const value of iterable) {

        result = value;
    }

    return result;
}
