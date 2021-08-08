var player,playerImg
var jf,jfImg
var hf,hfImg
var back,backImg
var up 
var down
var gameState = "PLAY"
var score  = 0

function preload(){
	backImg = loadImage("jungle.jpg")
	playerImg = loadAnimation("a.png","b.png","c.png")
	jfImg = loadImage("jf-removebg-preview.png")
	hfImg = loadImage("hf-removebg-preview.png")

}

function setup(){
	createCanvas(windowWidth,windowHeight)
	back = createSprite(750,150,2000,600)
	back.scale = 2
	back.addImage(backImg)

	player = createSprite(250,350,50,100)
	//player.shapeColor = "red"
	player.scale = 1.5
	player.addAnimation("img",playerImg)

	jf = createSprite(850,450,35,35)
	jf.scale = 0.5
	//jf.shapeColor = "brown"
	jf.velocityX = -5
	jf.addImage(jfImg)

	
	hf = createSprite(850,300,35,35)
	hf.scale = 0.4
	//hf.shapeColor = "green"
	hf.velocityX = -5
	hf.addImage(hfImg)

	up = createSprite(750,0,2000,10)
	up.visible = false
	

	down = createSprite(750,850,2000,10)
	down.visible = false

	
}

function draw(){
	
	background(255)

	textSize(20)
	text(score,200,150) 
	
	

	if(gameState === "PLAY"){

	if(player.isTouching(hf)){
		score = +10
	}

	
	if(frameCount%90 - 35 === 0){
		jf = createSprite(850,400,35,35)
		jf.scale = 0.4
		//jf.shapeColor = "brown"
		jf.velocityX = -5
		jf.addImage(jfImg)
		
	}
	

	if(frameCount%85 - 50 === 0){
		hf = createSprite(850,250,35,35)
		hf.scale = 0.5
		//hf.shapeColor = "green"
		hf.velocityX = -5
		hf.addImage(hfImg)
	}

	

	if(player.x > 1000 ){
		player.x = 250
	}

	player.velocityX = +5

	if(keyDown("UP_ARROW")){
		player.velocityY = -5
		
	}

	if(keyDown("DOWN_ARROW")){
		player.velocityY = +5
		
	}
	player.y = player.y + 2

	

	drawSprites();
	
	
   
}

   if(player.isTouching(jf)){
	   player.velocityX = 0
	   jf.velocityX = 0
	   hf.velocityX = 0
	   gameState = "END"
   }

   if(player.isTouching(up)){
	   player.velocityX = 0
	   jf.velocityX = 0
	   hf.velocityX = 0
	   gameState = "END"
   }

   if(player.isTouching(down)){
	   player.velocityX = 0
	   jf.velocityX = 0
	   hf.velocityX = 0
	   gameState = "END"
}


   if(gameState === "END"){
	   background(0)
	   textSize(75)
	   fill(255)
	   text("GAME OVER",500,250)
   }


}