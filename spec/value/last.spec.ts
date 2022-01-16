import MemoizedReturnCallback from '../../dist/memoized-return-callback';
import Last from '../../dist/value/last-parameters';


it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('subjects', function () {

    let first = 0;
    let second = 0;

    let subjects = [
        ()=>{
            first++;
            return 1;
        },
        ()=>{
            second++;
            return 2;
        }
    ];

    let callbacks = new MemoizedReturnCallback(subjects);

    it('first call', () => {

        expect(Last(callbacks, 0)).toEqual(2);
        expect(first).toEqual(1);
        expect(second).toEqual(1);
    });

    it('second call', () => {

        expect(Last(callbacks, 0)).toEqual(2);
        expect(first).toEqual(1);
        expect(second).toEqual(1);

    });

});
