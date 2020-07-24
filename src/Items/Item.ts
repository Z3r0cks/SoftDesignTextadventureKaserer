namespace Textadventure {
  export abstract class Item {
    public name: string;

    static getRoomItem(): Item | boolean {
      return currentRoom.roomItem;
    }
  }
}
