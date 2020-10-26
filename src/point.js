export default class Point {
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = 10;
        this.height = 10;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}