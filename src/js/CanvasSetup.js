import { variable } from '../index';
import { Ship } from './classes/Ship';
import { Asteroid } from './classes/Asteroid';
import { HandleKeyDown } from './components/HandleKeyDown';
import { HandleKeyUp } from './components/HandleKeyUp';
import { DrawLifeShips } from './components/DrawLifeShips';
import { Render } from './components/Render';

export function CanvasSetup() {
  variable.canvas = document.querySelector('canvas');
  variable.context = canvas.getContext('2d');
  canvas.width = variable.canvasWidth;
  canvas.height = variable.canvasHeight;
  variable.context.fillStyle = 'black';
  variable.context.fillRect(0, 0, canvas.width, canvas.height);
  variable.ship = new Ship();

  for (let i = 0; i < 2; i++) {
    variable.asteroids.push(new Asteroid());
  }

  document.body.addEventListener('keydown', HandleKeyDown);
  document.body.addEventListener('keyup', HandleKeyUp);

  localStorage.getItem(variable.localStorageName) === null
    ? (variable.highScore = 0)
    : (variable.highScore = localStorage.getItem(variable.localStorageName));

  Render();
  DrawLifeShips();
}
