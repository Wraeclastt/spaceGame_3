import { Entity } from "./Entity";
import "./style.css";

export class Bullet extends Entity {
  constructor({ x, y, isAlien }) {
    super({ className: "bullet" });
    this.SPEED = 8;
    this.isAlien = isAlien;

    this.setX(x);
    this.setY(y);
  }

  update() {
    const dy = this.isAlien ? this.SPEED : -this.SPEED;
    this.setY(this.y + dy);
  }
}
