import { variable } from '../../index';

export function DrawLifeShips() {
  let startX = 1150;
  let startY = 10;
  let points = [
    [9, 9],
    [-9, 9],
  ];
  variable.context.strokeStyle = 'white';
  // Cycle through all live ships remaining
  for (let i = 0; i < variable.lives; i++) {
    // Start drawing ship
    variable.context.beginPath();
    // Move to origin point
    variable.context.moveTo(startX, startY);
    // Cycle through all other points
    for (let j = 0; j < points.length; j++) {
      variable.context.lineTo(startX + points[j][0], startY + points[j][1]);
    }
    // Draw from last point to 1st origin point
    variable.context.closePath();
    // Stroke the ship shape white
    variable.context.stroke();
    // Move next shape 30 pixels to the left
    startX -= 30;
  }
}
