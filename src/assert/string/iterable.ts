import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';

export function IterableParameters(
    value : unknown,
    valid : boolean,
    subject  = 'value'
) : string {

    const string = (<any>value).toString();

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
