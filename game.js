let canvas; // Canvas einbinden
let ctx; // malen
let character = new Image(); // Bild des Charakters

function init() {
    canvas = document.getElementById('canvas') // canvas laden
    ctx = canvas.getContext('2d');


    character.src = '../img/2_walk/2_WALK_000.png' // Bild vom Wizz einfügen


    ctx.drawImage(character, 20, 20, 50, 150); // Koordinaten und Parameter des Bildes
}

/**
 * OBJEKTE ERSTELLEN
 * 
 * ----- 01 - Canvas -----
 * -> 2D Welt + Elemente Links und Rechts bewegen
 * -> JS hat dafür ein Baukasten - Canvas - ähnliches, wie ein Container
 * -> hat automatisch eine X + Y Achse -> BILD 1.1
 * -> wir können an gewissen Koordinaten Bilder hinzufügen
 * 
 * -> Man kann z.B. ganz rechts ein Bild einfügen und für eine ms das Bild verschwinden lassen
 * -> schwar + fügen ein Bild ein + schwarz + fügen ein Bild ein usw
 * -> das geht so schnell, dass man das schwarze nicht mehr sieht
 * -> der Punkt (0,0) liegt links oben, nicht, wie bei Mathe BILD 1.2
 * 
 * -> zwei Bilder hintereinander einfügen - sieht aus, als würde er laufen
 * 
 * -> zwei Varianten verlinkt - Hai wäre unter Wasser
 * -> man kann ein Rahmen zeichnen mit Koordinaten und das Bild da einfügen + werden wir viel üben
 * -> BILD 1.3
 * -> man kan graphisch auch mehrere Elemente hinzufügen - Hintergrundbild
 * -> dieser besteht aus mehreren Schrichten und diese bewegen sich
 * 
 *  ----- 1.1. - Alternative Grafiken -----
 * 
 * -> https://craftpix.net/
 * -> wir müssen nicht die gegebenen Graphiken nehmen - können auch eigenes aussuchen
 * -> Lizenz - kann man bei der Seite verwenden
 * -> verändern + verkaufen
 * -> wir brauche Elemente vom BILD 2.1, 2.2 uns 2.3 -> Entgegner
 * 
 * -----  02 - Projektstruktur ----- 
 *
 * -> die wichtigsten Ordner hinzufügen
 * -> JS + IMG + AUDIO 
 * -> Canvas erstellen + CSS und JS einbinden - BILD 2.4
 * 
 * -----  03 - Grafik einfügen -----
 * 
 * -> onload einfügen + init() erstellen
 * -> Bild einfügen (relativen pfad kopieren)
 * 
 * -> Kontrolieren ob die variablen "character" und "canvas" zu sehen sind -> BILD 1
 */