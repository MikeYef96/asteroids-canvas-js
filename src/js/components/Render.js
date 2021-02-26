import { variable } from '../../index';
import { Asteroid } from '../classes/Asteroid';
import { DrawLifeShips } from './DrawLifeShips';
import { CircleCollision } from './CircleCollision';
import { HandleKeyDown } from '../components/HandleKeyDown';
import { HandleKeyUp } from '../components/HandleKeyUp';

export function Render() {
  const restartBtn = document.querySelector('.restart-btn');
  // Check if the ship is moving forward
  variable.ship.movingForward = variable.keys[87];

  if (variable.keys[68]) {
    // d key rotate right
    variable.ship.Rotate(1);
  }
  if (variable.keys[65]) {
    // a key rotate left
    variable.ship.Rotate(-1);
  }

  variable.context.clearRect(0, 0, variable.canvasWidth, variable.canvasHeight);

  // Display score
  variable.context.fillStyle = 'white';
  variable.context.font = '21px Arial';
  variable.context.fillText('SCORE : ' + variable.score.toString(), 20, 35);

  // If no lives signal game over
  if (variable.lives <= 0) {
    document.body.removeEventListener('keydown', HandleKeyDown);
    document.body.removeEventListener('keyup', HandleKeyUp);

    variable.ship.visible = false;
    variable.context.fillStyle = 'white';
    variable.context.font = '50px Arial';
    variable.context.fillText(
      'GAME OVER',
      variable.canvasWidth / 2 - 150,
      variable.canvasHeight / 2,
    );
  }

  // Creates a new level and increases asteroid speed
  if (variable.asteroids.length === 0) {
    variable.ship.x = variable.canvasWidth / 2;
    variable.ship.y = variable.canvasHeight / 2;
    variable.ship.velX = 0;
    variable.ship.velY = 0;
    for (let i = 0; i < 4; i++) {
      let asteroid = new Asteroid();
      asteroid.speed += 0.3;
      variable.asteroids.push(asteroid);
    }
  }

  DrawLifeShips();

  // Check for collision of ship with asteroid
  if (variable.asteroids.length !== 0) {
    for (let k = 0; k < variable.asteroids.length; k++) {
      if (
        CircleCollision(
          variable.ship.x,
          variable.ship.y,
          11,
          variable.asteroids[k].x,
          variable.asteroids[k].y,
          variable.asteroids[k].collisionRadius,
        )
      ) {
        variable.ship.x = variable.canvasWidth / 2;
        variable.ship.y = variable.canvasHeight / 2;
        variable.ship.velX = 0;
        variable.ship.velY = 0;
        variable.lives -= 1;
      }
    }
  }

  // Check for collision with bullet and asteroid
  if (variable.asteroids.length !== 0 && variable.bullets.length != 0) {
    loop1: for (let l = 0; l < variable.asteroids.length; l++) {
      for (let m = 0; m < variable.bullets.length; m++) {
        if (
          CircleCollision(
            variable.bullets[m].x,
            variable.bullets[m].y,
            3,
            variable.asteroids[l].x,
            variable.asteroids[l].y,
            variable.asteroids[l].collisionRadius,
          )
        ) {
          // Check if asteroid can be broken into smaller pieces
          if (variable.asteroids[l].level === 1) {
            variable.asteroids.push(
              new Asteroid(
                variable.asteroids[l].x - 5,
                variable.asteroids[l].y - 5,
                25,
                2,
                22,
              ),
            );
            variable.asteroids.push(
              new Asteroid(
                variable.asteroids[l].x + 5,
                variable.asteroids[l].y + 5,
                25,
                2,
                22,
              ),
            );
          } else if (variable.asteroids[l].level === 2) {
            variable.asteroids.push(
              new Asteroid(
                variable.asteroids[l].x - 5,
                variable.asteroids[l].y - 5,
                15,
                3,
                12,
              ),
            );
            variable.asteroids.push(
              new Asteroid(
                variable.asteroids[l].x + 5,
                variable.asteroids[l].y + 5,
                15,
                3,
                12,
              ),
            );
          }
          variable.asteroids.splice(l, 1);
          variable.bullets.splice(m, 1);
          variable.score += 20;

          // Used to break out of loops because splicing arrays
          // you are looping through will break otherwise
          break loop1;
        }
      }
    }
  }

  if (variable.ship.visible) {
    variable.ship.Update();
    variable.ship.Draw();
  }

  if (variable.bullets.length !== 0) {
    for (let i = 0; i < variable.bullets.length; i++) {
      variable.bullets[i].Update();
      variable.bullets[i].Draw();
    }
  }
  if (variable.asteroids.length !== 0) {
    for (let j = 0; j < variable.asteroids.length; j++) {
      variable.asteroids[j].Update();
      // Pass j so we can track which asteroid points
      // to store
      variable.asteroids[j].Draw(j);
    }
  }

  // Updates the high score using local storage
  variable.highScore = Math.max(variable.score, variable.highScore);
  localStorage.setItem(variable.localStorageName, variable.highScore);
  variable.context.font = '21px Arial';
  variable.context.fillText(
    'HIGH SCORE : ' + variable.highScore.toString(),
    20,
    70,
  );

  requestAnimationFrame(Render);
}
