/// <reference path="./Item.ts" />

namespace Textadventure {
  export class HealPortion extends Item {
    name: string = "Heiltrank";
    type: string = "HealPotion";
    effect: Effect = new HealEffect;
  }
}
