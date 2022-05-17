class Paddle{ //La paraula class defineix un tipus d'objecte, en aquest cas un rectangle que ha de ser allargat cap a dalt
//La paraula constructor Ã©s obligatÃ²ria construeix un objecte i el que poso entre parentesis Ã©s el que pot variar. Aquestes coses que poden variar son caracterÃ­stiques fÃ­siques, com la posiciÃ³ X del objecte, la posiciÃ³ Y del objecte , l'alÃ§ada de l'objecte, l'amplada del objecte.
  constructor(x) {
    this.x = x;
    this.y = height / 2-40; 
    this.height = 80;
    this.width = 20;
    //La pala sempre sera 20 pÃ­xels d'amplada i 80 d'alÃ§ada, perquÃ¨ estÃ  definit en la classe Paddle. Al principi del joc la posiciÃ³ de la pala Ã©s a meitat d'alÃ§ada, que vol dir height/2 i la Ãºnica cosa que puc variar Ã©s la posiciÃ³ X de la cantonada superior esquerra (top left corner) estÃ  indicada en el constructor. La posiciÃ³ 26 pixels la puc canviar per qualsevol nÃºmero o variable, si poso en comptes de 26 poso width/2 quedarÃ  la pala a la meitat.
    //Height/2 no Ã©s la posiciÃ³ central del rectangle, estem agafant la posiciÃ³ de la cantonada superior esquerra, per tant, sempre quedarÃ  una mica mÃ©s avall. Per pujar-ho hem de restar pÃ­xels perquÃ¨ el 0,0 estÃ  en la cantonada superior esquerra de la pantalla, en aquest cas hem de restar 40 perquÃ¨ el rectangle mesura 80 i volem que el rectangle quedi a la meitat justa.
    this.isUp = false; //Per defecte l'objecte no pujarÃ  perquÃ¨ el codi que fa que pugui isUp, estÃ  en false , que fa que no Ã©s compleixi, i el mateix podem dir de isDown.
    this.isDown = false;
    //isDown significa que va cap abaix i tÃ© un valor false, aquest valor Ã©s booleÃ . Un valor booleÃ  pot ser veritable o fals i va ser inventat per un filÃ³sof o mtemÃ tic que s'estudia a la assignatura de filosofia de 1r de batxillerat a l'apartat de lÃ²gica i s'estudia a la assignatura de tecnologia industrial per a electrÃ³nica on hi han circuits que son 1 i 0 (true i false), tambÃ© s'estudia en la assignatura de programaciÃ³. A matemÃ tiques Ã©s diu algebra booleana i  nomÃ©s treballa amb el 0 i amb el 1. DIem que isDown es false d'entrada perquÃ¨ no Ã©s mogui al principi sense cap acciÃ³ de l'usuari, desprÃ©s posarem un codi que farÃ  que quan apretem una fletxa cap avall es torni true 
  }
  //Update Ã©s una funciÃ³ que actualitza la pÃ gina de forma que si this.isup Ã©s false no fa res per defecte, i si es true 
  update ()  {
    if (this.isup==true) { //Si el thisUp el tornem true fem que thisUp es compleixi utilitzant up, que significa pujar i utilitza la y--
      this.up () ;
    } else if (this.isDown==true) { //Si Ã©s transforma en true s'aplicara 
      this.down();
    }
  }
  
  
  display()  {
    fill(255);
    rect(this.x, this.y, 20, 80);
  }
  
  up() {
    if (this.y > 0){// si la posicÃƒÂ³n de la pala en Y es mayor que 0 significa que se a salido por arriba de la pantalla
      this.y -= 4;// sube los pixeles de 4 en 4 
    }
  }
  
  down() {
    if (this.y < height - this.height) {// si la psiciÃƒÂ³n de la pala es menor que la altura significa que se a salido por debajo
      this.y += 2;// baja los pixeles de 2 en 2
   }
  }
}
