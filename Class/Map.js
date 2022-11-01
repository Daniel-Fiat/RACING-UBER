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
                // x , y, x, y
                new Block(this.ctx,this.width,this.height,0,0,170,204),//1
                new Block(this.ctx,this.width,this.height,0,256,246,425),//2
                new Block(this.ctx,this.width,this.height,0,735,246,285),//3
                new Block(this.ctx,this.width,this.height,0,1074,549,6),//4
                new Block(this.ctx,this.width,this.height,230,0,243,204),//5
                new Block(this.ctx,this.width,this.height,306,256,243,494),//6
                new Block(this.ctx,this.width,this.height,306,805,243,215),//7
                new Block(this.ctx,this.width,this.height,530,0,322,70),//8
                new Block(this.ctx,this.width,this.height,530,120,100,85),//9
                new Block(this.ctx,this.width,this.height,607,120,245,290),//10
                new Block(this.ctx,this.width,this.height,607,462,245,425),//11
                new Block(this.ctx,this.width,this.height,607,939,245,140),//12
                new Block(this.ctx,this.width,this.height,908,0,400,70),//13
                new Block(this.ctx,this.width,this.height,908,120,245,152),//14
                new Block(this.ctx,this.width,this.height,908,325,245,208),//15
                new Block(this.ctx,this.width,this.height,908,585,245,180),//16
                new Block(this.ctx,this.width,this.height,908,816,245,138),//17
                new Block(this.ctx,this.width,this.height,908,1005,635,74),//18
                new Block(this.ctx,this.width,this.height,1210,0,245,410),//19
                new Block(this.ctx,this.width,this.height,1210,462,245,220),//20
                new Block(this.ctx,this.width,this.height,1210,735,168,219),//21
                new Block(this.ctx,this.width,this.height,1512,0,35,408),//22
                new Block(this.ctx,this.width,this.height,1512,462,35,220),//23
                new Block(this.ctx,this.width,this.height,1435,735,111,345),

                )
                
            this.routes.push(
                {
                start:new Passengers(this.ctx,this.width,this.height,250,500,20,15),
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
                    start : new LowerTunnel(this.ctx,this.width,this.height,855,1078,50,20),
                    redirect : [870,-15]
                   
                },
                {
                    start : new LowerTunnel(this.ctx,this.width,this.height,553,1078,50,20),
                    redirect : [500,-15]
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