//Cacher les consigne d'accueuil
document.addEventListener('keypress', (event) => {
    document.getElementById('Consignes').style.display = "none";
    document.getElementById('background').style.display = "none";
})


//Déclaration analyse des sons
var analyzer, sound1AMP, sound2AMP, sound3AMP, sound4AMP, sound5AMP, sound6AMP, sound7AMP, sound8AMP, sound9AMP, sound10AMP, sound11AMP, sound12AMP, sound13AMP, sound14AMP, sound15AMP, sound16AMP, sound17AMP, sound18AMP, sound19AMP, sound20AMP, sound21AMP, sound22AMP, sound23AMP, sound24AMP, sound25AMP, sound26AMP;

//Déclaration sons
var soundamb, sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16, sound17, sound18, sound19, sound20, sound21, sound22, sound23, sound24, sound25, sound26;


//Valeurs des animations
var endroit, taille;
var endroit2, taille2;
var endroit3, taille3;
var endroit4, taille4;
var endroit7, taille7;
//
var angle;
var angle1 = 0;
var angle2 = 0;
var angle3 = 0;
var angle4 = 0;
var angle5 = 0;
var angle7 = 0;
var angle16 = 0;
var r = 50;
var spin = 0.07;
var grow = spin * 150;
var angle21 = 0;
//

//Tableau analyse son ambiant 
var displayamb = [];
var displayambGen = true;

//ligne Class
var snowflakes = [];

var pg // une variable pour créer un calque dans lequel on va pouvoir dessiner


function preload() {
    soundamb = loadSound("assets/SOUNDAMBIANCE.wav");
    sound1 = loadSound("assets/SOUND1.wav");
    sound2 = loadSound("assets/SOUND2.wav");
    sound3 = loadSound("assets/SOUND7.wav");
    sound4 = loadSound("assets/SOUND4.wav");
    sound5 = loadSound("assets/SOUND5.wav");
    sound6 = loadSound("assets/SOUND6.wav");
    sound7 = loadSound("assets/SOUND7.wav");
    sound8 = loadSound("assets/SOUND8.wav");
    sound9 = loadSound("assets/SOUND9.wav");
    sound10 = loadSound("assets/SOUND10.wav");
    sound11 = loadSound("assets/SOUND11.wav");
    sound12 = loadSound("assets/SOUND12.wav");
    sound13 = loadSound("assets/SOUND13.wav");
    sound14 = loadSound("assets/SOUND14.wav");
    sound15 = loadSound("assets/SOUND15.wav");
    sound16 = loadSound("assets/SOUND16.wav");
    sound17 = loadSound("assets/SOUND17.wav");
    sound18 = loadSound("assets/SOUND18.wav");
    sound19 = loadSound("assets/SOUND19.wav");
    sound20 = loadSound("assets/SOUND20.wav");
    sound21 = loadSound("assets/SOUND21.wav");
    sound22 = loadSound("assets/SOUND22.wav");
    sound23 = loadSound("assets/SOUND23.wav");
    sound24 = loadSound("assets/SOUND24.wav");
    sound25 = loadSound("assets/SOUND25.wav");
    sound26 = loadSound("assets/SOUND26.wav");
}




