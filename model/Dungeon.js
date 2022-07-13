// @ts-check

/** 
 * A link is a point that links to a dungeon
 * @typedef {{dungeon:Dungeon, point:Point}|undefined} link
 */


import Point from './Point.js';
export default class Dungeon {
    /**
     * @param {number} width 
     * @param {number} height 
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.door = new Point(999, 999);
        this.exit = new Point(999, 999);
        /** @type {link} */ this.doorLink;
        /** @type {link} */ this.exitLink;
    }
}