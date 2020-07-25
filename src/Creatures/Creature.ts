namespace Textadventure {
  export abstract class Creature {
    abstract hp: number;
    abstract type: string;
    abstract weapon: Weapon;
    abstract armor: Armor;

    static getRoomEnemy(): Creature | boolean {
      if (currentRoom.roomEnemy != false)
        return currentRoom.roomEnemy;
      else return false;
    }

    static attackEnemy(): void {
      const playerDamage: number = player.weapon.strength - (currentRoom.roomEnemy as Creature).armor.defense;
      const enemyDamage: number = (currentRoom.roomEnemy as Creature).weapon.strength - player.armor.defense;

      (currentRoom.roomEnemy as Creature).hp = (currentRoom.roomEnemy as Creature).hp - playerDamage;
      player.hp = player.hp - enemyDamage;
    }

    static removeEnemyFromRoom(): void {
      currentRoom.roomEnemy = false;
    }

    static checkIfEnemyDead(): boolean {
      if ((currentRoom.roomEnemy as Creature).hp <= 0)
        return true;
      return false;
    }
  }
}
