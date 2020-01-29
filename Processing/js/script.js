  var facteur1= Math.floor(Math.random() * 100) + 10;
  var facteur2= Math.floor(Math.random() * 100) + 10;
  var facteur3= Math.floor(Math.random() * 100) + 10;
  var facteur4= Math.floor(Math.random() * 100) + 10;

  var facteur_Gauss = Math.floor(Math.random() * 200) + 10;

function setup()
{
  createCanvas (1000,1000);
  background(245,240,240);
}


/*  */
function randomBicolor () {

      setup();
      var r1= random(0,255);
      var v1= random(0,255);
      var b1= random(0,255);
      var largeur = random(2,6);
      var facteur_de_dispersion_Gauss1= facteur1; 
      var facteur_de_dispersion_Gauss2= facteur2;  
      var facteur_de_dispersion_Gauss3= facteur3; 
      var facteur_de_dispersion_Gauss4= facteur4;    
      
    /* EN HAUT A GAUCHE*/
    for (var i =0 ; i< 10 ; i=i+1){                              /* nombre de carré avec une largeur horizontal*/
        var x = facteur_de_dispersion_Gauss1* randomGaussian();
        var y = facteur_de_dispersion_Gauss1*randomGaussian();
        stroke(r1,v1,b1);                                           /* couleur A*/
        noFill();
        rectMode(CENTER);
        for (var j=-largeur ; j<largeur ; j=j+1){
            rect(250+x+j,250+y,100,100,2);
        }
    }

    for (var i =0 ; i< 10 ; i=i+1){ /*couleur2 largeur vertical*/
        var x2 =facteur_de_dispersion_Gauss1* randomGaussian();
        var y2 =facteur_de_dispersion_Gauss1* randomGaussian();
        stroke(255-r1,255-v1,255-b1);                                /*couleur B*/
        noFill();                              
        rectMode(CENTER);
        
        for (var j=-largeur ; j< largeur ; j=j+1){
            rect(250+x2,250+y2+j,100,100,2);
        }
    }
      
      /*en haut a droite*/
      for (var i =0 ; i< 10 ; i=i+1){                              /* nombre de carré avec une largeur horizontal*/
        var x =facteur_de_dispersion_Gauss2* randomGaussian();
        var y =facteur_de_dispersion_Gauss2* randomGaussian();
        stroke(r1,v1,b1);                                           /* couleur A*/
        noFill();
        rectMode(CENTER);
          for (var j=-largeur ; j<largeur ; j=j+1){
            rect(750+x+j,250+y,100,100,2);
      }}
      for (var i =0 ; i< 10 ; i=i+1){ /*couleur2 largeur vertical*/
        var x2 =facteur_de_dispersion_Gauss2* randomGaussian();
        var y2 =facteur_de_dispersion_Gauss2* randomGaussian();
        stroke(255-r1,255-v1,255-b1);                                /*couleur B*/
        noFill();                              
        rectMode(CENTER);
          for (var j=-largeur ; j< largeur ; j=j+1){
            rect(750+x2,250+y2+j,100,100,2);
      }}
    
      /* EN BAS A GAUCHE*/
      for (var i =0 ; i< 10 ; i=i+1){                              /* nombre de carré avec une largeur horizontal*/
        var x =facteur_de_dispersion_Gauss3* randomGaussian();
        var y =facteur_de_dispersion_Gauss3* randomGaussian();
        stroke(r1,v1,b1);                                           /* couleur A*/
        noFill();
        rectMode(CENTER);
        for (var j=-largeur ; j<largeur ; j=j+1){
          rect(250+x+j,750+y,100,100,2);
        }
      }
     
      for (var i =0 ; i< 10 ; i=i+1){ /*couleur2 largeur vertical*/
        var x2 =facteur_de_dispersion_Gauss3* randomGaussian();
        var y2 =facteur_de_dispersion_Gauss3* randomGaussian();
        stroke(255-r1,255-v1,255-b1);                                /*couleur B*/
        noFill();                              
        rectMode(CENTER);
        for (var j=-largeur ; j< largeur ; j=j+1){
          rect(250+x2,750+y2+j,100,100,2);
      }
    }
                                  
      /*en bas a droite*/
      for (var i =0 ; i< 10 ; i=i+1){                              /* nombre de carré avec une largeur horizontal*/
        var x =facteur_de_dispersion_Gauss4* randomGaussian();
        var y =facteur_de_dispersion_Gauss4* randomGaussian();
        stroke(r1,v1,b1);                                           /* couleur A*/
        noFill();
        rectMode(CENTER);
          for (var j=-largeur ; j<largeur ; j=j+1){
            rect(750+x+j,750+y,100,100,2);
      }}
      for (var i =0 ; i< 10 ; i=i+1){ /*couleur2 largeur vertical*/
        var x2 =facteur_de_dispersion_Gauss4* randomGaussian();
        var y2 =facteur_de_dispersion_Gauss4* randomGaussian();
        stroke(255-r1,255-v1,255-b1);                                /*couleur B*/
        noFill();                              
        rectMode(CENTER);
          for (var j=-largeur ; j< largeur ; j=j+1){
            rect(750+x2,750+y2+j,100,100,2);
      }}
    }

