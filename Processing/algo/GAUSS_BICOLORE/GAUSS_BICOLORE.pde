import processing.svg.*;

void setup () {
  size (1000,1000,SVG, "gauss_bicolore.svg");
  float r1= random(0,255);
  float v1= random(0,255);
  float b1= random(0,255);
  float hauteur = random(2,6);
  float largeur = random(2,6);
  float facteur_de_dispersion_Gauss1= random(10,100); 
  float facteur_de_dispersion_Gauss2= random(10,100);  
  float facteur_de_dispersion_Gauss3= random(10,100); 
  float facteur_de_dispersion_Gauss4= random(10,100);    
  
                          /* EN HAUT A GAUCHE*/
                            for (int i =0 ; i< 10 ; i=i+1){                              /* nombre de carré avec une largeur horizontal*/
                              float x = facteur_de_dispersion_Gauss1* randomGaussian();
                              float y = facteur_de_dispersion_Gauss1*randomGaussian();
                              stroke(r1,v1,b1);                                           /* couleur A*/
                              noFill();
                              rectMode(CENTER);
                                for (float j=-largeur ; j<largeur ; j=j+1){
                                  rect(250+x+j,250+y,100,100,2);
                            }}
                            for (int i =0 ; i< 10 ; i=i+1){ /*couleur2 largeur vertical*/
                              float x2 =facteur_de_dispersion_Gauss1* randomGaussian();
                              float y2 =facteur_de_dispersion_Gauss1* randomGaussian();
                              stroke(255-r1,255-v1,255-b1);                                /*couleur B*/
                              noFill();                              
                              rectMode(CENTER);
                                for (float j=-largeur ; j< largeur ; j=j+1){
                                  rect(250+x2,250+y2+j,100,100,2);
  }}
  
  /*en haut a droite*/
  for (int i =0 ; i< 10 ; i=i+1){                              /* nombre de carré avec une largeur horizontal*/
    float x =facteur_de_dispersion_Gauss2* randomGaussian();
    float y =facteur_de_dispersion_Gauss2* randomGaussian();
    stroke(r1,v1,b1);                                           /* couleur A*/
    noFill();
    rectMode(CENTER);
      for (float j=-largeur ; j<largeur ; j=j+1){
        rect(750+x+j,250+y,100,100,2);
  }}
  for (int i =0 ; i< 10 ; i=i+1){ /*couleur2 largeur vertical*/
    float x2 =facteur_de_dispersion_Gauss2* randomGaussian();
    float y2 =facteur_de_dispersion_Gauss2* randomGaussian();
    stroke(255-r1,255-v1,255-b1);                                /*couleur B*/
    noFill();                              
    rectMode(CENTER);
      for (float j=-largeur ; j< largeur ; j=j+1){
        rect(750+x2,250+y2+j,100,100,2);
  }}

                            /* EN BAS A GAUCHE*/
                              for (int i =0 ; i< 10 ; i=i+1){                              /* nombre de carré avec une largeur horizontal*/
                                float x =facteur_de_dispersion_Gauss3* randomGaussian();
                                float y =facteur_de_dispersion_Gauss3* randomGaussian();
                                stroke(r1,v1,b1);                                           /* couleur A*/
                                noFill();
                                rectMode(CENTER);
                                  for (float j=-largeur ; j<largeur ; j=j+1){
                                    rect(250+x+j,750+y,100,100,2);
                              }}
                              for (int i =0 ; i< 10 ; i=i+1){ /*couleur2 largeur vertical*/
                                float x2 =facteur_de_dispersion_Gauss3* randomGaussian();
                                float y2 =facteur_de_dispersion_Gauss3* randomGaussian();
                                stroke(255-r1,255-v1,255-b1);                                /*couleur B*/
                                noFill();                              
                                rectMode(CENTER);
                                  for (float j=-largeur ; j< largeur ; j=j+1){
                                    rect(250+x2,750+y2+j,100,100,2);
                              }}
                              
  /*en bas a droite*/
  for (int i =0 ; i< 10 ; i=i+1){                              /* nombre de carré avec une largeur horizontal*/
    float x =facteur_de_dispersion_Gauss4* randomGaussian();
    float y =facteur_de_dispersion_Gauss4* randomGaussian();
    stroke(r1,v1,b1);                                           /* couleur A*/
    noFill();
    rectMode(CENTER);
      for (float j=-largeur ; j<largeur ; j=j+1){
        rect(750+x+j,750+y,100,100,2);
  }}
  for (int i =0 ; i< 10 ; i=i+1){ /*couleur2 largeur vertical*/
    float x2 =facteur_de_dispersion_Gauss4* randomGaussian();
    float y2 =facteur_de_dispersion_Gauss4* randomGaussian();
    stroke(255-r1,255-v1,255-b1);                                /*couleur B*/
    noFill();                              
    rectMode(CENTER);
      for (float j=-largeur ; j< largeur ; j=j+1){
        rect(750+x2,750+y2+j,100,100,2);
  }}






println("Finished.");
  exit();




}
