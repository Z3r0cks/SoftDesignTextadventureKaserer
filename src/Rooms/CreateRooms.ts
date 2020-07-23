/// <reference path="./Room.ts" />
/// <reference path="../Events/HealEvent.ts" />
/// <reference path="../Creatures/Goblin.ts" />
/// <reference path="../Items/Weapon.ts" />
/// <reference path="../Items/HealPortion.ts" />

namespace Textadventure {
  // export let allRooms: Room[] = [];

  // create rooms
  // constructor(_roomEvent: Event | boolean, _roomEnemy: Creature | boolean, _roomItem: Item | boolean)

  // A-Rooms
  export const a1: Room = new Room("a1", new HealEvent, new Goblin, new Sword);
  export const a2: Room = new Room("a2", false, false, false);
  export const a3: Room = new Room("a3", new HealEvent, new Goblin, false);
  export const a4: Room = new Room("a4", new HealEvent, new Goblin, false); //TODO: OneWay
  export const a5: Room = new Room("a5", new HealEvent, new Goblin, false);
  export const a6: Room = new Room("a6", new HealEvent, new Goblin, false); // TODO: Finish

  //B-Rooms
  export const b1: Room = new Room("b1", new HealEvent, new Goblin, false); //TODO: OneWay
  export const b2: Room = new Room("b2", new HealEvent, new Goblin, false);
  export const b3: Room = new Room("b3", new HealEvent, new Goblin, false);
  export const b4: Room = new Room("b4", new HealEvent, new Goblin, false);
  export const b5: Room = new Room("b5", new HealEvent, new Goblin, false);
  export const b6: Room = new Room("b6", new HealEvent, new Goblin, false);

  //C-Rooms
  export const c1: Room = new Room("c1", new HealEvent, new Goblin, false);
  export const c2: Room = new Room("c2", new HealEvent, new Goblin, false);
  export const c3: Room = new Room("c3", new HealEvent, new Goblin, false); //TODO: OneWay
  export const c4: Room = new Room("c4", new HealEvent, new Goblin, false);
  export const c5: Room = new Room("c5", new HealEvent, new Goblin, false);
  export const c6: Room = new Room("c6", new HealEvent, new Goblin, false); //TODO: OneWay

  //D-Rooms
  export const d1: Room = new Room("d1", new HealEvent, new Goblin, false);
  export const d2: Room = new Room("d2", new HealEvent, new Goblin, false);
  export const d3: Room = new Room("d3", new HealEvent, new Goblin, false);
  export const d4: Room = new Room("d4", new HealEvent, new Goblin, false);
  export const d5: Room = new Room("d5", new HealEvent, new Goblin, false);
  export const d6: Room = new Room("d6", new HealEvent, new Goblin, false);

  //E-Rooms
  export const e1: Room = new Room("e1", new HealEvent, new Goblin, false);
  export const e2: Room = new Room("e2", new HealEvent, new Goblin, false);
  export const e3: Room = new Room("e3", new HealEvent, new Goblin, false);
  export const e4: Room = new Room("e4", new HealEvent, new Goblin, false);
  export const e5: Room = new Room("e5", new HealEvent, new Goblin, false);
  export const e6: Room = new Room("e6", new HealEvent, new Goblin, false);

  //F-Rooms
  export const f1: Room = new Room("f1", new HealEvent, new Goblin, false);
  export const f2: Room = new Room("f2", new HealEvent, new Goblin, false);
  export const f3: Room = new Room("f3", new HealEvent, new Goblin, false);
  export const f4: Room = new Room("f4", new HealEvent, new Goblin, false);
  export const f5: Room = new Room("f5", new HealEvent, new Goblin, false); //TODO: OneWay
  export const f6: Room = new Room("f6", new HealEvent, new Goblin, false);

