import Callable from '@alirya/function/callable.js';
import Argument from '@alirya/function/argument/argument.js';
import IterableContainer from '../iterable/iterable.js';


export function AndCallbackParameters<Callback extends Callable<unknown[], boolean>>(
  iterable : Iterable<Callback>,
  argument : Parameters<Callback>,
  defaults : boolean = false
) : boolean {

  for (const callback of iterable) {

    defaults = callback(...argument);

    if(!defaults) {

      return false;
    }
  }

  return defaults;
}


export function AndCallbackParameter<Callback extends Callable<unknown[], boolean>>(
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


namespace AndCallback {
    export const Parameters = AndCallbackParameters;
    export const Parameter = AndCallbackParameter;
}
export default AndCallback;
