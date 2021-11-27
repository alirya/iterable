import Validatable from "@dikac/t-validatable/validatable";
export default function AndParameters<Validatables extends Iterable<Validatable>>(validatables: Validatables, defaults?: boolean): boolean;
