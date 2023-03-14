let canvas; // Canvas einbinden
let ctx; // malen
// let character = new Image(); // Bild des Charakters
let character = new MovableObject();

function init() {
    canvas = document.getElementById('canvas') // canvas laden
    ctx = canvas.getContext('2d');

    console.log('My Character is', character); // BILD 5 - man ruft ein JSON mit den vorgegebenen Eigenschaften auf

    // character.src = '../img/2_walk/2_WALK_000.png'; // Bild vom Wizz einfügen
    // ctx.drawImage(character, 20, 20, 50, 150); // Koordinaten und Parameter des Bildes
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
 *
 * ----- 04 - Objektorientierung -----
 * 
 * -> alle Character haben im Prinzip den selben Code - BILD 2
 * -> mit JSON Array BILD 3 + 4 -> gute Lösung
 * -> macht jedoch Probleme:
 *  - Funktionen 
 *  - Geteilte Funktionalität - zufälliges Laufen
 *  - Schwer zu berstehen
 *  - Unübersichtlich
 * 
 * -> Lösung: Obkejtorientierung BILD 4.2 + 4.3
 * -> strukturierter coden
 * -> Vererbung - gemeinsames BILD 4.4 - greifbarer
 * 
 * ----- 05 - Erste Klasse implementieren -----
 * 
 * -> Praxis mit der "Vererbung"
 * -> classes - movable-object.class.js erstellen
 * -> BILD 5 - man ruft ein JSON mit den vorgegebenen Eigenschaften auf
 *
 * ----- 06 - Klassen -----
 * 
 * -> man kann mit OO leichter programmieren
 * -> uns das Leben durch Klassen leichter machen
 * -> wir definieren eine Kasse und packen alle dazugehörigen Dateien rein
 * -> Echtes Objekt - Abbild der echten Welt
 * -> Klassen => alle Funktionen von einem Objekt
 * -> Beispiel BILD 6.1
 * 
 * -> world.class.js + character.class.js + chicken.class.js
 * -> MovableObject - Character + Chicken teilen bestimmte Eigenschaften
 * 
 * -> es gibt eine X und Y Koordinate bei dem Charakter + Chicken
 * -> Bild 6.2 - 1 Welt und - * entweder P1 oder P2
 * 
 * -> Kohäsion - alles gekapsellt - alles, wa slogisch zusammen passt, kommt in ein Objekt
 * -> Vererbung - Überklasse mit den gemeinsammen Eigenschaften
 * 
 * 
 * 
 * 
 */