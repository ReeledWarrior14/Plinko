var Engine = Matter.Engine;
var Worlds = Matter.World;
var Bodies = Matter.Bodies;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;

var engine, world;

var ground;

var trashCan, paperBall;

var mConstraint, mouse; 

var balls = [];
var plinkos = [];
// var f = 0;

var score = 0;

function setup(){
    var canvas = createCanvas(600, 700);

    engine = Engine.create();
    world = engine.world;

    ground = new GROUND(width/2, height, width, 50);

    plinky0 = new SIDE(-50, height/2, 100, height + 200);
    plinky1 = new SIDE(100, 637, 10, 75);
    plinky2 = new SIDE(200, 637, 10, 75);
    plinky3 = new SIDE(300, 637, 10, 75);
    plinky4 = new SIDE(400, 637, 10, 75);
    plinky5 = new SIDE(500, 637, 10, 75);
    plinky10 = new SIDE(650, height/2, 100, height + 200);
    plinky100 = new SIDE(width/2, -100, width, 50);

    // plinko = new BALLZ(300, 300, 50);

    var mouse1 = Mouse.create(canvas.clientWidth, canvas.clientHeight);
    var options = {
        mouse : mouse1,
    }
    mConstraint = MouseConstraint.create(engine, options);
    Worlds.add(world, mConstraint);

    for (var a = 50; a < 600; a = a + 100){
        for (var b = 100; b < 600; b = b + 100){
            plinkos.push(new BALLZ(a, b, 10));
        }
    }
    for (var y = 150; y < 600; y = y + 100){
        for (var x = 100; x < 600; x = x + 100){
            plinkos.push(new BALLZ(x, y, 10));
        }
    }
}

function draw(){
    Engine.update(engine);

    background(150);

    push();
    fill(0);
    ground.displayGround();
    pop();

    for (var i = 0; i < balls.length; i++){
        balls[i].displayBall();
        // score = score + balls[i].score;
    }

    push();
    fill(150);
    plinky0.displaySide();
    plinky1.displaySide();
    plinky2.displaySide();
    plinky3.displaySide();
    plinky4.displaySide();
    plinky5.displaySide();
    plinky10.displaySide();
    pop();

    // plinko.displayBallZ(); 

    // for (var a = 50; a < 600; a = a + 100){
    //     for (var b = 100; b < 600; b = b + 100){
    //         plinkos.push(new BALLZ(a, b, 5));
    //     }
    // }
    // for (var y = 150; y < 600; y = y + 100){
    //     for (var x = 100; x < 600; x = x + 100){
    //         plinkos.push(new BALLZ(x, y, 5));
    //     }
    // }
    for (var g = 0; g < plinkos.length; g++){
        plinkos[g].displayBallZ();
    }

    push();
    fill("blue");
    text(mouseX, 10, 15);
    text(mouseY, 35, 15);

    textSize(20);
    text('200', 35, 600);
    text('250', 135, 600);
    text('300', 235, 600);
    text('300', 335, 600);
    text('250', 435, 600);
    text('200', 535, 600);

    // for (var t = 0; t < balls.length; i++){
    //     score = score + balls[t].score;
    // }
    // textSize(25);
    text(score, 535, 30);
    pop();
}

function mousePressed(){
    balls.push(new BALL(mouseX, mouseY, 15));
}