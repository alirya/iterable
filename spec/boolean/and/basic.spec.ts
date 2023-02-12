import Iterable from '../../../dist/boolean/iterable.js';
import IsBoolean from '@alirya/boolean/boolean.js';
import IsFunction from '@alirya/function/boolean/function.js';
import {AndCallbackParameters} from '../../../dist/boolean/and-callback.js';

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
