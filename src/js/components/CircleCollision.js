export function CircleCollision(p1x, p1y, r1, p2x, p2y, r2) {
  let radiusSum;
  let xDiff;
  let yDiff;

  radiusSum = r1 + r2;
  xDiff = p1x - p2x;
  yDiff = p1y - p2y;

  if (radiusSum > Math.sqrt(xDiff * xDiff + yDiff * yDiff)) {
    return true;
  } else {
    return false;
  }
}
