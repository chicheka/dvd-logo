let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let dvd = document.getElementById("dvd");

let x = 1;
let y = 1;
let xMove = 1;
let yMove = 1;
let corners = 0;

document.getElementById("stop").disabled = true;

document.getElementById("start").onclick = function(){
    document.getElementById("corners").innerHTML = "corners hit: " + corners;
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    canvas.width = width;
    canvas.height = height;

    let idOfDvd = setInterval(function(){
        context.fillStyle = "#000000";
        context.fillRect(0, 0, width, height);
        context.drawImage(dvd, x, y);
        //bounce off
        if(x + 60 == width || x == 0){
            xMove *= -1;
            dvd = document.getElementById(randomColor());
        }
        if(y + 27 == height || y == 0){
            yMove *= -1;
            dvd = document.getElementById(randomColor());
        }
        //corners
        if((x + 60 == width || x == 0) && (y + 27 == height || y == 0)){
            corners++;
            document.getElementById("corners").innerHTML = "corners hit: " + corners;
        }
        x += xMove;
        y += yMove;

        document.getElementById("stop").onclick = function(){
            document.getElementById("start").disabled = false;
            document.getElementById("stop").disabled = true;
            context.fillStyle = "#000000";
            context.fillRect(0, 0, width, height);
            clearInterval(idOfDvd);
            x = 1;
            y = 1;
            xMove = 1;
            yMove = 1;
            corners = 0;
            dvd = document.getElementById("dvd");
        }
    }, 10);
}

let colorsAvailable = ["dvd-red", "dvd-yellow", "dvd-green", "dvd-cyan", "dvd-blue", "dvd-magenta"];

function randomColor(){
    let rand;
    let current;
    if (dvd.id != "dvd"){
        //detect the current color
        for (let i = 0; dvd.id != colorsAvailable[i - 1]; i++){
            current = i;
        }
        rand = Math.floor((Math.random() * 5) + 1) - 1;// from 0 to 4
        if(rand >= current) rand++;
        /*
         * if the current is green (2), then it won't be picked no matter what random number is chosen:
         *  0 1 2 3 4   <-- random number
         *  | | \ \ \
         *  | |  \ \ \
         *  | |   | | |
         *  V V   V V V
         *  0 1 2 3 4 5 <-- colors from red to magenta
         * */
    }
    //if logo is still white
    else rand = Math.floor((Math.random() * 6) + 1) - 1;

    return colorsAvailable[rand];
}
