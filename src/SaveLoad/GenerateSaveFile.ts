namespace Textadventure {
  export class GenerateSaveFile {
    public currentRoomName: string;
    public currentWeapon: Weapon;
    public currentArmor: Armor;
    public currentinventory: Inventar;
    public currentHP: number;
    public currentEvent: Event | boolean;
    public currentItem: Item | boolean;

    public constructor() {
      this.currentRoomName = currentRoom.roomName;
      this.currentWeapon = player.weapon;
      this.currentArmor = player.armor;
      this.currentinventory = inventory;
      this.currentHP = player.hp;
      this.currentEvent = currentRoom.roomEvent;
      this.currentItem = currentRoom.roomItem;
    }
  }
}
