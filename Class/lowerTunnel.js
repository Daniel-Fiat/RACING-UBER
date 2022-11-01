class LowerTunnel {
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
    }
    
    draw(){
       
        this.ctx.fillRect(this.posX,this.posY,this.width,this.height)
    }
}