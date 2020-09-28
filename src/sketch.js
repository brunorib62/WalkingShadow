const config = {
    canvas: {
        x: 1500,
        y: 1000
    }
}

const player = new Player(config);

function setup() {
    createCanvas(config.canvas.x, config.canvas.y);
}

function draw() {
    clear();
    player.walk();
    player.draw();

    player.drawLineTo(200, 300);
}

function drawPoint(x,y) {
    stroke('green'); // Change the color
    strokeWeight(5);
    point(x, y);
}
