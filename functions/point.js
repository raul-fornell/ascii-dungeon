// @ts-check

import Point from "../model/Point.js";

/**
 * 
 * @param {Point} point 
 * @param {number} x 
 * @param {number} y 
 * @returns {boolean}
 */
export function pointIs(point, x, y) {
    return point.x === x && point.y === y;
}

/**
 * @param {Point[]} points 
 * @returns {boolean}
 */
export function arePointsEqual(...points) {
    let lastPoint = points[0];
    for (const point of points) {
        if (pointIs(lastPoint, point.x, point.y) === false) {
            return false;
        }
    }
    return true;
}

/**
 * @param {Point} point
 * @returns {{x:number,y:number}}
 */
export function clonePoint(point) {
    return new Point(point.x, point.y);
}

export function addToPoint(point, x, y) {
    return new Point(point.x + x, point.y + y);
}