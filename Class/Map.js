class Map {
  constructor(ctx, ctxWidth, ctxHeight,numMap) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight
        this.blockMap = []
        this.routes=[]
        this.numMap = numMap
        this.setMap()
  }
   setMap(){
    switch (this.numMap) {
        case 1:
            this.blockMap.push(
                new Block(this.ctx,this.width,this.height,60,55,170,171),
                new Block(this.ctx,this.width,this.height,60,290,175,171),
                new Block(this.ctx,this.width,this.height,60,525,175,353),
                new Block(this.ctx,this.width,this.height,294,0,115,171),
                new Block(this.ctx,this.width,this.height,292,230,175,355),
                new Block(this.ctx,this.width,this.height,293,642,175,235),
                new Block(this.ctx,this.width,this.height,467,0,185,177),
                new Block(this.ctx,this.width,this.height,520,225,185,423),
                new Block(this.ctx,this.width,this.height,520,695,185,187),
                new Block(this.ctx,this.width,this.height,695,0,243,176),
                new Block(this.ctx,this.width,this.height,753,176,185,179),
                new Block(this.ctx,this.width,this.height,753,401,185,365),
                new Block(this.ctx,this.width,this.height,753,813,185,120),
                new Block(this.ctx,this.width,this.height,985,0,240,60),
                new Block(this.ctx,this.width,this.height,1219,0,185,177),
                new Block(this.ctx,this.width,this.height,985,108,185,127),
                new Block(this.ctx,this.width,this.height,985,283,185,540),
                new Block(this.ctx,this.width,this.height,985,871,476,61),
                new Block(this.ctx,this.width,this.height,1218,225,186,130),
                new Block(this.ctx,this.width,this.height,1218,401,186,189),
                new Block(this.ctx,this.width,this.height,1218,637,125,187),
                new Block(this.ctx,this.width,this.height,1395,637,65,240)
                )
            this.routes.push(
                {
                start:new Block(this.ctx,this.width,this.height,700,500,20,20),
                finish:new Block(this.ctx,this.width,this.height,700,10,20,20),
                points:500
                },
                {
                start:new Block(this.ctx,this.width,this.height,700,700,20,20),
                finish:new Block(this.ctx,this.width,this.height,10,700,20,20),
                points:500
                },
                {
                start:new Block(this.ctx,this.width,this.height,700,900,20,20),
                finish:new Block(this.ctx,this.width,this.height,100,10,20,20),
                points:500
                },
              
            )
             break;
    
        default:
            break;
    }
   }

}