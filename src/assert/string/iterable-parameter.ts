import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

export default function IterableParameters(
    {
        value,
        valid,
        subject,
    } : Value<unknown> & Validatable & {
        subject ?: string
    }
) : string {

    let string = (<any>value).toString();

    if(valid) {

        return `${subject} "${string}" is iterable."`;

    } else {

        return `${subject} "${string}" is not iterable."`;
    }
}

