namespace Textadventure {
  export abstract class ConsoleOutput {

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
      } else if (gameStage == "loadGame") {
        ConsoleOutput.loadGame(inputLowerElement);
      } else if (gameStage == "gameOver") {
        ConsoleOutput.buildEndMenu(inputLowerElement);
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
          gameStage = "loadGame";
          SaveLoad.loadGame();
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

        case ("us"):
          const itemString: string = (roomItem != false) ? "Auf dem Boden liegt: <span>" + (currentRoom.roomItem as Item).name + "</span>." : "";
          const eventString: string = (roomEvent != false) ? (currentRoom.roomEvent as Event).story : "";
          const enemyString: string = (roomEnemy != false) ? "einen <span class=\"enemy\">" + (currentRoom.roomEnemy as Creature).type + " </span> als" : "kein";
          let wayString: String = "<br> Du siehst folgende Wege: <br>";
          Event.executeEvent();

          if (Room.findWay("left"))
            wayString = wayString + "Links<br>";
          if (Room.findWay("right"))
            wayString = wayString + "Rechts <br> ";
          if (Room.findWay("forward"))
            wayString = wayString + "Geradeaus <br> ";
          if (!Room.findWay("forward") && !Room.findWay("left") && !Room.findWay("right"))
            wayString = wayString + "Keinen";

          firstDiv.innerHTML = "Du schaust dich im Raum um. Du siehst " + enemyString + " Gegner. <br>" + eventString + "<br>" + itemString + wayString;
          currentRoom.roomEvent = false;
          allElements.push(firstDiv, inputField);
          ConsoleOutput.deleteConsole(_inputLowerElement);
          break;

        case ("iv"):
          let inventarString: String = "";
          const currentWeapon: string = player.weapon.name;
          const currentArmor: string = player.armor.name;

          if (inventory.currentInventar.length > 0)
            for (let i: number = 0; i < inventory.currentInventar.length; i++) {
              inventarString = inventarString + "<br>" + inventory.currentInventar[i].name;
            } else inventarString = "Du hast nichts im Inventar";
          firstDiv.innerHTML = "In deinem Inventar befindet sich: <br> <span>" + inventarString + "</span> <br> <br> Du trägst: <span>" + currentWeapon + "</span> als Waffe und <span>" + currentArmor + "</span> als Rüstung";

          allElements.push(firstDiv, inputField);
          ConsoleOutput.deleteConsole(_inputLowerElement);
          break;
        case ("ein"):
          if (currentRoom.roomItem != false) {

            switch (Item.checkRoomItem()) {
              case "weapon":
                firstDiv.innerHTML = "Du lässt: <span>" + player.weapon.name + "</span> fallen und nimmst: <span>" + (currentRoom.roomItem as Weapon).name + " </span>in die Hand";
                player.changeWeapon((currentRoom.roomItem as Weapon));
                break;
              case "armor":
                firstDiv.innerHTML = "Du lässt: <span>" + player.armor.name + "</span> fallen und legst: <span>" + (currentRoom.roomItem as Armor).name + " </span>an";
                player.changeArmor((currentRoom.roomItem as Armor));
                break;

              default:
                firstDiv.innerHTML = "Du steckst <span>" + (currentRoom.roomItem as Item).name + "</span> in dein Inventar";
                inventory.currentInventar.push((currentRoom.roomItem as Item));
                currentRoom.removeItemFromRoom();
                break;
            }

          } else {
            firstDiv.innerHTML = "Hier gibt es nichts zum einstecken";
          }
          allElements.push(firstDiv, inputField);
          ConsoleOutput.deleteConsole(_inputLowerElement);
          break;

        case ("heiltrank"):
          if (HealPortion.useHealPortion())
            firstDiv.innerHTML = SearchContent.search("useHealPortion");

          else firstDiv.innerHTML = SearchContent.search("noUsableItem");
          allElements.push(firstDiv, inputField);
          ConsoleOutput.deleteConsole(_inputLowerElement);
          break;

        case ("brandbombe"):
          if (currentRoom.roomEnemy != false) {
            if (Incendiary.useIncendiary()) {
              firstDiv.innerHTML = SearchContent.search("useIncendiary");
              if (Creature.checkIfEnemyDead()) {
                const enemyDeadDiv: HTMLDivElement = document.createElement("div");
                enemyDeadDiv.innerHTML = SearchContent.search("enemyDead");
                Creature.removeEnemyFromRoom();
                allElements.push(enemyDeadDiv);
              }
            } else firstDiv.innerHTML = SearchContent.search("noUsableItem");
          } else firstDiv.innerHTML = SearchContent.search("noEnemy");

          allElements.push(firstDiv, inputField);
          ConsoleOutput.deleteConsole(_inputLowerElement);
          break;

        case ("gehe l"):
          Room.changeRoom("left");
          break;
        case ("gehe r"):
          Room.changeRoom("right");
          break;
        case ("gehe g"):
          Room.changeRoom("forward");
          break;

        case ("gehe zurück"):
          firstDiv.innerHTML = SearchContent.search("noReturn");
          allElements.push(firstDiv, inputField);
          ConsoleOutput.deleteConsole(_inputLowerElement);
          break;

        case ("trueway"):
          firstDiv.innerHTML = SearchContent.search("newRoom");
          allElements.push(seperatorDiv, firstDiv, inputField);
          ConsoleOutput.deleteConsole(_inputLowerElement);
          break;

        case ("gesundheit"):
          firstDiv.innerHTML = "Deine aktuelle Gesundheit liegt bei <span class=\"lifepoints\">" + player.hp + "</span> HP";
          allElements.push(firstDiv, inputField);
          ConsoleOutput.deleteConsole(_inputLowerElement);
          break;

        case ("enemyinroom"):
          firstDiv.innerHTML = SearchContent.search("enemyInRoom");
          allElements.push(firstDiv, inputField);
          ConsoleOutput.deleteConsole(_inputLowerElement);
          break;

        case ("a"):
          if (currentRoom.roomEnemy != false) {
            const enemyDiv: HTMLDivElement = document.createElement("div");
            Creature.attackEnemy();
            firstDiv.innerHTML = SearchContent.search("attackEnemy") + (currentRoom.roomEnemy as Creature).hp + "</span>";
            enemyDiv.innerHTML = SearchContent.search("enemyAttacksYou") + player.hp + "</span>";
            allElements.push(firstDiv, enemyDiv);
          } else {
            firstDiv.innerHTML = SearchContent.search("noEnemy");
            allElements.push(firstDiv);
          }

          if (Creature.checkIfEnemyDead()) {
            const enemyDeadDiv: HTMLDivElement = document.createElement("div");
            enemyDeadDiv.innerHTML = SearchContent.search("enemyDead");
            Creature.removeEnemyFromRoom();
            allElements.push(enemyDeadDiv);
          }

          allElements.push(inputField);
          ConsoleOutput.deleteConsole(_inputLowerElement);

          break;

        case ("enemydead"):
          firstDiv.innerHTML = SearchContent.search("enemyDead");
          Creature.removeEnemyFromRoom();
          allElements.push(firstDiv);
          break;

        case ("falseway"):
          firstDiv.innerHTML = SearchContent.search("noEntry");
          allElements.push(firstDiv, inputField);
          ConsoleOutput.deleteConsole(_inputLowerElement);
          break;

        case ("incorrectinput"):
          const warnDiv: HTMLDivElement = document.createElement("div");
          warnDiv.innerHTML = SearchContent.search("warn");
          warnDiv.className = "warn-div";
          ConsoleOutput.deleteConsole(_inputLowerElement);
          allElements.push(warnDiv);
          break;

        case ("speichern"):
          if (currentRoom.roomEnemy == false) {
            SaveLoad.saveGame();
          } else firstDiv.innerHTML = SearchContent.search("canNotSave");
          ConsoleOutput.deleteConsole(_inputLowerElement);
          allElements.push(firstDiv, inputField);
      }