function setup() {
    // créer le canvas à la taille de la fenêtre
    createCanvas(windowWidth, windowHeight);
    background(0);


    // créer le calque à la taille de la fenêtre
    pg = createGraphics(windowWidth, windowHeight)
    pg.pixelDensity(1)

    //synchronisation des analyse de sons avec le son dédié
    sound1AMP = new p5.Amplitude();
    sound1AMP.setInput(sound1);
    sound2AMP = new p5.Amplitude();
    sound2AMP.setInput(sound2);
    sound3AMP = new p5.Amplitude();
    sound3AMP.setInput(sound3);
    sound4AMP = new p5.Amplitude();
    sound4AMP.setInput(sound4);
    sound5AMP = new p5.Amplitude();
    sound5AMP.setInput(sound5);
    sound6AMP = new p5.Amplitude();
    sound6AMP.setInput(sound6);
    sound7AMP = new p5.Amplitude();
    sound7AMP.setInput(sound7);
    sound8AMP = new p5.Amplitude();
    sound8AMP.setInput(sound8);
    sound9AMP = new p5.Amplitude();
    sound9AMP.setInput(sound9);
    sound10AMP = new p5.Amplitude();
    sound10AMP.setInput(sound10);
    sound11AMP = new p5.Amplitude();
    sound11AMP.setInput(sound11);
    sound12AMP = new p5.Amplitude();
    sound12AMP.setInput(sound12);
    sound13AMP = new p5.Amplitude();
    sound13AMP.setInput(sound13);
    sound14AMP = new p5.Amplitude();
    sound14AMP.setInput(sound14);
    sound15AMP = new p5.Amplitude();
    sound15AMP.setInput(sound15);
    sound16AMP = new p5.Amplitude();
    sound16AMP.setInput(sound16);
    sound17AMP = new p5.Amplitude();
    sound17AMP.setInput(sound17);
    sound18AMP = new p5.Amplitude();
    sound18AMP.setInput(sound18);
    sound19AMP = new p5.Amplitude();
    sound19AMP.setInput(sound19);
    sound20AMP = new p5.Amplitude();
    sound20AMP.setInput(sound20);
    sound21AMP = new p5.Amplitude();
    sound21AMP.setInput(sound21);
    sound22AMP = new p5.Amplitude();
    sound22AMP.setInput(sound22);
    sound23AMP = new p5.Amplitude();
    sound23AMP.setInput(sound23);
    sound24AMP = new p5.Amplitude();
    sound24AMP.setInput(sound24);
    sound25AMP = new p5.Amplitude();
    sound25AMP.setInput(sound25);
    sound26AMP = new p5.Amplitude();
    sound26AMP.setInput(sound26);
    analyzer = new p5.Amplitude();
    analyzer.setInput(soundamb);
    analyzeglob = new p5.Amplitude();

    //initialisation des valeur du tableau sur true
    for (var i = 0; i < 13; i++) {
        displayamb[i] = true
    }

    //soundamb.play();

}



