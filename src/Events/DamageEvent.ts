/// <reference path="./Event.ts" />

namespace Textadventure {
  export class DamageEvent extends Event {
    story: string = "Du läufst in eine Falle und verlierst etwas Gesundheit.";
    effect: number;
    type: string = "DamageEvent";
  }
}
