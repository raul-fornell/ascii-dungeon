// @ts-check

import dungeons from './dungeons.js';
import { Character, Point } from './model/index.js';
import { onKeyboardPressed } from './functions/keyboard.js';
import { setCharacterBounds } from './functions/Character.js';
import { getDungeonFromPosition } from './functions/Dungeon.js';
import { moveHero, renderDungeon } from './functions/game.js';

let currentDungeon = dungeons[0];
const canvas = document.querySelector('pre');
const hero = new Character('·', currentDungeon.door);

function render() {
    renderDungeon(canvas, currentDungeon, [hero]);
}

/**
 * @param {Point} position 
 */
function changeDungeon(position) {
    const struct = getDungeonFromPosition(currentDungeon, position);
    if (struct) {
        currentDungeon = struct.dungeon;
        hero.position = struct.point;
    }
}

/** 
 * @param {string} direction 
 */
function coreGameLoop(direction) {
    const heroPosition = moveHero(hero, direction);
    changeDungeon(heroPosition);
    setCharacterBounds(hero, currentDungeon);
    render();
}

setCharacterBounds(hero, currentDungeon);
onKeyboardPressed(coreGameLoop);
render();