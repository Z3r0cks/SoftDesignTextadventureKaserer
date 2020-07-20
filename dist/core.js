"use strict";
var Textadventure;
(function (Textadventure) {
    class Room {
        constructor(_roomEvents, _roomEnemys, _directions) {
            this.roomEnemys = _roomEnemys;
            this.roomEvents = _roomEvents;
            this.posDirection = _directions;
        }
    }
    Textadventure.Room = Room;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Room.ts" />
var Textadventure;
/// <reference path="./Room.ts" />
(function (Textadventure) {
    Textadventure.allRooms = [];
    // constructor(_roomEvents: number[], _roomEnemys: number[], _directions: string[])
    // A-Rooms
    const a1 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["a2", "", ""]);
    const a2 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["a3", "b2", ""]);
    const a3 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "b3", ""]);
    const a4 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", ""]); //TODO: OneWay
    const a5 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "a6", ""]);
    const a6 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", ""]); // TODO: Finish
    Textadventure.allRooms.push(a1, a2, a3, a4, a5, a6);
    //B-Rooms
    const b1 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", ""]); //TODO: OneWay
    const b2 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["b1", "", "c2"]);
    const b3 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["b2", "", ""]);
    const b4 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", "a4"]);
    const b5 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "b6", "a5"]);
    const b6 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["c6", "", ""]);
    Textadventure.allRooms.push(b1, b2, b3, b4, b5, b6);
    //C-Rooms
    const c1 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["d1", "", ""]);
    const c2 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["c3", "c1", "d2"]);
    const c3 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", ""]); //TODO: OneWay
    const c4 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "c5", "b4"]);
    const c5 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["b5", "", ""]);
    const c6 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", ""]); //TODO: OneWay
    Textadventure.allRooms.push(c1, c2, c3, c4, c5, c6);
    //D-Rooms
    const d1 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", "e1"]);
    const d2 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["d3", "", ""]);
    const d3 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "e3", ""]);
    const d4 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", "c4"]);
    const d5 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", "e5"]);
    const d6 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["d5", "", ""]);
    Textadventure.allRooms.push(d1, d2, d3, d4, d5, d6);
    //E-Rooms
    const e1 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", "f1"]);
    const e2 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", "e1"]);
    const e3 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "e2", ""]);
    const e4 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "d4", ""]);
    const e5 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", "e4"]);
    const e6 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", "d6"]);
    Textadventure.allRooms.push(e1, e2, e3, e4, e5, e6);
    //F-Rooms
    const f1 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["f2", "", ""]);
    const f2 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", "f3"]);
    const f3 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["g4", "", "f4"]);
    const f4 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", "f5"]);
    const f5 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", ""]); //TODO: OneWay
    const f6 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", "e6"]);
    Textadventure.allRooms.push(f1, f2, f3, f4, f5, f6);
    //G-Rooms
    const g1 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["h1", "", ""]);
    const g2 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", "g1"]);
    const g3 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["g4", "g2", "h3"]);
    const g4 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "h4", ""]);
    const g6 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", "f6"]);
    Textadventure.allRooms.push(g1, g2, g3, g4, g6);
    //H-Rooms
    const h1 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["h2", "", ""]);
    const h2 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", ""]); //TODO: OneWay
    const h3 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["h4", "", ""]);
    const h4 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", "h5"]);
    const h5 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["", "", "h6"]);
    const h6 = new Textadventure.Room([1, 2, 3], [1, 2, 3], ["g6", "", ""]);
    Textadventure.allRooms.push(h1, h2, h3, h4, h5, h6);
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    class ConsoleOutput {
        // public constructor(_currentDiv: string, _nextRoom: string) {
        //   this.currentDiv = _currentDiv;
        //   this.nextRoom = _nextRoom;
        // }
        static filterConsoleType(_inputElement) {
            const inputLowerElement = _inputElement.toLocaleLowerCase();
            if (document.body.querySelector(".warn-div")) {
                const warnDiv = document.querySelector(".warn-div");
                document.body.removeChild(warnDiv);
            }
            if (Textadventure.gameStage == "start") {
                ConsoleOutput.buildStartMenu(inputLowerElement);
            }
            else if (Textadventure.gameStage == "inGame") {
                ConsoleOutput.buildIngameMenu(inputLowerElement);
            }
            else if (Textadventure.gameStage == "loadGame" && inputLowerElement == "b") {
                ConsoleOutput.buildStartMenu("start");
            }
        }
        /////////////////////// StartMenu //////////////////////////////
        static buildStartMenu(_inputLowerElement) {
            const seperatorDiv = document.createElement("div");
            seperatorDiv.className = "seperator";
            const firstDiv = document.createElement("div");
            const inputField = document.createElement("input");
            inputField.id = "consoleInput input-" + Textadventure.consoleInputCount;
            const allElements = [];
            switch (_inputLowerElement) {
                case "start":
                    const startDiv = document.createElement("div");
                    const loadDiv = document.createElement("div");
                    firstDiv.innerHTML = Textadventure.SearchContent.search("title");
                    startDiv.innerHTML = Textadventure.SearchContent.search("start");
                    loadDiv.innerHTML = Textadventure.SearchContent.search("load");
                    allElements.push(seperatorDiv, firstDiv, startDiv, loadDiv, inputField);
                    Textadventure.gameStage = "start";
                    break;
                case "n":
                    const secondDiv = document.createElement("div");
                    firstDiv.innerHTML = Textadventure.SearchContent.search("intro1");
                    secondDiv.innerHTML = Textadventure.SearchContent.search("intro2");
                    Textadventure.gameStage = "inGame";
                    allElements.push(seperatorDiv, firstDiv, secondDiv, inputField);
                    break;
                case "l":
                    const uploadInput = document.createElement("input");
                    const backDiv = document.createElement("div");
                    uploadInput.type = "file";
                    uploadInput.id = "uploadInput";
                    firstDiv.innerHTML = Textadventure.SearchContent.search("loadMessage");
                    backDiv.innerHTML = Textadventure.SearchContent.search("back");
                    Textadventure.gameStage = "loadGame";
                    allElements.push(seperatorDiv, firstDiv, backDiv, uploadInput, inputField);
                    break;
                case "incorrectinput":
                    const warnDiv = document.createElement("div");
                    warnDiv.innerHTML = Textadventure.SearchContent.search("warn");
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
        static buildIngameMenu(_inputElement) {
            //code
        }
        /////////////////////// DeleteConsole //////////////////////////////
        static deleteConsole() {
            const inputFieldCheck = document.getElementById("consoleInput input-" + (Textadventure.consoleInputCount));
            if (Textadventure.consoleInputCount > 0 && inputFieldCheck != null) {
                const removeInput = document.getElementById("consoleInput input-" + (Textadventure.consoleInputCount - 1));
                document.body.removeChild(removeInput);
            }
            if (document.getElementById("uploadInput") != undefined && Textadventure.gameStage == "start") {
                console.log("test");
                const removeInput = document.getElementById("uploadInput");
                document.body.removeChild(removeInput);
            }
        }
    }
    Textadventure.ConsoleOutput = ConsoleOutput;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Rooms/CreateRooms.ts" />
/// <reference path="./CreateConsole/ConsoleOutput.ts" />
var Textadventure;
/// <reference path="./Rooms/CreateRooms.ts" />
/// <reference path="./CreateConsole/ConsoleOutput.ts" />
(function (Textadventure) {
    Textadventure.gameStage = "start";
    Textadventure.consoleInputCount = 0;
    (async function Main() {
        Textadventure.storyboard = await (await fetch("./story.json")).json();
        Textadventure.ConsoleOutput.filterConsoleType("start");
        while (Textadventure.gameStage != "end") {
            const inputString = await Textadventure.getInput();
            Textadventure.ConsoleOutput.filterConsoleType(inputString);
        }
    })();
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    class SearchContent {
        static search(_contentID) {
            let theContent;
            Textadventure.storyboard.forEach(element => {
                if (_contentID == element.id) {
                    theContent = element.content;
                }
            });
            return theContent;
        }
    }
    Textadventure.SearchContent = SearchContent;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    class Player {
    }
    Textadventure.Player = Player;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    function checkInput(_input) {
        let isCorrect;
        if (Textadventure.gameStage == "start") {
            if (_input == "n" || _input == "l" || _input == "b")
                isCorrect = true;
            else
                isCorrect = false;
        }
        if (Textadventure.gameStage == "loadGame") {
            if (_input == "b")
                isCorrect = true;
            else
                isCorrect = false;
        }
        return isCorrect;
    }
    Textadventure.checkInput = checkInput;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    function getInput() {
        const inputEvent = new Promise((resolve) => {
            const eventlistener = function (_keyElement) {
                if (_keyElement.key == "Enter") {
                    const thisConsoleId = "consoleInput input-" + Textadventure.consoleInputCount;
                    let theInputValue;
                    const theInputElement = document.getElementById(thisConsoleId);
                    theInputValue = theInputElement.value;
                    document.body.removeEventListener("keypress", eventlistener);
                    if (Textadventure.checkInput(theInputElement.value)) {
                        theInputElement.value = "";
                        Textadventure.consoleInputCount++;
                        resolve(theInputValue);
                    }
                    else {
                        theInputElement.value = "";
                        resolve("incorrectInput");
                    }
                }
            };
            document.body.addEventListener("keypress", eventlistener);
        });
        return inputEvent;
    }
    Textadventure.getInput = getInput;
})(Textadventure || (Textadventure = {}));
//# sourceMappingURL=core.js.map