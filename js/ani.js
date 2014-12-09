var stage;

function init(){
    var screenWidth = $(window).width();
    /*$("#myCanvas").css("width", screenWidth);
    $("#myCanvas").css("height", "500px");*/
    stage = new createjs.Stage("myCanvas");

    var ball = new createjs.Shape();
    ball.graphics.beginFill("#000000").drawCircle(0, 0, 10);
    ball.x = 10;
    ball.y = 15;

    var mazeTopOutline = new createjs.Shape();
    var mazeEnd = screenWidth - (screenWidth /4 );
    mazeTopOutline.graphics.setStrokeStyle(2);
    mazeTopOutline.graphics.beginStroke("#000000");
    mazeTopOutline.graphics.moveTo(10, 10);
    mazeTopOutline.graphics.lineTo(700, 10);
    mazeTopOutline.graphics.lineTo(700, 250);
    mazeTopOutline.graphics.endStroke();

    var mazeBottomOutline = new createjs.Shape();
    mazeBottomOutline.graphics.setStrokeStyle(2);
    mazeBottomOutline.graphics.beginStroke("#000000");
    mazeBottomOutline.graphics.moveTo(700, 300);
    mazeBottomOutline.graphics.lineTo(700, 400);
    mazeBottomOutline.graphics.lineTo(10, 400);
    mazeBottomOutline.graphics.lineTo(10, 70);
    mazeBottomOutline.graphics.endStroke();

    stage.addChild(mazeBottomOutline);
    stage.addChild(mazeTopOutline);

    createjs.Tween.get(ball, {loop:true}).to({x:450}, 3000).to({x:50}, 3000);

    createjs.Ticker.addEventListener("tick", tick);

    stage.addChild(ball);

    function tick(event)
    {
        stage.update();
    }
}

