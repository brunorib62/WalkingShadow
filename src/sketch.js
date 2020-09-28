const config = {
    canvas: {
        x: 1500,
        y: 1000
    }
}

const player = new Player(config.canvas.x / 2, config.canvas.y / 2);

function setup() {
    createCanvas(config.canvas.x, config.canvas.y);
}

function draw() {
    clear();
    player.walk();
    player.draw();
}
