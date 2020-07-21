/// <reference path="./Room.ts" />
/// <reference path="../Events/HealEvent.ts" />
/// <reference path="../Creatures/Goblin.ts" />

namespace Textadventure {
  export let allRooms: Room[] = [];
  // (_roomEvent: Event | boolean, _roomEnemy: Creature, _roomItem: Item, _directions: string[left,right,forward])

  // A-Rooms
  export const a1: Room = new Room(new HealEvent, new Goblin, false, ["", "", "a2"]);
  export const a2: Room = new Room(new HealEvent, new Goblin, false, ["", "b2", "a3"]);
  export const a3: Room = new Room(new HealEvent, new Goblin, false, ["", "b3", ""]);
  export const a4: Room = new Room(new HealEvent, new Goblin, false, ["", "", ""]); //TODO: OneWay
  export const a5: Room = new Room(new HealEvent, new Goblin, false, ["", "a6", ""]);
  export const a6: Room = new Room(new HealEvent, new Goblin, false, ["", "", ""]); // TODO: Finish

  allRooms.push(a1, a2, a3, a4, a5, a6);

  //B-Rooms
  export const b1: Room = new Room(new HealEvent, new Goblin, false, ["", "", ""]); //TODO: OneWay
  export const b2: Room = new Room(new HealEvent, new Goblin, false, ["b1", "", "c2"]);
  export const b3: Room = new Room(new HealEvent, new Goblin, false, ["b2", "", ""]);
  export const b4: Room = new Room(new HealEvent, new Goblin, false, ["", "", "a4"]);
  export const b5: Room = new Room(new HealEvent, new Goblin, false, ["", "b6", "a5"]);
  export const b6: Room = new Room(new HealEvent, new Goblin, false, ["c6", "", ""]);

  allRooms.push(b1, b2, b3, b4, b5, b6);

  //C-Rooms
  export const c1: Room = new Room(new HealEvent, new Goblin, false, ["d1", "", ""]);
  export const c2: Room = new Room(new HealEvent, new Goblin, false, ["c3", "c1", "d2"]);
  export const c3: Room = new Room(new HealEvent, new Goblin, false, ["", "", ""]); //TODO: OneWay
  export const c4: Room = new Room(new HealEvent, new Goblin, false, ["", "c5", "b4"]);
  export const c5: Room = new Room(new HealEvent, new Goblin, false, ["b5", "", ""]);
  export const c6: Room = new Room(new HealEvent, new Goblin, false, ["", "", ""]); //TODO: OneWay

  allRooms.push(c1, c2, c3, c4, c5, c6);

  //D-Rooms
  export const d1: Room = new Room(new HealEvent, new Goblin, false, ["", "", "e1"]);
  export const d2: Room = new Room(new HealEvent, new Goblin, false, ["d3", "", ""]);
  export const d3: Room = new Room(new HealEvent, new Goblin, false, ["", "e3", ""]);
  export const d4: Room = new Room(new HealEvent, new Goblin, false, ["", "", "c4"]);
  export const d5: Room = new Room(new HealEvent, new Goblin, false, ["", "", "e5"]);
  export const d6: Room = new Room(new HealEvent, new Goblin, false, ["d5", "", ""]);

  allRooms.push(d1, d2, d3, d4, d5, d6);

  //E-Rooms
  export const e1: Room = new Room(new HealEvent, new Goblin, false, ["", "", "f1"]);
  export const e2: Room = new Room(new HealEvent, new Goblin, false, ["", "", "e1"]);
  export const e3: Room = new Room(new HealEvent, new Goblin, false, ["", "e2", ""]);
  export const e4: Room = new Room(new HealEvent, new Goblin, false, ["", "d4", ""]);
  export const e5: Room = new Room(new HealEvent, new Goblin, false, ["", "", "e4"]);
  export const e6: Room = new Room(new HealEvent, new Goblin, false, ["", "", "d6"]);

  allRooms.push(e1, e2, e3, e4, e5, e6);

  //F-Rooms
  export const f1: Room = new Room(new HealEvent, new Goblin, false, ["f2", "", ""]);
  export const f2: Room = new Room(new HealEvent, new Goblin, false, ["", "", "f3"]);
  export const f3: Room = new Room(new HealEvent, new Goblin, false, ["g4", "", "f4"]);
  export const f4: Room = new Room(new HealEvent, new Goblin, false, ["", "", "f5"]);
  export const f5: Room = new Room(new HealEvent, new Goblin, false, ["", "", ""]); //TODO: OneWay
  export const f6: Room = new Room(new HealEvent, new Goblin, false, ["", "", "e6"]);

  allRooms.push(f1, f2, f3, f4, f5, f6);

  //G-Rooms
  export const g1: Room = new Room(new HealEvent, new Goblin, false, ["h1", "", ""]);
  export const g2: Room = new Room(new HealEvent, new Goblin, false, ["", "", "g1"]);
  export const g3: Room = new Room(new HealEvent, new Goblin, false, ["g4", "g2", "h3"]);
  export const g4: Room = new Room(new HealEvent, new Goblin, false, ["", "h4", ""]);
  export const g6: Room = new Room(new HealEvent, new Goblin, false, ["", "", "f6"]);

  allRooms.push(g1, g2, g3, g4, g6);

  //H-Rooms
  export const h1: Room = new Room(new HealEvent, new Goblin, false, ["h2", "", ""]);
  export const h2: Room = new Room(new HealEvent, new Goblin, false, ["", "", ""]); //TODO: OneWay
  export const h3: Room = new Room(new HealEvent, new Goblin, false, ["h4", "", ""]);
  export const h4: Room = new Room(new HealEvent, new Goblin, false, ["", "", "h5"]);
  export const h5: Room = new Room(new HealEvent, new Goblin, false, ["", "", "h6"]);
  export const h6: Room = new Room(new HealEvent, new Goblin, false, ["g6", "", ""]);

  allRooms.push(h1, h2, h3, h4, h5, h6);

}
