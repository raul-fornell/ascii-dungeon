// @ts-check

/** @typedef {import('../model/Character').Bounds} Bounds */

import { Character, Dungeon, Point } from '../model/index.js'; // TODO: index.js can be omitted in module?
import { getDungeonMatrix } from './Dungeon.js';
import { addToPoint } from './point.js';

/**
 * @param {Character} character
 * @param {number} x 
 * @param {number} y 
 */
export function setCharacterPosition(character, x, y) {
    character.position = new Point(x, y);
}

/**
 * @param {Bounds} bounds
 * @param {Point} destiny 
 * @returns {boolean}
 */
export function isNotOutOfBoundsAndDestinyIsEmpty(bounds, destiny) {
    return bounds[destiny.y] && bounds[destiny.y][destiny.x] === ' ';
}

/**
 * @param {Character} character
 * @param {number} x 
 * @param {number} y 
 * @returns {Point}
 */
export function moveCharacter(character, x, y) {
    const destiny = addToPoint(character.position, x, y);
    if (isNotOutOfBoundsAndDestinyIsEmpty(character.bounds, destiny)) {
        character.position = destiny;
    }
    return character.position;
}

/**
 * @param {Character} character
 * @param {Dungeon} dungeon 
 */
export function setCharacterBounds(character, dungeon) {
    character.bounds = getDungeonMatrix(dungeon);
}
