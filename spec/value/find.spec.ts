import MemoizedReturnCallback from '../../dist/memoized-return-callback.js';
import {FindParameters} from '../../dist/value/find.js';


it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('subjects', function () {

    let first = 0;
    let second = 0;

    const subjects = [
        ()=>{
            first++;
            return 1;
        },
        ()=>{
            second++;
            return 2;
        }
    ];

    const callbacks = new MemoizedReturnCallback(subjects);

    it('first call', () => {

        expect(FindParameters(callbacks, returns=>returns===1, 0)).toEqual(1);
        expect(first).toEqual(1);
        expect(second).toEqual(0);
    });

    it('second call', () => {

        expect(FindParameters(callbacks, returns=>returns===2, 0)).toEqual(2);
        expect(first).toEqual(1);
        expect(second).toEqual(1);

    });

});