function draw() {

    //initialisation des valeur du tableau sur true
    for (var i = 0; i < 13; i++) {
        displayamb[i] = true
    }

    //remise du son d'ambiance quand il n'est plus jouer
    if (soundamb.isPlaying() == false) {
        soundamb.play();
        soundamb.setVolume(3);
    }

    //rms pour les sons globaux
    var rms = analyzer.getLevel();
    var rmsglob = analyzeglob.getLevel()




    //Fond ambiance
    if (displayambGen == true) {
        background(0, 100);
        fill(40, 10, 90);
        noStroke();
        angle = angle + 10;
        noStroke();
        ambsize = map(rmsglob, 0, 0.10, 0, height * 0.25);
        rect(0, height * 0.35 - ambsize, width, height * 0.30 + 2 * ambsize);
        fill(80, 30, 200);
    } else {
        background(255);
    }



    //fonction qui enclenche les sons si une touche est pressé
    PlaySound(sound1, 65); //A
    PlaySound(sound2, 90); //Z
    PlaySound(sound3, 69); //E
    PlaySound(sound4, 82); //R
    PlaySound(sound5, 84); //T
    PlaySound(sound6, 89); //Y
    PlaySound(sound7, 85); //U
    PlaySound(sound8, 73); //I
    PlaySound(sound9, 79); //O
    PlaySound(sound10, 80); //P
    PlaySound(sound11, 81); //Q
    PlaySound(sound12, 83); //S
    PlaySound(sound13, 68); //D
    PlaySound(sound14, 70); //F
    PlaySound(sound15, 71); //G
    PlaySound(sound16, 72); //H
    PlaySound(sound17, 74); //J
    PlaySound(sound18, 75); //K
    PlaySound(sound19, 76); //L
    PlaySound(sound20, 77); //M
    PlaySound(sound21, 87); //W
    PlaySound(sound22, 88); //X
    PlaySound(sound23, 67); //C
    PlaySound(sound24, 86); //V
    PlaySound(sound25, 66); //B
    PlaySound(sound26, 78); //N



    //Les 26 Animations

    //Touche D
    if (sound13.isPlaying() == true) {
        sound13.setVolume(0.4);
        displayamb[2] = false;
        push()
        var rms13 = sound13AMP.getLevel()
        var lvl = rms13 * 200;

        var nsegment = 96
        var ncurrentsegment = (map(sound13.currentTime(), 0, sound13.duration(), 0, nsegment + 10))
        strokeWeight(4)
        for (var i = 0; i < ncurrentsegment; i++) {
            var h = map(i, 0, nsegment, 0, 320)
            stroke(0)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle)
            var y = height * 0.5 + height * 0.45 * sin(angle)
            line(width * 0.5, height * 0.5, x, y)
            fill(255)
            noStroke();
            ellipse(width * 0.5, height * 0.5, width * 0.4, width * 0.4)
        }
        pop()
    }

    
     //Touche I
    if (sound8.isPlaying() == true) {
        //enleve l'animation du fond pour un fond blanc
        displayamb[1] = false;
        push();
        sound8.setVolume(3);
        var timer8 = map(sound8.currentTime(), 0, sound8.duration(), 0, PI * 2);
        translate(windowWidth * 0.5, windowHeight * 0.5);
        rotate(timer8);
        fill(0);
        noStroke();
        rect(0, 0, windowWidth*2, windowHeight*2);
        pop();
    }
    
    
    //Touche T
    if (sound5.isPlaying() == true) {
        sound5.setVolume(3);
        var rms5 = sound5AMP.getLevel();
        var size5 = map(rms5, 0, 0.10, 0, 0.5);
        var color5 = map(rms5, 0, 0.05, 0, 255);
        var stroke5 = map(rms5, 0, 0.05, 30, -10);
        var amb5size = map(rms5, 0.02, 0.10, 0, height * 0.45);
        var timer5 = map(sound5.currentTime(), 0, sound5.duration(), 0, 10000 * PI);
        push();
        fill(0);
        rect(0, height * 0.5 - amb5size, width, height * 0 + 2 * amb5size);
        translate(width * 0.5, height * 0.5);
        var x5 = (width * 0.25) * cos(timer5);
        var y5 = (height * 0.25) * sin(timer5);
        stroke(255);
        strokeWeight(stroke5);
        fill(0);
        //ellipseMode(CORNER);
        //ellipse(x5 - width * (size5 / 2), y5 - height * (size5 / 2), width * size5, height * size5)
        //rect(x5 - width * (size5 / 2), y5 - height * (size5 / 2), width * size5, height * size5)
        pop();
    }
    
    
    //Touche L
    if (sound19.isPlaying() == true) {
        sound19.setVolume(2);
        var rms19 = sound19AMP.getLevel();
        var timer19 = map(sound19.currentTime(), 0, sound19.duration(), 2, 17);
        var power19 = map(rms19, 0, 0.15, 10, 20);
        push();

        //stroke(255);
        //strokeWeight(power19)
        translate(width * 0.5, height * 0.5);
        fill(255);
        rotate(frameCount / 40);
        star(0, 0, 30, 1000, timer19);
        fill(40, 10, 90);
        star(0, 0, 70, 50, timer19);
        pop();

    }
    
    
    //Touche A
    if (sound1.isPlaying() == true) {
        push();
        sound1.setVolume(0.5);
        var rms1 = sound1AMP.getLevel();
        angle1 = map(sound1.currentTime(), 0, sound1.duration(), 0, PI * 0.5);
        stroke(255);
        translate(width * 0.65, height * 0.72);
        //variation de l'angle en fonction du positionnement dans la durée de l'animation
        branch1(height * 0.15, angle1);
        pop();
    }


    //Touche Z
    if (sound2.isPlaying() == true) {
        push();
        sound2.setVolume(0.5);
        var rms2 = sound2AMP.getLevel();
        angle2 = map(sound2.currentTime(), 0, sound2.duration(), PI * 0.5, 0);
        stroke(255);
        translate(width * 0.35, height * 0.72);
        //variation de l'angle en fonction du positionnement dans la durée de l'animation (inversé)
        branch1(height * 0.15, angle2);
        pop();
    }


    //Touche E
    if (sound3.isPlaying() == true) {
        push();
        sound3.setVolume(10);
        var rms3 = sound3AMP.getLevel();
        angle3 = map(rms3, 0, 0.25, PI * 0.4, 0);
        translate(width * 0.5, height * 0.72);
        //variation de l'angle en fonction de l'analyse son
        branch1(height * 0.15, angle3);
        pop();
    }


    //Touche R
    if (sound4.isPlaying() == true) {
        push();
        var rms4 = sound4AMP.getLevel();
        var whitelvl = map(rms4, 0, 0.25, 0, 255);
        var timer4 = map(sound4.currentTime(), 0, sound4.duration(), 1, 0);
        angle4 = map(rms4, 0, 0.10, PI * 0, PI * 0.5);
        //variation de l'endroit en fonction du temps
        endroit4 = width * timer4
        translate(endroit4, height * 0.65);
        branch2(height * 0.15, angle4);

        pop()
    }


    //Touche Y
    if (sound6.isPlaying() == true) {
        var rms6 = sound6AMP.getLevel();
        
        let t = frameCount / 60; // update time
        //Snowflakes class
        //https://p5js.org/examples/simulate-snowflakes.html
        // create a random number of snowflakes each frame
        if (frameCount % 10 == 0) {
            for (var i = 0; i < 1; i++) {
                snowflakes.push(new snowflake(windowWidth, windowHeight)); // append snowflake object
            }
        }

        // loop through snowflakes with a for..of loop
        for (var i = 0; i < snowflakes.length; i++) {
            snowflakes[i].display(); // draw snowflake
            snowflakes[i].update(t); // update snowflake position

        }
        
    }


    //Touche U
    if (sound7.isPlaying() == true) {
        push();
        sound7.setVolume(10);
        var rms7 = sound7AMP.getLevel();
        
        angle7 = map(rms7, 0, 0.25, PI * 0.25, PI * 0.55);
        stroke(255);
        rotate(PI);
        translate(-width * 0.50, -height * 0.35);
        branch1(height * 0.15, angle7);
        pop();
    }


    //Touche O
    if (sound9.isPlaying() == true) {
        push();
        sound9.setVolume(0.6);
        var radius = map(sound9.currentTime(), 0, sound9.duration(), 0, 300);
        var color = map(sound9.currentTime(), 0, sound9.duration(), 0, 255);

        fill(color, color, color);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
    }


    //Touche P
    if (sound10.isPlaying() == true) {
        push();
        sound10.setVolume(0.6);
        translate(width * 0.5, height * 0.5);
        var angle = map(sound10.currentTime(), 0, sound10.duration(), 1, PI);
        var color = map(sound10.currentTime(), 0, sound10.duration(), 100, 255);
        rotate(angle);

        rectMode(CENTER);
        fill(255, 255, 255);
        rect(-width, -height, width, height);
        fill(255, 255, 255);
        rect(0, 0, width * 0.4, 25);
        pop()
    }


    //Touche Q
    if (sound11.isPlaying() == true) {
        push();

        var timer11 = map(sound11.currentTime(), 0, sound11.duration(), windowWidth, -windowWidth * 0.2);
        var color = map(sound11.currentTime(), 0, sound11.duration(), 100, 255);
        translate(timer11, 0);
        rectMode(CORNER);
        fill(255, 255, 255);
        rect(0, 0, width * 2, height * 0.2);
        fill(255, 255, 255);
        rect(0, windowHeight * 0.40, width * 2, height * 0.2);
        rect(0, windowHeight * 0.80, width * 2, height * 0.2);

        pop()
    }


    //Touche S
    if (sound12.isPlaying() == true) {
        push();
        sound12.setVolume(5);
        var timer12 = map(sound12.currentTime(), 0, sound12.duration(), -windowWidth, windowWidth * 1.4);
        var color = map(sound12.currentTime(), 0, sound12.duration(), 100, 255);
        translate(timer12, 0);
        rectMode(CORNER);
        fill(255, 255, 255);

        rect(0, windowHeight * 0.20, -width * 2, height * 0.2);
        rect(0, windowHeight * 0.60, -width * 2, height * 0.2);

        pop()
    }


    //Touche F
    if (sound14.isPlaying() == true) {
        sound14.setVolume(0.6);
        push();
        var rms14 = sound14AMP.getLevel();
        var timer14 = map(sound14.currentTime(), 0, sound14.duration(), 0, windowWidth * 2);
        var Back14lvl = map(rms14, 0, 0.15, 0, 255);
        translate(windowWidth * 0.5, windowHeight * 0.5)
        noFill();
        stroke(255, 255, 255);
        strokeWeight(40);
        ellipse(0, 0, timer14, timer14);
        pop();
    }


    //Touche G
    if (sound15.isPlaying() == true) {
        sound15.setVolume(0.6);
        push();
        var rms15 = sound15AMP.getLevel();
        var timer15 = map(sound15.currentTime(), 0, sound15.duration(), windowWidth * 2, 0);
        var Back15lvl = map(rms15, 0, 0.15, 0, 255);
        translate(windowWidth * 0.5, windowHeight * 0.5)
        noFill();
        stroke(255, 255, 255);
        strokeWeight(40);
        ellipse(0, 0, timer15, timer15);
        pop();
    }


    //Touche H
    if (sound16.isPlaying() == true) {
        sound16.setVolume(0.6);
        image(pg, 0, 0, width, height)
        push();
        var rms16 = sound16AMP.getLevel();
        var timer16 = map(sound16.currentTime(), 0, sound16.duration(), windowWidth * 2, 0);
        var sizell = map(rms16, 0, 0.15, 0.05, 0.15);
        angle16 += spin;
        r = r + grow;
        var x = cos(angle16) * r;
        var y = sin(angle16) * r;
        //line(0, 0, x, y);

        pg.fill(0);
        pg.noStroke();
        pg.ellipse(windowWidth * 0.5 + x, windowHeight * 0.5 + y, width * 0.1, width * 0.1);
    } else {
        r = 0
        pg = createGraphics(windowWidth, windowHeight)
        pg.pixelDensity(1)
    }


    //Touche J
    if (sound17.isPlaying() == true) {
        push();
        var rms17 = sound17AMP.getLevel();
        var timer17 = map(sound17.currentTime(), 0, sound17.duration(), 2, 17);
        var power17 = map(rms17, 0, 0.25, 0, 30);
        var power17_2 = map(rms17, 0, 0.25, width * 0.01, width * 0.2);
        noFill();
        stroke(255);
        strokeWeight(power17);
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / timer17);
        polygon(0, 0, power17_2, timer17);
        pop();
    }


    //Touche K
    if (sound18.isPlaying() == false) {
        size18 = 0.2
    }
    if (sound18.isPlaying() == true) {
        sound18.setVolume(2);
        var rms18 = sound18AMP.getLevel();
        var timer18 = map(sound18.currentTime(), 0, sound18.duration(), 2, 17);
        var power18 = map(rms18, 0, 0.25, 10, 30);
        push();
        noFill();
        stroke(255);
        strokeWeight(power18);
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / timer18);
        if (timer18 > 10) {
            size18 = size18 - 0.003;
            polygon(0, 0, width * size18, timer18);
        } else {
            polygon(0, 0, width * 0.2, timer18);
        }
        pop();
    }


    //Touche M
    if (sound20.isPlaying() == true) {
        sound20.setVolume(3);
        var rms20 = sound20AMP.getLevel();
        var timer20 = map(sound20.currentTime(), 0, sound20.duration(), width * 0.3, width * 0.05);
        var power20 = map(rms20, 0, 0.15, 20, 40);
        push();
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 50);
        //rotate(frameCount / timer20_1);
        fill(255);

        //stroke(255);
        //strokeWeight(10)
        star(0, 0, timer20, width * 0.15, 4);
        //fill(40, 10, 90);
        //star(0, 0, 70, 50, timer20);
        pop();
    }


    //Touche W
    if (sound21.isPlaying() == true) {

        var rms21 = sound21AMP.getLevel();
        var timer21 = map(sound21.currentTime(), 0, sound21.duration(), 0, 2 * PI);
        var power21 = map(rms21, 0, 0.15, 20, 40);
        push();
        noStroke();
        var angle = timer21
        var x21 = width * 0.5 + width * 0.05 * cos(angle)
        var y21 = height * 0.5 + width * 0.05 * sin(angle)
        var size21 = width * 0.1;

        fill(40, 10, 90);
        triangle(x21, y21, (width / 2) - size21, (height / 2) - size21, (width / 2) + size21, (height / 2) - size21);

        fill(20, 5, 40);
        triangle(x21, y21, (width / 2) + size21, (height / 2) - size21, (width / 2) + size21, (height / 2) + size21);

        fill(10, 2.5, 20);
        triangle(x21, y21, (width / 2) + size21, (height / 2) + size21, (width / 2) - size21, (height / 2) + size21);

        fill(20, 5, 40);
        triangle(x21, y21, (width / 2) - size21, (height / 2) + size21, (width / 2) - size21, (height / 2) - size21);

        pop();

    }


    //Touche X
    if (sound22.isPlaying() == true) {
        var rms22 = sound22AMP.getLevel();
        var timer22 = map(sound22.currentTime(), 0, sound22.duration(), 0, PI);
        var timer22_2 = map(sound22.currentTime(), 0, sound22.duration(), 0, 1);
        var timer22_3 = map(sound22.currentTime(), 0, sound22.duration(), width * 0.14, width * 0.17);
        var power22 = map(rms22, 0, 0.15, width * 0.1, width * 0.17);
        push();

        noStroke();
        translate(windowWidth * 0.25, windowHeight * 0.5);
        var angle = timer22
        var x22 = 0 + width * 0.13 * cos(angle)
        var y22 = 0 + width * 0.13 * sin(angle)
        var size22 = timer22_3;
        rotate(timer22_2);

        fill(40, 10, 90);
        triangle(x22, 0, 0 - size22, 0 - size22, 0 + size22, 0 - size22);

        fill(20, 5, 40);
        triangle(x22, 0, 0 + size22, 0 - size22, 0 + size22, 0 + size22);

        fill(10, 2.5, 20);
        triangle(x22, 0, 0 + size22, 0 + size22, 0 - size22, 0 + size22);

        fill(20, 5, 40);
        triangle(x22, 0, 0 - size22, 0 + size22, 0 - size22, 0 - size22);

        pop();
    }


    //Touche C
    if (sound23.isPlaying() == true) {
        var rms23 = sound23AMP.getLevel();
        var timer23 = map(sound23.currentTime(), 0, sound23.duration(), 0, PI);
        var timer23_2 = map(sound23.currentTime(), 0, sound23.duration(), 0, -1);
        var timer23_3 = map(sound23.currentTime(), 0, sound23.duration(), width * 0.14, width * 0.17);
        var power23 = map(rms23, 0, 0.15, 20, 40);
        push();

        noStroke();
        translate(windowWidth * 0.75, windowHeight * 0.5);
        var angle = timer23
        var x23 = 0 + width * 0.13 * cos(angle)
        var y23 = 0 + width * 0.13 * sin(angle)
        var size23 = timer23_3;
        rotate(timer23_2);

        fill(40, 10, 90);
        triangle(x23, 0, 0 - size23, 0 - size23, 0 + size23, 0 - size23);

        fill(20, 5, 40);
        triangle(x23, 0, 0 + size23, 0 - size23, 0 + size23, 0 + size23);

        fill(10, 2.5, 20);
        triangle(x23, 0, 0 + size23, 0 + size23, 0 - size23, 0 + size23);

        fill(20, 5, 40);
        triangle(x23, 0, 0 - size23, 0 + size23, 0 - size23, 0 - size23);

        pop();
    }


    //Touche V
    if (sound24.isPlaying() == true) {

        var rms24 = sound24AMP.getLevel();
        var timer24 = map(sound24.currentTime(), 0, sound24.duration(), 0, 2 * PI);
        var timer24_2 = map(sound24.currentTime(), 0, sound24.duration(), 0, 1);
        var timer24_3 = map(sound24.currentTime(), 0, sound24.duration(), width * 0.14, width * 0.17);
        var power24 = map(rms24, 0, 0.15, 20, 40);
        push();
        translate(windowWidth * 0.30, windowHeight * 0.5);
        noStroke();
        var angle24 = timer24
        var x24 = 0 + width * 0.13 * cos(angle24)
        var y24 = 0 + width * 0.13 * sin(angle24)
        var size24 = timer24_3;
        rotate(timer24_2);

        fill(40, 10, 90);
        quad(x24, y24, 0 - size24, 0 - size24 / 2, 0, 0 - size24, 0 + size24, 0 - size24 / 2);

        fill(10, 2.5, 20);
        quad(x24, y24, 0 + size24, 0 - size24 / 2, 0 + size24, 0 + size24 * 0.75, 0, 0 + size24 * 1.25);

        fill(20, 5, 40);
        quad(x24, y24, 0 - size24, 0 - size24 / 2, 0 - size24, 0 + size24 * 0.75, 0, 0 + size24 * 1.25);
        pop();
    }


    //Touche B
    if (sound25.isPlaying() == true) {

        var rms25 = sound25AMP.getLevel();
        var timer25 = map(sound25.currentTime(), 0, sound25.duration(), 0, -2 * PI);
        var timer25_2 = map(sound25.currentTime(), 0, sound25.duration(), 0, -1);
        var timer25_3 = map(sound25.currentTime(), 0, sound25.duration(), width * 0.14, width * 0.17);
        var power25 = map(rms25, 0, 0.15, 20, 40);
        push();
        translate(windowWidth * 0.70, windowHeight * 0.5);
        noStroke();
        var angle25 = timer25
        var x25 = 0 + width * 0.13 * cos(angle25)
        var y25 = 0 + width * 0.13 * sin(angle25)
        var size25 = timer25_3;
        rotate(timer25_2);

        fill(40, 10, 90);
        quad(x25, y25, 0 - size25, 0 - size25 / 2, 0, 0 - size25, 0 + size25, 0 - size25 / 2);


        fill(20, 5, 40);
        quad(x25, y25, 0 + size25, 0 - size25 / 2, 0 + size25, 0 + size25 * 0.75, 0, 0 + size25 * 1.25);

        fill(10, 2.5, 20);
        quad(x25, y25, 0 - size25, 0 - size25 / 2, 0 - size25, 0 + size25 * 0.75, 0, 0 + size25 * 1.25);

        pop();
    }


    //Touche N
    if (sound26.isPlaying() == true) {

        var rms26 = sound26AMP.getLevel();
        var timer26 = map(sound26.currentTime(), 0, sound26.duration(), 0, -2 * PI);
        var timer26_2 = map(sound26.currentTime(), 0, sound26.duration(), 0, -1);
        var timer26_3 = map(sound26.currentTime(), 0, sound26.duration(), width * 0.14, width * 0.17);
        var power26 = map(rms26, 0, 0.15, windowWidth * 0.10, windowWidth * 0.17);
        push();
        translate(windowWidth * 0.50, windowHeight * 0.5);
        noStroke();
        var angle26 = timer26
        var x25 = 0 + width * 0.13 * cos(angle25)
        var y25 = 0 + width * 0.13 * sin(angle25)
        var size26 = power26;


        fill(40, 10, 90);
        quad(0, 0, 0 - size26, 0 - size26 / 2, 0, 0 - size26, 0 + size26, 0 - size26 / 2);


        fill(20, 5, 40);
        quad(0, 0, 0 + size26, 0 - size26 / 2, 0 + size26, 0 + size26 * 0.75, 0, 0 + size26 * 1.25);

        fill(10, 2.5, 20);
        quad(0, 0, 0 - size26, 0 - size26 / 2, 0 - size26, 0 + size26 * 0.75, 0, 0 + size26 * 1.25);

        pop();
    }



    //Vérification qu'aucune animation n'a changer un boolean
    for (var i = 0; i < 13; i++) {
        if (displayamb[i] == false) {
            displayambGen = false;
            break;
        } else {
            displayambGen = true;
        }
    }

}


