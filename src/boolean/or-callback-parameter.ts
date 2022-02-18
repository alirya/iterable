import Callable from '@alirya/function/callable';
import IterableContainer from '../iterable/iterable';
import Argument from '@alirya/function/argument/argument';
import OrCallbackParameters from './or-callback-parameters';

export default function OrCallbackParameter<Callback extends Callable<unknown[], boolean>>(
  {
    iterable,
    argument,
    defaults = false,
  } : IterableContainer<Iterable<Callback>> & Argument<Parameters<Callback>> & {
    defaults ?: boolean
  }
) : boolean {

  return OrCallbackParameters(iterable, argument, defaults);

}
