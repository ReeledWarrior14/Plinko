class BALL{
    constructor(x, y, r){
        var options2 = {
            restitution : 0.75,
            friction : 0,
            density : 1.2,
        }
        this.bodyC = Bodies.circle(x, y, r, options2);
        Worlds.add(world, this.bodyC);
        this.r = r;
        this.timer = 0;
        this.score = 0;
    }
    displayBall(){
        var pos = this.bodyC.position;
        var angle = this.bodyC.angle;
        this.timer++
        if(this.timer <= 1000){
            push();
            translate(pos.x, pos.y);
            rotate(angle * 4);
            ellipseMode(CENTER);
            ellipse(0, 0, this.r * 2);
            pop();
        }
        else{
            Worlds.remove(world, this.bodyC);
        }

        if (this.bodyC.speed < 4 && this.bodyC.position.y > 600){
            if ((this.bodyC.position.x > 0 && this.bodyC.position.x < 100 || this.bodyC.position.x > 500) && this.score < 200){
                this.score = this.score + 200;
                if(this.score == 200){
                    score = score + this.score;
                }
                // console.log(this.score);
            }
            if ((this.bodyC.position.x > 100 && this.bodyC.position.x < 200 || this.bodyC.position.x > 400 && this.bodyC.position.x < 500) && this.score < 250){
                this.score = this.score + 250;
                if(this.score == 250){
                    score = score + this.score;
                }
                // console.log(this.score);
            }
            if (this.bodyC.position.x > 200 && this.bodyC.position.x < 400 && this.score < 300){
                this.score = this.score + 300;
                if(this.score == 300){
                    score = score + this.score;
                }
                // console.log(this.score);
            }
        }
    }
}