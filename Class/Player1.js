class Player {
 constructor(ctx, ctxWidth, ctxHeight,carColor,setKey,startPos) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight
        this.carColor = carColor
        this.setKey= setKey
        
        this.width= 25
        this.height = 40

        this.posX = startPos.x
        this.posY = startPos.y
        this.posYMax= undefined
        this.posXMax= undefined

        this.playerImg = new Image()
        this.playerImg.src= carColor.up
        this.PlayerTotalPoints= 0

        this.left=false                    
        this.Right=false
        this.Down=false
        this.Up=false

        this.upKey= undefined
        this.downKey=undefined
        this.leftKey=undefined
        this.rightKey=undefined
        this.stopKey=undefined

        this.startPos=startPos

        this.mission= undefined
        this.missionPoints = undefined

        
        
        this.setEventListeners() 
        this.setPlayerkey()
    }

    draw(){
       this.ctx.drawImage(this.playerImg, this.posX, this.posY, this.width, this.height)
       this.move() 
       this.position()
       if (this.mission){this.mission.draw()}
       
    
      
      
    }

   setEventListeners(){
        document.addEventListener('keydown', (e) =>{
        switch (e.code) {
                case this.leftKey:
                    this.width = 40
                    this.height= 25
                    this.playerImg.src = this.carColor.left
                    this.left=true                    
                    this.Right=false
                    this.Down=false
                    this.Up=false
                    break;

                case this.rightKey:

                    this.width = 40
                    this.height= 25
                    this.playerImg.src=this.carColor.right
                    this.left=false                    
                    this.Right=true
                    this.Down=false
                    this.Up=false
                    break;

                case this.downKey:

                    this.width = 25
                    this.height= 40
                    this.playerImg.src=this.carColor.down
                    this.left=false                    
                    this.Right=false
                    this.Down=true
                    this.Up=false
                    break;

                case this.upKey:

                    this.width = 25
                    this.height= 40
                    this.playerImg.src=this.carColor.up
                    this.left=false                    
                    this.Right=false
                    this.Down=false
                    this.Up=true
                    break;

                case this.stopKey:
                  
                    this.stop()
                    break;
            
                default:
                    break;

            }
        })
    }

    move(){
        
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
    setPlayerkey(){
        switch (this.setKey) {
            case 1:

                this.leftKey = "KeyA"
                this.rightKey= "KeyD"
                this.downKey= "KeyS"
                this.upKey= "KeyW"
                this.stopKey = "Space"

                break;
            case 2:

                this.leftKey = "ArrowLeft"
                this.rightKey= "ArrowRight"
                this.downKey= "ArrowDown"
                this.upKey= "ArrowUp"
                this.stopKey = "Numpad0"

                break;
        
            default:
                break;
        }
    }
    getfinish(route){
        if (route){
            this.mission = route.finish
            this.missionPoints = route.points
        }

    }

} 