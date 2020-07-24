/// <reference path="./Item.ts" />
/// <reference path="../Effect/HealEffect.ts" />

namespace Textadventure {
  export class HealPortion extends Item {
    public name: string = "Heiltrank";
    public type: string = "HealPortion";
    public effect: Effect = new HealEffect;

    static useHealPortion(): boolean {
      for (let i: number = 0; i < inventar.currentInventar.length; i++) {

        if (inventar.currentInventar[i].name == "Heiltrank") {
          Inventar.removeItem(inventar.currentInventar[i]);
          player.hp = 100;
          return true;
        }
      }
      return false;
    }
  }
}
