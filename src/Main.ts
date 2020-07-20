/// <reference path="./Rooms/CreateRooms.ts" />
/// <reference path="./CreateConsole/ConsoleOutput.ts" />

namespace Textadventure {
  export let gameStage: string = "start";
  export let storyboard: GetStory[];
  export let consoleInputCount: number = 0;

  (async function Main(): Promise<void> {
    storyboard = await (await fetch("./story.json")).json();
    ConsoleOutput.filterConsoleType("start");

    while (gameStage != "end") {
      const inputString: string = await getInput();
      ConsoleOutput.filterConsoleType(inputString);
    }
  })();
}
