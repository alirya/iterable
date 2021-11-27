import Validatable from "@dikac/t-validatable/validatable";
import IterableContainer from "../../iterable/iterable";
export default function AndParameter<Validatables extends Iterable<Validatable>>({ iterable, defaults, }: IterableContainer<Validatables> & {
    defaults?: boolean;
}): boolean;
