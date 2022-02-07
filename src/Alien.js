import alienImage from "./images/enemyship.png";
import { Entity } from "./Entity";
import "./style.css";

const LEFT = "left";
const RIGHT = "right";

const POINTS_PER_KILL = 20;

export class Alien extends Entity {
  constructor({
    x,
    y,
    getOverlappingBullet,
    removeAlien,
    removeBullet,
    addToScore
  }) {
    super({ tag: "img" });
    this.el.src = alienImage;
    this.SPEED = 2;
    this.el.className = "ship";
    this.direction = "left";

    this.getOverlappingBullet = getOverlappingBullet;
    this.removeAlien = removeAlien;
    this.removeBullet = removeBullet;
    this.addToScore = addToScore;

    this.setX(x);
    this.setY(y);
  }

  setDirectionRight() {
    this.direction = RIGHT;
  }

  setDirectionLeft() {
    this.direction = LEFT;
  }

  moveDown() {
    this.setY(this.y + this.SPEED + 30);
  }

  update() {
    if (this.direction === LEFT) {
      this.setX(this.x - this.SPEED);
    } else {
      this.setX(this.x + this.SPEED);
    }

    const bullet = this.getOverlappingBullet(this);
    if (bullet && !bullet.isAlien) {
      this.removeAlien(this);
      this.removeBullet(bullet);
      this.addToScore(POINTS_PER_KILL);
    }
  }
}
