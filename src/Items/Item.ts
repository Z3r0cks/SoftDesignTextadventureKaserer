namespace Textadventure {
  export abstract class Item {
    public name: string;
    public type: string;

    static getRoomItem(): Item | boolean {
      return currentRoom.roomItem;
    }
    static checkRoomItem(): string {
      return (currentRoom.roomItem as Item).type;
    }
  }
}
