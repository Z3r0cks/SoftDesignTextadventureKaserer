/// <reference path="./Creature.ts" />
/// <reference path="../Items/Armor.ts" />
/// <reference path="../Items/Weapon.ts" />

namespace Textadventure {
  export class Goblin extends Creature {
    hp: number;
    type: string;
    weapon: Weapon;
    armor: Armor;

    public constructor() {
      super();
      this.hp = 7;
      this.type = "Goblin";
      this.weapon = new Stick;
      this.armor = new Clothing;
    }
  }

  export class Skeleton extends Creature {
    hp: number;
    type: string;
    weapon: Weapon;

    public constructor() {
      super();
      this.hp = 13;
      this.type = "Skelett";
      this.weapon = new RostySword;
    }
  }

  export class Vampir extends Creature {
    hp: number;
    type: string;
    weapon: Weapon;
    armor: Armor;

    public constructor() {
      super();
      this.hp = 25;
      this.type = "Vampir";
      this.weapon = new NobleSword;
      this.armor = new LeatherClothing;
    }
  }
}
