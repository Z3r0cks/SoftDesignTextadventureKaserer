/// <reference path="./Item.ts" />

namespace Textadventure {
  interface Weapons extends Item {
    name: string;
    strength: number;
  }

  export class Stick implements Weapons {
    public name: string = "Stock";
    public strength: number = 2;
  }

  export class RostySword implements Weapons {
    public name: string = "Rostiges Schwert";
    public strength: number = 3;
  }

  export class NobleSword implements Weapons {
    public name: string = "Edles Schwert";
    public strength: number = 4;
  }

  export class Sword implements Weapons {
    public name: string = "Schwert";
    public strength: number = 3;
  }

  export class Mace implements Weapons {
    public name: string = "Streitkolben";
    public strength: number = 4;
  }

  export class LongSword implements Weapons {
    public name: string = "Langschwert";
    public strength: number = 6;
  }

  export class BastardSword implements Weapons {
    public name: string = "Bastardschwert";
    public strength: number = 8;
  }

  export class HolySword implements Weapons {
    public name: string = "Heiliges Schwert";
    public strength: number = 9999;
  }
}
