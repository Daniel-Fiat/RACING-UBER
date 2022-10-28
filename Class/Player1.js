class Player1 {
 constructor(ctx, ctxWidth, ctxHeight) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight
        
        this.width= 30
        this.height = 50

        this.posX=950
        this.posY=900

        this.playerImg = new Image()
        this.playerImg.src='../Img/car.png'
        
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
                    this.width = 70
                    this.height= 30
                    this.playerImg.src='../Img/carIzq.png'                   
                    this.left=true                    
                    this.Right=false
                    this.Down=false
                    this.Up=false
                    break;
                case "KeyD":

                    this.width = 70
                    this.height= 30
                    this.playerImg.src='../Img/carDerecha.png'               
                    this.left=false                    
                    this.Right=true
                    this.Down=false
                    this.Up=false

                    break;
                case "KeyS":

                    this.width = 30
                    this.height= 50
                    this.playerImg.src='../Img/carAbajo.png'                    
                    this.left=false                    
                    this.Right=false
                    this.Down=true
                    this.Up=false

                    break;
                case "KeyW":

                    this.width = 30
                    this.height= 50
                    this.playerImg.src='../Img/car.png'                  
                    this.left=false                    
                    this.Right=false
                    this.Down=false
                    this.Up=true
                    break;
            
                default:
                    break;

            }
        })
    }
    move(){
        
        if (this.left===true) {this.posX -=2}
        if (this.Right===true) {this.posX +=2}
        if (this.Down===true) {this.posY +=2}
        if (this.Up===true) {this.posY -=2}
        
    }
}