/// <reference path="./Rooms/CreateRooms.ts" />
/// <reference path="./CreateConsole/ConsoleOutput.ts" />

namespace Textadventure {
  export let currentRoom: Room;
  export let gameStage: string = "start";
  export let storyboard: GetStory[];

  (async function Main(): Promise<void> {
    storyboard = await (await fetch("./contentElement.json")).json();
    ConsoleOutput.filterConsoleType("start");

    while (gameStage != "end") {
      const inputString: string = await getInput();
      ConsoleOutput.filterConsoleType(inputString);
      window.scrollTo(0, document.body.scrollHeight);
    }
  })();
}
