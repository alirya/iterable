import MemoizedReturnCallback from '../dist/memoized-return-callback.js';


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

        for(const value of callbacks) {

            if(value === 1) {
                expect(first).toEqual(1);
                expect(second).toEqual(0);
            }

            if(value === 2) {
                expect(first).toEqual(1);
                expect(second).toEqual(1);
            }
        }

    });

    it('second call', () => {

        for(const value of callbacks) {

            if(value === 1) {
                expect(first).toEqual(1);
                expect(second).toEqual(1);
            }

            if(value === 2) {
                expect(first).toEqual(1);
                expect(second).toEqual(1);
            }
        }

    });

});
