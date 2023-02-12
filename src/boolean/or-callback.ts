import Callable from '@alirya/function/callable.js';
import IterableContainer from '../iterable/iterable.js';
import Argument from '@alirya/function/argument/argument.js';


export function OrCallbackParameters<Callback extends Callable<unknown[], boolean>>(
  iterable : Iterable<Callback>,
  argument : Parameters<Callback>,
  defaults  = false
) : boolean {

  for (const callback of iterable) {

    defaults = callback(...argument);

    if(defaults) {

      return true;
    }
  }

  return defaults;

}


export function OrCallbackParameter<Callback extends Callable<unknown[], boolean>>(
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


namespace OrCallback {
    export const Parameters = OrCallbackParameters;
    export const Parameter = OrCallbackParameter;
}
export default OrCallback;
