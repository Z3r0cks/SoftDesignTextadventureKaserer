
namespace Textadventure {
  export class Inventar {
    public currentInventar: Item[];

    constructor(_currentInventar: Item[]) {
      this.currentInventar = _currentInventar;
    }

    public addItem(_newItem: Item): void {
      inventar.currentInventar.push(_newItem);
    }
  }
}
