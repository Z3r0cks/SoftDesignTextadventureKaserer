"use strict";
var Textadventure;
(function (Textadventure) {
    class Inventar {
        constructor(_currentInventar) {
            this.currentInventar = _currentInventar;
        }
        addItem(_newItem) {
            Textadventure.inventar.currentInventar.push(_newItem);
        }
    }
    Textadventure.Inventar = Inventar;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    class Room {
        constructor(_roomEvent, _roomEnemy, _roomItem) {
            this.roomEnemy = _roomEnemy;
            this.roomEvent = _roomEvent;
            this.roomItem = _roomItem;
        }
        static findWay(_direction) {
            switch (_direction) {
                case ("left"):
                    return Textadventure.currentRoom.posLeft;
                case ("right"):
                    return Textadventure.currentRoom.posRight;
                case ("forward"):
                    return Textadventure.currentRoom.posForward;
                default:
                    return false;
            }
        }
        static changeRoom(_direction) {
            const leftRoom = Textadventure.currentRoom.posLeft;
            const rightRoom = Textadventure.currentRoom.posRight;
            const forwardRoom = Textadventure.currentRoom.posForward;
            if (_direction == "left") {
                if (leftRoom != false) {
                    Textadventure.currentRoom = leftRoom;
                }
            }
            else if (_direction == "right") {
                if (rightRoom != false) {
                    Textadventure.currentRoom = rightRoom;
                }
            }
            else if (_direction == "forward") {
                if (forwardRoom != false) {
                    Textadventure.currentRoom = Textadventure.currentRoom;
                }
            }
        }
        addPosRooms(_posLeft, _posRight, _posFoward) {
            this.posLeft = _posLeft;
            this.posRight = _posRight;
            this.posForward = _posFoward;
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
    // export let allRooms: Room[] = [];
    // create rooms
    // constructor(_roomEvent: Event | boolean, _roomEnemy: Creature | boolean, _roomItem: Item | boolean)
    // A-Rooms
    Textadventure.a1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.a2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.a3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.a4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false); //TODO: OneWay
    Textadventure.a5 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.a6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false); // TODO: Finish
    //B-Rooms
    Textadventure.b1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false); //TODO: OneWay
    Textadventure.b2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.b3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.b4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.b5 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.b6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    //C-Rooms
    Textadventure.c1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.c2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.c3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false); //TODO: OneWay
    Textadventure.c4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.c5 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.c6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false); //TODO: OneWay
    //D-Rooms
    Textadventure.d1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.d2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.d3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.d4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.d5 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.d6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    //E-Rooms
    Textadventure.e1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.e2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.e3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.e4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.e5 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.e6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    //F-Rooms
    Textadventure.f1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.f2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.f3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.f4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.f5 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false); //TODO: OneWay
    Textadventure.f6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    //G-Rooms
    Textadventure.g1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.g2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.g3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.g4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.g6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    //H-Rooms
    Textadventure.h1 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.h2 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false); //TODO: OneWay
    Textadventure.h3 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.h4 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.h5 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.h6 = new Textadventure.Room(new Textadventure.HealEvent, new Textadventure.Goblin, false);
    // set posibleDirections
    // addPosRooms(_room: Room, _posLeft: Room | boolean, _posRight: Room | boolean, _posFoward: Room | boolean)
    // A-Rooms
    Textadventure.a1.addPosRooms(false, false, Textadventure.a2);
    Textadventure.a2.addPosRooms(false, Textadventure.b2, Textadventure.a3);
    Textadventure.a3.addPosRooms(false, Textadventure.b3, false);
    Textadventure.a4.addPosRooms(false, false, false); //TODO: OneWay
    Textadventure.a4.addPosRooms(false, Textadventure.a6, false);
    Textadventure.a6.addPosRooms(false, false, false); // TODO: Finish
    // B-Rooms
    Textadventure.b1.addPosRooms(false, false, false); //TODO: OneWay
    Textadventure.b2.addPosRooms(Textadventure.b1, false, Textadventure.c2);
    Textadventure.b3.addPosRooms(Textadventure.b2, false, false);
    Textadventure.b4.addPosRooms(false, false, Textadventure.a4);
    Textadventure.b5.addPosRooms(false, Textadventure.b6, Textadventure.a5);
    Textadventure.b6.addPosRooms(Textadventure.c6, false, false);
    //C-Rooms
    Textadventure.c1.addPosRooms(Textadventure.d1, false, false);
    Textadventure.c2.addPosRooms(Textadventure.c3, Textadventure.c1, Textadventure.c2);
    Textadventure.c3.addPosRooms(false, false, false); //TODO: OneWay
    Textadventure.c4.addPosRooms(false, Textadventure.c5, Textadventure.a4);
    Textadventure.c5.addPosRooms(Textadventure.b5, false, false);
    Textadventure.c6.addPosRooms(false, false, false); //TODO: OneWay
    //D-Rooms
    Textadventure.d1.addPosRooms(false, false, Textadventure.e1);
    Textadventure.d2.addPosRooms(Textadventure.d3, false, false);
    Textadventure.d3.addPosRooms(false, Textadventure.e3, false);
    Textadventure.d4.addPosRooms(false, false, Textadventure.c4);
    Textadventure.d5.addPosRooms(false, false, Textadventure.e5);
    Textadventure.d6.addPosRooms(Textadventure.d5, false, false);
    //E-Rooms
    Textadventure.e1.addPosRooms(false, false, Textadventure.f1);
    Textadventure.e2.addPosRooms(false, false, Textadventure.e1);
    Textadventure.e3.addPosRooms(false, Textadventure.e2, false);
    Textadventure.e4.addPosRooms(false, Textadventure.d4, false);
    Textadventure.e5.addPosRooms(false, false, Textadventure.e4);
    Textadventure.e6.addPosRooms(false, false, Textadventure.d6);
    //F-Rooms
    Textadventure.f1.addPosRooms(Textadventure.f2, false, false);
    Textadventure.f2.addPosRooms(false, false, Textadventure.f3);
    Textadventure.f3.addPosRooms(Textadventure.g4, false, Textadventure.f4);
    Textadventure.f4.addPosRooms(false, false, Textadventure.f5);
    Textadventure.f5.addPosRooms(false, false, false); //TODO: OneWay
    Textadventure.f6.addPosRooms(false, false, Textadventure.e6);
    //F-Rooms
    Textadventure.g1.addPosRooms(Textadventure.h1, false, false);
    Textadventure.g2.addPosRooms(false, false, Textadventure.g1);
    Textadventure.g3.addPosRooms(Textadventure.g4, Textadventure.g2, Textadventure.h3);
    Textadventure.g4.addPosRooms(false, Textadventure.h4, false);
    Textadventure.g6.addPosRooms(false, false, Textadventure.f6);
    //F-Rooms
    Textadventure.h1.addPosRooms(Textadventure.h2, false, false);
    Textadventure.h2.addPosRooms(false, false, false); //TODO: OneWay
    Textadventure.h3.addPosRooms(Textadventure.h4, false, false);
    Textadventure.h4.addPosRooms(false, false, Textadventure.h5);
    Textadventure.h5.addPosRooms(false, false, Textadventure.h6);
    Textadventure.h6.addPosRooms(Textadventure.g6, false, false);
    // allRooms.push(a1, a2, a3, a4, a5, a6, b1, b2, b3, b4, b5, b6, c1, c2, c3, c4, c5, c6, d1, d2, d3, d4, d5, d6, e1, e2, e3, e4, e5, e6, f1, f2, f3, f4, f5, f6, g1, g2, g3, g4, g6, h1, h2, h3, h4, h5, h6);
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
            // inventar.addItem(new Weapon);
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
                    const itemString = (roomItem != false) ? "eine " + Textadventure.currentRoom.roomItem.name : "";
                    const eventString = (roomEvent != false) ? Textadventure.currentRoom.roomEvent.story : "";
                    const enemyString = (roomEnemy != false) ? "einen " + Textadventure.currentRoom.roomEnemy.type + " als" : "kein";
                    let wayString = "<br> Du siehst folgende Wege: <br>";
                    if (Textadventure.Room.findWay("left"))
                        wayString = wayString + "Links<br>";
                    if (Textadventure.Room.findWay("right"))
                        wayString = wayString + "Rechts <br> ";
                    if (Textadventure.Room.findWay("forward"))
                        wayString = wayString + "Geradeaus <br> ";
                    if (!Textadventure.Room.findWay("forward") && !Textadventure.Room.findWay("left") && Textadventure.Room.findWay("right"))
                        wayString = wayString + "Keinen";
                    firstDiv.innerHTML = "Du schaust dich im Raum um. Du siehst " + enemyString + " Gegner. <br>" + eventString + "<br>" + itemString + wayString;
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("inventar"):
                    Textadventure.inventar.addItem(new Textadventure.Sword);
                    Textadventure.inventar.addItem(new Textadventure.Mace);
                    let inventarString = "";
                    if (Textadventure.inventar.currentInventar.length > 0)
                        for (let i = 0; i < Textadventure.inventar.currentInventar.length; i++) {
                            inventarString = inventarString + "<br>" + Textadventure.inventar.currentInventar[i].name;
                        }
                    else
                        inventarString = "Du hast nichts im Inventar";
                    firstDiv.innerHTML = "In deinem Inventar befindet sich: <br> <br>" + inventarString;
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("einstecken"):
                    break;
                case ("benutzen"):
                    break;
                case ("gehe linkgs"):
                    Textadventure.Room.changeRoom("left");
                    break;
                case ("gehe rechts"):
                    Textadventure.Room.changeRoom("right");
                    break;
                case ("gehe geradeaus"):
                    Textadventure.Room.changeRoom("forward");
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
    class Clothing {
        constructor() {
            this.name = "Stoffkeidung";
            this.defense = 1;
        }
    }
    Textadventure.Clothing = Clothing;
    class LeatherClothing {
        constructor() {
            this.name = "Lederrüstung";
            this.defense = 3;
        }
    }
    Textadventure.LeatherClothing = LeatherClothing;
    class Woodarmor {
        constructor() {
            this.name = "Holzrüstung";
            this.defense = 6;
        }
    }
    Textadventure.Woodarmor = Woodarmor;
    class PlateArmor {
        constructor() {
            this.name = "Plattenpanzer";
            this.defense = 20;
        }
    }
    Textadventure.PlateArmor = PlateArmor;
    class HolyArmor {
        constructor() {
            this.name = "Heilige Rüstung";
            this.defense = 99999;
        }
    }
    Textadventure.HolyArmor = HolyArmor;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Item.ts" />
