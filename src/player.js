class Player {

    constructor(config) {
        this.config = config;
        this.x = config.canvas.x / 2;
        this.y = config.canvas.y / 2;
    }

    walk() {
        const step = 2;
        if (keyIsDown(38)) {
            this.y = this.y - step;
        }
        if (keyIsDown(39)) {
            this.x = this.x + step;
        }
        if (keyIsDown(40)) {
            this.y = this.y + step;
        }
        if (keyIsDown(37)) {
            this.x = this.x - step;
        }
    }


    draw() {
        stroke('purple'); // Change the color
        strokeWeight(10);
        point(this.x, this.y);
    }

    drawLineTo(x2, y2) {

        stroke('green'); // Change the color
        strokeWeight(10);
        point(x2, y2);

        const x1 = this.x;
        const y1 = this.y;

        const m = (y2 - y1) / (x2 - x1);

        console.log(m);
        const x3 = x1 > x2 ? 0 : this.config.canvas.x;
        const y3 = ( m * (x3 - x1)) + y1;
        stroke('green'); // Change the color
        strokeWeight(5);
        line(x1, y1, x3, y3);
    }
}
