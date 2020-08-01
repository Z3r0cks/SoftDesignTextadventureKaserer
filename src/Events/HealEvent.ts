/// <reference path="./Event.ts" />

namespace Textadventure {
  export class HealEvent extends Event {
    story: string;
    type: string;

    public constructor() {
      super();
      this.story = "Du findest einen Heilbrunnen im Raum und heilst dich vollständig.";
      this.type = "HealEvent";
    }
  }
}
