/// <reference path="./Creature.ts" />
namespace Textadventure {
  export class Player extends Creature {
    hp: number;
    strength: number;
    type: string;
    weapon: string;
  }
}
