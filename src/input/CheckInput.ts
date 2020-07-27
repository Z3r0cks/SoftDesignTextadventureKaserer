namespace Textadventure {
  export function checkInput(_input: string): boolean {
    const lowerInput: string = _input.toLocaleLowerCase();
    let isCorrect: boolean = false;
    let allowInput: string[] = [];
    switch (gameStage) {

      case "start":
        if (lowerInput == "n" || lowerInput == "l" || lowerInput == "b")
          isCorrect = true;
        break;

      case "loadGame":
        if (lowerInput == "b" || lowerInput == "createconsole" || lowerInput == "gameloaded")
          isCorrect = true;
        break;

      case "inGame":
        allowInput.push("hilfe", "us", "iv", "ein", "heiltrank", "brandbombe", "gehe r", "gehe l", "gehe g", "falseway", "trueway", "a", "enemyinroom", "gehe zurück", "gesundheit", "speichern", "b");
        for (let i: number = 0; i < allowInput.length; i++) {
          if (lowerInput == allowInput[i]) {
            isCorrect = true;
            break;
          }
        }
        break;
    }
    return isCorrect;
  }
}

