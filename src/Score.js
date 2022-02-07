import { Entity } from "./Entity";
import "./style.css";

export class Score extends Entity {
  constructor() {
    super();
    this.score = 0;
    this.setX(window.innerWidth / 2);
    this.setY(20);
    this.refreshText();
  }

  addToScore(amount) {
    this.score += amount;
    this.refreshText();
  }

  refreshText() {
    this.el.innerText = `Score: ${this.score}`;
  }
}
