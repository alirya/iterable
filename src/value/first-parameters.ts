export default function FirstParameters<
    Type extends any,
    Default extends Type
>(
    iterable : Iterable<Type>,
    defaults : Default
) : Type|Default;

export default function FirstParameters<
    Type extends any,
    Default extends any
>(
    iterable : Iterable<Type>,
    defaults : Default
) : Type|Default;

export default function FirstParameters<
    Type extends any,
>(
    iterable : Iterable<Type>,
) : Type|null;

export default function FirstParameters<
    Type extends any,
    Default extends Type|null
>(
    iterable : Iterable<Type>,
    defaults : Default|null = null
) : Type|Default {

    return iterable[Symbol.iterator]().next().value || defaults;
}
