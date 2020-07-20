namespace Textadventure {
  export abstract class ConsoleOutput {
    currentDiv: string;
    nextRoom: string;

    // public constructor(_currentDiv: string, _nextRoom: string) {
    //   this.currentDiv = _currentDiv;
    //   this.nextRoom = _nextRoom;
    // }

    static filterConsoleType(_inputElement: string): void {
      const inputLowerElement: string = _inputElement.toLocaleLowerCase();
      if (document.body.querySelector(".warn-div")) {
        const warnDiv: HTMLDivElement = document.querySelector(".warn-div");
        document.body.removeChild(warnDiv);
      }

      if (gameStage == "start") {
        ConsoleOutput.buildStartMenu(inputLowerElement);
      } else if (gameStage == "inGame") {
        ConsoleOutput.buildIngameMenu(inputLowerElement);
      } else if (gameStage == "loadGame" && inputLowerElement == "b") {
        ConsoleOutput.buildStartMenu("start");
      }
    }


    /////////////////////// StartMenu //////////////////////////////

    static buildStartMenu(_inputLowerElement: string): void {
      const seperatorDiv: HTMLDivElement = document.createElement("div");
      seperatorDiv.className = "seperator";
      const firstDiv: HTMLDivElement = document.createElement("div");
      const inputField: HTMLInputElement = document.createElement("input");
      inputField.id = "consoleInput input-" + consoleInputCount;
      const allElements: HTMLElement[] = [];

      switch (_inputLowerElement) {

        case "start":
          const startDiv: HTMLDivElement = document.createElement("div");
          const loadDiv: HTMLDivElement = document.createElement("div");
          firstDiv.innerHTML = SearchContent.search("title");
          startDiv.innerHTML = SearchContent.search("start");
          loadDiv.innerHTML = SearchContent.search("load");
          allElements.push(seperatorDiv, firstDiv, startDiv, loadDiv, inputField);
          gameStage = "start";
          break;

        case "n":
          const secondDiv: HTMLDivElement = document.createElement("div");
          firstDiv.innerHTML = SearchContent.search("intro1");
          secondDiv.innerHTML = SearchContent.search("intro2");
          gameStage = "inGame";
          allElements.push(seperatorDiv, firstDiv, secondDiv, inputField);
          break;

        case "l":
          const uploadInput: HTMLInputElement = document.createElement("input");
          const backDiv: HTMLDivElement = document.createElement("div");
          uploadInput.type = "file";
          uploadInput.id = "uploadInput";
          firstDiv.innerHTML = SearchContent.search("loadMessage");
          backDiv.innerHTML = SearchContent.search("back");
          gameStage = "loadGame";
          allElements.push(seperatorDiv, firstDiv, backDiv, uploadInput, inputField);
          break;

        case "incorrectinput":
          const warnDiv: HTMLDivElement = document.createElement("div");
          warnDiv.innerHTML = SearchContent.search("warn");
          warnDiv.className = "warn-div";
          allElements.push(warnDiv);
          break;
      }
      allElements.forEach(element => {
        document.body.appendChild(element);
      });
      ConsoleOutput.deleteConsole();
    }


    /////////////////////// IngameMenu //////////////////////////////

    static buildIngameMenu(_inputElement: string): void {
      //code
    }


    /////////////////////// DeleteConsole //////////////////////////////

    static deleteConsole(): void {
      const inputFieldCheck: HTMLElement = document.getElementById("consoleInput input-" + (consoleInputCount));
      if (consoleInputCount > 0 && inputFieldCheck != null) {
        const removeInput: HTMLElement = document.getElementById("consoleInput input-" + (consoleInputCount - 1));
        document.body.removeChild(removeInput);
      }
      if (document.getElementById("uploadInput") != undefined && gameStage == "start") {
        console.log("test");
        const removeInput: HTMLElement = document.getElementById("uploadInput");
        document.body.removeChild(removeInput);
      }
    }
  }
}
