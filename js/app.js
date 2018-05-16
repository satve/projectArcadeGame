//function to make Arcade game
const levelCounter = document.querySelector('.level');

// enemy object
var Enemy = function (x, y, speed) {
    this.x = x,
        this.y = y,
        this.speed = speed,
        this.sprite = 'images/enemy-bug.png';
};

// update enemy position
Enemy.prototype.update = function (dt) {
    this.x += this.speed * 100 * dt;

    if (this.x >= 505) {
        this.x = -200
    }

    if ((this.x + 75 > player.x) && (this.x < player.x + 20) && (player.y < this.y + 20) && (player.y + 20 > this.y)) {
        player.x = 205;
        player.y = 410;

        if (player.level > 1) {
            player.level = 1; // reset level to 1
            levelCounter.textContent = player.level;
        }
    }
};

Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player  object
const Player = function (x, y) {
    this.x = x,
        this.y = y,
        this.sprite = 'images/char-boy.png';
    this.level = 1;
}

//update player position
Player.prototype.update = function (dt) {
    if (this.y < 40) {
        endGame();
        player.x = 205;
        player.y = 410;
    }
}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//  function to set the movement of player
Player.prototype.handleInput = function (direction) {
    if (direction == "left" && this.x >= 1) {
        this.x = this.x - 72;
    } else if (direction == "right" && this.x <= 380) {
        this.x = this.x + 70;
    } else if (direction == "up" && this.y >= 1) {
        this.y = this.y - 90;
    } else if (direction == "down" && this.y <= 330) {
        this.y = this.y + 100;
    }
}

//new instance of enemy object and place them in allEnemies array
const enemy1 = new Enemy(-400, 60, 1);
const enemy2 = new Enemy(-600, 145, 1);
const enemy3 = new Enemy(-500, 230, 1);
const enemy4 = new Enemy(-280, 145, 1);

const allEnemies = [enemy1, enemy2, enemy3, enemy4];

// new player 
const player = new Player(205, 410);

//add event listener to keys.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// end game popup alert 
function endGame() {
    player.level++; // count level
    levelCounter.textContent = player.level;
    alert("Congrats.. YOU WON");

    //incresing enemy speed
    enemy1.speed += 1;
    enemy2.speed += 1;
    enemy3.speed += 1;
    enemy4.speed += 1;
};