  //G-Rooms
  export const g1: Room = new Room("g1", new HealEvent, new Goblin, false);
  export const g2: Room = new Room("g2", new HealEvent, new Goblin, false);
  export const g3: Room = new Room("g3", new HealEvent, new Goblin, false);
  export const g4: Room = new Room("g4", new HealEvent, new Goblin, false);
  export const g6: Room = new Room("g6", new HealEvent, new Goblin, false);

  //H-Rooms
  export const h1: Room = new Room("h1", new HealEvent, new Goblin, false);
  export const h2: Room = new Room("h2", new HealEvent, new Goblin, false); //TODO: OneWay
  export const h3: Room = new Room("h3", new HealEvent, new Goblin, false);
  export const h4: Room = new Room("h4", new HealEvent, new Goblin, false);
  export const h5: Room = new Room("h5", new HealEvent, new Goblin, false);
  export const h6: Room = new Room("h6", new HealEvent, new Goblin, false);

  // set posibleDirections
  // addPosRooms(_posLeft: Room | boolean, _posRight: Room | boolean, _posFoward: Room | boolean)

  // A-Rooms
  a1.addPosRooms(false, false, a2);
  a2.addPosRooms(false, b2, a3);
  a3.addPosRooms(false, b3, false);
  a4.addPosRooms(false, false, false); //TODO: OneWay
  a4.addPosRooms(false, a6, false);
  a6.addPosRooms(false, false, false); // TODO: Finish

  // B-Rooms
  b1.addPosRooms(false, false, false); //TODO: OneWay
  b2.addPosRooms(b1, false, c2);
  b3.addPosRooms(b2, false, false);
  b4.addPosRooms(false, false, a4);
  b5.addPosRooms(false, b6, a5);
  b6.addPosRooms(c6, false, false);

  //C-Rooms
  c1.addPosRooms(d1, false, false);
  c2.addPosRooms(c3, c1, c2);
  c3.addPosRooms(false, false, false); //TODO: OneWay
  c4.addPosRooms(false, c5, a4);
  c5.addPosRooms(b5, false, false);
  c6.addPosRooms(false, false, false); //TODO: OneWay

  //D-Rooms
  d1.addPosRooms(false, false, e1);
  d2.addPosRooms(d3, false, false);
  d3.addPosRooms(false, e3, false);
  d4.addPosRooms(false, false, c4);
  d5.addPosRooms(false, false, e5);
  d6.addPosRooms(d5, false, false);

  //E-Rooms
  e1.addPosRooms(false, false, f1);
  e2.addPosRooms(false, false, e1);
  e3.addPosRooms(false, e2, false);
  e4.addPosRooms(false, d4, false);
  e5.addPosRooms(false, false, e4);
  e6.addPosRooms(false, false, d6);

  //F-Rooms
  f1.addPosRooms(f2, false, false);
  f2.addPosRooms(false, false, f3);
  f3.addPosRooms(g4, false, f4);
  f4.addPosRooms(false, false, f5);
  f5.addPosRooms(false, false, false); //TODO: OneWay
  f6.addPosRooms(false, false, e6);

  //F-Rooms
  g1.addPosRooms(h1, false, false);
  g2.addPosRooms(false, false, g1);
  g3.addPosRooms(g4, g2, h3);
  g4.addPosRooms(false, h4, false);
  g6.addPosRooms(false, false, f6);

  //F-Rooms
  h1.addPosRooms(h2, false, false);
  h2.addPosRooms(false, false, false); //TODO: OneWay
  h3.addPosRooms(h4, false, false);
  h4.addPosRooms(false, false, h5);
  h5.addPosRooms(false, false, h6);
  h6.addPosRooms(g6, false, false);

  // allRooms.push(a1, a2, a3, a4, a5, a6, b1, b2, b3, b4, b5, b6, c1, c2, c3, c4, c5, c6, d1, d2, d3, d4, d5, d6, e1, e2, e3, e4, e5, e6, f1, f2, f3, f4, f5, f6, g1, g2, g3, g4, g6, h1, h2, h3, h4, h5, h6);
}
