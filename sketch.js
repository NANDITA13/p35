var dog, dogImg, happyDog, happyDogImg;

var database, foods, foodStock;


function preload() {

  dogImg = loadImage("images/dogImg.png");
  
  happyDogImg = loadImage("images/dogImg1.png");

}

function setup() {

  createCanvas(500, 500);
  
  dog=createSprite(250,250,5,5);
	dog.addImage(dogImg);
  dog.scale=0.2

  

  database=firebase.database ();
  
  var foodRef = database.ref ("food");
  foodRef.on ("value",readStock);
  
}


function draw() { 
  
  background(46, 139, 87);

 if (keyWentDown(UP_ARROW) ) {

    writeStock(foods);

    dog.addImage(happyDogImg);

   }

   drawSprites();

   textSize(20);
   fill("blue");

   text("Press UP_ARROW Key to feed Drago Milk!",80,20)
   text("Food Remaining:"+foods,200,150);



}

 

  

  function readStock (data) {

    foods=data.val();

  }

  function writeStock(x) {

    if(x<=0) {
      x=0;
    }

    else {
      x=x-1;
    }

    database.ref('/').update({
      food:x
    })
    
  }
  





