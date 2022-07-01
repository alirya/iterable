import Iterable from "../../../dist/boolean/iterable";
import IsBoolean from "@alirya/boolean/boolean";
import IsFunction from "@alirya/function/boolean/function";
import {AndCallbackParameters} from "../../../dist/boolean/and-callback";

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`all valid`,function() {

    const callbacks = [
        IsBoolean,
        (value) => value === true
    ];

    expect(AndCallbackParameters(callbacks, [true])).toBe(true);
    expect(AndCallbackParameters(callbacks, [false])).toBe(false);
});

it(`contain invalid`,function() {

    const callbacks = [
        IsBoolean,
        IsFunction
    ];

    expect(AndCallbackParameters(callbacks, [true])).toBe(false);
    expect(AndCallbackParameters(callbacks, [false])).toBe(false);
});

it(`no callback`,function() {

    const callbacks : Iterable<() => boolean> = [
    ];

    expect(AndCallbackParameters(callbacks, [], true)).toBe(true);
    expect(AndCallbackParameters(callbacks, [], false)).toBe(false);
});
