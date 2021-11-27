export default function IterableParameters(
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

