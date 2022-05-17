let playerPaddle;
let aiPaddle;
let ball; // Crea una variable anomenada ball i l'Ãºnic que fa Ã©s crear un espai a la memÃ²ria del ordinador per aquesta variable.
/* La lÃ­nia 1,2 i 3 creen tres variables, que s'anomenen playerPaddle que significa pala del jugador i aiPaddle que significa pala de l'intelÂ·ligÃ¨ncia artificial. AixÃ² crea un espai de memÃ²ria per emmagatzemar la variable.
*/
function setup ()  {
  //Setup significa configuraciÃ³o del joc i nomÃ©s s'executa al principi i una sola vegada.
  createCanvas (1200, 600) ; //Createcanvas crea un llenÃ§ o pantalla de 1200 pÃ­xels d'ample i 600 d'alt, aquest nÃºmeros els puc canviar pels que vulgui. Create canvas estÃ  definit a p5 igual que setup o draw.
  playerPaddle = new Paddle (26) ; //Quan escric playerPaddle=newPaddle estic creant un objecte de tipus pala i nomÃ©s depen d'una variable que estÃ  entre parentesis que serÃ  la posiciÃ³ X com veurem a Paddle.js. La pala sempre sera 20 pÃ­xels d'amplada i 80 d'alÃ§ada, perquÃ¨ estÃ  definit en la classe Paddle. 
  //Al principi del joc la posiciÃ³ de la pala Ã©s a meitat d'alÃ§ada, que vol dir height/2 i la Ãºnica cosa que puc variar Ã©s la posiciÃ³ X de la cantonada superior esquerra (top left corner) estÃ  indicada en el constructor. La posiciÃ³ 26 pixels la puc canviar per qualsevol nÃºmero o variable, si poso en comptes de 26 poso width/2 quedarÃ  la pala a la meitat.
  aiPaddle = new Paddle (width - 48) ; //La pala estÃ  situada a la amplada menys 48 pÃ­xels del final.
  ball=new Ball(); //crea un objecte que s'anomena ball que Ã©s del tipus que tÃ© totes les caracterÃ­sitiques de la classe bola.
}

function draw () { //S'executa 50 vegades per segon o el que executi l'ordinador.
  background (0) ; //Background significa fons de Ã±a pantalla i 0 Ã©s el color negre.
  playerPaddle.display();//AquÃ­ significa que sigui visible display la pala.
  aiPaddle.display();
  playerPaddle.update(); //AquÃ­ significa que s'actualitzi, que Ã©s mogui la pala
  aiPaddle.update();
  ball.update(); /*Estic creant la funciÃ³ update que estÃ  definida en Ball.js amb la sintaxi del . o dot syntax, que poso el nomdelobjecte.nomdelafuncio();*/
  if(playerPaddle.isUp){ //Que Ã©s mogui la pala a la direcciÃ³ amunt o avall.
    playerPaddle.up();}
    else if(playerPaddle.isDown){
      playerPaddle.down();
  
}
ball.display();
ball.update();//Un cop creada la bola com a espai a la memÃ²ria i variable amb let ball, creem l'objecte amb new Ball hem de cridar a l'objecte perquÃ¨ aparegui dient ball.display i perquÃ¨ s'actualitzi i Ã©s mogui ball.update
stroke(255); //pinta de blanc una linia que s'escriu a continuaciÃ³
line(width/2, 0, width/2, height); //Per fer una lÃ­nea necessitem dos punts, el punt d'inici i el punt de final, necessito dos coordenades per cada punt 
}
function processAI() { // Aquesta funciÃ³ el que fa Ã©s veure la posiciÃ³ de la pala. Per veure la pala determinem el centre de la pala, serÃ  la posiciÃ³ Y de la pala mes la meitat de la seva alÃ§ada. i determinar una posiciÃ³ que s'anomena 
  let middleOfPaddle = aiPaddle.y + aiPaddle.height /2;
  //Necessito saber la posiciÃ³ de la pala i la posiciÃ³ mÃ©s important Ã©s el centre de la pala. PerquÃ¨ compararem la posiciÃ³ del centre de la pala amb la de la pilota.
  if (middleOfPaddle > ball.y) {
    aiPaddle.isUp = true;
    aiPaddle.isDown = false;
  } else {
    aiPaddle.isDown = true;
    aiPaddle.isUp = false;
//Movimiento de la pala inteligente, si la posiciÃ³n Y del centro de la pala inteligente Ã©s mas grande que la posiciÃ³n Y del centro de la pelota la pala inteligente esta situada mas abajo que el centro de la pelota, y eso hace que suba hacia arriba. El motivo de subir es que la funciÃ³n isUp se transforme en true y eso activa la funciÃ³n isUp y eso activa a su vez la funcion Up y eso activa la funcion y-- que hace que suba hacia arriba. Else significa en caso contrario, sempre va acompanyat d'un if, que Ã©s un si condicional. Si tinguessim mÃ©s condicions seria un if i tants else if com condicions i un ultim else com a cas contrari. 
  }
}

function keyPressed (){ //Significa que si apreto la fletxa Ã©s mogui com diu la fletxa, amunt o avall
  if(keyCode==UP_ARROW){ //La paraula keyCode Ã©s vÃ lida per les fletxes, pots canviar i utilitzar una llerta del alfabet o un nÃºmeros utilitzant un codi keyTyped, i ho sabem perquÃ¨ ho busquem a p5js.org/reference.
    playerPaddle.isUp=true;} //Ã‰s transforma de false a true en isUp crida a Up, i el up crida a y-- que vol dir que puja cap amunt
    else if(keyCode==DOWN_ARROW){
      playerPaddle.isDown=true;}
} 
   function keyReleased (){ //Si deixo d'apretar la tecla Ã©s deixarÃ  de moure.
  if(keyCode==UP_ARROW){
    playerPaddle.isUp=false;}
    else if(keyCode==DOWN_ARROW){
      playerPaddle.isDown=false;}
} 
