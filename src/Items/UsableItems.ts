/// <reference path="./Item.ts" />
/// <reference path="../Effect/HealEffect.ts" />

namespace Textadventure {
  export class HealPortion extends Item {
    public name: string = "Heiltrank";
    public type: string = "HealPortion";

    static useHealPortion(): boolean {
      for (let i: number = 0; i < inventory.currentInventar.length; i++) {

        if (inventory.currentInventar[i].name == "Heiltrank") {
          Inventar.removeItem(inventory.currentInventar[i]);
          player.hp = 100;
          return true;
        }
      }
      return false;
    }
  }

  export class Incendiary extends Item {
    public name: string = "Brandbombe";
    public type: string = "Incendiary";

    static useIncendiary(): boolean {
      for (let i: number = 0; i < inventory.currentInventar.length; i++) {

        if (inventory.currentInventar[i].name == "Brandbombe") {
          Inventar.removeItem(inventory.currentInventar[i]);
          (currentRoom.roomEnemy as Creature).hp -= 20;
          return true;
        }
      }
      return false;
    }
  }
}
