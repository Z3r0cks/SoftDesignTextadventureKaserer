namespace Textadventure {
  export abstract class Event {
    public story: string;
    public type: string;

    static getRoomEvent(): Event | boolean {
      return currentRoom.roomEvent;
    }

    static executeEvent(): void {
      if (currentRoom.roomEvent) {
        switch ((currentRoom.roomEvent as Event).type) {
          case "HealEvent":
            player.hp = 100;
            break;

          default:
            player.hp = player.hp - 10;
            break;
        }
      }
    }
  }
}
