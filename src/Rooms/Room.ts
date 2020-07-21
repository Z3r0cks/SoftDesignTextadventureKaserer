namespace Textadventure {
  export class Room {
    public roomEvent: Event | boolean;
    public roomEnemy: Creature | boolean;
    public roomItem: Item | boolean;
    public posDirection: string[];

    public constructor(_roomEvent: Event | boolean, _roomEnemy: Creature | boolean, _roomItem: Item | boolean, _directions: string[]) {
      this.roomEnemy = _roomEnemy;
      this.roomEvent = _roomEvent;
      this.roomItem = _roomItem;
      this.posDirection = _directions;
    }

    static findWay(_direction: string): string {
      switch (_direction) {
        case ("left"):
          return currentRoom.posDirection[0];

        case ("right"):
          return currentRoom.posDirection[1];

        case ("forward"):
          return currentRoom.posDirection[2];

        default:
          return "";
      }
    }
  }
}
