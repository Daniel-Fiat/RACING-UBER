class Destiny {
    constructor(ctx, ctxWidth, ctxHeight,posX,posY,width,height){
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight
        
        this.posX= posX
        this.posY= posY
        this.width=width
        this.height=height
        this.posYMax= (this.posY + this.height)
        this.posXMax= (this.posX + this.width)

        this.destinyIMG= new Image()
        
    }
    
    draw(img){
        
        this.destinyIMG.src= img
        this.ctx.drawImage(this.destinyIMG, this.posX, this.posY, 25,40 )
    }
}