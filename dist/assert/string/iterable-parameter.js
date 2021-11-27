export default function IterableParameters({ value, valid, subject, }) {
    let string = value.toString();
    if (valid) {
        return `${subject} "${string}" is iterable."`;
    }
    else {
        return `${subject} "${string}" is not iterable."`;
    }
}
//# sourceMappingURL=iterable-parameter.js.map