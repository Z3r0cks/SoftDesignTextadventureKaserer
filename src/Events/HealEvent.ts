/// <reference path="./Event.ts" />

namespace Textadventure {
  export class HealEvent extends Event {
    story: string = "Du findest einen Heilbrunnen im Raum und heilst dich vollständig.";
    effect: number;
    type: string = "HealEvent";
  }
}
