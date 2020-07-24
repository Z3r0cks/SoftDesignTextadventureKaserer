/// <reference path="./Item.ts" />

namespace Textadventure {
  export abstract class Armor extends Item {
    public name: string;
    public defense: number;
    public type: string;
  }

  export class Clothing extends Armor {
    public name: string;
    public defense: number;
    public type: string;

    public constructor() {
      super();
      this.name = "Stoffkeidung";
      this.defense = 1;
      this.type = "armor";
    }
  }

  export class LeatherClothing extends Armor {
    public name: string;
    public defense: number;
    public type: string;

    public constructor() {
      super();
      this.name = "Lederrüstung";
      this.defense = 3;
      this.type = "armor";
    }
  }

  export class Woodarmor extends Armor {
    public name: string;
    public defense: number;
    public type: string;


    public constructor() {
      super();
      this.name = "Holzrüstung";
      this.defense = 6;
      this.type = "armor";
    }
  }

  export class PlateArmor extends Armor {
    public name: string;
    public defense: number;
    public type: string;

    public constructor() {
      super();
      this.name = "Plattenpanzer";
      this.defense = 20;
      this.type = "armor";
    }
  }

  export class HolyArmor extends Armor {
    public name: string;
    public defense: number;
    public type: string;

    public constructor() {
      super();
      this.name = "Heilige";
      this.defense = 99999;
      this.type = "armor";
    }
  }
}
