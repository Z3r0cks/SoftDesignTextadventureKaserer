
namespace Textadventure {
  export class Inventar {
    public currentInventar: Item[];

    constructor(_currentInventar: Item[]) {
      this.currentInventar = _currentInventar;
    }

    static removeItem(_ItemToRemove: Item): void {
      const item: number = inventory.currentInventar.indexOf(_ItemToRemove);
      inventory.currentInventar.splice(item, 1);
    }

    public addItem(_newItem: Item): string {
      if ((_newItem as Weapon).type == "weapon") {
        player.changeWeapon((_newItem as Weapon));
        return "weapon";
      }
      else if ((_newItem as Armor).type == "armor") {
        player.changeArmor((_newItem as Armor));
        return "armor";
      }
      else {
        inventory.currentInventar.push(_newItem);
        return "noWeapon";
      }
    }
  }
}
