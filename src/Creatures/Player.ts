/// <reference path="./Creature.ts" />
namespace Textadventure {
  export class Player extends Creature {
    public hp: number;
    public type: string = "player";
    public weapon: Weapon;

    public constructor(_hp: number, _weapon: Weapon) {
      super();
      this.hp = _hp;
      this.weapon = _weapon;
    }

    public changeWeapon(_weapon: Weapon): void {
      currentRoom.roomItem = player.weapon;
      this.weapon = _weapon;
    }
  }
}
