import Validatable from "@dikac/t-validatable/validatable";

export default function OrParameters<
    Validatables extends Iterable<Validatable>
>(
    validatables : Validatables,
    defaults : boolean = true
) : boolean {

    for(const validatable of validatables) {

        defaults = validatable.valid;

        if(defaults) {

            return true;
        }
    }

    return defaults;
}
