import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

export function IterableParameters(
    value : unknown,
    valid : boolean,
    subject : string = 'value'
) : string {

    let string = (<any>value).toString();

    if(valid) {

        return `${subject} "${string}" is iterable."`;

    } else {

        return `${subject} "${string}" is not iterable."`;
    }
}

export type IterableArgument = Value<unknown> & Validatable & {
    subject ?: string
};


export function IterableParameter(
    {
        value,
        valid,
        subject,
    } : IterableArgument
) : string {

    return IterableParameters(value, valid, subject);
}



namespace Iterable {
    export const Parameters = IterableParameters;
    export const Parameter = IterableParameter;
}
export default Iterable;
