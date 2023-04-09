class World {
    // let brauch man bei Klassen auch nicht
    character = new Character(); // Character definieren
    enemies = [ // Gegner 
        new Enemy(),
        new Enemy(),
        new Enemy(),
    ];
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
    }
}