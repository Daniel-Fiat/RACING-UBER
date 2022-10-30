class Player1 {
 constructor(ctx, ctxWidth, ctxHeight,carColor) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight
       this.carColor = carColor
        
        this.width= 25
        this.height = 40

        this.posX=0
        this.posY=0

        this.playerImg = new Image()
        this.playerImg.src= carColor.up
        
        this.EventListeners()
    }
    draw(){
       this.ctx.drawImage(this.playerImg, this.posX, this.posY, this.width, this.height)
       this.move()
      
     
}
   EventListeners(){
        document.addEventListener('keydown', (e)=>{
        switch (e.code) {
                case "KeyA":
                    this.width = 40
                    this.height= 25
                    this.playerImg.src = this.carColor.left
                    this.left=true                    
                    this.Right=false
                    this.Down=false
                    this.Up=false
                    break;
                case "KeyD":

                    this.width = 40
                    this.height= 25
                    this.playerImg.src=this.carColor.right
                    this.left=false                    
                    this.Right=true
                    this.Down=false
                    this.Up=false

                    break;
                case "KeyS":

                    this.width = 25
                    this.height= 40
                    this.playerImg.src=this.carColor.down
                    this.left=false                    
                    this.Right=false
                    this.Down=true
                    this.Up=false

                    break;
                case "KeyW":

                    this.width = 25
                    this.height= 40
                    this.playerImg.src=this.carColor.up
                    this.left=false                    
                    this.Right=false
                    this.Down=false
                    this.Up=true
                    break;

                case "Space":
                  
                    this.stop()
                    break;
            
                default:
                    break;

            }
        })
    }
    move(){
        
        if(this.posX-10 > 0 ){if (this.left===true) {this.posX -=3;} }
        if (this.posX+70 < this.ctxWidth){if (this.Right===true) {this.posX +=3} }
        if(this.posY > 0){ if (this.Up===true) {this.posY -=3}}
        if(this.posY < 900) {if (this.Down===true) {this.posY +=3}}
       
    }
    stop(){
        this.left=false                    
        this.Right=false
        this.Down=false
        this.Up=false
    }
} 