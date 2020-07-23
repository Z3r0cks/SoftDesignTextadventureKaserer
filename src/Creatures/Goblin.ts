/// <reference path="./Creature.ts" />

namespace Textadventure {
  export class Goblin extends Creature {
    hp: number = 7;
    type: string = "Goblin";
    weapon: Weapon = new Stick;
  }
}
