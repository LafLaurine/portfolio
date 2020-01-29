import processing.svg.*;

void setup () {
  size (1000,1000,SVG, "simple_gauss.svg");
  float r1= random(0,255);
  float v1= random(0,255);
  float b1= random(0,255);
  float largeur = random(2,6);
  
for (int i =0 ; i< 30 ; i=i+1){ /*colour ,  width on horizontal*/
float x = randomGaussian();
float y = randomGaussian();
stroke(r1,v1,b1);
noFill();
rectMode(CENTER);
  for (float j=-largeur ; j<largeur ; j=j+1){
    rect(500+(200*x)+j,500+(200*y),100,100,2);
}
}

for (int i =0 ; i< 30 ; i=i+1){ /*complementary color ,width on vertical*/
float x2 = randomGaussian();
float y2 = randomGaussian();
stroke(255-r1,255-v1,255-b1);
noFill();
rectMode(CENTER);
  for (float j=-largeur ; j< largeur ; j=j+1){
    rect(500+(200*x2),500+(200*y2)+j,100,100,2);
}}

println("Finished.");
  exit();
  
}
