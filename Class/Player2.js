class Player2 {
 constructor(ctx, ctxWidth, ctxHeight) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight
        
        this.width= 30 
        this.height = 50

        this.posX=900
        this.posY=500  
        

        this.left=false
        this.Right=false
        this.Down=false
        this.Up=false


        this.velx = 0
        this.vely = 0

        this.playerImg = new Image()
        this.playerImg.src='../Img/car.png'

        this.move()
        this.EventListeners()
        
    }
    
    draw(){
        this.ctx.drawImage(this.playerImg, this.posX, this.posY, this.width, this.height)
        this.move()
    }
    
    EventListeners(){
        document.addEventListener('keydown', (e)=>{
            
        switch (e.code) {
                case "ArrowLeft":
                    this.width = 50
                    this.height= 30
                    this.playerImg.src='../Img/carIzq.png'
                    this.left=true                    
                    this.Right=false
                    this.Down=false
                    this.Up=false
                    break;
                case "ArrowRight":

                    this.width = 50
                    this.height= 30
                    this.playerImg.src='../Img/carDerecha.png'
                    this.left=false                    
                    this.Right=true
                    this.Down=false
                    this.Up=false

                    break;
                case "ArrowDown":

                    this.width = 30
                    this.height= 50
                    this.playerImg.src='../Img/carAbajo.png'
                    this.left=false                    
                    this.Right=false
                    this.Down=true
                    this.Up=false

                    break;
                case "ArrowUp":

                    this.width = 30
                    this.height= 50
                    this.playerImg.src='../Img/car.png'
                    this.left=false                    
                    this.Right=false
                    this.Down=false
                    this.Up=true
                    break;
                case "Numpad0":
                    this.left=false                    
                    this.Right=false
                    this.Down=false
                    this.Up=false
                    break;
            
                default:
                    break;

                }
            })
        }
        move(){
            if(this.posX-10 > 0 ){if (this.left===true) {this.posX -=4;} }
            if (this.posX+70 < this.ctxWidth){if (this.Right===true) {this.posX +=4} }
            if(this.posY > 0){ if (this.Up===true) {this.posY -=4}}
            if(this.posY < 900) {if (this.Down===true) {this.posY +=4}}
            
        }
    }