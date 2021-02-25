import { variable } from '../../index';

export function HandleKeyDown(evt) {
  variable.keys[evt.keyCode] = true;
}
