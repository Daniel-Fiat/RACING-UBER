class Block {
    constructor(ctx, ctxWidth, ctxHeight,posX,posY,whidth,height){

        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight
        
        this.posX= posX
        this.posY= posY
        this.whidth=whidth
        this.height=height
        this.posYMax= (this.posY + this.height)
        this.posXMax= (this.posX + this.whidth)
       
    }
    
    draw(){
        this.ctx.clearRect(this.posX,this.posY,this.whidth,this.height)
        
    }
}