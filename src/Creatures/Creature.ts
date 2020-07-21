namespace Textadventure {
  export abstract class Creature {
    abstract hp: number;
    abstract strength: number;
    abstract type: string;


    static getRoomEnemy(): Creature | boolean {
      if (currentRoom.roomEnemy != false)
        return currentRoom.roomEnemy;
      else return false;
    }
  }
}
