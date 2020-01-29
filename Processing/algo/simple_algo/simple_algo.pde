import processing.svg.*;

void setup () {
  size (1000,1000,SVG, "nake.svg");
  float r1= random(0,255);
  float v1= random(0,255);
  float b1= random(0,255);
  float largeur = random(2,6);
  
for (int i =0 ; i< 30 ; i=i+1){ /*couleur 1 largeur horizontal*/
float x = random(-400,400);
float y = random(-400,400);
stroke(r1,v1,b1);
noFill();
rectMode(CENTER);
  for (float j=-largeur ; j<largeur ; j=j+1){
    rect((width/2)+x+j,(height/2)+y,100,100,2);
}
}


for (int i =0 ; i< 30 ; i=i+1){ /*couleur2 largeur vertical*/
float x2 = random(-400,400);
float y2 = random(-400,400);
stroke(255-r1,255-v1,255-b1);
noFill();
rectMode(CENTER);
  for (float j=-largeur ; j< largeur ; j=j+1){
    rect((width/2)+x2,(height/2)+y2+j,100,100,2);
}
}

println("Finished.");
  exit();
  
  
}
