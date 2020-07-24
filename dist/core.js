"use strict";
var Textadventure;
(function (Textadventure) {
    class Inventar {
        constructor(_currentInventar) {
            this.currentInventar = _currentInventar;
        }
        static removeItem(_ItemToRemove) {
            const item = Textadventure.inventar.currentInventar.indexOf(_ItemToRemove);
            Textadventure.inventar.currentInventar.splice(item, 1);
        }
        addItem(_newItem) {
            if (_newItem.type == "weapon") {
                Textadventure.player.changeWeapon(_newItem);
                return "weapon";
            }
            else if (_newItem.type == "armor") {
                Textadventure.player.changeArmor(_newItem);
                return "armor";
            }
            else {
                Textadventure.inventar.currentInventar.push(_newItem);
                return "noWeapon";
            }
        }
    }
    Textadventure.Inventar = Inventar;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    class Room {
        constructor(_roomName, _roomEvent, _roomEnemy, _roomItem) {
            this.roomName = _roomName;
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
            if (Textadventure.currentRoom.roomEnemy == false) {
                const leftRoom = Textadventure.currentRoom.posLeft;
                const rightRoom = Textadventure.currentRoom.posRight;
                const forwardRoom = Textadventure.currentRoom.posForward;
                if (_direction == "left") {
                    if (leftRoom != false) {
                        Textadventure.currentRoom = leftRoom;
                        Textadventure.ConsoleOutput.filterConsoleType("trueWay");
                    }
                    else
                        Textadventure.ConsoleOutput.filterConsoleType("falseWay");
                }
                else if (_direction == "right") {
                    if (rightRoom != false) {
                        Textadventure.currentRoom = rightRoom;
                        Textadventure.ConsoleOutput.filterConsoleType("trueWay");
                    }
                    else
                        Textadventure.ConsoleOutput.filterConsoleType("falseWay");
                }
                else if (_direction == "forward") {
                    if (forwardRoom != false) {
                        Textadventure.currentRoom = forwardRoom;
                        Textadventure.ConsoleOutput.filterConsoleType("trueWay");
                    }
                    else
                        Textadventure.ConsoleOutput.filterConsoleType("falseWay");
                }
            }
            else
                Textadventure.ConsoleOutput.filterConsoleType("enemyInRoom");
        }
        removeItemFromRoom() {
            this.roomItem = false;
        }
        addItemToRoom(_item) {
            this.roomItem = _item;
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
        static executeEvent() {
            if (Textadventure.currentRoom.roomEvent) {
                switch (Textadventure.currentRoom.roomEvent.type) {
                    case "HealEvent":
                        Textadventure.player.hp = 100;
                        break;
                    default:
                        Textadventure.player.hp = Textadventure.player.hp - 10;
                        break;
                }
            }
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
            this.type = "HealEvent";
        }
    }
    Textadventure.HealEvent = HealEvent;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Event.ts" />
var Textadventure;
/// <reference path="./Event.ts" />
(function (Textadventure) {
    class DamageEvent extends Textadventure.Event {
        constructor() {
            super(...arguments);
            this.story = "Du läufst in eine Falle und verlierst etwas Gesundheit.";
            this.type = "DamageEvent";
        }
    }
    Textadventure.DamageEvent = DamageEvent;
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
        static attackEnemy() {
            if (Textadventure.currentRoom.roomEnemy != false) {
                Textadventure.currentRoom.roomEnemy.hp = (Textadventure.currentRoom.roomEnemy.hp - Textadventure.player.weapon.strength);
                Textadventure.player.hp = (Textadventure.player.hp - Textadventure.currentRoom.roomEnemy.weapon.strength);
                if (Textadventure.player.hp <= 0) {
                    Textadventure.ConsoleOutput.filterConsoleType("dead");
                }
                return true;
            }
            else
                return false;
        }
        static removeEnemyFromRoom() {
            Textadventure.currentRoom.roomEnemy = false;
        }
    }
    Textadventure.Creature = Creature;
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
    class Clothing extends Armor {
        constructor() {
            super();
            this.name = "Stoffkeidung";
            this.defense = 1;
            this.type = "armor";
        }
    }
    Textadventure.Clothing = Clothing;
    class LeatherClothing extends Armor {
        constructor() {
            super();
            this.name = "Lederrüstung";
            this.defense = 3;
            this.type = "armor";
        }
    }
    Textadventure.LeatherClothing = LeatherClothing;
    class Woodarmor extends Armor {
        constructor() {
            super();
            this.name = "Holzrüstung";
            this.defense = 6;
            this.type = "armor";
        }
    }
    Textadventure.Woodarmor = Woodarmor;
    class PlateArmor extends Armor {
        constructor() {
            super();
            this.name = "Plattenpanzer";
            this.defense = 20;
            this.type = "armor";
        }
    }
    Textadventure.PlateArmor = PlateArmor;
    class HolyArmor extends Armor {
        constructor() {
            super();
            this.name = "Heilige";
            this.defense = 99999;
            this.type = "armor";
        }
    }
    Textadventure.HolyArmor = HolyArmor;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Item.ts" />
var Textadventure;
/// <reference path="./Item.ts" />
(function (Textadventure) {
    class Weapon extends Textadventure.Item {
    }
    Textadventure.Weapon = Weapon;
    class Stick extends Weapon {
        constructor() {
            super();
            this.name = "stock";
            this.strength = 2;
            this.type = "weapon";
        }
    }
    Textadventure.Stick = Stick;
    class RostySword extends Weapon {
        constructor() {
            super();
            this.name = "Rostiges Schwert";
            this.strength = 3;
            this.type = "weapon";
        }
    }
    Textadventure.RostySword = RostySword;
    class NobleSword extends Weapon {
        constructor() {
            super();
            this.name = "Edles Schwert";
            this.strength = 4;
            this.type = "weapon";
        }
    }
    Textadventure.NobleSword = NobleSword;
    class Sword extends Weapon {
        constructor() {
            super();
            this.name = "Schwert";
            this.strength = 3;
            this.type = "weapon";
        }
    }
    Textadventure.Sword = Sword;
    class Mace extends Weapon {
        constructor() {
            super();
            this.name = "Streitkolben";
            this.strength = 4;
            this.type = "weapon";
        }
    }
    Textadventure.Mace = Mace;
    class LongSword extends Weapon {
        constructor() {
            super();
            this.name = "Langschwert";
            this.strength = 6;
            this.type = "weapon";
        }
    }
    Textadventure.LongSword = LongSword;
    class BastardSword extends Weapon {
        constructor() {
            super();
            this.name = "Bastardschwert";
            this.strength = 8;
            this.type = "weapon";
        }
    }
    Textadventure.BastardSword = BastardSword;
    class HolySword extends Weapon {
        constructor() {
            super();
            this.name = "Heiliges Schwert";
            this.strength = 9999;
            this.type = "weapon";
        }
    }
    Textadventure.HolySword = HolySword;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Creature.ts" />
/// <reference path="../Items/Armor.ts" />
/// <reference path="../Items/Weapon.ts" />
var Textadventure;
/// <reference path="./Creature.ts" />
/// <reference path="../Items/Armor.ts" />
/// <reference path="../Items/Weapon.ts" />
(function (Textadventure) {
    class Goblin extends Textadventure.Creature {
        constructor() {
            super();
            this.hp = 7;
            this.type = "Goblin";
            this.weapon = new Textadventure.Stick;
            this.armor = new Textadventure.Clothing;
        }
    }
    Textadventure.Goblin = Goblin;
    class Skeleton extends Textadventure.Creature {
        constructor() {
            super();
            this.hp = 13;
            this.type = "Skelett";
            this.weapon = new Textadventure.RostySword;
        }
    }
    Textadventure.Skeleton = Skeleton;
    class Vampir extends Textadventure.Creature {
        constructor() {
            super();
            this.hp = 25;
            this.type = "Vampir";
            this.weapon = new Textadventure.NobleSword;
            this.armor = new Textadventure.LeatherClothing;
        }
    }
    Textadventure.Vampir = Vampir;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    class HealEffect {
    }
    Textadventure.HealEffect = HealEffect;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Item.ts" />
/// <reference path="../Effect/HealEffect.ts" />
var Textadventure;
/// <reference path="./Item.ts" />
/// <reference path="../Effect/HealEffect.ts" />
(function (Textadventure) {
    class HealPortion extends Textadventure.Item {
        constructor() {
            super(...arguments);
            this.name = "Heiltrank";
            this.type = "HealPortion";
            this.effect = new Textadventure.HealEffect;
        }
        static useHealPortion() {
            for (let i = 0; i < Textadventure.inventar.currentInventar.length; i++) {
                if (Textadventure.inventar.currentInventar[i].name == "Heiltrank") {
                    Textadventure.Inventar.removeItem(Textadventure.inventar.currentInventar[i]);
                    Textadventure.player.hp = 100;
                    return true;
                }
            }
            return false;
        }
    }
    Textadventure.HealPortion = HealPortion;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Room.ts" />
/// <reference path="../Events/HealEvent.ts" />
/// <reference path="../Events/DamageEvent.ts" />
/// <reference path="../Creatures/EnemyClasses.ts" />
/// <reference path="../Items/Weapon.ts" />
/// <reference path="../Items/HealPortion.ts" />
var Textadventure;
/// <reference path="./Room.ts" />
/// <reference path="../Events/HealEvent.ts" />
/// <reference path="../Events/DamageEvent.ts" />
/// <reference path="../Creatures/EnemyClasses.ts" />
/// <reference path="../Items/Weapon.ts" />
/// <reference path="../Items/HealPortion.ts" />
(function (Textadventure) {
    // export let allRooms: Room[] = [];
    // create rooms
    // constructor(_roomName: string, _roomEvent: Event | boolean, _roomEnemy: Creature | boolean, _roomItem: Item | boolean)
    // A-Rooms
    Textadventure.a1 = new Textadventure.Room("a1", new Textadventure.DamageEvent, new Textadventure.Goblin, new Textadventure.Clothing);
    Textadventure.a2 = new Textadventure.Room("a2", false, false, false);
    Textadventure.a3 = new Textadventure.Room("a3", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.a4 = new Textadventure.Room("a4", new Textadventure.HealEvent, new Textadventure.Goblin, false); //TODO: OneWay
    Textadventure.a5 = new Textadventure.Room("a5", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.a6 = new Textadventure.Room("a6", new Textadventure.HealEvent, new Textadventure.Goblin, false); // TODO: Finish
    //B-Rooms
    Textadventure.b1 = new Textadventure.Room("b1", new Textadventure.HealEvent, new Textadventure.Goblin, false); //TODO: OneWay
    Textadventure.b2 = new Textadventure.Room("b2", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.b3 = new Textadventure.Room("b3", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.b4 = new Textadventure.Room("b4", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.b5 = new Textadventure.Room("b5", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.b6 = new Textadventure.Room("b6", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    //C-Rooms
    Textadventure.c1 = new Textadventure.Room("c1", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.c2 = new Textadventure.Room("c2", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.c3 = new Textadventure.Room("c3", new Textadventure.HealEvent, new Textadventure.Goblin, false); //TODO: OneWay
    Textadventure.c4 = new Textadventure.Room("c4", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.c5 = new Textadventure.Room("c5", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.c6 = new Textadventure.Room("c6", new Textadventure.HealEvent, new Textadventure.Goblin, false); //TODO: OneWay
    //D-Rooms
    Textadventure.d1 = new Textadventure.Room("d1", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.d2 = new Textadventure.Room("d2", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.d3 = new Textadventure.Room("d3", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.d4 = new Textadventure.Room("d4", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.d5 = new Textadventure.Room("d5", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.d6 = new Textadventure.Room("d6", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    //E-Rooms
    Textadventure.e1 = new Textadventure.Room("e1", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.e2 = new Textadventure.Room("e2", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.e3 = new Textadventure.Room("e3", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.e4 = new Textadventure.Room("e4", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.e5 = new Textadventure.Room("e5", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.e6 = new Textadventure.Room("e6", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    //F-Rooms
    Textadventure.f1 = new Textadventure.Room("f1", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.f2 = new Textadventure.Room("f2", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.f3 = new Textadventure.Room("f3", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.f4 = new Textadventure.Room("f4", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.f5 = new Textadventure.Room("f5", new Textadventure.HealEvent, new Textadventure.Goblin, false); //TODO: OneWay
    Textadventure.f6 = new Textadventure.Room("f6", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    //G-Rooms
    Textadventure.g1 = new Textadventure.Room("g1", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.g2 = new Textadventure.Room("g2", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.g3 = new Textadventure.Room("g3", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.g4 = new Textadventure.Room("g4", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.g6 = new Textadventure.Room("g6", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    //H-Rooms
    Textadventure.h1 = new Textadventure.Room("h1", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.h2 = new Textadventure.Room("h2", new Textadventure.HealEvent, new Textadventure.Goblin, false); //TODO: OneWay
    Textadventure.h3 = new Textadventure.Room("h3", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.h4 = new Textadventure.Room("h4", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.h5 = new Textadventure.Room("h5", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.h6 = new Textadventure.Room("h6", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    // set posibleDirections
    // addPosRooms(_posLeft: Room | boolean, _posRight: Room | boolean, _posFoward: Room | boolean)
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
/// <reference path="./Creature.ts" />
var Textadventure;
/// <reference path="./Creature.ts" />
(function (Textadventure) {
    class Player extends Textadventure.Creature {
        constructor(_hp, _weapon, _armor) {
            super();
            this.type = "player";
            this.hp = _hp;
            this.weapon = _weapon;
            this.armor = _armor;
        }
        changeWeapon(_weapon) {
            Textadventure.currentRoom.roomItem = Textadventure.player.weapon;
            this.weapon = _weapon;
        }
        changeArmor(_armor) {
            Textadventure.currentRoom.roomItem = Textadventure.player.armor;
            this.armor = _armor;
        }
    }
    Textadventure.Player = Player;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    class ConsoleOutput {
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
                document.getElementById("consoleInput input").focus();
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
                    const itemString = (roomItem != false) ? "Auf dem Boden liegt ein <span>" + Textadventure.currentRoom.roomItem.name + "</span>." : "";
                    const eventString = (roomEvent != false) ? Textadventure.currentRoom.roomEvent.story : "";
                    const enemyString = (roomEnemy != false) ? "einen <span class=\"enemy\">" + Textadventure.currentRoom.roomEnemy.type + " </span> als" : "kein";
                    let wayString = "<br> Du siehst folgende Wege: <br>";
                    Textadventure.Event.executeEvent();
                    if (Textadventure.Room.findWay("left"))
                        wayString = wayString + "Links<br>";
                    if (Textadventure.Room.findWay("right"))
                        wayString = wayString + "Rechts <br> ";
                    if (Textadventure.Room.findWay("forward"))
                        wayString = wayString + "Geradeaus <br> ";
                    if (!Textadventure.Room.findWay("forward") && !Textadventure.Room.findWay("left") && Textadventure.Room.findWay("right"))
                        wayString = wayString + "Keinen";
                    firstDiv.innerHTML = "Du schaust dich im Raum um. Du siehst " + enemyString + " Gegner. <br>" + eventString + "<br>" + itemString + wayString;
                    Textadventure.currentRoom.roomEvent = false;
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("inventar"):
                    let inventarString = "";
                    const currentWeapon = Textadventure.player.weapon.name;
                    if (Textadventure.inventar.currentInventar.length > 0)
                        for (let i = 0; i < Textadventure.inventar.currentInventar.length; i++) {
                            inventarString = inventarString + "<br>" + Textadventure.inventar.currentInventar[i].name;
                        }
                    else
                        inventarString = "Du hast nichts im Inventar";
                    firstDiv.innerHTML = "In deinem Inventar befindet sich: <br> <span>" + inventarString + "</span> <br> <br> Du trägst: <span>" + currentWeapon + "</span> als Waffe";
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                // TODO:
                case ("einstecken"):
                    if (Textadventure.currentRoom.roomItem != false) {
                        const currentRoomItem = Textadventure.currentRoom.roomItem.name;
                        let dropNotificationString = "";
                        if (Textadventure.inventar.addItem(Textadventure.currentRoom.roomItem) == "armor") {
                            dropNotificationString = "Du lässt deine aktuelle Rüstung fallen. <br>";
                        }
                        else if (Textadventure.inventar.addItem(Textadventure.currentRoom.roomItem) == "weapon") {
                            dropNotificationString = "Du lässt deine aktuelle Waffe fallen. <br>";
                        }
                        else {
                            Textadventure.currentRoom.removeItemFromRoom();
                        }
                        firstDiv.innerHTML = dropNotificationString + "Du steckts: <span>" + currentRoomItem + "</span> in dein Inventar";
                    }
                    else {
                        firstDiv.innerHTML = "Hier gibt es nichts zum einstecken";
                    }
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("heiltrank"):
                    if (Textadventure.HealPortion.useHealPortion())
                        firstDiv.innerHTML = Textadventure.SearchContent.search("useHealPortion");
                    else
                        firstDiv.innerHTML = Textadventure.SearchContent.search("noHealPortion");
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("gehe links"):
                    Textadventure.Room.changeRoom("left");
                    break;
                case ("gehe rechts"):
                    Textadventure.Room.changeRoom("right");
                    break;
                case ("gehe geradeaus"):
                    Textadventure.Room.changeRoom("forward");
                    break;
                case ("gehe zurück"):
                    firstDiv.innerHTML = Textadventure.SearchContent.search("noReturn");
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("trueway"):
                    firstDiv.innerHTML = Textadventure.SearchContent.search("newRoom");
                    allElements.push(seperatorDiv, firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("gesundheit"):
                    firstDiv.innerHTML = "Deine aktuelle Gesundheit liegt bei <span class=\"lifepoints\">" + Textadventure.player.hp + "</span> HP";
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("enemyinroom"):
                    firstDiv.innerHTML = Textadventure.SearchContent.search("enemyInRoom");
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("angreifen"):
                    const restHPafterAttack = Textadventure.Creature.attackEnemy();
                    if (restHPafterAttack == false) {
                        firstDiv.innerHTML = Textadventure.SearchContent.search("noEnemy");
                        allElements.push(firstDiv);
                    }
                    else {
                        const enemyDiv = document.createElement("div");
                        firstDiv.innerHTML = Textadventure.SearchContent.search("attackEnemy") + Textadventure.currentRoom.roomEnemy.hp + "</span>";
                        enemyDiv.innerHTML = Textadventure.SearchContent.search("enemyAttacksYou") + Textadventure.player.hp + "</span>";
                        allElements.push(firstDiv, enemyDiv);
                    }
                    if (Textadventure.currentRoom.roomEnemy.hp <= 0) {
                        const deadEnemyDiv = document.createElement("div");
                        deadEnemyDiv.innerHTML = Textadventure.SearchContent.search("enemyDead");
                        console.log(deadEnemyDiv.innerHTML);
                        Textadventure.Creature.removeEnemyFromRoom();
                        allElements.push(deadEnemyDiv);
                    }
                    allElements.push(inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("falseway"):
                    firstDiv.innerHTML = Textadventure.SearchContent.search("noEntry");
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
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
/// <reference path="./Creatures/Player.ts" />
/// <reference path="./CreateConsole/ConsoleOutput.ts" />
/// <reference path="./Inventar.ts" />
/// <reference path="./Items/HealPortion.ts" />
/// <reference path="./Items/Armor.ts" />
/// <reference path="./Items/Weapon.ts" />
var Textadventure;
/// <reference path="./Rooms/CreateRooms.ts" />
/// <reference path="./Creatures/Player.ts" />
/// <reference path="./CreateConsole/ConsoleOutput.ts" />
/// <reference path="./Inventar.ts" />
/// <reference path="./Items/HealPortion.ts" />
/// <reference path="./Items/Armor.ts" />
/// <reference path="./Items/Weapon.ts" />
(function (Textadventure) {
    Textadventure.gameStage = "start";
    Textadventure.player = new Textadventure.Player(100, new Textadventure.Stick, new Textadventure.Clothing);
    Textadventure.inventar = new Textadventure.Inventar([new Textadventure.HealPortion]);
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
/// <reference path="../Items/Weapon.ts" />
/// <reference path="../Items/Armor.ts" />
var Textadventure;
/// <reference path="../Items/Weapon.ts" />
/// <reference path="../Items/Armor.ts" />
(function (Textadventure) {
    class Gilbad extends Textadventure.Creature {
        constructor() {
            super();
            this.hp = 65;
            this.name = "Gilbad der Goblin";
            this.type = "Boss";
            this.weapon = new Textadventure.Sword;
            this.armor = new Textadventure.Clothing;
        }
    }
    Textadventure.Gilbad = Gilbad;
    class Valentine extends Textadventure.Creature {
        constructor() {
            super();
            this.hp = 135;
            this.name = "Valentine der Vampir";
            this.type = "Boss";
            this.weapon = new Textadventure.LongSword;
            this.armor = new Textadventure.Clothing;
        }
    }
    Textadventure.Valentine = Valentine;
    class Skull extends Textadventure.Creature {
        constructor() {
            super();
            this.hp = 205;
            this.name = "Skull das Skelett";
            this.type = "Boss";
            this.weapon = new Textadventure.Mace;
        }
    }
    Textadventure.Skull = Skull;
    class Gabriel extends Textadventure.Creature {
        constructor() {
            super();
            this.hp = 205;
            this.name = "Gabriel";
            this.type = "EndBoss";
            this.weapon = new Textadventure.HolySword;
            this.armor = new Textadventure.HolyArmor;
        }
    }
    Textadventure.Gabriel = Gabriel;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    class DamageEffect {
    }
    Textadventure.DamageEffect = DamageEffect;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    function checkInput(_input) {
        const lowerInput = _input.toLocaleLowerCase();
        let isCorrect = false;
        let allowInput = [];
        switch (Textadventure.gameStage) {
            case "start":
                if (lowerInput == "n" || lowerInput == "l" || lowerInput == "b")
                    isCorrect = true;
                break;
            case "loadGame":
                if (lowerInput == "b")
                    isCorrect = true;
                break;
            case "inGame":
                allowInput.push("hilfe", "umschauen", "inventar", "einstecken", "heiltrank", "gehe rechts", "gehe links", "gehe geradeaus", "falseway", "trueway", "angreifen", "enemyinroom", "gehe zurück", "gesundheit");
                for (let i = 0; i < allowInput.length; i++) {
                    if (lowerInput == allowInput[i]) {
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
                    theInputValue = theInputElement.value,
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