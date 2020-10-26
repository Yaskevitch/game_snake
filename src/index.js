import Point from './point.js';
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

let point = new Point(10, 20, '#f00');
console.log(point);
point.draw(ctx);