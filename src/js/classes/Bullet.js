import { variable } from '../../index';

export class Bullet {
  constructor(angle) {
    this.visible = true;
    this.x = variable.ship.noseX;
    this.y = variable.ship.noseY;
    this.angle = angle;
    this.height = 4;
    this.width = 4;
    this.speed = 5;
    this.velX = 0;
    this.velY = 0;
  }
  Update() {
    let radians = (this.angle / Math.PI) * 180;
    this.x -= Math.cos(radians) * this.speed;
    this.y -= Math.sin(radians) * this.speed;
  }
  Draw() {
    variable.context.fillStyle = 'white';
    variable.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
