// @ts-check

import { Character, Dungeon, Point } from '../model/index.js';
import { moveCharacter } from './character.js';
import { getDungeonMatrix } from './dungeon.js';

/**
 * 
 * @param {string[][]} matrix 
 * @returns {string}
 */
export function matrixToString(matrix) {
    let text = '';
    for (let row of matrix) {
        for (let col of row) {
            text += col;
        }
        text += '\n';
    }
    return text;
}

/**
 * 
 * @param {*} canvas 
 * @param {Dungeon} dungeon 
 * @param {Character[]} characters 
 */
export function renderDungeon(canvas, dungeon, characters) {
    const matrix = getDungeonMatrix(dungeon);
    characters.forEach(character => {
        const { x, y } = character.position;
        matrix[y][x] = character.symbol;
    });
    canvas.innerText = matrixToString(matrix);
}

/** 
 * @param {Character} hero 
 * @param {string} direction 
 */
export function moveHero(hero, direction) {
    switch (direction) {
        case "ArrowUp":
            return moveCharacter(hero, 0, -1);
        case "ArrowRight":
            return moveCharacter(hero, +1, 0);
        case "ArrowDown":
            return moveCharacter(hero, 0, +1);
        case "ArrowLeft":
            return moveCharacter(hero, -1, 0);
    }
    return hero.position;
}