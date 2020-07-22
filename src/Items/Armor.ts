/// <reference path="./Item.ts" />

namespace Textadventure {
  interface Armor extends Item {
    name: string;
    defense: number;
  }

  export class Clothing implements Armor {
    name: string = "Stoffkeidung";
    defense: number = 1;
  }

  export class LeatherClothing implements Armor {
    name: string = "Lederrüstung";
    defense: number = 3;
  }

  export class Woodarmor implements Armor {
    name: string = "Holzrüstung";
    defense: number = 6;
  }

  export class PlateArmor implements Armor {
    name: string = "Plattenpanzer";
    defense: number = 20;
  }

  export class HolyArmor implements Armor {
    name: string = "Heilige Rüstung";
    defense: number = 99999;
  }
}
