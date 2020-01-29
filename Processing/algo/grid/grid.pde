import processing.svg.*;

void setup () {
  size (1000,1000,SVG, "grid.svg");
  float r1= random(0,255);
  float v1= random(0,255);
  float b1= random(0,255);
 
  
  for (int j=0 ; j<700 ; j=j+1){
    for (float i =0 ; i<700  ; i=i+1){  
      float c = random(0,100);
      float r = randomGaussian();
      if (r>3.7){
        if (c<50){
          for (float k=-4;  k<4 ; k=k+0.5){
          stroke(r1,v1,b1);                                          
          noFill();
          rectMode(CENTER); 
          rect(200+i+k,200+j,100,100,2);}}
          else {
            for (float k=-4;  k<4 ; k=k+1){
          stroke(255-r1,255-v1,255-b1);                                          
          noFill();
          rectMode(CENTER); 
          rect(200+i,200+j+k,100,100,2);}  }}}
 
}


println("Finished.");
  exit();
  }
