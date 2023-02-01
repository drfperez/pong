class Paddle {
  constructor (x,y,r,g,b) {
    this.x=x;//Ã©s la posiciÃ³ x de la pala
    this.y=y;
    this.r=r;
    this.g=g;
    this.b=b;
    // Li afegim -40 per a que es centrin les pales
    this.height= 80; //Ã©s l'alÃ§ada de la pala
    this.width=20; //es l'amplada de la pala
    this.isUp = false;
    this.isDown = false;
}
update() {
  if (this.isUp) {
    this.up ();
  } else if (this.isDown) {
    this.down ();
  }
}
  display() {
    fill ( this.r, this.g, this.b );
    rect (this.x, this.y, 20, 80);
  }
  up() {
     if (this.y > 0) {
       this.y = this.y-2;
     }
}
down () {
  if (this.y < height - this.height) {
    this.y = this.y+2;
  }
}
}
