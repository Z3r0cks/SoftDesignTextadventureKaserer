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

    static async loadGame(): Promise<void> {
      ConsoleOutput.filterConsoleType("createConsole");
      document.getElementById("loadBtn").addEventListener("click", async () => {
        const uploadElement: HTMLInputElement = document.getElementById("uploadInput") as HTMLInputElement;
        const myFile: File = uploadElement.files[0];
        const myFileArray: GenerateSaveFile = JSON.parse(await myFile.text());

        player.hp = myFileArray.currentHP;
        player.armor = myFileArray.currentArmor;
        inventory = myFileArray.currentinventory;
        console.log("HP: " + player.hp);
        console.log("Weapon: " + player.weapon.name);
        console.log("Armor: " + player.armor.name);
      }
      );
    }
  }
}

