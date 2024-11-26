squares = [];

function setup() {
  createCanvas(500, 500);
  
  
  let index = 0
  
  for (let i=0; i<5; i++){
    for (let j=0; j<5; j++){
      
      let x = i*100 + 10
      let y = j*100 + 10
      let s = 80
      
      squares[index] = new Square (x,y,s)
      index++;
      
     // blendMode(MULTIPLY);
      background(255);
    }
  }
}

function draw() {
  
  
  for(i=0; i<squares.length; i++){
  
  squares[i].show();
  squares[i].move();
   
    
  }
  
}

class Square{

  constructor (x, y, s){
    this.x = x
    this.y = y
    this.s = s
  }
  
  show(){
    
    fill(random (100-255), random(200,255), random(200, 255), 100);
    noStroke();
    square (this.x, this.y, this.s);
    
    
  }
  
  move(){
    this.x += random(-5,5);
    this.y += random(-5,5);
   
  }
  
  }