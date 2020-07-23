namespace Textadventure {
  export abstract class Creature {
    abstract hp: number;
    abstract type: string;
    abstract weapon: Weapon;

    static getRoomEnemy(): Creature | boolean {
      if (currentRoom.roomEnemy != false)
        return currentRoom.roomEnemy;
      else return false;
    }
    static attackEnemy(): boolean {
      if (currentRoom.roomEnemy != false) {
        (currentRoom.roomEnemy as Creature).hp = ((currentRoom.roomEnemy as Creature).hp - player.weapon.strength);
        player.hp = (player.hp - (currentRoom.roomEnemy as Creature).weapon.strength);
        if (player.hp <= 0) {
          ConsoleOutput.filterConsoleType("dead");
        }
        return true;
      }
      else return false;
    }
    static removeEnemyFromRoom(): void {
      currentRoom.roomEnemy = false;
    }
  }
}
