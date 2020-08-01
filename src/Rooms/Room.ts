namespace Textadventure {
  export class Room {
    public roomName: string;
    public roomEvent: Event | boolean;
    public roomEnemy: Creature | boolean;
    public roomItem: Item | boolean;
    public posLeft: Room | boolean;
    public posRight: Room | boolean;
    public posForward: Room | boolean;

    public constructor(_roomName: string, _roomEvent: Event | boolean, _roomEnemy: Creature | boolean, _roomItem: Item | boolean) {
      this.roomName = _roomName;
      this.roomEnemy = _roomEnemy as Creature;
      this.roomEvent = _roomEvent as Event;
      this.roomItem = _roomItem as Item;
    }

    static findWay(_direction: string): Room | boolean {
      switch (_direction) {
        case ("left"):
          return currentRoom.posLeft;

        case ("right"):
          return currentRoom.posRight;

        case ("forward"):
          return currentRoom.posForward;

        default:
          return false;
      }
    }

    static changeRoom(_direction: string): void {
      if (currentRoom.roomEnemy == false) {
        const leftRoom: Room | boolean = currentRoom.posLeft;
        const rightRoom: Room | boolean = currentRoom.posRight;
        const forwardRoom: Room | boolean = currentRoom.posForward;

        if (_direction == "left") {
          if (leftRoom != false) {
            currentRoom = (leftRoom as Room);
            ConsoleOutput.filterConsoleType("trueWay");
          } else ConsoleOutput.filterConsoleType("falseWay");
        }

        else if (_direction == "right") {
          if (rightRoom != false) {
            currentRoom = (rightRoom as Room);
            ConsoleOutput.filterConsoleType("trueWay");
          } else ConsoleOutput.filterConsoleType("falseWay");
        }

        else if (_direction == "forward") {
          if (forwardRoom != false) {
            currentRoom = (forwardRoom as Room);
            ConsoleOutput.filterConsoleType("trueWay");
          } else ConsoleOutput.filterConsoleType("falseWay");
        }
      } else ConsoleOutput.filterConsoleType("enemyInRoom");
    }

    public removeItemFromRoom(): void {
      this.roomItem = false;
    }

    public addItemToRoom(_item: Item): void {
      this.roomItem = _item;
    }

    public addPosRooms(_posLeft: Room | boolean, _posRight: Room | boolean, _posFoward: Room | boolean): void {
      this.posLeft = _posLeft;
      this.posRight = _posRight;
      this.posForward = _posFoward;
    }
  }
}
