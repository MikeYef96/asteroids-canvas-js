import { variable } from '../../index';

export class Ship {
  constructor() {
    this.visible = true;
    this.x = variable.canvasWidth / 2;
    this.y = variable.canvasHeight / 2;
    this.movingForward = false;
    this.speed = 0.1;
    this.velX = 0;
    this.velY = 0;
    this.rotateSpeed = 0.001;
    this.radius = 15;
    this.angle = 0;
    this.strokeColor = 'white';
    // Used to know where to fire the bullet from
    this.noseX = variable.canvasWidth / 2 + 15;
    this.noseY = variable.canvasHeight / 2;
  }
  Rotate(dir) {
    this.angle += this.rotateSpeed * dir;
  }
  Update() {
    // Get current direction ship facing
    let radians = (this.angle / Math.PI) * 180;

    if (this.movingForward) {
      this.velX += (Math.cos(radians) * this.speed) / 1.5;
      this.velY += (Math.sin(radians) * this.speed) / 1.5;
    }
    // If ship goes off board place it on the opposite
    // side
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
    // Slow ship speed when not holding key
    this.velX *= 0.99;
    this.velY *= 0.99;

    // Change value of x & y while accounting for
    // air friction
    this.x -= this.velX;
    this.y -= this.velY;
  }
  Draw() {
    variable.context.strokeStyle = this.strokeColor;
    variable.context.beginPath();
    // Angle between vertices of the ship
    let vertAngle = (Math.PI * 2) / 3;

    let radians = (this.angle / Math.PI) * 180;
    // Where to fire bullet from
    this.noseX = this.x - this.radius * Math.cos(radians);
    this.noseY = this.y - this.radius * Math.sin(radians);

    for (let i = 0; i < 3; i++) {
      variable.context.lineTo(
        this.x - this.radius * Math.cos(vertAngle * i + radians),
        this.y - this.radius * Math.sin(vertAngle * i + radians),
      );
    }
    variable.context.closePath();
    variable.context.stroke();
  }
}
