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
        ConsoleOutput.deleteConsole(inputLowerElement);
      }
    }


    /////////////////////// StartMenu //////////////////////////////

    static buildStartMenu(_inputLowerElement: string): void {
      const seperatorDiv: HTMLDivElement = document.createElement("div");
      seperatorDiv.className = "seperator";
      const firstDiv: HTMLDivElement = document.createElement("div");
      const inputField: HTMLInputElement = document.createElement("input");
      inputField.id = "consoleInput input";
      const allElements: HTMLElement[] = [];
      // inventar.addItem(new Weapon);

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
          ConsoleOutput.deleteConsole(_inputLowerElement);
          gameStage = "inGame";
          currentRoom = a1;
          allElements.push(seperatorDiv, firstDiv, secondDiv, inputField);
          break;

        case "l":
          const uploadInput: HTMLInputElement = document.createElement("input");
          const backDiv: HTMLDivElement = document.createElement("div");
          uploadInput.type = "file";
          uploadInput.id = "uploadInput";
          firstDiv.innerHTML = SearchContent.search("loadMessage");
          backDiv.innerHTML = SearchContent.search("back");
          ConsoleOutput.deleteConsole(_inputLowerElement);
          gameStage = "loadGame";
          allElements.push(seperatorDiv, firstDiv, backDiv, uploadInput, inputField);
          break;

        case "incorrectinput":
          const warnDiv: HTMLDivElement = document.createElement("div");
          warnDiv.innerHTML = SearchContent.search("warn");
          warnDiv.className = "warn-div";
          ConsoleOutput.deleteConsole(_inputLowerElement);
          allElements.push(warnDiv);
          break;
      }
      allElements.forEach(element => {
        document.body.appendChild(element);
      });
      document.getElementById("consoleInput input").focus();
    }


    /////////////////////// IngameMenu //////////////////////////////

    static buildIngameMenu(_inputLowerElement: string): void {
      const seperatorDiv: HTMLDivElement = document.createElement("div");
      const firstDiv: HTMLDivElement = document.createElement("div");
      const inputField: HTMLInputElement = document.createElement("input");
      seperatorDiv.className = "seperator";
      inputField.id = "consoleInput input";
      const allElements: HTMLElement[] = [];
      const roomEnemy: Creature | boolean = Creature.getRoomEnemy();
      const roomEvent: Event | boolean = Event.getRoomEvent();
      const roomItem: Item | boolean = Item.getRoomItem();

      switch (_inputLowerElement) {
        case ("hilfe"):
          firstDiv.innerHTML = SearchContent.search("helpContent");
          allElements.push(firstDiv, inputField);
          ConsoleOutput.deleteConsole(_inputLowerElement);
          break;

        case ("umschauen"):
          const itemString: string = (roomItem != false) ? "eine " + (currentRoom.roomItem as Item).name : "";
          const eventString: string = (roomEvent != false) ? (currentRoom.roomEvent as Event).story : "";
          const enemyString: string = (roomEnemy != false) ? "einen " + (currentRoom.roomEnemy as Creature).type + " als" : "kein";
          let wayString: String = "<br> Du siehst folgende Wege: <br>";

          if (Room.findWay("left"))
            wayString = wayString + "Links<br>";
          if (Room.findWay("right"))
            wayString = wayString + "Rechts <br> ";
          if (Room.findWay("forward"))
            wayString = wayString + "Geradeaus <br> ";
          if (!Room.findWay("forward") && !Room.findWay("left") && Room.findWay("right"))
            wayString = wayString + "Keinen";

          firstDiv.innerHTML = "Du schaust dich im Raum um. Du siehst " + enemyString + " Gegner. <br>" + eventString + "<br>" + itemString + wayString;
          allElements.push(firstDiv, inputField);
          ConsoleOutput.deleteConsole(_inputLowerElement);
          break;

        case ("inventar"):
          inventar.addItem(new Sword);
          inventar.addItem(new Mace);
          let inventarString: String = "";

          if (inventar.currentInventar.length > 0)
            for (let i: number = 0; i < inventar.currentInventar.length; i++) {
              inventarString = inventarString + "<br>" + inventar.currentInventar[i].name;
            } else inventarString = "Du hast nichts im Inventar";
          firstDiv.innerHTML = "In deinem Inventar befindet sich: <br> <br>" + inventarString;

          allElements.push(firstDiv, inputField);
          ConsoleOutput.deleteConsole(_inputLowerElement);
          break;

        case ("einstecken"):

          break;

        case ("benutzen"):

          break;

        case ("gehe linkgs"):
          Room.changeRoom("left");
          break;
        case ("gehe rechts"):
          Room.changeRoom("right");
          break;
        case ("gehe geradeaus"):
          Room.changeRoom("forward");
          break;

        case ("angreifen"):

          break;

        case ("incorrectinput"):
          const warnDiv: HTMLDivElement = document.createElement("div");
          warnDiv.innerHTML = SearchContent.search("warn");
          warnDiv.className = "warn-div";
          ConsoleOutput.deleteConsole(_inputLowerElement);
          allElements.push(warnDiv);
          break;
      }

      allElements.forEach(element => {
        document.body.appendChild(element);
      });
      document.getElementById("consoleInput input").focus();
    }


    /////////////////////// DeleteConsole //////////////////////////////

    static deleteConsole(_input: string): void {
      const inputFieldCheck: HTMLElement = document.getElementById("consoleInput input");
      if (inputFieldCheck != null && checkInput(_input)) {
        document.body.removeChild(inputFieldCheck);
      }
      if (document.getElementById("uploadInput") != undefined && gameStage == "start") {
        const removeInput: HTMLElement = document.getElementById("uploadInput");
        document.body.removeChild(removeInput);

      }
    }
  }
}
