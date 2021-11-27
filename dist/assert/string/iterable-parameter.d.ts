import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
export default function IterableParameters({ value, valid, subject, }: Value<unknown> & Validatable & {
    subject?: string;
}): string;
