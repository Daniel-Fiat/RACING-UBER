class Player1 {
 constructor(ctx, ctxWidth, ctxHeight,carColor,setKey) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight
        this.carColor = carColor
        this.serKey= setKey
        
        this.width= 25
        this.height = 40

        this.posX=250
        this.posY=500
        this.posYMax= undefined
        this.posXMax= undefined

        this.playerImg = new Image()
        this.playerImg.src= carColor.up

        this.left=false                    
        this.Right=false
        this.Down=false
        this.Up=false
        
        this.move() // SE REPITE
        this.setEventListeners() 
    }

    draw(){
       this.ctx.drawImage(this.playerImg, this.posX, this.posY, this.width, this.height)
       this.move() // SE REPITE
       this.position()
      
    }

   setEventListeners(){
        document.addEventListener('keydown', (e) =>{
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
        // REFACTORIZACIÓN A CORTOCIRCUITO
        if(this.posX-10 > 0 && this.left) this.posX -=3 
        if (this.posX+70 < this.ctxWidth && this.Right) this.posX +=3
        if(this.posY > 0 && this.Up===true) this.posY -=3 
        if(this.posY < 900 && this.Down===true) this.posY +=3
       
    }
    
    stop(){
        this.left=false                    
        this.Right=false
        this.Down=false
        this.Up=false
    }
   
    position(){
        this.posYMax= this.posY + this.height
        this.posXMax= this.posX + this.width
        this.posX=this.posX
        this.posY=this.posY
    }

} 