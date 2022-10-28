class Player1 {
 constructor(ctx, ctxWidth, ctxHeight) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight
        
        this.width= 30
        this.height = 50

        this.posx=715
        this.posY=900

        this.playerImg = new Image()
        this.playerImg.src='../Img/car.png'
    }
    draw(){
       this.ctx.drawImage(this.playerImg, this.posx, this.posY, this.width, this.height)
    }
}