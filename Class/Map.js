class Map {
  constructor(ctx, ctxWidth, ctxHeight,numMap) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight
        this.numMap = numMap

        this.blockMap = []
        this.routes=[]
        this.tunelsLeft= []
        this.tunelRigth=[]
        this.tunelsLower=[]
        this.tunelUpper=[]
        
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
                start:new Passengers(this.ctx,this.width,this.height,730,500,20,20),
                finish:new Destiny(this.ctx,this.width,this.height,650,10,20,20),
                points:250
                },
                {
                start:new Passengers(this.ctx,this.width,this.height,950,700,20,20),
                finish:new Destiny(this.ctx,this.width,this.height,10,700,20,20),
                points:380
                },
                {
                start:new Passengers(this.ctx,this.width,this.height,100,900,20,20),
                finish:new Destiny(this.ctx,this.width,this.height,250,10,20,20),
                points:500
                },
              
            )
            this.tunelsLower.push(
                {
                    start : new LowerTunnel(this.ctx,this.width,this.height,710,910,40,5),
                    redirect : [655,0]
                }
            )
            this.tunelUpper.push(
                {
                    start : new LowerTunnel(this.ctx,this.width,this.height,100,250,40,20),
                    redirect : [630,0]
                }
            )
            this.tunelRigth.push(
                {
                    start : new LowerTunnel(this.ctx,this.width,this.height,100,250,15,15),
                    redirect : [100,500]
                }
            )
            this.tunelsLeft.push(
                {
                    start : new LowerTunnel(this.ctx,this.width,this.height,10,50,15,15),
                    redirect : [500,100]
                }
            )
             break;
    
        default:
            break;
    }
   }

}