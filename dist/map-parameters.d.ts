import IterableContainer from "./iterable/iterable";
import Callback from "@dikac/t-function/callback/callback";
import Callable from "@dikac/t-function/callable";
import Value from "@dikac/t-value/value";
export default function MapParameters<Type, Mapped>({ iterable, callback, }: IterableContainer<Iterable<Type>> & Callback<Callable<[Type], Mapped>>): Iterable<Mapped>;
export default function MapParameters<Type, Mapped>({ callback, value }: Value<Iterable<Type>> & Callback<Callable<[Type], Mapped>>): Iterable<Mapped>;
