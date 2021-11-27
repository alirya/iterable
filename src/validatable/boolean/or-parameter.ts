import Validatable from "@dikac/t-validatable/validatable";
import OrParameters from "./or-parameters";
import IterableContainer from "../../iterable/iterable";

export default function OrParameter<
    Validatables extends Iterable<Validatable>
>(
    {
        iterable,
        defaults = true,
    } : IterableContainer<Validatables> & {
        defaults ?: boolean
    }
) : boolean {

    return OrParameters(iterable, defaults);
}
