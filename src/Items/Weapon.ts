/// <reference path="./Item.ts" />

namespace Textadventure {
  export abstract class Weapon extends Item {
    name: string;
    strength: number;
    type: string;
  }

  export class Stick extends Weapon {
    public name: string = "Stock";
    public strength: number = 2;
    public type: string = "Weapon";
  }

  export class RostySword extends Weapon {
    public name: string = "Rostiges Schwert";
    public strength: number = 3;
    public type: string = "Weapon";
  }

  export class NobleSword extends Weapon {
    public name: string = "Edles Schwert";
    public strength: number = 4;
    public type: string = "Weapon";
  }

  export class Sword extends Weapon {
    public name: string = "Schwert";
    public strength: number = 3;
    public type: string = "Weapon";
  }

  export class Mace extends Weapon {
    public name: string = "Streitkolben";
    public strength: number = 4;
    public type: string = "Weapon";
  }

  export class LongSword extends Weapon {
    public name: string = "Langschwert";
    public strength: number = 6;
    public type: string = "Weapon";
  }

  export class BastardSword extends Weapon {
    public name: string = "Bastardschwert";
    public strength: number = 8;
    public type: string = "Weapon";
  }

  export class HolySword extends Weapon {
    public name: string = "Heiliges Schwert";
    public strength: number = 9999;
    public type: string = "Weapon";
  }
}
