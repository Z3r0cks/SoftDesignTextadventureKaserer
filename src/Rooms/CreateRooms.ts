/// <reference path="./Room.ts" />

namespace Textadventure {
  export let allRooms: Room[] = [];
  // constructor(_roomEvents: number[], _roomEnemys: number[], _directions: string[])

  // A-Rooms
  const a1: Room = new Room([1, 2, 3], [1, 2, 3], ["a2", "", ""]);
  const a2: Room = new Room([1, 2, 3], [1, 2, 3], ["a3", "b2", ""]);
  const a3: Room = new Room([1, 2, 3], [1, 2, 3], ["", "b3", ""]);
  const a4: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", ""]); //TODO: OneWay
  const a5: Room = new Room([1, 2, 3], [1, 2, 3], ["", "a6", ""]);
  const a6: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", ""]); // TODO: Finish

  allRooms.push(a1, a2, a3, a4, a5, a6);

  //B-Rooms
  const b1: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", ""]); //TODO: OneWay
  const b2: Room = new Room([1, 2, 3], [1, 2, 3], ["b1", "", "c2"]);
  const b3: Room = new Room([1, 2, 3], [1, 2, 3], ["b2", "", ""]);
  const b4: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", "a4"]);
  const b5: Room = new Room([1, 2, 3], [1, 2, 3], ["", "b6", "a5"]);
  const b6: Room = new Room([1, 2, 3], [1, 2, 3], ["c6", "", ""]);

  allRooms.push(b1, b2, b3, b4, b5, b6);

  //C-Rooms
  const c1: Room = new Room([1, 2, 3], [1, 2, 3], ["d1", "", ""]);
  const c2: Room = new Room([1, 2, 3], [1, 2, 3], ["c3", "c1", "d2"]);
  const c3: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", ""]); //TODO: OneWay
  const c4: Room = new Room([1, 2, 3], [1, 2, 3], ["", "c5", "b4"]);
  const c5: Room = new Room([1, 2, 3], [1, 2, 3], ["b5", "", ""]);
  const c6: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", ""]); //TODO: OneWay

  allRooms.push(c1, c2, c3, c4, c5, c6);

  //D-Rooms
  const d1: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", "e1"]);
  const d2: Room = new Room([1, 2, 3], [1, 2, 3], ["d3", "", ""]);
  const d3: Room = new Room([1, 2, 3], [1, 2, 3], ["", "e3", ""]);
  const d4: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", "c4"]);
  const d5: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", "e5"]);
  const d6: Room = new Room([1, 2, 3], [1, 2, 3], ["d5", "", ""]);

  allRooms.push(d1, d2, d3, d4, d5, d6);

  //E-Rooms
  const e1: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", "f1"]);
  const e2: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", "e1"]);
  const e3: Room = new Room([1, 2, 3], [1, 2, 3], ["", "e2", ""]);
  const e4: Room = new Room([1, 2, 3], [1, 2, 3], ["", "d4", ""]);
  const e5: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", "e4"]);
  const e6: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", "d6"]);

  allRooms.push(e1, e2, e3, e4, e5, e6);

  //F-Rooms
  const f1: Room = new Room([1, 2, 3], [1, 2, 3], ["f2", "", ""]);
  const f2: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", "f3"]);
  const f3: Room = new Room([1, 2, 3], [1, 2, 3], ["g4", "", "f4"]);
  const f4: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", "f5"]);
  const f5: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", ""]); //TODO: OneWay
  const f6: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", "e6"]);

  allRooms.push(f1, f2, f3, f4, f5, f6);

  //G-Rooms
  const g1: Room = new Room([1, 2, 3], [1, 2, 3], ["h1", "", ""]);
  const g2: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", "g1"]);
  const g3: Room = new Room([1, 2, 3], [1, 2, 3], ["g4", "g2", "h3"]);
  const g4: Room = new Room([1, 2, 3], [1, 2, 3], ["", "h4", ""]);
  const g6: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", "f6"]);

  allRooms.push(g1, g2, g3, g4, g6);

  //H-Rooms
  const h1: Room = new Room([1, 2, 3], [1, 2, 3], ["h2", "", ""]);
  const h2: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", ""]); //TODO: OneWay
  const h3: Room = new Room([1, 2, 3], [1, 2, 3], ["h4", "", ""]);
  const h4: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", "h5"]);
  const h5: Room = new Room([1, 2, 3], [1, 2, 3], ["", "", "h6"]);
  const h6: Room = new Room([1, 2, 3], [1, 2, 3], ["g6", "", ""]);

  allRooms.push(h1, h2, h3, h4, h5, h6);

}
