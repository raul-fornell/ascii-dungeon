// @ts-check

/**
 * A two dimension matrix of symbols
 * @typedef {string[][]} Bounds
 */

import { Dungeon, Point } from './index.js';
export default class Character {

    /**
     * @param {string} symbol 
     * @param {Point} origin
     */
    constructor(symbol, origin) {
        this.symbol = symbol;
        this.position = origin;
        /** @type {Bounds} */ this.bounds = []
    }
}