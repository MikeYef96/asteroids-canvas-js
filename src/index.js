import { CanvasSetup } from './js/CanvasSetup';
import './css/styles.css';

export const variable = {
  canvas,
  canvasWidth: 1200,
  canvasHeight: 600,
  keys: [],
  bullets: [],
  asteroids: [],
  score: 0,
  lives: 5,
  highScore: 0,
  localStorageName: 'HighScore',
};
document.addEventListener('DOMContentLoaded', CanvasSetup);
