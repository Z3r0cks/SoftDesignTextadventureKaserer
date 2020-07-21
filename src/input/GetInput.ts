namespace Textadventure {

  export function getInput(): Promise<string> {

    const inputEvent: Promise<string> = new Promise((resolve) => {
      const eventlistener: (_el: KeyboardEvent) => void = function (_keyElement: KeyboardEvent): void {

        if (_keyElement.key == "Enter") {
          const thisConsoleId: string = "consoleInput input";
          let theInputValue: string;
          const theInputElement: HTMLInputElement = (document.getElementById(thisConsoleId) as HTMLInputElement);
          theInputValue = theInputElement.value;
          document.body.removeEventListener("keypress", eventlistener);

          if (checkInput(theInputElement.value)) {
            theInputElement.value = "";
            resolve(theInputValue);
          } else {
            theInputElement.value = "";
            resolve("incorrectInput");
          }
        }
      };
      document.body.addEventListener("keypress", eventlistener);

    });
    return inputEvent;
  }
}
