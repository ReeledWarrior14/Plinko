class BALLZ{
    constructor(x, y, r){
        var options2 = {
            restitution : 1,
            friction : 0,
            isStatic : true,
        }
        this.bodyC = Bodies.circle(x, y, r, options2);
        Worlds.add(world, this.bodyC);
        this.r = r;
        this.timer = 0;
    }
    displayBallZ(){
        var pos = this.bodyC.position;
        var angle = this.bodyC.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle * 4);
        fill('cyan');
        ellipseMode(CENTER);
        ellipse(0, 0, this.r * 2);
        pop();
    }
}