function combiGaussLineaire()
{
  setup();
  var r1= random(0,255);
  var v1= random(0,255);
  var b1= random(0,255);
  var largeur = random(2,6);
  var facteur_de_dispersion_Gauss = facteur_Gauss;    
for (var k=0 ; k<8 ; k=k+1){                                /* 4 sous-foyers définis aléatoirement avec Gauss*/
  var centre1x = ((height/2)+facteur_de_dispersion_Gauss*randomGaussian());       /*coordonnée selon x des sous-foyers*/
  var centre1y = ((width/2)+facteur_de_dispersion_Gauss*randomGaussian());        /*coordonnée selon y des sous-foyers*/
  
  for (var i =0 ; i< 2 ; i=i+1){                              /* nombre de carré avec une largeur horizontal*/
    var x = random(-100,100);
    var y = random(-100,100);
    stroke(r1,v1,b1);                                           /* couleur A*/
    noFill();
    rectMode(CENTER);
      for (var j=-largeur ; j<largeur ; j=j+1){
        rect(centre1x+x+j,centre1y+y,100,100,2);
  }}
  for (var i =0 ; i< 2 ; i=i+1){ /*couleur2 largeur vertical*/
    var x2 = random(-100,100);
    var y2 = random(-100,100);
    stroke(255-r1,255-v1,255-b1);                                /*couleur B*/
    noFill();                              
    rectMode(CENTER);
      for (var j=-largeur ; j< largeur ; j=j+1){
        rect(centre1x+x2,centre1y+y2+j,100,100,2);
  }}
}

}

//walkthrough raster : avance indépendemment de position : question de chance
function grid()
{
  setup();
      var r1= random(0,255);
      var v1= random(0,255);
      var b1= random(0,255);      
      
       //découpage espace en 700 px et à chaque px question "est-ce que je crée un carré" 
      for (var j=0 ; j<700 ; j=j+1){
        for (var i =0 ; i<700  ; i=i+1){  
          var c = random(0,100);
          var r = randomGaussian();
          if (r>3.7){
            if (c<50){
              //1 chance /2
              for (var k=-4;  k<4 ; k=k+0.5){
              stroke(r1,v1,b1);                                          
              noFill();
              rectMode(CENTER); 
              //largeur
              rect(200+i+k,200+j,100,100,2);}}
              else {
              //1 chance /2
                for (var k=-4;  k<4 ; k=k+1){
              stroke(255-r1,255-v1,255-b1);                                          
              noFill();
              rectMode(CENTER); 
              rect(200+i,200+j+k,100,100,2);}  }}}
     
    }}


