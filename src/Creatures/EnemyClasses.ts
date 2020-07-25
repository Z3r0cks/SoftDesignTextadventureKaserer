/// <reference path="./Creature.ts" />
/// <reference path="../Items/Armor.ts" />
/// <reference path="../Items/Weapon.ts" />

namespace Textadventure {
  export class Goblin extends Creature {
    public hp: number;
    public type: string;
    public weapon: Weapon;
    public armor: Armor;

    public constructor() {
      super();
      this.hp = 20;
      this.type = "Goblin";
      this.weapon = new Stick;
      this.armor = new Clothing;
    }
  }

  export class Skeleton extends Creature {
    public hp: number;
    public type: string;
    public weapon: Weapon;
    public armor: Armor;

    public constructor() {
      super();
      this.hp = 50;
      this.type = "Skelett";
      this.weapon = new RostySword;
      this.armor = new Clothing;
    }
  }

  export class Vampir extends Creature {
    public hp: number;
    public type: string;
    public weapon: Weapon;
    public armor: Armor;

    public constructor() {
      super();
      this.hp = 40;
      this.type = "Vampir";
      this.weapon = new NobleSword;
      this.armor = new LeatherClothing;
    }
  }
}