//Fonction récursive
//Fractal tree inspiré des Codding challenge de la chaine "The coding train" by Daniel Shiffman
//Défis de programmation #14 : Les arbres à fractales - Récursif
function branch1(len, angle) {
    stroke(255);
    strokeWeight(5);
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch1(len * 0.67, angle);
        pop();
        push();
        rotate(-angle);
        branch1(len * 0.67, angle);
        pop();
    }
}

//Fonction récursive
//Fractal tree inspiré des Codding challenge de la chaine "The coding train" by Daniel Shiffman
//Défis de programmation #14 : Les arbres à fractales - Récursif, base avec 2x plus de branche
function branch2(len, angle) {
    stroke(255);
    strokeWeight(2);
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 10) {
        push();
        rotate(angle * 2);
        branch2(len * 0.57, angle);
        pop();
        push();
        rotate(angle);
        branch2(len * 0.57, angle);
        pop();
        push();
        rotate(-angle * 2);
        branch2(len * 0.57, angle);
        pop();
        push();
        rotate(-angle);
        branch2(len * 0.57, angle);
        pop();
    }
}



//Regular Polygon
//fonction créant un polygon avec des données en paramètre
//https://p5js.org/examples/form-regular-polygon.html
function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}



//Fonction permettant de jouer les sons en fonction des touche si ils ne sont pas déja en train d'être joué
function PlaySound(sound, keyID) {
    if (keyIsDown(keyID) == true) {
        if (sound.isPlaying() == false) {
            sound.play();
        }
    }
}


//Star
//fonction créant une étoile avec des données en paramètre
//https://p5js.org/examples/form-star.html
function star(x, y, radius1, radius2, npoints) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle / 2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius2;
        var sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}


//Fonction permettant d'adapter la taille si l'usager redéfini celle-ci
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}


// snowflake class
function snowflake(w, h) {
    // initialize coordinates
    this.posX = w * 1;
    this.posY = h * 0.25-15;
    this.size = random(2, 5);

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(w / 2, 2)));

    this.update = function (time) {
        // x position follows a circle
        // let w = 0.6; // angular speed

        
        // different size snowflakes fall at slightly different y speeds
        this.posX -= 40;

        // delete snowflake if past end of screen
        if (this.posX < -250) {
            let index = snowflakes.indexOf(this);
            snowflakes.splice(index, 1);
        }
    };

    this.display = function () {
        fill(random(0,100), random(0,10), random(0,200));
        noStroke();
        rect(this.posX, this.posY, 180, 30);
        rect(this.posX, this.posY+height*0.5, 180, 30);
    };
}