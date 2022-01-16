
export default class MemoizedReturnCallback<Type extends any = any> implements Iterable<Type> {

    private returns : Type[] = [];
    private sources : (()=>Type)[] = [];

    constructor(
         sources : ReadonlyArray<()=>Type> = []
    ) {

        this.sources = [...sources];
    }

    * [Symbol.iterator](): Iterator<Type> {

        yield * this.returns;

        while (this.sources.length) {

            const resolve = (this.sources.shift() as ()=>Type)();
            this.returns.push(resolve);
            yield resolve;
        }
    }

}
