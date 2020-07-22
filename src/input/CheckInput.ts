namespace Textadventure {
  export function checkInput(_input: string): boolean {
    let isCorrect: boolean = false;
    let allowInput: string[] = [];
    switch (gameStage) {

      case "start":
        if (_input == "n" || _input == "l" || _input == "b")
          isCorrect = true;
        break;

      case "loadGame":
        if (_input == "b")
          isCorrect = true;
        break;

      case "inGame":
        allowInput.push("hilfe", "umschauen", "inventar", "inventrar", "einstecken", "benutzen", "gehen");
        for (let i: number = 0; i < allowInput.length; i++) {
          if (_input == allowInput[i]) {
            isCorrect = true;
            break;
          }
        }
        break;
    }
    return isCorrect;
  }
}

