import processing.svg.*;

void setup () {
  size (1000,1000,SVG, "combi_gauss_lineaire.svg");
  float r1= random(0,255);
  float v1= random(0,255);
  float b1= random(0,255);
  float largeur = random(2,6);
  float facteur_de_dispersion_Gauss = random(100,200);    
for (int k=0 ; k<8 ; k=k+1){                                /* 4 sous-foyers définis aléatoirement avec Gauss*/
  float centre1x = ((height/2)+facteur_de_dispersion_Gauss*randomGaussian());       /*coordonnée selon x des sous-foyers*/
  float centre1y = ((width/2)+facteur_de_dispersion_Gauss*randomGaussian());        /*coordonnée selon y des sous-foyers*/
  
  for (int i =0 ; i< 2 ; i=i+1){                              /* nombre de carré avec une largeur horizontal*/
    float x = random(-100,100);
    float y = random(-100,100);
    stroke(r1,v1,b1);                                           /* couleur A*/
    noFill();
    rectMode(CENTER);
      for (float j=-largeur ; j<largeur ; j=j+1){
        rect(centre1x+x+j,centre1y+y,100,100,2);
  }}
  for (int i =0 ; i< 2 ; i=i+1){ /*couleur2 largeur vertical*/
    float x2 = random(-100,100);
    float y2 = random(-100,100);
    stroke(255-r1,255-v1,255-b1);                                /*couleur B*/
    noFill();                              
    rectMode(CENTER);
      for (float j=-largeur ; j< largeur ; j=j+1){
        rect(centre1x+x2,centre1y+y2+j,100,100,2);
  }}
}
println("Finished.");
  exit();
}
