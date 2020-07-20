namespace Textadventure {
  export function checkInput(_input: string): boolean {
    let isCorrect: boolean;
    if (gameStage == "start") {
      if (_input == "n" || _input == "l" || _input == "b")
        isCorrect = true;
      else isCorrect = false;
    }
    if (gameStage == "loadGame") {
      if (_input == "b")
        isCorrect = true;
      else isCorrect = false;
    }
    return isCorrect;
  }
}
