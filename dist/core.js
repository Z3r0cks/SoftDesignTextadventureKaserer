"use strict";
var Textadventure;
(function (Textadventure) {
    class Inventar {
        constructor(_currentInventar) {
            this.currentInventar = _currentInventar;
        }
        static removeItem(_ItemToRemove) {
            const item = Textadventure.inventory.currentInventar.indexOf(_ItemToRemove);
            Textadventure.inventory.currentInventar.splice(item, 1);
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
                Textadventure.inventory.currentInventar.push(_newItem);
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
            super();
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
            super();
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
            const playerDamage = Textadventure.player.weapon.strength - Textadventure.currentRoom.roomEnemy.armor.defense;
            const enemyDamage = Textadventure.currentRoom.roomEnemy.weapon.strength - Textadventure.player.armor.defense;
            Textadventure.currentRoom.roomEnemy.hp = Textadventure.currentRoom.roomEnemy.hp - playerDamage;
            Textadventure.player.hp = Textadventure.player.hp - enemyDamage;
        }
        static removeEnemyFromRoom() {
            Textadventure.currentRoom.roomEnemy = false;
        }
        static checkIfEnemyDead() {
            if (Textadventure.currentRoom.roomEnemy.hp <= 0)
                return true;
            return false;
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
        static checkRoomItem() {
            return Textadventure.currentRoom.roomItem.type;
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
            this.name = "Stoffkleidung";
            this.defense = 1;
            this.type = "armor";
        }
    }
    Textadventure.Clothing = Clothing;
    class LeatherClothing extends Armor {
        constructor() {
            super();
            this.name = "Lederrüstung";
            this.defense = 2;
            this.type = "armor";
        }
    }
    Textadventure.LeatherClothing = LeatherClothing;
    class Woodarmor extends Armor {
        constructor() {
            super();
            this.name = "Holzrüstung";
            this.defense = 3;
            this.type = "armor";
        }
    }
    Textadventure.Woodarmor = Woodarmor;
    class PlateArmor extends Armor {
        constructor() {
            super();
            this.name = "Plattenpanzer";
            this.defense = 5;
            this.type = "armor";
        }
    }
    Textadventure.PlateArmor = PlateArmor;
    class HolyArmor extends Armor {
        constructor() {
            super();
            this.name = "Heilige Rüstung";
            this.defense = 51;
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
            this.name = "Stock";
            this.strength = 5;
            this.type = "weapon";
        }
    }
    Textadventure.Stick = Stick;
    class RostySword extends Weapon {
        constructor() {
            super();
            this.name = "Rostiges Schwert";
            this.strength = 8;
            this.type = "weapon";
        }
    }
    Textadventure.RostySword = RostySword;
    class Sword extends Weapon {
        constructor() {
            super();
            this.name = "Schwert";
            this.strength = 10;
            this.type = "weapon";
        }
    }
    Textadventure.Sword = Sword;
    class NobleSword extends Weapon {
        constructor() {
            super();
            this.name = "Edles Schwert";
            this.strength = 13;
            this.type = "weapon";
        }
    }
    Textadventure.NobleSword = NobleSword;
    class Mace extends Weapon {
        constructor() {
            super();
            this.name = "Streitkolben";
            this.strength = 10;
            this.type = "weapon";
        }
    }
    Textadventure.Mace = Mace;
    class LongSword extends Weapon {
        constructor() {
            super();
            this.name = "Langschwert";
            this.strength = 16;
            this.type = "weapon";
        }
    }
    Textadventure.LongSword = LongSword;
    class BastardSword extends Weapon {
        constructor() {
            super();
            this.name = "Bastardschwert";
            this.strength = 20;
            this.type = "weapon";
        }
    }
    Textadventure.BastardSword = BastardSword;
    class HolySword extends Weapon {
        constructor() {
            super();
            this.name = "Heiliges Schwert";
            this.strength = 51;
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
            this.hp = 20;
            this.type = "Goblin";
            this.weapon = new Textadventure.Stick;
            this.armor = new Textadventure.Clothing;
        }
    }
    Textadventure.Goblin = Goblin;
    class Skeleton extends Textadventure.Creature {
        constructor() {
            super();
            this.hp = 50;
            this.type = "Skelett";
            this.weapon = new Textadventure.RostySword;
            this.armor = new Textadventure.Clothing;
        }
    }
    Textadventure.Skeleton = Skeleton;
    class Vampir extends Textadventure.Creature {
        constructor() {
            super();
            this.hp = 40;
            this.type = "Vampir";
            this.weapon = new Textadventure.NobleSword;
            this.armor = new Textadventure.LeatherClothing;
        }
    }
    Textadventure.Vampir = Vampir;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Creature.ts" />
/// <reference path="../Items/Armor.ts" />
/// <reference path="../Items/Weapon.ts" />
var Textadventure;
/// <reference path="./Creature.ts" />
/// <reference path="../Items/Armor.ts" />
/// <reference path="../Items/Weapon.ts" />
(function (Textadventure) {
    class Gilbad extends Textadventure.Creature {
        constructor() {
            super();
            this.hp = 65;
            this.type = "Gilbad der Goblin";
            this.weapon = new Textadventure.Sword;
            this.armor = new Textadventure.Clothing;
        }
    }
    Textadventure.Gilbad = Gilbad;
    class Valentine extends Textadventure.Creature {
        constructor() {
            super();
            this.hp = 135;
            this.type = "Valentine der Vampir";
            this.weapon = new Textadventure.LongSword;
            this.armor = new Textadventure.Clothing;
        }
    }
    Textadventure.Valentine = Valentine;
    class Skull extends Textadventure.Creature {
        constructor() {
            super();
            this.hp = 205;
            this.type = "Skull das Skelett";
            this.weapon = new Textadventure.Mace;
            this.armor = new Textadventure.Clothing;
        }
    }
    Textadventure.Skull = Skull;
    class Gabriel extends Textadventure.Creature {
        constructor() {
            super();
            this.hp = 3401;
            this.type = "Gabriel";
            this.weapon = new Textadventure.HolySword;
            this.armor = new Textadventure.HolyArmor;
        }
    }
    Textadventure.Gabriel = Gabriel;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Item.ts" />
var Textadventure;
/// <reference path="./Item.ts" />
(function (Textadventure) {
    class HealPortion extends Textadventure.Item {
        constructor() {
            super();
            this.name = "Heiltrank";
            this.type = "HealPortion";
        }
        static useHealPortion() {
            for (let i = 0; i < Textadventure.inventory.currentInventar.length; i++) {
                if (Textadventure.inventory.currentInventar[i].name == "Heiltrank") {
                    Textadventure.Inventar.removeItem(Textadventure.inventory.currentInventar[i]);
                    Textadventure.player.hp = 100;
                    return true;
                }
            }
            return false;
        }
    }
    Textadventure.HealPortion = HealPortion;
    class Incendiary extends Textadventure.Item {
        constructor() {
            super();
            this.name = "Brandbombe";
            this.type = "Incendiary";
        }
        static useIncendiary() {
            for (let i = 0; i < Textadventure.inventory.currentInventar.length; i++) {
                if (Textadventure.inventory.currentInventar[i].name == "Brandbombe") {
                    Textadventure.Inventar.removeItem(Textadventure.inventory.currentInventar[i]);
                    Textadventure.currentRoom.roomEnemy.hp -= 20;
                    return true;
                }
            }
            return false;
        }
    }
    Textadventure.Incendiary = Incendiary;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Room.ts" />
/// <reference path="../Events/HealEvent.ts" />
/// <reference path="../Events/DamageEvent.ts" />
/// <reference path="../Creatures/EnemyClasses.ts" />
/// <reference path="../Creatures/BossClasses.ts" />
/// <reference path="../Items/Weapon.ts" />
/// <reference path="../Items/UsableItems.ts" />
var Textadventure;
/// <reference path="./Room.ts" />
/// <reference path="../Events/HealEvent.ts" />
/// <reference path="../Events/DamageEvent.ts" />
/// <reference path="../Creatures/EnemyClasses.ts" />
/// <reference path="../Creatures/BossClasses.ts" />
/// <reference path="../Items/Weapon.ts" />
/// <reference path="../Items/UsableItems.ts" />
(function (Textadventure) {
    Textadventure.allRooms = [];
    // create rooms
    // constructor(_roomName: string, _roomEvent: Event | boolean, _roomEnemy: Creature | boolean, _roomItem: Item | boolean)
    // A-Rooms
    Textadventure.a1 = new Textadventure.Room("a1", false, new Textadventure.Goblin, new Textadventure.HealPortion);
    Textadventure.a2 = new Textadventure.Room("a2", new Textadventure.DamageEvent, new Textadventure.Goblin, new Textadventure.Incendiary);
    Textadventure.a3 = new Textadventure.Room("a3", new Textadventure.HealEvent, new Textadventure.Skeleton, new Textadventure.Incendiary);
    Textadventure.a4 = new Textadventure.Room("a4", new Textadventure.HealEvent, new Textadventure.Gilbad, new Textadventure.Incendiary);
    Textadventure.a5 = new Textadventure.Room("a5", false, new Textadventure.Vampir, false);
    Textadventure.a6 = new Textadventure.Room("a6", new Textadventure.HealEvent, new Textadventure.Gabriel, new Textadventure.HealPortion); // TODO: Finish
    //B-Rooms
    Textadventure.b1 = new Textadventure.Room("b1", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.b2 = new Textadventure.Room("b2", new Textadventure.DamageEvent, new Textadventure.Goblin, new Textadventure.Sword);
    Textadventure.b3 = new Textadventure.Room("b3", false, new Textadventure.Goblin, false);
    Textadventure.b4 = new Textadventure.Room("b4", new Textadventure.DamageEvent, new Textadventure.Vampir, new Textadventure.Incendiary);
    Textadventure.b5 = new Textadventure.Room("b5", false, false, false);
    Textadventure.b6 = new Textadventure.Room("b6", new Textadventure.HealEvent, false, false);
    //C-Rooms
    Textadventure.c1 = new Textadventure.Room("c1", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.c2 = new Textadventure.Room("c2", new Textadventure.DamageEvent, new Textadventure.Goblin, new Textadventure.Woodarmor);
    Textadventure.c3 = new Textadventure.Room("c3", false, new Textadventure.Skeleton, false);
    Textadventure.c4 = new Textadventure.Room("c4", new Textadventure.HealEvent, new Textadventure.Vampir, new Textadventure.Incendiary);
    Textadventure.c5 = new Textadventure.Room("c5", new Textadventure.DamageEvent, new Textadventure.Vampir, new Textadventure.HealPortion);
    Textadventure.c6 = new Textadventure.Room("c6", false, new Textadventure.Skull, new Textadventure.HealPortion);
    //D-Rooms
    Textadventure.d1 = new Textadventure.Room("d1", new Textadventure.HealEvent, new Textadventure.Goblin, false);
    Textadventure.d2 = new Textadventure.Room("d2", false, new Textadventure.Goblin, false);
    Textadventure.d3 = new Textadventure.Room("d3", false, new Textadventure.Skeleton, false);
    Textadventure.d4 = new Textadventure.Room("d4", new Textadventure.HealEvent, new Textadventure.Vampir, new Textadventure.HealPortion);
    Textadventure.d5 = new Textadventure.Room("d5", new Textadventure.DamageEvent, false, false);
    Textadventure.d6 = new Textadventure.Room("d6", false, false, false);
    //E-Rooms
    Textadventure.e1 = new Textadventure.Room("e1", new Textadventure.HealEvent, false, new Textadventure.Mace);
    Textadventure.e2 = new Textadventure.Room("e2", false, new Textadventure.Skeleton, false);
    Textadventure.e3 = new Textadventure.Room("e3", new Textadventure.HealEvent, false, false);
    Textadventure.e4 = new Textadventure.Room("e4", new Textadventure.DamageEvent, new Textadventure.Valentine, false);
    Textadventure.e5 = new Textadventure.Room("e5", new Textadventure.HealEvent, false, false);
    Textadventure.e6 = new Textadventure.Room("e6", false, false, false);
    //F-Rooms
    Textadventure.f1 = new Textadventure.Room("f1", false, new Textadventure.Gilbad, new Textadventure.Incendiary);
    Textadventure.f2 = new Textadventure.Room("f2", new Textadventure.HealEvent, new Textadventure.Skeleton, new Textadventure.HealPortion);
    Textadventure.f3 = new Textadventure.Room("f3", false, new Textadventure.Skeleton, false);
    Textadventure.f4 = new Textadventure.Room("f4", new Textadventure.DamageEvent, new Textadventure.Vampir, false);
    Textadventure.f5 = new Textadventure.Room("f5", new Textadventure.DamageEvent, new Textadventure.Vampir, new Textadventure.HealPortion);
    Textadventure.f6 = new Textadventure.Room("f6", new Textadventure.HealEvent, false, false);
    //G-Rooms
    Textadventure.g1 = new Textadventure.Room("g1", new Textadventure.HealEvent, false, false);
    Textadventure.g2 = new Textadventure.Room("g2", new Textadventure.DamageEvent, false, false);
    Textadventure.g3 = new Textadventure.Room("g3", false, new Textadventure.Skeleton, new Textadventure.LeatherClothing);
    Textadventure.g4 = new Textadventure.Room("g4", new Textadventure.HealEvent, false, false);
    Textadventure.g6 = new Textadventure.Room("g6", new Textadventure.DamageEvent, false, false);
    //H-Rooms
    Textadventure.h1 = new Textadventure.Room("h1", new Textadventure.DamageEvent, false, false);
    Textadventure.h2 = new Textadventure.Room("h2", false, false, new Textadventure.Incendiary);
    Textadventure.h3 = new Textadventure.Room("h3", new Textadventure.HealEvent, false, false);
    Textadventure.h4 = new Textadventure.Room("h4", new Textadventure.DamageEvent, new Textadventure.Skull, false);
    Textadventure.h5 = new Textadventure.Room("h5", new Textadventure.HealEvent, false, false);
    Textadventure.h6 = new Textadventure.Room("h6", false, false, new Textadventure.HealPortion);
    // set posibleDirections
    // addPosRooms(_posLeft: Room | boolean, _posRight: Room | boolean, _posFoward: Room | boolean)
    // A-Rooms
    Textadventure.a1.addPosRooms(false, false, Textadventure.a2);
    Textadventure.a2.addPosRooms(false, Textadventure.b2, Textadventure.a3);
    Textadventure.a3.addPosRooms(false, Textadventure.b3, false);
    Textadventure.a4.addPosRooms(Textadventure.c5, false, false);
    Textadventure.a5.addPosRooms(false, Textadventure.a6, false);
    Textadventure.a6.addPosRooms(false, false, false); // Finish
    // B-Rooms
    Textadventure.b1.addPosRooms(false, Textadventure.c2, false);
    Textadventure.b2.addPosRooms(false, Textadventure.b1, Textadventure.c2);
    Textadventure.b3.addPosRooms(Textadventure.b2, false, false);
    Textadventure.b4.addPosRooms(false, false, Textadventure.a4);
    Textadventure.b5.addPosRooms(false, Textadventure.b6, Textadventure.a5);
    Textadventure.b6.addPosRooms(Textadventure.c6, false, false);
    //C-Rooms
    Textadventure.c1.addPosRooms(Textadventure.d1, false, false);
    Textadventure.c2.addPosRooms(Textadventure.c3, Textadventure.c1, Textadventure.d2);
    Textadventure.c3.addPosRooms(false, false, Textadventure.d1);
    Textadventure.c4.addPosRooms(false, Textadventure.c5, Textadventure.a4);
    Textadventure.c5.addPosRooms(Textadventure.b5, false, false);
    Textadventure.c6.addPosRooms(Textadventure.a5, false, false);
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
    Textadventure.f5.addPosRooms(false, Textadventure.g3, false);
    Textadventure.f6.addPosRooms(false, false, Textadventure.e6);
    //G-Rooms
    Textadventure.g1.addPosRooms(Textadventure.h1, false, false);
    Textadventure.g2.addPosRooms(false, false, Textadventure.g1);
    Textadventure.g3.addPosRooms(Textadventure.g4, Textadventure.g2, Textadventure.h3);
    Textadventure.g4.addPosRooms(false, Textadventure.h4, false);
    Textadventure.g6.addPosRooms(false, false, Textadventure.f6);
    //H-Rooms
    Textadventure.h1.addPosRooms(Textadventure.h2, false, false);
    Textadventure.h2.addPosRooms(Textadventure.h3, false, false);
    Textadventure.h3.addPosRooms(Textadventure.h4, false, false);
    Textadventure.h4.addPosRooms(false, false, Textadventure.h5);
    Textadventure.h5.addPosRooms(false, false, Textadventure.h6);
    Textadventure.h6.addPosRooms(Textadventure.g6, false, false);
    Textadventure.allRooms.push(Textadventure.a1, Textadventure.a2, Textadventure.a3, Textadventure.a4, Textadventure.a5, Textadventure.a6, Textadventure.b1, Textadventure.b2, Textadventure.b3, Textadventure.b4, Textadventure.b5, Textadventure.b6, Textadventure.c1, Textadventure.c2, Textadventure.c3, Textadventure.c4, Textadventure.c5, Textadventure.c6, Textadventure.d1, Textadventure.d2, Textadventure.d3, Textadventure.d4, Textadventure.d5, Textadventure.d6, Textadventure.e1, Textadventure.e2, Textadventure.e3, Textadventure.e4, Textadventure.e5, Textadventure.e6, Textadventure.f1, Textadventure.f2, Textadventure.f3, Textadventure.f4, Textadventure.f5, Textadventure.f6, Textadventure.g1, Textadventure.g2, Textadventure.g3, Textadventure.g4, Textadventure.g6, Textadventure.h1, Textadventure.h2, Textadventure.h3, Textadventure.h4, Textadventure.h5, Textadventure.h6);
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
        ifGameOver() {
            if (Textadventure.player.hp <= 0) {
                Textadventure.gameStage = "gameOver";
                Textadventure.ConsoleOutput.filterConsoleType("gameover");
            }
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
            else if (Textadventure.gameStage == "loadGame") {
                ConsoleOutput.loadGame(inputLowerElement);
            }
            else if (Textadventure.gameStage == "gameOver") {
                ConsoleOutput.buildEndMenu(inputLowerElement);
            }
        }
        /////////////////////// StartMenu //////////////////////////////
        static buildStartMenu(_inputLowerElement) {
            const seperatorDiv = document.createElement("div");
            const firstDiv = document.createElement("div");
            const inputField = document.createElement("input");
            const allElements = [];
            seperatorDiv.className = "seperator";
            inputField.id = "consoleInput input";
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
                    Textadventure.gameStage = "loadGame";
                    Textadventure.SaveLoad.loadGame();
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
            const roomEnemy = Textadventure.Creature.getRoomEnemy();
            const roomEvent = Textadventure.Event.getRoomEvent();
            const roomItem = Textadventure.Item.getRoomItem();
            const allElements = [];
            seperatorDiv.className = "seperator";
            inputField.id = "consoleInput input";
            switch (_inputLowerElement) {
                case ("hilfe"):
                    firstDiv.innerHTML = Textadventure.SearchContent.search("helpContent");
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("us"):
                    const itemString = (roomItem != false) ? "Auf dem Boden liegt: <span>" + Textadventure.currentRoom.roomItem.name + "</span>." : "";
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
                    if (!Textadventure.Room.findWay("forward") && !Textadventure.Room.findWay("left") && !Textadventure.Room.findWay("right"))
                        wayString = wayString + "Keinen";
                    firstDiv.innerHTML = "Du schaust dich im Raum um. Du siehst " + enemyString + " Gegner. <br>" + eventString + "<br>" + itemString + wayString;
                    Textadventure.currentRoom.roomEvent = false;
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("iv"):
                    let inventarString = "";
                    const currentWeapon = Textadventure.player.weapon.name;
                    const currentArmor = Textadventure.player.armor.name;
                    if (Textadventure.inventory.currentInventar.length > 0)
                        for (let i = 0; i < Textadventure.inventory.currentInventar.length; i++) {
                            inventarString = inventarString + "<br>" + Textadventure.inventory.currentInventar[i].name;
                        }
                    else
                        inventarString = "Du hast nichts im Inventar";
                    firstDiv.innerHTML = "In deinem Inventar befindet sich: <br> <span>" + inventarString + "</span> <br> <br> Du trägst: <span>" + currentWeapon + "</span> als Waffe und <span>" + currentArmor + "</span> als Rüstung";
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("ein"):
                    if (Textadventure.currentRoom.roomItem != false) {
                        switch (Textadventure.Item.checkRoomItem()) {
                            case "weapon":
                                firstDiv.innerHTML = "Du lässt: <span>" + Textadventure.player.weapon.name + "</span> fallen und nimmst: <span>" + Textadventure.currentRoom.roomItem.name + " </span>in die Hand";
                                Textadventure.player.changeWeapon(Textadventure.currentRoom.roomItem);
                                break;
                            case "armor":
                                firstDiv.innerHTML = "Du lässt: <span>" + Textadventure.player.armor.name + "</span> fallen und legst: <span>" + Textadventure.currentRoom.roomItem.name + " </span>an";
                                Textadventure.player.changeArmor(Textadventure.currentRoom.roomItem);
                                break;
                            default:
                                firstDiv.innerHTML = "Du steckst <span>" + Textadventure.currentRoom.roomItem.name + "</span> in dein Inventar";
                                Textadventure.inventory.currentInventar.push(Textadventure.currentRoom.roomItem);
                                Textadventure.currentRoom.removeItemFromRoom();
                                break;
                        }
                    }
                    else {
                        firstDiv.innerHTML = Textadventure.SearchContent.search("noItemInRoom");
                    }
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("heiltrank"):
                    if (Textadventure.HealPortion.useHealPortion())
                        firstDiv.innerHTML = Textadventure.SearchContent.search("useHealPortion");
                    else
                        firstDiv.innerHTML = Textadventure.SearchContent.search("noUsableItem");
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("brandbombe"):
                    if (Textadventure.currentRoom.roomEnemy != false) {
                        if (Textadventure.Incendiary.useIncendiary()) {
                            firstDiv.innerHTML = Textadventure.SearchContent.search("useIncendiary");
                            if (Textadventure.Creature.checkIfEnemyDead()) {
                                const enemyDeadDiv = document.createElement("div");
                                enemyDeadDiv.innerHTML = Textadventure.SearchContent.search("enemyDead");
                                Textadventure.Creature.removeEnemyFromRoom();
                                allElements.push(enemyDeadDiv);
                            }
                        }
                        else
                            firstDiv.innerHTML = Textadventure.SearchContent.search("noUsableItem");
                    }
                    else
                        firstDiv.innerHTML = Textadventure.SearchContent.search("noEnemy");
                    allElements.push(firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("gehe l"):
                    Textadventure.Room.changeRoom("left");
                    break;
                case ("gehe r"):
                    Textadventure.Room.changeRoom("right");
                    break;
                case ("gehe g"):
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
                case ("a"):
                    if (Textadventure.currentRoom.roomEnemy != false) {
                        const enemyDiv = document.createElement("div");
                        Textadventure.Creature.attackEnemy();
                        firstDiv.innerHTML = Textadventure.SearchContent.search("attackEnemy") + Textadventure.currentRoom.roomEnemy.hp + "</span>";
                        enemyDiv.innerHTML = Textadventure.SearchContent.search("enemyAttacksYou") + Textadventure.player.hp + "</span>";
                        allElements.push(firstDiv, enemyDiv);
                    }
                    else {
                        firstDiv.innerHTML = Textadventure.SearchContent.search("noEnemy");
                        allElements.push(firstDiv);
                    }
                    if (Textadventure.Creature.checkIfEnemyDead()) {
                        const enemyDeadDiv = document.createElement("div");
                        enemyDeadDiv.innerHTML = Textadventure.SearchContent.search("enemyDead");
                        Textadventure.Creature.removeEnemyFromRoom();
                        allElements.push(enemyDeadDiv);
                    }
                    allElements.push(inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    break;
                case ("enemydead"):
                    firstDiv.innerHTML = Textadventure.SearchContent.search("enemyDead");
                    Textadventure.Creature.removeEnemyFromRoom();
                    allElements.push(firstDiv);
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
                case ("speichern"):
                    if (Textadventure.currentRoom.roomEnemy == false) {
                        Textadventure.SaveLoad.saveGame();
                    }
                    else
                        firstDiv.innerHTML = Textadventure.SearchContent.search("canNotSave");
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    allElements.push(firstDiv, inputField);
            }
            allElements.forEach(element => {
                document.body.appendChild(element);
            });
            document.getElementById("consoleInput input").focus();
        }
        /////////////////////// buildEndMenu //////////////////////////////
        static buildEndMenu(_inputLowerElement) {
            const allElements = [];
            const firstDiv = document.createElement("div");
            switch (_inputLowerElement) {
                case "gameover":
                    const endDiv = document.createElement("div");
                    endDiv.innerHTML = "Deine Gesundheit liegt bei <span class=\"lifepoints\">" + Textadventure.player.hp + "</span> </br> <br> Du wurdest von <span class=\"enemy\">" + Textadventure.currentRoom.roomEnemy.type + " </span> besiegt.";
                    document.body.innerHTML = "";
                    firstDiv.innerHTML = "GAME OVER";
                    allElements.push(firstDiv, endDiv);
                    break;
            }
            allElements.forEach(element => {
                document.body.appendChild(element);
            });
        }
        /////////////////////// loadGame //////////////////////////////
        static loadGame(_inputLowerElement) {
            const allElements = [];
            const seperatorDiv = document.createElement("div");
            const firstDiv = document.createElement("div");
            const inputField = document.createElement("input");
            seperatorDiv.className = "seperator";
            inputField.id = "consoleInput input";
            switch (_inputLowerElement) {
                case "createconsole":
                    const uploadInput = document.createElement("input");
                    const backDiv = document.createElement("div");
                    const submitBtn = document.createElement("button");
                    uploadInput.type = "file";
                    uploadInput.id = "uploadBtn";
                    submitBtn.id = "loadBtn";
                    submitBtn.innerHTML = "Gamefile Hochladen";
                    firstDiv.innerHTML = Textadventure.SearchContent.search("loadMessage");
                    backDiv.innerHTML = Textadventure.SearchContent.search("back");
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    allElements.push(seperatorDiv, firstDiv, backDiv, uploadInput, submitBtn, inputField);
                    break;
                case "b":
                    Textadventure.gameStage = "start";
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    ConsoleOutput.filterConsoleType("start");
                    break;
                case "gameloaded":
                    firstDiv.innerHTML = Textadventure.SearchContent.search("gameLoaded");
                    allElements.push(seperatorDiv, firstDiv, inputField);
                    ConsoleOutput.deleteConsole(_inputLowerElement);
                    Textadventure.gameStage = "inGame";
                    break;
            }
            allElements.forEach(element => {
                document.body.appendChild(element);
            });
            document.getElementById("consoleInput input").focus();
        }
        /////////////////////// deleteConsole //////////////////////////////
        static deleteConsole(_input) {
            const inputFieldCheck = document.getElementById("consoleInput input");
            if (inputFieldCheck != null && Textadventure.checkInput(_input)) {
                document.body.removeChild(inputFieldCheck);
            }
            if (document.getElementById("uploadBtn") != undefined && (Textadventure.gameStage == "start" || Textadventure.gameStage == "loadGame")) {
                const removeInput = document.getElementById("uploadBtn");
                const removeSubmitBtn = document.getElementById("loadBtn");
                document.body.removeChild(removeInput);
                document.body.removeChild(removeSubmitBtn);
            }
        }
    }
    Textadventure.ConsoleOutput = ConsoleOutput;
})(Textadventure || (Textadventure = {}));
/// <reference path="./Rooms/CreateRooms.ts" />
/// <reference path="./Creatures/Player.ts" />
/// <reference path="./CreateConsole/ConsoleOutput.ts" />
/// <reference path="./Inventar.ts" />
/// <reference path="./Items/UsableItems.ts" />
/// <reference path="./Items/Armor.ts" />
/// <reference path="./Items/Weapon.ts" />
var Textadventure;
/// <reference path="./Rooms/CreateRooms.ts" />
/// <reference path="./Creatures/Player.ts" />
/// <reference path="./CreateConsole/ConsoleOutput.ts" />
/// <reference path="./Inventar.ts" />
/// <reference path="./Items/UsableItems.ts" />
/// <reference path="./Items/Armor.ts" />
/// <reference path="./Items/Weapon.ts" />
(function (Textadventure) {
    Textadventure.gameStage = "start";
    Textadventure.player = new Textadventure.Player(100, new Textadventure.Stick, new Textadventure.Clothing);
    Textadventure.inventory = new Textadventure.Inventar([new Textadventure.HealPortion]);
    (async function main() {
        Textadventure.storyboard = await (await fetch("./contentElement.json")).json();
        Textadventure.ConsoleOutput.filterConsoleType("start");
        while (Textadventure.gameStage != "end") {
            const inputString = await Textadventure.getInput();
            Textadventure.ConsoleOutput.filterConsoleType(inputString);
            Textadventure.player.ifGameOver();
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
var Textadventure;
(function (Textadventure) {
    class GenerateSaveFile {
        constructor() {
            this.currentRoomName = Textadventure.currentRoom.roomName;
            this.currentWeapon = Textadventure.player.weapon;
            this.currentArmor = Textadventure.player.armor;
            this.currentinventory = Textadventure.inventory;
            this.currentHP = Textadventure.player.hp;
            this.currentEvent = Textadventure.currentRoom.roomEvent;
            this.currentItem = Textadventure.currentRoom.roomItem;
        }
    }
    Textadventure.GenerateSaveFile = GenerateSaveFile;
})(Textadventure || (Textadventure = {}));
var Textadventure;
(function (Textadventure) {
    class SaveLoad {
        static saveGame() {
            const myJsonString = JSON.stringify(new Textadventure.GenerateSaveFile);
            const fileName = "GameSave";
            const myJsonBlob = new Blob([myJsonString]);
            let dataUri = URL.createObjectURL(myJsonBlob);
            let exportFileName = fileName + ".json";
            let linkElement = document.createElement("a");
            linkElement.setAttribute("href", dataUri);
            linkElement.setAttribute("download", exportFileName);
            linkElement.click();
        }
        static roomNameToRoom(_roomName) {
            for (let i = 0; i < Textadventure.allRooms.length; i++) {
                if (_roomName == Textadventure.allRooms[i].roomName) {
                    Textadventure.currentRoom = Textadventure.allRooms[i];
                }
            }
        }
        static async loadGame() {
            Textadventure.ConsoleOutput.filterConsoleType("createConsole");
            document.getElementById("loadBtn").addEventListener("click", async () => {
                const uploadElement = document.getElementById("uploadBtn");
                if (uploadElement.files[0]) {
                    const myFile = uploadElement.files[0];
                    const myFileArray = JSON.parse(await myFile.text());
                    SaveLoad.roomNameToRoom(myFileArray.currentRoomName);
                    Textadventure.player.hp = myFileArray.currentHP;
                    Textadventure.player.weapon = myFileArray.currentWeapon;
                    Textadventure.player.armor = myFileArray.currentArmor;
                    Textadventure.inventory = myFileArray.currentinventory;
                    Textadventure.currentRoom.roomItem = myFileArray.currentItem;
                    Textadventure.currentRoom.roomEvent = myFileArray.currentEvent;
                    Textadventure.ConsoleOutput.filterConsoleType("gameLoaded");
                    if (Textadventure.currentRoom.roomEnemy != false) {
                        Textadventure.Creature.removeEnemyFromRoom();
                    }
                }
            });
        }
    }
    Textadventure.SaveLoad = SaveLoad;
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
                if (lowerInput == "b" || lowerInput == "createconsole" || lowerInput == "gameloaded")
                    isCorrect = true;
                break;
            case "inGame":
                allowInput.push("hilfe", "us", "iv", "ein", "heiltrank", "brandbombe", "gehe r", "gehe l", "gehe g", "falseway", "trueway", "a", "enemyinroom", "gehe zurück", "gesundheit", "speichern", "b");
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