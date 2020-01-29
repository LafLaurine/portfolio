const expli = document.querySelector('.expli');

button1.addEventListener('click', e => {
    expli.innerHTML = "This algorithm use random gaussian dispersion. In fact, we use differents Gauss factors of dispersion. That's why we separated the canvas into 4 parts : we generate a different factor for each parts. That means that squares in top corner left aren't displayed with the same factor as bottom corner right.";
});



button2.addEventListener('click', e => {
  expli.innerHTML = "In this algorithm we define randomly, thanks to Gauss, 4 sub-sources/homes. We define coordinates according to X and Y for the sub-homes. Squares are placed randomly according to these homes. In addition to all of this, the artwork is not created uniformly. We treat the algorithm vertically and horizontally.";

  }); 
 

button3.addEventListener('click', e => {
  expli.innerHTML = "This algorithm was created in order to get closer to the method of the Frieder Nake Walktrough Raster. We have tried to think better of the dispersion according to the probability and to distribute the squares according to a equiprobable probability. If the random 'dispersive factor' (between 0 and 100) is less than 50, then the squares are distributed. The same goes for the rest, both are 50% chance.";
});


button4.addEventListener('click', e => {
   expli.innerHTML = "This algorithm corresponds to the first time we used the Gaussian distribution. The algorithm is divided into two parts: a treatment of the horizontal squares and a treatment of the vertical squares. But concretely, they are placed under the same algorithm. Indeed, two random Gaussian are defined according to x and according to y. Thanks to this, we can randomly distrub the squares in their space";
});


button5.addEventListener('click', e => {   
  expli.innerHTML = "This is the very first algorithm we have created. Again we base ourselves on a cut of the space horizontally and vertically. Horizontally, two randoms based on x and y are created and the squares are scattered randomly in this space, starting from the center of the canvas. It is the same vertically.";
});