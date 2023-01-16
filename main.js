let getcan = document.getElementById("canvas");
let canvas = getcan.getContext("2d");
let dvd = document.getElementById("dvd");
let x = 1;
let y = 1;
let xMove = 1;
let yMove = 1;
document.getElementById("start").onclick = function(){
    setInterval(function(){
        canvas.fillStyle = "#000000";
        canvas.fillRect(0, 0, 600, 400);
        canvas.drawImage(dvd, x, y);
        if(x + 60 == 600){
            xMove = -1;
            dvd = document.getElementById(randomColor());
        }
        if(x == 0){
            xMove = 1;
            dvd = document.getElementById(randomColor());
        }
        if(y + 27 == 400){
            yMove = -1;
            dvd = document.getElementById(randomColor());
        }
        if(y == 0){
            yMove = 1;
            dvd = document.getElementById(randomColor());
        }
        x += xMove;
        y += yMove;
    }, 10);
}
function randomColor(){
    let rand = Math.floor((Math.random() * 6) + 1);
    switch(rand){
        case 1:
            return "dvd-red";
            break;
        case 2:
            return "dvd-yellow";
            break;
        case 3:
            return "dvd-green";
            break;
        case 4:
            return "dvd-cyan";
            break;
        case 5:
            return "dvd-blue";
            break;
        case 6:
            return "dvd-magenta";
            break;
    }
}
