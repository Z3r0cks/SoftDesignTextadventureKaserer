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
        if (lowerInput == "b" || lowerInput == "createconsole")
          isCorrect = true;
        break;

      case "inGame":
        allowInput.push("hilfe", "umschauen", "inventar", "einstecken", "heiltrank", "brandbombe", "gehe rechts", "gehe links", "gehe geradeaus", "falseway", "trueway", "angreifen", "enemyinroom", "gehe zurück", "gesundheit", "speichern", "b");
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

