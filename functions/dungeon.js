// @ts-check

/** @typedef {import('../model/Dungeon').link} link */
/** @typedef {import('../model/Character').Bounds} Bounds */

import { arePointsEqual, pointIs } from './point.js';
import { Dungeon, Point } from '../model/index.js';

/**
 * @param {Dungeon} dungeon
 * @param {number} x 
 * @param {number} y 
 */
export function setDungeonDoor(dungeon, x, y) {
    dungeon.door = new Point(x, y);
}

/**
 * @param {Dungeon} dungeon
 * @param {number} x 
 * @param {number} y 
 */
export function setDungeonExit(dungeon, x, y) {
    dungeon.exit = new Point(x, y);
}

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {boolean}
 */
export function isDungeonPointInner(dungeon, x, y) {
    return x > 0 && x < dungeon.width - 1 && y < dungeon.height - 1 && y > 0;
}

/**     
 * @param {Dungeon} parentDungeon 
 * @param {Dungeon} dungeon 
 * @param {Point} point
 */
export function setDungeonDoorLinkedTo(parentDungeon, dungeon, point) {
    parentDungeon.doorLink = { dungeon, point };
}

/**     
 * @param {Dungeon} parentDungeon 
 * @param {Dungeon} dungeon 
 * @param {Point} point
 */
export function setDungeonExitLinkedTo(parentDungeon, dungeon, point) {
    parentDungeon.exitLink = { dungeon, point };
}

/**
 * @param {Dungeon} dungeon
 * @param {number} cols 
 * @param {number} rows 
 * @returns {string}
 */
export function getDungeonSymbol(dungeon, cols, rows) {
    let symbol = '*'; // Wall
    if (isDungeonPointInner(dungeon, cols, rows) ||
        pointIs(dungeon.door, cols, rows) ||
        pointIs(dungeon.exit, cols, rows)
    ) {
        symbol = ' '; // Empty
    }
    return symbol;
}

/**
 * @param {Dungeon} dungeon
 * @returns {Bounds}
 */
export function getDungeonMatrix(dungeon) {
    const matrix = [];
    for (let rows = 0; rows < dungeon.height; rows++) {
        matrix[rows] = [getDungeonSymbol(dungeon, 0, rows)];
        for (let cols = 1; cols < dungeon.width; cols++) {
            matrix[rows].push(getDungeonSymbol(dungeon, cols, rows));
        }
    }
    return matrix;
}

/**
 * @param {Dungeon} dungeon
 * @param {Point} point 
 * @returns {link}
 */
export function getDungeonFromPosition(dungeon, point) {
    if (arePointsEqual(dungeon.door, point) && dungeon.doorLink) {
        return dungeon.doorLink;
    }
    if (arePointsEqual(dungeon.exit, point) && dungeon.exitLink) {
        return dungeon.exitLink;
    }
}
