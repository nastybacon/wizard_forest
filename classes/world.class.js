class World {
    // let brauch man bei Klassen auch nicht
    character = new Character(); // Character definieren
    enemies = [ // Gegner 
        new Enemy(),
        new Enemy(),
        new Enemy(),
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Objekt wieder löschen

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(enemy => {

            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);

        });

        let self = this; // alter Hack bei OO
        requestAnimationFrame(function() {
            self.draw(); // wird so häufig aufgerufen, wie die Grafikkarte es zulässt
        });
    }
}