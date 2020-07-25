namespace Textadventure {
  export class GenerateSaveFile {
    public currentRoom: Room;
    public currentWeapon: Weapon;
    public currentArmor: Armor;
    public currentinventory: Inventar;
    public currentHP: number;

    public constructor() {
      this.currentRoom = currentRoom;
      this.currentWeapon = player.weapon;
      this.currentArmor = player.armor;
      this.currentinventory = inventory;
      this.currentHP = player.hp;
    }
  }
}