var Textadventure;
/// <reference path="./Item.ts" />
(function (Textadventure) {
    class Stick {
        constructor() {
            this.name = "Stock";
            this.strength = 2;
        }
    }
    Textadventure.Stick = Stick;
    class RostySword {
        constructor() {
            this.name = "Rostiges Schwert";
            this.strength = 3;
        }
    }
    Textadventure.RostySword = RostySword;
    class NobleSword {
        constructor() {
            this.name = "Edles Schwert";
            this.strength = 4;
        }
    }
    Textadventure.NobleSword = NobleSword;
    class Sword {
        constructor() {
            this.name = "Schwert";
            this.strength = 3;
        }
    }
    Textadventure.Sword = Sword;
    class Mace {
        constructor() {
            this.name = "Streitkolben";
            this.strength = 4;
        }
    }
    Textadventure.Mace = Mace;
    class LongSword {
        constructor() {
            this.name = "Langschwert";
            this.strength = 6;
        }
    }
    Textadventure.LongSword = LongSword;
    class BastardSword {
        constructor() {
            this.name = "Bastardschwert";
            this.strength = 8;
        }
    }
    Textadventure.BastardSword = BastardSword;
    class HolySword {
        constructor() {
            this.name = "Heiliges Schwert";
            this.strength = 9999;
        }
    }
    Textadventure.HolySword = HolySword;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Rooms/CreateRooms.ts" />
/// <reference path="./CreateConsole/ConsoleOutput.ts" />
/// <reference path="./Inventar.ts" />
/// <reference path="./Items/Item.ts" />
/// <reference path="./Items/Armor.ts" />
/// <reference path="./Items/Weapon.ts" />
var Textadventure;
/// <reference path="./Rooms/CreateRooms.ts" />
/// <reference path="./CreateConsole/ConsoleOutput.ts" />
/// <reference path="./Inventar.ts" />
/// <reference path="./Items/Item.ts" />
/// <reference path="./Items/Armor.ts" />
/// <reference path="./Items/Weapon.ts" />
(function (Textadventure) {
    Textadventure.gameStage = "start";
    Textadventure.inventar = new Textadventure.Inventar([]);
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