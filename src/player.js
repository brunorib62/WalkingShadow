class Player {

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    walk() {
        if (keyIsDown(38)) {
            this.y--;
        }
        if (keyIsDown(39)) {
            this.x++;
        }
        if (keyIsDown(40)) {
            this.y++;
        }
        if (keyIsDown(37)) {
            this.x--;
        }
    }


    draw() {
        console.log(this.x,this.y);
        point(this.x, this.y);
        stroke('purple'); // Change the color
        strokeWeight(10);
    }
}