//algo qui part d'un pt 
function simpleGauss()
{
    setup();
    var r1= random(0,255);
    var v1= random(0,255);
    var b1= random(0,255);
    var largeur = random(2,6);
    
  for (var i =0 ; i< 30 ; i=i+1){ /*colour ,  width on horizontal*/
  var x = randomGaussian();
  var y = randomGaussian();
  stroke(r1,v1,b1);
  noFill();
  rectMode(CENTER);
    for (var j=-largeur ; j<largeur ; j=j+1){
      rect(500+(200*x)+j,500+(200*y),100,100,2);
  }
  }
  
  for (var i =0 ; i< 30 ; i=i+1){ /*complementary color ,width on vertical*/
  var x2 = randomGaussian();
  var y2 = randomGaussian();
  stroke(255-r1,255-v1,255-b1);
  noFill();
  rectMode(CENTER);
    for (var j=-largeur ; j< largeur ; j=j+1){
      rect(500+(200*x2),500+(200*y2)+j,100,100,2);
  }}}


  //random pur
  function simpleAlgo()
  {
    

  setup();
  var r1= random(0,255);
  var v1= random(0,255);
  var b1= random(0,255);
  var largeur = random(2,6);
  
for (var i =0 ; i< 30 ; i=i+1){ /*couleur 1 largeur horizontal*/
var x = random(-400,400);
var y = random(-400,400);
stroke(r1,v1,b1);
noFill();
rectMode(CENTER);
  for (var j=-largeur ; j<largeur ; j=j+1){
    rect((width/2)+x+j,(height/2)+y,100,100,2);
}
}


for (var i =0 ; i< 30 ; i=i+1){ /*couleur2 largeur vertical*/
var x2 = random(-400,400);
var y2 = random(-400,400);
stroke(255-r1,255-v1,255-b1);
noFill();
rectMode(CENTER);
  for (var j=-largeur ; j< largeur ; j=j+1){
    rect((width/2)+x2,(height/2)+y2+j,100,100,2);
}
}

  
  
}

    
function addFactor()
{
  if (facteur1 < 100 || facteur2 < 100 || facteur3 < 100 || facteur4 < 100)
  {
    facteur1+=10;
    facteur2+=10;
    facteur3+=10;
    facteur4+=10;
    value.innerHTML = facteur1;
    console.log(facteur1);
  }
  
  else
  {
    alert('Max 100');
  }
}

function addGaussFactor()
{
  if (facteur_Gauss < 200)
  {
  facteur_Gauss+=10;  
  valueGauss.innerHTML = facteur_Gauss;
  }

  else
  {
    alert('Max 200');
  }
}

function removeFactor()
{  
  if (facteur1 >= 20 || facteur2 >= 20 || facteur3 >= 20 || facteur4 >= 20)
  {
    facteur1-=10;
    facteur2-=10;
    facteur3-=10;
    facteur4-=10;
    value.innerHTML = facteur1;
  }
  
  else
  {
    alert('Min 10');
  }

}

function removeGaussFactor()
{  if (facteur_Gauss >= 20)
  {
    facteur_Gauss-=10;
    valueGauss.innerHTML = facteur_Gauss;

  }
  
  else
  {
    alert('Min 10');
  }
  
}

const buttonPlus = document.getElementById('plus');
const buttonMoins = document.getElementById('moins');
const value = document.getElementById('value');
const valueGauss = document.getElementById('valueGauss');
const dispersive = document.getElementById('dispersive');
var graphe = document.createElement("img");
graphe.src = "";
var imageParent = document.getElementById("img_loi");


const button1 = document.getElementById('submitButton');

button1.addEventListener('click', e => {
  dispersive.style.display='block';
  buttonPlus.addEventListener('click', e => {
    
    addFactor();
    randomBicolor();
});
buttonMoins.addEventListener('click', e => {
  removeFactor();
  randomBicolor();
});  

value.style.display='block';
valueGauss.style.display='none';
value.innerHTML = facteur1;

    randomBicolor();

    graphe.src = "./svg/loiNormale.svg";
    imageParent.appendChild(graphe);



});


const button2 = document.getElementById('submitButton2');

button2.addEventListener('click', e => {
  dispersive.style.display='block';

    buttonPlus.addEventListener('click', e => {
      addGaussFactor();
      combiGaussLineaire();   
 
  }); 
  buttonMoins.addEventListener('click', e => {
    value.innerHTML = facteur_Gauss;

    removeGaussFactor();
    combiGaussLineaire();   

}); 
value.style.display='none';
valueGauss.style.display='block';
valueGauss.innerHTML = facteur_Gauss;

  combiGaussLineaire();   
  graphe.src = "./svg/loiNormale.svg";


  
});

const button3 = document.getElementById('submitButton3');

button3.addEventListener('click', e => {
  dispersive.style.display='none';

    grid();    
    graphe.src = "./svg/equiprobable.svg";
    imageParent.appendChild(graphe);


});

const button4 = document.getElementById('submitButton4');

button4.addEventListener('click', e => {
  dispersive.style.display='none';

    simpleGauss();    
    graphe.src = "./svg/loiNormale.svg";
    imageParent.appendChild(graphe);

});


const button5 = document.getElementById('submitButton5');

button5.addEventListener('click', e => {
  dispersive.style.display='none';

    simpleAlgo();    
    graphe.src = "./svg/equiprobable.svg";
    imageParent.appendChild(graphe);
});



