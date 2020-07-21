/// <reference path="./Creature.ts" />

namespace Textadventure {
  export class Goblin extends Creature {
    hp: number = 7;
    strength: number = 1;
    type: string = "Goblin";
    weapon: string = "stock"
  }
}
