
namespace Textadventure {
  export class Inventar {
    public currentInventar: Item[];

    constructor(_currentInventar: Item[]) {
      this.currentInventar = _currentInventar;
    }

    static removeItem(_ItemToRemove: Item): void {
      const item: number = inventar.currentInventar.indexOf(_ItemToRemove);
      inventar.currentInventar.splice(item, 1);
    }

    public addItem(_newItem: Item): string {
      if ((_newItem as Weapon).type == "Weapon") {
        player.changeWeapon((_newItem as Weapon));
        return "weapon";
      }
      else {
        inventar.currentInventar.push(_newItem);
        return "noWeapon";
      }
    }
  }
}
