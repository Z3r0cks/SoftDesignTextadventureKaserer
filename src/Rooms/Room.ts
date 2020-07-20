namespace Textadventure {
  export class Room {
    public roomEvents: number[];
    public roomEnemys: number[];
    public posDirection: string[];

    public constructor(_roomEvents: number[], _roomEnemys: number[], _directions: string[]) {
      this.roomEnemys = _roomEnemys;
      this.roomEvents = _roomEvents;
      this.posDirection = _directions;
    }

    // checkOutPossibleWays(_left: string, _right: string, _forward: string): string {
    //   if (_left == "" && _right == "" && _forward == "") {
    //     return "deadEnd";
    //   }
    // }
  }
}

