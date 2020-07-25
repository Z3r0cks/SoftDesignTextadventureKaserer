/// <reference path="./Creature.ts" />
/// <reference path="../Items/Armor.ts" />
/// <reference path="../Items/Weapon.ts" />

namespace Textadventure {
  export class Gilbad extends Creature {
    public hp: number;
    public type: string;
    public weapon: Weapon;
    public armor: Armor;

    public constructor() {
      super();
      this.hp = 65;
      this.type = "Gilbad der Goblin";
      this.weapon = new Sword;
      this.armor = new Clothing;
    }
  }

  export class Valentine extends Creature {
    public hp: number;
    public type: string;
    public weapon: Weapon;
    public armor: Armor;

    public constructor() {
      super();
      this.hp = 135;
      this.type = "Valentine der Vampir";
      this.weapon = new LongSword;
      this.armor = new Clothing;
    }
  }

  export class Skull extends Creature {
    public hp: number;
    public type: string;
    public weapon: Weapon;
    public armor: Armor;

    public constructor() {
      super();
      this.hp = 205;
      this.type = "Skull das Skelett";
      this.weapon = new Mace;
      this.armor = new Clothing;
    }
  }

  export class Gabriel extends Creature {
    public hp: number;
    public type: string;
    public weapon: Weapon;
    public armor: Armor;

    public constructor() {
      super();
      this.hp = 205;
      this.type = "Gabriel";
      this.weapon = new HolySword;
      this.armor = new HolyArmor;
    }
  }
}
