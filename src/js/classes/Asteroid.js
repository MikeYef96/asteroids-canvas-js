import { variable } from '../../index';

export class Asteroid {
  constructor(x, y, radius, level, collisionRadius) {
    this.visible = true;
    this.x = x || Math.floor(Math.random() * variable.canvasWidth);
    this.y = y || Math.floor(Math.random() * variable.canvasHeight);
    this.speed = 3;
    this.radius = radius || 50;
    this.angle = Math.floor(Math.random() * 359);
    this.strokeColor = 'white';
    this.collisionRadius = collisionRadius || 46;
    this.level = level || 1;
  }
  Update() {
    let radians = (this.angle / Math.PI) * 180;
    this.x += (Math.cos(radians) * this.speed) / 2;
    this.y += (Math.sin(radians) * this.speed) / 2;
    if (this.x < this.radius) {
      this.x = canvas.width;
    }
    if (this.x > canvas.width) {
      this.x = this.radius;
    }
    if (this.y < this.radius) {
      this.y = canvas.height;
    }
    if (this.y > canvas.height) {
      this.y = this.radius;
    }
  }
  Draw() {
    variable.context.beginPath();
    let vertAngle = (Math.PI * 2) / 6;
    var radians = (this.angle / Math.PI) * 180;
    for (let i = 0; i < 6; i++) {
      variable.context.lineTo(
        this.x - this.radius * Math.cos(vertAngle * i + radians),
        this.y - this.radius * Math.sin(vertAngle * i + radians),
      );
    }
    variable.context.closePath();
    variable.context.stroke();
  }
}
