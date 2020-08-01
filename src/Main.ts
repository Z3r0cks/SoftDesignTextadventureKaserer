/// <reference path="./Rooms/CreateRooms.ts" />
/// <reference path="./Creatures/Player.ts" />
/// <reference path="./CreateConsole/ConsoleOutput.ts" />
/// <reference path="./Inventar.ts" />
/// <reference path="./Items/UsableItems.ts" />
/// <reference path="./Items/Armor.ts" />
/// <reference path="./Items/Weapon.ts" />

namespace Textadventure {
  export let gameStage: string = "start";
  export let currentRoom: Room;
  export let storyboard: GetStory[];
  export let player: Player = new Player(100, new Stick, new Clothing);
  export let inventory: Inventar = new Inventar([new HealPortion]);

  (async function main(): Promise<void> {
    storyboard = await (await fetch("./contentElement.json")).json();
    ConsoleOutput.filterConsoleType("start");

    while (gameStage != "end") {
      const inputString: string = await getInput();
      ConsoleOutput.filterConsoleType(inputString);
      player.ifGameOver();
      window.scrollTo(0, document.body.scrollHeight);
    }
  })();
}
