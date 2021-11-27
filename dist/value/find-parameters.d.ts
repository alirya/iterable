export default function FindParameters<Type extends any, Default extends Type>(iterable: Iterable<Type>, validation: (block: Type) => boolean, defaults: Default): Type | Default;
export default function FindParameters<Type extends any, Default extends any>(iterable: Iterable<Type>, validation: (block: Type) => boolean, defaults: Default): Type | Default;
export default function FindParameters<Type extends any>(iterable: Iterable<Type>, validation: (block: Type) => boolean): Type | null;
