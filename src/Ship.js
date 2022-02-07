import shipImage from "./images/shipp.png";
import { Entity } from "./Entity";
import "./style.css";

export class Ship extends Entity {
  constructor({ removeLife, getOverlappingBullet, removeBullet }) {
    super({ tag: "img" });
    this.el.src = shipImage;
    document.body.appendChild(this.el);

    this.el.className = "ship";
    this.SPEED = 8;
    this.SHIP_IMAGE_WIDTH = 100;
    this.canFire = true;
    this.isAlive = true;

    this.removeLife = removeLife;
    this.getOverlappingBullet = getOverlappingBullet;
    this.removeBullet = removeBullet;

    this.setX(window.innerWidth / 2);
    this.setY(window.innerHeight - 150);
  }

  moveRight() {
    if (!this.isAlive) return;
    this.setX(this.x + this.SPEED);
  }

  moveLeft() {
    if (!this.isAlive) return;
    this.setX(this.x - this.SPEED);
  }

  fire({ createBullet }) {
    if (this.canFire && this.isAlive) {
      this.canFire = false;
      createBullet({
        x: this.x + this.SHIP_IMAGE_WIDTH / 2,
        y: this.y
      });
      setTimeout(() => {
        this.canFire = true;
      }, 500);
    }
  }

  kill() {
    this.isAlive = false;

    setTimeout(() => {
      this.isAlive = true;
      this.el.style.opacity = 1;
    }, 1000);

    this.el.style.opacity = 0;
  }

  update() {
    const bullet = this.getOverlappingBullet(this);
    if (bullet && bullet.isAlien && this.isAlive) {
      this.removeBullet(bullet);
      this.removeLife();
      this.kill();
    }
  }
}
