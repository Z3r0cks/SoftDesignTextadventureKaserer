namespace Textadventure {
  export abstract class Item {
    name: string;

    static getRoomItem(): Item | boolean {
      return currentRoom.roomItem;
    }
  }
}
