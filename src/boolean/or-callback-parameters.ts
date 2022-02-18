import Callable from '@alirya/function/callable';


export default function OrCallbackParameters<Callback extends Callable<unknown[], boolean>>(
  iterable : Iterable<Callback>,
  argument : Parameters<Callback>,
  defaults : boolean = false
) : boolean {

  for (const callback of iterable) {

    defaults = callback(...argument);

    if(defaults) {

      return true;
    }
  }

  return defaults;

}
