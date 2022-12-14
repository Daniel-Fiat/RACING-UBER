class Player {
 constructor(ctx, ctxWidth, ctxHeight,carColor,setKey,startPos,missionImg) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight
        this.carColor = carColor
        this.setKey= setKey
        
        this.width= 30
        this.height = 20

        this.posX = startPos.x
        this.posY = startPos.y
        this.posYMax= undefined
        this.posXMax= undefined

        this.playerImg = new Image()
        this.playerImg.src= carColor.left
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
        this.missionImg= missionImg

        
        
        this.setEventListeners() 
        this.setPlayerkey()
    }

    draw(){
       this.ctx.drawImage(this.playerImg, this.posX, this.posY, this.width, this.height)
       this.move() 
       this.position()
      
       if (this.mission){this.mission.draw(this.missionImg)}
       
    
      
      
    }

   setEventListeners(){
        document.addEventListener('keydown', (e) =>{
            
        switch (e.code) {
                case this.leftKey:
                    this.width = 30
                    this.height= 20
                    this.playerImg.src = this.carColor.left
                    this.left=true                    
                    this.Right=false
                    this.Down=false
                    this.Up=false
                    break;

                case this.rightKey:

                    this.width = 30
                    this.height= 20
                    this.playerImg.src=this.carColor.right
                    this.left=false                    
                    this.Right=true
                    this.Down=false
                    this.Up=false
                    break;

                case this.downKey:

                    this.width = 20
                    this.height= 30
                    this.playerImg.src=this.carColor.down
                    this.left=false                    
                    this.Right=false
                    this.Down=true
                    this.Up=false
                    break;

                case this.upKey:

                    this.width = 20
                    this.height= 30
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
        
        if(this.left) this.posX -=3
        if(this.ctxWidth && this.Right) this.posX +=3
        if(this.Up===true) this.posY -=3
        if(this.Down===true) this.posY +=3
       
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
                this.stopKey = "ControlRight"

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