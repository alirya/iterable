import Callable from '@alirya/function/callable';
import Argument from '@alirya/function/argument/argument';
import IterableContainer from '../iterable/iterable';
import AndCallbackParameters from './and-callback-parameters';


export default function AndCallbackParameter<Callback extends Callable<unknown[], boolean>>(
  {
    iterable,
    argument,
    defaults = false,
  } : IterableContainer<Iterable<Callback>> & Argument<Parameters<Callback>> & {
    defaults ?: boolean
  }
) : boolean {

  return AndCallbackParameters(iterable, argument, defaults);
}
