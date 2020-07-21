namespace Textadventure {
  export abstract class Event {
    story: string;
    effect: number;

    static getRoomEvent(): Event | boolean {
      return currentRoom.roomEvent;
    }
  }
}
