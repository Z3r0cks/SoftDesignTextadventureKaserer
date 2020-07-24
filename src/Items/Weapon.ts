/// <reference path="./Item.ts" />

namespace Textadventure {
  export abstract class Weapon extends Item {
    public name: string;
    public strength: number;
    public type: string;
  }

  export class Stick extends Weapon {
    public name: string;
    public strength: number;
    public type: string;

    public constructor() {
      super();
      this.name = "stock";
      this.strength = 2;
      this.type = "weapon";
    }
  }

  export class RostySword extends Weapon {
    public name: string;
    public strength: number;
    public type: string;

    public constructor() {
      super();
      this.name = "Rostiges Schwert";
      this.strength = 3;
      this.type = "weapon";
    }
  }

  export class NobleSword extends Weapon {
    public name: string;
    public strength: number;
    public type: string;

    public constructor() {
      super();
      this.name = "Edles Schwert";
      this.strength = 4;
      this.type = "weapon";
    }
  }

  export class Sword extends Weapon {
    public name: string;
    public strength: number;
    public type: string;

    public constructor() {
      super();
      this.name = "Schwert";
      this.strength = 3;
      this.type = "weapon";
    }
  }

  export class Mace extends Weapon {
    public name: string;
    public strength: number;
    public type: string;

    public constructor() {
      super();
      this.name = "Streitkolben";
      this.strength = 4;
      this.type = "weapon";
    }
  }

  export class LongSword extends Weapon {
    public name: string;
    public strength: number;
    public type: string;

    public constructor() {
      super();
      this.name = "Langschwert";
      this.strength = 6;
      this.type = "weapon";
    }
  }

  export class BastardSword extends Weapon {
    public name: string;
    public strength: number;
    public type: string;

    public constructor() {
      super();
      this.name = "Bastardschwert";
      this.strength = 8;
      this.type = "weapon";
    }
  }

  export class HolySword extends Weapon {
    public name: string;
    public strength: number;
    public type: string;

    public constructor() {
      super();
      this.name = "Heiliges Schwert";
      this.strength = 9999;
      this.type = "weapon";
    }
  }
}
