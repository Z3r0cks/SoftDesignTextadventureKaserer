/// <reference path="../Items/Weapon.ts" />
/// <reference path="../Items/Armor.ts" />

namespace Textadventure {
  export class Gilbad extends Creature {
    hp: number;
    name: string;
    type: string;
    weapon: Weapon;
    armor: Armor;

    public constructor() {
      super();
      this.hp = 65;
      this.name = "Gilbad der Goblin";
      this.type = "Boss";
      this.weapon = new Sword;
      this.armor = new Clothing;
    }
  }

  export class Valentine extends Creature {
    hp: number;
    name: string;
    type: string;
    weapon: Weapon;
    armor: Armor;

    public constructor() {
      super();
      this.hp = 135;
      this.name = "Valentine der Vampir";
      this.type = "Boss";
      this.weapon = new LongSword;
      this.armor = new Clothing;
    }
  }

  export class Skull extends Creature {
    hp: number;
    name: string;
    type: string;
    weapon: Weapon;

    public constructor() {
      super();
      this.hp = 205;
      this.name = "Skull das Skelett";
      this.type = "Boss";
      this.weapon = new Mace;
    }
  }

  export class Gabriel extends Creature {
    hp: number;
    name: string;
    type: string;
    weapon: Weapon;
    armor: Armor;

    public constructor() {
      super();
      this.hp = 205;
      this.name = "Gabriel";
      this.type = "EndBoss";
      this.weapon = new HolySword;
      this.armor = new HolyArmor;
    }
  }
}
