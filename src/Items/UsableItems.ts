/// <reference path="./Item.ts" />

namespace Textadventure {
  export class HealPortion extends Item {
    public name: string;
    public type: string;

    public constructor() {
      super();
      this.name = "Heiltrank";
      this.type = "HealPortion";
    }

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
    public name: string;
    public type: string;

    public constructor() {
      super();
      this.name = "Brandbombe";
      this.type = "Incendiary";
    }

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
