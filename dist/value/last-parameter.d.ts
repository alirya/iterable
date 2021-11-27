import IterableContainer from "../iterable/iterable";
import Value from "@dikac/t-value/value";
export default function LastParameter<Type extends any>({ iterable, }: IterableContainer<Iterable<Type>>): Type | null;
export default function LastParameter<Type extends any, Default extends Type>({ defaults, value, }: Value<Iterable<Type>> & {
    defaults: Default;
}): Type | Default;
export default function LastParameter<Type extends any, Default extends any>({ defaults, value, }: Value<Iterable<Type>> & {
    defaults: Default;
}): Type | Default;
