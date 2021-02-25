import { variable } from '../../index';
import { Bullet } from '../classes/Bullet';

export function HandleKeyUp(evt) {
  variable.keys[evt.keyCode] = false;
  if (evt.keyCode === 32) {
    variable.bullets.push(new Bullet(variable.ship.angle));
  }
}
