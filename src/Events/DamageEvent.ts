/// <reference path="./Event.ts" />

namespace Textadventure {
  export class DamageEvent extends Event {
    public story: string;
    public type: string;

    public constructor() {
      super();
      this.story = "Du läufst in eine Falle und verlierst etwas Gesundheit.";
      this.type = "DamageEvent";
    }
  }
}
