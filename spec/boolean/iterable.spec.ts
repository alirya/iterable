import Iterable from '../../dist/boolean/iterable';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let argument : unknown = [];

    if(Iterable(argument)) {

        let result : Iterable<any> = argument;

    } else {

        // @ts-expecerror
        let result : Iterable<any> = argument;
    }

});

describe(`number`,function() {

    it(`integer`, () => {
        expect(Iterable(1)).toBeFalse();
    });

    it(`float`, () => {
        expect(Iterable(1.1)).toBeFalse();
    });

    it(`infinity`, () => {
        expect(Iterable(Infinity)).toBeFalse();
    });

    it(`Nan`, () => {
        expect(Iterable(NaN)).toBeFalse();
    });
});

describe('boolean', function() {

    it(`true`, () => {
        expect(Iterable(true)).toBeFalse();
    });

    it(`false`, () => {
        expect(Iterable(false)).toBeFalse();
    });

});

describe('string', function() {

    it(`primitive`, () => {
        expect(Iterable('str')).toBeTrue();
    });

    it(`object`, () => {
        expect(Iterable(new String('str'))).toBeTrue();
    });

});

describe('object', function() {

    it(`plain`, () => {
        expect(Iterable({})).toBeFalse();
    });

    it(`instance`, () => {
        expect(Iterable(new Map())).toBeTrue();
    });

});

describe('function', function() {

    it(`anonymous `, () => {
        expect(Iterable(function () {})).toBeFalse();
    });

    it(`anonymous arrow`, () => {
        expect(Iterable(()=>{})).toBeFalse();
    });

    it(`named`, () => {
        expect(Iterable(isNaN)).toBeFalse();
    });

});

describe('empty', function() {

    it(`null `, () => {
        expect(Iterable(null)).toBeFalse();
    });

    it(`undefined`, () => {
        expect(Iterable(undefined)).toBeFalse();
    });

});



