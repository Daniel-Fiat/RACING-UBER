class Player2 {
 constructor(ctx, ctxWidth, ctxHeight) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight
        
        this.width= 30 
        this.height = 50

        this.posx=900
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
        this.ctx.drawImage(this.playerImg, this.posx, this.posY, this.width, this.height)
        this.move()
    }
    
    EventListeners(){
        document.addEventListener('keydown', (e)=>{
            console.log(e.code)
        switch (e.code) {
                case "ArrowLeft":
                    this.width = 70
                    this.height= 30
                    this.playerImg.src='../Img/carIzq.png'
                    this.left=true                    
                    this.Right=false
                    this.Down=false
                    this.Up=false
                    break;
                case "ArrowRight":

                    this.width = 70
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
            if (this.left===true) {this.posx -=2}
            if (this.Right===true) {this.posx +=2}
            if (this.Down===true) {this.posY +=2}
            if (this.Up===true) {this.posY -=2}
            
        }
    }