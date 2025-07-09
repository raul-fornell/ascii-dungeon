// @ts-check

import { setDungeonDoor, setDungeonDoorLinkedTo, setDungeonExit, setDungeonExitLinkedTo } from "./functions/dungeon.js";
import Dungeon from "./model/dungeon.js";

const entrance = new Dungeon(10, 9);
setDungeonDoor(entrance, 2, 8);
setDungeonExit(entrance, 7, 0);

const hall = new Dungeon(5, 8);
setDungeonDoor(hall, 2, 7);
setDungeonExit(hall, 4, 2);
setDungeonDoorLinkedTo(hall, entrance, entrance.exit);

setDungeonExitLinkedTo(entrance, hall, hall.door);

const corridor = new Dungeon(15, 5);
setDungeonDoor(corridor, 0, 2);
setDungeonDoorLinkedTo(corridor, hall, hall.exit);

setDungeonExitLinkedTo(hall, corridor, corridor.door);

export default [entrance, hall, corridor];