import Iterable from '../../dist/object/iterable.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('map', function () {

    const map : Map<string, string> = new Map<string, string>();
    let result : Record<string, string> = {};


    it('set data', () => {

        map.set('data', 'data');
        map.set('data1', 'data1');
        map.set('data2', 'data2');
        map.set('data3', 'data3');
    });


    it('call', () => {

        result = Iterable(map);
    });

    it('validate', () => {

        expect(result.data).toBe('data');
        expect(result.data1).toBe('data1');
        expect(result.data2).toBe('data2');
        expect(result.data3).toBe('data3');
    });

});

describe('array', function () {

    const map : [string, string][] = [];
    let result : Record<string, string> = {};


    it('set data', () => {

        map.push(['data', 'data']);
        map.push(['data1', 'data1']);
        map.push(['data2', 'data2']);
        map.push(['data3', 'data3']);
    });


    it('call', () => {

        result = Iterable(map);
    });

    it('validate', () => {

        expect(result.data).toBe('data');
        expect(result.data1).toBe('data1');
        expect(result.data2).toBe('data2');
        expect(result.data3).toBe('data3');
    });

});
