/// <reference path="./Creature.ts" />
namespace Textadventure {
  export class Player extends Creature {
    public hp: number;
    public type: string;
    public weapon: Weapon;
    public armor: Armor;

    public constructor(_hp: number, _weapon: Weapon, _armor: Armor) {
      super();
      this.type = "player";
      this.hp = _hp;
      this.weapon = _weapon;
      this.armor = _armor;
    }

    public changeWeapon(_weapon: Weapon): void {
      currentRoom.roomItem = player.weapon;
      this.weapon = _weapon;
    }

    public changeArmor(_armor: Armor): void {
      currentRoom.roomItem = player.armor;
      this.armor = _armor;
    }

    public ifGameOver(): void {
      if (player.hp <= 0) {
        gameStage = "gameOver";
        ConsoleOutput.filterConsoleType("gameover");
      }
    }
  }
}
