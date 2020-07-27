namespace Textadventure {
  export class SaveLoad {


    static saveGame(): void {
      const myJsonString: string = JSON.stringify(new GenerateSaveFile);
      const fileName: string = "GameSave";
      const myJsonBlob: Blob = new Blob([myJsonString]);
      let dataUri: string = URL.createObjectURL(myJsonBlob);
      let exportFileName: string = fileName + ".json";

      let linkElement: HTMLAnchorElement = document.createElement("a");
      linkElement.setAttribute("href", dataUri);
      linkElement.setAttribute("download", exportFileName);
      linkElement.click();
    }

    static roomNameToRoom(_roomName: string): void {
      for (let i: number = 0; i < allRooms.length; i++) {
        if (_roomName == allRooms[i].roomName) {
          currentRoom = allRooms[i];
        }
      }
    }

    static async loadGame(): Promise<void> {
      ConsoleOutput.filterConsoleType("createConsole");
      document.getElementById("loadBtn").addEventListener("click", async () => {
        const uploadElement: HTMLInputElement = document.getElementById("uploadBtn") as HTMLInputElement;
        if (uploadElement.files[0]) {
          const myFile: File = uploadElement.files[0];
          const myFileArray: GenerateSaveFile = JSON.parse(await myFile.text());

          SaveLoad.roomNameToRoom(myFileArray.currentRoomName);
          player.hp = myFileArray.currentHP;
          player.weapon = myFileArray.currentWeapon;
          player.armor = myFileArray.currentArmor;
          inventory = myFileArray.currentinventory;
          currentRoom.roomItem = myFileArray.currentItem;
          currentRoom.roomEvent = myFileArray.currentEvent;
          gameStage = "loadGame";
          ConsoleOutput.filterConsoleType("gameLoaded");
        }
      }
      );
    }
  }
}

