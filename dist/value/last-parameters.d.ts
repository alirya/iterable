export default function LastParameters<Type extends any, Default extends Type>(iterable: Iterable<Type>, defaults: Default): Type | Default;
export default function LastParameters<Type extends any, Default extends any>(iterable: Iterable<Type>, defaults: Default): Type | Default;
export default function LastParameters<Type extends any>(iterable: Iterable<Type>): Type | null;
