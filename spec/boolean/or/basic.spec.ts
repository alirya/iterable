import Iterable from '../../../dist/boolean/iterable.js';
import IsBoolean from '@alirya/boolean/boolean.js';
import IsFunction from '@alirya/function/boolean/function.js';
import {OrCallbackParameters} from '../../../dist/boolean/or-callback.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`all valid`,function() {

    const callbacks = [
        IsBoolean,
        (value) => value === true
    ];

    expect(OrCallbackParameters(callbacks, [true])).toBe(true);
    expect(OrCallbackParameters(callbacks, [false])).toBe(true);
});

it(`contain invalid`,function() {

    const callbacks = [
        IsBoolean,
        IsFunction
    ];

    expect(OrCallbackParameters(callbacks, [true])).toBe(true);
    expect(OrCallbackParameters(callbacks, [false])).toBe(true);
});

it(`no callback`,function() {

    const callbacks : Iterable<() => boolean> = [
    ];

    expect(OrCallbackParameters(callbacks, [], true)).toBe(true);
    expect(OrCallbackParameters(callbacks, [], false)).toBe(false);
});