      allElements.forEach(element => {
        document.body.appendChild(element);
      });
      document.getElementById("consoleInput input").focus();
    }

    /////////////////////// DeleteConsole //////////////////////////////
    static buildEndMenu(_inputLowerElement: string): void {
      const allElements: HTMLElement[] = [];
      const firstDiv: HTMLDivElement = document.createElement("div");
      const inputField: HTMLInputElement = document.createElement("input");
      inputField.id = "consoleInput input";
      switch (_inputLowerElement) {
        case "gameover":
          const endDiv: HTMLDivElement = document.createElement("div");
          endDiv.innerHTML = "Deine Gesundheit liegt bei <span class=\"lifepoints\">" + player.hp + "</span> </br> <br> Du wurdest von <span class=\"enemy\">" + (currentRoom.roomEnemy as Creature).type + " </span> besiegt.";
          document.body.innerHTML = "";
          firstDiv.innerHTML = "GAME OVER";

          allElements.push(firstDiv, endDiv, inputField);
          break;

        default:
          break;
      }
      allElements.forEach(element => {
        document.body.appendChild(element);
      });
      document.getElementById("consoleInput input").focus();
    }

    /////////////////////// DeleteConsole //////////////////////////////

    static loadGame(_inputLowerElement: string): void {
      const allElements: HTMLElement[] = [];
      const seperatorDiv: HTMLDivElement = document.createElement("div");
      const firstDiv: HTMLDivElement = document.createElement("div");
      const inputField: HTMLInputElement = document.createElement("input");
      seperatorDiv.className = "seperator";
      inputField.id = "consoleInput input";

      switch (_inputLowerElement) {
        case "createconsole":
          const uploadInput: HTMLInputElement = document.createElement("input");
          const backDiv: HTMLDivElement = document.createElement("div");
          const submitBtn: HTMLButtonElement = document.createElement("button");
          uploadInput.type = "file";
          uploadInput.id = "uploadBtn";
          uploadInput.placeholder = "test";
          submitBtn.id = "loadBtn";
          submitBtn.innerHTML = "Gamefile Hochladen";
          firstDiv.innerHTML = SearchContent.search("loadMessage");
          backDiv.innerHTML = SearchContent.search("back");
          ConsoleOutput.deleteConsole(_inputLowerElement);
          gameStage = "loadGame";
          allElements.push(seperatorDiv, firstDiv, backDiv, uploadInput, submitBtn, inputField);
          break;

        case "b":
          gameStage = "start";
          ConsoleOutput.deleteConsole(_inputLowerElement);
          ConsoleOutput.filterConsoleType("start");
          break;

        case "gameloaded":
          firstDiv.innerHTML = SearchContent.search("gameLoaded");
          allElements.push(seperatorDiv, firstDiv, inputField);
          ConsoleOutput.deleteConsole(_inputLowerElement);
          gameStage = "inGame";
      }
      allElements.forEach(element => {
        document.body.appendChild(element);
      });
      document.getElementById("consoleInput input").focus();
    }

    static deleteConsole(_input: string): void {
      const inputFieldCheck: HTMLElement = document.getElementById("consoleInput input");
      if (inputFieldCheck != null && checkInput(_input)) {
        document.body.removeChild(inputFieldCheck);
      }
      if (document.getElementById("uploadBtn") != undefined && (gameStage == "start" || gameStage == "loadGame")) {
        const removeInput: HTMLElement = document.getElementById("uploadBtn");
        const removeSubmitBtn: HTMLElement = document.getElementById("loadBtn");
        document.body.removeChild(removeInput);
        document.body.removeChild(removeSubmitBtn);
      }
    }
  }
}
