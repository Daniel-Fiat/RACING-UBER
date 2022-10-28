class Player1 {
 constructor(ctx, ctxWidth, ctxHeight) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight
        
        this.width= 30
        this.height = 50

        this.posX=900
        this.posY=900

        this.playerImg = new Image()
        this.playerImg.src='../Img/car.png'
        
        this.EventListeners()
    }
    draw(){
       this.ctx.drawImage(this.playerImg, this.posX, this.posY, this.width, this.height)
}
      EventListeners(){
        document.addEventListener('keydown', (e)=>{
         console.log(e.code)
            switch (e.code) {
               
                case "KeyA":
                    this.width = 70
                    this.height= 30
                    this.playerImg.src='../Img/carIzq.png'
                    this.posX -=10
                    break;
                case "KeyD":

                    this.width = 70
                    this.height= 30
                    this.playerImg.src='../Img/carDerecha.png'
                    this.posX +=10

                    break;
                case "KeyS":

                    this.width = 30
                    this.height= 50
                    this.playerImg.src='../Img/carAbajo.png'
                    this.posY +=10

                    break;
                case "KeyW":

                    this.width = 30
                    this.height= 50
                    this.playerImg.src='../Img/car.png'
                    this.posY -=10

                    break;
            
                default:
                    break;

            }
        })
    }
    move(){
       
    }
}