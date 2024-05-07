import display from "./display";
import Snake from "./Snake";
import Food from "./Food";
import Actor from "./IActor";
import CollisionHandler from "./CollisionHandler";
import SnakeFoodCollisionHandler from "./SnakeFoodCollisionHandler";
import SnakeSnakeCollisionHandler from "./SnakeSnakeCollisionHandler";

class ActorCollisionHandlers {
  private pairs;
  constructor() {
    this.pairs = new Map();
  }
  private toKey(colliderType: string, collidedType: string) {
    return colliderType + "," + collidedType;
  }
  public addCollisionAction(
    colliderType: string,
    collidedType: string,
    actionApplicator: string,
  ) {
    let key = this.toKey(colliderType, collidedType);
    this.pairs.set(key, actionApplicator);
  }
  public hasCollisionAction(colliderType: string, collidedType: string) {
    return this.pairs.has(this.toKey(colliderType, collidedType));
  }
  public applyCollisionAction(collider: string, collided: string) {
    if (this.hasCollisionAction(collider, collided)) {
      this.pairs
        .get(this.toKey(collider, collided))
        .applyAction(collider, collided);
    }
  }
}

export default ActorCollisionHandlers;
