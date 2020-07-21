"use strict";
var Textadventure;
(function (Textadventure) {
    class Room {
        constructor(_roomEvent, _roomEnemy, _roomItem, _directions) {
            this.roomEnemy = _roomEnemy;
            this.roomEvent = _roomEvent;
            this.roomItem = _roomItem;
            this.posDirection = _directions;
        }
        static findWay(_direction) {
            switch (_direction) {
                case ("left"):
                    return Textadventure.currentRoom.posDirection[0];
                case ("right"):
                    return Textadventure.currentRoom.posDirection[1];
                case ("forward"):
                    return Textadventure.currentRoom.posDirection[2];
                default:
                    return "";
            }
        }
    }
    Textadventure.Room = Room;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    class Event {
        static getRoomEvent() {
            return Textadventure.currentRoom.roomEvent;
        }
    }
    Textadventure.Event = Event;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Event.ts" />
var Textadventure;
/// <reference path="./Event.ts" />
(function (Textadventure) {
    class HealEvent extends Textadventure.Event {
        constructor() {
            super(...arguments);
            this.story = "Du findest einen Heilbrunnen im Raum und heilst dich vollständig.";
        }
    }
    Textadventure.HealEvent = HealEvent;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    class Creature {
        static getRoomEnemy() {
            if (Textadventure.currentRoom.roomEnemy != false)
                return Textadventure.currentRoom.roomEnemy;
            else
                return false;
        }
    }
    Textadventure.Creature = Creature;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Creature.ts" />
var Textadventure;
/// <reference path="./Creature.ts" />
(function (Textadventure) {
    class Goblin extends Textadventure.Creature {
        constructor() {
            super(...arguments);
            this.hp = 7;
            this.strength = 1;
            this.type = "Goblin";
            this.weapon = "stock";
        }
    }
    Textadventure.Goblin = Goblin;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Room.ts" />
/// <reference path="../Events/HealEvent.ts" />
/// <reference path="../Creatures/Goblin.ts" />
var Textadventure;
/// <reference path="./Room.ts" />
/// <reference path="../Events/HealEvent.ts" />
/// <reference path="../Creatures/Goblin.ts" />
(function (Textadventure) {
    Textadventure.allRooms = [];
    // (_roomEvent: Event | boolean, _roomEnemy: Creature, _roomItem: Item, _directions: string[left,right,forward])
    // A-Rooms
    Textadventure.a1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "a2"]);
    Textadventure.a2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "b2", "a3"]);
    Textadventure.a3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "b3", ""]);
    Textadventure.a4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", ""]); //TODO: OneWay
    Textadventure.a5 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "a6", ""]);
    Textadventure.a6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", ""]); // TODO: Finish
    Textadventure.allRooms.push(Textadventure.a1, Textadventure.a2, Textadventure.a3, Textadventure.a4, Textadventure.a5, Textadventure.a6);
    //B-Rooms
    Textadventure.b1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", ""]); //TODO: OneWay
    Textadventure.b2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["b1", "", "c2"]);
    Textadventure.b3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["b2", "", ""]);
    Textadventure.b4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "a4"]);
    Textadventure.b5 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "b6", "a5"]);
    Textadventure.b6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["c6", "", ""]);
    Textadventure.allRooms.push(Textadventure.b1, Textadventure.b2, Textadventure.b3, Textadventure.b4, Textadventure.b5, Textadventure.b6);
    //C-Rooms
    Textadventure.c1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["d1", "", ""]);
    Textadventure.c2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["c3", "c1", "d2"]);
    Textadventure.c3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", ""]); //TODO: OneWay
    Textadventure.c4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "c5", "b4"]);
    Textadventure.c5 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["b5", "", ""]);
    Textadventure.c6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", ""]); //TODO: OneWay
    Textadventure.allRooms.push(Textadventure.c1, Textadventure.c2, Textadventure.c3, Textadventure.c4, Textadventure.c5, Textadventure.c6);
    //D-Rooms
    Textadventure.d1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "e1"]);
    Textadventure.d2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["d3", "", ""]);
    Textadventure.d3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "e3", ""]);
    Textadventure.d4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "c4"]);
    Textadventure.d5 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "e5"]);
    Textadventure.d6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["d5", "", ""]);
    Textadventure.allRooms.push(Textadventure.d1, Textadventure.d2, Textadventure.d3, Textadventure.d4, Textadventure.d5, Textadventure.d6);
    //E-Rooms
    Textadventure.e1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "f1"]);
    Textadventure.e2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "e1"]);
    Textadventure.e3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "e2", ""]);
    Textadventure.e4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "d4", ""]);
    Textadventure.e5 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "e4"]);
    Textadventure.e6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "d6"]);
    Textadventure.allRooms.push(Textadventure.e1, Textadventure.e2, Textadventure.e3, Textadventure.e4, Textadventure.e5, Textadventure.e6);
    //F-Rooms
    Textadventure.f1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["f2", "", ""]);
    Textadventure.f2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "f3"]);
    Textadventure.f3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["g4", "", "f4"]);
    Textadventure.f4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "f5"]);
    Textadventure.f5 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", ""]); //TODO: OneWay
    Textadventure.f6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "e6"]);
    Textadventure.allRooms.push(Textadventure.f1, Textadventure.f2, Textadventure.f3, Textadventure.f4, Textadventure.f5, Textadventure.f6);
    //G-Rooms
    Textadventure.g1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["h1", "", ""]);
    Textadventure.g2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "g1"]);
    Textadventure.g3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["g4", "g2", "h3"]);
    Textadventure.g4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "h4", ""]);
    Textadventure.g6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "f6"]);
    Textadventure.allRooms.push(Textadventure.g1, Textadventure.g2, Textadventure.g3, Textadventure.g4, Textadventure.g6);
    //H-Rooms
    Textadventure.h1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["h2", "", ""]);
    Textadventure.h2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", ""]); //TODO: OneWay
    Textadventure.h3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["h4", "", ""]);
    Textadventure.h4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "h5"]);
    Textadventure.h5 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["", "", "h6"]);
    Textadventure.h6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false, ["g6", "", ""]);
    Textadventure.allRooms.push(Textadventure.h1, Textadventure.h2, Textadventure.h3, Textadventure.h4, Textadventure.h5, Textadventure.h6);
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
                ConsoleOutput.deleteConsole(inputLowerElement);
            }
        }
        /////////////////////// StartMenu //////////////////////////////
        static buildStartMenu(_inputLowerElement) {
            const seperatorDiv = document.createElement("div");
            seperatorDiv.className = "seperator";
            const firstDiv = document.createElement("div");
            const inputField = document.createElement("input");
            inputField.id = "consoleInput input";
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
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    Textadventure.gameStage = "inGame";
                    Textadventure.currentRoom = Textadventure.a1;
                    allElements.push(seperatorDiv, firstDiv, secondDiv, inputField);
                    break;
                case "l":
                    const uploadInput = document.createElement("input");
                    const backDiv = document.createElement("div");
                    uploadInput.type = "file";
                    uploadInput.id = "uploadInput";
                    firstDiv.innerHTML = Textadventure.SearchContent.search("loadMessage");
                    backDiv.innerHTML = Textadventure.SearchContent.search("back");
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    Textadventure.gameStage = "loadGame";
                    allElements.push(seperatorDiv, firstDiv, backDiv, uploadInput, inputField);
                    break;
                case "incorrectinput":
                    const warnDiv = document.createElement("div");
                    warnDiv.innerHTML = Textadventure.SearchContent.search("warn");
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
        static buildIngameMenu(_inputLowerElement) {
            const seperatorDiv = document.createElement("div");
            const firstDiv = document.createElement("div");
            const inputField = document.createElement("input");
            seperatorDiv.className = "seperator";
            inputField.id = "consoleInput input";
            const allElements = [];
            const goLeft = Textadventure.Room.findWay("left");
            const goRight = Textadventure.Room.findWay("right");
            const goForward = Textadventure.Room.findWay("forward");
            const roomEnemy = Textadventure.Creature.getRoomEnemy();
            const roomEvent = Textadventure.Event.getRoomEvent();
            const roomItem = Textadventure.Item.getRoomItem();
            switch (_inputLowerElement) {
                case ("hilfe"):
                    firstDiv.innerHTML = Textadventure.SearchContent.search("helpContent");
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("umschauen"):
                    const itemString = (roomItem != false) ? "eine " + Textadventure.currentRoom.roomItem.name : "Du findest nichts mehr weiter.";
                    const eventString = (roomEvent != false) ? Textadventure.currentRoom.roomEvent.story : "";
                    const enemyString = (roomEnemy != false) ? "einen " + Textadventure.currentRoom.roomEnemy.type + " als" : "kein";
                    firstDiv.innerHTML = "Du schaust dich im Raum um. Du siehst " + enemyString + " Gegner. <br>" + eventString + "<br>" + itemString;
                    allElements.push(seperatorDiv, firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("inventar"):
                    break;
                case ("einstecken"):
                    break;
                case ("benutzen"):
                    break;
                case ("gehen"):
                    break;
                case ("angreifen"):
                    break;
                case ("incorrectinput"):
                    const warnDiv = document.createElement("div");
                    warnDiv.innerHTML = Textadventure.SearchContent.search("warn");
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
        static deleteConsole(_input) {
            const inputFieldCheck = document.getElementById("consoleInput input");
            if (inputFieldCheck != null && Textadventure.checkInput(_input)) {
                document.body.removeChild(inputFieldCheck);
            }
            if (document.getElementById("uploadInput") != undefined && Textadventure.gameStage == "start") {
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
    (async function Main() {
        Textadventure.storyboard = await (await fetch("./contentElement.json")).json();
        Textadventure.ConsoleOutput.filterConsoleType("start");
        while (Textadventure.gameStage != "end") {
            const inputString = await Textadventure.getInput();
            Textadventure.ConsoleOutput.filterConsoleType(inputString);
            window.scrollTo(0, document.body.scrollHeight);
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
/// <reference path="./Creature.ts" />
var Textadventure;
/// <reference path="./Creature.ts" />
(function (Textadventure) {
    class Player extends Textadventure.Creature {
    }
    Textadventure.Player = Player;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    class DamageEffect {
    }
    Textadventure.DamageEffect = DamageEffect;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    class HealEffect {
    }
    Textadventure.HealEffect = HealEffect;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Event.ts" />
var Textadventure;
/// <reference path="./Event.ts" />
(function (Textadventure) {
    class DamageEvent extends Textadventure.Event {
        constructor() {
            super(...arguments);
            this.story = "Du läufst in eine Falle und verlierst etwas Gesundheit.";
        }
    }
    Textadventure.DamageEvent = DamageEvent;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    class Item {
        static getRoomItem() {
            return Textadventure.currentRoom.roomItem;
        }
    }
    Textadventure.Item = Item;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Item.ts" />
var Textadventure;
/// <reference path="./Item.ts" />
(function (Textadventure) {
    class Armor extends Textadventure.Item {
    }
    Textadventure.Armor = Armor;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Item.ts" />
var Textadventure;
/// <reference path="./Item.ts" />
(function (Textadventure) {
    class HealPortion extends Textadventure.Item {
        constructor() {
            super(...arguments);
            this.name = "Heiltrank";
            this.type = "HealPotion";
            this.effect = new Textadventure.HealEffect;
        }
    }
    Textadventure.HealPortion = HealPortion;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Item.ts" />
var Textadventure;
/// <reference path="./Item.ts" />
(function (Textadventure) {
    class Weapons extends Textadventure.Item {
    }
    Textadventure.Weapons = Weapons;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    function checkInput(_input) {
        let isCorrect = false;
        let allowInput = [];
        switch (Textadventure.gameStage) {
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
                for (let i = 0; i < allowInput.length; i++) {
                    if (_input == allowInput[i]) {
                        isCorrect = true;
                        break;
                    }
                }
                break;
        }
        console.log("isCorrect: " + isCorrect);
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
                    const thisConsoleId = "consoleInput input";
                    let theInputValue;
                    const theInputElement = document.getElementById(thisConsoleId);
                    theInputValue = theInputElement.value;
                    document.body.removeEventListener("keypress", eventlistener);
                    if (Textadventure.checkInput(theInputElement.value)) {
                        theInputElement.value = "";
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